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
    { country: "JP", topic: "Bank of Japan", summary: "Bank of Japan head office and branches are closed on national holidays.", evidence: { source_name: "Bank of Japan", source_url: "https://www.boj.or.jp/en/about/calendar/index.htm" } },
    { country: "EU", topic: "TARGET2", summary: "ECB settlement systems follow the TARGET2 holiday calendar.", evidence: { source_name: "ECB", source_url: "https://www.ecb.europa.eu/press/pr/date/2000/html/pr001214_4.en.html" } }
  ],
  
  // 6. Markets
  CORPORATE_MARKET_DEPTH_ADDITIONS: [
    { country: "DE", topic: "Xetra", summary: "Trading hours and settlement cycles are independent of some public holidays.", evidence: { source_name: "Deutsche Börse", source_url: "https://www.xetra.com/xetra-en/trading/trading-calendar" } },
    { country: "JP", topic: "JPX", summary: "JPX trading hours follow the specific exchange calendar.", evidence: { source_name: "JPX", source_url: "https://www.jpx.co.jp/english/corporate/about-jpx/calendar/" } }
  ],
  
  // 7. Customs
  CUSTOMS_INTELLIGENCE_DATA: [
    { country: "SG", topic: "Customs Operations", summary: "Customs declaration services operate on a 24/7 basis, but counter services follow public holiday rules.", evidence: { source_name: "Singapore Customs", source_url: "https://www.customs.gov.sg/about-us/contact-us" } }
  ],
  
  // 8. Business Policy
  CORPORATE_INTELLIGENCE: BUSINESS_POLICIES,
  
  // 9. Student Risk
  STUDENT_RISK_DATA: [
    { country: "US", topic: "Screening", summary: "F/M/J applicants are subject to current Dept of State screening requirements.", evidence: { source_name: "U.S. Dept of State", source_url: "https://travel.state.gov/content/travel/en/News/visas-news.html" } }
  ],
  
  // 10. Student Policy
  STUDENT_INTELLIGENCE_EXTRA: STUDENT_POLICIES,
  
  // 11. Global Expansion
  OPERATIONAL_GLOBAL_EXPANSION: [
    { country: "MX", topic: "SAT", summary: "Tax administration office closures follow the Mexican federal holiday calendar.", evidence: { source_name: "SAT Mexico", source_url: "https://www.sat.gob.mx/" } }
  ],

  // Metadata/Identity
  INSTITUTIONS: INSTITUTIONAL_IDENTITIES
};
