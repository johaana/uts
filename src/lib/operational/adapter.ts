/**
 * @fileOverview Operational Data Adapter
 * 
 * The single application entry point for operational intelligence.
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
    const allRecords = await source.getRecords();

    // Pipeline: Validate
    const validRecords: DateIntelligenceRecord[] = allRecords
      .filter(r => validateRecord(r).valid);

    // Query Filtering
    const matches = validRecords.filter(record => {
      // Filter by Country (if provided and record has jurisdiction)
      if (query.destination && record.jurisdiction.country_code !== query.destination) return false;

      // Filter by Purpose
      if (query.purpose && !record.purpose_relevance.includes(query.purpose)) return false;

      // Filter by Date Range
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
