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
  Sparkles,
  ChevronLeft,
  Search,
  ExternalLink
} from "lucide-react";
import { getOperationalImpact } from '@/lib/operational/adapter';
import { OperationalQuery, OperationalResult, DateIntelligenceRecord, UserPurpose } from '@/lib/operational/types';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { COUNTRY_LABELS } from '@/lib/calendar-intelligence';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [query, setQuery] = useState<OperationalQuery>({
    destination: 'IN',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0],
    purpose: 'travel'
  });
  const [result, setResult] = useState<OperationalResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [mode, setMode] = useState<UserPurpose>('travel');
  const [compareOpen, setCompareOpen] = useState(false);
  const [compareFilter, setCompareFilter] = useState<'all' | 'mismatch' | 'overlap'>('all');
  
  // Date Intelligence State
  const [diDate, setDiDate] = useState(new Date().toISOString().split('T')[0]);
  const [diCountry, setDiCountry] = useState('IN');
  const [diLens, setDiLens] = useState('all');

  useEffect(() => {
    setIsMounted(true);
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

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main>
        {/* PAGE: HOME / DATE INTELLIGENCE */}
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
                    <strong id="hero-tracker-date">{isMounted ? new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : 'Today'}</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> Live calendar view</span>
                </div>
                <div className="hero-tracker-next-grid">
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Global</span>
                    <span className="next-card-name" id="pulse-global-name">Diwali</span>
                    <span className="next-card-date" id="pulse-global-date">08 Nov · 10+ countries</span>
                  </div>
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker" id="pulse-regional-kicker">Regional · {COUNTRY_LABELS[query.destination] || query.destination}</span>
                    <span className="next-card-name" id="pulse-regional-name">Lakshmi Puja</span>
                    <span className="next-card-date" id="pulse-regional-date">08 Nov · Coming up</span>
                  </div>
                </div>
                <div className="hero-tracker-feed">
                  <div className="marquee" aria-live="polite">
                    <div className="marquee-track" id="pulse-marquee-track">
                       <span className="chip"><b>India</b> — Republic Day · 26 Jan</span>
                       <span className="chip"><b>Japan</b> — National Foundation Day · 11 Feb</span>
                       <span className="chip"><b>USA</b> — Labor Day · 07 Sep</span>
                       <span className="chip"><b>India</b> — Republic Day · 26 Jan</span>
                       <span className="chip"><b>Japan</b> — National Foundation Day · 11 Feb</span>
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
                <h3 id="checker-title">{mode === 'travel' ? 'Trip impact checker' : mode === 'study' ? 'Study abroad impact checker' : 'Business travel impact checker'}</h3>
                <button type="button" className="compare-launch" onClick={() => setCompareOpen(!compareOpen)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3 4 7l4 4M4 7h13M16 21l4-4-4-4M20 17H7"/></svg>
                  <span id="compare-launch-label">{compareOpen ? 'Back to lens' : 'Compare countries'}</span>
                </button>
              </div>
              <div className="mode-toggle" role="tablist" aria-label="Intelligence lens">
                <button type="button" className={cn(mode === 'travel' && "active")} onClick={() => setMode('travel')}>Travel</button>
                <button type="button" className={cn(mode === 'study' && "active")} onClick={() => setMode('study')}>Study abroad</button>
                <button type="button" className={cn(mode === 'workforce' && "active")} onClick={() => setMode('workforce')}>Business travel</button>
              </div>
              
              {!compareOpen ? (
                <div className="checker-row" id="single-country-row">
                  <div className="checker-field">
                    <label htmlFor="country-select">Destination / jurisdiction</label>
                    <select id="country-select" value={query.destination} onChange={(e) => setQuery({...query, destination: e.target.value})}>
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
                  <label htmlFor="start-date">From</label>
                  <input type="date" id="start-date" value={query.startDate} onChange={(e) => setQuery({...query, startDate: e.target.value})} />
                </div>
                <div className="checker-field">
                  <label htmlFor="end-date">To</label>
                  <input type="date" id="end-date" value={query.endDate} onChange={(e) => setQuery({...query, endDate: e.target.value})} />
                </div>
              </div>

              <div className="range-chips">
                <button className={cn("range-chip")} onClick={() => setQuery({...query, endDate: new Date(new Date(query.startDate).getTime() + 7*86400000).toISOString().split('T')[0]})}>Next 7 days</button>
                <button className={cn("range-chip active")} onClick={() => setQuery({...query, endDate: new Date(new Date(query.startDate).getTime() + 30*86400000).toISOString().split('T')[0]})}>Next 30 days</button>
                <button className={cn("range-chip")} onClick={() => setQuery({...query, endDate: new Date(new Date(query.startDate).getTime() + 90*86400000).toISOString().split('T')[0]})}>Next 90 days</button>
              </div>

              {!compareOpen ? (
                <div id="single-view">
                  <div className="checker-summary">
                    <div><b id="stat-count">{stats.count}</b><span id="stat-count-label">dates to keep in mind</span></div>
                    <div><b id="stat-longest">{stats.longest}</b><span id="stat-longest-label">days in longest flagged run</span></div>
                    <div><b id="stat-next">{stats.next}</b><span id="stat-next-label">days to next one</span></div>
                  </div>
                  <div className="checker-brief" id="checker-brief" aria-live="polite">
                     <span className="font-bold text-white mr-2 uppercase text-[11px] tracking-widest text-[#F0C888]">IN SHORT</span>{briefText}
                  </div>
                  <div className="checker-list" id="checker-list">
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
                    <div><b id="cmp-stat-flagged">{stats.count}</b><span>dates flagged for either country</span></div>
                    <div><b id="cmp-stat-mismatch">2</b><span>mismatched days</span></div>
                    <div><b id="cmp-stat-next">4</b><span>days to next mismatch</span></div>
                  </div>
                  <div className="range-chips mb-4">
                    <button className={cn("range-chip", compareFilter === 'all' && "active")} onClick={() => setCompareFilter('all')}>All dates</button>
                    <button className={cn("range-chip", compareFilter === 'mismatch' && "active")} onClick={() => setCompareFilter('mismatch')}>Mismatches only</button>
                    <button className={cn("range-chip", compareFilter === 'overlap' && "active")} onClick={() => setCompareFilter('overlap')}>Overlaps only</button>
                  </div>
                  <div className="overflow-x-auto border border-white/10 rounded-lg bg-black/20">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="bg-[#1E2650] border-b border-white/10">
                        <tr>
                          <th className="p-3 font-mono text-[#6E7495] uppercase tracking-wider">Date</th>
                          <th className="p-3 font-mono text-[#6E7495] uppercase tracking-wider">{COUNTRY_LABELS[query.destination] || 'Country A'}</th>
                          <th className="p-3 font-mono text-[#6E7495] uppercase tracking-wider">Japan</th>
                          <th className="p-3 font-mono text-[#6E7495] uppercase tracking-wider">Signal</th>
                        </tr>
                      </thead>
                      <tbody id="compare-tbody">
                         {result?.records.slice(0,5).map((r, i) => (
                           <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                             <td className="p-3 font-mono">{new Date(r.date + 'T00:00:00').toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</td>
                             <td className="p-3">{r.name}</td>
                             <td className="p-3">—</td>
                             <td className="p-3"><span className="text-[#E8A33D] font-bold uppercase text-[10px]">MISMATCH</span></td>
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
              <p style={{ marginTop:'8px', fontSize:'12.5px', color:'var(--muted-dim)' }}>Different tool than the checker above: the checker scans a <em style={{ color:'var(--muted)', fontStyle:'normal' }}>date range</em> for one country to plan a trip or a scheduling window; this scans everything known about <em style={{ color:'var(--muted)', fontStyle:'normal' }}>one specific date</em> across institutions.</p>
            </div>

            <div className="date-intel-shell">
              <div className="date-intel-controls">
                <div className="di-field">
                  <label htmlFor="di-date">Date · live today by default</label>
                  <input id="di-date" type="date" value={diDate} onChange={(e) => setDiDate(e.target.value)} />
                </div>

                <div className="di-field">
                  <label htmlFor="di-country">Place</label>
                  <select id="di-country" value={diCountry} onChange={(e) => setDiCountry(e.target.value)}>
                     {Object.entries(COUNTRY_LABELS).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                  </select>
                </div>

                <div className="di-nav">
                  <button type="button" id="di-today" onClick={() => setDiDate(new Date().toISOString().split('T')[0])}>Today</button>
                  <button type="button" id="di-prev" onClick={() => setDiDate(new Date(new Date(diDate).getTime() - 86400000).toISOString().split('T')[0])}>←</button>
                  <button type="button" id="di-next" onClick={() => setDiDate(new Date(new Date(diDate).getTime() + 86400000).toISOString().split('T')[0])}>→</button>
                </div>
              </div>

              <div className="di-lenses" id="di-lenses">
                {['all', 'government', 'banking', 'markets', 'embassy', 'trade', 'travel'].map(l => (
                  <button 
                    key={l}
                    className={cn("di-lens", diLens === l && "active")} 
                    type="button"
                    onClick={() => setDiLens(l)}
                  >
                    {l === 'all' ? 'All intelligence' : l}
                  </button>
                ))}
              </div>

              <div className="di-body">
                <div className="di-panel" id="di-events">
                   <div className="space-y-4">
                      <p className="text-[10.5px] font-mono text-[#4FD1C5] uppercase tracking-widest">Calendar context</p>
                      <h3 className="text-2xl font-headline font-bold">{isMounted ? new Date(diDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '...'}</h3>
                      <p className="text-sm text-muted-foreground">Standard working day. No national holiday recorded.</p>
                   </div>
                </div>
                <div className="di-panel" id="di-signals">
                   <div className="space-y-6">
                      <p className="text-[10.5px] font-mono text-[#4FD1C5] uppercase tracking-widest">Operational signals</p>
                      <div className="space-y-6">
                         {['Government', 'Banking', 'Markets', 'Travel'].map(s => (
                           <div key={s} className="flex justify-between items-start">
                              <div>
                                <p className="text-[11px] font-mono text-[#6E7495] uppercase">{s}</p>
                                <p className="text-sm font-medium text-muted-foreground">No specific closure record.</p>
                              </div>
                              <span className="text-[9px] font-mono text-[#6E7495] border border-white/10 px-2 py-0.5 rounded-full">NONE</span>
                           </div>
                         ))}
                      </div>
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
        <section id="specialized-calendars" style={{ paddingTop:0 }}>
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">Specialized intelligence</div>
              <h2 className="section-title">One calendar underneath. Deeper calendars when the job demands it.</h2>
              <p>The core calendar stays unified. Specialized views can go deeper into the systems that care about a date differently.</p>
            </div>

            <div className="special-grid">
              <div className="special-card">
                <div className="special-index">01 · FINANCIAL</div>
                <h4>Markets</h4>
                <p>Trading, early closes, clearing and settlement — institution by institution.</p>
                <div className="special-tags">
                  <span className="special-tag">Trading</span>
                  <span className="special-tag">Clearing</span>
                  <span className="special-tag">Settlement</span>
                </div>
                <span className="special-open">Open this lens <ArrowRight className="w-4 h-4 ml-2" /></span>
              </div>

              <div className="special-card">
                <div className="special-index">02 · PAYMENTS</div>
                <h4>Banking</h4>
                <p>Branch calendars and, later, the payment and settlement systems behind them.</p>
                <div className="special-tags">
                  <span className="special-tag">Branches</span>
                  <span className="special-tag">Payments</span>
                  <span className="special-tag">Settlement</span>
                </div>
                <span className="special-open">Open this lens <ArrowRight className="w-4 h-4 ml-2" /></span>
              </div>

              <div className="special-card">
                <div className="special-index">03 · DIPLOMATIC</div>
                <h4>Embassies</h4>
                <p>Mission, consular and visa calendars — host and home-country holidays kept distinct.</p>
                <div className="special-tags">
                  <span className="special-tag">Mission</span>
                  <span className="special-tag">Consular</span>
                  <span className="special-tag">Visa</span>
                </div>
                <span className="special-open">Open this lens <ArrowRight className="w-4 h-4 ml-2" /></span>
              </div>

              <div className="special-card">
                <div className="special-index">04 · TRADE</div>
                <h4>Customs &amp; ports</h4>
                <p>Authority notices, terminal schedules and documented closure windows without assuming a port follows a public holiday.</p>
                <div className="special-tags">
                  <span className="special-tag">Customs</span>
                  <span className="special-tag">Ports</span>
                  <span className="special-tag">Terminals</span>
                </div>
                <span className="special-open">Open this lens <ArrowRight className="w-4 h-4 ml-2" /></span>
              </div>

              <div className="special-card">
                <div className="special-index">05 · MOBILITY</div>
                <h4>Travel intelligence</h4>
                <p>Travel advisories now; entry, visa, passport and border information can layer in as verified sources are added.</p>
                <div className="special-tags">
                  <span className="special-tag">Advisories</span>
                  <span className="special-tag">Entry</span>
                  <span className="special-tag">Visa</span>
                </div>
                <span className="special-open">Open this lens <ArrowRight className="w-4 h-4 ml-2" /></span>
              </div>

              <div className="special-card special-featured">
                <div className="special-index">06 · OPERATIONS · SYNTHESIS</div>
                <h4>Impact</h4>
                <p>Combine the evidence-backed layers for a date, country or corridor and show the planning consequence.</p>
                <div className="special-tags">
                  <span className="special-tag">Date</span>
                  <span className="special-tag">Place</span>
                  <span className="special-tag">Impact</span>
                </div>
                <span className="special-open">Open this lens <ArrowRight className="w-4 h-4 ml-2" /></span>
              </div>
            </div>

            <div className="special-footer">
              <p>Same evidence model underneath. Different intelligence products on top. That gives Utsavs room to serve travelers today and sell specialized operational APIs later.</p>
              <span className="special-api">/v1/markets · /v1/banking · /v1/embassies · /v1/trade · /v1/travel · /v1/impact</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}