/**
 * @fileOverview Regional and Sub-national Signals (Restored from Chunks 15-17).
 * Preserves 35 records from the authoritative source.
 */
import { DateIntelligenceRecord } from '../types';

export const REGIONAL_SIGNALS: Partial<DateIntelligenceRecord>[] = [
  {
    id: "REG_IN_MH_ANANT",
    date: "2026-09-25",
    name: "Anant Chaturdashi",
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "Maharashtra", scope: "regional" },
    purpose_relevance: ["travel", "business", "logistics"],
    state: "confirmed",
    confidence: "medium",
    evidence: { source_name: "India.gov.in — Maharashtra state calendar", source_url: "https://www.india.gov.in/calendar/maharashtra" },
    consequences: { implication: "Local operational treatment can vary by institution; public processions common.", affected_operations: ["public_services", "transport"], severity: "medium" }
  },
  {
    id: "REG_CA_FAM",
    date: "2026-02-16",
    name: "Family Day / Heritage Day",
    category: "regional",
    jurisdiction: { country_code: "CA", country_name: "Canada", region: "BC / AB / SK / MB / ON / NB / NS / PEI", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    state: "confirmed",
    confidence: "listed",
    evidence: { source_name: null, source_url: "" },
    consequences: { implication: "Provincial holiday signals across several provinces; statutory treatment varies.", affected_operations: ["government", "banking"], severity: "medium" }
  },
  {
    id: "REG_AU_LABOUR",
    date: "2026-10-05",
    name: "Labour Day",
    category: "regional",
    jurisdiction: { country_code: "AU", country_name: "Australia", region: "ACT / NSW / SA", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    state: "confirmed",
    confidence: "listed",
    evidence: { source_name: null, source_url: "" },
    consequences: { implication: "State-specific public holiday signal.", affected_operations: ["government"], severity: "medium" }
  },
  {
    id: "REG_AU_KINGS",
    date: "2026-06-08",
    name: "King's Birthday",
    category: "regional",
    jurisdiction: { country_code: "AU", country_name: "Australia", region: "ACT / NSW / NT / QLD / SA / TAS / VIC", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    state: "confirmed",
    confidence: "listed",
    evidence: { source_name: null, source_url: "" },
    consequences: { implication: "Regional public holiday observed across most states.", affected_operations: ["government", "banking"], severity: "medium" }
  }
];
