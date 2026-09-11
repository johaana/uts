/**
 * @fileOverview SYNTHETIC TEST FIXTURE
 * 
 * IMPORTANT: TEST ONLY — NOT PRODUCTION DATA.
 * This file is for internal validation of the query-to-result pipeline only.
 * It must NEVER be imported by the production UI.
 */

import { DateIntelligenceRecord } from './types';

export const SYNTHETIC_TEST_RECORDS: DateIntelligenceRecord[] = [
  {
    id: "TEST_RECOVERY_2026_IN",
    date: "2026-11-08",
    name: "Diwali (National Closure)",
    jurisdiction: {
      country_code: "IN",
      country_name: "India",
      scope: "national"
    },
    purpose_relevance: ["travel", "business", "logistics"],
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_id: "IN_GOV_CAL_2026",
      source_name: "Gazette of India",
      source_type: "government",
      last_checked: "2026-09-01",
      verification_status: "verified"
    },
    consequences: {
      implication: "Total market and government office closure.",
      affected_operations: ["banking", "shipping", "public_services"],
      severity: "high"
    }
  }
];
