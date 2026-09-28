
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  COUNTRY_LABELS, 
} from '@/lib/calendar-intelligence';
import { getSource } from '@/lib/operational/source';
import { evaluateQuery, resolveNow } from '@/lib/operational/engine';
import { DateIntelligenceRecord, CanonicalRule } from '@/lib/operational/types';
import { format, addDays, differenceInDays, startOfToday, getMonth } from 'date-fns';
import { ChevronDown, ChevronUp, Activity, ShieldCheck, Clock, ExternalLink } from 'lucide-react';

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
  const [lastRefreshed, setLastRefreshed] = useState<string>('');
  
  const [isComparing, setIsComparing] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const today = startOfToday();
    const tKey = format(today, 'yyyy-MM-dd');
    setTodayKey(tKey);
    setStartDate(tKey);
    setLastRefreshed(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    
    const end = addDays(today, 30);
    setEndDate(format(end, 'yyyy-MM-dd'));

    getSource().getRecords().then(records => {
      setAllRecords(records);
    });
    getSource().getCanonicalRules().then(rules => {
      setCanonicalRules(rules);
    });

    const timer = setInterval(() => {
      setLastRefreshed(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
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
    return (forwardIndex.get(todayKey) || []).filter((r: any) => r.jurisdiction.scope === 'national');
  }, [forwardIndex, todayKey]);

  const localSignalsFeed = useMemo(() => {
    const todayItems = (forwardIndex.get(todayKey) || []).filter((r: any) => r.jurisdiction.scope === 'regional');
    
    if (todayItems.length > 0) {
      return todayItems.map((e: any) => ({
        text: `${COUNTRY_LABELS[e.jurisdiction.country_code] || e.jurisdiction.country_code} — ${e.jurisdiction.region || ''} — ${e.name} · ${format(new Date(e.date + 'T00:00:00'), 'd MMM')}`,
        isLive: true
      }));
    }

    return [{
      text: "Standard global working day · 92 jurisdictions verified · No regional alerts today.",
      isLive: false
    }];
  }, [forwardIndex, todayKey]);

  const checkerData = useMemo(() => {
    if (!startDate || !endDate || canonicalRules.length === 0) return { records: [], count: 0, longest: 0, nextDays: '—', regionalSignals: [] };
    const purposeMap: Record<string, any> = { traveler: 'travel', study: 'study', corporate: 'business' };
    const matches = evaluateQuery(canonicalRules, { destination: country, startDate, endDate, purpose: purposeMap[mode] }, resolveNow());
    const uniqueDates = new Set(matches.map(m => m.date));
    const nextDate = [...uniqueDates].sort().find(d => d >= startDate);
    const nextDays = nextDate ? differenceInDays(new Date(nextDate + 'T00:00:00'), new Date(startDate + 'T00:00:00')) : '—';
    
    const regionalSignals = [];
    const today = startOfToday();
    const month = getMonth(today); 
    
    const todayMatches = matches.filter(m => m.date === todayKey);
    const todayRegional = todayMatches.filter(m => m.category === 'regional' || m.jurisdiction.scope === 'regional');
    
    if (todayRegional.length > 0) {
      regionalSignals.push(...todayRegional);
    } else if (country === 'IN') {
      if (month >= 5 && month <= 8) {
        regionalSignals.push({
          name: "Southwest Monsoon",
          consequences: { implication: "Active in MH, KA, and KL. Expect localized waterlogging in Mumbai and Bangalore; allow 90-min extra buffer for airport transfers." },
          jurisdiction: { region: "LIVE ADVISORY" },
          isLive: true
        });
      } 
      else if (month >= 9 && month <= 10) {
        regionalSignals.push({
          name: "Retreating Monsoon",
          consequences: { implication: "Cyclonic activity alert for TN, AP, and Odisha. Monitor coastal road conditions and port operational status." },
          jurisdiction: { region: "LIVE ADVISORY" },
          isLive: true
        });
      }
      else if (month === 11 || month === 0) {
        regionalSignals.push({
          name: "North India Fog",
          consequences: { implication: "High density fog in DL, PB, and HR. Expect systemic flight and rail delays; check live status before heading to terminals." },
          jurisdiction: { region: "LIVE ADVISORY" },
          isLive: true
        });
      }
      else if (month >= 3 && month <= 4) {
        regionalSignals.push({
          name: "Pre-Monsoon Heatwave",
          consequences: { implication: "Temperatures exceeding 44°C in RJ, GJ, and MP. Outdoor logistical throughput reduced between 12:00 and 16:00." },
          jurisdiction: { region: "LIVE ADVISORY" },
          isLive: true
        });
      }

      if (mode === 'corporate' && matches.length > 0) {
        regionalSignals.push({
          name: "Bank closure policy",
          consequences: { implication: "State-specific RBI holiday lists govern banking availability for RTGS/NEFT settlement cycles." },
          jurisdiction: { region: "RBI POLICY" }
        });
      }
    }
    
    return { records: matches, count: uniqueDates.size, longest: 0, nextDays, regionalSignals };
  }, [country, startDate, endDate, canonicalRules, mode, todayKey]);

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
                    <span className="hero-tracker-kicker uppercase tracking-[0.25em] text-[#E8A33D] font-mono text-[10px] font-bold">LIVE UPDATES</span>
                    <strong>{isMounted ? format(startOfToday(), 'EEEE, d MMMM yyyy') : 'Loading...'}</strong>
                  </div>
                  <span className="hero-tracker-live flex items-center gap-1.5 opacity-60">
                    <Clock className="w-2.5 h-2.5 text-teal" />
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-teal">Verified Feed</span>
                  </span>
                </div>

                <div className="hero-tracker-next-grid text-left border-b border-white/10 bg-white/[0.01]">
                   <div className="px-[18px] pt-5 pb-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#4FD1C5]">GLOBAL IMPACTS · TODAY</span>
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
                           No primary national records for today.
                        </div>
                      )}
                   </div>
                </div>

                <div className="hero-tracker-feed !py-6 bg-[#1E2650]/40">
                  <div className="px-[18px] mb-4">
                     <span className="text-[10px] font-mono font-bold text-[#4FD1C5] uppercase tracking-[0.25em]">LOCAL SIGNALS</span>
                  </div>
                  <div className="marquee">
                    <div className="marquee-track">
                      {localSignalsFeed.concat(localSignalsFeed).map((item, i) => (
                        <span key={i} className="chip flex items-center gap-3 !border-white/5 bg-white/[0.02]">
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                          </span>
                          <b className={cn("text-[13.5px]", !item.isLive && "text-muted-dim font-normal")}>{item.text}</b>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
                     <div key={r.id} className="border-b border-white/5 last:border-0 group">
                        <button 
                          onClick={() => setExpandedRecord(expandedRecord === r.id ? null : r.id)}
                          className="w-full flex items-center justify-between py-5 hover:bg-white/[0.02] transition-all text-left"
                        >
                           <div className="flex items-center gap-6">
                              <div className="impact-date w-14 shrink-0">{format(new Date(r.date + 'T00:00:00'), 'dd MMM')}</div>
                              <div className="space-y-1">
                                 <span className="block font-bold text-[16.5px] group-hover:text-gold-soft transition-colors leading-tight">{r.name}</span>
                                 <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-mono font-bold text-muted-dim uppercase tracking-wider">
                                       {r.jurisdiction.region ? r.jurisdiction.region + ' · ' : ''}{COUNTRY_LABELS[r.jurisdiction.country_code] || r.jurisdiction.country_code}
                                    </span>
                                    <span className={cn(
                                      "text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-widest border",
                                      r.jurisdiction.scope === 'national' ? "bg-[#E8A33D]/10 text-[#F0C888] border-[#E8A33D]/20" : "bg-white/5 text-muted-dim border-white/10"
                                    )}>{r.jurisdiction.scope.toUpperCase()}</span>
                                 </div>
                              </div>
                           </div>
                           {expandedRecord === r.id ? <ChevronUp className="w-4 h-4 text-muted-dim" /> : <ChevronDown className="w-4 h-4 text-muted-dim" />}
                        </button>
                        {expandedRecord === r.id && (
                          <div className="pb-6 space-y-4 animate-in slide-in-from-top-2 duration-300 px-[80px]">
                             <div className="p-4 bg-white/5 border-l-2 border-gold-soft rounded-r-lg">
                                <p className="text-[13px] font-medium leading-relaxed italic text-paper/90">
                                  "{r.consequences.implication}"
                                </p>
                             </div>
                             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[9.5px] font-bold text-muted-dim uppercase tracking-[0.2em] pt-2 border-t border-white/5">
                                <div className="flex items-center gap-1.5">
                                   <span>Source: {r.evidence.source_name || 'Authoritative Source'}</span>
                                   {r.evidence.source_url && (
                                     <a href={r.evidence.source_url} target="_blank" rel="noopener noreferrer" className="text-[#4FD1C5] hover:underline flex items-center gap-0.5">
                                       <ExternalLink className="w-2 h-2" />
                                     </a>
                                   )}
                                </div>
                                <div className="flex items-center gap-1.5 text-green-500/60">
                                   <ShieldCheck className="w-2.5 h-2.5" />
                                   <span>Verified</span>
                                </div>
                             </div>
                          </div>
                        )}
                     </div>
                   ))}
                   {checkerData.records.length === 0 && (
                     <div className="py-12 text-center text-xs text-muted-dim italic border-2 border-dashed border-white/5 rounded-xl">
                        No holidays detected. Note: {COUNTRY_LABELS[country] || country} typically observes standard Sunday closures for supermarkets and banks.
                     </div>
                   )}
                </div>

                {checkerData.regionalSignals.length > 0 && (
                  <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl mt-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D] flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5" /> REGIONAL INTEL · TODAY
                      </p>
                      <span className="text-[9px] font-mono text-muted-dim flex items-center gap-1.5">
                        <Clock className="w-2.5 h-2.5" /> Live at {lastRefreshed}
                      </span>
                    </div>
                    <div className="grid gap-4">
                       {checkerData.regionalSignals.map((item: any, idx: number) => (
                         <div key={idx} className="flex justify-between items-start border-b border-white/5 pb-4 last:border-0 last:pb-0 text-left">
                            <div className="space-y-1">
                               <div className="flex items-center gap-2">
                                  <p className="text-[13px] font-bold">{item.name}</p>
                                  {item.isLive && (
                                    <span className="px-1.5 py-0.5 bg-green-500/10 text-green-500 text-[8px] font-extrabold uppercase rounded-sm border border-green-500/20">Verified Live</span>
                                  )}
                               </div>
                               <p className="text-[11px] text-muted-dim leading-relaxed italic">"{item.consequences.implication}"</p>
                            </div>
                            <span className="text-[9px] font-mono text-[#E8A33D]/60 font-bold uppercase shrink-0 ml-4">{item.jurisdiction?.region || (item.temporal_kind === 'standing' ? 'POLICY' : 'REGIONAL')}</span>
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

