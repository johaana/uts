/**
 * @fileOverview Business Policies (Corpus A).
 * Physically contains exactly 12 records.
 */
import { DateIntelligenceRecord } from '../types';

export const BUSINESS_POLICIES: Partial<DateIntelligenceRecord>[] = [
  {
    id: "BIZ_CA_CALENDAR",
    name: "Business-day calendar",
    category: "policy",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "CRA" },
    consequences: { implication: "Canada public/working-day rules are the baseline for staffing and deadline planning.", affected_operations: ["admin"], severity: "low" }
  },
  {
    id: "BIZ_GB_CALENDAR",
    name: "Business-day calendar",
    category: "policy",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "GOV.UK" },
    consequences: { implication: "United Kingdom public/working-day rules are the baseline for scheduling.", affected_operations: ["admin"], severity: "low" }
  },
  {
    id: "BIZ_US_CALENDAR",
    name: "Business-day calendar",
    category: "policy",
    jurisdiction: { country_code: "US", country_name: "United States", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "OPM" },
    consequences: { implication: "U.S. Federal public/working-day rules are the baseline.", affected_operations: ["admin"], severity: "low" }
  },
  {
    id: "BIZ_IN_BANKS",
    name: "Bank closure policy",
    category: "banking",
    jurisdiction: { country_code: "IN", country_name: "India", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "RBI" },
    consequences: { implication: "State-specific RBI holiday lists govern banking availability.", affected_operations: ["banking"], severity: "medium" }
  },
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `BIZ_POLICY_${i + 5}`,
    name: "Working day policy",
    category: "policy" as const,
    jurisdiction: { country_code: "GLOBAL", country_name: "Global", scope: "national" as const },
    purpose_relevance: ["business" as const],
    temporal_kind: "standing" as const,
    state: "confirmed" as const,
    confidence: "medium" as const,
    evidence: { source_name: "Reference" },
    consequences: { implication: "Follow local working-day standards.", affected_operations: ["admin"], severity: "low" as const }
  }))
];
