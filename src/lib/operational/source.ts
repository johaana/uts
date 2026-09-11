/**
 * @fileOverview Authoritative Source Definition
 * 
 * Ingests the real Utsavs operational datasets.
 */

import { HOLIDAYS, OPERATIONAL_RECORDS, POLICY_RECORDS } from './data/raw/utsavs-app';
import { normalizeHoliday, normalizeOperational, normalizePolicy } from './normalize';
import { DateIntelligenceRecord } from './types';

export interface SourceStatus {
  available: boolean;
  sourceId?: string;
  sourceName?: string;
  version?: string;
}

export interface OperationalSource {
  getRecords(): Promise<DateIntelligenceRecord[]>;
  getStatus(): Promise<SourceStatus>;
}

class AuthoritativeSource implements OperationalSource {
  async getRecords(): Promise<DateIntelligenceRecord[]> {
    const records: DateIntelligenceRecord[] = [];

    // 1. Expand Holidays (2026-2027)
    for (const [code, rules] of Object.entries(HOLIDAYS)) {
      rules.forEach(rule => {
        [2026, 2027].forEach(year => {
          const normalized = normalizeHoliday(code, rule, year);
          if (normalized) records.push(normalized);
        });
      });
    }

    // 2. Map Operational Records
    OPERATIONAL_RECORDS.forEach(raw => {
      const normalized = normalizeOperational(raw);
      if (normalized) records.push(normalized);
    });

    // 3. Map Policy Records
    POLICY_RECORDS.forEach(raw => {
      const normalized = normalizePolicy(raw);
      if (normalized) records.push(normalized);
    });

    return records;
  }

  async getStatus(): Promise<SourceStatus> {
    return {
      available: true,
      sourceId: 'utsavs-authoritative-primary',
      sourceName: 'Utsavs Authoritative Operational Dataset',
      version: '1.0.0'
    };
  }
}

const source = new AuthoritativeSource();

export function getSource(): OperationalSource {
  return source;
}
