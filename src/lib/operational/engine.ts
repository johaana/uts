/**
 * @fileOverview Temporal Expansion Engine.
 * Evaluates rules into concrete dates.
 */
import { HolidayRule } from './types';
import { format, startOfMonth, addDays, getDay } from 'date-fns';

export function evaluateRule(rule: HolidayRule, year: number): string | null {
  if (rule.kind === "fixed") {
    return `${year}-${String(rule.month).padStart(2, '0')}-${String(rule.day).padStart(2, '0')}`;
  }
  
  if (rule.kind === "dated") {
    return rule.dates?.[year] || null;
  }
  
  if (rule.kind === "nth") {
    const date = getNthWeekday(year, rule.month!, rule.dow!, rule.n!);
    return format(date, 'yyyy-MM-dd');
  }
  
  return null;
}

function getNthWeekday(year: number, month: number, dow: number, n: number): Date {
  const start = startOfMonth(new Date(year, month - 1));
  let currentDow = getDay(start);
  let dayOffset = (dow - currentDow + 7) % 7;
  dayOffset += (n - 1) * 7;
  return addDays(start, dayOffset);
}
