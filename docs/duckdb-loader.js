/**
 * DuckDB-WASM Vocabulary Loader
 *
 * Loads OHDSI Athena vocabulary CSV files into an in-memory DuckDB database.
 * Files are NOT copied into browser memory — DuckDB reads them on demand
 * via FileSystemFileHandle (BROWSER_FILEREADER protocol).
 *
 * Chrome/Edge: showDirectoryPicker() → zero-copy streaming from disk
 * Firefox: <input webkitdirectory> fallback (files loaded into memory)
 *
 * FileSystemFileHandles are stored in IndexedDB so that on future visits,
 * the user only needs to re-grant permission (no re-import needed).
 *
 * DuckDB-WASM is loaded lazily via dynamic import() on first use.
 * Requires HTTP/HTTPS (won't work from file://).
 *
 * Exposes window.VocabDB for use by other scripts.
 */
(function () {
  'use strict';

  var DUCKDB_ESM_URL = 'https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.29.0/+esm';

  var REQUIRED_FILES = [
    'CONCEPT.csv',
    'CONCEPT_ANCESTOR.csv',
    'CONCEPT_RELATIONSHIP.csv',
    'CONCEPT_SYNONYM.csv',
    'RELATIONSHIP.csv',
    'VOCABULARY.csv',
    'DOMAIN.csv',
    'CONCEPT_CLASS.csv'
  ];
  var OPTIONAL_FILES = ['DRUG_STRENGTH.csv'];

  var duckdbLib = null;
  var db = null;
  var conn = null;

  /* ── helpers ──────────────────────────────────────────── */

  function tableName(csvFilename) {
    return csvFilename.replace('.csv', '').toLowerCase();
  }

  /* ── IndexedDB for file handle persistence ──────────── */

  function openHandleDB() {
    return new Promise(function (resolve, reject) {
      var req = indexedDB.open('vocab_handles', 2);
      req.onupgradeneeded = function () {
        var idb = req.result;
        if (!idb.objectStoreNames.contains('handles')) {
          idb.createObjectStore('handles');
        }
        if (!idb.objectStoreNames.contains('file_handles')) {
          idb.createObjectStore('file_handles');
        }
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }

  function storeDirectoryHandle(handle) {
    return openHandleDB().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var tx = idb.transaction('handles', 'readwrite');
        tx.objectStore('handles').put(handle, 'vocab_dir');
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  function getStoredDirectoryHandle() {
    return openHandleDB().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var tx = idb.transaction('handles', 'readonly');
        var req = tx.objectStore('handles').get('vocab_dir');
        req.onsuccess = function () { resolve(req.result || null); };
        req.onerror = function () { reject(req.error); };
      });
    });
  }

  /** Store individual FileSystemFileHandles keyed by CSV filename */
  function storeFileHandles(fileHandlesMap) {
    return openHandleDB().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var tx = idb.transaction('file_handles', 'readwrite');
        var store = tx.objectStore('file_handles');
        var names = Object.keys(fileHandlesMap);
        for (var i = 0; i < names.length; i++) {
          store.put(fileHandlesMap[names[i]], names[i]);
        }
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  /** Retrieve all stored FileSystemFileHandles */
  function getStoredFileHandles() {
    return openHandleDB().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var tx = idb.transaction('file_handles', 'readonly');
        var store = tx.objectStore('file_handles');
        var result = {};
        var cursorReq = store.openCursor();
        cursorReq.onsuccess = function () {
          var cursor = cursorReq.result;
          if (cursor) {
            result[cursor.key] = cursor.value;
            cursor.continue();
          } else {
            resolve(result);
          }
        };
        cursorReq.onerror = function () { reject(cursorReq.error); };
      });
    });
  }

  function clearAllHandles() {
    return openHandleDB().then(function (idb) {
      return new Promise(function (resolve, reject) {
        var tx = idb.transaction(['handles', 'file_handles'], 'readwrite');
        tx.objectStore('handles').clear();
        tx.objectStore('file_handles').clear();
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  /* ── DuckDB lazy loading + init ────────────────────── */

  function loadDuckDBLib() {
    if (duckdbLib) return Promise.resolve(duckdbLib);

    if (window.location.protocol === 'file:') {
      return Promise.reject(new Error(
        'DuckDB-WASM requires HTTP/HTTPS. Please serve this page with a local server: python3 -m http.server 8000 --directory docs'
      ));
    }

    return import(DUCKDB_ESM_URL).then(function (mod) {
      duckdbLib = mod;
      return duckdbLib;
    });
  }

  function initDuckDB() {
    if (db) return Promise.resolve(db);

    return loadDuckDBLib().then(function (lib) {
      var bundles = lib.getJsDelivrBundles();
      return lib.selectBundle(bundles);
    }).then(function (bundle) {
      var logger = new duckdbLib.ConsoleLogger();
      /* Create worker via Blob URL to avoid cross-origin restrictions */
      var workerUrl = URL.createObjectURL(
        new Blob(['importScripts("' + bundle.mainWorker + '");'], { type: 'text/javascript' })
      );
      var worker = new Worker(workerUrl);
      var asyncDb = new duckdbLib.AsyncDuckDB(logger, worker);
      return asyncDb.instantiate(bundle.mainModule).then(function () {
        URL.revokeObjectURL(workerUrl);
        return asyncDb;
      });
    }).then(function (asyncDb) {
      /* In-memory database — file data is streamed from handles on demand */
      return asyncDb.open({ path: ':memory:' }).then(function () {
        return asyncDb;
      });
    }).then(function (asyncDb) {
      db = asyncDb;
      return db.connect();
    }).then(function (c) {
      conn = c;
      return db;
    });
  }

  /* ── Status check ────────────────────────────────────── */

  function isDatabaseReady() {
    if (!conn) return Promise.resolve(false);
    return conn.query("SELECT table_name FROM information_schema.tables WHERE table_schema='main'")
      .then(function (result) {
        var tables = resultToArray(result).map(function (r) { return r.table_name; });
        var required = REQUIRED_FILES.map(function (f) { return tableName(f); });
        var missing = required.filter(function (t) {
          return tables.indexOf(t) === -1;
        });
        return missing.length === 0;
      })
      .catch(function () { return false; });
  }

  /* ── Arrow result → JS objects ───────────────────────── */

  function resultToArray(result) {
    var rows = [];
    var numCols = result.schema.fields.length;
    var cols = [];
    for (var c = 0; c < numCols; c++) {
      cols.push({ name: result.schema.fields[c].name, data: result.getChildAt(c) });
    }
    for (var r = 0; r < result.numRows; r++) {
      var row = {};
      for (var c2 = 0; c2 < numCols; c2++) {
        row[cols[c2].name] = cols[c2].data.get(r);
      }
      rows.push(row);
    }
    return rows;
  }

  /* ── Register file handles with DuckDB ────────────────── */

  /**
   * Register CSV file handles with DuckDB using BROWSER_FILEREADER.
   * This is zero-copy: DuckDB streams data on demand, files are NOT
   * loaded entirely into memory.
   */
  function registerFileHandlesWithDuckDB(fileHandlesMap) {
    var chain = Promise.resolve();
    var names = Object.keys(fileHandlesMap);
    names.forEach(function (name) {
      chain = chain.then(function () {
        return fileHandlesMap[name].getFile().then(function (file) {
          return db.registerFileHandle(
            name,
            file,
            duckdbLib.DuckDBDataProtocol.BROWSER_FILEREADER,
            true /* directIO */
          );
        });
      });
    });
    return chain;
  }

  /* ── Import: create tables from registered files ──────── */

  /**
   * Create VIEWs (not tables) over the registered CSV files.
   * Views are lazy — DuckDB reads the CSV on demand at query time,
   * so nothing is materialized in memory.
   */
  function createViewsFromFiles(fileNames, onProgress) {
    var done = 0;
    var total = fileNames.length;
    var importChain = Promise.resolve();

    fileNames.forEach(function (name) {
      importChain = importChain.then(function () {
        var tbl = tableName(name);
        onProgress({ file: name, table: tbl, step: 'importing', done: done, total: total });

        return conn.query("DROP VIEW IF EXISTS " + tbl).then(function () {
          return conn.query(
            "CREATE VIEW " + tbl + " AS SELECT * FROM read_csv('" + name +
            "', delim='\\t', header=true, quote='', auto_detect=true, sample_size=100000)"
          );
        }).then(function () {
          done++;
          onProgress({ file: name, table: tbl, step: 'done', done: done, total: total });
        });
      });
    });

    return importChain.then(function () { return total; });
  }

  /* ── Import from directory handle (Chrome/Edge) ──────── */

  function importFromDirectory(dirHandle, onProgress) {
    onProgress = onProgress || function () {};

    var fileHandlesMap = {};
    var validationChain = Promise.resolve();

    REQUIRED_FILES.forEach(function (name) {
      validationChain = validationChain.then(function () {
        return dirHandle.getFileHandle(name).then(function (fh) {
          fileHandlesMap[name] = fh;
        });
      });
    });

    OPTIONAL_FILES.forEach(function (name) {
      validationChain = validationChain.then(function () {
        return dirHandle.getFileHandle(name).then(function (fh) {
          fileHandlesMap[name] = fh;
        }).catch(function () { /* optional */ });
      });
    });

    return validationChain
      .then(function () {
        return initDuckDB();
      })
      .then(function () {
        /* Register file handles — zero-copy, DuckDB streams on demand */
        return registerFileHandlesWithDuckDB(fileHandlesMap);
      })
      .then(function () {
        return createViewsFromFiles(Object.keys(fileHandlesMap), onProgress);
      })
      .then(function (total) {
        /* Store handles in IndexedDB for future sessions */
        return storeDirectoryHandle(dirHandle).catch(function () {})
          .then(function () {
            return storeFileHandles(fileHandlesMap).catch(function () {});
          })
          .then(function () {
            onProgress({ file: null, table: null, step: 'complete', done: total, total: total });
          });
      });
  }

  /* ── Import from FileList (Firefox fallback) ─────────── */

  function importFromFiles(fileList, onProgress) {
    onProgress = onProgress || function () {};

    var fileMap = {};
    for (var i = 0; i < fileList.length; i++) {
      var f = fileList[i];
      var name = f.name;
      if (REQUIRED_FILES.indexOf(name) !== -1 || OPTIONAL_FILES.indexOf(name) !== -1) {
        fileMap[name] = f;
      }
    }

    var missing = REQUIRED_FILES.filter(function (n) { return !fileMap[n]; });
    if (missing.length > 0) {
      return Promise.reject(new Error('Missing required files: ' + missing.join(', ')));
    }

    var filesToImport = Object.keys(fileMap);
    var total = filesToImport.length;
    var done = 0;

    return initDuckDB().then(function () {
      /* Firefox: register File objects via BROWSER_FILEREADER (still zero-copy) */
      var regChain = Promise.resolve();
      filesToImport.forEach(function (name) {
        regChain = regChain.then(function () {
          return db.registerFileHandle(
            name,
            fileMap[name],
            duckdbLib.DuckDBDataProtocol.BROWSER_FILEREADER,
            true
          );
        });
      });
      return regChain;
    }).then(function () {
      return createViewsFromFiles(filesToImport, onProgress);
    }).then(function (total) {
      onProgress({ file: null, table: null, step: 'complete', done: total, total: total });
    });
  }

  /* ── Remount from stored handles (future sessions) ───── */

  /**
   * Try to remount CSV files from stored FileSystemFileHandles.
   * Returns true if all required files were successfully mounted.
   */
  function remountFromStoredHandles() {
    return getStoredFileHandles().then(function (handles) {
      var names = Object.keys(handles);
      if (names.length === 0) return false;

      /* Check we have all required files */
      var required = REQUIRED_FILES.map(function (f) { return f; });
      var missing = required.filter(function (n) { return !handles[n]; });
      if (missing.length > 0) return false;

      /* Request permissions for all handles */
      var permChain = Promise.resolve(true);
      names.forEach(function (name) {
        permChain = permChain.then(function (allGranted) {
          if (!allGranted) return false;
          return handles[name].queryPermission({ mode: 'read' }).then(function (status) {
            if (status === 'granted') return true;
            if (status === 'prompt') {
              return handles[name].requestPermission({ mode: 'read' }).then(function (result) {
                return result === 'granted';
              });
            }
            return false;
          });
        });
      });

      return permChain.then(function (allGranted) {
        if (!allGranted) return false;
        return registerFileHandlesWithDuckDB(handles).then(function () {
          return createViewsFromFiles(names, function () {}).then(function () {
            return true;
          });
        });
      });
    }).catch(function () {
      return false;
    });
  }

  /* ── Stats ───────────────────────────────────────────── */

  function getStats() {
    if (!conn) return Promise.resolve(null);
    return conn.query("SELECT table_name, table_type FROM information_schema.tables WHERE table_schema='main'")
      .then(function (result) {
        var rows = resultToArray(result);
        var stats = {};
        for (var i = 0; i < rows.length; i++) {
          stats[rows[i].table_name] = rows[i].table_type; /* 'VIEW' or 'BASE TABLE' */
        }
        return stats;
      });
  }

  /* ── Query ───────────────────────────────────────────── */

  function query(sql) {
    if (!conn) return Promise.reject(new Error('Database not initialized'));
    return conn.query(sql).then(function (result) {
      return resultToArray(result);
    });
  }

  /* ── Lookup concepts ─────────────────────────────────── */

  function lookupConcepts(conceptIds) {
    if (!conn || !conceptIds || conceptIds.length === 0) return Promise.resolve([]);
    var idList = conceptIds.join(',');
    return query(
      "SELECT concept_id, concept_name, vocabulary_id, domain_id, concept_class_id, concept_code, standard_concept " +
      "FROM concept WHERE concept_id IN (" + idList + ")"
    );
  }

  /* ── Delete database ─────────────────────────────────── */

  function deleteDatabase() {
    var chain = Promise.resolve();
    if (conn) {
      chain = chain.then(function () {
        return conn.close().then(function () { conn = null; });
      });
    }
    if (db) {
      chain = chain.then(function () {
        return db.terminate().then(function () { db = null; });
      });
    }
    chain = chain.then(function () {
      return clearAllHandles().catch(function () {});
    });
    return chain;
  }

  /* ── Public API ──────────────────────────────────────── */

  window.VocabDB = {
    REQUIRED_FILES: REQUIRED_FILES,
    OPTIONAL_FILES: OPTIONAL_FILES,
    initDuckDB: initDuckDB,
    isDatabaseReady: isDatabaseReady,
    importFromDirectory: importFromDirectory,
    importFromFiles: importFromFiles,
    remountFromStoredHandles: remountFromStoredHandles,
    getStoredFileHandles: getStoredFileHandles,
    getStats: getStats,
    query: query,
    lookupConcepts: lookupConcepts,
    deleteDatabase: deleteDatabase,
    getStoredDirectoryHandle: getStoredDirectoryHandle,
    storeDirectoryHandle: storeDirectoryHandle,
    tableName: tableName
  };
})();
