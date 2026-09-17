
/**
 * @fileOverview Operational Data Adapter
 * 
 * PHASE 3: Connects UI to the Temporal Engine.
 */

import { getSource } from './source';
import { evaluateQuery, resolveNow } from './engine';
import { OperationalQuery, OperationalResult, DateIntelligenceRecord } from './types';
import { format } from 'date-fns';

export async function getOperationalImpact(query: OperationalQuery): Promise<OperationalResult> {
  const now = resolveNow();
  const timestamp = now.toISOString();
  const source = getSource();
  const status = await source.getStatus();

  if (!status.available) {
    return {
      status: 'source_unavailable',
      records: [],
      query_context: query,
      metadata: { timestamp, source_connected: false, now_resolved: timestamp }
    };
  }

  try {
    // 1. Get the Invariant 408 Canonical Rules
    const canonicalRules = await source.getCanonicalRules();

    // 2. Evaluate against the Temporal Engine
    const matches = evaluateQuery(canonicalRules, query, now);

    return {
      status: matches.length > 0 ? 'results_found' : 'no_matching_records',
      records: matches,
      query_context: query,
      metadata: { 
        timestamp, 
        source_connected: true,
        version: status.version,
        now_resolved: timestamp
      }
    };

  } catch (e) {
    console.error('Operational Adapter Error:', e);
    return {
      status: 'error',
      records: [],
      query_context: query,
      metadata: { timestamp, source_connected: true, now_resolved: timestamp }
    };
  }
}
