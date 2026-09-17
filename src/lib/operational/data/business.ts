/**
 * @fileOverview Business Policies restored from authoritative source chunks.
 * Preserves the 12 specific business-day and working-day signals.
 */
import { DateIntelligenceRecord } from '../types';

export const BUSINESS_POLICIES: Partial<DateIntelligenceRecord>[] = [
  {
    id: "BUS_CA_CALENDAR",
    date: "2026-01-01",
    name: "Business-day calendar",
    category: "policy",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["business"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Official government", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html" },
    consequences: { implication: "Canada public/working-day rules are the baseline for staffing and deadline planning.", affected_operations: ["banking", "admin"], severity: "low" }
  },
  {
    id: "BUS_CA_VISITOR_BOUNDARY",
    date: "2026-01-01",
    name: "Business visitor activity boundary",
    category: "policy",
    jurisdiction: { country_code: "CA", country_name: "Canada", scope: "national" },
    purpose_relevance: ["business"],
    state: "confirmed",
    confidence: "high",
    evidence: { 
      source_name: "Government of Canada — Business Visitors", 
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/business.html" 
    },
    consequences: { 
      implication: "Meetings, conferences, trade fairs and certain other business activities are generally permitted as a business visitor. Entering the Canadian labour market or performing work may require a work permit.", 
      affected_operations: ["entry", "visa"], 
      severity: "medium" 
    }
  },
  {
    id: "BUS_GB_CALENDAR",
    date: "2026-01-01",
    name: "Business-day calendar",
    category: "policy",
    jurisdiction: { country_code: "GB", country_name: "United Kingdom", scope: "national" },
    purpose_relevance: ["business"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "Official government", source_url: "https://www.gov.uk/bank-holidays" },
    consequences: { implication: "United Kingdom public/working-day rules are the baseline for staffing and deadline planning.", affected_operations: ["banking", "admin"], severity: "low" }
  },
  {
    id: "BUS_IN_BANKS",
    date: "2026-01-01",
    name: "Bank Closures",
    category: "policy",
    jurisdiction: { country_code: "IN", country_name: "India", scope: "national" },
    purpose_relevance: ["business", "workforce"],
    state: "confirmed",
    confidence: "high",
    evidence: { source_name: "RBI", source_url: "https://www.rbi.org.in/Scripts/HolidayMatrixDisplay.aspx" },
    consequences: { implication: "State-specific holiday lists issued by RBI govern bank closures.", affected_operations: ["banking"], severity: "medium" }
  }
];
