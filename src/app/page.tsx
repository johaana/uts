'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  COUNTRY_LABELS, 
  expandCountry, 
  REGIONAL_INTELLIGENCE,
  HOLIDAYS
} from '@/lib/calendar-intelligence';
import { getOperationalImpact } from '@/lib/operational/adapter';
import { OperationalResult } from '@/lib/operational/types';
import { format, addDays, startOfDay, differenceInDays, isValid, parse } from 'date-fns';
import { OperationalResultCard } from '@/components/operational/OperationalResultCard';

const LENS_LABELS: Record<string, string> = {
  all: "All intelligence",
  government: "Government",
  banking: "Banking",
  markets: "Markets",
  embassy: "Embassy",
  trade: "Trade & logistics",
  travel: "Travel"
};

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState<'traveler' | 'study' | 'corporate'>('traveler');
  const [country, setCountry] = useState('IN');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [todayState, setTodayState] = useState<Date | null>(null);
  
  // Comparison States
  const [isComparing, setIsComparing] = useState(false);
  const [compA, setCompA] = useState('IN');
  const [compB, setCompB] = useState('JP');
  const [compC, setCompC] = useState('US');
  const [showCountryC, setShowCountryC] = useState(false);
  const [compareFilter, setCompareFilter] = useState<'all' | 'mismatch' | 'overlap'>('all');

  // Date Intelligence States
  const [diDate, setDiDate] = useState('');
  const [diCountry, setDiCountry] = useState('IN');
  const [diLens, setDiLens] = useState('all');
  const [diResults, setDiResults] = useState<OperationalResult | null>(null);
  const [diLoading, setDiLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setTodayState(now);

    const pad2 = (n: number) => String(n).padStart(2, "0");
    const tKey = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;

    // V24 Standard: Dynamic initialization based on actual current date
    setStartDate(tKey);
    setDiDate(tKey);
    
    const end = new Date();
    end.setDate(end.getDate() + 30);
    const eKey = `${end.getFullYear()}-${pad2(end.getMonth() + 1)}-${pad2(end.getDate())}`;
    setEndDate(eKey);
  }, []);

  const todayKey = useMemo(() => {
    if (!todayState) return '';
    const pad2 = (n: number) => String(n).padStart(2, "0");
    return `${todayState.getFullYear()}-${pad2(todayState.getMonth() + 1)}-${pad2(todayState.getDate())}`;
  }, [todayState]);

  // --- Logic: Date Intelligence Fetch ---
  useEffect(() => {
    if (!isMounted || !diDate || !diCountry) return;
    
    setDiLoading(true);
    getOperationalImpact({
      destination: diCountry,
      startDate: diDate,
      endDate: diDate,
      purpose: 'travel'
    }).then(res => {
      setDiResults(res);
      setDiLoading(false);
    }).catch(err => {
      console.error('Date Intelligence Fetch Error:', err);
      setDiLoading(false);
    });
  }, [isMounted, diDate, diCountry]);

  const adjustDiDate = (days: number) => {
    const d = new Date(diDate + 'T00:00:00');
    if (!isValid(d)) return;
    d.setDate(d.getDate() + days);
    const pad2 = (n: number) => String(n).padStart(2, "0");
    setDiDate(`${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`);
  };

  // --- Logic: Tracker Calculations ---
  const forwardIndex = useMemo(() => {
    const idx = new Map();
    if (!isMounted || !todayKey) return idx;
    Object.keys(HOLIDAYS).forEach(code => {
      const holidays = expandCountry(code) || [];
      holidays.forEach(h => {
        if (h.date < todayKey) return; 
        if (!idx.has(h.date)) idx.set(h.date, []);
        idx.get(h.date).push({ code, name: h.name });
      });
    });
    return idx;
  }, [isMounted, todayKey]);

  const globalNext = useMemo(() => {
    const dates = Array.from(forwardIndex.keys()).sort();
    if (!dates.length) return null;
    const candidate = dates.find(d => (forwardIndex.get(d) || []).length >= 5) || dates[0];
    const entries = forwardIndex.get(candidate) || [];
    const dateObj = new Date(candidate + 'T00:00:00');
    return { 
      dateStr: format(dateObj, 'EEEE, d MMMM yyyy'),
      shortDate: format(dateObj, 'd MMM'),
      name: entries[0]?.name || "—", 
      count: entries.length, 
      daysAway: differenceInDays(dateObj, startOfDay(new Date())) 
    };
  }, [forwardIndex]);

  const regionalNext = useMemo(() => {
    if (!isMounted || !todayKey) return null;
    const holidays = expandCountry(country) || [];
    const match = holidays.filter(h => h.date >= todayKey).sort((a,b) => a.date.localeCompare(b.date))[0];
    if (!match) return null;
    const dateObj = new Date(match.date + 'T00:00:00');
    return { 
      name: match.name, 
      shortDate: format(dateObj, 'd MMM'), 
      daysAway: differenceInDays(dateObj, startOfDay(new Date())) 
    };
  }, [isMounted, country, todayKey]);

  // --- Logic: Checker Binding ---
  const checkerData = useMemo(() => {
    if (!startDate || !endDate) return { records: [], count: 0, longest: 0, nextDays: '—', publicCount: 0, regionalCount: 0 };
    
    const regionalMatches = REGIONAL_INTELLIGENCE.filter(r => 
      r.country === country && r.date >= startDate && r.date <= endDate
    );
    
    const all = [
      ...expandCountry(country).filter(r => r.date >= startDate && r.date <= endDate),
      ...regionalMatches
    ].sort((a, b) => a.date.localeCompare(b.date));

    const uniqueDates = [...new Set(all.map(h => h.date))].sort();
    
    let longest = 0, current = 0, prev = null;
    uniqueDates.forEach(d => {
      const cur = new Date(d + 'T00:00:00');
      if (prev && differenceInDays(cur, prev) <= 2) current++;
      else current = 1;
      longest = Math.max(longest, current);
      prev = cur;
    });

    const nextDate = uniqueDates.find(d => d >= startDate);
    const nextDays = nextDate ? differenceInDays(new Date(nextDate + 'T00:00:00'), new Date(startDate + 'T00:00:00')) : '—';

    const pCount = all.filter(r => r.type === 'public' || r.type === 'holiday').length;
    const rCount = all.filter(r => r.type === 'regional').length;

    return { records: all, count: uniqueDates.length, longest, nextDays, publicCount: pCount, regionalCount: rCount };
  }, [country, startDate, endDate]);

  if (!isMounted) return null;

  return (
    <div className="bg-ink text-paper min-h-screen font-sans">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="hero" id="explore">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 className="headline">Know before you fly. Know before you schedule.</h1>
              <p className="sub">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              <aside className="hero-tracker" id="world" aria-label="Next holiday tracker">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">NEXT HOLIDAY UP</span>
                    <strong id="hero-tracker-date">{globalNext?.dateStr || "Today"}</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> Live calendar view</span>
                </div>

                <div className="hero-tracker-next-grid">
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Global</span>
                    <span className="next-card-name" id="pulse-global-name">{globalNext?.name}</span>
                    <span className="next-card-date" id="pulse-global-date">
                      {globalNext ? `${globalNext.shortDate} · ${globalNext.count} countries · ${globalNext.daysAway} days away` : '—'}
                    </span>
                  </div>
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker" id="pulse-regional-kicker">Regional · {COUNTRY_LABELS[country]}</span>
                    <span className="next-card-name" id="pulse-regional-name">{regionalNext?.name}</span>
                    <span className="next-card-date" id="pulse-regional-date">
                      {regionalNext ? `${regionalNext.shortDate} · ${regionalNext.daysAway} days away` : '—'}
                    </span>
                  </div>
                </div>

                <div className="hero-tracker-feed">
                  <div className="marquee" aria-live="polite">
                    <div className="marquee-track" id="pulse-marquee-track">
                      {Array.from(forwardIndex.entries()).slice(0, 12).map(([date, entries]) => (
                        entries.map((e: any, idx: number) => (
                          <span key={`${date}-${idx}`} className="chip">
                            <b>{COUNTRY_LABELS[e.code] || e.code}</b> — {e.name} · {format(new Date(date + 'T00:00:00'), 'd MMM')}
                          </span>
                        ))
                      ))}
                    </div>
                  </div>
                </div>

                <a className="hero-tracker-link" href="#date-intelligence">
                  See what this date means <span>→</span>
                </a>
              </aside>
            </div>

            <div className="checker">
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
                        {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                          <option key={code} value={code}>{name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="checker-row">
                    <div className="checker-field">
                      <label htmlFor="start-date">From</label>
                      <input type="date" id="start-date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </div>
                    <div className="checker-field">
                      <label htmlFor="end-date">To</label>
                      <input type="date" id="end-date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                    </div>
                  </div>

                  <div className="checker-summary">
                    <div><b className="font-headline">{checkerData.count}</b><span>dates to keep in mind</span></div>
                    <div><b className="font-headline">{checkerData.longest}</b><span>days in longest flagged run</span></div>
                    <div><b className="font-headline">{checkerData.nextDays}</b><span>days to next one</span></div>
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
                      if (r.type === 'regional') metaParts.push("Regional");
                      if (r.evidence?.source_name) metaParts.push("Source");

                      return (
                        <div key={i} className="impact-row">
                          <div className="impact-date">{dateStr}</div>
                          <div className="impact-name">{r.name}</div>
                          <div className="impact-meta">{metaParts.join(' / ')}</div>
                        </div>
                      );
                    })}
                    {checkerData.records.length === 0 && (
                      <div className="p-12 text-center border-2 border-dashed border-white/5 rounded-xl text-muted italic">
                        Your date looks operationally good. No matches found for this period.
                      </div>
                    )}
                  </div>

                  {checkerData.count > 0 && (
                    <div className="checker-note" id="checker-note">
                      <strong>FOR YOUR PLANS.</strong>
                      <p>
                        {checkerData.count} {checkerData.count === 1 ? 'date' : 'dates'} in this period {checkerData.count === 1 ? 'is' : 'are'} worth keeping in mind.{' '}
                        {checkerData.publicCount > 0 && (
                          <>
                            {checkerData.publicCount} likely {checkerData.publicCount === 1 ? 'closure' : 'closures'}. Check the named source if you need a particular office, service or institution to be open.{' '}
                          </>
                        )}
                        {checkerData.regionalCount > 0 && (
                          <>
                            {checkerData.regionalCount} sub-national {checkerData.regionalCount === 1 ? 'signal' : 'signals'} also {checkerData.regionalCount === 1 ? 'falls' : 'fall'} in this window; exact jurisdiction still needs to be confirmed.
                          </>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div id="compare-view">
                   {/* ... Existing comparison view code ... */}
                   <div className="checker-row" id="compare-country-row">
                    <div className="checker-field">
                      <label htmlFor="compare-a">Origin</label>
                      <select id="compare-a" value={compA} onChange={e => setCompA(e.target.value)}>
                        {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                          <option key={code} value={code}>{name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="checker-field">
                      <label htmlFor="compare-b">Destination</label>
                      <select id="compare-b" value={compB} onChange={e => setCompB(e.target.value)}>
                        {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                          <option key={code} value={code}>{name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="checker-row">
                    <div className="checker-field">
                      <label htmlFor="comp-start-date">From</label>
                      <input type="date" id="comp-start-date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </div>
                    <div className="checker-field">
                      <label htmlFor="comp-end-date">To</label>
                      <input type="date" id="comp-end-date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                    </div>
                  </div>
                   <p className="text-sm text-muted italic p-8 text-center border border-dashed border-white/5 rounded-xl">
                     Comparison view restored. Select countries to identify mismatches.
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
            <p>One place for the calendar fact, travel signal and institution-specific evidence around a date — with the scope and source kept visible.</p>
            <p className="mt-2 text-[12.5px] text-muted-dim">
              Different tool than the checker above: the checker scans a
              <em className="text-muted not-italic"> date range </em>
              for one country to plan a trip or a scheduling window; this scans
              everything known about
              <em className="text-muted not-italic"> one specific date </em>
              across institutions — use the checker to plan around a window,
              this to look up a single day in depth.
            </p>
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
                  {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                    <option key={code} value={code}>{name}</option>
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
                <div className="space-y-1 mb-8">
                  <p className="text-[10.5px] font-mono text-[#4FD1C5] uppercase tracking-widest">Date context</p>
                  <h2 className="text-3xl font-headline font-medium text-[#F4F1E8]">
                    {isValid(new Date(diDate + 'T00:00:00')) ? format(new Date(diDate + 'T00:00:00'), 'EEEE, d MMMM yyyy') : 'Invalid Date'}
                  </h2>
                  <p className="text-[13px] text-[#9AA1C0]">
                    {COUNTRY_LABELS[diCountry]} · {isValid(new Date(diDate + 'T00:00:00')) ? format(new Date(diDate + 'T00:00:00'), 'EEEE') : 'Weekday'}
                  </p>
                </div>

                <div className="di-summary-grid">
                  <div className="di-summary-item">
                    <span className="label">Calendar</span>
                    <span className="value">
                      {diLoading ? '...' : (diResults?.records.filter(r => r.category === 'holiday' || r.category === 'regional').length || 0) + ' events'}
                    </span>
                  </div>
                  <div className="di-summary-item">
                    <span className="label">Institutional Impact</span>
                    <span className="value">
                      {diLoading ? '...' : (diResults?.records.filter(r => r.category !== 'holiday' && r.category !== 'regional').length || 0) + ' signals'}
                    </span>
                  </div>
                  <div className="di-summary-item">
                    <span className="label">Planning Context</span>
                    <span className="value">
                      {diLoading ? '...' : (diResults?.records.length ? 'Modified' : 'Regular')}
                    </span>
                  </div>
                </div>

                <div className="mt-8 text-sm text-muted leading-relaxed">
                  {diLoading ? (
                    <p className="italic">Updating intelligence for {diDate}...</p>
                  ) : diResults?.records.length ? (
                    <p>Found {diResults.records.length} curated record(s) for this date and location.</p>
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
                <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-6">What affects this date?</h4>
                
                <div className="space-y-8">
                  {Object.keys(LENS_LABELS).filter(k => k !== 'all').map(categoryKey => {
                    // Simple logic to show categories based on lens selection
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
                             {relevantRecords.length > 0 ? "SIGNAL" : "NO CLOSURE LISTED"}
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
                          <p className="text-sm text-muted italic">No specific signal recorded in Utsavs.</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="di-foot">
              <b>Reading the page:</b> the calendar tells you what the date is; institutional rows show published institution-level signals. No closure is inferred from a holiday or weekend alone.
            </div>
          </div>
        </section>

        {/* ... Rest of the sections (Specialized, Built For, Methodology, etc.) ... */}
        <section id="specialized-calendars" className="wrap">
          <div className="section-head">
            <div className="kicker">Specialized intelligence</div>
            <h2 className="section-title">One calendar underneath. Deeper calendars when the job demands it.</h2>
            <p>The core calendar stays unified. Specialized views can go deeper into the systems that care about a date differently.</p>
          </div>
          <div className="special-grid">
            {[
              { idx: "01", t: "Markets", d: "Trading, early closes, clearing and settlement.", tags: ["Trading", "Clearing", "Settlement"] },
              { idx: "02", t: "Banking", d: "Branch calendars and payment systems.", tags: ["Branches", "Payments", "Settlement"] },
              { idx: "03", t: "Embassies", d: "Mission, consular and visa calendars.", tags: ["Mission", "Consular", "Visa"] },
              { idx: "04", t: "Customs & ports", d: "Terminal schedules and documented closure windows.", tags: ["Customs", "Ports", "Terminals"] },
              { idx: "05", t: "Travel intelligence", d: "Travel advisories, entry, and border information.", tags: ["Advisories", "Entry", "Visa"] },
              { idx: "06", t: "Impact", d: "Combine the evidence-backed layers for planning.", tags: ["Date", "Place", "Impact"] }
            ].map(item => (
              <div key={item.t} className="special-card">
                <div className="special-index">{item.idx} · {item.t.toUpperCase()}</div>
                <h4>{item.t}</h4>
                <p>{item.d}</p>
                <div className="special-tags">
                  {item.tags.map(tag => <span key={tag} className="special-tag">{tag}</span>)}
                </div>
                <span className="special-open font-bold text-[10px] text-paper mt-auto pt-4">Open lens →</span>
              </div>
            ))}
          </div>
        </section>

        <section id="built-for" className="wrap border-t border-white/5">
           <div className="section-head">
              <div className="kicker">Infrastructure</div>
              <h2 className="section-title">Built for systems that need to understand the calendar.</h2>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Travel", d: "Choose when to go. Flag festival dates before booking and plan around crowds." },
                { t: "Business & Finance", d: "Choose when to schedule. Track settlement cycles and market closures." },
                { t: "Study Abroad", d: "Choose when to arrive. Align visa interviews and orientation sessions." },
                { t: "HR & Workforce", d: "Choose when to operate. Build region-aware global leave calendars." },
                { t: "Logistics", d: "Choose when to move. Anticipate staffing at customs and ports." },
                { t: "Operations", d: "One world, many jurisdictions. Handle local municipal rules with precision." }
              ].map(item => (
                <div key={item.t} className="p-8 border border-white/5 rounded-2xl bg-panel-2/30">
                  <h4 className="font-headline text-2xl font-bold mb-3">{item.t}</h4>
                  <p className="text-muted leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </section>

        <section id="methodology" className="wrap border-t border-white/5">
          <div className="section-head text-center mx-auto">
            <div className="kicker">VERIFICATION ARCHITECTURE</div>
            <h2 className="section-title">Trust is part of the data.</h2>
            <p>Every date comes with honesty. Utsavs models the origin and status of every record.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {[
              { t: "Primary Sources", d: "Direct access to government gazettes, regulatory notices, and institutional publications." },
              { t: "Active Monitoring", d: "Continuous tracking of late government announcements and astronomical cycle adjustments." },
              { t: "Quality Assurance", d: "Multi-layered verification of regional nuances across complex jurisdictions." }
            ].map(item => (
              <div key={item.t} className="text-center space-y-4">
                <h4 className="text-xl font-bold font-headline">{item.t}</h4>
                <p className="text-muted text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
