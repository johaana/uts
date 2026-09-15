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

export default function HomePage() {
  const [query, setQuery] = useState<OperationalQuery>({
    destination: 'IN',
    startDate: '2026-11-01',
    endDate: '2026-12-01',
    purpose: 'travel'
  });
  const [result, setResult] = useState<OperationalResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [compareA, setCompareA] = useState('IN');
  const [compareB, setCompareB] = useState('JP');
  const [compareC, setCompareC] = useState('US');
  const [thirdCountryOn, setThirdCountryOn] = useState(false);
  const [compareFilter, setCompareFilter] = useState<'all' | 'mismatch' | 'overlap'>('all');

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

  useEffect(() => {
    handleCheckImpact();
  }, [query.destination, query.startDate, query.endDate, query.purpose]);

  const stats = useMemo(() => {
    if (!result || result.records.length === 0) return { count: 0, longest: 0, next: '—' };
    const dates = [...new Set(result.records.map(r => r.date))].sort();
    let longest = 0, currentRun = 0, prev = null;
    dates.forEach(d => {
      const cur = new Date(d);
      if (prev && (cur.getTime() - prev.getTime()) / 86400000 <= 2) {
        currentRun++;
      } else {
        currentRun = 1;
      }
      longest = Math.max(longest, currentRun);
      prev = cur;
    });
    return { count: dates.length, longest, next: '7' }; // Mock next logic
  }, [result]);

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="home-hero">
          <div className="wrap home-hero-grid">
            {/* LEFT: HERO COPY */}
            <div className="home-hero-copy">
              <div className="eyebrow">
                <div className="dot"></div>
                DATE INTELLIGENCE
              </div>
              <h1 className="headline">
                Know before you fly.<br />Know before you schedule.
              </h1>
              <p className="hero-lead">
                Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.
              </p>
              <div className="hero-actions">
                <Link href="/date-intelligence" className="button button-primary">
                  Check a date<span>→</span>
                </Link>
                <a className="text-link" href="#how-it-works">
                  See how it works<span>↓</span>
                </a>
              </div>

              {/* NEXT HOLIDAY UP */}
              <aside className="hero-tracker" aria-label="Next holiday tracker">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">NEXT HOLIDAY UP</span>
                    <strong>Sunday, 8 Nov 2026</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> Live calendar view</span>
                </div>
                <div className="hero-tracker-next-grid">
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Global</span>
                    <span className="next-card-name">Diwali</span>
                    <span className="next-card-date">8 Nov · 10+ countries</span>
                  </div>
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Regional · India</span>
                    <span className="next-card-name">Lakshmi Puja</span>
                    <span className="next-card-date">8 Nov · 46 days away</span>
                  </div>
                </div>
                <Link className="hero-tracker-link" href="/date-intelligence">
                  See what this date means <span>→</span>
                </Link>
              </aside>
            </div>

            {/* RIGHT: TRACKER */}
            <div className="home-hero-tracker">
              <div className="tracker-card">
                <div className="tracker-card-header">
                  <div>
                    <span className="tracker-kicker">DATE INTELLIGENCE</span>
                    <h2>Check your dates</h2>
                  </div>
                  <span className="tracker-status"><i></i> Live</span>
                </div>

                <div className="mode-toggle" role="tablist">
                  {(['travel', 'study', 'workforce'] as const).map(p => (
                    <button 
                      key={p}
                      onClick={() => setQuery({...query, purpose: p})}
                      className={cn(query.purpose === p && "active")}
                    >
                      {p === 'travel' ? 'Travel' : p === 'study' ? 'Study abroad' : 'Business travel'}
                    </button>
                  ))}
                </div>

                <div className="tracker-fields">
                  <div className="tracker-field">
                    <label>Destination / jurisdiction</label>
                    <select value={query.destination} onChange={e => setQuery({...query, destination: e.target.value})}>
                      <option value="IN">India</option>
                      <option value="JP">Japan</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                    </select>
                  </div>
                  <div className="tracker-date-grid">
                    <div className="tracker-field"><label>From</label><input type="date" value={query.startDate} onChange={e => setQuery({...query, startDate: e.target.value})} /></div>
                    <div className="tracker-field"><label>To</label><input type="date" value={query.endDate} onChange={e => setQuery({...query, endDate: e.target.value})} /></div>
                  </div>
                  <div className="tracker-range">
                    {[7, 30, 90].map(d => (
                      <button key={d} className="range-chip" onClick={() => {
                        const start = new Date(query.startDate);
                        const end = new Date(start.getTime() + d * 86400000);
                        setQuery({...query, endDate: end.toISOString().split('T')[0]});
                      }}>{d} days</button>
                    ))}
                  </div>
                </div>

                <div className="tracker-summary">
                  <div className="tracker-stat"><strong>{stats.count}</strong><span>dates to keep in mind</span></div>
                  <div className="tracker-stat"><strong>{stats.longest}</strong><span>days in longest run</span></div>
                  <div className="tracker-stat"><strong>{stats.next}</strong><span>days to next one</span></div>
                </div>

                {result && !isSearching && result.records.length > 0 && (
                  <div className="tracker-brief">
                    <span className="brief-label">IN SHORT</span>
                    {result.records.length} dates in your selected period are worth keeping in mind. The details below show what is happening on each date.
                  </div>
                )}

                <div className="tracker-results custom-scrollbar">
                  {isSearching ? <div className="flex justify-center py-8"><Loader2 className="animate-spin text-primary" /></div> : 
                   result?.records.map(r => (
                    <div key={r.id} className="impact-row">
                      <span className="impact-date">{r.date.split('-').slice(1).reverse().join(' ')}</span>
                      <span className="impact-name">{r.name}</span>
                      <span className={cn("status-pill", r.confidence === 'high' ? "high" : "listed")}>{r.confidence === 'high' ? 'High' : 'Listed'}</span>
                    </div>
                  ))}
                </div>

                <div className="tracker-footer">
                  <Link href="/date-intelligence">Open Date Intelligence <span>→</span></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORLD TODAY */}
        <section className="world-today" id="world-today">
          <div className="wrap">
            <div className="section-intro">
              <div className="eyebrow">WORLD TODAY</div>
              <h2>Dates are not just dates.</h2>
              <p>Around the world, a date can mean a public holiday, a regional observance, an institutional closure, a working-day difference or something entirely specific to the purpose of your trip.</p>
            </div>
            <div className="world-today-grid">
              <article className="world-today-card world-today-primary">
                <span className="card-label">TODAY</span>
                <h3>Understanding today's calendar</h3>
                <p>See the dates and places that may matter today.</p>
                <Link href="/date-intelligence" className="button button-primary self-start">Explore today's date <span>→</span></Link>
              </article>
              <article className="world-today-card">
                <span className="card-label">COMING UP</span>
                <h3>Diwali 2026</h3>
                <p>8 November 2026 · India · National</p>
                <Link href="/festivals/diwali" className="text-link mt-auto">Check the date <span>→</span></Link>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-it-works" id="how-it-works">
          <div className="wrap">
            <div className="section-intro">
              <div className="eyebrow">HOW IT WORKS</div>
              <h2>See what your dates may mean for travel, study or business.</h2>
              <p>Utsavs brings relevant calendars and deeper institutional information together around the date you actually care about.</p>
            </div>
            <div className="purpose-grid">
              {[
                { n: "01", t: "Travel", d: "Understand what may be happening when you arrive, from public and regional dates to relevant travel information.", a: "Choosing when to go" },
                { n: "02", t: "Business", d: "See dates that may affect meetings, operations, working days and business activity.", a: "Choosing when to schedule" },
                { n: "03", t: "Study", d: "Put institutional calendars, arrival timing and relevant student information around the dates you are considering.", a: "Choosing when to arrive" },
                { n: "04", t: "Operations", d: "Go deeper when the job requires it — markets, banking, customs, institutions and regional calendars.", a: "Choosing when to operate" }
              ].map(item => (
                <article key={item.n} className="purpose-card">
                  <span className="purpose-number">{item.n}</span>
                  <h3>{item.t}</h3>
                  <p>{item.d}</p>
                  <span className="purpose-action">{item.a} →</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALIZED INTELLIGENCE */}
        <section className="specialized-intelligence">
          <div className="wrap">
            <div className="specialized-layout">
              <div className="specialized-copy">
                <div className="eyebrow">SPECIALIZED INTELLIGENCE</div>
                <h2>One calendar underneath. Deeper calendars when the job demands it.</h2>
                <p>The same date can affect a traveller, market, bank, institution or operation differently. Utsavs keeps those layers distinct and brings the relevant evidence together.</p>
                <Link href="/date-intelligence" className="text-link">Explore Date Intelligence <span>→</span></Link>
              </div>
              <div className="specialized-list">
                {[
                  { n: "01", t: "Regional calendars", s: "Country, state, province and jurisdiction" },
                  { n: "02", t: "Institutions", s: "Universities, missions and other institutions" },
                  { n: "03", t: "Markets & banking", s: "Trading, settlement, payments and working days" },
                  { n: "04", t: "Trade & logistics", s: "Customs, ports and documented operational timing" }
                ].map(item => (
                  <div key={item.n} className="specialized-row">
                    <span>{item.n}</span>
                    <strong>{item.t}</strong>
                    <small>{item.s}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
