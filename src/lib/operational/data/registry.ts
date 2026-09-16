/**
 * @fileOverview Central Authoritative Data Registry.
 */
import { HOLIDAY_RULES } from './holidays';
import { INSTITUTIONS } from './institutions';

export const DATA_REGISTRY = {
  HOLIDAYS: HOLIDAY_RULES,
  INSTITUTIONS: INSTITUTIONS,
  STUDY_TIMING: [],
  CORPORATE_TRAVEL: [],
  REGIONAL: [],
  BANKING: [],
  MARKETS: [],
  CUSTOMS: [],
  STUDENT_RISK: [
    {
      country: "CA",
      topic: "Study-permit financial requirement",
      effective_date: "2026-09-01",
      status: "EFFECTIVE",
      summary: "Requirement increased to CAN$23,448 for first-year living expenses.",
      confidence: "high",
      source_name: "IRCC",
      source_url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html",
      last_checked: "2026-09-06"
    }
  ],
  STUDENT_INTEL_EXTRA: [],
  GLOBAL_EXPANSION: []
};
