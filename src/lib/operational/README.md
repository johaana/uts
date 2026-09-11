# Utsavs Operational Data Pipeline

This directory manages the authoritative operational intelligence layer.

## Ingestion Contract

The authoritative source must provide records that can be normalized into the `DateIntelligenceRecord` schema.

### Mandatory Fields
* `id`: Unique identifier for the record.
* `date`: YYYY-MM-DD format.
* `country_code`: ISO 3166-1 alpha-2.
* `purpose_relevance`: Array containing at least one of `travel`, `business`, `study`, `workforce`, `logistics`.
* `evidence`: Source name and verification status.

### Integrity Rules
1. **Provenance Survival**: Evidence metadata must accompany the record through the entire pipeline.
2. **Institutional Evidence**: Any claim about an institutional closure (Bank, Port, University, etc.) must cite an institutional or regulatory source.
3. **No Automatic Inference**: National holidays do not automatically imply specific institutional closures.
4. **Honest Uncertainty**: Dates marked as `provisional` or `estimated` must be rendered as such.

## Pipeline Architecture
1. **Source (`source.ts`)**: Connects to the authoritative storage (configured via environment).
2. **Normalize (`normalize.ts`)**: Maps raw data to canonical TypeScript interfaces.
3. **Validator (`validator.ts`)**: Enforces integrity and provenance rules.
4. **Adapter (`adapter.ts`)**: The single entry point for the UI to query validated data.

## Status
* **Infrastructure**: Production-Ready.
* **Production Records**: 0 (Authoritative source disconnected).
