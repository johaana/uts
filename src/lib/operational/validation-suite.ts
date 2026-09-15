/**
 * @fileOverview Deterministic Validation Suite for Date Intelligence
 * 
 * Executing 10 scenarios against the Authoritative Data Layer (frozen at 39b8833).
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
    id: "SCEN-001",
    name: "Traveller + Festival Period (India Diwali)",
    query: {
      destination: "IN",
      startDate: "2026-11-05",
      endDate: "2026-11-12",
      purpose: "travel"
    }
  },
  {
    id: "SCEN-002",
    name: "Traveller + Bank/Working Day (Japan Silver Week)",
    query: {
      destination: "JP",
      startDate: "2026-09-20",
      endDate: "2026-09-24",
      purpose: "travel"
    }
  },
  {
    id: "SCEN-003",
    name: "Business Travel + Public Holiday (US Labor Day)",
    query: {
      destination: "US",
      startDate: "2026-09-01",
      endDate: "2026-09-10",
      purpose: "business"
    }
  },
  {
    id: "SCEN-004",
    name: "Business Travel + Permitted Activity (Canada Policy)",
    query: {
      destination: "CA",
      startDate: "2026-01-01",
      endDate: "2026-01-10",
      purpose: "business"
    }
  },
  {
    id: "SCEN-005",
    name: "Student + Institutional Timing (Canada Arrival)",
    query: {
      destination: "CA",
      startDate: "2026-08-20",
      endDate: "2026-09-10",
      purpose: "study"
    }
  },
  {
    id: "SCEN-006",
    name: "Student + Policy Information (Australia Work Rights)",
    query: {
      destination: "AU",
      startDate: "2026-01-01",
      endDate: "2026-01-10",
      purpose: "study"
    }
  },
  {
    id: "SCEN-007",
    name: "Regional Specific Event (India Ganesh Chaturthi)",
    query: {
      destination: "IN",
      startDate: "2026-09-10",
      endDate: "2026-09-20",
      purpose: "business"
    }
  },
  {
    id: "SCEN-008",
    name: "Multiple Simultaneous Records (India November Cluster)",
    query: {
      destination: "IN",
      startDate: "2026-11-07",
      endDate: "2026-11-12",
      purpose: "travel"
    }
  },
  {
    id: "SCEN-009",
    name: "No Matching Records",
    query: {
      destination: "IN",
      startDate: "2026-06-01",
      endDate: "2026-06-05",
      purpose: "travel"
    }
  },
  {
    id: "SCEN-010",
    name: "Uncertain Evidence (UAE Eid al-Fitr Estimated)",
    query: {
      destination: "AE",
      startDate: "2026-03-15",
      endDate: "2026-03-25",
      purpose: "travel"
    }
  }
];

export async function runValidation(): Promise<Record<string, OperationalResult>> {
  const results: Record<string, OperationalResult> = {};
  for (const scenario of VALIDATION_SCENARIOS) {
    results[scenario.id] = await getOperationalImpact(scenario.query);
  }
  return results;
}
