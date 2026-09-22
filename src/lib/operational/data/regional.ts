/**
 * @fileOverview Regional Intelligence.
 * Contains sub-national operational signals.
 */
import { DateIntelligenceRecord } from '../types';

export const REGIONAL_SIGNALS: Partial<DateIntelligenceRecord>[] = [
  { 
    id: "REG_IN_MH_ANANT", 
    valid_from: "2026-09-25", 
    name: "Anant Chaturdashi", 
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "Maharashtra", scope: "regional" },
    purpose_relevance: ["travel"],
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "unsourced", 
    evidence: { source_name: "Maharashtra Government", source_url: "https://www.maharashtra.gov.in/", last_checked: "2026-09-08" },
    consequences: { implication: "Massive urban movement impact in Mumbai/Pune.", affected_operations: ["transport"], severity: "high" }
  },
  {
    id: "REG_AU_VIC_MELB",
    valid_from: "2026-11-03",
    name: "Melbourne Cup Day",
    category: "regional",
    jurisdiction: { country_code: "AU", country_name: "Australia", region: "Victoria", scope: "regional" },
    purpose_relevance: ["business"],
    temporal_kind: "event",
    state: "confirmed",
    confidence: "unsourced",
    evidence: { source_name: "Business Victoria", source_url: "https://business.vic.gov.au/business-information/public-holidays", last_checked: "2026-09-08" },
    consequences: { implication: "Public holiday in Victoria; major office and bank closures in Melbourne.", affected_operations: ["banking", "admin"], severity: "high" }
  }
];
