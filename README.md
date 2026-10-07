# Utsavs Global Holiday Intelligence

The definitive guide to global cultural events and verified date intelligence.

## Production Status
- **Security**: 100% test pass rate on all isolation and ledger rules.
- **Data**: Verified 2026-2028 baseline for 92 jurisdictions.
- **Insurance**: Integrated Asego Transactional Engine with fault-tolerant ledger.

## Project Structure
- `src/app`: Production routes (Explorer, Insurance, Management, Blog).
- `src/lib/operational`: The core temporal logic and data normalization engine.
- `src/tests`: Automated security and logic validation suite.

## Technical Notes
- **Hydration**: All dynamic date states are client-hydrated for timezone safety.
- **Metadata**: SEO-optimized for the 2026 travel season.
- **Internal Tools**: The `/asego-sandbox` and `/planner` routes are gated by `UTSAVS_INTERNAL_DEBUG`.

---
*Note: Lab/Legacy routes (/brand-lab, /favicon-lab, /social-card-lab, /temp-tracker-lab, /v1, /v2) have been orphaned and are safe for manual deletion from the filesystem.*
