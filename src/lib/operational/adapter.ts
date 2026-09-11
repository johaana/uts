/**
 * @fileOverview Operational Data Adapter
 * 
 * The single application entry point for operational intelligence.
 * Coordinates Source -> Normalize -> Validate -> Filter.
 */

import { getSource } from './source';
import { normalizeRecord } from './normalize';
import { validateRecord } from './validator';
import { OperationalQuery, OperationalResult, DateIntelligenceRecord } from './types';

/**
 * Main query function for the Date Intelligence product.
 */
export async function getOperationalImpact(query: OperationalQuery): Promise<OperationalResult> {
  const timestamp = new Date().toISOString();
  const source = getSource();
  const status = await source.getStatus();

  // 1. Source Availability Check
  if (!status.available) {
    return {
      status: 'source_unavailable',
      records: [],
      query_context: query,
      metadata: { timestamp, source_connected: false }
    };
  }

  try {
    // 2. Fetch Raw Records
    const rawRecords = await source.getRecords();

    // 3. Pipeline: Normalize and Validate
    const validRecords: DateIntelligenceRecord[] = rawRecords
      .map(normalizeRecord)
      .filter((r): r is DateIntelligenceRecord => r !== null)
      .filter(r => validateRecord(r).valid);

    // 4. Query Filtering
    const matches = validRecords.filter(record => {
      // Filter by Country
      if (record.jurisdiction.country_code !== query.destination) return false;

      // Filter by Purpose
      if (!record.purpose_relevance.includes(query.purpose)) return false;

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
    return {
      status: 'error',
      records: [],
      query_context: query,
      metadata: { timestamp, source_connected: true }
    };
  }
}
