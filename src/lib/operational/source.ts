/**
 * @fileOverview Authoritative Source Definition
 * 
 * Ingests the real Utsavs operational datasets.
 */

import { 
    HOLIDAYS, 
    REGIONAL_INTELLIGENCE, 
    STUDY_INSTITUTIONAL_TIMING,
    CORPORATE_TRAVEL_INTELLIGENCE_DATA,
    BANKING_INTELLIGENCE_DATA,
    CORPORATE_MARKET_DEPTH_ADDITIONS,
    CUSTOMS_INTELLIGENCE_DATA,
    CORPORATE_INTELLIGENCE,
    STUDENT_RISK_DATA,
    STUDENT_INTELLIGENCE_EXTRA,
    OPERATIONAL_GLOBAL_EXPANSION,
    YEARS_SUPPORTED 
} from './data/raw/utsavs-app';
import { normalizeHoliday, normalizeRegional, normalizeInstitutional } from './normalize';
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

    // 1. Expand Holidays
    for (const [code, rules] of Object.entries(HOLIDAYS)) {
      rules.forEach(rule => {
        YEARS_SUPPORTED.forEach(year => {
          const normalized = normalizeHoliday(code, rule, year);
          if (normalized) records.push(normalized);
        });
      });
    }

    // 2. Map Regional Intelligence
    REGIONAL_INTELLIGENCE.forEach(raw => {
      const normalized = normalizeRegional(raw);
      if (normalized) records.push(normalized);
    });

    // 3. Map Institutional Timing
    STUDY_INSTITUTIONAL_TIMING.forEach(raw => {
        const normalized = normalizeInstitutional(raw);
        if (normalized) records.push(normalized);
    });

    // 4. Map Corporate Intelligence (Generic support)
    [...CORPORATE_TRAVEL_INTELLIGENCE_DATA, ...CORPORATE_INTELLIGENCE].forEach(raw => {
        const normalized = normalizeRegional({ ...raw, category: 'business_travel' });
        if (normalized) records.push(normalized);
    });

    // 5. Map Banking / Market / Customs / Student / Global Expansion
    // These use the normalized logic appropriate to their categories
    [...BANKING_INTELLIGENCE_DATA, ...CORPORATE_MARKET_DEPTH_ADDITIONS, ...CUSTOMS_INTELLIGENCE_DATA, ...STUDENT_RISK_DATA, ...STUDENT_INTELLIGENCE_EXTRA, ...OPERATIONAL_GLOBAL_EXPANSION].forEach(raw => {
        const normalized = normalizeRegional(raw);
        if (normalized) records.push(normalized);
    });

    return records;
  }

  async getStatus(): Promise<SourceStatus> {
    const totalCount = 
        Object.keys(HOLIDAYS).length + 
        REGIONAL_INTELLIGENCE.length + 
        STUDY_INSTITUTIONAL_TIMING.length +
        CORPORATE_TRAVEL_INTELLIGENCE_DATA.length +
        BANKING_INTELLIGENCE_DATA.length +
        CORPORATE_MARKET_DEPTH_ADDITIONS.length +
        CUSTOMS_INTELLIGENCE_DATA.length +
        CORPORATE_INTELLIGENCE.length +
        STUDENT_RISK_DATA.length +
        STUDENT_INTELLIGENCE_EXTRA.length +
        OPERATIONAL_GLOBAL_EXPANSION.length;

    return {
      available: totalCount > 0,
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
