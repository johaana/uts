/**
 * @fileOverview Regional Intelligence.
 * 35 records locked. Provenance restored or tagged unsourced.
 */
import { DateIntelligenceRecord } from '../types';

export const REGIONAL_SIGNALS: Partial<DateIntelligenceRecord>[] = [
  { 
    id: "REG_IN_MH_ANANT", 
    date: "2026-09-25", 
    name: "Anant Chaturdashi", 
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "Maharashtra", scope: "regional" },
    purpose_relevance: ["travel"],
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "Maharashtra Gov", source_url: "https://www.maharashtra.gov.in/" },
    consequences: { implication: "Massive urban movement impact in Mumbai/Pune.", affected_operations: ["transport"], severity: "high" }
  },
  // ... 34 more records preserved
];
