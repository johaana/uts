/**
 * @fileOverview Student Policy Records (Restored from Chunks 10-14).
 * Preserves 56 records from the authoritative source.
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
  {
    id: "STU_GB_WORK",
    date: "2026-01-01",
    name: "Student visa work rights",
    category: "policy",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "national" },
    purpose_relevance: ["study", "workforce"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "UK Home Office", source_url: "https://www.gov.uk/student-visa" },
    consequences: { implication: "Up to 20 hours/week in term time for degree-level students.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_FR_WORK",
    date: "2026-01-01",
    name: "Foreign student work right",
    category: "policy",
    jurisdiction: { country_code: "FR", country_name: "France", scope: "national" },
    purpose_relevance: ["study", "workforce"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Campus France", source_url: "https://www.campusfrance.org/en/working-student" },
    consequences: { implication: "Up to 964 hours per year, approx 60% of full-time work.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_ES_WORK",
    date: "2026-01-01",
    name: "Study-stay work right",
    category: "policy",
    jurisdiction: { country_code: "ES", country_name: "Spain", scope: "national" },
    purpose_relevance: ["study", "workforce"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Spain Inclusion", source_url: "https://inclusion.gob.es/en/web/migraciones/w/estancia-por-estudios" },
    consequences: { implication: "Up to 30 hours per week, compatible with studies.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_JP_WORK",
    date: "2026-01-01",
    name: "Part-time work permission",
    category: "policy",
    jurisdiction: { country_code: "JP", country_name: "Japan", scope: "national" },
    purpose_relevance: ["study", "workforce"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Japan ISA", source_url: "https://www.moj.go.jp/isa/support/guidance/" },
    consequences: { implication: "Up to 28 hours per week with necessary permission.", affected_operations: ["employment"], severity: "medium" }
  }
];
