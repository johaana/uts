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
import { format, addDays, startOfDay, differenceInDays } from 'date-fns';
import { OperationalResultCard } from '@/components/operational/OperationalResultCard';

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

  useEffect(() => {
    setIsMounted(true);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    setTodayState(now);

    // Default range for 2026 prototype data
    setStartDate("2026-09-04");
    setDiDate("2026-09-04");
    setEndDate("2026-10-04");
  }, []);

  const todayKey = useMemo(() => {
    if (!todayState) return '';
    const pad2 = (n: number) => String(n).padStart(2, "0");
    return `${todayState.getFullYear()}-${pad2(todayState.getMonth() + 1)}-${pad2(todayState.getDate())}`;
  }, [todayState]);

  // --- Logic: Tracker Calculations (V24 Binding) ---
  const forwardIndex = useMemo(() => {
    const idx = new Map();
    if (!isMounted) return idx;
    Object.keys(HOLIDAYS).forEach(code => {
      const holidays = expandCountry(code) || [];
      holidays.forEach(h => {
        if (h.date < "2026-09-04") return; // Prototoype baseline
        if (!idx.has(h.date)) idx.set(h.date, []);
        idx.get(h.date).push({ code, name: h.name });
      });
    });
    return idx;
  }, [isMounted]);

  const globalNext = useMemo(() => {
    const dates = Array.from(forwardIndex.keys()).sort();
    if (!dates.length) return null;
    // V24 Logic: Global breadth threshold (e.g. 5 countries)
    const candidate = dates.find(d => (forwardIndex.get(d) || []).length >= 5) || dates[0];
    const entries = forwardIndex.get(candidate) || [];
    const dateObj = new Date(candidate + 'T00:00:00');
    return { 
      dateStr: format(dateObj, 'EEEE, d MMMM yyyy'),
      shortDate: format(dateObj, 'd MMM'),
      name: entries[0]?.name || "—", 
      count: entries.length, 
      daysAway: differenceInDays(dateObj, new Date("2026-09-04T00:00:00")) 
    };
  }, [forwardIndex]);

  const regionalNext = useMemo(() => {
    if (!isMounted) return null;
    const holidays = expandCountry(country) || [];
    const match = holidays.filter(h => h.date >= "2026-09-04").sort((a,b) => a.date.localeCompare(b.date))[0];
    if (!match) return null;
    const dateObj = new Date(match.date + 'T00:00:00');
    return { 
      name: match.name, 
      shortDate: format(dateObj, 'd MMM'), 
      daysAway: differenceInDays(dateObj, new Date("2026-09-04T00:00:00")) 
    };
  }, [isMounted, country]);

  // --- Logic: Checker Binding ---
  const checkerData = useMemo(() => {
    if (!startDate || !endDate) return { records: [], count: 0, longest: 0, nextDays: '—' };
    const all = expandCountry(country).filter(r => r.date >= startDate && r.date <= endDate);
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

    return { records: all, count: uniqueDates.length, longest, nextDays };
  }, [country, startDate, endDate]);

  if (!isMounted) return null;

  return (
    <div className="bg-ink text-paper min-h-screen font-sans">
      <Header />
      <main>
        {/* HERO SECTION - V24 Structure */}
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
                      {Array.from(forwardIndex.entries()).slice(0, 8).map(([date, entries]) => (
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
              ) : (
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
                  {showCountryC && (
                    <div className="checker-field">
                      <label htmlFor="compare-c">Country C</label>
                      <select id="compare-c" value={compC} onChange={e => setCompC(e.target.value)}>
                        {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                          <option key={code} value={code}>{name}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {!showCountryC && (
                    <button type="button" className="add-country-btn p-2 text-teal text-[10px] font-bold uppercase tracking-widest" onClick={() => setShowCountryC(true)}>+ Add a third country</button>
                  )}
                </div>
              )}

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

              <div className="range-chips">
                {[7, 30, 90].map(days => (
                  <button key={days} className="range-chip" onClick={() => {
                    const start = new Date(startDate + "T00:00:00");
                    const end = addDays(start, days);
                    setEndDate(format(end, 'yyyy-MM-dd'));
                  }}>Next {days} days</button>
                ))}
              </div>

              {!isComparing ? (
                <div id="single-view">
                  <div className="checker-summary">
                    <div><b id="stat-count" className="font-headline">{checkerData.count}</b><span>dates to keep in mind</span></div>
                    <div><b id="stat-longest" className="font-headline">{checkerData.longest}</b><span>days in longest flagged run</span></div>
                    <div><b id="stat-next" className="font-headline">{checkerData.nextDays}</b><span>days to next one</span></div>
                  </div>
                  <div className="checker-brief">
                    <p><strong>IN SHORT:</strong> {checkerData.count} dates in your selected period are worth keeping in mind. Standard operational rules apply otherwise.</p>
                  </div>
                  <div className="checker-list">
                    {checkerData.records.map((r, i) => (
                      <div key={i} className="impact-row flex flex-col gap-2 p-6 bg-panel-2 rounded-xl mb-3 border border-white/5">
                        <div className="flex justify-between w-full border-b border-white/5 pb-2">
                           <span className="font-headline text-lg font-semibold">{r.name}</span>
                           <span className="font-mono text-xs text-muted">{format(new Date(r.date + 'T00:00:00'), 'd MMM')}</span>
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          Listed national holiday; institutional and market-level treatment depends on the specific jurisdiction and sector rules.
                        </p>
                        <div className="flex gap-2 mt-2">
                           <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded">High</span>
                           <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded">Source</span>
                        </div>
                      </div>
                    ))}
                    {checkerData.records.length === 0 && (
                      <div className="p-12 text-center border-2 border-dashed border-white/5 rounded-xl text-muted italic">
                        No flagged holidays in this range.
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div id="compare-view">
                   {/* V24 Comparison View Placeholder */}
                   <p className="text-sm text-muted italic p-8 text-center border border-dashed border-white/5 rounded-xl">
                     Restoring V24 high-density comparison matrix...
                   </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* DATE INTELLIGENCE SECTION - V24 depth */}
        <section id="date-intelligence" className="wrap">
          <div className="section-head">
            <div className="kicker">★ Date intelligence</div>
            <h2 className="section-title">What happens on this date?</h2>
            <p>One place for the calendar fact, travel signal and institution-specific evidence around a date — with the scope and source kept visible.</p>
            <p className="mt-2 text-[12.5px] text-muted-dim">
              Different tool than the checker above: the checker scans a date range for one country; this scans everything known about one specific date across institutions.
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
                <button type="button">←</button>
                <button type="button">→</button>
              </div>
            </div>

            <div className="di-lenses">
              {['all', 'government', 'banking', 'markets', 'embassy', 'trade', 'travel'].map(l => (
                <button key={l} className={cn("di-lens", diLens === l && "active")} onClick={() => setDiLens(l)}>
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </button>
              ))}
            </div>

            <div className="di-body">
              <div className="di-panel">
                <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-4">Calendar Context</h4>
                <p className="text-sm text-muted italic">Sourcing regional and religious dated records for {format(new Date(diDate + 'T00:00:00'), 'd MMM yyyy')}...</p>
              </div>
              <div className="di-panel">
                <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-4">Authoritative Signals</h4>
                <p className="text-sm text-muted italic">Analyzing institutional evidence for {COUNTRY_LABELS[diCountry]}...</p>
              </div>
            </div>
            <div className="di-foot">
              <b>Reading the page:</b> the calendar tells you what the date is; institutional rows show published institution-level signals. No closure is inferred from a holiday or weekend alone.
            </div>
          </div>
        </section>

        {/* SPECIALIZED INTELLIGENCE - V24 6-card grid */}
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
          <div className="mt-12 text-center text-muted-dim text-[11px] font-mono border-t border-white/5 pt-8">
            /v1/markets · /v1/banking · /v1/embassies · /v1/trade · /v1/travel · /v1/impact
          </div>
        </section>

        {/* BUILT FOR - Restored content depth */}
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

        {/* TRAVEL INSURANCE - Approved persistent version */}
        <section id="insurance" className="wrap border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl space-y-4">
              <div className="kicker">TRAVEL PROTECTION</div>
              <h2 className="section-title">Plan for what you can predict. Protect against what you can't.</h2>
              <p className="text-muted">Utsavs provides date intelligence context. For covered unexpected events, we work with partners on context-aware protection.</p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="navcta h-14 px-10 font-bold">Get in touch with us</button>
              <span className="text-[10px] text-muted-dim text-center uppercase tracking-widest">B2B · B2B2C · Partnerships</span>
            </div>
          </div>
          <div className="mt-12 p-6 bg-white/5 rounded-xl border border-dashed border-white/10 text-[11px] text-muted-dim leading-relaxed">
            Insurance is the subject matter of solicitation. Coverage, eligibility, benefits, exclusions and terms are determined by the applicable policy and insurer. Please review the policy wording and applicable requirements before purchase.
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
