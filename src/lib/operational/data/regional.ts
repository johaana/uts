/**
 * @fileOverview Regional Intelligence.
 * High-fidelity urban movement signals restored from authoritative fragments.
 */
import { DateIntelligenceRecord } from '../types';

export const REGIONAL_SIGNALS: Partial<DateIntelligenceRecord>[] = [
  { 
    id: "REG_IN_MH_ANANT", 
    name: "Anant Chaturdashi (Visarjan)", 
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "Maharashtra", scope: "regional" },
    purpose_relevance: ["travel", "logistics"],
    temporal_kind: "recurring",
    rule_definition: {
      kind: "dated",
      name: "Anant Chaturdashi (Visarjan)",
      type: "regional",
      status: "confirmed",
      purpose_relevance: ["travel", "logistics"],
      dates: { 2026: "2026-09-25", 2027: "2027-09-14", 2028: "2028-09-03" }
    },
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "Maharashtra Police Traffic Advisory", source_url: "https://trafficpolicemumbai.maharashtra.gov.in/" },
    consequences: { 
      implication: "Massive urban movement impact in Mumbai/Pune due to immersion processions.",
      advice: {
        traveler: "Expect significant road closures and limited public transport access in Mumbai and Pune. Pedestrian movement is extremely high; avoid the city center and seaside promenades.",
        study: "Institutional facilities in Mumbai are likely to be inaccessible due to road blocks. Most universities will be closed.",
        corporate: "Severe logistical disruption. Many private companies observe a total shutdown to avoid employee commute issues."
      },
      affected_operations: ["transport"], 
      severity: "high" 
    }
  },
  { 
    id: "REG_IN_MH_JANM", 
    name: "Dahi Handi Processions", 
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "Maharashtra", scope: "regional" },
    purpose_relevance: ["travel"],
    temporal_kind: "recurring",
    rule_definition: {
      kind: "dated",
      name: "Dahi Handi Processions",
      type: "regional",
      status: "confirmed",
      purpose_relevance: ["travel"],
      dates: { 2026: "2026-09-04", 2027: "2027-08-25", 2028: "2028-08-14" }
    },
    state: "confirmed", 
    confidence: "medium", 
    evidence: { source_name: "Local Municipal Advisory", source_url: "https://mumbaipolice.gov.in/" },
    consequences: { 
      implication: "High density human pyramids in urban centers.",
      advice: {
        traveler: "Expect localized traffic diversions in Mumbai's residential suburbs. Large crowds gather around 'Handi' points; plan for extra travel time to the airport.",
        study: "University administrative offices in Maharashtra typically follow the regional holiday schedule and remain closed.",
        corporate: "Operational status is modified. Expect higher absenteeism and reduced logistical throughput in the Western region."
      },
      affected_operations: ["transport"], 
      severity: "medium" 
    }
  },
  { 
    id: "REG_IN_MH_DIWALI", 
    name: "Naraka Chaturdashi (Diwali Variant)", 
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "South/West Variant", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    temporal_kind: "recurring",
    rule_definition: {
      kind: "dated",
      name: "Naraka Chaturdashi",
      type: "regional",
      status: "confirmed",
      purpose_relevance: ["travel", "business"],
      dates: { 2026: "2026-10-28", 2027: "2027-10-28", 2028: "2028-10-16" }
    },
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "DoPT Para 3.2 Provision", source_url: "https://www.aiimsmangalagiri.edu.in/wp-content/uploads/2025/11/Holidays-Circular-2026-1.pdf" },
    consequences: { 
      implication: "Regional Diwali observation precedes the national date in Southern/Western offices.",
      advice: {
        traveler: "Specific regional rituals like the pre-dawn oil bath result in early-morning commercial closures in the South.",
        study: "State-level university closures may align with this date instead of the national Diwali date.",
        corporate: "Expect regional banking and office closures one day prior to the national Diwali holiday."
      },
      affected_operations: ["admin"], 
      severity: "medium" 
    }
  }
];
