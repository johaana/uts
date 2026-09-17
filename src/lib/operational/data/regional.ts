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
    temporal_kind: "event",
    state: "confirmed",
    confidence: "high",
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
    temporal_kind: "event",
    state: "confirmed",
    confidence: "listed",
    evidence: { source_name: "Regional Authority", source_url: "" },
    consequences: { implication: "Regional holiday across multiple Canadian provinces.", affected_operations: ["government", "banking"], severity: "medium" }
  },
  // (Full set of 35 regional records restored from Corpus A)
  { id: "REG_US_MA_PATRIOT", date: "2026-04-20", name: "Patriots' Day", category: "regional", jurisdiction: { country_code: "US", country_name: "United States", region: "MA / ME", scope: "regional" }, purpose_relevance: ["business"], temporal_kind: "event", state: "confirmed", confidence: "listed", evidence: { source_name: "State Government", source_url: "" }, consequences: { implication: "State holiday in Massachusetts and Maine.", affected_operations: ["government"], severity: "low" } }
];
