/**
 * @fileOverview Phase 3A Temporal Engine.
 * Implements Fixed, Nth-Weekday, and Easter-relative logic.
 */

import { 
  CanonicalRule, 
  DateIntelligenceRecord, 
  OperationalQuery, 
  HolidayRule 
} from './types';
import { 
  format, 
  startOfMonth, 
  addDays, 
  getDay, 
  lastDayOfMonth, 
  parseISO,
  getYear,
  startOfToday
} from 'date-fns';

/**
 * Resolves the "Single Now" instant for a request.
 */
export function resolveNow(): Date {
  return startOfToday();
}

/**
 * Calculates Gregorian Easter Sunday using the Meeus/Jones/Butcher algorithm.
 */
export function getEaster(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

/**
 * The core Temporal Matcher.
 * Filters canonical rules and expands them into concrete instances.
 */
export function evaluateQuery(rules: CanonicalRule[], query: OperationalQuery, now: Date): DateIntelligenceRecord[] {
  const queryStart = query.startDate;
  const queryEnd = query.endDate;
  const results: DateIntelligenceRecord[] = [];

  rules.forEach(rule => {
    // 1. Filter by Purpose Relevance
    if (!rule.purpose_relevance.includes(query.purpose)) return;

    // 2. Filter by Destination
    if (rule.jurisdiction.country_code !== query.destination) return;

    // 3. Temporal Dispatch
    switch (rule.temporal_kind) {
      case "standing":
        if (matchStanding(rule, queryStart, queryEnd)) {
          results.push(materializeStanding(rule, queryStart));
        }
        break;

      case "event":
      case "estimated":
        if (rule.valid_from && rule.valid_from >= queryStart && rule.valid_from <= queryEnd) {
          results.push({ ...rule, id: `${rule.rule_id}__${rule.valid_from}`, date: rule.valid_from });
        }
        break;

      case "period":
        if (matchPeriod(rule, queryStart, queryEnd)) {
          results.push({ ...rule, id: `${rule.rule_id}__${rule.valid_from}`, date: rule.valid_from!, end_date: rule.valid_to });
        }
        break;

      case "recurring":
        if (rule.rule_definition) {
          const startYear = getYear(parseISO(queryStart));
          const endYear = getYear(parseISO(queryEnd));
          
          for (let y = startYear; y <= endYear; y++) {
            const date = expandRecurrence(rule.rule_definition, y);
            if (date && date >= queryStart && date <= queryEnd) {
              results.push({ ...rule, id: `${rule.rule_id}__${date}`, date });
            }
          }
        }
        break;
    }
  });

  return results.sort((a, b) => a.date.localeCompare(b.date));
}

function matchStanding(rule: CanonicalRule, start: string, end: string): boolean {
  const validFrom = rule.valid_from || "1900-01-01";
  const validTo = rule.valid_to || "9999-12-31";
  return validFrom <= end && validTo >= start;
}

function matchPeriod(rule: CanonicalRule, start: string, end: string): boolean {
  if (!rule.valid_from || !rule.valid_to) return false;
  return rule.valid_from <= end && rule.valid_to >= start;
}

function materializeStanding(rule: CanonicalRule, queryStart: string): DateIntelligenceRecord {
  return {
    ...rule,
    id: `${rule.rule_id}__STANDING`,
    date: rule.valid_from || queryStart
  };
}

/**
 * Expands a recurring rule into a concrete YYYY-MM-DD string.
 */
export function expandRecurrence(rule: HolidayRule, year: number): string | null {
  if (rule.kind === "fixed") {
    if (rule.month === undefined || rule.day === undefined) return null;
    return `${year}-${String(rule.month).padStart(2, '0')}-${String(rule.day).padStart(2, '0')}`;
  }
  
  if (rule.kind === "dated") {
    return rule.dates?.[year] || null;
  }
  
  if (rule.kind === "nth") {
    if (rule.month === undefined || rule.dow === undefined || rule.n === undefined) return null;
    const date = getNthWeekday(year, rule.month, rule.dow, rule.n);
    return date ? format(date, 'yyyy-MM-dd') : null;
  }

  if (rule.kind === "easter") {
    const easter = getEaster(year);
    const date = addDays(easter, rule.offset || 0);
    return format(date, 'yyyy-MM-dd');
  }
  
  return null;
}

function getNthWeekday(year: number, month: number, dow: number, n: number): Date | null {
  if (n > 0) {
    const start = startOfMonth(new Date(year, month - 1));
    let currentDow = getDay(start);
    let dayOffset = (dow - currentDow + 7) % 7;
    dayOffset += (n - 1) * 7;
    const result = addDays(start, dayOffset);
    return result.getMonth() === month - 1 ? result : null;
  } else {
    const lastDay = lastDayOfMonth(new Date(year, month - 1));
    let currentDow = getDay(lastDay);
    let dayOffset = (currentDow - dow + 7) % 7;
    const result = addDays(lastDay, -dayOffset);
    return result;
  }
}
