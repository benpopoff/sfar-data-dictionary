/**
 * General Settings page — OHDSI Vocabulary import via DuckDB-WASM
 */
(function () {
  'use strict';

  /* ── DOM refs ──────────────────────────────────────── */
  var statusPanel   = document.getElementById('vocab-status-panel');
  var statusIcon    = document.getElementById('vocab-status-icon');
  var statusTitle   = document.getElementById('vocab-status-title');
  var statusMsg     = document.getElementById('vocab-status-msg');

  var btnSelectFolder = document.getElementById('vocab-select-folder');
  var btnRegrant      = document.getElementById('vocab-regrant');
  var btnDeleteDb     = document.getElementById('vocab-delete-db');
  var fileInput       = document.getElementById('vocab-file-input');

  var progressSection = document.getElementById('vocab-progress-section');
  var progressLabel   = document.getElementById('vocab-progress-label');
  var progressPct     = document.getElementById('vocab-progress-pct');
  var progressFill    = document.getElementById('vocab-progress-fill');
  var fileListEl      = document.getElementById('vocab-file-list');

  var statsSection = document.getElementById('vocab-stats-section');
  var statsGrid    = document.getElementById('vocab-stats-grid');

  var sqlSection = document.getElementById('vocab-sql-section');
  var sqlInput   = document.getElementById('vocab-sql-input');
  var sqlRunBtn  = document.getElementById('vocab-sql-run');
  var sqlResult  = document.getElementById('vocab-sql-result');

  var deleteModal      = document.getElementById('confirm-delete-db-modal');
  var deleteModalClose = document.getElementById('confirm-delete-db-close');
  var deleteModalCancel = document.getElementById('confirm-delete-db-cancel');
  var deleteModalOk    = document.getElementById('confirm-delete-db-ok');

  var supportsDirectoryPicker = !!window.showDirectoryPicker;

  /* ── Status display helpers ────────────────────────── */

  function setStatus(type, msg) {
    statusPanel.className = 'vocab-status-panel vocab-status-' + type;
    var iconMap = {
      loading: 'fas fa-spinner fa-spin',
      ready:   'fas fa-check-circle',
      error:   'fas fa-times-circle',
      empty:   'fas fa-database'
    };
    statusIcon.innerHTML = '<i class="' + (iconMap[type] || iconMap.empty) + '"></i>';
    statusMsg.textContent = msg;
  }

  function showButtons(selectFolder, regrant, deleteDb) {
    btnSelectFolder.style.display = selectFolder ? '' : 'none';
    btnRegrant.style.display = regrant ? '' : 'none';
    btnDeleteDb.style.display = deleteDb ? '' : 'none';
  }

  /* ── Format numbers ────────────────────────────────── */

  function fmtNumber(n) {
    if (n === null || n === undefined) return '—';
    return n.toLocaleString();
  }

  /* ── Stats display ─────────────────────────────────── */

  function showStats(stats) {
    if (!stats) { statsSection.style.display = 'none'; return; }
    var html = '';
    var tables = Object.keys(stats).sort();
    for (var i = 0; i < tables.length; i++) {
      html += '<div class="vocab-stat-card">' +
        '<div class="vocab-stat-name">' + App.escapeHtml(tables[i]) + '</div>' +
        '<div class="vocab-stat-count"><i class="fas fa-check-circle" style="color:var(--success)"></i> linked</div>' +
        '</div>';
    }
    statsGrid.innerHTML = html;
    statsSection.style.display = '';
  }

  /* ── Progress display ──────────────────────────────── */

  function initFileList() {
    var files = VocabDB.REQUIRED_FILES.concat(VocabDB.OPTIONAL_FILES);
    var html = '';
    for (var i = 0; i < files.length; i++) {
      html += '<div class="vocab-file-item" id="file-' + files[i].replace('.csv', '') + '">' +
        '<i class="fas fa-clock vocab-file-icon"></i> ' +
        '<span class="vocab-file-name">' + files[i] + '</span>' +
        '</div>';
    }
    fileListEl.innerHTML = html;
  }

  function updateFileStatus(filename, status) {
    var key = filename.replace('.csv', '');
    var el = document.getElementById('file-' + key);
    if (!el) return;
    var iconClass = {
      pending:   'fas fa-clock',
      importing: 'fas fa-spinner fa-spin',
      done:      'fas fa-check-circle',
      error:     'fas fa-times-circle'
    };
    var colorClass = {
      pending:   '',
      importing: 'vocab-file-importing',
      done:      'vocab-file-done',
      error:     'vocab-file-error'
    };
    el.className = 'vocab-file-item ' + (colorClass[status] || '');
    var icon = el.querySelector('.vocab-file-icon');
    if (icon) icon.className = (iconClass[status] || iconClass.pending) + ' vocab-file-icon';
  }

  function onProgress(info) {
    if (info.step === 'importing' && info.file) {
      progressLabel.textContent = 'Importing ' + info.file + '...';
      updateFileStatus(info.file, 'importing');
    }
    if (info.step === 'done' && info.file) {
      updateFileStatus(info.file, 'done');
    }
    if (info.step === 'indexing') {
      progressLabel.textContent = 'Creating indexes...';
    }
    if (info.step === 'complete') {
      progressLabel.textContent = 'Import complete!';
    }
    // Update progress bar
    if (info.total > 0) {
      var pct = Math.round((info.done / info.total) * 100);
      progressFill.style.width = pct + '%';
      progressPct.textContent = pct + '%';
    }
  }

  /* ── Import flow ───────────────────────────────────── */

  function startImportFromDirectory(dirHandle) {
    setStatus('loading', 'Importing vocabulary files...');
    showButtons(false, false, false);
    progressSection.style.display = '';
    statsSection.style.display = 'none';
    initFileList();

    VocabDB.importFromDirectory(dirHandle, onProgress)
      .then(function () {
        return checkDatabaseStatus();
      })
      .catch(function (err) {
        setStatus('error', 'Import failed: ' + err.message);
        showButtons(true, false, false);
        App.showToast('Import failed: ' + err.message, 'error');
      });
  }

  function startImportFromFiles(fileList) {
    setStatus('loading', 'Importing vocabulary files...');
    showButtons(false, false, false);
    progressSection.style.display = '';
    statsSection.style.display = 'none';
    initFileList();

    VocabDB.importFromFiles(fileList, onProgress)
      .then(function () {
        return checkDatabaseStatus();
      })
      .catch(function (err) {
        setStatus('error', 'Import failed: ' + err.message);
        showButtons(true, false, false);
        App.showToast('Import failed: ' + err.message, 'error');
      });
  }

  /* ── Folder selection ──────────────────────────────── */

  function selectFolder() {
    if (supportsDirectoryPicker) {
      window.showDirectoryPicker({ mode: 'read' })
        .then(function (dirHandle) {
          startImportFromDirectory(dirHandle);
        })
        .catch(function (err) {
          if (err.name !== 'AbortError') {
            App.showToast('Folder selection failed: ' + err.message, 'error');
          }
        });
    } else {
      fileInput.click();
    }
  }

  fileInput.addEventListener('change', function () {
    if (fileInput.files && fileInput.files.length > 0) {
      startImportFromFiles(fileInput.files);
    }
  });

  /* ── Re-grant access (Chrome stored handle) ────────── */

  function regrantAccess() {
    VocabDB.getStoredDirectoryHandle()
      .then(function (handle) {
        if (!handle) {
          App.showToast('No stored folder handle found. Please select folder again.', 'error');
          showButtons(true, false, false);
          return;
        }
        return handle.requestPermission({ mode: 'read' }).then(function (perm) {
          if (perm === 'granted') {
            App.showToast('Access re-granted', 'success');
            checkDatabaseStatus();
          } else {
            App.showToast('Permission denied', 'error');
          }
        });
      })
      .catch(function (err) {
        App.showToast('Re-grant failed: ' + err.message, 'error');
      });
  }

  /* ── Delete database ───────────────────────────────── */

  function openDeleteModal() {
    deleteModal.style.display = 'flex';
  }
  function closeDeleteModal() {
    deleteModal.style.display = 'none';
  }

  deleteModalClose.addEventListener('click', closeDeleteModal);
  deleteModalCancel.addEventListener('click', closeDeleteModal);
  deleteModal.addEventListener('click', function (e) {
    if (e.target === deleteModal) closeDeleteModal();
  });

  deleteModalOk.addEventListener('click', function () {
    closeDeleteModal();
    setStatus('loading', 'Deleting database...');
    showButtons(false, false, false);
    statsSection.style.display = 'none';
    progressSection.style.display = 'none';

    VocabDB.deleteDatabase()
      .then(function () {
        setStatus('empty', 'No vocabulary database found. Select a folder to import OHDSI vocabulary files.');
        showButtons(true, false, false);
        App.showToast('Database deleted', 'success');
      })
      .catch(function (err) {
        setStatus('error', 'Delete failed: ' + err.message);
        showButtons(false, false, true);
      });
  });

  /* ── Status check on load ──────────────────────────── */

  function showReadyState(stats) {
    var msg = 'Vocabulary database is loaded and ready.';
    setStatus('ready', msg);
    showButtons(true, false, true);
    btnSelectFolder.innerHTML = '<i class="fas fa-folder-open"></i> Re-import Vocabularies';
    progressSection.style.display = 'none';
    sqlSection.style.display = '';
    showStats(stats);
  }

  function showEmptyState() {
    setStatus('empty', 'No vocabulary database found. Select a folder to import OHDSI vocabulary files.');
    showButtons(true, false, false);
    progressSection.style.display = 'none';
    sqlSection.style.display = 'none';
    showStats(null);
  }

  function checkDatabaseStatus() {
    /* file:// cannot load ES modules — show helpful message */
    if (window.location.protocol === 'file:') {
      setStatus('error', 'This page requires a local HTTP server. Run: python3 -m http.server 8000 --directory docs');
      showButtons(false, false, false);
      return Promise.resolve();
    }

    setStatus('loading', 'Loading DuckDB-WASM...');
    showButtons(false, false, false);

    return VocabDB.initDuckDB()
      .then(function () {
        return VocabDB.isDatabaseReady();
      })
      .then(function (ready) {
        if (ready) {
          return VocabDB.getStats().then(function (stats) {
            showReadyState(stats);
          });
        }

        /* DB is empty — try remounting from stored file handles */
        if (supportsDirectoryPicker) {
          setStatus('loading', 'Trying to remount from stored file handles...');
          return VocabDB.remountFromStoredHandles().then(function (success) {
            if (success) {
              return VocabDB.getStats().then(function (stats) {
                showReadyState(stats);
              });
            }
            /* No stored handles or permission denied */
            showEmptyState();
          });
        }

        showEmptyState();
      })
      .catch(function (err) {
        showEmptyState();
        console.warn('DuckDB init:', err.message);
      });
  }

  /* ── SQL runner ──────────────────────────────────────── */

  function runSqlQuery() {
    var sql = sqlInput.value.trim();
    if (!sql) return;
    sqlResult.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running...';
    sqlRunBtn.disabled = true;

    VocabDB.query(sql)
      .then(function (rows) {
        sqlRunBtn.disabled = false;
        if (!rows || rows.length === 0) {
          sqlResult.innerHTML = '<p style="color:var(--text-muted)">No results.</p>';
          return;
        }
        var cols = Object.keys(rows[0]);
        var html = '<table class="data-table" style="font-size:13px"><thead><tr>';
        for (var c = 0; c < cols.length; c++) {
          html += '<th>' + App.escapeHtml(cols[c]) + '</th>';
        }
        html += '</tr></thead><tbody>';
        for (var r = 0; r < rows.length; r++) {
          html += '<tr>';
          for (var c2 = 0; c2 < cols.length; c2++) {
            var val = rows[r][cols[c2]];
            html += '<td>' + App.escapeHtml(val == null ? '' : String(val)) + '</td>';
          }
          html += '</tr>';
        }
        html += '</tbody></table>';
        sqlResult.innerHTML = html;
      })
      .catch(function (err) {
        sqlRunBtn.disabled = false;
        sqlResult.innerHTML = '<p style="color:var(--error)">' + App.escapeHtml(err.message) + '</p>';
      });
  }

  sqlRunBtn.addEventListener('click', runSqlQuery);
  sqlInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') runSqlQuery();
  });

  /* ── Event listeners ───────────────────────────────── */

  btnSelectFolder.addEventListener('click', selectFolder);
  btnRegrant.addEventListener('click', regrantAccess);
  btnDeleteDb.addEventListener('click', openDeleteModal);

  /* ── Init ──────────────────────────────────────────── */

  App.updateUserBadge();
  App.initSharedEvents();

  App.loadData(function () {
    checkDatabaseStatus();
  });

})();
