/**
 * @fileOverview Authoritative Business Policy Records.
 * Physically contains all 12 policy records extracted from the source.
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
    evidence: { source_name: "CRA", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html" },
    consequences: { implication: "Canada working-day rules are the baseline for staffing and deadline planning.", affected_operations: ["admin"], severity: "low" }
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
    evidence: { source_name: "GOV.UK", source_url: "https://www.gov.uk/bank-holidays" },
    consequences: { implication: "United Kingdom working-day rules are the baseline for scheduling.", affected_operations: ["admin"], severity: "low" }
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
    evidence: { source_name: "OPM", source_url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/" },
    consequences: { implication: "U.S. Federal working-day rules are the baseline.", affected_operations: ["admin"], severity: "low" }
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
    evidence: { source_name: "RBI", source_url: "https://www.rbi.org.in/Scripts/HolidayMatrixDisplay.aspx" },
    consequences: { implication: "State-specific RBI holiday lists govern banking availability.", affected_operations: ["banking"], severity: "medium" }
  },
  {
    id: "BIZ_JP_MARKET_T",
    name: "Market session hours",
    category: "market",
    jurisdiction: { country_code: "JP", country_name: "Japan", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "JPX", source_url: "https://www.jpx.co.jp/english/corporate/about-jpx/calendar/" },
    consequences: { implication: "Standard JPX session hours apply unless a specific market closure is listed.", affected_operations: ["trading"], severity: "low" }
  },
  {
    id: "BIZ_DE_XETRA_T",
    name: "Xetra trading calendar",
    category: "market",
    jurisdiction: { country_code: "DE", country_name: "Germany", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Deutsche Borse" },
    consequences: { implication: "Xetra trading sessions follow official market calendar.", affected_operations: ["trading"], severity: "low" }
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
    evidence: { source_name: "Singapore Customs" },
    consequences: { implication: "Declaration services remain 24/7; counter services follow public holidays.", affected_operations: ["customs"], severity: "low" }
  },
  {
    id: "BIZ_AU_RBA_T",
    name: "RBA payment systems",
    category: "banking",
    jurisdiction: { country_code: "AU", country_name: "Australia", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "RBA" },
    consequences: { implication: "RTGS and payment systems follow RBA operational calendar.", affected_operations: ["banking"], severity: "medium" }
  },
  {
    id: "BIZ_CH_SIX_T",
    name: "SIX Swiss Exchange calendar",
    category: "market",
    jurisdiction: { country_code: "CH", country_name: "Switzerland", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "SIX Group" },
    consequences: { implication: "Swiss market sessions follow named institution calendar.", affected_operations: ["trading"], severity: "low" }
  },
  {
    id: "BIZ_EU_ECB_T",
    name: "ECB settlement calendar",
    category: "banking",
    jurisdiction: { country_code: "EU", country_name: "European Union", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "ECB" },
    consequences: { implication: "TARGET2 settlement system follows ECB holiday schedule.", affected_operations: ["banking"], severity: "high" }
  },
  {
    id: "BIZ_HK_HKMA_T",
    name: "HKMA payment systems",
    category: "banking",
    jurisdiction: { country_code: "HK", country_name: "Hong Kong", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "HKMA" },
    consequences: { implication: "Settlement systems follow HKMA operational timing.", affected_operations: ["banking"], severity: "medium" }
  },
  {
    id: "BIZ_ZA_SARB_T",
    name: "SARB payment systems",
    category: "banking",
    jurisdiction: { country_code: "ZA", country_name: "South Africa", scope: "national" },
    purpose_relevance: ["business"],
    temporal_kind: "standing",
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "SARB" },
    consequences: { implication: "SAMOS settlement follows SARB holiday schedule.", affected_operations: ["banking"], severity: "medium" }
  }
];
