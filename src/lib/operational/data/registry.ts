/**
 * @fileOverview Authoritative Data Registry.
 * Synchronized with the full 458-rule physical baseline.
 */
import { HOLIDAY_RULES } from './holidays';
import { INSTITUTIONAL_IDENTITIES } from './institutions';
import { STUDENT_POLICIES } from './students';
import { BUSINESS_POLICIES } from './business';
import { REGIONAL_SIGNALS } from './regional';
import { STUDY_INSTITUTIONAL_TIMING } from './study';
import { CORPORATE_TRAVEL_INTELLIGENCE_DATA } from './corporate-travel';

export const DATA_REGISTRY = {
  HOLIDAYS: HOLIDAY_RULES,
  STUDY_INSTITUTIONAL_TIMING,
  CORPORATE_TRAVEL_INTELLIGENCE_DATA,
  REGIONAL_INTELLIGENCE: REGIONAL_SIGNALS,
  BANKING_INTELLIGENCE_DATA: [
    { country: "US", topic: "Federal Reserve", summary: "Payment systems operations follow Fed holiday schedules.", evidence: { source_name: "Federal Reserve", source_url: "https://www.frbservices.org/about/holiday-schedules" } },
    { country: "EU", topic: "ECB / TARGET", summary: "Eurozone real-time settlement system operations.", evidence: { source_name: "ECB" } },
    { country: "IN", topic: "RBI Settlement", summary: "RTGS and NEFT systems follow RBI holiday calendars.", evidence: { source_name: "RBI" } }
  ],
  CORPORATE_MARKET_DEPTH_ADDITIONS: [
    { country: "JP", topic: "JPX", summary: "JPX trading hours follow specific exchange calendar.", evidence: { source_name: "JPX", source_url: "https://www.jpx.co.jp/english/corporate/about-jpx/calendar/" } },
    { country: "DE", topic: "Xetra", summary: "Deutsche Börse Xetra trading and settlement hours.", evidence: { source_name: "Deutsche Börse" } }
  ],
  CUSTOMS_INTELLIGENCE_DATA: [
    { country: "SG", topic: "Customs Operations", summary: "Customs declaration services 24/7; counters follow holidays.", evidence: { source_name: "Singapore Customs", source_url: "https://www.customs.gov.sg/" } }
  ],
  CORPORATE_INTELLIGENCE: BUSINESS_POLICIES,
  STUDENT_RISK_DATA: [
    { country: "US", topic: "Screening", summary: "F/M/J applicants subject to screening requirements.", evidence: { source_name: "Dept of State" } }
  ],
  STUDENT_INTEL_EXTRA: STUDENT_POLICIES,
  OPERATIONAL_GLOBAL_EXPANSION: [
    { country: "MX", topic: "SAT", summary: "Tax office closures follow federal calendar.", evidence: { source_name: "SAT Mexico" } }
  ],
  INSTITUTIONS: INSTITUTIONAL_IDENTITIES
};
