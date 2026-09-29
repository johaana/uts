'use client';
/**
 * @fileOverview Authoritative Source Aggregator.
 * 
 * PHASE 4: Provides expanded records for UI components while maintaining 
 * the governed Firestore layer as the production source of truth.
 * 
 * IMPROVEMENT: Implements a "Static-First" strategy to ensure the baseline 
 * 416 verified rules are available immediately, even if Firestore is 
 * disconnected or using placeholder configurations.
 */
import { CanonicalRule, DateIntelligenceRecord } from './types';
import { getCanonicalRules } from './normalize';
import { expandRecurrence } from './engine';
import { getFirestore } from '@/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

class AuthoritativeEngine {
  private rules: CanonicalRule[] | null = null;
  private expanded: DateIntelligenceRecord[] | null = null;
  private isInitializing = false;

  /**
   * Returns the canonical rules. 
   * Returns the static baseline immediately if live data is still loading.
   */
  async getCanonicalRules(): Promise<CanonicalRule[]> {
    // If we already have a merged set, return it.
    if (this.rules) return this.rules;

    // 1. Get Static Baselines synchronously (always available)
    const staticRules = getCanonicalRules();
    
    // If we are already initializing (fetching from Firestore), return the baseline for now.
    if (this.isInitializing) return staticRules;

    this.isInitializing = true;

    // 2. Attempt to fetch Published Overrides from Firestore
    let governedRules: CanonicalRule[] = [];
    try {
      const db = getFirestore();
      if (db) {
        // We don't use a long-hanging await here to prevent blocking the UI
        const q = query(collection(db, 'intelligence_records'), where('status', '==', 'published'));
        const snapshot = await getDocs(q);
        governedRules = snapshot.docs.map(doc => doc.data() as CanonicalRule);
      }
    } catch (e) {
      console.warn('Governance Layer unavailable or unauthorized. Falling back to static baseline.', e);
    }

    // Merge logic: Governed rules with same ID override static ones
    const merged = new Map<string, CanonicalRule>();
    staticRules.forEach(r => merged.set(r.rule_id, r));
    governedRules.forEach(r => merged.set(r.rule_id, r));
    
    this.rules = Array.from(merged.values());
    this.isInitializing = false;
    
    return this.rules;
  }

  /**
   * Returns fully expanded date instances (2026-2029).
   */
  async getRecords(): Promise<DateIntelligenceRecord[]> {
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
    return this.expanded;
  }

  async getStatus() {
    return { available: true, version: "4.1.0-static-resilient" };
  }
}

const engine = new AuthoritativeEngine();

export function getSource() {
  return engine;
}
