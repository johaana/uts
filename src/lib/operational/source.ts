/**
 * @fileOverview Authoritative Source Aggregator
 * 
 * Aggregates 17 authoritative source chunks and provides access 
 * to the continuous raw source for the parsing engine.
 */

import { DateIntelligenceRecord } from './types';
import { extractDatasets, createEventRecord } from './normalize';
import { allEvents, internationalEvents } from '../festival-data';
import { parse, format, isValid } from 'date-fns';

import { CHUNK_001 } from './data/raw/chunk_001';
import { CHUNK_002 } from './data/raw/chunk_002';
import { CHUNK_003 } from './data/raw/chunk_003';
import { CHUNK_004 } from './data/raw/chunk_004';
import { CHUNK_005 } from './data/raw/chunk_005';
import { CHUNK_006 } from './data/raw/chunk_006';
import { CHUNK_007 } from './data/raw/chunk_007';
import { CHUNK_008 } from './data/raw/chunk_008';
import { CHUNK_009 } from './data/raw/chunk_009';
import { CHUNK_010 } from './data/raw/chunk_010';
import { CHUNK_011 } from './data/raw/chunk_011';
import { CHUNK_012 } from './data/raw/chunk_012';
import { CHUNK_013 } from './data/raw/chunk_013';
import { CHUNK_014 } from './data/raw/chunk_014';
import { CHUNK_015 } from './data/raw/chunk_015';
import { CHUNK_016 } from './data/raw/chunk_016';
import { CHUNK_017 } from './data/raw/chunk_017';

export interface SourceStatus {
  available: boolean;
  sourceId?: string;
  sourceName?: string;
  version?: string;
  chunkCount: number;
}

export interface OperationalSource {
  getRecords(): Promise<DateIntelligenceRecord[]>;
  getStatus(): Promise<SourceStatus>;
  getRawSource(): string;
}

class AuthoritativeSource implements OperationalSource {
  private rawSource: string | null = null;
  private parsedRecords: DateIntelligenceRecord[] | null = null;

  getRawSource(): string {
    if (!this.rawSource) {
      this.rawSource = [
        CHUNK_001, CHUNK_002, CHUNK_003, CHUNK_004, CHUNK_005,
        CHUNK_006, CHUNK_007, CHUNK_008, CHUNK_009, CHUNK_010,
        CHUNK_011, CHUNK_012, CHUNK_013, CHUNK_014, CHUNK_015,
        CHUNK_016, CHUNK_017
      ].join('');
    }
    return this.rawSource;
  }

  async getRecords(): Promise<DateIntelligenceRecord[]> {
    if (!this.parsedRecords) {
      const source = this.getRawSource();
      const chunkRecords = extractDatasets(source);
      
      // V24 Unification: Merge Discovery Data (festival-data.ts) into the Operational pool
      const discoveryRecords: DateIntelligenceRecord[] = [...allEvents, ...internationalEvents].map(e => {
        const dateStr = e.date.split(' - ')[0];
        const parsed = parse(dateStr, 'MMM dd, yyyy', new Date());
        const isoDate = isValid(parsed) ? format(parsed, 'yyyy-MM-dd') : '2026-01-01';
        
        return createEventRecord(
          e.country === 'India' ? 'IN' : 'Global', 
          isoDate, 
          e.name, 
          e.type === 'Holiday' ? 'public' : 'cultural',
          'listed'
        );
      });

      this.parsedRecords = [...chunkRecords, ...discoveryRecords];
    }
    return this.parsedRecords;
  }

  async getStatus(): Promise<SourceStatus> {
    return {
      available: true,
      sourceId: 'utsavs-authoritative-primary',
      sourceName: 'Utsavs Authoritative Operational Dataset',
      version: '1.0.0-final',
      chunkCount: 17
    };
  }
}

const source = new AuthoritativeSource();

export function getSource(): OperationalSource {
  return source;
}
