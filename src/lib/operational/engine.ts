
/**
 * @fileOverview Phase 3 Temporal Engine.
 * Faithfully implements matching logic for Event, Period, Standing, Recurring, and Estimated types.
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
  isValid, 
  lastDayOfMonth, 
  parseISO,
  startOfDay,
  getYear
} from 'date-fns';

/**
 * Resolves the "Single Now" instant for a request.
 */
export function resolveNow(): Date {
  return new Date();
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
    // 1. Filter by Purpose Relevance (Invariant Filter)
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
          results.push({ ...rule, date: rule.valid_from });
        }
        break;

      case "period":
        if (matchPeriod(rule, queryStart, queryEnd)) {
          results.push({ ...rule, date: rule.valid_from!, end_date: rule.valid_to });
        }
        break;

      case "recurring":
        if (rule.rule_definition) {
          const startYear = getYear(parseISO(queryStart));
          const endYear = getYear(parseISO(queryEnd));
          
          for (let y = startYear; y <= endYear; y++) {
            const date = expandRecurrence(rule.rule_definition, y);
            if (date && date >= queryStart && date <= queryEnd) {
              results.push({ ...rule, date });
            }
          }
        }
        break;
    }
  });

  return results.sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Standing Rule matching:
 * rule.start <= query.end AND (rule.end is null OR rule.end >= query.start)
 */
function matchStanding(rule: CanonicalRule, start: string, end: string): boolean {
  const validFrom = rule.valid_from || "1900-01-01";
  const validTo = rule.valid_to || "9999-12-31";
  return validFrom <= end && validTo >= start;
}

/**
 * Period matching:
 * period.start <= query.end AND period.end >= query.start
 */
function matchPeriod(rule: CanonicalRule, start: string, end: string): boolean {
  if (!rule.valid_from || !rule.valid_to) return false;
  return rule.valid_from <= end && rule.valid_to >= start;
}

/**
 * Materializes a standing rule into a record for the UI.
 * Uses the query start date as the placeholder date.
 */
function materializeStanding(rule: CanonicalRule, queryStart: string): DateIntelligenceRecord {
  return {
    ...rule,
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
