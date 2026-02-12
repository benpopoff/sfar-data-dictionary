# INDICATE Data Dictionary Content

## Project Purpose

This repository hosts the **INDICATE Data Dictionary** content as JSON files, and a static HTML catalog (GitHub Pages) to browse concept sets, concepts, and projects without needing the full Shiny application.

## Repository Structure

```
data-dictionary-content/
├── concept_sets/           # 333 JSON files (concept set definitions)
│   ├── 1.json ... 338.json
│   └── README.md           # Auto-generated table of contents
├── projects/               # 6 JSON files (project definitions)
│   └── 1.json ... 6.json
├── units/                  # Unit mappings
│   ├── recommended_units.csv
│   └── unit_conversions.csv
├── docs/                   # GitHub Pages static site
│   └── index.html          # Single-page catalog application
├── CLAUDE.md               # This file
└── .gitignore
```

## Data Schemas

### Concept Set JSON (`concept_sets/{id}.json`)

```json
{
  "id": 10,
  "name": "Numeric Pain Rating Scale",
  "description": "...",
  "version": "1.0.0",
  "createdBy": "Boris Delange",
  "createdDate": "2025-01-26",
  "modifiedBy": "Boris Delange",
  "modifiedDate": "2025-01-26",
  "createdByTool": "INDICATE Data Dictionary v0.2.0.9001",
  "expression": {
    "items": [
      {
        "concept": {
          "conceptId": 37151627,
          "conceptName": "Numeric Pain Rating Scale",
          "standardConcept": "S",
          "standardConceptCaption": "Standard",
          "invalidReasonCaption": "Valid",
          "conceptCode": "1284852002",
          "domainId": "Measurement",
          "vocabularyId": "SNOMED",
          "conceptClassId": "Staging / Scales",
          "validStartDate": "2023-05-31",
          "validEndDate": "2099-12-31"
        },
        "isExcluded": false,
        "includeDescendants": false,
        "includeMapped": false
      }
    ]
  },
  "tags": [],
  "metadata": {
    "translations": {
      "en": { "name": "...", "category": "...", "subcategory": "..." },
      "fr": { "name": "...", "category": "...", "subcategory": "..." }
    },
    "createdByDetails": {
      "firstName": "Boris",
      "lastName": "Delange",
      "affiliation": "...",
      "profession": "...",
      "orcid": "0009-0002-6055-6935"
    },
    "reviews": [],
    "versions": [],
    "distributionStats": null
  }
}
```

### Project JSON (`projects/{id}.json`)

```json
{
  "id": 1,
  "name": "MIMIC-EU [Minimal]",
  "description": "...",
  "justification": "...",
  "bibliography": null,
  "createdBy": "Boris Delange",
  "createdDate": "2024-01-01",
  "modifiedDate": "2024-01-01",
  "conceptSetIds": [1, 2, 3, ...]
}
```

## GitHub Pages Catalog

The static HTML page at `docs/index.html` provides a read-only catalog with:

- **Concept Sets tab**: Browse all concept sets with category filter badges, search, and detail view showing OMOP concepts
- **Projects tab**: Browse projects with linked concept sets

### How it loads data

The page fetches JSON files directly from the repository via relative paths (`../concept_sets/`, `../projects/`). It first reads `concept_sets/README.md` to extract the list of available concept set IDs, then fetches each JSON file.

For GitHub Pages deployment, the page uses the GitHub raw content API or the repository's served files.

### Deployment

Enable GitHub Pages in repository settings, pointing to the `docs/` folder on the `main` branch.

## Key Conventions

- **Bilingual**: All concept sets have English and French translations in `metadata.translations`
- **OMOP CDM**: Concepts follow the OMOP Common Data Model vocabulary (SNOMED, LOINC, RxNorm)
- **Athena links**: Concept IDs link to `https://athena.ohdsi.org/search-terms/terms/{conceptId}`
- **Categories**: Concept sets are grouped by category/subcategory from metadata translations
