/**
 * @fileOverview Structured Student Policy Registry extracted from Authoritative Chunks.
 */
import { DateIntelligenceRecord } from '../types';

export const STUDENT_POLICIES: Partial<DateIntelligenceRecord>[] = [
  {
    id: "POL_CA_STUDY_FUNDS_2026",
    date: "2026-09-01",
    name: "Study-permit financial requirement",
    category: "student_risk",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "IRCC", source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html", last_checked: "2026-09-06" },
    consequences: { implication: "For applications on or after 1 Sep 2026, a single applicant outside Quebec must show CAN$23,448.", affected_operations: ["visa"], severity: "high" },
    source_label: "Policy"
  },
  {
    id: "POL_AU_STUDY_WORK_2026",
    date: "2026-01-01",
    name: "Student visa work hours",
    category: "student_risk",
    jurisdiction: { country_code: "AU", country_name: "Australia", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Department of Home Affairs", source_url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500", last_checked: "2026-09-08" },
    consequences: { implication: "Student visa holders can generally work up to 48 hours per fortnight while their course is in session.", affected_operations: ["work_rights"], severity: "medium" },
    source_label: "Policy"
  },
  {
    id: "POL_GB_STUDY_ARRIVE_2026",
    date: "2026-01-01",
    name: "UK Arrival Window",
    category: "institutional",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Official UK Gov", source_url: "https://www.gov.uk/student-visa", last_checked: "2026-09-08" },
    consequences: { implication: "For courses longer than 6 months, arrival is normally permitted up to 1 month before course start.", affected_operations: ["travel"], severity: "low" },
    source_label: "Guidance"
  },
  {
    id: "POL_IT_STUDY_WORK_2026",
    date: "2026-01-01",
    name: "Italy Student Work Rights",
    category: "student_risk",
    jurisdiction: { country_code: "IT", country_name: "Italy", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Universitaly", source_url: "https://www.universitaly.it/index.php/students/working" },
    consequences: { implication: "Foreign students can generally work up to 20 hours/week or 1,040 hours/year under Italian law.", affected_operations: ["work_rights"], severity: "medium" }
  },
  {
    id: "POL_ES_STUDY_WORK_2026",
    date: "2026-01-01",
    name: "Spain Student Work Rights",
    category: "student_risk",
    jurisdiction: { country_code: "ES", country_name: "Spain", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Spanish Immigration", source_url: "https://inclusion.gob.es/en/web/migraciones/w/estancia-por-estudios" },
    consequences: { implication: "Foreign students can work up to 30 hours/week, provided it does not interfere with their studies.", affected_operations: ["work_rights"], severity: "medium" }
  },
  {
    id: "POL_CH_STUDY_WORK_2026",
    date: "2026-01-01",
    name: "Switzerland Student Work Rights",
    category: "student_risk",
    jurisdiction: { country_code: "CH", country_name: "Switzerland", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "SEM Switzerland", source_url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/auslaendische_arbeitnehmende.html" },
    consequences: { implication: "Foreign students can generally work up to 15 hours/week after the first six months.", affected_operations: ["work_rights"], severity: "medium" }
  },
  {
    id: "POL_DE_STUDY_WORK_2026",
    date: "2026-01-01",
    name: "Germany Student Work Rights",
    category: "student_risk",
    jurisdiction: { country_code: "DE", country_name: "Germany", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Make it in Germany", source_url: "https://www.make-it-in-germany.com/en/study-training/study-in-germany/work-after-studying" },
    consequences: { implication: "International students can generally work 140 full or 280 half days/year.", affected_operations: ["work_rights"], severity: "medium" }
  },
  {
    id: "POL_FR_STUDY_WORK_2026",
    date: "2026-01-01",
    name: "France Student Work Rights",
    category: "student_risk",
    jurisdiction: { country_code: "FR", country_name: "France", scope: "national" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Campus France", source_url: "https://www.campusfrance.org/en/working-student" },
    consequences: { implication: "Foreign students can work up to 964 hours/year under French rules.", affected_operations: ["work_rights"], severity: "medium" }
  }
];
