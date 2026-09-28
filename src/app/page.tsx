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
import { format, addDays, startOfToday, differenceInDays, parseISO, isAfter, isSameDay } from 'date-fns';
import { ChevronDown, ChevronUp, ShieldCheck, Clock, ExternalLink, Plane, School, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
  
  useEffect(() => {
    setIsMounted(true);
    // Anchor dashboard to a specific "Prototype Date" for the Sept 2026 experience
    const now = new Date();
    const isActually2026 = now.getFullYear() === 2026;
    
    // If we're not in 2026, anchor to Sept 8, 2026 to ensure the dashboard works as intended
    const prototypeToday = isActually2026 ? startOfToday() : new Date('2026-09-08T00:00:00');
    
    const tKey = format(prototypeToday, 'yyyy-MM-dd');
    setTodayKey(tKey);
    setStartDate(tKey);
    
    const end = addDays(prototypeToday, 90); 
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
    if (!isMounted || !todayKey) return [];
    return (forwardIndex.get(todayKey) || []).filter((r: any) => r.jurisdiction.scope === 'national');
  }, [forwardIndex, todayKey, isMounted]);

  const nextMajorImpactMessage = useMemo(() => {
    if (!isMounted || !todayKey || allRecords.length === 0) return null;
    
    // Look ahead from today's anchored prototype date
    const anchorDate = new Date(todayKey + 'T00:00:00');
    
    const futureHolidays = allRecords
      .filter(r => {
        const d = new Date(r.date + 'T00:00:00');
        return isAfter(d, anchorDate) && r.jurisdiction.scope === 'national';
      })
      .sort((a, b) => a.date.localeCompare(b.date));

    if (futureHolidays.length > 0) {
      const next = futureHolidays[0];
      const diff = differenceInDays(new Date(next.date + 'T00:00:00'), anchorDate);
      return `Next major international impact: ${next.name} (${format(new Date(next.date + 'T00:00:00'), 'd MMM')}) in ${diff} days.`;
    }
    
    return null;
  }, [isMounted, todayKey, allRecords]);

  const localSignalsFeed = useMemo(() => {
    if (!isMounted || !todayKey || allRecords.length === 0) return [];
    
    const anchorDate = new Date(todayKey + 'T00:00:00');

    // 1. Check for actual regional signals TODAY
    const todayItems = (forwardIndex.get(todayKey) || []).filter((r: any) => r.jurisdiction.scope === 'regional');
    
    if (todayItems.length > 0) {
      return todayItems.map((e: any) => ({
        text: `${COUNTRY_LABELS[e.jurisdiction.country_code] || e.jurisdiction.country_code} — ${e.jurisdiction.region || ''} — ${e.name} · Today`,
        isLive: true
      }));
    }

    // 2. Look ahead at the next 10 regional events in the future relative to the anchored date
    const upcomingItems = allRecords.filter(r => {
      const d = new Date(r.date + 'T00:00:00');
      return isAfter(d, anchorDate) && r.jurisdiction.scope === 'regional';
    }).sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 10);

    if (upcomingItems.length > 0) {
        return upcomingItems.map((e: any) => ({
            text: `${COUNTRY_LABELS[e.jurisdiction.country_code] || e.jurisdiction.country_code} — ${e.jurisdiction.region || ''} — ${e.name} · ${format(new Date(e.date + 'T00:00:00'), 'd MMM')}`,
            isLive: false
        }));
    }

    // 3. Fallback
    return [{
      text: "Standard Global business day · High-trust window for international meetings.",
      isLive: true
    }];
  }, [isMounted, forwardIndex, todayKey, allRecords]);

  const checkerData = useMemo(() => {
    if (!startDate || !endDate || canonicalRules.length === 0) return { records: [], count: 0, longest: 0, nextDays: '—' };
    const purposeMap: Record<string, any> = { traveler: 'travel', study: 'study', corporate: 'business' };
    const matches = evaluateQuery(canonicalRules, { destination: country, startDate, endDate, purpose: purposeMap[mode] }, new Date(todayKey + 'T00:00:00'));
    const uniqueDates = new Set(matches.map(m => m.date));
    const nextDate = [...uniqueDates].sort().find(d => d >= startDate);
    const nextDays = nextDate ? differenceInDays(new Date(nextDate + 'T00:00:00'), new Date(startDate + 'T00:00:00')) : '—';
    
    return { records: matches, count: uniqueDates.size, longest: 0, nextDays };
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
                    <strong className="text-[15px] font-headline">
                      {isMounted ? format(new Date(todayKey + 'T00:00:00'), 'EEEE, d MMMM yyyy') : 'Loading...'}
                    </strong>
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
                                 <span className="block text-[14px] font-bold group-hover:text-[#4FD1C5] transition-colors">{item.name}</span>
                                 <span className="block text-[9px] font-bold text-muted-dim uppercase tracking-widest font-mono">
                                    {COUNTRY_LABELS[item.jurisdiction.country_code]} · {item.jurisdiction.scope.toUpperCase()}
                                 </span>
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
                        <div className="px-[18px] py-6 text-left space-y-2">
                           <p className="text-[13.5px] font-medium text-paper/80 leading-relaxed pr-4 italic">
                              Standard Global business day. High-trust window for international meetings and cross-border office operations.
                           </p>
                           {nextMajorImpactMessage && (
                             <p className="text-[11px] font-bold text-[#E8A33D] uppercase tracking-widest">
                                {nextMajorImpactMessage}
                             </p>
                           )}
                        </div>
                      )}
                   </div>
                </div>

                <div className="hero-tracker-feed !py-6 bg-[#1E2650]/40">
                  <div className="px-[20px] mb-4 flex items-center gap-2">
                     <span className="text-[10px] font-mono font-bold text-[#4FD1C5] uppercase tracking-[0.25em]">LOCAL SIGNALS</span>
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
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-green-500/80">Live</span>
                </div>
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

                <div className="checker-summary pt-6 pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
                  <div className="flex gap-10">
                    <div><b className="font-headline text-[32px] text-gold-soft">{checkerData.count}</b><span className="text-[11.5px] text-muted-dim block font-bold uppercase tracking-widest mt-1">flags in period</span></div>
                    <div><b className="font-headline text-[32px] text-gold-soft">{checkerData.nextDays}</b><span className="text-[11.5px] text-muted-dim block font-bold uppercase tracking-widest mt-1">days to next</span></div>
                  </div>
                </div>

                <div className="checker-list max-h-[440px] overflow-y-auto custom-scrollbar pr-1">
                   {checkerData.records.map((r) => (
                     <div key={r.id} className="border-b border-white/5 last:border-0 group">
                        <button 
                          onClick={() => setExpandedRecord(expandedRecord === r.id ? null : r.id)}
                          className="w-full flex items-center justify-between py-5 hover:bg-white/[0.02] transition-all text-left"
                        >
                           <div className="flex items-center gap-6">
                              <div className="impact-date w-14 shrink-0 font-mono text-[11px] text-muted-dim">{format(new Date(r.date + 'T00:00:00'), 'dd MMM')}</div>
                              <div className="space-y-0.5">
                                 <span className="block font-bold text-[13.5px] group-hover:text-gold-soft transition-colors leading-tight">{r.name}</span>
                                 <div className="flex items-center gap-3">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATED USE CASES */}
        <section className="py-24 border-t border-white/5" id="built-for">
          <div className="wrap">
            <div className="mb-12 space-y-3 text-left">
               <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#E8A33D]">Global Coverage · Everywhere we track</span>
               <h2 className="font-headline text-3xl md:text-5xl font-medium">Built for technical planning.</h2>
               <p className="text-[#9AA1C0] text-lg max-w-2xl">Reconciling deterministic rules across multiple jurisdictions for high-stakes operational assessment.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { icon: Plane, t: "Travelers", d: "Understand the cultural intensity and operational state of your destination. Flag festivals that drive high-density migration or unexpected closures." },
                 { icon: School, t: "Students", d: "Put institutional calendars and arrival timing around your dates. Align visa interviews and orientation with verified host-country intelligence." },
                 { icon: Briefcase, t: "Corporate & HR", d: "Manage global workforce calendars with precision. Identify local regional holidays that affect payroll, meetings, and office availability." }
               ].map(uc => (
                 <div key={uc.t} className="p-8 bg-[#171D3A] border border-white/10 rounded-2xl space-y-4 group hover:border-gold-soft transition-colors text-left">
                    <uc.icon className="w-8 h-8 text-[#E8A33D]" />
                    <h4 className="font-headline text-2xl font-bold">{uc.t}</h4>
                    <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">{uc.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* PARTNERSHIPS */}
        <section className="py-24 border-t border-white/5 bg-white/[0.01]">
          <div className="wrap text-left">
            <div className="max-w-3xl space-y-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full">
                 <span className="text-[9px] font-bold uppercase tracking-widest text-[#4FD1C5]">B2B Opportunity</span>
               </div>
               <h3 className="font-headline text-3xl md:text-4xl font-medium">Drive ancillary revenue.</h3>
               <p className="text-[#9AA1C0] leading-relaxed text-lg font-medium">
                  Work with Utsavs to integrate travel protection and verified calendar intelligence into your booking engines. 
                  Provide high-trust safety layers that enhance customer loyalty and operational precision.
               </p>
               <div className="pt-2">
                 <a href="https://wa.me/919860997711" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#E8A33D] hover:underline uppercase tracking-[0.2em] group">
                    Inquire about partnership <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
