# Utsavs Operational Intelligence Data Layer

This directory is the authoritative location for the Utsavs operational dataset integration and contract.

## Integration Contract

### 1. Authoritative Source Interface
The future source bundle is expected to provide an array of objects matching the `DateIntelligenceRecord` interface defined in `types.ts`. 

### 2. Source Integrity Rules (Mandatory)
*   **No Data Fabrication**: Do not synthesize, reconstruct, or infer records from memory or external fragments.
*   **No Automatic Inference**: A generic holiday feed must NOT automatically become an institutional closure.
*   **Institution-Specific Evidence**: Any claim about a port, bank, or market closure must retain a direct link to that institution's official calendar or announcement.
*   **Provenance Survival**: Every record must carry its `SourceEvidence` through the entire pipeline. If a user asks "Why is this closed?", the system must be able to cite the source.
*   **Honest Uncertainty**: Dates marked as `provisional` or `estimated` must be rendered as such in the UI.

### 3. Integration Failure
If the authoritative source is missing or fails validation, the system must return a `source_unavailable` status. The UI will truthfully display "Source Disconnected".

## Implementation Status
*   **UI Shell**: Frozen & Verified
*   **Adapter Contract**: Finalized (`src/lib/operational/adapter.ts`)
*   **Data Model**: Canonical (`src/lib/operational/types.ts`)
*   **Production Data**: **DISCONNECTED**. Authoritative source bundle is required for population.
