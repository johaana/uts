# Authoritative Source Chunks

This directory contains the authoritative Utsavs operational source, provided in sequential chunks to accommodate system output limits.

## Ingestion Rules
1. **Preserve Raw Content**: Chunks are stored exactly as provided.
2. **Aggregator Pattern**: `src/lib/operational/source.ts` imports and merges these chunks.
3. **No Modification**: Records are never edited in these files; normalization happens in `normalize.ts`.
