'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { 
  COUNTRY_LABELS, 
  HOLIDAYS, 
  expandCountry, 
  isWeekendFor, 
  TYPE_LABELS, 
  STORY_SLUGS,
  OPERATIONAL_RECORDS,
  POLICY_RECORDS
} from '@/lib/calendar-intelligence';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [page, setPage] = useState('home');
  const [mode, setMode] = useState('traveler');
  const [country, setCountry] = useState('IN');
  const [startDate, setStartDate] = useState('2026-09-15');
  const [endDate, setEndDate] = useState('2026-10-15');
  const [compareA, setCompareA] = useState('IN');
  const [compareB, setCompareB] = useState('JP');
  const [compareC, setCompareC] = useState('US');
  const [compareOpen, setCompareOpen] = useState(false);
  const [thirdCountryOn, setThirdCountryOn] = useState(false);
  const [compareFilter, setCompareFilter] = useState('all');

  useEffect(() => {
    setIsMounted(true);
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'built', 'api', 'insurance'].includes(hash)) {
      setPage(hash);
    }
  }, []);

  const today = useMemo(() => new Date('2026-09-04T00:00:00'), []);
  const todayKey = '2026-09-04';

  const forwardIndex = useMemo(() => {
    const idx = new Map();
    Object.keys(HOLIDAYS).forEach(code => {
      expandCountry(code).forEach(h => {
        if (h.date < todayKey) return;
        if (!idx.has(h.date)) idx.set(h.date, []);
        idx.get(h.date).push({ code, name: h.name, type: h.type });
      });
    });
    return idx;
  }, [todayKey]);

  const globalNext = useMemo(() => {
    const dates = Array.from(forwardIndex.keys()).sort();
    if (!dates.length) return null;
    const WINDOW_DAYS = 45, BREADTH_MIN = 5;
    const windowEnd = new Date(today); windowEnd.setDate(windowEnd.getDate() + WINDOW_DAYS);
    const windowEndKey = windowEnd.toISOString().split('T')[0];
    const inWindow = dates.filter(d => d <= windowEndKey);
    let candidate = inWindow.find(d => forwardIndex.get(d).length >= BREADTH_MIN);
    if (!candidate) {
      const pool = inWindow.length ? inWindow : dates;
      candidate = pool.reduce((best, d) => forwardIndex.get(d).length > forwardIndex.get(best).length ? d : best, pool[0]);
    }
    const entries = forwardIndex.get(candidate);
    const nameCounts: Record<string, number> = {};
    entries.forEach((e: any) => { nameCounts[e.name] = (nameCounts[e.name] || 0) + 1; });
    const topName = Object.keys(nameCounts).sort((a, b) => nameCounts[b] - nameCounts[a])[0];
    const diff = Math.round((new Date(candidate + 'T00:00:00').getTime() - today.getTime()) / 86400000);
    return { date: candidate, name: topName, countryCount: new Set(entries.map((e: any) => e.code)).size, daysAway: diff };
  }, [forwardIndex, today]);

  const regionalNext = useMemo(() => {
    const code = compareOpen ? compareA : country;
    const match = expandCountry(code)
      .filter(h => h.date >= todayKey)
      .sort((a, b) => a.date.localeCompare(b.date))[0];
    if (!match) return null;
    const diff = Math.round((new Date(match.date + 'T00:00:00').getTime() - today.getTime()) / 86400000);
    return { name: match.name, date: match.date, daysAway: diff };
  }, [today, todayKey, compareOpen, compareA, country]);

  const marqueeItems = useMemo(() => {
    const weekEnd = new Date(today); weekEnd.setDate(weekEnd.getDate() + 7);
    const weekEndKey = weekEnd.toISOString().split('T')[0];
    const weekDates = Array.from(forwardIndex.keys()).filter(d => d <= weekEndKey).sort();
    const items: string[] = [];
    weekDates.forEach(date => {
      const byCountry = new Map();
      forwardIndex.get(date).forEach((e: any) => { 
        if (!byCountry.has(e.code)) byCountry.set(e.code, []); 
        byCountry.get(e.code).push(e.name); 
      });
      Array.from(byCountry.entries()).forEach(([code, names]) => {
        const dLabel = new Date(date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
        items.push(`<span class="chip"><b>${COUNTRY_LABELS[code] || code}</b> — ${names.join(", ")} · ${dLabel}</span>`);
      });
    });
    return items.length > 0 ? items.concat(items) : [];
  }, [forwardIndex, today]);

  const checkerData = useMemo(() => {
    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T00:00:00");
    const all = expandCountry(country)
      .map(h => ({...h, d: new Date(h.date + "T00:00:00")}))
      .filter(h => h.d >= start && h.d <= end);
    
    const dated = all.map(h => h.date);
    const uniqueDates = [...new Set(dated)].sort();
    const standing = 0; // Policy records logic would go here
    
    let longest = 0, currentRun = 0, prev = null;
    uniqueDates.forEach(d => {
      const cur = new Date(d + 'T00:00:00');
      if (prev && (cur.getTime() - prev.getTime()) / 86400000 <= 2) {
        currentRun++;
      } else {
        currentRun = 1;
      }
      longest = Math.max(longest, currentRun);
      prev = cur;
    });

    const nextDate = uniqueDates.find(d => d >= todayKey);
    const nextDays = nextDate ? Math.round((new Date(nextDate + 'T00:00:00').getTime() - today.getTime()) / 86400000) : '—';

    return { records: all, uniqueDates, count: uniqueDates.length, standing, longest, nextDays };
  }, [country, startDate, endDate, today, todayKey]);

  if (!isMounted) return null;

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans" data-page={page}>
      <header>
        <nav className="wrap">
          <div className="logo">Utsavs <span>GLOBAL CALENDAR INTELLIGENCE</span></div>
          <div className="navlinks">
            <a href="#home" className={cn(page === 'home' && "active")} onClick={() => setPage('home')}>Date Intelligence</a>
            <a href="#built" className={cn(page === 'built' && "active")} onClick={() => setPage('built')}>Built For</a>
            <a href="#api" className={cn(page === 'api' && "active")} onClick={() => setPage('api')}>API</a>
            <a href="#insurance" className={cn(page === 'insurance' && "active")} onClick={() => setPage('insurance')}>Travel Insurance</a>
            <a href="https://utsavs.com" target="_blank" rel="noopener">Stories ↗</a>
          </div>
          <a href="#api" className="navcta" onClick={() => setPage('api')}>Get API Access</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="explore">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 className="headline">Know before you fly. Know before you schedule.</h1>
              <p className="sub">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              <aside className="hero-tracker" id="world" aria-label="Next holiday tracker">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">NEXT HOLIDAY UP</span>
                    <strong id="hero-tracker-date">{today.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> Live calendar view</span>
                </div>
                <div className="hero-tracker-next-grid">
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Global</span>
                    <span className="next-card-name" id="pulse-global-name">{globalNext?.name || "—"}</span>
                    <span className="next-card-date" id="pulse-global-date">
                      {globalNext ? `${new Date(globalNext.date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })} · ${globalNext.countryCount} countries · ${globalNext.daysAway === 0 ? 'today' : globalNext.daysAway + ' days away'}` : "—"}
                    </span>
                  </div>
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker" id="pulse-regional-kicker">Regional · {COUNTRY_LABELS[country] || country}</span>
                    <span className="next-card-name" id="pulse-regional-name">{regionalNext?.name || "No upcoming holiday listed"}</span>
                    <span className="next-card-date" id="pulse-regional-date">
                      {regionalNext ? `${new Date(regionalNext.date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })} · ${regionalNext.daysAway === 0 ? 'today' : regionalNext.daysAway + ' days away'}` : `for ${COUNTRY_LABELS[country] || country}`}
                    </span>
                  </div>
                </div>
                <div className="hero-tracker-feed">
                  <div className={cn("marquee", marqueeItems.length === 0 && "marquee-static")}>
                    <div className="marquee-track" id="pulse-marquee-track" dangerouslySetInnerHTML={{ __html: marqueeItems.join('') }} />
                  </div>
                </div>
                <a className="hero-tracker-link" href="#date-intelligence">See what this date means <span>→</span></a>
              </aside>

              <div className="hero-trust">
                <span><b>100</b> countries tracked</span>
                <span className="sep">·</span>
                <span>live feeds where available</span>
                <span className="sep">·</span>
                <span>evidence shown where available</span>
              </div>
            </div>

            <div className="checker">
              <div className="checker-top">
                <h3 id="checker-title">Trip impact checker</h3>
                <button type="button" className="compare-launch" onClick={() => setCompareOpen(!compareOpen)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3 4 7l4 4M4 7h13M16 21l4-4-4-4M20 17H7"/></svg>
                  <span>{compareOpen ? "Back to lens" : "Compare countries"}</span>
                </button>
              </div>
              <div className="mode-toggle" role="tablist">
                <button type="button" className={cn(mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button type="button" className={cn(mode === 'study' && "active")} onClick={() => setMode('study')}>Study abroad</button>
                <button type="button" className={cn(mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business travel</button>
              </div>
              
              {!compareOpen ? (
                <div className="checker-row">
                  <div className="checker-field">
                    <label>Destination / jurisdiction</label>
                    <select value={country} onChange={e => setCountry(e.target.value)}>
                      {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <div className="checker-row">
                  <div className="checker-field">
                    <label>Country A</label>
                    <select value={compareA} onChange={e => setCompareA(e.target.value)}>
                      {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="checker-field">
                    <label>Country B</label>
                    <select value={compareB} onChange={e => setCompareB(e.target.value)}>
                      {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div className="checker-row">
                <div className="checker-field">
                  <label>From</label>
                  <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                </div>
                <div className="checker-field">
                  <label>To</label>
                  <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                </div>
              </div>

              <div className="range-chips">
                <button className="range-chip" onClick={() => setEndDate('2026-09-11')}>Next 7 days</button>
                <button className="range-chip active" onClick={() => setEndDate('2026-10-04')}>Next 30 days</button>
                <button className="range-chip" onClick={() => setEndDate('2026-12-04')}>Next 90 days</button>
              </div>

              <div className="checker-summary">
                <div><b>{checkerData.count}</b><span>dates to keep in mind</span></div>
                <div><b>{checkerData.longest}</b><span>day in longest flagged run</span></div>
                <div><b>{checkerData.nextDays}</b><span>days to next one</span></div>
              </div>
              
              <div className="checker-brief">
                <span className="brief-label">IN SHORT</span>
                {checkerData.count === 1 
                  ? `${new Date(checkerData.uniqueDates[0] + "T00:00:00").toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })} is the only recorded date to keep in mind. Review the details below for institutional impacts.`
                  : `${checkerData.count} dates in your selected period are worth keeping in mind. Review the details below for institutional impacts.`}
              </div>

              <div className="checker-list">
                {checkerData.records.map((r, i) => (
                  <div key={i} className="impact-row">
                    <span className="impact-date">{new Date(r.date + "T00:00:00").toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</span>
                    <span className="impact-name">{r.name}</span>
                    <span className="status-pill high">High</span>
                  </div>
                ))}
              </div>

              <div className="checker-note show">
                <b>For your plans.</b> {checkerData.count} dates in this period are worth keeping in mind. Check the named source if you need a particular office or institution to be open.
              </div>
            </div>
          </div>
        </section>

        {/* DATE INTELLIGENCE SECTION */}
        <section id="date-intelligence" className="date-intel-featured">
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">★ Date intelligence</div>
              <h2 className="section-title">What happens on this date?</h2>
              <p>One place for the calendar fact, travel signal and institution-specific evidence around a date — with the scope and source kept visible.</p>
            </div>

            <div className="date-intel-shell">
              <div className="date-intel-controls">
                <div className="di-field">
                  <label>Date · live today by default</label>
                  <input type="date" value={todayKey} readOnly />
                </div>
                <div className="di-field">
                  <label>Place</label>
                  <select value={country} onChange={e => setCountry(e.target.value)}>
                    {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                      <option key={code} value={code}>{name}</option>
                    ))}
                  </select>
                </div>
                <div className="di-nav">
                  <button type="button">Today</button>
                  <button type="button">←</button>
                  <button type="button">→</button>
                </div>
              </div>

              <div className="di-lenses">
                <button className="di-lens active">All intelligence</button>
                <button className="di-lens">Government</button>
                <button className="di-lens">Banking</button>
                <button className="di-lens">Markets</button>
                <button className="di-lens">Embassy</button>
                <button className="di-lens">Trade & logistics</button>
                <button className="di-lens">Travel</button>
              </div>

              <div className="di-body">
                <div className="di-panel">
                   <div className="di-panel-kicker">Date context</div>
                   <h3 className="di-date-title">{today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</h3>
                   <p className="di-location">{COUNTRY_LABELS[country]} · Weekday</p>
                   <div className="di-empty">No holiday or observance is currently recorded for this place and date in Utsavs.</div>
                </div>
                <div className="di-panel">
                   <div className="di-panel-kicker">Operational signals</div>
                   <div className="space-y-4">
                      {['Government', 'Banking', 'Markets', 'Travel'].map(s => (
                        <div key={s} className="di-signal">
                           <div className="di-signal-name">{s}</div>
                           <div className="di-signal-main"><b>No closure record</b><div className="di-signal-note">No specific information found in verified dataset.</div></div>
                           <span className="di-status none">NONE</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              <div className="di-foot">
                <b>Reading the page:</b> the calendar tells you what the date is; institutional rows show published institution-level signals; the travel row adds a live public advisory when available. No closure is inferred from a holiday or weekend alone.
              </div>
            </div>
          </div>
        </section>

        {/* SPECIALIZED CALENDAR LENSES */}
        <section id="specialized-calendars" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">Specialized intelligence</div>
              <h2 className="section-title">One calendar underneath. Deeper calendars when the job demands it.</h2>
              <p>The core calendar stays unified. Specialized views can go deeper into the systems that care about a date differently.</p>
            </div>

            <div className="special-grid">
              {[
                { n: '01 · FINANCIAL', t: 'Markets', d: 'Trading, early closes, clearing and settlement — institution by institution.', s: ['Trading', 'Clearing', 'Settlement'] },
                { n: '02 · PAYMENTS', t: 'Banking', d: 'Branch calendars and, later, the payment and settlement systems behind them.', s: ['Branches', 'Payments', 'Settlement'] },
                { n: '03 · DIPLOMATIC', t: 'Embassies', d: 'Mission, consular and visa calendars — host and home-country holidays kept distinct.', s: ['Mission', 'Consular', 'Visa'] },
                { n: '04 · TRADE', t: 'Customs & ports', d: 'Authority notices, terminal schedules and documented closure windows.', s: ['Customs', 'Ports', 'Terminals'] },
                { n: '05 · MOBILITY', t: 'Travel intelligence', d: 'Travel advisories now; entry, visa, passport and border information.', s: ['Advisories', 'Entry', 'Visa'] },
                { n: '06 · OPERATIONS', t: 'Impact', d: 'Combine the evidence-backed layers for a date, country or corridor and show the planning consequence.', s: ['Date', 'Place', 'Impact'], f: true },
              ].map(item => (
                <div key={item.t} className={cn("special-card", item.f && "special-featured")}>
                  <div className="special-index">{item.n}</div>
                  <h4>{item.t}</h4>
                  <p>{item.d}</p>
                  <div className="special-tags">
                    {item.s.map(tag => <span key={tag} className="special-tag">{tag}</span>)}
                  </div>
                  <span className="special-open">Open this lens <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING FLOW */}
        <section className="flow" id="closing-flow">
          <div className="wrap">
            <h2 className="flow-line">Check the date first. If it turns out to matter to you, the story's one click away.</h2>
            <div className="flow-steps">
              <span className="flow-step active">Intelligence & API</span>
              <span className="flow-arrow">—</span>
              <span className="flow-step">Cultural stories</span>
              <span className="flow-arrow">—</span>
              <span className="flow-step">Recipes & travel</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-row">
          <div>Utsavs · global calendar intelligence · 2026 · <span style={{ color: 'var(--muted-dim)' }}>Curated data last reviewed 8 Sept 2026</span></div>
          <div>
            <a href="https://utsavs.com">Explore Utsavs.com</a>
            <a href="#home" onClick={() => setPage('home')}>Full calendar</a>
            <a href="#api" onClick={() => setPage('api')}>Join API preview</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
