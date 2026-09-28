/**
 * @fileOverview Authoritative Business Policy Records.
 * Restored Eurozone/Nordic rules from legacy chunks.
 */
import { DateIntelligenceRecord } from '../types';

export const BUSINESS_POLICIES: Partial<DateIntelligenceRecord>[] = [
  {
    id: "BIZ_FR_CALENDAR",
    name: "Business-day calendar",
    category: "policy",
    jurisdiction: { country_code: "FR", country_name: "France", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Service-Public", source_url: "https://www.service-public.fr/particuliers/vosdroits/F2405", last_checked: "2026-09-08" },
    consequences: { implication: "France working-day rules govern office and staffing availability.", affected_operations: ["admin"], severity: "low" }
  },
  {
    id: "BIZ_DE_CALENDAR",
    name: "Business-day calendar",
    category: "policy",
    jurisdiction: { country_code: "DE", country_name: "Germany", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "BMI Germany", source_url: "https://www.bmi.bund.de/EN/topics/constitution/state-symbols/national-holidays/national-holidays-node.html", last_checked: "2026-09-08" },
    consequences: { implication: "Germany public/working-day rules are the baseline for staffing.", affected_operations: ["admin"], severity: "low" }
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
    evidence: { source_name: "OPM USA", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/", last_checked: "2026-09-08" },
    consequences: { implication: "U.S. Federal working-day rules are the baseline for corporate scheduling.", affected_operations: ["admin"], severity: "low" }
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
    evidence: { source_name: "Reserve Bank of India (RBI)", source_url: "https://www.rbi.org.in/Scripts/HolidayMatrixDisplay.aspx", last_checked: "2026-09-08" },
    consequences: { implication: "State-specific RBI holiday lists govern banking availability for RTGS/NEFT.", affected_operations: ["banking"], severity: "medium" }
  },
  {
    id: "BIZ_SG_CUSTOMS_T",
    name: "Customs declaration services",
    category: "customs",
    jurisdiction: { country_code: "SG", country_name: "Singapore", scope: "national" },
    purpose_relevance: ["logistics"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Singapore Customs", source_url: "https://www.customs.gov.sg/", last_checked: "2026-09-08" },
    consequences: { implication: "Declaration services remain 24/7; counter services follow public holidays.", affected_operations: ["customs"], severity: "low" }
  }
];
