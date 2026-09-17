/**
 * @fileOverview Central Authoritative Data Registry.
 */
import { HOLIDAY_RULES } from './holidays';
import { INSTITUTIONS } from './institutions';
import { STUDENT_POLICIES } from './students';
import { REGIONAL_INTELLIGENCE } from './regional';
import { STUDY_INSTITUTIONAL_TIMING } from './study';

export const DATA_REGISTRY = {
  HOLIDAYS: HOLIDAY_RULES,
  INSTITUTIONS: INSTITUTIONS,
  STUDY_POLICIES: STUDENT_POLICIES,
  REGIONAL: REGIONAL_INTELLIGENCE,
  STUDY_INSTITUTIONAL_TIMING: STUDY_INSTITUTIONAL_TIMING,
  BANKING: [],
  MARKETS: [],
  CUSTOMS: [],
  BUSINESS: [],
  GLOBAL_EXPANSION: []
};
