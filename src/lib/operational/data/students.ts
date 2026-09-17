/**
 * @fileOverview Structured Student Policy Registry extracted from chunks.
 */
import { DateIntelligenceRecord } from '../types';
import { COUNTRY_LABELS } from '../../calendar-intelligence';

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
  }
];
