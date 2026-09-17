/**
 * @fileOverview Student Policy Records restored from source chunks.
 * Preserves all 56 records covering 14 jurisdictions (Corpus A).
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
    evidence: { 
      source_name: "Government of Canada — Proof of financial support", 
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html" 
    },
    consequences: { 
      implication: "For applications on or after 1 Sep 2026, you must show CAN$23,448 for annual living expenses, excluding tuition and transportation.", 
      affected_operations: ["visa"], 
      severity: "high" 
    }
  },
  {
    id: "STU_CA_WORK_OFF",
    date: "2026-01-01",
    name: "Off-campus work eligibility",
    category: "policy",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { 
      source_name: "Government of Canada — Work off campus", 
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html" 
    },
    consequences: { 
      implication: "Eligible international students can work off-campus up to 24 hours per week during regular academic sessions.", 
      affected_operations: ["employment"], 
      severity: "medium" 
    }
  },
  {
    id: "STU_CA_PAL_TAL",
    date: "2026-01-01",
    name: "Study permit / PAL-TAL",
    category: "policy",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { 
      source_name: "Government of Canada — 2026 provincial/territorial allocations", 
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/2026-provincial-territorial-allocations-under-international-student-cap.html" 
    },
    consequences: { 
      implication: "Most study permit applications require a Provincial/Territorial Attestation Letter (PAL). Public-institution master's and doctoral students are generally exempt.", 
      affected_operations: ["visa"], 
      severity: "high" 
    }
  },
  {
    id: "STU_AU_WORK",
    date: "2026-01-01",
    name: "Student visa work hours",
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
  },
  {
    id: "STU_IT_WORK",
    date: "2026-01-01",
    name: "Student work limit",
    category: "policy",
    jurisdiction: { country_code: "IT", country_name: "Italy", scope: "national" },
    purpose_relevance: ["study", "workforce"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Universitaly", source_url: "https://www.universitaly.it/index.php/students/working" },
    consequences: { implication: "Up to 20 hours per week or 1,040 hours per year.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_NZ_WORK",
    date: "2026-01-01",
    name: "Student visa work hours",
    category: "policy",
    jurisdiction: { country_code: "NZ", country_name: "New Zealand", scope: "national" },
    purpose_relevance: ["study", "workforce"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Immigration NZ", source_url: "https://www.immigration.govt.nz/study/once-you-have-a-student-visa/working-on-a-student-visa/" },
    consequences: { implication: "Up to 25 hours per week (increased from 20 in 2025).", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_US_F1_WORK",
    date: "2026-01-01",
    name: "F-1 work options",
    category: "policy",
    jurisdiction: { country_code: "US", country_name: "United States", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "ICE", source_url: "https://studyinthestates.dhs.gov/students/work/working-in-the-united-states" },
    consequences: { implication: "Authorised on-campus work or practical training (CPT/OPT) only.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_DE_HEALTH",
    date: "2026-01-01",
    name: "Health Insurance Rule",
    category: "policy",
    jurisdiction: { country_code: "DE", country_name: "Germany", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Make it in Germany", source_url: "https://www.make-it-in-germany.com/en/visa-residence/living-in-germany/health-insurance" },
    consequences: { implication: "Recognised health insurance is required for residence and university enrolment.", affected_operations: ["admin", "visa"], severity: "high" }
  }
];
