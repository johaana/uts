/**
 * @fileOverview Phase 3 Temporal Engine Validation Suite.
 * 
 * 18 scenarios to verify Event/Period/Standing/Recurring/Easter logic.
 */

import { getOperationalImpact } from './adapter';
import { OperationalQuery, OperationalResult } from './types';

export interface ValidationScenario {
  id: string;
  name: string;
  query: OperationalQuery;
}

export const VALIDATION_SCENARIOS: ValidationScenario[] = [
  {
    id: "T-001",
    name: "Exact Event Match (Republic Day)",
    query: { destination: "IN", startDate: "2026-01-26", endDate: "2026-01-26", purpose: "travel" }
  },
  {
    id: "T-002",
    name: "Event Outside Window",
    query: { destination: "IN", startDate: "2026-01-01", endDate: "2026-01-10", purpose: "travel" }
  },
  {
    id: "T-003",
    name: "Period Overlap (Beginning)",
    query: { destination: "CN", startDate: "2026-02-17", endDate: "2026-02-18", purpose: "travel" }
  },
  {
    id: "T-004",
    name: "Period Overlap (End)",
    query: { destination: "CN", startDate: "2026-02-10", endDate: "2026-02-17", purpose: "travel" }
  },
  {
    id: "T-005",
    name: "Standing Policy Active",
    query: { destination: "CA", startDate: "2026-11-01", endDate: "2026-11-01", purpose: "study" }
  },
  {
    id: "T-006",
    name: "Standing Outside Interval (Future Policy)",
    query: { destination: "CA", startDate: "2025-01-01", endDate: "2025-01-01", purpose: "study" }
  },
  {
    id: "T-007",
    name: "Recurring Fixed (US New Year)",
    query: { destination: "US", startDate: "2027-01-01", endDate: "2027-01-01", purpose: "business" }
  },
  {
    id: "T-008",
    name: "Recurring nth-weekday (US Labor Day)",
    query: { destination: "US", startDate: "2026-09-01", endDate: "2026-09-10", purpose: "business" }
  },
  {
    id: "T-009",
    name: "Estimated State Preservation (AE Eid)",
    query: { destination: "AE", startDate: "2026-03-20", endDate: "2026-03-20", purpose: "travel" }
  },
  {
    id: "T-010",
    name: "Historical Lookup (2024 Event)",
    query: { destination: "IN", startDate: "2024-08-15", endDate: "2024-08-15", purpose: "travel" }
  },
  {
    id: "T-011",
    name: "Hero Exclusion (Past Dates)",
    query: { destination: "IN", startDate: "2020-01-01", endDate: "2020-01-01", purpose: "travel" }
  },
  {
    id: "T-012",
    name: "Hero Selection (Next Future)",
    query: { destination: "IN", startDate: "2026-11-01", endDate: "2026-11-15", purpose: "travel" }
  },
  {
    id: "T-013",
    name: "Marquee Today Priority",
    query: { destination: "IN", startDate: "2026-01-26", endDate: "2026-01-26", purpose: "travel" }
  },
  {
    id: "T-014",
    name: "Marquee Fall Forward",
    query: { destination: "IN", startDate: "2026-06-01", endDate: "2026-06-30", purpose: "travel" }
  },
  {
    id: "T-015",
    name: "Purpose Differentiation (Study vs Business)",
    query: { destination: "CA", startDate: "2026-09-01", endDate: "2026-09-01", purpose: "study" }
  },
  {
    id: "T-016",
    name: "Standing Records Survival",
    query: { destination: "GB", startDate: "2026-01-01", endDate: "2026-01-01", purpose: "business" }
  },
  {
    id: "T-017",
    name: "Single-Now Midnight Check",
    query: { destination: "IN", startDate: "2026-10-02", endDate: "2026-10-02", purpose: "travel" }
  },
  {
    id: "T-018",
    name: "Easter Relative (Good Friday 2027)",
    query: { destination: "XX", startDate: "2027-03-26", endDate: "2027-03-26", purpose: "travel" }
  }
];

export async function runValidation(): Promise<Record<string, OperationalResult>> {
  const results: Record<string, OperationalResult> = {};
  for (const scenario of VALIDATION_SCENARIOS) {
    results[scenario.id] = await getOperationalImpact(scenario.query);
  }
  return results;
}
