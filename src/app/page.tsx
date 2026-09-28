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

const LENS_LABELS = {
  all: "All intelligence",
  government: "Offices",
  banking: "Banking",
  markets: "Markets",
  embassy: "Embassy",
  trade: "Trade & logistics",
  travel: "Movement"
};

const DOMAIN_GUIDANCE: Record<string, string> = {
  government: "No specific government or public sector advisories recorded for this date.",
  banking: "Standard banking operations expected unless a specific closure is listed.",
  markets: "Market sessions follow regular hours unless a specific session change is flagged.",
  embassy: "Check with the specific mission for consular or visa service hours.",
  trade: "Port and customs operations generally follow national schedules unless noted.",
  travel: "Standard travel conditions apply. Check local transport for holiday schedules."
};

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
  
  // Comparison States
  const [isComparing, setIsComparing] = useState(false);
  const [compA, setCompA] = useState('IN');
  const [compB, setCompB] = useState('JP');

  // Date Intelligence States
  const [diDate, setDiDate] = useState('');
  const [diCountry, setDiCountry] = useState('IN');
  const [diLens, setDiLens] = useState('all');
  const [diResults, setDiResults] = useState<OperationalResult | null>(null);
  const [diLoading, setDiLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const today = startOfToday();
    const tKey = format(today, 'yyyy-MM-dd');
    setTodayKey(tKey);
    setStartDate(tKey);
    setDiDate(tKey);
    
    const end = addDays(today, 30);
    setEndDate(format(end, 'yyyy-MM-dd'));

    getSource().getRecords().then(records => {
      setAllRecords(records);
    });
    getSource().getCanonicalRules().then(rules => {
      setCanonicalRules(rules);
    });
  }, []);

  // Purpose-aware country list
  const filteredCountries = useMemo(() => {
    if (canonicalRules.length === 0) return [];
    
    const purposeMap: Record<string, string> = {
      traveler: 'travel',
      study: 'study',
      corporate: 'business'
    };
    
    const activePurpose = purposeMap[mode];
    const countrySet = new Set<string>();
    
    canonicalRules.forEach(rule => {
      if (rule.purpose_relevance.includes(activePurpose as any)) {
        const cc = rule.jurisdiction?.country_code;
        if (cc) countrySet.add(cc);
      }
    });
    
    return Array.from(countrySet).sort((a, b) => {
      const nameA = COUNTRY_LABELS[a] || a;
      const nameB = COUNTRY_LABELS[b] || b;
      return nameA.localeCompare(nameB);
    });
  }, [canonicalRules, mode]);

  useEffect(() => {
    if (isMounted && filteredCountries.length > 0) {
      if (!filteredCountries.includes(country)) {
        setCountry(filteredCountries[0]);
      }
      if (!filteredCountries.includes(compA)) setCompA(filteredCountries[0]);
      if (!filteredCountries.includes(compB)) setCompB(filteredCountries[Math.min(1, filteredCountries.length - 1)]);
      if (!filteredCountries.includes(diCountry)) setDiCountry(filteredCountries[0]);
    }
  }, [filteredCountries, mode, isMounted]);

  const allAvailableCountries = useMemo(() => {
    const codes = canonicalRules.map(r => r.jurisdiction?.country_code).filter(Boolean);
    return Array.from(new Set(codes as string[])).sort();
  }, [canonicalRules]);

  // --- Logic: Date Intelligence Fetch ---
  useEffect(() => {
    if (!isMounted || !diDate || !diCountry) return;
    
    setDiLoading(true);
    getOperationalImpact({
      destination: diCountry,
      startDate: diDate,
      endDate: diDate,
      purpose: mode === 'traveler' ? 'travel' : mode === 'study' ? 'study' : 'business'
    }).then(res => {
      setDiResults(res);
      setDiLoading(false);
    }).catch(err => {
      console.error('Date Intelligence Fetch Error:', err);
      setDiLoading(false);
    });
  }, [isMounted, diDate, diCountry, mode]);

  const adjustDiDate = (days: number) => {
    const d = new Date(diDate + 'T00:00:00');
    if (!isValid(d)) return;
    d.setDate(d.getDate() + days);
    setDiDate(format(d, 'yyyy-MM-dd'));
  };

  // --- Logic: Tracker & Marquee (Unified Global Dataset) ---
  const forwardIndex = useMemo(() => {
    const idx = new Map();
    if (!isMounted || !todayKey || allRecords.length === 0) return idx;
    
    allRecords.forEach(r => {
      if (!idx.has(r.date)) idx.set(r.date, []);
      idx.get(r.date).push({ 
        code: r.jurisdiction?.country_code, 
        name: r.name,
        category: r.category 
      });
    });
    
    const sortedEntries = Array.from(idx.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    return new Map(sortedEntries);
  }, [isMounted, todayKey, allRecords]);

  const globalNext = useMemo(() => {
    const dates = Array.from(forwardIndex.keys()).sort();
    if (!dates.length) return null;
    
    const candidate = dates.find(d => d >= todayKey);
    if (!candidate) return null;

    const entries = forwardIndex.get(candidate) || [];
    const dateObj = new Date(candidate + 'T00:00:00');
    
    return { 
      dateStr: format(dateObj, 'EEEE, d MMMM yyyy'),
      shortDate: format(dateObj, 'd MMM'),
      primary: entries[0] ? `${COUNTRY_LABELS[entries[0].code] || entries[0].code} — ${entries[0].name}` : "—", 
      others: entries.slice(1).map((e: any) => `${COUNTRY_LABELS[e.code] || e.code} — ${e.name}`),
      count: entries.length, 
      daysAway: differenceInDays(dateObj, new Date(todayKey + 'T00:00:00')),
      category: entries[0]?.category || 'Holiday'
    };
  }, [forwardIndex, todayKey, isMounted]);

  // --- Logic: Checker Evaluation ---
  const checkerData = useMemo(() => {
    if (!startDate || !endDate || canonicalRules.length === 0) return { records: [], regionalRoundup: [], count: 0, longest: 0, nextDays: '—', publicCount: 0, regionalCount: 0 };
    
    const purposeMap: Record<string, 'travel' | 'study' | 'workforce' | 'business' | 'logistics'> = {
      traveler: 'travel',
      study: 'study',
      corporate: 'business'
    };
    
    const activePurpose = purposeMap[mode];
    
    const matches = evaluateQuery(canonicalRules, {
      destination: country,
      startDate,
      endDate,
      purpose: activePurpose
    }, resolveNow());

    const uniqueDatesSet = new Set(matches.map(m => m.date));
    const uniqueRecords = matches.filter((v, i, a) => 
      a.findIndex(t => t.name === v.name && t.date === v.date) === i && v.category !== 'regional'
    );
    
    const regionalRoundup = matches.filter(r => r.category === 'regional');

    let longest = 0, current = 0, prev = null;
    [...uniqueDatesSet].sort().forEach(d => {
      const cur = new Date(d + 'T00:00:00');
      if (prev && differenceInDays(cur, prev) <= 2) current++;
      else current = 1;
      longest = Math.max(longest, current);
      prev = cur;
    });

    const nextEventDate = [...uniqueDatesSet]
      .filter(d => {
        const rec = matches.find(m => m.date === d);
        return rec && rec.temporal_kind !== 'standing';
      })
      .sort()
      .find(d => d >= startDate);
      
    const nextDaysNum = nextEventDate ? differenceInDays(new Date(nextEventDate + 'T00:00:00'), new Date(startDate + 'T00:00:00')) : null;
    const nextDaysLabel = nextDaysNum !== null ? nextDaysNum.toString() : '—';

    const pCount = matches.filter(r => r.category === 'holiday').length;
    const rCount = matches.filter(r => r.category === 'regional').length;

    return { 
      records: uniqueRecords,
      regionalRoundup,
      count: uniqueDatesSet.size, 
      longest, 
      nextDays: nextDaysLabel, 
      nextDaysVal: nextDaysNum, 
      publicCount: pCount, 
      regionalCount: rCount 
    };
  }, [country, startDate, endDate, canonicalRules, mode]);

  const toggleRecord = (id: string) => {
    setExpandedRecord(expandedRecord === id ? null : id);
  };

  return (
    <div className="bg-ink text-paper min-h-screen font-sans">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="hero" id="explore">
          <div className="wrap hero-grid">
            <div className="hero-copy text-left">
              <h1 className="headline md:max-w-none max-w-[320px]">
                Know before you plan. <br className="md:hidden" />
                Not after.
              </h1>
              <p className="sub">A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.</p>

              <aside className="hero-tracker md:order-last" id="world" aria-label="Next holiday tracker" style={{ order: isComparing ? 2 : 3 }}>
                <div className="md:hidden p-5 space-y-3 text-left">
                  <div className="space-y-1">
                    <span className="hero-tracker-kicker">TODAY</span>
                    <strong className="block text-base md:text-lg font-headline leading-tight text-paper">
                      {globalNext?.primary || "Determining next..."}
                    </strong>
                    {globalNext?.others.map((other, i) => (
                      <span key={i} className="block text-[12px] font-medium text-paper/80">
                        + {other}
                      </span>
                    ))}
                  </div>
                  <a className="inline-block text-[12px] font-bold text-gold-soft hover:text-gold transition-colors pt-1" href="#date-intelligence">
                    See what this date means →
                  </a>
                </div>

                <div className="hidden md:block">
                  <div className="hero-tracker-head">
                    <div>
                      <span className="hero-tracker-kicker uppercase tracking-widest text-[#E8A33D] font-mono text-[10px]">Global Pulse</span>
                      <strong id="hero-tracker-date">{globalNext?.dateStr || "Determining next..."}</strong>
                    </div>
                    <span className="hero-tracker-live"><i></i> Intelligence View</span>
                  </div>

                  <div className="hero-tracker-next-grid text-left">
                    <div className="hero-tracker-next-card">
                      <span className="next-card-kicker">World State Today</span>
                      <span className="next-card-name" id="pulse-global-name">{globalNext?.primary || "No upcoming national record"}</span>
                      {globalNext?.others.map((other, i) => (
                        <span key={i} className="next-card-name mt-1">
                          {other}
                        </span>
                      ))}
                      <span className="next-card-date" id="pulse-global-date">
                        {globalNext ? (
                          <>
                            {globalNext.shortDate} · {globalNext.count} {globalNext.count === 1 ? 'country' : 'countries'} · {getDisplayCategory(globalNext.category)} · {globalNext.daysAway === 0 ? 'TODAY' : `${globalNext.daysAway} ${globalNext.daysAway === 1 ? 'day' : 'days'} away`}
                          </>
                        ) : (
                          'Normal operational status'
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="hero-tracker-feed">
                    <div className="marquee" aria-live="polite">
                      <div className="marquee-track" id="pulse-marquee-track">
                        {Array.from(forwardIndex.entries())
                          .filter(([d]) => d >= todayKey)
                          .slice(0, 12)
                          .map(([date, entries]) => (
                          entries.map((e: any, idx: number) => (
                            <span key={`${date}-${idx}`} className="chip">
                              <b>{COUNTRY_LABELS[e.code] || e.code}</b> — {e.name} · {format(new Date(date + 'T00:00:00'), 'd MMM')}
                            </span>
                          ))
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a className="hero-tracker-link hidden md:block text-left" href="#date-intelligence">
                  VIEW TODAY'S FULL INTELLIGENCE <span>→</span>
                </a>
              </aside>
            </div>

            <div className="checker text-left" style={{ order: 1 }}>
              <div className="checker-top">
                <h3 id="checker-title">Trip impact checker</h3>
                <button type="button" className="compare-launch" onClick={() => setIsComparing(!isComparing)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3 4 7l4 4M4 7h13M16 21l4-4-4-4M20 17H7"/>
                  </svg>
                  <span id="compare-launch-label">{isComparing ? 'Single view' : 'Compare countries'}</span>
                </button>
              </div>

              <div className="mode-toggle" role="tablist">
                <button type="button" className={cn(mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button type="button" className={cn(mode === 'study' && "active")} onClick={() => setMode('study')}>Study abroad</button>
                <button type="button" className={cn(mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business travel</button>
              </div>

              {!isComparing ? (
                <div id="single-view">
                  <div className="checker-row" id="single-country-row">
                    <div className="checker-field">
                      <label htmlFor="country-select">Destination / jurisdiction</label>
                      <select id="country-select" value={country} onChange={e => setCountry(e.target.value)}>
                        {filteredCountries.map(code => (
                          <option key={code} value={code}>{COUNTRY_LABELS[code] || code}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="checker-field">
                      <label htmlFor="start-date">From</label>
                      <input 
                        type="date" 
                        id="start-date" 
                        className="w-full text-[13px] md:text-sm px-2 py-2.5" 
                        value={startDate} 
                        onChange={e => setStartDate(e.target.value)} 
                      />
                    </div>
                    <div className="checker-field">
                      <label htmlFor="end-date">To</label>
                      <input 
                        type="date" 
                        id="end-date" 
                        className="w-full text-[13px] md:text-sm px-2 py-2.5" 
                        value={endDate} 
                        onChange={e => setEndDate(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="checker-summary">
                    <div><b className="font-headline">{checkerData.count}</b><span>{checkerData.count === 1 ? 'date' : 'dates'} worth keeping in mind</span></div>
                    <div><b className="font-headline">{checkerData.longest}</b><span>{checkerData.longest === 1 ? 'day' : 'days'} max streak</span></div>
                    <div><b className="font-headline">{checkerData.nextDays}</b><span>{checkerData.nextDaysVal === 1 ? 'day' : 'days'} away</span></div>
                  </div>
                  
                  <div className="checker-list" id="checker-list">
                    {checkerData.records.map((r, i) => {
                      const isExpanded = expandedRecord === r.id;
                      const dateObj = new Date(r.date + 'T00:00:00');
                      const dateStr = format(dateObj, 'EEE dd MMM');
                      
                      return (
                        <div key={r.id} className="border-b border-white/10 last:border-0">
                          <button 
                            onClick={() => toggleRecord(r.id)}
                            className="w-full flex items-center justify-between py-4 hover:bg-white/5 transition-all text-left group"
                          >
                             <div className="flex items-center gap-6">
                                <div className="impact-date font-mono text-[11px] text-muted-dim w-16">{dateStr}</div>
                                <div className="impact-name font-bold text-base group-hover:text-gold-soft transition-colors">{r.name}</div>
                             </div>
                             <div className="flex items-center gap-4">
                                <span className="text-[9px] font-bold text-muted-dim uppercase border border-white/20 px-2 py-0.5 rounded-full">
                                  {r.jurisdiction.scope}
                                </span>
                                {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-dim" /> : <ChevronDown className="w-4 h-4 text-muted-dim" />}
                             </div>
                          </button>
                          
                          {isExpanded && (
                            <div className="pb-6 pt-2 space-y-4 animate-in slide-in-from-top-2 duration-300">
                               <div className="flex flex-wrap gap-2">
                                  <StatusStrip label="OFFICES" status="CLOSED" />
                                  <StatusStrip label="BANKING" status="SUSPENDED" />
                                  <StatusStrip label="MOVEMENT" status="MODIFIED" />
                               </div>
                               <div className="p-4 bg-white/5 border-l-2 border-gold-soft rounded-r-lg">
                                  <p className="text-[13.5px] font-medium leading-relaxed italic text-paper/90">
                                    "{r.consequences.implication}"
                                  </p>
                               </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {checkerData.regionalRoundup.length > 0 && (
                      <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl mt-8">
                         <p className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D] mb-4 flex items-center gap-2">
                           <Activity className="w-3.5 h-3.5" /> JURISDICTIONAL ROUNDUP · {country}
                         </p>
                         <div className="grid gap-4">
                            {checkerData.regionalRoundup.map((item, idx) => (
                              <div key={idx} className="flex justify-between items-start border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                 <div className="space-y-1 text-left">
                                    <p className="text-[13px] font-bold">{item.name}</p>
                                    <p className="text-[11px] text-muted-dim leading-relaxed">{item.consequences.implication}</p>
                                 </div>
                                 <span className="text-[9px] font-mono text-[#E8A33D]/60 font-bold uppercase">{item.jurisdiction.region}</span>
                              </div>
                            ))}
                         </div>
                      </div>
                    )}

                    {checkerData.records.length === 0 && checkerData.regionalRoundup.length === 0 && (
                      <div className="p-12 text-center border-2 border-dashed border-white/5 rounded-xl text-muted italic">
                        No matching intelligence is recorded for this destination and purpose in the selected period.
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div id="compare-view">
                   <div className="checker-row" id="compare-country-row">
                    <div className="checker-field">
                      <label htmlFor="compare-a">Origin</label>
                      <select id="compare-a" value={compA} onChange={e => setCompA(e.target.value)}>
                        {filteredCountries.map(code => (
                          <option key={code} value={code}>{COUNTRY_LABELS[code] || code}</option>
                        ))}
                      </select>
                    </div>
                    <div className="checker-field">
                      <label htmlFor="compare-b">Destination</label>
                      <select id="compare-b" value={compB} onChange={e => setCompB(e.target.value)}>
                        {filteredCountries.map(code => (
                          <option key={code} value={code}>{COUNTRY_LABELS[code] || code}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                   <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="checker-field">
                      <label htmlFor="comp-start-date">From</label>
                      <input type="date" className="w-full text-[13px]" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </div>
                    <div className="checker-field">
                      <label htmlFor="end-date">To</label>
                      <input type="date" className="w-full text-[13px]" value={endDate} onChange={e => setEndDate(e.target.value)} />
                    </div>
                  </div>
                   <p className="text-sm text-muted italic p-8 text-center border border-dashed border-white/5 rounded-xl">
                     Comparison view enabled. Identified mismatches between selected jurisdictions will appear in the intelligence feed.
                   </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* DATE INTELLIGENCE SECTION */}
        <section id="date-intelligence" className="wrap">
          <div className="section-head text-left">
            <div className="kicker">★ Date intelligence</div>
            <h2 className="section-title">What happens on this date?</h2>
            <p>One place for the calendar fact, travel information and institution-specific evidence around a date — with the scope and source kept visible.</p>
          </div>

          <div className="date-intel-shell">
            <div className="date-intel-controls">
              <div className="di-field">
                <label>{diDate === todayKey ? "Date · live today" : "Selected date"}</label>
                <input id="di-date" type="date" value={diDate} onChange={e => setDiDate(e.target.value)} />
              </div>
              <div className="di-field">
                <label>Place</label>
                <select value={diCountry} onChange={e => setDiCountry(e.target.value)}>
                  {allAvailableCountries.map(code => (
                    <option key={code} value={code}>{COUNTRY_LABELS[code] || code}</option>
                  ))}
                </select>
              </div>
              <div className="di-nav">
                <button type="button" aria-label="Return to today" onClick={() => setDiDate(todayKey)}>Today</button>
                <button type="button" onClick={() => adjustDiDate(-1)}>←</button>
                <button type="button" onClick={() => adjustDiDate(1)}>→</button>
              </div>
            </div>

            <div className="di-lenses">
              {Object.entries(LENS_LABELS).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setDiLens(key)}
                  className={cn("di-lens", diLens === key && "active")}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="di-body">
              <div className="di-panel di-context-panel">
                <div className="space-y-1 mb-8 text-left">
                  <p className="text-[10.5px] font-mono text-[#4FD1C5] uppercase tracking-widest">Date context</p>
                  <h2 className="text-3xl font-headline font-medium text-[#F4F1E8] flex items-center gap-3">
                    {isValid(new Date(diDate + 'T00:00:00')) ? format(new Date(diDate + 'T00:00:00'), 'EEEE, d MMMM yyyy') : 'Invalid Date'}
                    {diDate === todayKey && <span className="text-[9px] font-mono px-2 py-0.5 border border-accent/40 text-accent rounded-full uppercase">Today</span>}
                  </h2>
                  <p className="text-[13px] text-[#9AA1C0]">
                    {COUNTRY_LABELS[diCountry] || diCountry} · {isValid(new Date(diDate + 'T00:00:00')) ? format(new Date(diDate + 'T00:00:00'), 'EEEE') : 'Weekday'}
                  </p>
                </div>

                <div className="di-summary-grid text-left">
                  <div className="di-summary-item">
                    <span className="label">Calendar</span>
                    <span className="value">
                      {diLoading ? '...' : (diResults?.records.filter(r => r.category === 'holiday' || r.category === 'regional').length || 0) + ' events'}
                    </span>
                  </div>
                  <div className="di-summary-item">
                    <span className="label">Planning Signals</span>
                    <span className="value">{diLoading ? '...' : (diResults?.records.length || 0) + ' signals'}</span>
                  </div>
                  <div className="di-summary-item">
                    <span className="label">Schedule status</span>
                    <span className="value">{diResults?.records.length ? 'Modified' : 'Regular'}</span>
                  </div>
                </div>
              </div>

              <div className="di-panel di-impact-panel text-left">
                <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-6">What affects this date?</h4>
                <div className="space-y-8">
                  {Object.keys(LENS_LABELS).filter(k => k !== 'all').map(categoryKey => {
                    if (diLens !== 'all' && diLens !== categoryKey) return null;
                    const relevantRecords = diResults?.records.filter(r => {
                      if (categoryKey === 'government') return r.category === 'holiday' || r.category === 'regional';
                      if (categoryKey === 'banking') return r.category === 'banking';
                      if (categoryKey === 'markets') return r.category === 'market';
                      if (categoryKey === 'embassy') return r.category === 'institutional';
                      if (categoryKey === 'trade') return r.category === 'customs';
                      if (categoryKey === 'travel') return r.category === 'travel' || r.category === 'holiday';
                      return false;
                    }) || [];

                    return (
                      <div key={categoryKey} className="di-impact-group">
                        <div className="flex justify-between items-start mb-2">
                           <h5 className="text-[11px] font-mono text-[#6E7495] uppercase tracking-wider">{LENS_LABELS[categoryKey]}</h5>
                           <span className={cn("di-status-badge", relevantRecords.length > 0 ? "active" : "none")}>
                             {relevantRecords.length > 0 ? "PLANNING FACT" : "No impact indicated"}
                           </span>
                        </div>
                        {relevantRecords.length > 0 ? (
                          <div className="space-y-4">
                            {relevantRecords.map(r => (
                              <div key={r.id} className="text-sm font-medium">
                                <p className="text-paper">{r.name}</p>
                                <p className="text-xs text-muted mt-1 leading-relaxed">{r.consequences.implication}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-muted-dim font-medium leading-relaxed">
                            {DOMAIN_GUIDANCE[categoryKey] || "No specific planning consideration recorded."}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="di-foot text-left">
              <b>Reading the page:</b> the calendar tells you what the date is; institutional rows show published institution-level planning considerations. No closure is inferred from a holiday or weekend alone.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
