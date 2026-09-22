/**
 * @fileOverview Authoritative Data Registry.
 * Enforces provenance for stub datasets.
 */
import { HOLIDAY_RULES } from './holidays';
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
  STUDENT_INTEL_EXTRA: STUDENT_POLICIES,
  BANKING_INTELLIGENCE_DATA: [
    { 
      id: "BANK_US_FED", 
      country: "US", 
      topic: "Federal Reserve", 
      purpose_relevance: ["business"],
      confidence: "high",
      evidence: { source_name: "Federal Reserve", source_url: "https://www.frbservices.org/about/holiday-schedules" },
      summary: "Payment systems follow Fed schedule." 
    },
    { 
      id: "BANK_EU_ECB", 
      country: "EU", 
      topic: "ECB / TARGET", 
      purpose_relevance: ["business"],
      confidence: "high",
      evidence: { source_name: "ECB", source_url: "https://www.ecb.europa.eu/press/calendars/target2/html/index.en.html" },
      summary: "TARGET2 follows ECB calendar." 
    }
  ],
  CORPORATE_MARKET_DEPTH_ADDITIONS: [
    { 
      id: "MARKET_JP_JPX", 
      country: "JP", 
      topic: "JPX", 
      purpose_relevance: ["business"],
      confidence: "high",
      evidence: { source_name: "JPX", source_url: "https://www.jpx.co.jp/english/corporate/about-jpx/calendar/" },
      summary: "Trading hours follow JPX calendar." 
    },
    { 
      id: "MARKET_DE_XETRA", 
      country: "DE", 
      topic: "Xetra", 
      purpose_relevance: ["business"],
      confidence: "high",
      evidence: { source_name: "Deutsche Boerse", source_url: "https://www.xetra.com/xetra-en/trading/trading-calendar" },
      summary: "Xetra sessions follow official calendar." 
    }
  ],
  CUSTOMS_INTELLIGENCE_DATA: [
    { 
      id: "CUST_SG_CUSTOMS", 
      country: "SG", 
      topic: "Customs Operations", 
      purpose_relevance: ["logistics"],
      confidence: "high",
      evidence: { source_name: "Singapore Customs", source_url: "https://www.customs.gov.sg/" },
      summary: "Declaration services 24/7." 
    }
  ],
  STUDENT_RISK_DATA: [
    { 
      id: "RISK_US_SCREEN", 
      country: "US", 
      topic: "Screening", 
      purpose_relevance: ["study"],
      confidence: "high",
      evidence: { source_name: "Dept of State", source_url: "https://travel.state.gov/content/travel/en/us-visas.html" },
      summary: "F/M/J applicants subject to vetting." 
    }
  ],
  OPERATIONAL_GLOBAL_EXPANSION: [
    { 
      id: "GLOB_MX_SAT", 
      country: "MX", 
      topic: "SAT", 
      purpose_relevance: ["business"],
      confidence: "high",
      evidence: { source_name: "SAT Mexico", source_url: "https://www.sat.gob.mx/" },
      summary: "Tax office closures follow federal calendar." 
    }
  ],
  CORPORATE_INTELLIGENCE: BUSINESS_POLICIES
};