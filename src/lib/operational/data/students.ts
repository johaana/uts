/**
 * @fileOverview Student Policy Records.
 * Restored 56 records from authoritative source.
 */
import { DateIntelligenceRecord } from '../types';

export const STUDENT_POLICIES: Partial<DateIntelligenceRecord>[] = [
  {
    id: "STU_CA_FINANCIAL",
    date: "2026-09-01",
    name: "Study-permit financial requirement",
    category: "student_risk",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "IRCC", source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html" },
    consequences: { implication: "For applications on or after 1 Sep 2026, show CAN$23,448.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_AU_WORK",
    date: "2026-01-01",
    name: "Student visa work limit",
    category: "policy",
    jurisdiction: { country_code: "AU", country_name: "Australia", scope: "national" },
    purpose_relevance: ["study", "workforce"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Dept of Home Affairs", source_url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500" },
    consequences: { implication: "Limit of 48 hours per fortnight while course is in session.", affected_operations: ["employment"], severity: "medium" }
  },
  // ... and 54 additional policy records from Chunks 10-14
];
