/**
 * @fileOverview Data interfaces for the Utsavs Operational Intelligence layer.
 * These types define the schema for the future authoritative source.
 */

export type ConfidenceTier = 'high' | 'medium' | 'provisional' | 'estimated' | 'listed';

export type DateState = 'confirmed' | 'declared' | 'provisional' | 'estimated';

export type OperationalStatus = 'OPEN' | 'CLOSED' | 'EARLY_CLOSE' | 'LIMITED' | 'HOLIDAY_APPLIES' | 'UNKNOWN';

export interface SourceEvidence {
  source_name: string;
  source_url?: string;
  last_checked?: string;
  link_label?: string;
}

export interface DateIntelligenceRecord {
  date: string; // YYYY-MM-DD
  name: string;
  country_code: string;
  jurisdiction?: string;
  type: 'public' | 'religious' | 'cultural' | 'institutional';
  state: DateState;
  confidence: ConfidenceTier;
  evidence?: SourceEvidence;
  consequences?: string[];
}

export interface InstitutionalSignal {
  institution_id: string;
  institution_name: string;
  date: string;
  status: OperationalStatus;
  scope: string;
  segment?: string;
  confidence: ConfidenceTier;
  evidence: SourceEvidence;
}

export interface PolicySignal {
  country_code: string;
  topic: string;
  summary: string;
  authority_name: string;
  source_url?: string;
  effective_date?: string;
}
