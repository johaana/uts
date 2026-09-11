# Utsavs Operational Intelligence Data Layer

This directory is the authoritative location for the Utsavs operational dataset integration and contract.

## Integration Contract

### 1. Authoritative Source Interface
The future source bundle (e.g., `utsavs-app.js`) is expected to provide an array of objects matching the `DateIntelligenceRecord` interface defined in `types.ts`. 

### 2. Source Integrity Rules (Mandatory)
*   **No Automatic Inference**: A generic holiday feed must NOT automatically become an institutional closure.
*   **Institution-Specific Evidence**: Any claim about a port, bank, or market closure must retain a direct link to that institution's official calendar or announcement.
*   **Provenance Survival**: Every record must carry its `SourceEvidence` through the entire pipeline. If a user asks "Why is this closed?", the system must be able to cite the source.
*   **Honest Uncertainty**: Dates marked as `provisional` or `estimated` must be rendered as such in the UI.

### 3. Source Registry Contract
The future `source_registry.json` must represent:
*   `source_id`: Unique identifier.
*   `source_name`: Official name of the authority.
*   `source_url`: Verifiable URL.
*   `authority_type`: Government, Institutional, etc.
*   `freshness_metadata`: Last verified timestamp and expected update frequency.

### 4. Automation Boundary
Automation (scheduled Cloud Functions) is reserved for **verification and monitoring only**. 
*   **Automate**: Freshness checks, dead link detection, and comparison against new announcements.
*   **Controlled**: All publishing of new or modified operational data must remain a manual, verified action.

## Integration Status
*   **UI Shell**: Ready
*   **Adapter Contract**: Finalized (`src/lib/operational/adapter.ts`)
*   **Production Data**: **DISCONNECTED**. Authoritative source bundle is required.
