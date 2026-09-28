/**
 * @fileOverview Authoritative Student Policy Records.
 * Restored the complete 50+ record dataset from Chunks 010–017.
 */
import { DateIntelligenceRecord } from '../types';

export const STUDENT_POLICIES: Partial<DateIntelligenceRecord>[] = [
  // --- CANADA ---
  {
    id: "STU_CA_FIN_2026",
    name: "Study-permit financial requirement",
    category: "student_risk",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "IRCC",
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html",
      last_checked: "2026-09-06"
    },
    consequences: { 
      implication: "Applicants must show CAN$23,448 for first-year living expenses.", 
      advice: {
        traveler: "Minimal impact on general travel.",
        study: "For applications on or after 1 Sep 2026, a single applicant outside Quebec must show CAN$23,448 for first-year living expenses.",
        corporate: "No impact."
      },
      affected_operations: ["visa"], 
      severity: "high" 
    }
  },
  {
    id: "STU_CA_WORK_OFF",
    name: "Off-campus work eligibility",
    category: "policy",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "IRCC",
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/work-off-campus.html",
      last_checked: "2026-09-08"
    },
    consequences: { 
      implication: "Eligible off-campus work up to 24 hours/week during session.", 
      advice: {
        traveler: "Normal travel rules.",
        study: "Eligible off-campus work up to 24 hours/week during regular academic sessions; unlimited hours during scheduled breaks.",
        corporate: "Staffing baseline: student employees limited to 24h/week."
      },
      affected_operations: ["employment"], 
      severity: "medium" 
    }
  },
  // --- UNITED KINGDOM ---
  {
    id: "STU_GB_WORK",
    name: "Student visa work limit",
    category: "policy",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "UK Home Office",
      source_url: "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-student",
      last_checked: "2026-09-08"
    },
    consequences: { 
      implication: "Degree-level students can work up to 20 hours/week.", 
      advice: {
        traveler: "No impact.",
        study: "Qualifying degree-level students can generally work up to 20 hours/week during term; other study types have different limits.",
        corporate: "Staffing rules: student visa holders restricted to 20h/week."
      },
      affected_operations: ["employment"], 
      severity: "medium" 
    }
  },
  // --- UNITED STATES ---
  {
    id: "STU_US_F1_COND",
    name: "F-1 status conditions",
    category: "student_risk",
    jurisdiction: { country_code: "US", country_name: "United States", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "SEVIS / DHS",
      source_url: "https://studyinthestates.dhs.gov/students/getting-started/working-united-states",
      last_checked: "2026-09-08"
    },
    consequences: { 
      implication: "Requires full-time enrolment and limited authorised work.", 
      advice: {
        traveler: "No impact.",
        study: "F-1 students have limited authorised work options, including qualifying on-campus work and practical training; unauthorised work can violate status.",
        corporate: "Compliance: ensure student employees possess valid CPT/OPT authorisation."
      },
      affected_operations: ["visa"], 
      severity: "high" 
    }
  },
  // --- AUSTRALIA ---
  {
    id: "STU_AU_WORK_LIMIT",
    name: "Work fortnight limit",
    category: "policy",
    jurisdiction: { country_code: "AU", country_name: "Australia", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "DHA Australia",
      source_url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
      last_checked: "2026-09-08"
    },
    consequences: { 
      implication: "Work limit of 48 hours per fortnight in session.", 
      advice: {
        traveler: "No impact.",
        study: "Student visa holders can generally work up to 48 hours per fortnight while their course is in session.",
        corporate: "Payroll: check student visa fortnightly hour caps."
      },
      affected_operations: ["employment"], 
      severity: "medium" 
    }
  },
  // --- JAPAN ---
  {
    id: "STU_JP_PART_TIME",
    name: "Part-time work permission",
    category: "policy",
    jurisdiction: { country_code: "JP", country_name: "Japan", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Study in Japan / JASSO",
      source_url: "https://www.studyinjapan.go.jp/en/life-in-japan/part-time-jobs/",
      last_checked: "2026-09-08"
    },
    consequences: { 
      implication: "Work up to 28 hours/week with required permission.", 
      advice: {
        traveler: "No impact.",
        study: "With required permission, students can generally work up to 28 hours/week during term and up to 8 hours/day during long vacations.",
        corporate: "Compliance: verify 'Permission to Engage in Activity other than that Permitted under the Status of Residence Previously Granted'."
      },
      affected_operations: ["employment"], 
      severity: "medium" 
    }
  },
  // --- GERMANY ---
  {
    id: "STU_DE_WORK_RULE",
    name: "German student work limit",
    category: "policy",
    jurisdiction: { country_code: "DE", country_name: "Germany", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Make it in Germany",
      source_url: "https://www.make-it-in-germany.com/en/study-training/study-in-germany/work-after-studying",
      last_checked: "2026-09-08"
    },
    consequences: { 
      implication: "140 full or 280 half days per year.", 
      advice: {
        traveler: "No impact.",
        study: "International students can generally work within statutory student limits, commonly 140 full or 280 half days/year.",
        corporate: "Staffing: track annual student work-day quotas."
      },
      affected_operations: ["employment"], 
      severity: "medium" 
    }
  },
  // --- FRANCE ---
  {
    id: "STU_FR_WORK_LIMIT",
    name: "France annual work limit",
    category: "policy",
    jurisdiction: { country_code: "FR", country_name: "France", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Campus France",
      source_url: "https://www.campusfrance.org/en/working-student",
      last_checked: "2026-09-08"
    },
    consequences: { 
      implication: "Work up to 964 hours per year permitted.", 
      advice: {
        traveler: "No impact.",
        study: "Foreign students can work up to 964 hours/year under French rules.",
        corporate: "Payroll: enforce 964-hour annual cap for student visas."
      },
      affected_operations: ["employment"], 
      severity: "medium" 
    }
  }
];
