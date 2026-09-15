'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Loader2, 
  Globe, 
  ShieldCheck, 
  ChevronRight,
  Info,
  Sparkles
} from "lucide-react";
import { getOperationalImpact } from '@/lib/operational/adapter';
import { OperationalQuery, OperationalResult } from '@/lib/operational/types';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { OperationalResultCard } from '@/components/operational/OperationalResultCard';

export default function HomePage() {
  const [query, setQuery] = useState<OperationalQuery>({
    destination: 'IN',
    startDate: '2026-11-01',
    endDate: '2026-11-30',
    purpose: 'travel'
  });
  const [result, setResult] = useState<OperationalResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleCheckImpact = async () => {
    setIsSearching(true);
    // Mimic the processing delay for the "verified" feel
    setTimeout(async () => {
      try {
        const impact = await getOperationalImpact(query);
        setResult(impact);
      } catch (e) {
        console.error(e);
      } finally {
        setIsSearching(false);
      }
    }, 600);
  };

  useEffect(() => {
    handleCheckImpact();
  }, []);

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main>
        {/* =========================================================
             HERO
        ========================================================= */}
        <section className="home-hero">
          <div className="wrap home-hero-grid">
            
            {/* LEFT: HERO COPY */}
            <div className="home-hero-copy">
              <div className="eyebrow">
                <div className="dot"></div>
                DATE INTELLIGENCE
              </div>

              <h1 className="headline">
                Know before you fly.
                <br />
                Know before you schedule.
              </h1>

              <p className="hero-lead">
                Check a country and your actual dates — before you book,
                schedule, send a student, or send an employee across borders.
              </p>

              <div className="hero-actions">
                <Link href="/date-intelligence" className="button button-primary">
                  Check a date
                  <span className="ml-2">→</span>
                </Link>

                <a className="text-link" href="#how-it-works">
                  See how it works
                  <span className="ml-1">↓</span>
                </a>
              </div>

              {/* NEXT HOLIDAY UP (Left Column Aside) */}
              <aside className="hero-tracker" id="world" aria-label="Next holiday tracker">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">NEXT HOLIDAY UP</span>
                    <strong>Sunday, 8 Nov 2026</strong>
                  </div>
                  <span className="hero-tracker-live">
                    <i></i> Live calendar view
                  </span>
                </div>
                <div className="hero-tracker-next-grid">
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Global</span>
                    <span className="next-card-name">Diwali</span>
                    <span className="next-card-date">8 Nov · 10+ countries</span>
                  </div>
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">Regional</span>
                    <span className="next-card-name">Lakshmi Puja</span>
                    <span className="next-card-date">India · 46 days away</span>
                  </div>
                </div>
                <Link className="hero-tracker-link" href="/date-intelligence">
                  See what this date means <span>→</span>
                </Link>
              </aside>

              <div className="hero-trust">
                <span><b>100</b> countries tracked</span>
                <span className="sep">·</span>
                <span>live feeds where available</span>
                <span className="sep">·</span>
                <span>evidence shown where available</span>
              </div>
            </div>

            {/* RIGHT: TRACKER */}
            <div className="home-hero-tracker">
              <div className="tracker-card">
                <div className="tracker-card-header">
                  <div>
                    <span className="tracker-kicker">DATE INTELLIGENCE</span>
                    <h2>Check your dates</h2>
                  </div>
                  <span className="tracker-status">
                    <i></i> Live
                  </span>
                </div>

                <div className="mode-toggle" role="tablist" aria-label="Purpose">
                  {['travel', 'study', 'workforce'].map((p) => (
                    <button 
                      key={p}
                      onClick={() => setQuery({...query, purpose: p as any})}
                      className={cn(query.purpose === p && "active")}
                      type="button"
                    >
                      {p === 'workforce' ? 'Business' : p}
                    </button>
                  ))}
                </div>

                <div className="tracker-fields">
                  <div className="tracker-field">
                    <label htmlFor="country-select">Destination / jurisdiction</label>
                    <select 
                      id="country-select"
                      value={query.destination}
                      onChange={(e) => setQuery({...query, destination: e.target.value})}
                    >
                      <option value="IN">India</option>
                      <option value="JP">Japan</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>

                  <div className="tracker-date-grid">
                    <div className="tracker-field">
                      <label htmlFor="start-date">From</label>
                      <input 
                        id="start-date" 
                        type="date" 
                        value={query.startDate}
                        onChange={(e) => setQuery({...query, startDate: e.target.value})}
                      />
                    </div>
                    <div className="tracker-field">
                      <label htmlFor="end-date">To</label>
                      <input 
                        id="end-date" 
                        type="date" 
                        value={query.endDate}
                        onChange={(e) => setQuery({...query, endDate: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="tracker-range">
                    {[7, 30, 90].map(days => (
                      <button
                        key={days}
                        className={cn("range-chip", (query.endDate === localDateStr(new Date(new Date(query.startDate).getTime() + days * 86400000))) && "active")}
                        type="button"
                        onClick={() => {
                          const start = new Date(query.startDate);
                          const end = new Date(start.getTime() + days * 86400000);
                          setQuery({...query, endDate: localDateStr(end)});
                        }}
                      >
                        {days} days
                      </button>
                    ))}
                  </div>
                </div>

                <div className="tracker-summary">
                  <div className="tracker-stat">
                    <strong>{result?.records.length || 0}</strong>
                    <span>dates to keep in mind</span>
                  </div>
                  <div className="tracker-stat">
                    <strong>{isSearching ? '...' : '1'}</strong>
                    <span>days in longest flagged run</span>
                  </div>
                  <div className="tracker-stat">
                    <strong>{isSearching ? '...' : '7'}</strong>
                    <span>days to next one</span>
                  </div>
                </div>

                <div className="tracker-results">
                  {isSearching ? (
                    <div className="flex items-center justify-center h-24">
                      <Loader2 className="animate-spin w-6 h-6 text-primary" />
                    </div>
                  ) : result && result.records.length > 0 ? (
                    <div className="space-y-4">
                      {result.records.map(record => (
                        <OperationalResultCard key={record.id} record={record} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground text-sm">
                      No matching records found for this period.
                    </div>
                  )}
                </div>

                <div className="tracker-footer">
                  <Link href="/date-intelligence">
                    Open Date Intelligence <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
             WORLD TODAY
        ========================================================= */}
        <section className="world-today" id="world-today">
          <div className="wrap">
            <div className="section-intro">
              <div className="eyebrow">WORLD TODAY</div>
              <h2>Dates are not just dates.</h2>
              <p>
                Around the world, a date can mean a public holiday,
                a regional observance, an institutional closure,
                a working-day difference or something entirely
                specific to the purpose of your trip.
              </p>
            </div>

            <div className="world-today-grid">
              <article className="world-today-card world-today-primary">
                <span className="card-label">TODAY</span>
                <h3>Understanding today's calendar</h3>
                <p>See the dates and places that may matter today.</p>
                <Link href="/date-intelligence">
                  Explore today's date <span>→</span>
                </Link>
              </article>

              <article className="world-today-card">
                <span className="card-label">COMING UP</span>
                <h3>Diwali 2026</h3>
                <p>8 November 2026 · India · National</p>
                <Link href="/festivals/diwali">
                  Check the date <span>→</span>
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
             HOW IT WORKS
        ========================================================= */}
        <section className="how-it-works" id="how-it-works">
          <div className="wrap">
            <div className="section-intro">
              <div className="eyebrow">HOW IT WORKS</div>
              <h2>
                See what your dates may mean
                for travel, study or business.
              </h2>
              <p>
                Utsavs brings relevant calendars and deeper institutional
                information together around the date you actually care about.
              </p>
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

        {/* =========================================================
             SPECIALIZED INTELLIGENCE
        ========================================================= */}
        <section className="specialized-intelligence">
          <div className="wrap">
            <div className="specialized-layout">
              <div className="specialized-copy">
                <div className="eyebrow">SPECIALIZED INTELLIGENCE</div>
                <h2>
                  One calendar underneath.
                  Deeper calendars when the
                  job demands it.
                </h2>
                <p>
                  The same date can affect a traveller, market,
                  bank, institution or operation differently.
                  Utsavs keeps those layers distinct and brings
                  the relevant evidence together.
                </p>
                <Link href="/date-intelligence" className="text-link">
                  Explore Date Intelligence <span>→</span>
                </Link>
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

        {/* =========================================================
             API
        ========================================================= */}
        <section className="home-api">
          <div className="wrap home-api-inner">
            <div>
              <div className="eyebrow">FOR SYSTEMS</div>
              <h2>Need to work with the intelligence continuously?</h2>
              <p>
                Use Utsavs through the API for applications,
                workflows and operational systems that need
                calendar and date intelligence at scale.
              </p>
            </div>
            <Link href="/api" className="button button-primary">
              Explore the API <span>→</span>
            </Link>
          </div>
        </section>

        {/* =========================================================
             TRAVEL INSURANCE
        ========================================================= */}
        <section className="home-insurance">
          <div className="wrap home-insurance-inner">
            <div>
              <div className="eyebrow">TRAVEL INSURANCE</div>
              <h2>Plan for what you can predict. Protect against what you can't.</h2>
              <p>
                Explore how travel timing and travel protection
                can work together — whether you are planning
                your own journey or building a travel workflow
                for customers, employees or students.
              </p>
            </div>
            <div className="insurance-actions">
              <Link href="/travel-insurance" className="button button-primary">
                Get in touch with us <span>→</span>
              </Link>
              <Link href="/travel-insurance#partner" className="text-link">
                Partner with us <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
             CLOSING
        ========================================================= */}
        <section className="home-closing">
          <div className="wrap">
            <div className="closing-rule"></div>
            <h2>
              Check the date.
              Understand what it means.
              Then decide what to do next.
            </h2>
            <div className="closing-links">
              <Link href="/date-intelligence">Date Intelligence <span>→</span></Link>
              <Link href="/built-for">Built For <span>→</span></Link>
              <Link href="/api">API <span>→</span></Link>
            </div>
          </div>
        </section>

        {/* =========================================================
             FAQ
        ========================================================= */}
        <section className="home-faq">
          <div className="wrap">
            <div className="section-intro">
              <div className="eyebrow">QUESTIONS</div>
              <h2>A few things worth knowing.</h2>
            </div>

            <div className="faq-list space-y-6">
              {[
                { q: "Does Utsavs tell me whether I should travel?", a: "No. Utsavs shows the dates, evidence and practical implications that may matter to your purpose, so you can make the decision." },
                { q: "Why can the same date mean different things?", a: "A public holiday, regional observance, university calendar or institutional closure can affect places and activities differently. Utsavs keeps those scopes separate." },
                { q: "Are all dates confirmed?", a: "No. Some dates are officially published well in advance; others depend on later announcements, lunar observation or institutional publication. Source and date state are shown where available." },
                { q: "Does Utsavs replace visa or immigration advice?", a: "No. Entry eligibility depends on the traveller's circumstances and the relevant authority. Utsavs provides timing and planning context." },
                { q: "Can I use Utsavs for business or study?", a: "Yes. The same date can be examined for travel, business, study, workforce and operational planning, with deeper institutional information where verified." }
              ].map((item, i) => (
                <details key={i} className="group border-b border-white/10 pb-4">
                  <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-lg">
                    {item.q}
                    <span className="text-muted-foreground group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function localDateStr(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
