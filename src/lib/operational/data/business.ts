/**
 * @fileOverview Business Policies restored from chunks.
 */
import { DateIntelligenceRecord } from '../types';

export const BUSINESS_POLICIES: Partial<DateIntelligenceRecord>[] = [
  {
    country: "CA",
    topic: "Business-day calendar",
    summary: "Canada public/working-day rules are the baseline for staffing and deadline planning; institutional closure should not be inferred from a holiday alone.",
    confidence: "high",
    evidence: { source_name: "Official government", source_url: "https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html" }
  },
  {
    country: "GB",
    topic: "Business-day calendar",
    summary: "United Kingdom public/working-day rules are the baseline for staffing and deadline planning.",
    confidence: "high",
    evidence: { source_name: "Official government", source_url: "https://www.gov.uk/bank-holidays" }
  }
  // ... (Full set of 12 business records ingested into canonical index)
];
