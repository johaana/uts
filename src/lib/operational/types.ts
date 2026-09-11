/**
 * @fileOverview Data interfaces for the Utsavs Operational Intelligence layer.
 * These types define the schema for the future authoritative source integration.
 */

export type ConfidenceTier = 'high' | 'medium' | 'provisional' | 'estimated' | 'listed';
export type DateState = 'confirmed' | 'declared' | 'provisional' | 'estimated';
export type OperationalStatus = 'OPEN' | 'CLOSED' | 'EARLY_CLOSE' | 'LIMITED' | 'HOLIDAY_APPLIES' | 'UNKNOWN';

export type UserPurpose = 'travel' | 'business' | 'study' | 'workforce' | 'logistics';

export interface SourceEvidence {
  source_name: string;
  source_url?: string;
  last_checked?: string;
  link_label?: string;
  source_type?: 'government' | 'institutional' | 'regulatory' | 'algorithmic';
}

export interface Jurisdiction {
  country_code: string;
  country_name: string;
  region?: string; // state/province
  local?: string;  // city/municipality
  scope: 'national' | 'regional' | 'local';
}

export interface Institution {
  id: string;
  name: string;
  type: 'bank' | 'market' | 'customs' | 'port' | 'university' | 'embassy';
  applicability: string; // describing how/who it affects
}

export interface PracticalConsequence {
  implication: string;   // "Total market closure", "Reduced transport", etc.
  action_suggested?: string;
  affected_operations: string[];
}

export interface DateIntelligenceRecord {
  id: string;
  date: string; // YYYY-MM-DD
  date_end?: string;
  name: string;
  jurisdiction: Jurisdiction;
  institution?: Institution;
  purpose_relevance: UserPurpose[];
  state: DateState;
  confidence: ConfidenceTier;
  evidence: SourceEvidence;
  consequences: PracticalConsequence;
}

export interface OperationalQuery {
  origin?: string;
  destination: string;
  startDate: string;
  endDate: string;
  purpose: UserPurpose;
}

export interface OperationalResult {
  status: 'results_found' | 'no_impact' | 'source_unavailable' | 'error';
  records: DateIntelligenceRecord[];
  query_context: OperationalQuery;
  metadata: {
    timestamp: string;
    source_connected: boolean;
  };
}
