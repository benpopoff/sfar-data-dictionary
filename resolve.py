#!/usr/bin/env python3
"""Resolve concept sets using OMOP vocabulary tables from a DuckDB database.

Usage:
    python3 resolve.py --db /path/to/ohdsi_vocabularies.duckdb
"""

import argparse
import glob
import json
import os
import sys

import duckdb

ROOT = os.path.dirname(os.path.abspath(__file__))
CS_DIR = os.path.join(ROOT, "concept_sets")
OUT_DIR = os.path.join(ROOT, "concept_sets_resolved")


def expand_ids(con, base_ids, items, flag_col, expand_func):
    """Expand a set of concept IDs using a flag and an expansion function."""
    flagged = [item for item in items if item.get(flag_col, False)]
    if not flagged:
        return base_ids
    source_ids = {item["concept"]["conceptId"] for item in flagged}
    extra = expand_func(con, source_ids)
    return base_ids | extra


def get_descendants(con, concept_ids):
    """Get descendant concept IDs from concept_ancestor table."""
    if not concept_ids:
        return set()
    ids_str = ",".join(str(i) for i in concept_ids)
    rows = con.execute(
        f"SELECT DISTINCT descendant_concept_id "
        f"FROM concept_ancestor "
        f"WHERE ancestor_concept_id IN ({ids_str}) "
        f"AND descendant_concept_id != ancestor_concept_id"
    ).fetchall()
    return {r[0] for r in rows}


def get_mapped(con, concept_ids):
    """Get mapped concept IDs from concept_relationship table."""
    if not concept_ids:
        return set()
    ids_str = ",".join(str(i) for i in concept_ids)
    rows = con.execute(
        f"SELECT DISTINCT concept_id_2 "
        f"FROM concept_relationship "
        f"WHERE concept_id_1 IN ({ids_str}) "
        f"AND relationship_id IN ('Maps to', 'Mapped from')"
    ).fetchall()
    return {r[0] for r in rows}


def resolve_concept_set(con, items):
    """Resolve a concept set expression into a list of concept details.

    Algorithm (matches R function in data-dictionary/R/fct_duckdb.R):
    1. Partition items into included and excluded
    2. For each partition, expand with descendants and mapped concepts
    3. Final = included - excluded
    4. Fetch concept details for final IDs
    """
    if not items:
        return []

    included_items = [i for i in items if not i.get("isExcluded", False)]
    excluded_items = [i for i in items if i.get("isExcluded", False)]

    if not included_items:
        return []

    # Build included set
    included_ids = {i["concept"]["conceptId"] for i in included_items}

    # Expand descendants for included
    desc_items = [i for i in included_items if i.get("includeDescendants", False)]
    if desc_items:
        desc_source = {i["concept"]["conceptId"] for i in desc_items}
        included_ids |= get_descendants(con, desc_source)

    # Expand mapped for included
    mapped_items = [i for i in included_items if i.get("includeMapped", False)]
    if mapped_items:
        mapped_source = {i["concept"]["conceptId"] for i in mapped_items}
        included_ids |= get_mapped(con, mapped_source)

    # Build excluded set
    excluded_ids = set()
    if excluded_items:
        excluded_ids = {i["concept"]["conceptId"] for i in excluded_items}

        desc_items = [i for i in excluded_items if i.get("includeDescendants", False)]
        if desc_items:
            desc_source = {i["concept"]["conceptId"] for i in desc_items}
            excluded_ids |= get_descendants(con, desc_source)

        mapped_items = [i for i in excluded_items if i.get("includeMapped", False)]
        if mapped_items:
            mapped_source = {i["concept"]["conceptId"] for i in mapped_items}
            excluded_ids |= get_mapped(con, mapped_source)

    # Final resolution
    resolved_ids = included_ids - excluded_ids

    if not resolved_ids:
        return []

    # Fetch concept details
    ids_str = ",".join(str(i) for i in resolved_ids)
    rows = con.execute(
        f"SELECT concept_id, concept_name, vocabulary_id, domain_id, "
        f"concept_class_id, concept_code, standard_concept "
        f"FROM concept "
        f"WHERE concept_id IN ({ids_str}) "
        f"ORDER BY concept_name"
    ).fetchall()

    return [
        {
            "conceptId": r[0],
            "conceptName": r[1],
            "vocabularyId": r[2],
            "domainId": r[3],
            "conceptClassId": r[4],
            "conceptCode": r[5],
            "standardConcept": r[6],
        }
        for r in rows
    ]


def main():
    parser = argparse.ArgumentParser(description="Resolve concept sets using OMOP vocabularies")
    parser.add_argument("--db", required=True, help="Path to ohdsi_vocabularies.duckdb")
    args = parser.parse_args()

    if not os.path.exists(args.db):
        print(f"Error: database not found: {args.db}", file=sys.stderr)
        sys.exit(1)

    os.makedirs(OUT_DIR, exist_ok=True)

    con = duckdb.connect(args.db, read_only=True)

    paths = sorted(glob.glob(os.path.join(CS_DIR, "*.json")))
    total = len(paths)
    resolved_count = 0
    total_concepts = 0

    for idx, path in enumerate(paths, 1):
        with open(path, "r", encoding="utf-8") as f:
            cs = json.load(f)

        cs_id = cs.get("id")
        name = cs.get("name", "")
        items = (cs.get("expression") or {}).get("items", [])

        concepts = resolve_concept_set(con, items)
        total_concepts += len(concepts)

        out = {"conceptSetId": cs_id, "resolvedConcepts": concepts}
        out_path = os.path.join(OUT_DIR, f"{cs_id}.json")
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(out, f, ensure_ascii=False, indent=2)

        resolved_count += 1
        print(f"  [{idx}/{total}] {name} (id={cs_id}): {len(concepts)} resolved concepts")

    con.close()

    print(f"\nResolved {resolved_count} concept sets -> {total_concepts} total concepts")
    print(f"Output: {OUT_DIR}/")


if __name__ == "__main__":
    main()
