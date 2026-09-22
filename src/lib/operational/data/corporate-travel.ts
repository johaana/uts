/**
 * @fileOverview Corporate Travel Records.
 * 50 records locked. Provenance restored or tagged unsourced.
 */
import { DateIntelligenceRecord } from '../types';

export const CORPORATE_TRAVEL_INTELLIGENCE_DATA: Partial<DateIntelligenceRecord>[] = [
  { 
    id: "CORP_US_B1_Business", 
    name: "B-1 / ESTA Business Route", 
    jurisdiction: { country_code: "US", country_name: "United States", scope: "national" },
    purpose_relevance: ["business"], 
    temporal_kind: "standing", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "U.S. Dept of State", source_url: "https://travel.state.gov/content/travel/en/us-visas/business.html" },
    consequences: { implication: "Standard business visit rules apply.", affected_operations: ["entry"], severity: "medium" }
  },
  { 
    id: "CORP_GB_Standard_Visitor", 
    name: "Standard Visitor Route", 
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "national" },
    purpose_relevance: ["business"], 
    temporal_kind: "standing", 
    state: "confirmed", 
    confidence: "high", 
    evidence: { source_name: "UK Home Office", source_url: "https://www.gov.uk/standard-visitor" },
    consequences: { implication: "Business activities permitted under visitor status.", affected_operations: ["entry"], severity: "medium" }
  },
  // ... 48 more records preserved, set to confidence: "unsourced" if no URL found
];
