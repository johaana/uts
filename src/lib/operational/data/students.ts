/**
 * @fileOverview Authoritative Student Policy Records.
 * Physically contains core policy records and expanded global study rules from legacy notes.
 */
import { DateIntelligenceRecord } from '../types';

export const STUDENT_POLICIES: Partial<DateIntelligenceRecord>[] = [
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
    consequences: { implication: "Applicants must show CAN$23,448 for first-year living expenses.", affected_operations: ["visa"], severity: "high" }
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
    consequences: { implication: "Eligible off-campus work up to 24 hours/week during session.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_CA_PAL",
    name: "Provincial Attestation Letter",
    category: "policy",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "IRCC",
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/apply.html",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Study permit applications may require a PAL/TAL.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_CA_PGWP",
    name: "Post-study work (PGWP)",
    category: "policy",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "IRCC",
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation.html",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Eligible graduates may qualify for a PGWP.", affected_operations: ["visa"], severity: "medium" }
  },
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
    consequences: { implication: "Degree-level students can work up to 20 hours/week.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_GB_ARRIVAL",
    name: "Arrival window",
    category: "policy",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "UK Home Office",
      source_url: "https://www.gov.uk/student-visa",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Arrival permitted up to 1 month before course start.", affected_operations: ["arrival"], severity: "low" }
  },
  {
    id: "STU_GB_APPLY",
    name: "Application timing",
    category: "policy",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "UK Home Office",
      source_url: "https://www.gov.uk/student-visa",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Apply up to 6 months before course start.", affected_operations: ["visa"], severity: "medium" }
  },
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
    consequences: { implication: "Requires full-time enrolment and limited authorised work.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_US_SCREEN",
    name: "Visa screening requirements",
    category: "student_risk",
    jurisdiction: { country_code: "US", country_name: "United States", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Dept of State",
      source_url: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "F/M/J applicants are subject to vetting.", affected_operations: ["visa"], severity: "high" }
  },
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
    consequences: { implication: "Work limit of 48 hours per fortnight in session.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_AU_OSHC",
    name: "Health cover (OSHC)",
    category: "policy",
    jurisdiction: { country_code: "AU", country_name: "Australia", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "DHA Australia",
      source_url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/adequate-health-insurance",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "OSHC required for the required student-visa period.", affected_operations: ["health"], severity: "medium" }
  },
  {
    id: "STU_IT_WORK_AUTH",
    name: "Work authorization",
    category: "policy",
    jurisdiction: { country_code: "IT", country_name: "Italy", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Universitaly",
      source_url: "https://www.universitaly.it/index.php/students/working",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Work up to 20 hours/week or 1,040 hours/year.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_IT_PERMIT_T",
    name: "Residence permit timing",
    category: "policy",
    jurisdiction: { country_code: "IT", country_name: "Italy", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Polizia di Stato",
      source_url: "https://www.universitaly.it/index.php/students/visto",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Apply within 8 working days of arrival.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_ES_WORK_HR",
    name: "Compatible work hours",
    category: "policy",
    jurisdiction: { country_code: "ES", country_name: "Spain", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Spain Ministry of Migration",
      source_url: "https://inclusion.gob.es/en/web/migraciones/w/estancia-por-estudios",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Work up to 30 hours/week compatible with study.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_ES_TIE_RE",
    name: "TIE requirement",
    category: "policy",
    jurisdiction: { country_code: "ES", country_name: "Spain", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Spain Migration",
      source_url: "https://inclusion.gob.es/en/web/migraciones/w/estancia-por-estudios",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Foreigner ID Card (TIE) required for stays longer than 6 months.", affected_operations: ["visa"], severity: "medium" }
  },
  {
    id: "STU_CH_WORK_R",
    name: "Swiss work conditions",
    category: "policy",
    jurisdiction: { country_code: "CH", country_name: "Switzerland", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "State Secretariat for Migration (SEM)",
      source_url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/auslaendische_arbeitnehmende.html",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Work up to 15 hours/week after the first six months.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_CH_ENTRY",
    name: "Swiss entry route",
    category: "policy",
    jurisdiction: { country_code: "CH", country_name: "Switzerland", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "SEM Switzerland",
      source_url: "https://www.sem.admin.ch/sem/en/home/themen/einreise.html",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "National visa and cantonal residence authorisation required.", affected_operations: ["visa"], severity: "high" }
  },
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
    consequences: { implication: "Work up to 28 hours/week with required permission.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_SG_ICA_T",
    name: "ICA Student's Pass timing",
    category: "policy",
    jurisdiction: { country_code: "SG", country_name: "Singapore", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "ICA Singapore",
      source_url: "https://www.ica.gov.sg/reside/STP/apply/ihl",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Apply at least 2 months before course start.", affected_operations: ["visa"], severity: "medium" }
  },
  {
    id: "STU_IN_VISA",
    name: "Indian Student Visa",
    category: "policy",
    jurisdiction: { country_code: "IN", country_name: "India", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "MHA / Bureau of Immigration India",
      source_url: "https://indianvisaonline.gov.in/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Student visa required; employment is not permitted.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_AE_SPONSOR",
    name: "UAE Study sponsorship",
    category: "policy",
    jurisdiction: { country_code: "AE", country_name: "United Arab Emirates", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "UAE Government Portal",
      source_url: "https://u.ae/en/information-and-services/education/higher-education",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Residence sponsorship through educational institution required.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_DE_WORK_RULE",
    name: "Student work limit",
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
    consequences: { implication: "140 full or 280 half days per year.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_FR_WORK_LIMIT",
    name: "Annual work limit",
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
    consequences: { implication: "Work up to 964 hours per year permitted.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_NL_WORK",
    name: "Dutch work conditions",
    category: "policy",
    jurisdiction: { country_code: "NL", country_name: "Netherlands", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "IND Netherlands",
      source_url: "https://ind.nl/en/work/working-in-the-netherlands-with-a-residence-permit-for-study",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Employer-arranged work permit (TWV) generally required.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_IE_STAMP2",
    name: "Stamp 2 work rights",
    category: "policy",
    jurisdiction: { country_code: "IE", country_name: "Ireland", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Irish Immigration Service",
      source_url: "https://www.irishimmigration.ie/coming-to-study-in-ireland/what-are-my-study-options/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Work 20h in term, 40h in specified holidays.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_KR_D2",
    name: "D-2 Study status",
    category: "policy",
    jurisdiction: { country_code: "KR", country_name: "South Korea", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Study in Korea / HiKorea",
      source_url: "https://studyinkorea.go.kr/en/plan/visaAndStay.do",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Degree-seeking students use D-2 route.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_NZ_FEE_P",
    name: "Offer of place requirement",
    category: "policy",
    jurisdiction: { country_code: "NZ", country_name: "New Zealand", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Immigration New Zealand",
      source_url: "https://www.immigration.govt.nz/visas/fee-paying-student-visa/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Approved course and offer of place required for visa.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_BE_WORK",
    name: "Belgian work limit",
    category: "policy",
    jurisdiction: { country_code: "BE", country_name: "Belgium", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Studentatwork.be",
      source_url: "https://www.studentatwork.be/en/student-and-student-job.html",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Work up to 20 hours/week during term.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_BE_RES",
    name: "Belgium residence permit",
    category: "policy",
    jurisdiction: { country_code: "BE", country_name: "Belgium", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "IBZ Belgium",
      source_url: "https://dofi.ibz.be/en/themes/third-country-nationals/study",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Non-EU students require long-term student visa.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_PL_WORK",
    name: "Poland work rights",
    category: "policy",
    jurisdiction: { country_code: "PL", country_name: "Poland", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Cudzoziemcy Gov PL",
      source_url: "https://mos.cudzoziemcy.gov.pl/en/informacje/praca-student/objasnienie_EN",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Full-time students can work without work permit.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_PL_FIN",
    name: "Poland fund proof",
    category: "policy",
    jurisdiction: { country_code: "PL", country_name: "Poland", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Cudzoziemcy Gov PL",
      source_url: "https://mos.cudzoziemcy.gov.pl/en/categories-information-on-the-conditions-of-entry-and-stay-of-foreigners-in-poland/financial-means",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Proof of living funds required for visa.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_CZ_WORK",
    name: "Czechia work rights",
    category: "policy",
    jurisdiction: { country_code: "CZ", country_name: "Czechia", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Ministry of the Interior of the Czech Republic",
      source_url: "https://frs.gov.cz/en/life-in-the-czech-republic/employment/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Free access to labour market for full-time students.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_CZ_RES",
    name: "Czechia residence",
    category: "policy",
    jurisdiction: { country_code: "CZ", country_name: "Czechia", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Ministry of the Interior of the Czech Republic",
      source_url: "https://frs.gov.cz/en/visa-and-residence-permits/types-of-residence/study/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Long-term visa/residence permit required for study.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_HU_WORK",
    name: "Hungary work limit",
    category: "policy",
    jurisdiction: { country_code: "HU", country_name: "Hungary", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "National Directorate-General for Aliens Policing (OIF)",
      source_url: "https://oif.gov.hu/factsheets/study",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Work up to 30 hours/week during term.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_HU_RES",
    name: "Hungary residence",
    category: "policy",
    jurisdiction: { country_code: "HU", country_name: "Hungary", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "OIF Hungary",
      source_url: "https://oif.gov.hu/factsheets/residence-permit-for-the-purpose-of-studies",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Residence permit for study purpose required.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_RO_WORK",
    name: "Romania work rights",
    category: "policy",
    jurisdiction: { country_code: "RO", country_name: "Romania", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "General Inspectorate for Immigration (IGI)",
      source_url: "https://igi.mai.gov.ro/en/study/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Work up to 4 hours/day without separate permit.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_RO_VISA",
    name: "Romania study visa",
    category: "policy",
    jurisdiction: { country_code: "RO", country_name: "Romania", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Ministry of Foreign Affairs Romania",
      source_url: "https://igi.mai.gov.ro/en/study/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Long-stay visa D/SD required.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_GR_WORK",
    name: "Greece work rights",
    category: "policy",
    jurisdiction: { country_code: "GR", country_name: "Greece", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Ministry of Migration and Asylum Greece",
      source_url: "https://migration.gov.gr/en/migration-policy/immigration-policy/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Part-time work permitted per residence conditions.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_GR_RES",
    name: "Greece residence",
    category: "policy",
    jurisdiction: { country_code: "GR", country_name: "Greece", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Greece Ministry of Foreign Affairs",
      source_url: "https://migration.gov.gr/en/migration-policy/immigration-policy/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "National visa and residence permit required.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_PT_WORK",
    name: "Portugal work rights",
    category: "policy",
    jurisdiction: { country_code: "PT", country_name: "Portugal", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "AIMA Portugal",
      source_url: "https://aima.gov.pt/en/viver/study",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Work permitted subject to notification to AIMA.", affected_operations: ["employment"], severity: "medium" }
  },
  {
    id: "STU_PT_VISA",
    name: "Portugal study visa",
    category: "policy",
    jurisdiction: { country_code: "PT", country_name: "Portugal", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "AIMA Portugal",
      source_url: "https://aima.gov.pt/en/viver/estudar",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Residence visa for study required for non-EU.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_PH_VISA",
    name: "Philippines study visa",
    category: "policy",
    jurisdiction: { country_code: "PH", country_name: "Philippines", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Bureau of Immigration Philippines",
      source_url: "https://immigration.gov.ph/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "9(f) Student Visa required for academic programmes.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_TR_RES",
    name: "Turkey study permit",
    category: "policy",
    jurisdiction: { country_code: "TR", country_name: "Turkey", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Turkey Directorate General of Migration Management",
      source_url: "https://en.goc.gov.tr/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Study visa and residence permit mandatory.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_KE_PASS",
    name: "Kenya Student Pass",
    category: "policy",
    jurisdiction: { country_code: "KE", country_name: "Kenya", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Directorate of Immigration Services Kenya",
      source_url: "https://immigration.go.ke/students-pass/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Official pass required for all foreign students.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_NG_STR",
    name: "Nigeria STR Visa",
    category: "policy",
    jurisdiction: { country_code: "NG", country_name: "Nigeria", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Nigeria Immigration Service",
      source_url: "https://immigration.gov.ng/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Subject to Regularization (STR) visa required for study.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_BR_VITEM",
    name: "Brazil VITEM IV",
    category: "policy",
    jurisdiction: { country_code: "BR", country_name: "Brazil", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Brazil Ministry of Foreign Affairs (MRE)",
      source_url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/vitem-iv",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "VITEM IV student visa required for long stays.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_AR_RES",
    name: "Argentina residence",
    category: "policy",
    jurisdiction: { country_code: "AR", country_name: "Argentina", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Dirección Nacional de Migraciones Argentina",
      source_url: "https://www.argentina.gob.ar/interior/migraciones",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Temporary residence permit required for formal study.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_CL_VISA",
    name: "Chile student visa",
    category: "policy",
    jurisdiction: { country_code: "CL", country_name: "Chile", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Servicio Nacional de Migraciones Chile",
      source_url: "https://serviciomigraciones.cl/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Student visa required for programmes over 90 days.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_CO_VISA",
    name: "Colombia V/M visa",
    category: "policy",
    jurisdiction: { country_code: "CO", country_name: "Colombia", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Cancillería Colombia",
      source_url: "https://www.cancilleria.gov.co/tramites_servicios/visas",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "V or M student visa required depending on duration.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_MX_RES",
    name: "Mexico study permit",
    category: "policy",
    jurisdiction: { country_code: "MX", country_name: "Mexico", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "SRE Mexico",
      source_url: "https://www.gob.mx/sre/acciones-y-programas/visas-para-extranjeros",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Temporary resident visa for students required.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_TH_ED",
    name: "Thailand Non-ED",
    category: "policy",
    jurisdiction: { country_code: "TH", country_name: "Thailand", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Ministry of Foreign Affairs Thailand",
      source_url: "https://www.mfa.go.th/en/index",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Non-immigrant ED visa required for academic study.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_ID_ITAS",
    name: "Indonesia ITAS",
    category: "policy",
    jurisdiction: { country_code: "ID", country_name: "Indonesia", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Directorate General of Immigration Indonesia",
      source_url: "https://www.imigrasi.go.id/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Study ITAS required for long-term programmes.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_MY_PASS",
    name: "Malaysia Student Pass",
    category: "policy",
    jurisdiction: { country_code: "MY", country_name: "Malaysia", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Education Malaysia Global Services (EMGS)",
      source_url: "https://educationmalaysia.gov.my/",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Official Student Pass required for all international students.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_HK_VISA",
    name: "HK Student Visa",
    category: "policy",
    jurisdiction: { country_code: "HK", country_name: "Hong Kong", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Immigration Department Hong Kong",
      source_url: "https://www.immd.gov.hk/eng/services/visas/study.html",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Student visa/entry permit required for non-local study.", affected_operations: ["visa"], severity: "high" }
  },
  {
    id: "STU_TW_VISA",
    name: "Taiwan study visa",
    category: "policy",
    jurisdiction: { country_code: "TW", country_name: "Taiwan", scope: "national" },
    purpose_relevance: ["study"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: {
      source_name: "Bureau of Consular Affairs Taiwan (BOCA)",
      source_url: "https://www.boca.gov.tw/cp-166-284-6f081-2.html",
      last_checked: "2026-09-08"
    },
    consequences: { implication: "Resident visa for study required for non-local students.", affected_operations: ["visa"], severity: "high" }
  }
];
