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
import { format, addDays, startOfDay, differenceInDays, isValid, startOfToday } from 'date-fns';
import { ChevronDown, ChevronUp, Activity, Info, Globe } from 'lucide-react';

const getDisplayCategory = (cat: string) => {
  const map: Record<string, string> = {
    public: "National Holiday",
    religious: "Religious Holiday",
    cultural: "Cultural Event",
    harvest: "Harvest Festival",
    holiday: "National Holiday"
  };
  return map[cat.toLowerCase()] || cat.charAt(0).toUpperCase() + cat.slice(1).replace('_', ' ');
};

const StatusStrip = ({ label, status }: { label: string, status: string }) => {
  const colorClass = status === 'CLOSED' || status === 'SUSPENDED' 
    ? "text-red-400" 
    : status === 'MODIFIED' 
    ? "text-yellow-400" 
    : "text-green-400";

  return (
    <div className="flex items-center gap-1.5 px-2 py-0.5 border border-white/10 bg-white/5 rounded-sm">
      <span className="text-[8px] font-bold uppercase tracking-widest text-muted-dim">{label}:</span>
      <span className={cn("text-[8px] font-extrabold uppercase tracking-widest", colorClass)}>
        {status}
      </span>
    </div>
  );
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
  
  // Comparison States
  const [isComparing, setIsComparing] = useState(false);
  const [compA, setCompA] = useState('IN');
  const [compB, setCompB] = useState('JP');

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
    const events = forwardIndex.get(todayKey) || [];
    return events;
  }, [forwardIndex, todayKey]);

  const checkerData = useMemo(() => {
    if (!startDate || !endDate || canonicalRules.length === 0) return { records: [], count: 0, longest: 0, nextDays: '—' };
    const purposeMap: Record<string, any> = { traveler: 'travel', study: 'study', corporate: 'business' };
    const matches = evaluateQuery(canonicalRules, { destination: country, startDate, endDate, purpose: purposeMap[mode] }, resolveNow());
    const uniqueDates = new Set(matches.map(m => m.date));
    const nextDate = [...uniqueDates].sort().find(d => d >= startDate);
    const nextDays = nextDate ? differenceInDays(new Date(nextDate + 'T00:00:00'), new Date(startDate + 'T00:00:00')) : '—';
    return { records: matches, count: uniqueDates.size, longest: 0, nextDays };
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
                                 <span className="block text-[8.5px] font-bold text-muted-dim uppercase tracking-widest">{item.jurisdiction.scope} · {getDisplayCategory(item.category)}</span>
                              </div>
                              {expandedGlobal === item.id ? <ChevronUp className="w-4 h-4 text-muted-dim" /> : <ChevronDown className="w-4 h-4 text-muted-dim" />}
                           </button>
                           {expandedGlobal === item.id && (
                             <div className="px-[18px] pb-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                                <div className="flex flex-wrap gap-1.5">
                                   <StatusStrip label="OFFICES" status="CLOSED" />
                                   <StatusStrip label="BANKING" status="SUSPENDED" />
                                   <StatusStrip label="MOVEMENT" status="MODIFIED" />
                                </div>
                                <p className="text-[12.5px] text-[#9AA1C0] leading-snug font-medium border-l border-[#4FD1C5]/30 pl-3">
                                   "{item.consequences.implication}"
                                </p>
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

                <div className="hero-tracker-feed">
                  <div className="marquee">
                    <div className="marquee-track">
                      {Array.from(forwardIndex.entries())
                        .filter(([d]) => d >= todayKey)
                        .slice(0, 12)
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
                              <span className="text-[9px] font-bold text-muted-dim uppercase border border-white/20 px-2 py-0.5 rounded-full">{r.jurisdiction.scope}</span>
                              {expandedRecord === r.id ? <ChevronUp className="w-4 h-4 text-muted-dim" /> : <ChevronDown className="w-4 h-4 text-muted-dim" />}
                           </div>
                        </button>
                        {expandedRecord === r.id && (
                          <div className="pb-6 space-y-4 animate-in slide-in-from-top-2 duration-300">
                             <div className="flex flex-wrap gap-2">
                                <StatusStrip label="OFFICES" status="CLOSED" />
                                <StatusStrip label="BANKING" status="SUSPENDED" />
                                <StatusStrip label="MOVEMENT" status="MODIFIED" />
                             </div>
                             <div className="p-4 bg-white/5 border-l-2 border-gold-soft rounded-r-lg">
                                <p className="text-[13px] font-medium leading-relaxed italic text-paper/90">
                                  "{r.consequences.implication}"
                                </p>
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
