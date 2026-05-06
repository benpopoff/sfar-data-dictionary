# Forking guide — Data Dictionary

The INDICATE Data Dictionary is designed to be forked and reused by other teams. This guide walks through:
1. **Initial setup** — fork, configure, wipe INDICATE content
2. **Day-to-day** — adding your own concept sets, building, deploying
3. **Updating** — pulling the latest code from upstream while keeping your content

---

## 1. Initial setup

### 1.1. Fork or clone

Fork on GitHub (`Use this template` or the regular fork button), then clone your fork:

```bash
git clone git@github.com:<your-org>/<your-repo>.git
cd <your-repo>
```

### 1.2. Edit `config.json`

This file at the repo root holds everything that identifies the dictionary as yours:

```json
{
  "title": "My Team Data Dictionary",
  "appName": "My Team Data Dictionary",
  "appVersion": "1.0.0",
  "footer": "{name} v{version}",
  "languages": ["en", "fr"],
  "defaultLanguage": "en",
  "github": {
    "repo": "<your-org>/<your-repo>",
    "branch": "main",
    "upstream": "https://github.com/indicate-eu/data-dictionary.git",
    "upstreamBranch": "main"
  },
  "organization": {
    "name": "My Team",
    "url": "https://my-team.example.org"
  },
  "customVocabulary": {
    "id": "MYTEAM",
    "codePrefix": "MYTEAM-"
  },
  "branding": {
    "logo": "logo.png",
    "favicon": "favicon.png",
    "logoAlt": "My Team"
  },
  "tabs": {
    "showProjects": true,
    "showMappingRecommendations": true
  }
}
```

Key fields:
- **`title`** — shown in the browser tab and the SPA header.
- **`github.repo`** — the URL fragment used for "Propose on GitHub" links (`https://github.com/<repo>/edit/<branch>/...`).
- **`github.upstream`** — kept pointing at INDICATE's repo so `update_from_upstream.py` knows where to pull code updates from.
- **`organization`** — default `metadata.organization` written into new concept sets.
- **`customVocabulary`** — vocabulary id and code prefix used when a user adds a *custom* concept (not from OMOP) inside the SPA.
- **`tabs`** — set `false` to hide the Projects or Mapping Recommendations tabs if you don't need them.

### 1.3. Replace branding assets

Replace these files in `docs/` with your own:
- `docs/logo.png` — header logo (transparent PNG, ~64–128 px tall)
- `docs/favicon.png` — favicon (square PNG)
- `docs/data_dictionary.png` — README screenshot (optional)

If you change the file names, update `branding.logo` / `branding.favicon` in `config.json`.

### 1.4. Replace the Documentation page

The Documentation page (`#/documentation`, served from `docs/documentation.js`) is INDICATE-specific content (mission, partners, references). Edit `docs/documentation.js` to describe your own dictionary. Until you do, leave it as-is — it still renders, it just talks about INDICATE.

### 1.5. Wipe INDICATE content

```bash
python3 reset.py
```

This wipes `concept_sets/`, `projects/`, `concept_sets_resolved/`, resets `units/recommended_units.json` to `[]` and `id_counters.json` to `{1, 1}`. Generic content (`units/unit_conversions.json`, `mapping_recommendations/`) and configuration are kept. After confirming, the script also runs `build.py` to regenerate `docs/data.json`.

Flags:
- `--yes` — skip the confirmation prompt
- `--keep-units` — also keep `recommended_units.json` (otherwise reset to `[]`)
- `--no-build` — skip the rebuild step

### 1.6. Set up local terminology paths (optional but recommended)

Copy the example file:

```bash
cp config.local.example.json config.local.json
```

Edit `config.local.json` and fill in the paths to your local terminology resources (`ohdsiVocab`, `loincPath`, `snomedPath`, `umlsPath`, `npuCodesPath`). This file is gitignored — paths are machine-specific and never committed.

Once filled in:
- `python3 resolve.py` runs without `--vocab`
- The Claude skills `describe-concept-set` and `resolve-concept-sets` no longer ask for these paths each run

`ohdsiVocab` accepts a `.duckdb` file, a folder of Athena CSV files, or a folder of Parquet files (auto-detected).

### 1.7. First commit

```bash
git add config.json docs/logo.png docs/favicon.png docs/data.json docs/data_inline.js
git add concept_sets/ projects/ units/recommended_units.json id_counters.json
git commit -m "Initialize fork for <my team>"
git push
```

Enable GitHub Pages in your repo settings (Source: branch `main`, folder `/docs`).

---

## 2. Day-to-day

### Add or edit concept sets

Either:
- Use the SPA at `https://<your-org>.github.io/<your-repo>/` — create concept sets locally (stored in `localStorage`), then "Propose on GitHub" to commit them.
- Or edit `concept_sets/<id>.json` directly, then `python3 build.py`.

When creating a new concept set or project file by hand, increment the matching counter in `id_counters.json` (`build.py` validates this and bumps it automatically if too low).

### Resolve concept sets

```bash
python3 resolve.py            # all sets, uses config.local.json
python3 resolve.py --id 42    # single set
```

### Rebuild the static site

```bash
python3 build.py
```

After any change to `concept_sets/`, `projects/`, `units/`, `mapping_recommendations/`, or `concept_sets_resolved/`, regenerate `docs/data.json` and `docs/data_inline.js` and commit them.

---

## 3. Updating from upstream

INDICATE keeps shipping fixes and new features. To pull them into your fork:

```bash
python3 update_from_upstream.py
```

What it does:
1. Adds (or updates) a git remote named `upstream` pointing at the URL in `config.json -> github.upstream`.
2. Runs `git fetch upstream <branch>`.
3. Checks out a fixed list of code paths from `upstream/<branch>`: `build.py`, `resolve.py`, `reset.py`, `update_from_upstream.py`, all of `docs/*.js`, `docs/*.html`, `docs/*.css`, `.claude/skills/`, `CLAUDE.md`, `FORKING.md`, `config.local.example.json`, `.gitignore`.
4. Leaves your content alone: `concept_sets/`, `projects/`, `units/`, `mapping_recommendations/`, `id_counters.json`, `config.json`, `config.local.json`, `docs/logo.png`, `docs/favicon.png`, `docs/data_dictionary.png`, and the generated `docs/data.json` / `docs/data_inline.js`.

Flags:
- `--dry-run` — show what would change without modifying anything
- `--yes` — skip the confirmation prompt
- `--upstream <url>` — override the upstream URL
- `--branch <name>` — override the upstream branch

After it finishes:

```bash
git diff --stat       # see what changed
git diff              # review changes in detail
python3 build.py      # if build.py or any data file changed
git commit -am "Update from upstream"
git push
```

If a code change conflicts with a local customization (e.g. you edited `docs/documentation.js` for your own dictionary), `git checkout upstream/main -- <path>` will overwrite your version. Resolve by re-applying your local edits on top, or by removing that path from the `UPSTREAM_PATHS` list in `update_from_upstream.py`.

### When NOT to use it

`update_from_upstream.py` is for routine updates. If the upstream has done a breaking change (e.g. renamed `config.json` keys), read the upstream `CHANGELOG` or commit log first — you may need to migrate your `config.json` by hand before running the update.
