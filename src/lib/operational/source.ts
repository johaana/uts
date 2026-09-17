/**
 * @fileOverview Authoritative Source Aggregator for Structured Data.
 * Singleton instance providing the application's temporal index.
 */
import { DateIntelligenceRecord } from './types';
import { getCanonicalRecords } from './normalize';
import { validateCanonicalIndex } from './validator';

class AuthoritativeEngine {
  private records: DateIntelligenceRecord[] | null = null;

  async getRecords(): Promise<DateIntelligenceRecord[]> {
    if (!this.records) {
      const normalized = getCanonicalRecords();
      const validation = validateCanonicalIndex(normalized);
      
      if (!validation.valid) {
        console.error("CRITICAL: Operational Data Integrity Failure", validation.errors);
      }
      
      this.records = normalized;
    }
    return this.records;
  }

  async getStatus() {
    return { available: true, version: "2.0.0-structured" };
  }
}

const engine = new AuthoritativeEngine();

export function getSource() {
  return engine;
}
