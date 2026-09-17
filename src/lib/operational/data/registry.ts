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
  
  // 3. Travel Policies
  CORPORATE_TRAVEL_INTELLIGENCE_DATA: CORPORATE_TRAVEL_INTELLIGENCE_DATA,
  
  // 4. Regional Signals
  REGIONAL_INTELLIGENCE: REGIONAL_SIGNALS,
  
  // 5. Banking
  BANKING_INTELLIGENCE_DATA: [],
  
  // 6. Markets
  CORPORATE_MARKET_DEPTH_ADDITIONS: [],
  
  // 7. Customs
  CUSTOMS_INTELLIGENCE_DATA: [],
  
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
