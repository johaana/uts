/**
 * @fileOverview Canonical Data Types for Utsavs Operational Intelligence.
 */

export type ConfidenceTier = 'high' | 'medium' | 'provisional' | 'estimated' | 'listed' | 'reference';
export type DateState = 'confirmed' | 'declared' | 'provisional' | 'estimated';
export type OperationalCategory = 'holiday' | 'regional' | 'institutional' | 'business_travel' | 'banking' | 'market' | 'customs' | 'student_risk' | 'global_expansion';
export type UserPurpose = 'travel' | 'business' | 'study' | 'workforce' | 'logistics';

export interface SourceEvidence {
  source_name: string;
  source_url: string;
  link_label?: string;
  last_checked?: string;
}

export interface HolidayRule {
  kind: "fixed" | "nth" | "dated";
  name: string;
  type: OperationalCategory;
  status: DateState;
  confidence?: ConfidenceTier;
  evidence?: SourceEvidence;
  month?: number;
  day?: number;
  dow?: number;
  n?: number;
  dates?: Record<number, string>;
  jurisdiction?: {
    country_code: string;
    region?: string;
    scope: 'national' | 'regional';
  };
}

export interface Institution {
  id: string;
  name: string;
  country: string;
  type: string;
  regular_hours?: string;
  hours_source?: string;
  applies_to?: string[];
}

export interface DateIntelligenceRecord {
  id: string;
  date: string; // YYYY-MM-DD
  name: string;
  category: OperationalCategory;
  jurisdiction: {
    country_code: string;
    country_name: string;
    region?: string;
    scope: 'national' | 'regional' | 'local' | 'institutional';
  };
  institution?: Institution;
  purpose_relevance: UserPurpose[];
  state: DateState;
  confidence: ConfidenceTier;
  evidence: SourceEvidence;
  consequences: {
    implication: string;
    affected_operations: string[];
    severity: 'low' | 'medium' | 'high';
  };
  source_label: string;
}
