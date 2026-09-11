# Utsavs Operational Intelligence Data Layer

This directory is the authoritative location for the Utsavs operational dataset integration.

## Source Integrity Rules

1. **Authoritative Source Required**: All data in this layer must originate from the verified `utsavs-app.js` or corresponding source bundle.
2. **Provenance**: Every record must retain its original source citation, date state, and confidence level.
3. **No Fabrication**: Do not reconstruct missing records from memory or assume data points without direct evidence from the workspace source files.
4. **Honest Uncertainty**: Dates with 'provisional' or 'estimated' status must be presented as such. Do not convert them into absolute claims.
5. **Property Separation**: This data layer is strictly for the Operational/API property. Cultural festival storytelling data resides in the main `src/lib/festival-data.ts`.

## Integration Status
- **UI Shell**: Ready
- **Contract**: Defined (`types.ts`, `adapter.ts`)
- **Authoritative Data**: DISCONNECTED (Source files missing from workspace)
