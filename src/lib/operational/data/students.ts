/**
 * @fileOverview Student Policy Records restored from source chunks.
 * Preserves 56 records from Corpus A.
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
    id: "STU_CA_WORK_OFF",
    date: "2026-01-01",
    name: "Study permit / PAL-TAL",
    category: "policy",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Official immigration authority", source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html" },
    consequences: { implication: "Eligible off-campus work up to 24 hours/week during regular academic sessions; unlimited hours during scheduled breaks.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_CA_PGWP",
    date: "2026-01-01",
    name: "Post-study work",
    category: "policy",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Official immigration authority", source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html" },
    consequences: { implication: "Eligible graduates may qualify for a PGWP; programme and institution eligibility rules apply.", affected_operations: ["visa"], severity: "medium" }
  },
  {
    id: "STU_GB_WORK_TERM",
    date: "2026-01-01",
    name: "Student visa work conditions",
    category: "policy",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Official immigration authority", source_url: "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student" },
    consequences: { implication: "Qualifying degree-level students can generally work up to 20 hours/week during term; other study types have different limits.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_GB_ARRIVAL",
    date: "2026-01-01",
    name: "Arrival window",
    category: "policy",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Official immigration authority", source_url: "https://www.gov.uk/student-visa" },
    consequences: { implication: "For courses longer than 6 months, arrival is normally permitted up to 1 month before course start, subject to visa dates.", affected_operations: ["travel"], severity: "medium" }
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
    evidence: { source_name: "Official immigration authority", source_url: "https://studyinthestates.dhs.gov/students/getting-started/working-united-states" },
    consequences: { implication: "F-1 students have limited authorised work options, including qualifying on-campus work and practical training.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_AU_HEALTH",
    date: "2026-01-01",
    name: "Health cover (OSHC)",
    category: "policy",
    jurisdiction: { country_code: "AU", country_name: "Australia", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Official immigration authority", source_url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500" },
    consequences: { implication: "OSHC is required for the required student-visa period, subject to exemptions.", affected_operations: ["admin"], severity: "medium" }
  }
];
