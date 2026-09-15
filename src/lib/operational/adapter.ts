/**
 * @fileOverview Operational Data Adapter
 * 
 * The single application entry point for authoritative operational intelligence.
 * Connects the UI to the complete, verified, 17-chunk dataset.
 */

import { getSource } from './source';
import { validateRecord } from './validator';
import { OperationalQuery, OperationalResult, DateIntelligenceRecord } from './types';

export async function getOperationalImpact(query: OperationalQuery): Promise<OperationalResult> {
  const timestamp = new Date().toISOString();
  const source = getSource();
  const status = await source.getStatus();

  if (!status.available) {
    return {
      status: 'source_unavailable',
      records: [],
      query_context: query,
      metadata: { timestamp, source_connected: false }
    };
  }

  try {
    // Pipeline: Extract records from the complete 17-chunk authoritative source
    const allRecords = await source.getRecords();

    // Query Filtering Logic
    const matches = allRecords.filter(record => {
      // 1. Filter by Destination (Country Code)
      if (query.destination && record.jurisdiction.country_code !== query.destination) return false;

      // 2. Filter by Purpose (Traveler Lens)
      if (query.purpose && !record.purpose_relevance.includes(query.purpose)) return false;

      // 3. Filter by Date Range
      const recordDate = new Date(record.date).getTime();
      const start = new Date(query.startDate).getTime();
      const end = new Date(query.endDate).getTime();
      
      return recordDate >= start && recordDate <= end;
    });

    return {
      status: matches.length > 0 ? 'results_found' : 'no_matching_records',
      records: matches,
      query_context: query,
      metadata: { 
        timestamp, 
        source_connected: true,
        version: status.version 
      }
    };

  } catch (e) {
    console.error('Operational Adapter Error:', e);
    return {
      status: 'error',
      records: [],
      query_context: query,
      metadata: { timestamp, source_connected: true }
    };
  }
}
