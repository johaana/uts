'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  COUNTRY_LABELS, 
} from '@/lib/calendar-intelligence';
import { getOperationalImpact } from '@/lib/operational/adapter';
import { getSource } from '@/lib/operational/source';
import { evaluateQuery, resolveNow } from '@/lib/operational/engine';
import { OperationalResult, DateIntelligenceRecord, CanonicalRule } from '@/lib/operational/types';
import { format, addDays, startOfDay, differenceInDays, isValid, startOfToday, parseISO } from 'date-fns';
import { ChevronDown, ChevronUp, Activity, Info, Globe, ExternalLink, ShieldCheck } from 'lucide-react';

const getCleanLabel = (scope?: string, category?: string) => {
  const s = (scope || 'NATIONAL').toUpperCase();
  const c = (category || '').toUpperCase().replace('_', ' ');
  
  if (!c || s === c || c === 'HOLIDAY' || c === 'PUBLIC') return s;
  return `${s} · ${c}`;
};

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [allRecords, setAllRecords] = useState<DateIntelligenceRecord[]>([]);
  const [canonicalRules, setCanonicalRules] = useState<CanonicalRule[]>([]);
  const [mode, setMode] = useState<'traveler' | 'study' | 'corporate'>('traveler');
  const [country, setCountry] = useState('IN');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [todayKey, setTodayKey] = useState('');
  const [expandedRecord, setExpandedRecord] = useState<string | null>(null);
  const [expandedGlobal, setExpandedGlobal] = useState<string | null>(null);
  
  const [isComparing, setIsComparing] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const today = startOfToday();
    const tKey = format(today, 'yyyy-MM-dd');
    setTodayKey(tKey);
    setStartDate(tKey);
    
    const end = addDays(today, 30);
    setEndDate(format(end, 'yyyy-MM-dd'));

    getSource().getRecords().then(records => {
      setAllRecords(records);
    });
    getSource().getCanonicalRules().then(rules => {
      setCanonicalRules(rules);
    });
  }, []);

  const filteredCountries = useMemo(() => {
    if (canonicalRules.length === 0) return [];
    const countrySet = new Set<string>();
    canonicalRules.forEach(rule => {
      const cc = rule.jurisdiction?.country_code;
      if (cc) countrySet.add(cc);
    });
    return Array.from(countrySet).sort((a, b) => (COUNTRY_LABELS[a] || a).localeCompare(COUNTRY_LABELS[b] || b));
  }, [canonicalRules]);

  const forwardIndex = useMemo(() => {
    const idx = new Map();
    if (!isMounted || !todayKey || allRecords.length === 0) return idx;
    allRecords.forEach(r => {
      if (!idx.has(r.date)) idx.set(r.date, []);
      idx.get(r.date).push(r);
    });
    return new Map(Array.from(idx.entries()).sort((a, b) => a[0].localeCompare(b[0])));
  }, [isMounted, todayKey, allRecords]);

  const globalTodayEvents = useMemo(() => {
    const events = (forwardIndex.get(todayKey) || []);
    return events;
  }, [forwardIndex, todayKey]);

  const checkerData = useMemo(() => {
    if (!startDate || !endDate || canonicalRules.length === 0) return { records: [], count: 0, longest: 0, nextDays: '—', regionalSignals: [] };
    const purposeMap: Record<string, any> = { traveler: 'travel', study: 'study', corporate: 'business' };
    const matches = evaluateQuery(canonicalRules, { destination: country, startDate, endDate, purpose: purposeMap[mode] }, resolveNow());
    const uniqueDates = new Set(matches.map(m => m.date));
    const nextDate = [...uniqueDates].sort().find(d => d >= startDate);
    const nextDays = nextDate ? differenceInDays(new Date(nextDate + 'T00:00:00'), new Date(startDate + 'T00:00:00')) : '—';
    
    const regionalEvents = matches.filter(m => m.category === 'regional' || m.jurisdiction.scope === 'regional');
    const standingPolicies = canonicalRules.filter(r => 
      r.jurisdiction.country_code === country && 
      (r.temporal_kind === 'standing' || r.category === 'policy' || r.category === 'banking')
    );

    const materializedStanding = standingPolicies.map(p => ({
      ...p,
      date: 'POLICY',
      id: `${p.rule_id}__POLICY`
    }));
    
    return { records: matches, count: uniqueDates.size, longest: 0, nextDays, regionalSignals: [...regionalEvents, ...materializedStanding] };
  }, [country, startDate, endDate, canonicalRules, mode]);

  return (
    <div className="bg-ink text-paper min-h-screen font-sans">
      <Header />
      <main>
        <section className="hero" id="explore">
          <div className="wrap hero-grid">
            <div className="hero-copy text-left">
              <h1 className="headline md:max-w-none max-w-[320px]">
                Know before you fly. <br className="md:hidden" />
                Know before you schedule.
              </h1>
              <p className="sub">A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.</p>

              <aside className="hero-tracker md:order-last" id="world">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker uppercase tracking-widest text-[#E8A33D] font-mono text-[10px]">Global Pulse</span>
                    <strong>{isMounted ? format(startOfToday(), 'EEEE, d MMMM yyyy') : 'Loading...'}</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> World View</span>
                </div>

                <div className="hero-tracker-next-grid text-left border-b border-white/10">
                   <div className="px-[18px] pt-4 pb-1">
                      <span className="next-card-kicker flex items-center gap-1.5 !text-[#4FD1C5]">
                        <Globe className="w-2.5 h-2.5" /> WORLD STATE TODAY
                      </span>
                   </div>
                   <div className="divide-y divide-white/5">
                      {globalTodayEvents.length > 0 ? globalTodayEvents.map((item) => (
                        <div key={item.id} className="relative">
                           <button 
                             onClick={() => setExpandedGlobal(expandedGlobal === item.id ? null : item.id)}
                             className="w-full flex items-center justify-between px-[18px] py-4 hover:bg-white/5 transition-all text-left group"
                           >
                              <div className="space-y-0.5">
                                 <span className="block text-[14px] font-bold group-hover:text-[#4FD1C5] transition-colors">{COUNTRY_LABELS[item.jurisdiction.country_code]} — {item.name}</span>
                                 <span className="block text-[8.5px] font-bold text-muted-dim uppercase tracking-widest">{getCleanLabel(item.jurisdiction.scope, item.category)}</span>
                              </div>
                              {expandedGlobal === item.id ? <ChevronUp className="w-4 h-4 text-muted-dim" /> : <ChevronDown className="w-4 h-4 text-muted-dim" />}
                           </button>
                           {expandedGlobal === item.id && (
                             <div className="px-[18px] pb-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                                <p className="text-[12.5px] text-[#9AA1C0] leading-snug font-medium border-l border-[#4FD1C5]/30 pl-3 italic">
                                   "{item.consequences.implication}"
                                </p>
                                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                                  <span className="text-[9px] font-bold text-muted-dim uppercase tracking-widest">Source: {item.evidence.source_name || 'Authoritative'}</span>
                                  <div className="flex items-center gap-1 text-green-500/60">
                                    <ShieldCheck className="w-2.5 h-2.5" />
                                    <span className="text-[9px] font-bold uppercase">Verified</span>
                                  </div>
                                </div>
                             </div>
                           )}
                        </div>
                      )) : (
                        <div className="px-[18px] py-8 text-center text-xs text-muted-dim italic">
                           No primary records for today.
                        </div>
                      )}
                   </div>
                </div>

                <div className="hero-tracker-feed">
                  <div className="marquee">
                    <div className="marquee-track">
                      {Array.from(forwardIndex.entries())
                        .filter(([d]) => {
                          if (!d || d === 'POLICY') return false;
                          const date = parseISO(d);
                          const today = startOfToday();
                          return date >= today && differenceInDays(date, today) <= 14;
                        })
                        .map(([date, entries]) => (
                        entries.map((e: any, idx: number) => (
                          <span key={`${date}-${idx}`} className="chip">
                            <b>{COUNTRY_LABELS[e.jurisdiction.country_code] || e.jurisdiction.country_code}</b> — {e.name} · {format(new Date(date + 'T00:00:00'), 'd MMM')}
                          </span>
                        ))
                      ))}
                    </div>
                  </div>
                </div>
                <a className="hero-tracker-link text-left" href="/date-intelligence">VIEW TODAY'S FULL INTELLIGENCE <span>→</span></a>
              </aside>
            </div>

            <div className="checker text-left order-1">
              <div className="checker-top">
                <h3 id="checker-title">Trip impact checker</h3>
                <button type="button" className="compare-launch" onClick={() => setIsComparing(!isComparing)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3 4 7l4 4M4 7h13M16 21l4-4-4-4M20 17H7"/>
                  </svg>
                  <span>{isComparing ? 'Single view' : 'Compare countries'}</span>
                </button>
              </div>

              <div className="mode-toggle">
                <button type="button" className={cn(mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button type="button" className={cn(mode === 'study' && "active")} onClick={() => setMode('study')}>Study abroad</button>
                <button type="button" className={cn(mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business travel</button>
              </div>

              <div className="space-y-4">
                <div className="checker-row">
                  <div className="checker-field">
                    <label>Destination / Jurisdiction</label>
                    <select value={country} onChange={e => setCountry(e.target.value)}>
                      {filteredCountries.map(code => (
                        <option key={code} value={code}>{COUNTRY_LABELS[code] || code}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="checker-field">
                    <label>From</label>
                    <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                  </div>
                  <div className="checker-field">
                    <label>To</label>
                    <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                  </div>
                </div>

                <div className="checker-summary">
                  <div><b className="font-headline">{checkerData.count}</b><span>flags in period</span></div>
                  <div><b className="font-headline">{checkerData.nextDays}</b><span>days to next</span></div>
                </div>

                <div className="checker-list space-y-1">
                   {checkerData.records.map((r) => (
                     <div key={r.id} className="border-b border-white/5 last:border-0">
                        <button 
                          onClick={() => setExpandedRecord(expandedRecord === r.id ? null : r.id)}
                          className="w-full flex items-center justify-between py-4 hover:bg-white/5 transition-all text-left group"
                        >
                           <div className="flex items-center gap-6">
                              <div className="impact-date w-14 shrink-0">{format(new Date(r.date + 'T00:00:00'), 'dd MMM')}</div>
                              <div className="impact-name font-bold group-hover:text-gold-soft transition-colors">{r.name}</div>
                           </div>
                           <div className="flex items-center gap-4">
                              <span className="text-[9px] font-bold text-muted-dim uppercase border border-white/20 px-2 py-0.5 rounded-full">{getCleanLabel(r.jurisdiction.scope, r.category)}</span>
                              {expandedRecord === r.id ? <ChevronUp className="w-4 h-4 text-muted-dim" /> : <ChevronDown className="w-4 h-4 text-muted-dim" />}
                           </div>
                        </button>
                        {expandedRecord === r.id && (
                          <div className="pb-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                             <div className="p-4 bg-white/5 border-l-2 border-gold-soft rounded-r-lg">
                                <p className="text-[13px] font-medium leading-relaxed italic text-paper/90">
                                  "{r.consequences.implication}"
                                </p>
                             </div>
                             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 text-[10px] text-muted-dim">
                                <div className="flex items-center gap-1.5">
                                   <span className="font-bold uppercase">Evidence:</span>
                                   <span>{r.evidence.source_name || 'Authoritative Source'}</span>
                                   {r.evidence.source_url && (
                                     <a href={r.evidence.source_url} target="_blank" rel="noopener noreferrer" className="text-[#4FD1C5] hover:underline flex items-center gap-0.5">
                                       <ExternalLink className="w-2 h-2" />
                                     </a>
                                   )}
                                </div>
                                <div className="flex items-center gap-3">
                                   <span>State: <b className="text-paper">{r.state.toUpperCase()}</b></span>
                                   <div className="flex items-center gap-1">
                                      <ShieldCheck className="w-3 h-3 text-green-500/60" />
                                      <span className="font-bold uppercase">Confirmed</span>
                                   </div>
                                </div>
                             </div>
                          </div>
                        )}
                     </div>
                   ))}
                   {checkerData.records.length === 0 && (
                     <div className="py-12 text-center text-xs text-muted-dim italic border-2 border-dashed border-white/5 rounded-xl">
                        No operational records found for this window.
                     </div>
                   )}
                </div>

                {checkerData.regionalSignals.length > 0 && (
                  <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl mt-8 space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D] flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5" /> JURISDICTIONAL ROUNDUP · {COUNTRY_LABELS[country] || country}
                    </p>
                    <div className="grid gap-4">
                       {checkerData.regionalSignals.map((item, idx) => (
                         <div key={idx} className="flex justify-between items-start border-b border-white/5 pb-4 last:border-0 last:pb-0 text-left">
                            <div className="space-y-1">
                               <p className="text-[13px] font-bold">{item.name}</p>
                               <p className="text-[11px] text-muted-dim leading-relaxed italic">"{item.consequences.implication}"</p>
                            </div>
                            <span className="text-[9px] font-mono text-[#E8A33D]/60 font-bold uppercase shrink-0 ml-4">{item.jurisdiction.region || (item.temporal_kind === 'standing' ? 'POLICY' : 'REGIONAL')}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
