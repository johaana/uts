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

const LENS_LABELS = {
  all: "All intelligence",
  government: "Government",
  banking: "Banking",
  markets: "Markets",
  embassy: "Embassy",
  trade: "Trade & logistics",
  travel: "Travel"
};

const DOMAIN_GUIDANCE: Record<string, string> = {
  government: "No specific government or public sector advisories recorded for this date.",
  banking: "Standard banking operations expected unless a specific closure is listed.",
  markets: "Market sessions follow regular hours unless a specific session change is flagged.",
  embassy: "Check with the specific mission for consular or visa service hours.",
  trade: "Port and customs operations generally follow national schedules unless noted.",
  travel: "Standard travel conditions apply. Check local transport for holiday schedules."
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
      idx.get(r.date).push({ code: r.jurisdiction?.country_code, name: r.name });
    });
    
    const sortedEntries = Array.from(idx.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    return new Map(sortedEntries);
  }, [isMounted, todayKey, allRecords]);

  // Mobile Specific Filtered Index (Excludes Regional for Global Pulse)
  const mobileForwardIndex = useMemo(() => {
    const idx = new Map();
    if (!isMounted || !todayKey || allRecords.length === 0) return idx;
    
    allRecords
      .filter(r => r.category !== 'regional' && r.jurisdiction?.scope !== 'regional')
      .forEach(r => {
        if (!idx.has(r.date)) idx.set(r.date, []);
        idx.get(r.date).push({ code: r.jurisdiction?.country_code, name: r.name });
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
    
    const entry = entries[0];
    const countryName = entry ? (COUNTRY_LABELS[entry.code] || entry.code) : "";
    const eventName = entry?.name || "—";

    return { 
      dateStr: format(dateObj, 'EEEE, d MMMM yyyy'),
      shortDate: format(dateObj, 'd MMM'),
      name: entry ? `${countryName} — ${eventName}` : "—", 
      count: entries.length, 
      daysAway: differenceInDays(dateObj, new Date(todayKey + 'T00:00:00')) 
    };
  }, [forwardIndex, todayKey]);

  // Mobile Specific Next Global
  const mobileGlobalNext = useMemo(() => {
    const dates = Array.from(mobileForwardIndex.keys()).sort();
    if (!dates.length) return null;
    
    const candidate = dates.find(d => d >= todayKey);
    if (!candidate) return null;

    const entries = mobileForwardIndex.get(candidate) || [];
    const dateObj = new Date(candidate + 'T00:00:00');
    
    const entry = entries[0];
    const countryName = entry ? (COUNTRY_LABELS[entry.code] || entry.code) : "";
    const eventName = entry?.name || "—";

    return { 
      dateStr: format(dateObj, 'EEEE, d MMMM yyyy'),
      shortDate: format(dateObj, 'd MMM'),
      name: entry ? `${countryName} — ${eventName}` : "—", 
      count: entries.length, 
      daysAway: differenceInDays(dateObj, new Date(todayKey + 'T00:00:00')) 
    };
  }, [mobileForwardIndex, todayKey]);

  const regionalNext = useMemo(() => {
    if (!isMounted || !todayKey || allRecords.length === 0) return null;
    const match = allRecords
      .filter(r => r.jurisdiction?.country_code === country && r.date >= todayKey)
      .sort((a, b) => a.date.localeCompare(b.date))[0];
    
    if (!match) return null;
    const dateObj = new Date(match.date + 'T00:00:00');
    return { 
      name: match.name, 
      shortDate: format(dateObj, 'd MMM'), 
      daysAway: differenceInDays(dateObj, new Date(todayKey + 'T00:00:00')),
      scope: match.jurisdiction?.scope
    };
  }, [isMounted, country, todayKey, allRecords]);

  // --- Logic: Checker Evaluation ---
  const checkerData = useMemo(() => {
    if (!startDate || !endDate || canonicalRules.length === 0) return { records: [], count: 0, longest: 0, nextDays: '—', publicCount: 0, regionalCount: 0 };
    
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
    const uniqueRecords = matches.filter((v, i, a) => a.findIndex(t => t.name === v.name && t.date === v.date) === i);
    
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
      count: uniqueDatesSet.size, 
      longest, 
      nextDays: nextDaysLabel, 
      nextDaysVal: nextDaysNum, 
      publicCount: pCount, 
      regionalCount: rCount 
    };
  }, [country, startDate, endDate, canonicalRules, mode]);

  return (
    <div className="bg-ink text-paper min-h-screen font-sans">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="hero" id="explore">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 className="headline md:max-w-none max-w-[320px]">
                Know before you fly. <br className="md:hidden" />
                Know before you schedule.
              </h1>
              <p className="sub hidden md:block">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              <aside className="hero-tracker md:order-last" id="world" aria-label="Next holiday tracker" style={{ order: isComparing ? 2 : 3 }}>
                {/* Mobile Specific Tracker View (Compact Pulse) */}
                <div className="md:hidden p-5 space-y-3 text-left">
                  <div className="space-y-1">
                    <span className="hero-tracker-kicker">NEXT UP</span>
                    <strong className="block text-base md:text-lg font-headline leading-tight text-paper">
                      {mobileGlobalNext?.name || "Determining next..."}
                    </strong>
                    <span className="text-[12px] text-muted-foreground block font-medium">
                      {mobileGlobalNext ? `${mobileGlobalNext.shortDate} · ${mobileGlobalNext.count} ${mobileGlobalNext.count === 1 ? 'country' : 'countries'} · ${mobileGlobalNext.daysAway} ${mobileGlobalNext.daysAway === 1 ? 'day' : 'days'} away` : '—'}
                    </span>
                  </div>
                  <a className="inline-block text-[12px] font-bold text-gold-soft hover:text-gold transition-colors pt-1" href="#date-intelligence">
                    See what this date means →
                  </a>
                </div>

                {/* Desktop Tracker View (Frozen) */}
                <div className="hidden md:block">
                  <div className="hero-tracker-head">
                    <div>
                      <span className="hero-tracker-kicker">NEXT HOLIDAY UP</span>
                      <strong id="hero-tracker-date">{globalNext?.dateStr || "Determining next..."}</strong>
                    </div>
                    <span className="hero-tracker-live"><i></i> Live calendar view</span>
                  </div>

                  <div className="hero-tracker-next-grid">
                    <div className="hero-tracker-next-card">
                      <span className="next-card-kicker">Global</span>
                      <span className="next-card-name" id="pulse-global-name">{globalNext?.name || "No upcoming national record"}</span>
                      <span className="next-card-date" id="pulse-global-date">
                        {globalNext ? `${globalNext.shortDate} · ${globalNext.count} ${globalNext.count === 1 ? 'country' : 'countries'} · ${globalNext.daysAway} ${globalNext.daysAway === 1 ? 'day' : 'days'} away` : '—'}
                      </span>
                    </div>
                    <div className="hero-tracker-next-card">
                      <span className="next-card-kicker" id="pulse-regional-kicker">
                        {regionalNext?.scope ? (regionalNext.scope.charAt(0).toUpperCase() + regionalNext.scope.slice(1)) : 'Regional'} · {COUNTRY_LABELS[country] || country}
                      </span>
                      <span className="next-card-name" id="pulse-regional-name">{regionalNext?.name || "Clear window"}</span>
                      <span className="next-card-date" id="pulse-regional-date">
                        {regionalNext ? `${regionalNext.shortDate} · ${regionalNext.daysAway} ${regionalNext.daysAway === 1 ? 'day' : 'days'} away` : 'Normal operational status'}
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

                <a className="hero-tracker-link hidden md:block" href="#date-intelligence">
                  See what this date means <span>→</span>
                </a>
              </aside>
            </div>

            <div className="checker" style={{ order: 1 }}>
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
                  
                  {/* Date Selection Grid - Side by Side on Mobile */}
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
                    <div><b className="font-headline">{checkerData.count}</b><span>{checkerData.count === 1 ? 'date' : 'dates'} to keep in mind</span></div>
                    <div><b className="font-headline">{checkerData.longest}</b><span>{checkerData.longest === 1 ? 'day' : 'days'} in longest flagged run</span></div>
                    <div><b className="font-headline">{checkerData.nextDays}</b><span>{checkerData.nextDaysVal === 1 ? 'day' : 'days'} to next one</span></div>
                  </div>
                  <div className="checker-brief" id="checker-brief">
                    <strong>IN SHORT:</strong> {checkerData.count} {checkerData.count === 1 ? 'date' : 'dates'} in your selected period {checkerData.count === 1 ? 'is' : 'are'} worth keeping in mind. The details below show what is happening on each date and any related local or institutional information.
                  </div>
                  <div className="checker-list" id="checker-list">
                    {checkerData.records.map((r, i) => {
                      const dateObj = new Date(r.date + 'T00:00:00');
                      const dateStr = format(dateObj, 'EEE dd MMM');
                      const metaParts = [];
                      if (r.confidence) metaParts.push(r.confidence.charAt(0).toUpperCase() + r.confidence.slice(1));
                      if (r.temporal_kind === 'standing') metaParts.push("ONGOING");
                      else if (r.jurisdiction?.scope === 'regional') metaParts.push("Regional");
                      if (r.evidence?.source_name) metaParts.push("Source");

                      return (
                        <div key={i} className="impact-row flex-col !items-start gap-1 py-4">
                          <div className="flex w-full justify-between items-baseline">
                             <div className="flex gap-4 items-baseline">
                                <div className="impact-date">{r.temporal_kind === 'standing' ? 'Ongoing' : dateStr}</div>
                                <div className="impact-name">{r.name}</div>
                             </div>
                             <div className="impact-meta">{metaParts.join(' / ')}</div>
                          </div>
                          <div className="text-[13px] text-muted-foreground mt-1 leading-relaxed pl-[91px]">
                            {r.consequences.implication}
                          </div>
                        </div>
                      );
                    })}
                    {checkerData.records.length === 0 && (
                      <div className="p-12 text-center border-2 border-dashed border-white/5 rounded-xl text-muted italic">
                        No matching intelligence is recorded for this destination and purpose in the selected period.
                      </div>
                    )}
                  </div>

                  {checkerData.count > 0 && (
                    <div className="checker-note" id="checker-note">
                      <strong>FOR YOUR PLANS.</strong>
                      <p>
                        {checkerData.count} {checkerData.count === 1 ? 'date may affect' : 'dates may affect'} your plans during this period.{' '}
                        {checkerData.publicCount > 0 && (
                          <>
                            {checkerData.publicCount === 1 ? 'One is a public holiday' : `${checkerData.publicCount} are public holidays`}, which may affect government offices, banks or other services.{' '}
                          </>
                        )}
                        {checkerData.regionalCount > 0 && (
                          <>
                            {checkerData.regionalCount === 1 ? 'A regional holiday' : `${checkerData.regionalCount} regional holidays`} also {checkerData.regionalCount === 1 ? 'falls' : 'fall'} within your selected dates.{' '}
                          </>
                        )}
                        Check the relevant organization if your plans depend on a particular office or service being open.
                      </p>
                    </div>
                  )}
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
                  
                  {/* Compare Dates Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="checker-field">
                      <label htmlFor="comp-start-date">From</label>
                      <input 
                        type="date" 
                        id="comp-start-date" 
                        className="w-full text-[13px] md:text-sm px-2 py-2.5" 
                        value={startDate} 
                        onChange={e => setStartDate(e.target.value)} 
                      />
                    </div>
                    <div className="checker-field">
                      <label htmlFor="comp-end-date">To</label>
                      <input 
                        type="date" 
                        id="comp-end-date" 
                        className="w-full text-[13px] md:text-sm px-2 py-2.5" 
                        value={endDate} 
                        onChange={e => setEndDate(e.target.value)} 
                      />
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
          <div className="section-head">
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
              {/* LEFT: Date Context */}
              <div className="di-panel di-context-panel">
                <div className="space-y-1 mb-8 text-left">
                  <p className="text-[10.5px] font-mono text-[#4FD1C5] uppercase tracking-widest">Date context</p>
                  <h2 className="text-3xl font-serif font-medium text-[#F4F1E8] flex items-center gap-3">
                    {isValid(new Date(diDate + 'T00:00:00')) ? format(new Date(diDate + 'T00:00:00'), 'EEEE, d MMMM yyyy') : 'Invalid Date'}
                    {diDate === todayKey && <span className="text-[9px] font-mono px-2 py-0.5 border border-accent/40 text-accent rounded-full uppercase">Today</span>}
                  </h2>
                  <p className="text-[13px] text-[#9AA1C0]">
                    {COUNTRY_LABELS[diCountry] || diCountry} · {isValid(new Date(diDate + 'T00:00:00')) ? format(new Date(diDate + 'T00:00:00'), 'EEEE') : 'Weekday'}
                  </p>
                </div>

                <div className="di-summary-grid">
                  <div className="di-summary-item">
                    <span className="label">Calendar</span>
                    <span className="value">
                      {diLoading ? '...' : (diResults?.records.filter(r => r.category === 'holiday' || r.category === 'regional').length === 0 ? "0 events" : diResults?.records.filter(r => r.category === 'holiday' || r.category === 'regional').length + ' events')}
                    </span>
                  </div>
                  <div className="di-summary-item">
                    <span className="label">Institutional Impact</span>
                    <span className="value">
                      {diLoading ? '...' : (diResults?.records.filter(r => r.category !== 'holiday' && r.category !== 'regional').length === 0 ? "0 considerations" : diResults?.records.filter(r => r.category !== 'holiday' && r.category !== 'regional').length + ' considerations')}
                    </span>
                  </div>
                  <div className="di-summary-item">
                    <span className="label">Planning Context</span>
                    <span className="value">
                      {diResults?.records.length ? 'Modified' : 'Regular'}
                    </span>
                  </div>
                </div>

                <div className="mt-8 text-sm text-muted leading-relaxed text-left">
                  {diLoading ? (
                    <p className="italic">Updating intelligence for {diDate}...</p>
                  ) : diResults?.records.length ? (
                    <p>Found {diResults.records.length} curated record(s) for this date and location. Review domain-specific impacts on the right.</p>
                  ) : (
                    <div className="space-y-4">
                      <p className="font-bold text-paper">Clear window</p>
                      <p>A relatively normal day around the available calendar. No curated observance or institutional closure is currently recorded for this date. That can make it a useful window for scheduling meetings, travel, or operations, although local weekends and one-off events outside this calendar may still apply.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT: What Affects This Date? */}
              <div className="di-panel di-impact-panel">
                <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-6 text-left">What affects this date?</h4>
                
                <div className="space-y-8">
                  {Object.keys(LENS_LABELS).filter(k => k !== 'all').map(categoryKey => {
                    if (diLens !== 'all' && diLens !== categoryKey) return null;

                    const relevantRecords = diResults?.records.filter(r => {
                      if (categoryKey === 'government') return r.category === 'holiday' || r.category === 'regional' || r.category === 'business_travel';
                      if (categoryKey === 'banking') return r.category === 'banking';
                      if (categoryKey === 'markets') return r.category === 'market';
                      if (categoryKey === 'embassy') return r.category === 'student_risk' || r.category === 'institutional';
                      if (categoryKey === 'trade') return r.category === 'customs';
                      if (categoryKey === 'travel') return r.category === 'travel' || r.category === 'holiday';
                      return false;
                    }) || [];

                    return (
                      <div key={categoryKey} className="di-impact-group text-left">
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
                            {DOMAIN_GUIDANCE[categoryKey] || "No specific planning consideration recorded in Utsavs."}
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
