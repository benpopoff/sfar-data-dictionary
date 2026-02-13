#!/usr/bin/env python3
"""Build docs/data_inline.js and docs/data.json from concept_sets/ and projects/ JSON files."""

import json
import glob
import os

ROOT = os.path.dirname(os.path.abspath(__file__))
DOCS = os.path.join(ROOT, "docs")


def load_json_dir(directory):
    """Load all .json files from a directory, sorted by id."""
    items = []
    for path in glob.glob(os.path.join(directory, "*.json")):
        with open(path, "r", encoding="utf-8") as f:
            items.append(json.load(f))
    items.sort(key=lambda x: x.get("id", 0))
    return items


def main():
    concept_sets = load_json_dir(os.path.join(ROOT, "concept_sets"))
    projects = load_json_dir(os.path.join(ROOT, "projects"))

    data = {"conceptSets": concept_sets, "projects": projects}
    compact = json.dumps(data, ensure_ascii=False, separators=(",", ":"))

    with open(os.path.join(DOCS, "data.json"), "w", encoding="utf-8") as f:
        f.write(compact)

    with open(os.path.join(DOCS, "data_inline.js"), "w", encoding="utf-8") as f:
        f.write("const DATA=" + compact + ";")

    print(f"Built {len(concept_sets)} concept sets, {len(projects)} projects")
    print(f"  -> docs/data.json ({os.path.getsize(os.path.join(DOCS, 'data.json')):,} bytes)")
    print(f"  -> docs/data_inline.js ({os.path.getsize(os.path.join(DOCS, 'data_inline.js')):,} bytes)")


if __name__ == "__main__":
    main()
