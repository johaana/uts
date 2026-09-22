/**
 * @fileOverview Authoritative Study Records.
 * Contains 10 institutional milestones.
 */
import { DateIntelligenceRecord } from '../types';

export const STUDY_INSTITUTIONAL_TIMING: Partial<DateIntelligenceRecord>[] = [
  { 
    id: "STU_AU_UMELB_EXAMS", 
    valid_from: "2026-11-02", 
    name: "Semester 2 exams start", 
    category: "institutional", 
    jurisdiction: { country_code: "AU", country_name: "Australia", scope: "institutional" }, 
    institution: { id: "UMELB", name: "University of Melbourne", country: "AU", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "Uni Melb Key Dates", source_url: "https://students.unimelb.edu.au/course-admin/key-dates", last_checked: "2026-09-08" }, 
    consequences: { implication: "Examination period begins; reduced campus service availability.", affected_operations: ["exams", "admin"], severity: "medium" } 
  },
  { 
    id: "STU_GB_UCL_TERM", 
    valid_from: "2026-09-28", 
    name: "Autumn Term begins", 
    category: "institutional", 
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "institutional" }, 
    institution: { id: "UCL", name: "University College London", country: "GB", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "UCL Term Dates", source_url: "https://www.ucl.ac.uk/study/current-students/life-ucl/term-dates-and-closures", last_checked: "2026-09-08" }, 
    consequences: { implication: "Academic session starts; high density arrival window.", affected_operations: ["arrival", "admin"], severity: "medium" } 
  },
  { 
    id: "STU_CA_UT_TERM", 
    valid_from: "2026-09-08", 
    name: "Fall classes begin", 
    category: "institutional", 
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "institutional" }, 
    institution: { id: "UTORONTO", name: "University of Toronto", country: "CA", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "U of T Sessional Dates", source_url: "https://www.utoronto.ca/", last_checked: "2026-09-08" }, 
    consequences: { implication: "Classes start; campus services at peak capacity.", affected_operations: ["arrival"], severity: "medium" } 
  },
  { 
    id: "STU_US_HARVARD_MOVE", 
    valid_from: "2026-08-26", 
    name: "Freshman move-in", 
    category: "institutional", 
    jurisdiction: { country_code: "US", country_name: "United States", scope: "institutional" }, 
    institution: { id: "HARVARD", name: "Harvard University", country: "US", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "Harvard Calendar", source_url: "https://www.harvard.edu/", last_checked: "2026-09-08" }, 
    consequences: { implication: "Campus housing opens for new students.", affected_operations: ["housing"], severity: "medium" } 
  },
  { 
    id: "STU_JP_UT_SEM_S", 
    valid_from: "2026-10-01", 
    name: "Autumn Semester begins", 
    category: "institutional", 
    jurisdiction: { country_code: "JP", country_name: "Japan", scope: "institutional" }, 
    institution: { id: "UTOKYO", name: "University of Tokyo", country: "JP", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "UTokyo Academic Calendar", source_url: "https://www.u-tokyo.ac.jp/en/index.html", last_checked: "2026-09-08" }, 
    consequences: { implication: "Course registration and classes begin.", affected_operations: ["admin"], severity: "medium" } 
  },
  { 
    id: "STU_SG_NUS_EXAM_S", 
    valid_from: "2026-11-23", 
    name: "Semester 1 exams begin", 
    category: "institutional", 
    jurisdiction: { country_code: "SG", country_name: "Singapore", scope: "institutional" }, 
    institution: { id: "NUS", name: "National University of Singapore", country: "SG", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "NUS Calendar", source_url: "https://www.nus.edu.sg/registrar/academic-information-policies/academic-calendar", last_checked: "2026-09-08" }, 
    consequences: { implication: "Strict examination protocols in force.", affected_operations: ["exams"], severity: "high" } 
  },
  { 
    id: "STU_IN_IIT_REG_S", 
    valid_from: "2026-07-20", 
    name: "Autumn Semester registration", 
    category: "institutional", 
    jurisdiction: { country_code: "IN", country_name: "India", scope: "institutional" }, 
    institution: { id: "IITB", name: "IIT Bombay", country: "IN", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "IITB Academic", source_url: "https://www.iitb.ac.in/", last_checked: "2026-09-08" }, 
    consequences: { implication: "Mandatory in-person registration window.", affected_operations: ["admin"], severity: "high" } 
  },
  { 
    id: "STU_AE_NYU_TERM_S", 
    valid_from: "2026-08-30", 
    name: "Fall classes begin", 
    category: "institutional", 
    jurisdiction: { country_code: "AE", country_name: "United Arab Emirates", scope: "institutional" }, 
    institution: { id: "NYUAD", name: "NYU Abu Dhabi", country: "AE", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "NYUAD Calendar", source_url: "https://nyuad.nyu.edu/en/", last_checked: "2026-09-08" }, 
    consequences: { implication: "First day of academic instruction.", affected_operations: ["arrival"], severity: "medium" } 
  },
  { 
    id: "STU_DE_HU_SEM_S", 
    valid_from: "2026-10-12", 
    name: "Winter Semester lectures begin", 
    category: "institutional", 
    jurisdiction: { country_code: "DE", country_name: "Germany", scope: "institutional" }, 
    institution: { id: "HUBERLIN", name: "Humboldt University Berlin", country: "DE", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "HU Berlin Calendar", source_url: "https://www.hu-berlin.de/en", last_checked: "2026-09-08" }, 
    consequences: { implication: "Main lecture period commences.", affected_operations: ["admin"], severity: "medium" } 
  },
  { 
    id: "STU_FR_SORB_REG_S", 
    valid_from: "2026-09-01", 
    name: "Administrative registration window", 
    category: "institutional", 
    jurisdiction: { country_code: "FR", country_name: "France", scope: "institutional" }, 
    institution: { id: "SORBONNE", name: "Sorbonne University", country: "FR", type: "UNIVERSITY" }, 
    purpose_relevance: ["study"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "Sorbonne Calendar", source_url: "https://www.sorbonne-universite.fr/en", last_checked: "2026-09-08" }, 
    consequences: { implication: "Deadline for formal enrolment completion.", affected_operations: ["admin"], severity: "high" } 
  }
];
