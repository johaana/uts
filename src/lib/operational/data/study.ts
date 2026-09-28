/**
 * @fileOverview Authoritative Study Records.
 * Contains institutional milestones expanded to 2026-2028.
 */
import { DateIntelligenceRecord } from '../types';

export const STUDY_INSTITUTIONAL_TIMING: Partial<DateIntelligenceRecord>[] = [
  { 
    id: "STU_AU_UMELB_EXAMS", 
    name: "Semester 2 exams start", 
    category: "institutional", 
    jurisdiction: { country_code: "AU", country_name: "Australia", scope: "institutional" }, 
    institution: { id: "UMELB", name: "University of Melbourne", country: "AU", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "recurring",
    rule_definition: {
      kind: "dated",
      name: "Semester 2 exams start",
      type: "institutional",
      status: "confirmed",
      purpose_relevance: ["study"],
      dates: { 2026: "2026-11-02", 2027: "2027-11-01", 2028: "2028-11-06" }
    },
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "Uni Melb Key Dates", source_url: "https://students.unimelb.edu.au/course-admin/key-dates", last_checked: "2026-09-08" }, 
    consequences: { implication: "Examination period begins; reduced campus service availability.", advice: { traveler: "Minimal impact on general travel.", study: "Examination period begins; admissions and administrative services are limited. Campus facilities are at peak usage.", corporate: "Normal operations." }, affected_operations: ["exams", "admin"], severity: "medium" } 
  },
  { 
    id: "STU_GB_UCL_TERM", 
    name: "Autumn Term begins", 
    category: "institutional", 
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "institutional" }, 
    institution: { id: "UCL", name: "University College London", country: "GB", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "recurring",
    rule_definition: {
      kind: "dated",
      name: "Autumn Term begins",
      type: "institutional",
      status: "confirmed",
      purpose_relevance: ["study"],
      dates: { 2026: "2026-09-28", 2027: "2027-09-27", 2028: "2028-09-25" }
    },
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "UCL Term Dates", source_url: "https://www.ucl.ac.uk/study/current-students/life-ucl/term-dates-and-closures", last_checked: "2026-09-08" }, 
    consequences: { implication: "Academic session starts; high density arrival window.", advice: { traveler: "High arrival density at major London airports.", study: "Academic session starts; expect long wait times for in-person registration and support services.", corporate: "Normal operations." }, affected_operations: ["arrival", "admin"], severity: "medium" } 
  }
];
