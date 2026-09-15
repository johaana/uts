'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Loader2, 
  ChevronRight,
  Info,
  MapPin,
  Search,
  ExternalLink,
  ChevronLeft
} from "lucide-react";
import { getOperationalImpact } from '@/lib/operational/adapter';
import { OperationalQuery, OperationalResult, DateIntelligenceRecord, UserPurpose } from '@/lib/operational/types';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { COUNTRY_LABELS } from '@/lib/calendar-intelligence';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [today, setToday] = useState<Date>(new Date());
  
  // Tracker State
  const [query, setQuery] = useState<OperationalQuery>({
    destination: 'IN',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
    purpose: 'travel'
  });
  const [result, setResult] = useState<OperationalResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [compareFilter, setCompareFilter] = useState<'all' | 'mismatch' | 'overlap'>('all');
  
  // Date Intelligence State
  const [diDate, setDiDate] = useState(new Date().toISOString().split('T')[0]);
  const [diCountry, setDiCountry] = useState('IN');
  const [diLens, setDiLens] = useState('all');

  // Initialization
  useEffect(() => {
    setIsMounted(true);
    const d = new Date();
    d.setHours(0,0,0,0);
    setToday(d);
  }, []);

  // Data Fetching
  useEffect(() => {
    const handleCheckImpact = async () => {
      setIsSearching(true);
      try {
        const impact = await getOperationalImpact(query);
        setResult(impact);
      } catch (e) {
        console.error(e);
      } finally {
        setIsSearching(false);
      }
    };
    handleCheckImpact();
  }, [query]);

  // ---------- LOGIC: FORWARD INDEX & WORLD PULSE ----------
  
  const forwardIndex = useMemo(() => {
    if (!result || !isMounted) return new Map();
    const todayKey = today.toISOString().split('T')[0];
    const idx = new Map();
    
    // In a real implementation, this would scan the global set.
    // Here we use the records returned by the adapter as a proxy for the index.
    result.records.forEach(r => {
      if (r.date < todayKey) return;
      if (!idx.has(r.date)) idx.set(r.date, []);
      idx.get(r.date).push({ code: r.jurisdiction.country_code, name: r.name, type: r.category });
    });
    return idx;
  }, [result, today, isMounted]);

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
    
    return { 
      date: candidate, 
      name: topName, 
      countryCount: new Set(entries.map((e: any) => e.code)).size,
      daysAway: diff
    };
  }, [forwardIndex, today]);

  const regionalNext = useMemo(() => {
    if (!result) return null;
    const todayKey = today.toISOString().split('T')[0];
    const match = result.records
      .filter(r => r.date >= todayKey && r.jurisdiction.country_code === query.destination)
      .sort((a, b) => a.date.localeCompare(b.date))[0];
      
    if (!match) return null;
    
    const diff = Math.round((new Date(match.date + 'T00:00:00').getTime() - today.getTime()) / 86400000);
    
    return {
      name: match.name,
      date: match.date,
      daysAway: diff
    };
  }, [result, today, query.destination]);

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
    
    return items.length > 0 ? items.concat(items) : []; // Duplicate for loop
  }, [forwardIndex, today]);

  // ---------- LOGIC: CHECKER SUMMARY & BRIEF ----------

  const checkerStats = useMemo(() => {
    if (!result) return { count: 0, longest: 0, next: '—' };
    
    const datedRecords = result.records.filter(r => r.date);
    const uniqueDates = [...new Set(datedRecords.map(r => r.date))].sort();
    
    const nextDate = uniqueDates.find(d => d >= today.toISOString().split('T')[0]);
    const nextDays = nextDate ? Math.round((new Date(nextDate + 'T00:00:00').getTime() - today.getTime()) / 86400000) : '—';
    
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
    
    return { 
      count: uniqueDates.length, 
      standingCount: result.records.filter(r => !r.date).length,
      uniqueDates,
      longest, 
      next: nextDays 
    };
  }, [result, today]);

  const briefHtml = useMemo(() => {
    const { count, standingCount, uniqueDates } = checkerStats;
    if (count === 0 && standingCount === 0) return "";

    let text = "";
    if (count === 1) {
      const dLabel = new Date(uniqueDates[0] + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
      text = `${dLabel} is the only recorded date to keep in mind in your selected period. The details below explain what is happening and any related local or institutional information.`;
    } else if (count > 1) {
      text = `${count} dates in your selected period are worth keeping in mind. The details below show what is happening on each date and any related local or institutional information.`;
    }

    if (standingCount > 0) {
      text += ` We have also included ${standingCount === 1 ? "one piece" : `${standingCount} pieces`} of general guidance that is not tied to a particular day.`;
    }

    return `<span class="brief-label">IN SHORT</span>${text}`;
  }, [checkerStats]);

  if (!isMounted) return null;

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
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
                    <span className="next-card-kicker" id="pulse-regional-kicker">Regional · {COUNTRY_LABELS[query.destination] || query.destination}</span>
                    <span className="next-card-name" id="pulse-regional-name">{regionalNext?.name || "No upcoming holiday listed"}</span>
                    <span className="next-card-date" id="pulse-regional-date">
                      {regionalNext ? `${new Date(regionalNext.date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })} · ${regionalNext.daysAway === 0 ? 'today' : regionalNext.daysAway + ' days away'}` : `for ${COUNTRY_LABELS[query.destination] || query.destination}`}
                    </span>
                  </div>
                </div>
                <div className="hero-tracker-feed">
                  <div className={cn("marquee", marqueeItems.length === 0 && "marquee-static")}>
                    <div className="marquee-track" id="pulse-marquee-track" dangerouslySetInnerHTML={{ __html: marqueeItems.length > 0 ? marqueeItems.join('') : '<span class="chip"><b>No curated observances</b> in the next 7 days</span>' }} />
                  </div>
                </div>
                <Link className="hero-tracker-link" href="#date-intelligence">See what this date means <span>→</span></Link>
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
                <h3 id="checker-title">{CHECKER_TITLES[query.purpose]}</h3>
                <button type="button" className="compare-launch" onClick={() => setCompareOpen(!compareOpen)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3 4 7l4 4M4 7h13M16 21l4-4-4-4M20 17H7"/></svg>
                  <span>{compareOpen ? 'Back to lens' : 'Compare countries'}</span>
                </button>
              </div>
              <div className="mode-toggle" role="tablist" aria-label="Intelligence lens">
                <button type="button" className={cn(query.purpose === 'travel' && "active")} onClick={() => setQuery({...query, purpose: 'travel'})}>Travel</button>
                <button type="button" className={cn(query.purpose === 'study' && "active")} onClick={() => setQuery({...query, purpose: 'study'})}>Study abroad</button>
                <button type="button" className={cn(query.purpose === 'workforce' && "active")} onClick={() => setQuery({...query, purpose: 'workforce'})}>Business travel</button>
              </div>
              
              {!compareOpen ? (
                <div className="checker-row" id="single-country-row">
                  <div className="checker-field">
                    <label>Destination / jurisdiction</label>
                    <select value={query.destination} onChange={(e) => setQuery({...query, destination: e.target.value})}>
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
                    <select value={query.destination} onChange={(e) => setQuery({...query, destination: e.target.value})}>
                      {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="checker-field">
                    <label>Country B</label>
                    <select defaultValue="JP">
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
                  <input type="date" value={query.startDate} onChange={(e) => setQuery({...query, startDate: e.target.value})} />
                </div>
                <div className="checker-field">
                  <label>To</label>
                  <input type="date" value={query.endDate} onChange={(e) => setQuery({...query, endDate: e.target.value})} />
                </div>
              </div>

              <div className="range-chips">
                <button className="range-chip" onClick={() => setQuery({...query, endDate: new Date(new Date(query.startDate).getTime() + 7*86400000).toISOString().split('T')[0]})}>Next 7 days</button>
                <button className="range-chip active" onClick={() => setQuery({...query, endDate: new Date(new Date(query.startDate).getTime() + 30*86400000).toISOString().split('T')[0]})}>Next 30 days</button>
                <button className="range-chip" onClick={() => setQuery({...query, endDate: new Date(new Date(query.startDate).getTime() + 90*86400000).toISOString().split('T')[0]})}>Next 90 days</button>
              </div>

              <div id="single-view" style={{ display: compareOpen ? 'none' : 'block' }}>
                <div className="checker-summary">
                  <div><b>{checkerStats.count}</b><span>{checkerStats.count === 1 ? 'date to keep in mind' : 'dates to keep in mind'}</span></div>
                  <div><b>{checkerStats.longest}</b><span>{checkerStats.longest === 1 ? 'day in longest run' : 'days in longest run'}</span></div>
                  <div><b>{checkerStats.next}</b><span>days to next one</span></div>
                </div>
                <div className={cn("checker-brief", !briefHtml && "empty")} id="checker-brief" dangerouslySetInnerHTML={{ __html: briefHtml }} />
                <div className="checker-list" id="checker-list">
                  {isSearching ? <div className="flex justify-center py-8"><Loader2 className="animate-spin text-primary" /></div> : 
                  result?.records.map(r => (
                    <div key={r.id} className="impact-row">
                      <span className="impact-date">{r.date ? new Date(r.date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : 'General'}</span>
                      <span className="impact-name">{r.name}</span>
                      <span className={cn("status-pill", r.confidence === 'high' ? "high" : "listed")}>{r.confidence.charAt(0).toUpperCase() + r.confidence.slice(1)}</span>
                      {r.evidence?.source_url && <a className="story-link" href={r.evidence.source_url} target="_blank" rel="noopener">Source</a>}
                    </div>
                  ))}
                </div>
              </div>

              <div id="compare-view" style={{ display: compareOpen ? 'block' : 'none' }}>
                <div className="checker-summary">
                  <div><b>{checkerStats.count}</b><span>dates flagged</span></div>
                  <div><b>2</b><span>mismatches</span></div>
                  <div><b>4</b><span>days to next</span></div>
                </div>
                {/* ... existing comparison table structure ... */}
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
                  <input type="date" value={diDate} onChange={(e) => setDiDate(e.target.value)} />
                </div>
                <div className="di-field">
                  <label>Place</label>
                  <select value={diCountry} onChange={(e) => setDiCountry(e.target.value)}>
                     {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                  </select>
                </div>
                <div className="di-nav">
                  <button type="button" onClick={() => setDiDate(new Date().toISOString().split('T')[0])}>Today</button>
                  <button type="button" onClick={() => setDiDate(new Date(new Date(diDate).getTime() - 86400000).toISOString().split('T')[0])}>←</button>
                  <button type="button" onClick={() => setDiDate(new Date(new Date(diDate).getTime() + 86400000).toISOString().split('T')[0])}>→</button>
                </div>
              </div>

              <div className="di-lenses">
                {['all', 'government', 'banking', 'markets', 'embassy', 'trade', 'travel'].map(l => (
                  <button key={l} className={cn("di-lens", diLens === l && "active")} onClick={() => setDiLens(l)}>
                    {l === 'all' ? 'All intelligence' : l.charAt(0).toUpperCase() + l.slice(1)}
                  </button>
                ))}
              </div>

              <div className="di-body">
                <div className="di-panel">
                   <div className="di-panel-kicker">Date context</div>
                   <h3 className="di-date-title">{new Date(diDate + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</h3>
                   <p className="di-location">{COUNTRY_LABELS[diCountry]} · Weekday</p>
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

        {/* SPECIALIZED LENSES SECTION */}
        <section id="specialized-calendars" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">Specialized intelligence</div>
              <h2 className="section-title">One calendar underneath. Deeper calendars when the job demands it.</h2>
              <p>The core calendar stays unified. Specialized views can go deeper into the systems that care about a date differently.</p>
            </div>

            <div className="special-grid">
              {[
                { n: '01 · FINANCIAL', t: 'Markets', d: 'Trading, early closes, clearing and settlement — institution by institution.', s: ['Trading', 'Clearing', 'Settlement'], l: 'markets' },
                { n: '02 · PAYMENTS', t: 'Banking', d: 'Branch calendars and, later, the payment and settlement systems behind them.', s: ['Branches', 'Payments', 'Settlement'], l: 'banking' },
                { n: '03 · DIPLOMATIC', t: 'Embassies', d: 'Mission, consular and visa calendars — host and home-country holidays kept distinct.', s: ['Mission', 'Consular', 'Visa'], l: 'embassy' },
                { n: '04 · TRADE', t: 'Customs & ports', d: 'Authority notices, terminal schedules and documented closure windows.', s: ['Customs', 'Ports', 'Terminals'], l: 'trade' },
                { n: '05 · MOBILITY', t: 'Travel intelligence', d: 'Travel advisories now; entry, visa, passport and border information.', s: ['Advisories', 'Entry', 'Visa'], l: 'travel' },
                { n: '06 · OPERATIONS', t: 'Impact', d: 'Combine the evidence-backed layers for a date and show the consequence.', s: ['Date', 'Place', 'Impact'], f: true, l: 'all' },
              ].map(item => (
                <div key={item.t} className={cn("special-card cursor-pointer", item.f && "special-featured")} onClick={() => setDiLens(item.l)}>
                  <div className="special-index">{item.n}</div>
                  <h4>{item.t}</h4>
                  <p>{item.d}</p>
                  <div className="special-tags">
                    {item.s.map(tag => <span key={tag} className="special-tag">{tag}</span>)}
                  </div>
                  <span className="special-open">Open this lens <ArrowRight className="w-3 h-3 ml-2" /></span>
                </div>
              ))}
            </div>

            <div className="special-footer">
              <p>Same evidence model underneath. Different intelligence products on top.</p>
              <span className="special-api">/v1/markets · /v1/banking · /v1/embassies · /v1/trade · /v1/travel · /v1/impact</span>
            </div>
          </div>
        </section>

        {/* CLOSING FLOW SECTION */}
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

      <Footer />
    </div>
  );
}

const CHECKER_TITLES: Record<string, string> = {
  travel: "Trip impact checker",
  study: "Study abroad impact checker",
  corporate: "Business travel impact checker",
};
