'use client';
/**
 * @fileOverview Authoritative Source Aggregator.
 * 
 * PHASE 4: Provides expanded records for UI components while maintaining 
 * the governed Firestore layer as the production source of truth.
 */
import { CanonicalRule, DateIntelligenceRecord } from './types';
import { getCanonicalRules } from './normalize';
import { expandRecurrence } from './engine';
import { getFirestore } from '@/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

class AuthoritativeEngine {
  private rules: CanonicalRule[] | null = null;
  private expanded: DateIntelligenceRecord[] | null = null;

  async getCanonicalRules(): Promise<CanonicalRule[]> {
    if (!this.rules) {
      // 1. Get Static Baselines
      const staticRules = getCanonicalRules();
      
      // 2. Fetch Published Overrides/Additions from Firestore
      let governedRules: CanonicalRule[] = [];
      try {
        const db = getFirestore();
        if (db) {
          const q = query(collection(db, 'intelligence_records'), where('status', '==', 'published'));
          const snapshot = await getDocs(q);
          governedRules = snapshot.docs.map(doc => doc.data() as CanonicalRule);
        }
      } catch (e) {
        console.warn('Governance Layer unavailable, using static baseline only.', e);
      }

      // Merge (Governed rules with same ID override static ones)
      const merged = new Map<string, CanonicalRule>();
      staticRules.forEach(r => merged.set(r.rule_id, r));
      governedRules.forEach(r => merged.set(r.rule_id, r));
      
      this.rules = Array.from(merged.values());
    }
    return this.rules;
  }

  async getRecords(): Promise<DateIntelligenceRecord[]> {
    if (!this.expanded) {
      const canonical = await this.getCanonicalRules();
      const instances: DateIntelligenceRecord[] = [];
      const years = [2026, 2027, 2028, 2029];

      canonical.forEach(rule => {
        if (rule.temporal_kind === 'recurring' && rule.rule_definition) {
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
        } else if (rule.date) {
          instances.push({ 
            ...rule, 
            id: `${rule.rule_id}__${rule.date}`,
            date: rule.date 
          });
        }
      });

      this.expanded = instances.sort((a, b) => a.date.localeCompare(b.date));
    }
    return this.expanded;
  }

  async getStatus() {
    return { available: true, version: "4.0.0-governed" };
  }
}

const engine = new AuthoritativeEngine();

export function getSource() {
  return engine;
}
