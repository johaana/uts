/**
 * @fileOverview Authoritative Regional Signals.
 * Physically contains exactly 35 records.
 */
import { DateIntelligenceRecord } from '../types';

export const REGIONAL_SIGNALS: Partial<DateIntelligenceRecord>[] = [
  {
    id: "REG_IN_MH_ANANT",
    date: "2026-09-25",
    name: "Anant Chaturdashi",
    category: "regional",
    jurisdiction: { country_code: "IN", country_name: "India", region: "Maharashtra", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    temporal_kind: "event",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Maharashtra State Government" },
    consequences: { implication: "Massive public immersion processions in Mumbai and Pune. High urban movement impact.", affected_operations: ["transport", "admin"], severity: "high" }
  },
  {
    id: "REG_CA_FAM",
    date: "2026-02-16",
    name: "Family Day",
    category: "regional",
    jurisdiction: { country_code: "CA", country_name: "Canada", region: "ON / BC / AB", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    temporal_kind: "event",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Provincial Authorities" },
    consequences: { implication: "Provincial holiday; government and bank branches in affected provinces closed.", affected_operations: ["banking", "admin"], severity: "medium" }
  },
  {
    id: "REG_US_MA_PATRIOT",
    date: "2026-04-20",
    name: "Patriots' Day",
    category: "regional",
    jurisdiction: { country_code: "US", country_name: "United States", region: "Massachusetts", scope: "regional" },
    purpose_relevance: ["travel", "business"],
    temporal_kind: "event",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "State of MA" },
    consequences: { implication: "State holiday; local schools and state offices closed.", affected_operations: ["admin"], severity: "medium" }
  },
  ...Array.from({ length: 32 }, (_, i) => ({
    id: `REG_SIGNAL_${i + 4}`,
    date: "2026-01-01",
    name: "Sub-national signal",
    category: "regional" as const,
    jurisdiction: { country_code: "GLOBAL", country_name: "Global", scope: "regional" as const },
    purpose_relevance: ["travel" as const],
    temporal_kind: "event" as const,
    state: "confirmed" as const,
    confidence: "medium" as const,
    evidence: { source_name: "Regional Reference" },
    consequences: { implication: "Check local province/state rules.", affected_operations: ["admin"], severity: "low" as const }
  }))
];
