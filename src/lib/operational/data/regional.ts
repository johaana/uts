/**
 * @fileOverview Regional Intelligence.
 * High-fidelity urban movement signals for Maharashtra restored from authoritative fragments.
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
    valid_from: "2026-09-04", 
    name: "Dahi Handi Processions", 
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "Maharashtra", scope: "regional" },
    purpose_relevance: ["travel"],
    temporal_kind: "event", 
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
  }
];
