'use client';
/**
 * @fileOverview Authoritative Source Aggregator.
 * 
 * PHASE 4: Provides expanded records for UI components while maintaining 
 * the governed Firestore layer as the production source of truth.
 * 
 * STRATEGY: Static-First Resiliency. The engine initializes with the verified 
 * code baseline immediately, then merges live published overrides in the background.
 */
import { CanonicalRule, DateIntelligenceRecord } from './types';
import { getCanonicalRules } from './normalize';
import { expandRecurrence } from './engine';
import { getFirestore } from '@/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

class AuthoritativeEngine {
  private rules: CanonicalRule[] = [];
  private expanded: DateIntelligenceRecord[] = [];
  private hasInitialized = false;

  constructor() {
    // Synchronously load the 416 verified patterns from the code baseline
    // This guarantees the UI is NEVER empty.
    this.rules = getCanonicalRules();
  }

  /**
   * Returns the canonical rules. 
   * Triggers a background sync if not already done.
   */
  async getCanonicalRules(): Promise<CanonicalRule[]> {
    if (this.hasInitialized) return this.rules;

    // Perform background sync from Firestore
    this.syncFromGovernance();
    
    return this.rules;
  }

  /**
   * Attempts to fetch published overrides from Firestore without blocking.
   */
  private async syncFromGovernance() {
    try {
      const db = getFirestore();
      if (!db) return;

      const q = query(collection(db, 'intelligence_records'), where('status', '==', 'published'));
      const snapshot = await getDocs(q);
      const governedRules = snapshot.docs.map(doc => doc.data() as CanonicalRule);

      if (governedRules.length > 0) {
        const merged = new Map<string, CanonicalRule>();
        // Add static rules first
        this.rules.forEach(r => merged.set(r.rule_id, r));
        // Overwrite with governed rules
        governedRules.forEach(r => merged.set(r.rule_id, r));
        this.rules = Array.from(merged.values());
      }
    } catch (e) {
      console.warn('Governance Layer sync skipped (using verified baseline).', e);
    } finally {
      this.hasInitialized = true;
    }
  }

  /**
   * Returns fully expanded date instances (2026-2029).
   */
  async getRecords(): Promise<DateIntelligenceRecord[]> {
    // Ensure we have at least the static rules
    const canonical = this.rules.length > 0 ? this.rules : getCanonicalRules();
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
    return { available: true, version: "4.2.0-static-first" };
  }
}

const engine = new AuthoritativeEngine();

export function getSource() {
  return engine;
}
