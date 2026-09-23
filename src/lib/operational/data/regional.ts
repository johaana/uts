/**
 * @fileOverview Regional Intelligence.
 * Contains 35 sub-national operational signals.
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
    evidence: null,
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
  },
  { id: "REG_ES_CT_NAT", valid_from: "2026-09-11", name: "National Day of Catalonia", category: "regional", jurisdiction: { country_code: "ES", country_name: "Spain", region: "Catalonia", scope: "regional" }, purpose_relevance: ["travel"], temporal_kind: "event", state: "confirmed", confidence: "unsourced", evidence: null, consequences: { implication: "Regional holiday; major demonstrations expected in Barcelona.", affected_operations: ["transport"], severity: "medium" } },
  { id: "REG_UK_SCT_ANDR", valid_from: "2026-11-30", name: "St. Andrew's Day", category: "regional", jurisdiction: { country_code: "GB", country_name: "United Kingdom", region: "Scotland", scope: "regional" }, purpose_relevance: ["business"], temporal_kind: "event", state: "confirmed", confidence: "unsourced", evidence: null, consequences: { implication: "Bank holiday in Scotland.", affected_operations: ["banking"], severity: "medium" } },
  { id: "REG_JP_KYO_GION", valid_from: "2026-07-17", name: "Gion Matsuri", category: "regional", jurisdiction: { country_code: "JP", country_name: "Japan", region: "Kyoto", scope: "local" }, purpose_relevance: ["travel"], temporal_kind: "event", state: "confirmed", confidence: "unsourced", evidence: null, consequences: { implication: "Major festival in Kyoto; severe traffic impact.", affected_operations: ["transport"], severity: "high" } },
  { id: "REG_IN_WB_BIJOY", valid_from: "2026-10-21", name: "Bijoya Dashami", category: "regional", jurisdiction: { country_code: "IN", country_name: "India", region: "West Bengal", scope: "regional" }, purpose_relevance: ["travel"], temporal_kind: "event", state: "confirmed", confidence: "unsourced", evidence: null, consequences: { implication: "Durga Puja immersion; massive crowds in Kolkata.", affected_operations: ["transport"], severity: "high" } }
];