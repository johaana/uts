/**
 * @fileOverview Authoritative Source Aggregator.
 * 
 * PHASE 4: Provides expanded records for UI components like the Tracker/Marquee
 * while maintaining the canonical rule set for the evaluation engine.
 */
import { CanonicalRule, DateIntelligenceRecord } from './types';
import { getCanonicalRules } from './normalize';
import { expandRecurrence } from './engine';

class AuthoritativeEngine {
  private rules: CanonicalRule[] | null = null;
  private expanded: DateIntelligenceRecord[] | null = null;

  async getCanonicalRules(): Promise<CanonicalRule[]> {
    if (!this.rules) {
      this.rules = getCanonicalRules();
    }
    return this.rules;
  }

  /**
   * Provides a materialised expansion of all recurring rules for a 
   * default horizon (2026-2029) to support the Global Tracker and Marquee.
   */
  async getRecords(): Promise<DateIntelligenceRecord[]> {
    if (!this.expanded) {
      const canonical = await this.getCanonicalRules();
      const instances: DateIntelligenceRecord[] = [];
      const years = [2026, 2027, 2028, 2029];

      canonical.forEach(rule => {
        if (rule.temporal_kind === 'recurring') {
          years.forEach(y => {
            const date = expandRecurrence(rule.rule_definition!, y);
            if (date) {
              instances.push({ 
                ...rule, 
                id: `${rule.rule_id}__${date}`,
                date 
              });
            }
          });
        } else if (rule.temporal_kind === 'event' || rule.temporal_kind === 'estimated') {
          if (rule.valid_from) {
            instances.push({ 
              ...rule, 
              id: `${rule.rule_id}__${rule.valid_from}`,
              date: rule.valid_from 
            });
          }
        }
        // Standing and period records are handled dynamically by the adapter/engine
        // during specific window queries, but we include them here if they have 
        // a 'valid_from' anchor for the legacy list-based UI logic.
        else if (rule.valid_from) {
          instances.push({ 
            ...rule, 
            id: `${rule.rule_id}__${rule.valid_from}`,
            date: rule.valid_from 
          });
        }
      });

      this.expanded = instances.sort((a, b) => a.date.localeCompare(b.date));
    }
    return this.expanded;
  }

  async getStatus() {
    return { available: true, version: "3.1.0-integrated" };
  }
}

const engine = new AuthoritativeEngine();

export function getSource() {
  return engine;
}
