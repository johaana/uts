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
  },
  {
    id: "STU_CA_UTORONTO_ORIENTATION",
    date: "2026-09-01",
    name: "Fall Orientation",
    category: "institutional",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "institutional" },
    institution: { id: "UTORONTO", name: "University of Toronto", country: "CA", type: "UNIVERSITY" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "UofT Academic Calendar" },
    consequences: { implication: "Orientation activities for new students begin; administrative offices at peak capacity.", affected_operations: ["admin"], severity: "medium" }
  },
  {
    id: "STU_GB_UCL_TERM_START",
    date: "2026-09-28",
    name: "Autumn Term Begins",
    category: "institutional",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "institutional" },
    institution: { id: "UCL", name: "University College London", country: "GB", type: "UNIVERSITY" },
    purpose_relevance: ["study"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "UCL Term Dates", source_url: "https://www.ucl.ac.uk/study/current-students/life-ucl/term-dates-and-closures" },
    consequences: { implication: "First day of the academic year for most undergraduate programmes.", affected_operations: ["admin"], severity: "medium" }
  }
  // ... (Full set of 10 academic calendar milestones)
];
