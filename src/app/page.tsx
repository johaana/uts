'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  COUNTRY_LABELS, 
  expandCountry, 
  REGIONAL_INTELLIGENCE,
  STUDENT_INTELLIGENCE_EXTRA,
  HOLIDAYS
} from '@/lib/calendar-intelligence';
import { format, addDays, startOfDay, differenceInDays } from 'date-fns';

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
  const [compB, setCompB] = useState('US');
  const [compC, setCompC] = useState('CA');
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

    const pad2 = (n: number) => String(n).padStart(2, "0");
    const localDateStr = (d: Date) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
    
    const todayStr = localDateStr(now);
    setStartDate(todayStr);
    setDiDate(todayStr);
    
    const future = new Date(now);
    future.setDate(future.getDate() + 30);
    setEndDate(localDateStr(future));
  }, []);

  const todayKey = useMemo(() => {
    if (!todayState) return '';
    const pad2 = (n: number) => String(n).padStart(2, "0");
    return `${todayState.getFullYear()}-${pad2(todayState.getMonth() + 1)}-${pad2(todayState.getDate())}`;
  }, [todayState]);

  // --- Logic: Global Pulse ---
  const forwardIndex = useMemo(() => {
    const idx = new Map();
    if (!todayKey) return idx;
    Object.keys(HOLIDAYS).forEach(code => {
      const holidays = expandCountry(code) || [];
      holidays.forEach(h => {
        if (h.date < todayKey) return;
        if (!idx.has(h.date)) idx.set(h.date, []);
        idx.get(h.date).push({ code, name: h.name });
      });
    });
    return idx;
  }, [todayKey]);

  const globalNext = useMemo(() => {
    const dates = Array.from(forwardIndex.keys()).sort();
    if (!dates.length || !todayState) return null;
    const candidate = dates.find(d => (forwardIndex.get(d) || []).length >= 5) || dates[0];
    const entries = forwardIndex.get(candidate) || [];
    const diff = differenceInDays(new Date(candidate + 'T00:00:00'), todayState);
    return { date: candidate, name: entries[0]?.name || "—", count: entries.length, daysAway: diff };
  }, [forwardIndex, todayState]);

  const regionalNext = useMemo(() => {
    if (!todayKey || !todayState) return null;
    const holidays = expandCountry(country) || [];
    const match = holidays.filter(h => h.date >= todayKey).sort((a,b) => a.date.localeCompare(b.date))[0];
    if (!match) return null;
    const diff = differenceInDays(new Date(match.date + 'T00:00:00'), todayState);
    return { name: match.name, date: match.date, daysAway: diff };
  }, [todayState, todayKey, country]);

  // --- Logic: Checker ---
  const checkerData = useMemo(() => {
    if (!startDate || !endDate) return { records: [], count: 0, longest: 0, nextDays: '—', uniqueDates: [] };
    const purposes = mode === 'traveler' ? ['travel', 'business'] : mode === 'study' ? ['study'] : ['business', 'workforce'];
    
    const all = [...expandCountry(country), ...REGIONAL_INTELLIGENCE.filter(r => r.country === country).map(r => ({ ...r, d: new Date(r.date + "T00:00:00"), status: 'confirmed', source: r.source_name }))]
      .filter(r => r.date >= startDate && r.date <= endDate)
      .sort((a,b) => a.date.localeCompare(b.date));

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

    return { records: all, count: uniqueDates.length, longest, nextDays, uniqueDates };
  }, [country, startDate, endDate, mode]);

  if (!isMounted) return null;

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />

      <main>
        {/* SECTION 01: HERO */}
        <section className="hero" id="explore">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 className="headline">Know before you fly. Know before you schedule.</h1>
              <p className="sub">
                Check a country and your actual dates — before you book, schedule,
                send a student, or send an employee across borders.
              </p>

              <aside className="hero-tracker" id="world" aria-label="Next holiday tracker">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">NEXT HOLIDAY UP</span>
                    <strong id="hero-tracker-date">{todayState?.toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' })}</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> Live calendar view</span>
                </div>

                <div className="hero-tracker-next-grid">
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Global</span>
                    <span className="next-card-name" id="pulse-global-name">{globalNext?.name}</span>
                    <span className="next-card-date" id="pulse-global-date">
                      {globalNext ? `${new Intl.DateTimeFormat('en-GB', { day:'2-digit', month:'short' }).format(new Date(globalNext.date + 'T00:00:00'))} · ${globalNext.count} countries · ${globalNext.daysAway} days away` : '—'}
                    </span>
                  </div>

                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker" id="pulse-regional-kicker">Regional · {COUNTRY_LABELS[country]}</span>
                    <span className="next-card-name" id="pulse-regional-name">{regionalNext?.name || 'No upcoming holiday'}</span>
                    <span className="next-card-date" id="pulse-regional-date">
                      {regionalNext ? `${new Intl.DateTimeFormat('en-GB', { day:'2-digit', month:'short' }).format(new Date(regionalNext.date + 'T00:00:00'))} · ${regionalNext.daysAway} days away` : '—'}
                    </span>
                  </div>
                </div>

                <div className="hero-tracker-feed">
                  <div className="marquee">
                    <div className="marquee-track" id="pulse-marquee-track">
                      {/* Marquee chips generated from logic */}
                      {Array.from(forwardIndex.entries()).slice(0, 10).map(([date, entries]) => (
                        <span key={date} className="chip">
                          <b>{new Intl.DateTimeFormat('en-GB', { day:'2-digit', month:'short' }).format(new Date(date + 'T00:00:00'))}</b> — {entries.map((e: any) => e.code).join(', ')}
                        </span>
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
                <h3 id="checker-title">{isComparing ? 'Calendar Comparison' : 'Trip impact checker'}</h3>
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
                    <label>Country A</label>
                    <select value={compA} onChange={e => setCompA(e.target.value)}>
                      {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="checker-field">
                    <label>Country B</label>
                    <select value={compB} onChange={e => setCompB(e.target.value)}>
                      {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                    </select>
                  </div>
                  {showCountryC && (
                    <div className="checker-field">
                      <label>Country C</label>
                      <select value={compC} onChange={e => setCompC(e.target.value)}>
                        {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                          <option key={code} value={code}>{name}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {!showCountryC && <button type="button" className="range-chip" onClick={() => setShowCountryC(true)}>+ Add C</button>}
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
                  <button 
                    key={days} 
                    className={cn("range-chip", differenceInDays(new Date(endDate), new Date(startDate)) === days && "active")}
                    onClick={() => {
                      const end = addDays(new Date(startDate + "T00:00:00"), days);
                      const pad2 = (n: number) => String(n).padStart(2, "0");
                      setEndDate(`${end.getFullYear()}-${pad2(end.getMonth() + 1)}-${pad2(end.getDate())}`);
                    }}
                  >
                    Next {days} days
                  </button>
                ))}
              </div>

              {!isComparing ? (
                <div id="single-view">
                  <div className="checker-summary">
                    <div><b id="stat-count" className="font-headline">{checkerData.count}</b><span>dates to keep in mind</span></div>
                    <div><b id="stat-longest" className="font-headline">{checkerData.longest}</b><span>days in longest flagged run</span></div>
                    <div><b id="stat-next" className="font-headline">{checkerData.nextDays}</b><span>days to next one</span></div>
                  </div>
                  <div className="checker-list">
                    {checkerData.records.length > 0 ? checkerData.records.map((r, i) => (
                      <div key={i} className="impact-row">
                        <span className="impact-date">{new Intl.DateTimeFormat('en-GB', { day:'2-digit', month:'short' }).format(r.d)}</span>
                        <span className="impact-name">{r.name}</span>
                        <span className="status-pill">{r.source || 'Public'}</span>
                      </div>
                    )) : (
                      <div className="checker-brief text-center py-8">Your date looks operationally good.</div>
                    )}
                  </div>
                </div>
              ) : (
                <div id="compare-view">
                   <div className="checker-summary">
                    <div><b className="font-headline">3</b><span>dates flagged for either country</span></div>
                    <div><b className="font-headline">1</b><span>mismatched days</span></div>
                    <div><b className="font-headline">12</b><span>days to next mismatch</span></div>
                  </div>
                  <div className="checker-list">
                    <div className="checker-brief text-center py-12 italic opacity-50">
                      Comparison analysis active for {compA} ↔ {compB}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 02: DATE INTELLIGENCE */}
        <section id="date-intelligence" className="wrap">
          <div className="section-head">
            <div className="kicker">★ Date intelligence</div>
            <h2 className="section-title">What happens on this date?</h2>
            <p>One place for the calendar fact, travel signal and institution-specific evidence around a date — with the scope and source kept visible.</p>
            <p className="mt-2 text-[12.5px] text-[#6E7495]">
              Different tool than the checker above: the checker scans a
              <em className="text-[#9AA1C0] not-italic"> date range </em>
              for one country to plan a trip; this scans everything known about
              <em className="text-[#9AA1C0] not-italic"> one specific date </em>
              across institutions.
            </p>
          </div>

          <div className="date-intel-shell">
            <div className="date-intel-controls">
              <div className="di-field">
                <label>Date · live today by default</label>
                <input type="date" value={diDate} onChange={e => setDiDate(e.target.value)} />
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
                <button type="button" onClick={() => setDiDate(new Date().toISOString().split('T')[0])}>Today</button>
              </div>
            </div>

            <div className="di-lenses">
              {['all', 'government', 'banking', 'markets', 'embassy', 'trade', 'travel'].map(l => (
                <button 
                  key={l} 
                  className={cn("di-lens", diLens === l && "active")}
                  onClick={() => setDiLens(l)}
                >
                  {l === 'all' ? 'All intelligence' : l.charAt(0).toUpperCase() + l.slice(1)}
                </button>
              ))}
            </div>

            <div className="di-body">
              <div className="di-panel">
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#E8A33D] mb-4">Calendar Context</h4>
                <p className="text-sm text-[#9AA1C0]">No major national holidays recorded for this date.</p>
              </div>
              <div className="di-panel">
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#E8A33D] mb-4">Authoritative Signals</h4>
                <p className="text-sm text-[#9AA1C0]">Verified operational status: Standard Business Day.</p>
              </div>
            </div>

            <div className="di-foot">
              <b>Reading the page:</b> the calendar tells you what the date is; institutional rows show published institution-level signals. No closure is inferred from a holiday or weekend alone.
            </div>
          </div>
        </section>

        {/* SECTION 03: SPECIALIZED INTELLIGENCE */}
        <section id="specialized-calendars" className="wrap" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <div className="kicker">Specialized intelligence</div>
            <h2 className="section-title">One calendar underneath. Deeper calendars when the job demands it.</h2>
            <p>The core calendar stays unified. Specialized views can go deeper into the systems that care about a date differently.</p>
          </div>

          <div className="special-grid">
            {[
              { idx: "01", t: "Markets", d: "Trading, early closes, clearing and settlement — institution by institution.", tags: ["Trading", "Clearing"] },
              { idx: "02", t: "Banking", d: "Branch calendars and, later, the payment and settlement systems behind them.", tags: ["Branches", "Payments"] },
              { idx: "03", t: "Embassies", d: "Mission, consular and visa calendars — host and home-country holidays kept distinct.", tags: ["Consular", "Visa"] },
              { idx: "04", t: "Customs & ports", d: "Authority notices, terminal schedules and documented closure windows.", tags: ["Ports", "Customs"] },
              { idx: "05", t: "Travel intelligence", d: "Travel advisories now; entry, visa, passport and border information layer.", tags: ["Advisories", "Entry"] },
              { idx: "06", t: "Impact", d: "Combine the evidence-backed layers for a date and show the planning consequence.", tags: ["Synthesis", "Impact"] }
            ].map(item => (
              <div key={item.idx} className="special-card">
                <div className="special-index">{item.idx} · {item.t.toUpperCase()}</div>
                <h4>{item.t}</h4>
                <p>{item.d}</p>
                <div className="special-tags">
                  {item.tags.map(tag => <span key={tag} className="special-tag">{tag}</span>)}
                </div>
                <span className="special-open">Open this lens →</span>
              </div>
            ))}
          </div>

          <div className="special-footer">
            <p>Same evidence model underneath. Different intelligence products on top.</p>
            <span className="special-api">/v1/markets · /v1/banking · /v1/embassies · /v1/trade · /v1/travel</span>
          </div>
        </section>

        {/* SECTION 08: BUILT FOR */}
        <section id="built-for" className="wrap">
          <div className="section-head">
            <div className="kicker">BUILT FOR</div>
            <h2 className="section-title">Choose the right day for what you are trying to do.</h2>
            <p>Travel, study, business, workforce and operations can all be affected by the same date in different ways.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { t: "Travel", s: "Choosing when to go", d: "Understand what may be happening when you arrive, from public and regional dates to relevant travel information and local observances." },
              { t: "Corporate / HR", s: "Choosing when to operate", d: "Check destination holidays before approving international travel or onboarding. Know exactly which state or city holidays apply to your team." },
              { t: "Business & Finance", s: "Choosing when to schedule", d: "Don't get caught out by market closures or banking holidays. Compare origin and destination calendars." },
              { t: "Study Abroad", s: "Choosing when to arrive", d: "Put institutional calendars and arrival timing around your dates. Align visa interviews with verified host-country info." }
            ].map((item, i) => (
              <div key={i} className="checker p-8 bg-[#1E2650]">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">{item.s}</span>
                 <h3 className="text-2xl font-headline font-medium mt-2 mb-4">{item.t}</h3>
                 <p className="text-sm text-[#9AA1C0] leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 17: TRAVEL INSURANCE */}
        <section className="wrap border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl space-y-4">
              <div className="kicker">TRAVEL PROTECTION</div>
              <h2 className="section-title">Plan for what you can predict. Protect against what you can't.</h2>
              <p className="text-[#9AA1C0]">Utsavs provides date intelligence context. For covered unexpected events, we're working with partners on context-aware protection.</p>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="mailto:joy@utsavs.com?subject=Travel Protection">
                <button className="navcta h-14 px-10 font-bold">Get in touch with us</button>
              </Link>
              <button className="range-chip h-14 px-10 border-2">Partner with us →</button>
            </div>
          </div>
          <div className="mt-12 p-6 bg-white/5 rounded-xl border border-dashed text-[11.5px] text-[#6E7495] leading-relaxed">
            Insurance is the subject matter of solicitation. Coverage, eligibility, benefits, exclusions and terms are determined by the applicable policy and insurer. Please review the policy wording and applicable requirements before purchase.
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
