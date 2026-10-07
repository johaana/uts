
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  COUNTRY_LABELS, 
} from '@/lib/calendar-intelligence';
import { getSource } from '@/lib/operational/source';
import { evaluateQuery } from '@/lib/operational/engine';
import { DateIntelligenceRecord, CanonicalRule } from '@/lib/operational/types';
import { format, addDays, differenceInDays, isAfter, isSameDay, parseISO, startOfToday } from 'date-fns';
import { ChevronDown, ChevronUp, ShieldCheck, Clock, ExternalLink, Repeat, Zap, Globe, Layout, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [allRecords, setAllRecords] = useState<DateIntelligenceRecord[]>([]);
  const [canonicalRules, setCanonicalRules] = useState<CanonicalRule[]>([]);
  const [mode, setMode] = useState<'traveler' | 'study' | 'corporate'>('traveler');
  const [isComparing, setIsComparing] = useState(false);
  const [country, setCountry] = useState('IN');
  const [compA, setCompA] = useState('IN');
  const [compB, setCompB] = useState('JP');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [todayKey, setTodayKey] = useState('');
  const [expandedRecord, setExpandedRecord] = useState<string | null>(null);
  const [expandedGlobal, setExpandedGlobal] = useState<string | null>(null);
  const [showNextAdvice, setShowNextAdvice] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    const now = startOfToday();
    const tKey = format(now, 'yyyy-MM-dd');
    setTodayKey(tKey);
    setStartDate(tKey);
    const end = addDays(now, 60); 
    setEndDate(format(end, 'yyyy-MM-dd'));

    const engine = getSource();
    engine.getRecords().then(records => {
      setAllRecords(records);
    });
    engine.getCanonicalRules().then(rules => {
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

  const todayEvents = useMemo(() => {
    if (!isMounted || !todayKey) return [];
    return (forwardIndex.get(todayKey) || []);
  }, [forwardIndex, todayKey, isMounted]);

  const nextEvent = useMemo(() => {
    if (!isMounted || !todayKey || allRecords.length === 0) return null;
    const anchorDate = new Date(todayKey + 'T00:00:00');
    return allRecords.find(r => {
      const d = new Date(r.date + 'T00:00:00');
      return isAfter(d, anchorDate) && !isSameDay(d, anchorDate);
    });
  }, [isMounted, todayKey, allRecords]);

  const localSignalsFeed = useMemo(() => {
    if (!isMounted || !todayKey || allRecords.length === 0) return [];
    const anchorDate = new Date(todayKey + 'T00:00:00');
    
    const upcomingItems = allRecords.filter(r => {
      const d = new Date(r.date + 'T00:00:00');
      return isAfter(d, anchorDate) && !isSameDay(d, anchorDate);
    }).sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 10);

    if (upcomingItems.length > 0) {
        return upcomingItems.map((e: any) => ({
            text: `${COUNTRY_LABELS[e.jurisdiction.country_code] || e.jurisdiction.country_code} — ${e.jurisdiction.region ? e.jurisdiction.region + ' — ' : ''}${e.name} · ${format(new Date(e.date + 'T00:00:00'), 'd MMM')}`,
            isLive: false
        }));
    }

    return [{
      text: "Standard Global business day · High-trust window for international meetings.",
      isLive: true
    }];
  }, [isMounted, todayKey, allRecords]);

  const checkerData = useMemo(() => {
    if (!startDate || !endDate || canonicalRules.length === 0) return { records: [], count: 0, nextDays: '—', longestRun: 0, nextImplication: '' };
    
    const targetCountries = isComparing ? [compA, compB] : [country];
    const purposeMap: Record<string, any> = { traveler: 'travel', study: 'study', corporate: 'business' };
    
    let matches: DateIntelligenceRecord[] = [];
    targetCountries.forEach(c => {
      const countryMatches = evaluateQuery(canonicalRules, { destination: c, startDate, endDate, purpose: purposeMap[mode] }, new Date(todayKey + 'T00:00:00'));
      matches = [...matches, ...countryMatches];
    });

    const uniqueMatches = Array.from(new Map(matches.map(m => [m.id, m])).values())
      .sort((a, b) => a.date.localeCompare(b.date));

    const uniqueDates = Array.from(new Set(uniqueMatches.map(m => m.date))).sort();
    const count = uniqueDates.length;
    
    const nextDate = uniqueDates.find(d => d >= startDate);
    const nextDays = nextDate ? differenceInDays(new Date(nextDate + 'T00:00:00'), new Date(startDate + 'T00:00:00')) : '—';
    
    const nextImplication = uniqueMatches.find(r => r.date === nextDate)?.consequences.implication || '';

    let maxOffSequence = 0;
    const dateSet = new Set(uniqueDates);
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    
    let currentSeq = 0;
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const dStr = format(d, 'yyyy-MM-dd');
      const isHoliday = dateSet.has(dStr);
      const isWeekend = d.getDay() === 0 || d.getDay() === 6; 
      
      if (isHoliday || isWeekend) {
        currentSeq++;
      } else {
        if (currentSeq >= 3) {
          if (currentSeq > maxOffSequence) maxOffSequence = currentSeq;
        }
        currentSeq = 0;
      }
    }
    if (currentSeq >= 3 && currentSeq > maxOffSequence) maxOffSequence = currentSeq;

    return { records: uniqueMatches, count, nextDays, longestRun: maxOffSequence, nextImplication };
  }, [country, compA, compB, startDate, endDate, canonicalRules, mode, todayKey, isComparing]);

  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
    }
  };

  return (
    <div className="bg-ink text-paper min-h-screen font-sans">
      <Header />
      <main>
        <section className="hero !py-4 md:!py-8" id="explore">
          <div className="wrap hero-grid !gap-4 md:!gap-12">
            <div className="hero-copy text-left">
              <h1 className="headline md:max-w-none max-w-[320px] !mb-4">
                Know before you fly. <br className="md:hidden" />
                Know before you schedule.
              </h1>
              <p className="sub !mb-4">A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.</p>

              <aside className="hero-tracker md:order-last !my-0" id="world">
                <div className="hero-tracker-head py-3 md:py-2.5">
                  <div>
                    <span className="hero-tracker-kicker uppercase tracking-[0.25em] text-[#4FD1C5] font-mono text-[10px] font-bold">LIVE UPDATES</span>
                    <strong className="text-xl md:text-[15px] font-headline">
                      {isMounted && todayKey ? format(new Date(todayKey + 'T00:00:00'), 'EEEE, d MMMM yyyy') : 'Loading...'}
                    </strong>
                  </div>
                  <span className="hero-tracker-live flex items-center gap-1.5 opacity-60">
                    <Clock className="w-2.5 h-2.5 text-teal" />
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-teal">Verified Feed</span>
                  </span>
                </div>

                <div className="text-left bg-white/[0.01]">
                   <div className="px-5 py-4 md:py-3 space-y-6 text-left border-b border-white/5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#4FD1C5]">GLOBAL IMPACTS</span>
                   </div>
                   <div className="divide-y divide-white/5">
                      {todayEvents.length > 0 ? todayEvents.map((item) => (
                        <div key={item.id} className="relative">
                           <button 
                             onClick={() => setExpandedGlobal(expandedGlobal === item.id ? null : item.id)}
                             className="w-full flex items-center justify-between px-5 py-3 md:py-2.5 hover:bg-white/5 transition-all text-left group"
                           >
                              <div className="space-y-0.5 flex-1 min-w-0 pr-4">
                                 <span className="block text-[14px] font-bold group-hover:text-[#4FD1C5] transition-colors">{item.name}</span>
                                 <span className="block text-[9px] font-bold text-muted-dim uppercase tracking-widest font-mono">
                                    {COUNTRY_LABELS[item.jurisdiction.country_code]} · {item.jurisdiction.scope.toUpperCase()}
                                 </span>
                              </div>
                              {expandedGlobal === item.id ? <ChevronUp className="w-4 h-4 text-muted-dim shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-dim shrink-0" />}
                           </button>
                           {expandedGlobal === item.id && (
                             <div className="px-5 pb-5 space-y-3 animate-in slide-in-from-top-2 duration-300">
                                <p className="text-[12.5px] text-[#9AA1C0] leading-snug font-medium border-l border-[#4FD1C5]/30 pl-3 italic">
                                   "{item.consequences.implication}"
                                </p>
                                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                                  <span className="text-[9px] font-bold text-muted-dim uppercase tracking-widest">Source: {item.evidence.source_name || 'Authoritative'}</span>
                                  <div className="flex items-center gap-1 text-green-500/60">
                                    <ShieldCheck className="w-2.5 h-2.5" />
                                    <span className="text-[9px] font-bold uppercase">Verified</span>
                                  </div>
                                </div>
                             </div>
                           )}
                        </div>
                      )) : nextEvent ? (
                        <div className="px-5 py-5 md:py-4 text-left">
                           <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[#E8A33D]">NEXT UP</span>
                                <div className="h-px flex-1 bg-white/5"></div>
                              </div>
                              <div className="space-y-1">
                                 <button 
                                   onClick={() => setShowNextAdvice(!showNextAdvice)}
                                   className="w-full flex items-center justify-between text-left group"
                                 >
                                   <div className="space-y-0.5 flex-1 min-w-0 pr-4">
                                      <span className="block text-[17px] font-bold text-paper/90 leading-tight group-hover:text-[#4FD1C5] transition-colors">{nextEvent.name}</span>
                                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                         <span className="text-[10px] font-mono font-bold text-[#4FD1C5] uppercase tracking-widest whitespace-nowrap">
                                            {format(new Date(nextEvent.date + 'T00:00:00'), 'd MMMM yyyy')}
                                         </span>
                                         <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-widest bg-white/5 text-muted-dim border border-white/10 whitespace-nowrap">
                                            {COUNTRY_LABELS[nextEvent.jurisdiction.country_code]} · {nextEvent.jurisdiction.scope.toUpperCase()}
                                         </span>
                                      </div>
                                   </div>
                                   {showNextAdvice ? <ChevronUp className="w-4 h-4 text-muted-dim shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-dim shrink-0" />}
                                 </button>
                                 
                                 {showNextAdvice && (
                                   <div className="pt-2.5 animate-in slide-in-from-top-2 duration-300">
                                      <p className="text-[12px] text-[#9AA1C0] leading-relaxed font-medium italic border-l border-[#E8A33D]/30 pl-3">
                                         "{nextEvent.consequences.implication}"
                                      </p>
                                   </div>
                                 )}
                              </div>
                           </div>
                        </div>
                      ) : (
                        <div className="px-5 py-6 text-left">
                           <p className="text-[13px] font-medium text-paper/90 leading-relaxed max-w-lg italic font-display">
                              Standard Global business day. High-trust window for international meetings and cross-border office operations.
                           </p>
                        </div>
                      )}
                   </div>
                </div>

                <div className="hero-tracker-feed !py-4 bg-[#1E2650]/40">
                  <div className="px-5 mb-3 flex items-center gap-2">
                     <span className="text-[9px] font-mono font-bold text-[#4FD1C5] uppercase tracking-[0.25em]">LOCAL SIGNALS</span>
                  </div>
                  <div className="marquee">
                    <div className="marquee-track">
                      {localSignalsFeed.concat(localSignalsFeed).map((item, i) => (
                        <span key={i} className="chip flex items-center gap-3 !border-white/5 bg-white/[0.02]">
                          <span className="relative flex h-1.5 w-1.5 shrink-0">
                            {item.isLive && (
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            )}
                            <span className={cn(
                              "relative inline-flex rounded-full h-1.5 w-1.5",
                              item.isLive ? "bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.6)]" : "bg-muted-dim/40"
                            )}></span>
                          </span>
                          <b className={cn("text-[13px]", !item.isLive && "text-muted-dim font-normal")}>{item.text}</b>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="checker text-left order-1 !p-5 md:!p-7">
              <div className="checker-top">
                <h3 className="font-serif">Trip impact checker</h3>
                <button 
                  onClick={() => setIsComparing(!isComparing)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal hover:text-white transition-colors"
                >
                  <Repeat className="w-3.5 h-3.5" />
                  <span>Add Origin</span>
                </button>
              </div>

              <div className="mode-toggle !mb-3">
                {(['traveler', 'study', 'corporate'] as const).map(m => (
                  <button 
                    key={m} 
                    type="button" 
                    className={cn(mode === m && "active")} 
                    onClick={() => setMode(m)}
                  >
                    {m === 'traveler' ? 'Travel' : m === 'study' ? 'Study abroad' : 'Business travel'}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {isComparing ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="checker-field">
                      <label>Origin</label>
                      <select value={compA} onChange={e => setCompA(e.target.value)}>
                        {filteredCountries.map(code => (
                          <option key={code} value={code}>{COUNTRY_LABELS[code] || code}</option>
                        ))}
                      </select>
                    </div>
                    <div className="checker-field">
                      <label>Destination</label>
                      <select value={compB} onChange={e => setCompB(e.target.value)}>
                        {filteredCountries.map(code => (
                          <option key={code} value={code}>{COUNTRY_LABELS[code] || code}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : (
                  <div className="checker-row !mb-0" id="single-country-row">
                    <div className="checker-field">
                      <label>Destination / Jurisdiction</label>
                      <select value={country} onChange={e => setCountry(e.target.value)}>
                        {filteredCountries.map(code => (
                          <option key={code} value={code}>{COUNTRY_LABELS[code] || code}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 date-row">
                  <div className="checker-field">
                    <label>From</label>
                    <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                  </div>
                  <div className="checker-field">
                    <label>To</label>
                    <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                  </div>
                </div>

                <div className="pt-2 space-y-1 border-b border-white/10 pb-2 text-center">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#4FD1C5]">FOR YOUR JOURNEY</div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-32">
                    <div className="flex flex-col items-center">
                      <b className="font-serif text-[32px] text-gold-soft">{checkerData.count}</b>
                      <span className="text-[11.5px] text-muted-dim block font-bold uppercase tracking-widest mt-0.5">days affected</span>
                    </div>
                    {checkerData.longestRun >= 3 && (
                      <div className="flex flex-col items-center">
                        <b className="font-serif text-[32px] text-gold-soft">{checkerData.longestRun}</b>
                        <span className="text-[11.5px] text-muted-dim block font-bold uppercase tracking-widest mt-0.5">day long weekend</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="checker-list max-h-[380px] overflow-y-auto custom-scrollbar pr-1 text-left">
                   {checkerData.records.map((r) => (
                     <div key={r.id} className="border-b border-white/5 last:border-0 group">
                        <button 
                          onClick={() => setExpandedRecord(expandedRecord === r.id ? null : r.id)}
                          className="w-full flex items-center justify-between py-6 md:py-4 hover:bg-white/[0.02] transition-all text-left"
                        >
                           <div className="flex items-center gap-4 md:gap-5 flex-1 min-w-0">
                              <div className="impact-date w-16 md:w-20 shrink-0 font-mono text-[10px] text-muted-dim uppercase text-left leading-tight">
                                {format(new Date(r.date + 'T00:00:00'), 'EEE, dd MMM')}
                              </div>
                              <div className="space-y-0.5 flex-1 min-w-0 pr-4">
                                 <span className="block font-bold text-[14px] group-hover:text-gold-soft transition-colors leading-snug break-words">{r.name}</span>
                                 <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <span className="text-[9px] font-mono font-bold text-muted-dim uppercase tracking-widest">
                                       {r.jurisdiction.region ? r.jurisdiction.region + ' · ' : ''}{COUNTRY_LABELS[r.jurisdiction.country_code] || r.jurisdiction.country_code}
                                    </span>
                                    <span className={cn(
                                      "text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-widest border",
                                      r.jurisdiction.scope === 'national' ? "bg-[#E8A33D]/10 text-[#F0C888] border-[#E8A33D]/20" : "bg-white/5 text-muted-dim border-white/10"
                                    )}>{r.jurisdiction.scope.toUpperCase()}</span>
                                 </div>
                              </div>
                           </div>
                           {expandedRecord === r.id ? <ChevronUp className="w-4 h-4 text-muted-dim shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-dim shrink-0" />}
                        </button>
                        {expandedRecord === r.id && (
                          <div className="pb-8 space-y-5 animate-in slide-in-from-top-2 duration-300 px-5 md:px-20">
                             <div className="p-4 bg-white/5 border-l-2 border-gold-soft rounded-r-lg">
                                <p className="text-[13px] font-medium leading-relaxed italic text-paper/90">
                                  "{r.consequences.implication}"
                                </p>
                             </div>
                             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[9.5px] font-bold text-muted-dim uppercase tracking-[0.2em] pt-3 border-t border-white/5">
                                <div className="flex items-center gap-1.5">
                                   <span>Source: {r.evidence.source_name || 'Authoritative Source'}</span>
                                   {r.evidence.source_url && (
                                     <a href={r.evidence.source_url} target="_blank" rel="noopener noreferrer" className="text-[#4FD1C5] hover:underline flex items-center gap-0.5">
                                       <ExternalLink className="w-2.5 h-2.5" />
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORLD TODAY */}
        <section className="py-24" id="world-today">
          <div className="wrap">
            <div className="max-w-3xl mb-16 space-y-4 text-left">
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8A33D]">WORLD TODAY</div>
               <h2 className="text-3xl md:text-5xl font-headline font-bold">Dates are not just dates.</h2>
               <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                 Around the world, a date can mean a public holiday, a regional observance, an institutional closure, 
                 a working-day difference or something entirely specific to your trip.
               </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               <Card className="bg-primary/5 border-primary/20 p-8 md:p-10 flex flex-col justify-between items-start border-white/10 text-left">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">TODAY</span>
                    <h3 className="text-2xl font-headline font-bold text-white">Understanding today's calendar</h3>
                    <p className="text-[#9AA1C0] text-sm font-medium">See the dates and places that may matter today across our global index.</p>
                  </div>
                  <Link href="/date-intelligence" className="mt-8">
                     <Button variant="outline" className="font-bold border-white/10 text-white hover:bg-white/5">Explore today <ArrowRight className="ml-2 w-4 h-4" /></Button>
                  </Link>
               </Card>
               <Card className="p-8 md:p-10 flex flex-col justify-between items-start bg-[#171D3A] border-white/10 text-left">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">COMING UP</span>
                    <h3 className="text-2xl font-headline font-bold text-white" id="next-event-name">
                      {nextEvent?.name || "Diwali 2026"}
                    </h3>
                    <p className="text-[#9AA1C0] text-sm font-medium" id="next-event-meta">
                      {nextEvent 
                        ? `${format(new Date(nextEvent.date + 'T00:00:00'), 'd MMMM yyyy')} · ${COUNTRY_LABELS[nextEvent.jurisdiction.country_code]} · ${nextEvent.jurisdiction.scope.toUpperCase()}` 
                        : "8 November 2026 · India · National"}
                    </p>
                  </div>
                  <Link href={nextEvent?.link || "/festivals/diwali"} className="mt-8">
                     <Button variant="ghost" className="font-bold text-[#E8A33D] hover:text-white p-0 hover:bg-transparent">Check the date <ArrowRight className="ml-2 w-4 h-4" /></Button>
                  </Link>
               </Card>
            </div>
          </div>
        </section>

        {/* DRIVE ANCILLARY REVENUE - PARTNER SECTION */}
        <section className="py-24 border-t border-white/5 bg-[#171D3A]" id="partners">
          <div className="wrap">
             <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
                <div className="space-y-8 text-left max-w-3xl">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8A33D]/10 border border-[#E8A33D]/20 rounded-full">
                      <Zap className="w-3 h-3 text-[#E8A33D] fill-current" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">Partner Opportunity</span>
                   </div>
                   <h2 className="text-4xl md:text-7xl font-headline font-medium tracking-tight text-white leading-[0.95]">
                     Drive ancillary revenue. <br/>
                     <span className="text-[#9AA1C0]">One widget at a time.</span>
                   </h2>
                   <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                      Equip your travel agency with the Utsavs Distribution Engine. Give your clients verified date intelligence and instant insurance protection directly on your website. 
                   </p>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                      <div className="space-y-2">
                        <Layout className="w-6 h-6 text-[#4FD1C5]" />
                        <h4 className="font-bold text-sm uppercase tracking-widest">No-Code Widgets</h4>
                        <p className="text-xs text-[#6E7495]">Embed high-converting tools in under 5 minutes.</p>
                      </div>
                      <div className="space-y-2">
                        <Shield className="w-6 h-6 text-[#E8A33D]" />
                        <h4 className="font-bold text-sm uppercase tracking-widest">Verified Engine</h4>
                        <p className="text-xs text-[#6E7495]">Every transaction is backed by our master Asego code.</p>
                      </div>
                      <div className="space-y-2">
                        <Repeat className="w-6 h-6 text-purple-400" />
                        <h4 className="font-bold text-sm uppercase tracking-widest">Revenue Split</h4>
                        <p className="text-xs text-[#6E7495]">Track every sale and commission in your private portal.</p>
                      </div>
                   </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href="/partners">
                     <Button className="bg-[#E8A33D] text-[#0F1428] font-bold text-xs h-14 px-12 rounded-full hover:bg-white transition-all uppercase tracking-[0.2em] shadow-xl">
                        View Partner Benefits
                     </Button>
                  </Link>
                  <Button variant="ghost" onClick={openChat} className="text-[#9AA1C0] hover:text-white uppercase font-bold text-[10px] tracking-[0.2em]">
                    Inquire About Agreement →
                  </Button>
                </div>
             </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5" id="built-for">
          <div className="wrap text-left">
            <div className="mb-10 space-y-3">
               <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#E8A33D]">Global Coverage · Extensive jurisdictional rules</span>
               <h2 className="font-headline text-3xl md:text-5xl font-medium text-left">Built for technical planning.</h2>
               <p className="text-[#9AA1C0] text-lg max-w-2xl text-left">Reconciling deterministic rules across multiple jurisdictions for high-stakes operational assessment.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { icon: Repeat, t: "Travelers", d: "Understand the cultural intensity and operational state of your destination. Flag festivals that drive high-density migration or unexpected closures.", img: placeholderImages.travelerHero },
                 { icon: ShieldCheck, t: "Students", d: "Put institutional calendars and arrival timing around your dates. Align visa interviews and orientation with verified host-country intelligence.", img: placeholderImages.studentHero },
                 { icon: Clock, t: "Corporate & HR", d: "Manage global workforce calendars with precision. Identify local regional holidays that affect payroll, meetings, and office availability.", img: placeholderImages.corporateHero }
               ].map(uc => (
                 <div key={uc.t} className="bg-[#171D3A] border border-white/10 rounded-2xl overflow-hidden group hover:border-gold-soft transition-colors flex flex-col">
                    <div className="relative h-40 w-full grayscale-[40%] group-hover:grayscale-0 transition-all duration-700">
                       <Image src={uc.img.url} alt={uc.t} fill className="object-cover" data-ai-hint={uc.img.hint} />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#171D3A] to-transparent" />
                    </div>
                    <div className="p-8 pt-0 space-y-4 flex-1 flex flex-col items-start">
                       <uc.icon className="w-8 h-8 text-[#E8A33D]" />
                       <h4 className="font-headline text-2xl font-bold text-left">{uc.t}</h4>
                       <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium text-left flex-1">{uc.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/5 bg-[#171D3A]" id="intelligence-section">
          <div className="wrap">
             <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
                <div className="space-y-6 text-left">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Verified Date Intelligence</span>
                   </div>
                   <h2 className="font-headline text-3xl md:text-5xl font-medium text-left">Source-backed intelligence. Human-verified.</h2>
                   <p className="text-[#9AA1C0] text-lg max-w-2xl font-medium text-left">
                      See where the information comes from and, where applicable, whether it has been reviewed or confirmed. Utsavs keeps the underlying source and verification status visible so you can inspect the evidence behind a result.
                   </p>
                </div>
                <Link href="/date-intelligence">
                   <button className="bg-white text-ink font-bold text-xs h-12 px-10 rounded-full hover:bg-gold transition-colors uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                      Open Explorer
                   </button>
                </Link>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

