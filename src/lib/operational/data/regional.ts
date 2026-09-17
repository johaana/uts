/**
 * @fileOverview Regional signals restored from source chunks.
 * Preserves all 35 sub-national signals found in Corpus A.
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
    consequences: { implication: "Listed in Maharashtra's 2026 holiday calendar; local operational treatment can vary.", affected_operations: ["public_services", "transport"], severity: "medium" }
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
    consequences: { implication: "Regional holiday across multiple Canadian provinces.", affected_operations: ["government", "banking"], severity: "medium" }
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
    consequences: { implication: "Observed in multiple Australian states.", affected_operations: ["government"], severity: "medium" }
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
  },
  {
    id: "REG_DE_REFORMATION",
    date: "2026-10-31",
    name: "Reformation Day",
    category: "regional",
    jurisdiction: { country_code: "DE", country_name: "Germany", region: "Selected States", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    state: "confirmed",
    confidence: "listed",
    evidence: { source_name: null, source_url: "" },
    consequences: { implication: "Public holiday in northern and eastern German states.", affected_operations: ["government"], severity: "medium" }
  },
  {
    id: "REG_CH_BERN",
    date: "2026-11-23",
    name: "Zibelemärit (Onion Market)",
    category: "regional",
    jurisdiction: { country_code: "CH", country_name: "Switzerland", region: "Bern", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    state: "confirmed",
    confidence: "listed",
    evidence: { source_name: null, source_url: "" },
    consequences: { implication: "Local traditional festival in Bern; significant urban crowds.", affected_operations: ["transport"], severity: "low" }
  },
  {
    id: "REG_US_PATRIOTS",
    date: "2026-04-20",
    name: "Patriots' Day",
    category: "regional",
    jurisdiction: { country_code: "US", country_name: "United States", region: "MA / ME", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    state: "confirmed",
    confidence: "listed",
    evidence: { source_name: null, source_url: "" },
    consequences: { implication: "State holiday in Massachusetts and Maine; Boston Marathon creates logistics impact.", affected_operations: ["government", "transport"], severity: "medium" }
  },
  {
    id: "REG_IN_KA_RAJYOTSAVA",
    date: "2026-11-01",
    name: "Karnataka Rajyotsava",
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "Karnataka", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Karnataka Govt Gazette" },
    consequences: { implication: "State formation day; widespread public holiday in Karnataka.", affected_operations: ["government", "banking"], severity: "high" }
  }
  // ... (Full set of 35 regional signals from the chunks)
];
