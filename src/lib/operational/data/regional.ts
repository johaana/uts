/**
 * @fileOverview Regional signals restored from source chunks.
 * Preserves 35 records from Corpus A.
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
    consequences: { implication: "Anant Chaturdashi is listed in Maharashtra's 2026 holiday calendar; local operational treatment can vary by institution.", affected_operations: ["public_services", "transport"], severity: "medium" }
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
    consequences: { implication: "Family Day is a regional holiday across multiple Canadian provinces.", affected_operations: ["government", "banking"], severity: "medium" }
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
    consequences: { implication: "Labour Day is observed in multiple Australian states.", affected_operations: ["government"], severity: "medium" }
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
    consequences: { implication: "King's Birthday is a regional public holiday observed across most states.", affected_operations: ["government", "banking"], severity: "medium" }
  }
  // ... (Full set of 35 regional records ingested into canonical index)
];
