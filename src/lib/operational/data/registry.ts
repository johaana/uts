/**
 * @fileOverview Central Authoritative Data Registry.
 * Manages the 11 mandatory operational datasets.
 */
import { HOLIDAY_RULES } from './holidays';
import { INSTITUTIONAL_IDENTITIES } from './institutions';
import { STUDENT_POLICIES } from './students';
import { BUSINESS_POLICIES } from './business';
import { REGIONAL_SIGNALS } from './regional';
import { STUDY_INSTITUTIONAL_TIMING } from './study';
import { CORPORATE_TRAVEL_INTELLIGENCE_DATA } from './corporate-travel';

export const DATA_REGISTRY = {
  // 1. Core Calendars
  HOLIDAYS: HOLIDAY_RULES,
  
  // 2. Institutional Timing
  STUDY_INSTITUTIONAL_TIMING: STUDY_INSTITUTIONAL_TIMING,
  
  // 3. Travel Policies (50 Authoritative Records)
  CORPORATE_TRAVEL_INTELLIGENCE_DATA: CORPORATE_TRAVEL_INTELLIGENCE_DATA,
  
  // 4. Regional Signals
  REGIONAL_INTELLIGENCE: REGIONAL_SIGNALS,
  
  // 5. Banking
  BANKING_INTELLIGENCE_DATA: [
    { country: "US", topic: "Federal Reserve", summary: "Payment systems operations are subject to Federal Reserve holiday schedules.", evidence: { source_name: "Federal Reserve", source_url: "https://www.frbservices.org/about/holiday-schedules" } },
    { country: "EU", topic: "TARGET2", summary: "ECB settlement systems follow the TARGET2 holiday calendar.", evidence: { source_name: "ECB", source_url: "https://www.ecb.europa.eu/press/pr/date/2000/html/pr001214_4.en.html" } }
  ],
  
  // 6. Markets
  CORPORATE_MARKET_DEPTH_ADDITIONS: [
    { country: "DE", topic: "Xetra", summary: "Trading hours and settlement cycles are independent of some public holidays.", evidence: { source_name: "Deutsche Börse", source_url: "https://www.xetra.com/xetra-en/trading/trading-calendar" } }
  ],
  
  // 7. Customs
  CUSTOMS_INTELLIGENCE_DATA: [
    { country: "SG", topic: "Customs Operations", summary: "Customs declaration services operate on a 24/7 basis, but counter services follow public holiday rules.", evidence: { source_name: "Singapore Customs", source_url: "https://www.customs.gov.sg/about-us/contact-us" } }
  ],
  
  // 8. Business Policy
  CORPORATE_INTELLIGENCE: BUSINESS_POLICIES,
  
  // 9. Student Risk
  STUDENT_RISK_DATA: [],
  
  // 10. Student Policy
  STUDENT_INTELLIGENCE_EXTRA: STUDENT_POLICIES,
  
  // 11. Global Expansion
  OPERATIONAL_GLOBAL_EXPANSION: [],

  // Metadata/Identity
  INSTITUTIONS: INSTITUTIONAL_IDENTITIES
};
