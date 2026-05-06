#!/usr/bin/env python3
"""Update concept_sets_versions.json with the current commit SHA for any concept set
whose version is not yet recorded in the index.

Workflow:
  1. Edit concept_sets/{id}.json (e.g. bump version 1.0.0 -> 1.1.0).
  2. git commit -am "Update concept set {id} to v1.1.0"
  3. python3 snapshot.py
  4. git commit -am "Snapshot concept set {id} v1.1.0"

The index maps {id: {version: commit_sha}} so build.py can later retrieve the
exact JSON of any pinned (id, version) pair via `git show <sha>:concept_sets/{id}.json`.
"""

import glob
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
CONCEPT_SETS_DIR = os.path.join(ROOT, "concept_sets")
INDEX_PATH = os.path.join(ROOT, "concept_sets_versions.json")


def load_index():
    if not os.path.isfile(INDEX_PATH):
        return {}
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def save_index(index):
    sorted_index = {
        str(k): dict(sorted(v.items()))
        for k, v in sorted(index.items(), key=lambda kv: int(kv[0]))
    }
    with open(INDEX_PATH, "w", encoding="utf-8") as f:
        json.dump(sorted_index, f, indent=2, ensure_ascii=False)
        f.write("\n")


def current_head_sha():
    try:
        result = subprocess.run(
            ["git", "rev-parse", "HEAD"],
            cwd=ROOT,
            capture_output=True,
            text=True,
            check=True,
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        sys.exit(f"git rev-parse HEAD failed: {e.stderr.strip()}")


def has_uncommitted_changes_in(path):
    """Return True if the given path has uncommitted (staged or unstaged) changes."""
    result = subprocess.run(
        ["git", "status", "--porcelain", "--", path],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=True,
    )
    return bool(result.stdout.strip())


def main():
    index = load_index()
    sha = current_head_sha()

    new_entries = []
    warnings = []

    for path in sorted(glob.glob(os.path.join(CONCEPT_SETS_DIR, "*.json"))):
        with open(path, "r", encoding="utf-8") as f:
            cs = json.load(f)
        cs_id = cs.get("id")
        version = cs.get("version")
        if cs_id is None or not version:
            warnings.append(f"  {os.path.basename(path)}: missing id or version, skipped")
            continue

        key = str(cs_id)
        existing = index.get(key, {})
        if version in existing:
            continue

        if has_uncommitted_changes_in(path):
            warnings.append(
                f"  concept_sets/{cs_id}.json: uncommitted changes — "
                f"commit them before running snapshot.py (skipped v{version})"
            )
            continue

        index.setdefault(key, {})[version] = sha
        new_entries.append((cs_id, version))

    if warnings:
        print("Warnings:")
        for w in warnings:
            print(w)

    if not new_entries:
        print("No new versions to snapshot. Index unchanged.")
        return

    save_index(index)
    print(f"Snapshotted {len(new_entries)} new (id, version) pair(s) at {sha[:10]}:")
    for cs_id, version in new_entries:
        print(f"  concept set {cs_id} -> v{version}")
    print()
    print("Don't forget to commit concept_sets_versions.json.")


if __name__ == "__main__":
    main()
