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

  // --- Logic: Tracker Calculations ---
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
    
    // V24 Logic: Include regional signals in checker
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

    return { records: all, count: uniqueDates.length, longest, nextDays };
  }, [country, startDate, endDate]);

  const publicCount = useMemo(() => checkerData.records.filter(r => r.type === 'public' || r.type === 'holiday').length, [checkerData.records]);
  const regionalCount = useMemo(() => checkerData.records.filter(r => r.type === 'regional').length, [checkerData.records]);

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

              {!isComparing ? (
                <div id="single-view">
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
                      const metaParts = [];
                      if (r.confidence) metaParts.push(r.confidence.charAt(0).toUpperCase() + r.confidence.slice(1));
                      if (r.type === 'regional') metaParts.push("Regional");
                      if (r.evidence?.source_name) metaParts.push("Source");
                      const metaString = metaParts.join(' / ');

                      return (
                        <div key={i} className="impact-row">
                          <div className="impact-date">
                            {typeof r.date === 'string' ? format(new Date(r.date + 'T00:00:00'), 'EEE dd MMM') : ''}
                          </div>
                          <div className="impact-name">
                            {r.name}
                          </div>
                          <div className="impact-meta">
                            {metaString}
                          </div>
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
                        {publicCount > 0 && (
                          <>
                            {publicCount} likely {publicCount === 1 ? 'closure' : 'closures'}. Check the named source if you need a particular office, service or institution to be open.{' '}
                          </>
                        )}
                        {regionalCount > 0 && (
                          <>
                            {regionalCount} sub-national {regionalCount === 1 ? 'signal' : 'signals'} also {regionalCount === 1 ? 'falls' : 'fall'} in this window; exact jurisdiction still needs to be confirmed.
                          </>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div id="compare-view">
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
                <button type="button">←</button>
                <button type="button">→</button>
              </div>
            </div>

            <div className="di-body">
              <div className="di-panel">
                <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-4">Calendar Context</h4>
                <p className="text-sm text-muted italic">Sourcing regional and religious dated records for {diDate}...</p>
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

        {/* SPECIALIZED INTELLIGENCE */}
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

        {/* BUILT FOR */}
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

        {/* METHODOLOGY */}
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

        {/* TRAVEL INSURANCE */}
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
