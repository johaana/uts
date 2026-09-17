/**
 * @fileOverview Temporal Expansion Engine.
 * Faithfully evaluates authoritative rules into concrete dates.
 */
import { HolidayRule } from './types';
import { format, startOfMonth, addDays, getDay, isValid, lastDayOfMonth } from 'date-fns';

export function evaluateRule(rule: HolidayRule, year: number): string | null {
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

/**
 * Calculates the n-th occurrence of a weekday in a month.
 * Supports negative n for "last X of month" (e.g., n=-1 for last Monday).
 */
function getNthWeekday(year: number, month: number, dow: number, n: number): Date | null {
  if (n > 0) {
    const start = startOfMonth(new Date(year, month - 1));
    let currentDow = getDay(start);
    let dayOffset = (dow - currentDow + 7) % 7;
    dayOffset += (n - 1) * 7;
    const result = addDays(start, dayOffset);
    return result.getMonth() === month - 1 ? result : null;
  } else {
    // Last occurrence logic
    const lastDay = lastDayOfMonth(new Date(year, month - 1));
    let currentDow = getDay(lastDay);
    let dayOffset = (currentDow - dow + 7) % 7;
    const result = addDays(lastDay, -dayOffset);
    // Move back for "second last", etc if ever needed (currently source only uses -1)
    if (n < -1) {
        dayOffset += (Math.abs(n) - 1) * 7;
        return addDays(lastDay, -dayOffset);
    }
    return result;
  }
}

export function isFutureDate(dateStr: string, todayKey: string): boolean {
  return dateStr >= todayKey;
}
