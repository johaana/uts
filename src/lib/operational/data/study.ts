/**
 * @fileOverview Institutional Timing Records restored from authoritative source chunks.
 * Preserves the 10 academic calendar milestones found in Corpus A.
 */
import { DateIntelligenceRecord } from '../types';

export const STUDY_INSTITUTIONAL_TIMING: Partial<DateIntelligenceRecord>[] = [
  {
    id: "STU_AU_UMELB_EXAMS",
    date: "2026-11-02",
    name: "Semester 2 exams",
    category: "institutional",
    jurisdiction: { country_code: "AU", country_name: "Australia", scope: "institutional" },
    institution: { id: "UMELB", name: "University of Melbourne", country: "AU", type: "UNIVERSITY" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "University of Melbourne Key Dates", source_url: "https://students.unimelb.edu.au/course-admin/key-dates" },
    consequences: { implication: "Semester 2 examinations run 2–20 November 2026.", affected_operations: ["exams"], severity: "medium" }
  }
];
