/**
 * @fileOverview Regional Intelligence.
 * Restored Maharashtra-specific signals from authoritative chunks.
 */
import { DateIntelligenceRecord } from '../types';

export const REGIONAL_SIGNALS: Partial<DateIntelligenceRecord>[] = [
  { 
    id: "REG_IN_MH_ANANT", 
    valid_from: "2026-09-25", 
    name: "Anant Chaturdashi (Visarjan)", 
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "Maharashtra", scope: "regional" },
    purpose_relevance: ["travel", "logistics"],
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "Maharashtra Police Traffic Advisory", source_url: "https://trafficpolicemumbai.maharashtra.gov.in/" },
    consequences: { implication: "Massive urban movement impact in Mumbai/Pune due to immersion processions. Severe road closures.", affected_operations: ["transport"], severity: "high" }
  },
  { 
    id: "REG_IN_MH_JANM", 
    valid_from: "2026-09-04", 
    name: "Dahi Handi Processions", 
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "Maharashtra", scope: "regional" },
    purpose_relevance: ["travel"],
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "medium", 
    evidence: { source_name: "Local News / Municipal Advisory", source_url: "https://mumbaipolice.gov.in/" },
    consequences: { implication: "High density human pyramids in urban centers. Expect localized transport delays in Mumbai suburbs.", affected_operations: ["transport"], severity: "medium" }
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
    confidence: "high",
    evidence: { source_name: "Business Victoria", source_url: "https://business.vic.gov.au/business-information/public-holidays", last_checked: "2026-09-08" },
    consequences: { implication: "Public holiday in Victoria; major office and bank closures in Melbourne.", affected_operations: ["banking", "admin"], severity: "high" }
  },
  { 
    id: "REG_DE_BY_EPI", 
    valid_from: "2026-01-06", 
    name: "Epiphany", 
    category: "regional", 
    jurisdiction: { country_code: "DE", country_name: "Germany", region: "Bavaria", scope: "regional" }, 
    purpose_relevance: ["business"], 
    temporal_kind: "event", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { 
      source_name: "Bavaria State Ministry", 
      source_url: "https://www.stmas.bayern.de/arbeitsschutz/feiertage/index.php",
      last_checked: "2026-09-08"
    }, 
    consequences: { implication: "Regional public holiday in Bavaria.", affected_operations: ["admin"], severity: "medium" } 
  }
];
