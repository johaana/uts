/**
 * @fileOverview Central Authoritative Data Registry.
 */
import { HOLIDAY_RULES } from './holidays';
import { INSTITUTIONS } from './institutions';
import { STUDENT_POLICIES } from './students';

export const DATA_REGISTRY = {
  HOLIDAYS: HOLIDAY_RULES,
  INSTITUTIONS: INSTITUTIONS,
  STUDY_TIMING: [],
  CORPORATE_TRAVEL: [],
  REGIONAL: [],
  BANKING: [],
  MARKETS: [],
  CUSTOMS: [],
  STUDENT_RISK: STUDENT_POLICIES,
  STUDENT_INTEL_EXTRA: [],
  GLOBAL_EXPANSION: []
};
