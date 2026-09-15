'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Loader2, 
  Globe, 
  ShieldCheck, 
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
  const [todayString, setTodayString] = useState('Today');
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

  useEffect(() => {
    setIsMounted(true);
    setTodayString(new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }));
  }, []);

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

  const stats = useMemo(() => {
    if (!result || result.records.length === 0) return { count: 0, longest: 0, next: '—' };
    const dates = [...new Set(result.records.map(r => r.date))].sort();
    let longest = 0, currentRun = 0, prev = null;
    dates.forEach(d => {
      const cur = new Date(d + 'T00:00:00');
      if (prev && (cur.getTime() - prev.getTime()) / 86400000 <= 2) {
        currentRun++;
      } else {
        currentRun = 1;
      }
      longest = Math.max(longest, currentRun);
      prev = cur;
    });
    const nextDate = dates.find(d => new Date(d + 'T00:00:00') >= new Date().setHours(0,0,0,0));
    const nextDays = nextDate ? Math.round((new Date(nextDate + 'T00:00:00').getTime() - new Date().setHours(0,0,0,0)) / 86400000) : '—';
    return { count: dates.length, longest, next: nextDays };
  }, [result]);

  const briefText = useMemo(() => {
    if (!result || result.records.length === 0) return "No dated information is currently recorded for this period.";
    const dates = [...new Set(result.records.map(r => r.date))].sort();
    if (dates.length === 1) {
      const d = new Date(dates[0] + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
      return `${d} is the only recorded date to keep in mind. Review the details below for institutional impacts.`;
    }
    return `${dates.length} dates in your selected period are worth keeping in mind. The details below show what is happening and any related local or institutional information.`;
  }, [result]);

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
                    <strong id="hero-tracker-date">{todayString}</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> Live calendar view</span>
                </div>
                <div className="hero-tracker-next-grid">
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Global</span>
                    <span className="next-card-name">Diwali</span>
                    <span className="next-card-date">08 Nov · 10+ countries</span>
                  </div>
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Regional · {COUNTRY_LABELS[query.destination] || query.destination}</span>
                    <span className="next-card-name">Lakshmi Puja</span>
                    <span className="next-card-date">08 Nov · Coming up</span>
                  </div>
                </div>
                <div className="hero-tracker-feed">
                  <div className="marquee">
                    <div className="marquee-track">
                       <span className="chip"><b>India</b> — Republic Day · 26 Jan</span>
                       <span className="chip"><b>Japan</b> — Foundation Day · 11 Feb</span>
                       <span className="chip"><b>USA</b> — Labor Day · 07 Sep</span>
                       <span className="chip"><b>India</b> — Republic Day · 26 Jan</span>
                       <span className="chip"><b>Japan</b> — Foundation Day · 11 Feb</span>
                    </div>
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
                <h3>{compareOpen ? 'Compare countries' : CHECKER_TITLES[query.purpose]}</h3>
                <button type="button" className="compare-launch" onClick={() => setCompareOpen(!compareOpen)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3 4 7l4 4M4 7h13M16 21l4-4-4-4M20 17H7"/></svg>
                  <span>{compareOpen ? 'Back to lens' : 'Compare countries'}</span>
                </button>
              </div>
              <div className="mode-toggle">
                {['travel', 'study', 'workforce'].map((p) => (
                  <button 
                    key={p} 
                    className={cn(query.purpose === p && "active")} 
                    onClick={() => setQuery({...query, purpose: p as any})}
                  >
                    {p === 'travel' ? 'Travel' : p === 'study' ? 'Study abroad' : 'Business travel'}
                  </button>
                ))}
              </div>
              
              {!compareOpen ? (
                <div className="checker-row">
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
                <div className="checker-row">
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

              {!compareOpen ? (
                <div id="single-view">
                  <div className="checker-summary">
                    <div><b>{stats.count}</b><span>{stats.count === 1 ? 'date to keep in mind' : 'dates to keep in mind'}</span></div>
                    <div><b>{stats.longest}</b><span>{stats.longest === 1 ? 'day in longest run' : 'days in longest run'}</span></div>
                    <div><b>{stats.next}</b><span>days to next one</span></div>
                  </div>
                  <div className="checker-brief">
                     <span className="brief-label">IN SHORT</span>{briefText}
                  </div>
                  <div className="checker-list">
                    {isSearching ? <div className="flex justify-center py-8"><Loader2 className="animate-spin text-primary" /></div> : 
                    result?.records.map(r => (
                      <div key={r.id} className="impact-row">
                        <span className="impact-date">{new Date(r.date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</span>
                        <span className="impact-name">{r.name}</span>
                        <span className={cn("status-pill", r.confidence === 'high' ? "high" : "listed")}>{r.confidence === 'high' ? 'High' : 'Listed'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div id="compare-view">
                  <div className="checker-summary">
                    <div><b>{stats.count}</b><span>dates flagged</span></div>
                    <div><b>2</b><span>mismatches</span></div>
                    <div><b>4</b><span>days to next</span></div>
                  </div>
                  <div className="compare-filters">
                    <button className={cn("range-chip", compareFilter === 'all' && "active")} onClick={() => setCompareFilter('all')}>All dates</button>
                    <button className={cn("range-chip", compareFilter === 'mismatch' && "active")} onClick={() => setCompareFilter('mismatch')}>Mismatches</button>
                  </div>
                  <div className="compare-table-wrap">
                    <table className="compare-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>{COUNTRY_LABELS[query.destination]}</th>
                          <th>Japan</th>
                          <th>Signal</th>
                        </tr>
                      </thead>
                      <tbody>
                         {result?.records.slice(0,5).map((r, i) => (
                           <tr key={i}>
                             <td className="cmp-date">{new Date(r.date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</td>
                             <td>{r.name}</td>
                             <td>—</td>
                             <td><span className="cmp-signal mismatch">MISMATCH</span></td>
                           </tr>
                         ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* DATE INTELLIGENCE */}
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

        {/* SPECIALIZED LENSES */}
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
                { n: '06 · OPERATIONS', t: 'Impact', d: 'Combine the evidence-backed layers for a date and show the consequence.', s: ['Date', 'Place', 'Impact'], f: true },
              ].map(item => (
                <div key={item.t} className={cn("special-card", item.f && "special-featured")}>
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

      <Footer />
    </div>
  );
}

const CHECKER_TITLES: Record<string, string> = {
  travel: "Trip impact checker",
  study: "Study abroad impact checker",
  workforce: "Business travel impact checker",
};
