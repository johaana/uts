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
                    <strong id="hero-tracker-date">{new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</strong>
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
                  <span>{compareOpen ? 'Back to lens' : 'Compare countries'}</span>
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

              <div id="single-view">
                <div className="checker-summary">
                  <div><b>{stats.count}</b><span>dates to keep in mind</span></div>
                  <div><b>{stats.longest}</b><span>days in longest flagged run</span></div>
                  <div><b>{stats.next}</b><span>days to next one</span></div>
                </div>
                <div className="checker-brief" id="checker-brief">
                   <span className="brief-label">IN SHORT</span>{briefText}
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
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
