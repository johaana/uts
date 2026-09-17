
/**
 * @fileOverview Authoritative Source Aggregator.
 */
import { CanonicalRule } from './types';
import { getCanonicalRules } from './normalize';
import { validateCanonicalIndex } from './validator';

class AuthoritativeEngine {
  private rules: CanonicalRule[] | null = null;

  async getCanonicalRules(): Promise<CanonicalRule[]> {
    if (!this.rules) {
      const normalized = getCanonicalRules();
      
      // Validation Check (Sanity only, real gate is reconciliation)
      const countries = new Set(normalized.map(r => r.jurisdiction.country_code));
      if (countries.size < 92 || normalized.length < 408) {
         console.warn(`INTEGRITY WARNING: Rules count (${normalized.length}) or Countries (${countries.size}) below Phase 2 baseline.`);
      }
      
      this.rules = normalized;
    }
    return this.rules;
  }

  async getRecords() {
    // Legacy support for older components during Phase 3 transition
    const rules = await this.getCanonicalRules();
    return rules as any[];
  }

  async getStatus() {
    return { available: true, version: "3.0.0-temporal" };
  }
}

const engine = new AuthoritativeEngine();

export function getSource() {
  return engine;
}
