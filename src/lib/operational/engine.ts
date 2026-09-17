/**
 * @fileOverview Temporal Expansion Engine.
 * Faithfully evaluates authoritative rules into concrete dates.
 */
import { HolidayRule } from './types';
import { format, startOfMonth, addDays, getDay, isValid, parseISO } from 'date-fns';

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
    return format(date, 'yyyy-MM-dd');
  }
  
  return null;
}

function getNthWeekday(year: number, month: number, dow: number, n: number): Date {
  const start = startOfMonth(new Date(year, month - 1));
  let currentDow = getDay(start);
  // Calculate offset to reach the first target DOW
  let dayOffset = (dow - currentDow + 7) % 7;
  // Advance by n-1 weeks
  dayOffset += (n - 1) * 7;
  return addDays(start, dayOffset);
}

export function isFutureDate(dateStr: string, todayKey: string): boolean {
  return dateStr >= todayKey;
}
