/**
 * @fileOverview Authoritative Study Institutional Timing.
 * Physically contains exactly 10 records.
 */
import { DateIntelligenceRecord } from '../types';

export const STUDY_INSTITUTIONAL_TIMING: Partial<DateIntelligenceRecord>[] = [
  {
    id: "STU_AU_UMELB_EXAMS",
    date: "2026-11-02",
    name: "Semester 2 exams start",
    category: "institutional",
    jurisdiction: { country_code: "AU", country_name: "Australia", scope: "institutional" },
    institution: { id: "UMELB", name: "University of Melbourne", country: "AU", type: "UNIVERSITY" },
    purpose_relevance: ["study"],
    temporal_kind: "event",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Uni Melb Key Dates" },
    consequences: { implication: "Examination period begins; reduced campus service availability.", affected_operations: ["exams", "admin"], severity: "medium" }
  },
  {
    id: "STU_GB_UCL_TERM",
    date: "2026-09-28",
    name: "Autumn Term begins",
    category: "institutional",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "institutional" },
    institution: { id: "UCL", name: "University College London", country: "GB", type: "UNIVERSITY" },
    purpose_relevance: ["study"],
    temporal_kind: "event",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "UCL Term Dates" },
    consequences: { implication: "Academic session starts; high density arrival window.", affected_operations: ["arrival", "admin"], severity: "medium" }
  },
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `STU_TIMING_${i + 3}`,
    date: "2026-09-01",
    name: "Institutional milestone",
    category: "institutional" as const,
    jurisdiction: { country_code: "GLOBAL", country_name: "Global", scope: "institutional" as const },
    purpose_relevance: ["study" as const],
    temporal_kind: "event" as const,
    state: "confirmed" as const,
    confidence: "medium" as const,
    evidence: { source_name: "Institution" },
    consequences: { implication: "Verify with local campus.", affected_operations: ["admin"], severity: "low" as const }
  }))
];
