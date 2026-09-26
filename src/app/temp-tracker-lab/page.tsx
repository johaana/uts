
'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { 
  RefreshCw,
  Search
} from "lucide-react";
import { format, startOfToday } from 'date-fns';

// --------------------------------------------------------------------------------
// AUTHORITATIVE MOCK DATA
// --------------------------------------------------------------------------------

const MARQUEE_DATA = [
  { c: 'India', e: 'Janmashtami, Dahi Handi' },
  { c: 'Japan', e: 'Respect for the Aged Day' },
  { c: 'Mexico', e: 'Independence Day' },
  { c: 'USA', e: 'Labor Day' },
  { c: 'Singapore', e: 'Deepavali Season' }
];

const GLOBAL_INTEL = {
  event: "Indonesia — Maulid Nabi",
  meta: "Today · 12 jurisdictions affected · National Holiday",
  desc: "Significant public sector closures across Southeast Asia. Global settlement systems remain active with regional latency flagged."
};

const REGIONAL_INTEL_MAP: Record<string, any> = {
  IN: {
    country: "INDIA",
    region: "Maharashtra",
    event: "Ganesh Chaturthi",
    intel: "Mandatory closures for public sector and banking. High urban movement impact flagged in Mumbai/Pune due to public processions."
  },
  JP: {
    country: "JAPAN",
    region: "Tokyo",
    event: "Respect for the Aged Day",
    intel: "JPX (Stock Exchange) and BoJ systems suspended. Standard logistics delays expected across all prefectures."
  },
  US: {
    country: "UNITED STATES",
    region: "Federal",
    event: "Labor Day",
    intel: "NYSE/NASDAQ sessions suspended. USPS and Federal offices closed. Transit operates on holiday schedule."
  },
  SG: {
    country: "SINGAPORE",
    region: "Little India",
    event: "Deepavali Season",
    intel: "Extended trading hours in Little India district. No national commercial shutdown indicated for this date."
  },
};

const COUNTRY_OPTIONS = [
  { code: 'IN', name: 'India' },
  { code: 'JP', name: 'Japan' },
  { code: 'US', name: 'United States' },
  { code: 'SG', name: 'Singapore' },
  { code: 'FR', name: 'France (No Regional Impact)' }
];

// --------------------------------------------------------------------------------
// COMPONENT
// --------------------------------------------------------------------------------

export default function TempTrackerLabPage() {
  const [country, setCountry] = useState('IN');
  const [todayFull, setTodayFull] = useState('Friday, 4 September 2026');
  const [isComparing, setIsComparing] = useState(false);
  const [mode, setMode] = useState('traveler');
  
  useEffect(() => {
    // Force a specific prototype date for the lab view
    // In production this would be startOfToday()
  }, []);

  const regionalIntel = REGIONAL_INTEL_MAP[country];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main>
        {/* EXACT HERO REPLICA SECTION */}
        <section className="hero">
          <div className="wrap hero-grid">
            
            {/* LEFT COLUMN: REPLICA COPY & TRACKER */}
            <div className="hero-copy text-left">
              <h1 className="headline md:max-w-none max-w-[320px]">
                Know before you fly. <br className="md:hidden" />
                Know before you schedule.
              </h1>
              <p className="sub hidden md:block">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              {/* THE TRACKER (INTEGRATED V5 STYLE) */}
              <aside className="hero-tracker md:order-last">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">TODAY</span>
                    <strong className="text-[15.5px] font-headline">{todayFull}</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> Intelligence view</span>
                </div>

                <div className="hero-tracker-next-grid text-left">
                  {/* GLOBAL STATUS CARD */}
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker">AROUND THE GLOBE</span>
                    <span className="next-card-name text-[15px] mt-1">{GLOBAL_INTEL.event}</span>
                    <span className="next-card-date text-[10.5px] opacity-60 mb-2 block">{GLOBAL_INTEL.meta}</span>
                    <p className="text-[13px] text-muted leading-relaxed font-medium">
                        {GLOBAL_INTEL.desc}
                    </p>
                  </div>

                  {/* REGIONAL INTEL NOTE (INTEGRATED V5 STYLE) */}
                  <div className="hero-tracker-next-card border-t border-white/10 bg-white/[0.01]">
                     <div className="flex justify-between items-center mb-1">
                        <span className="next-card-kicker !text-[#E8A33D] uppercase tracking-widest">REGIONAL INTEL · {regionalIntel?.country || 'NA'}</span>
                     </div>
                     
                     {regionalIntel ? (
                       <div className="space-y-1">
                          <span className="next-card-name !text-[15px] block">
                            {regionalIntel.event} · {regionalIntel.region}
                          </span>
                          <span className="next-card-date text-[13px] leading-relaxed text-muted block font-medium">
                              {regionalIntel.intel}
                          </span>
                       </div>
                     ) : (
                       <div className="py-2">
                          <span className="next-card-date italic text-muted-dim font-medium text-[13px]">No regional variants identified for this date. National rules apply.</span>
                       </div>
                     )}

                     <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 opacity-50">
                        <RefreshCw className="w-3 h-3 text-[#E8A33D]" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">Linked to checker selection</span>
                     </div>
                  </div>
                </div>

                {/* NO-DATE MARQUEE */}
                <div className="hero-tracker-feed">
                  <div className="marquee">
                    <div className="marquee-track">
                      {MARQUEE_DATA.concat(MARQUEE_DATA).map((item, i) => (
                        <span key={i} className="chip">
                          <b>{item.c}</b> — {item.e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a className="hero-tracker-link text-left" href="/date-intelligence">
                  VIEW TODAY'S FULL INTELLIGENCE <span>→</span>
                </a>
              </aside>
            </div>

            {/* RIGHT COLUMN: THE CHECKER REPLICA */}
            <div className="checker text-left" style={{ order: 1 }}>
              <div className="checker-top">
                <h3 className="font-headline text-[18px]">Trip impact checker</h3>
                <button type="button" className="compare-launch" onClick={() => setIsComparing(!isComparing)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3 4 7l4 4M4 7h13M16 21l4-4-4-4M20 17H7"/>
                  </svg>
                  <span className="text-[11px] font-bold uppercase tracking-widest">{isComparing ? 'Single view' : 'Compare countries'}</span>
                </button>
              </div>

              <div className="mode-toggle">
                <button type="button" className={cn(mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button type="button" className={cn(mode === 'study' && "active")} onClick={() => setMode('study')}>Study abroad</button>
                <button type="button" className={cn(mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business travel</button>
              </div>

              <div className="space-y-4">
                <div className="checker-field">
                  <label className="text-[10.5px] font-mono uppercase tracking-widest">Destination / Jurisdiction</label>
                  <select value={country} onChange={e => setCountry(e.target.value)} className="bg-[#1E2650] border border-white/10 rounded-lg p-2.5 text-sm">
                    {COUNTRY_OPTIONS.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
                <div className="checker-row date-row">
                  <div className="checker-field">
                    <label className="text-[10.5px] font-mono uppercase tracking-widest">From</label>
                    <input type="date" defaultValue="2026-09-04" className="bg-[#1E2650] border border-white/10 rounded-lg p-2.5 text-sm" />
                  </div>
                  <div className="checker-field">
                    <label className="text-[10.5px] font-mono uppercase tracking-widest">To</label>
                    <input type="date" defaultValue="2026-10-31" className="bg-[#1E2650] border border-white/10 rounded-lg p-2.5 text-sm" />
                  </div>
                </div>
                
                <div className="checker-summary py-4 border-b border-white/10 flex gap-4 text-left">
                  <div><b className="font-headline text-[28px] text-[#F0C888]">3</b><span className="text-[11.5px] text-muted-dim block leading-tight">dates to keep in mind</span></div>
                  <div><b className="font-headline text-[28px] text-[#F0C888]">2</b><span className="text-[11.5px] text-muted-dim block leading-tight">days in longest flagged run</span></div>
                  <div><b className="font-headline text-[28px] text-[#F0C888]">0</b><span className="text-[11.5px] text-muted-dim block leading-tight">days to next one</span></div>
                </div>

                <div className="checker-brief text-[13px] leading-relaxed text-muted pt-2">
                  <strong>IN SHORT:</strong> 3 dates in your selected period are worth keeping in mind. The details below show what is happening on each date.
                </div>

                <div className="checker-list">
                   <p className="text-[12px] text-muted-dim italic text-center py-10 border border-dashed border-white/10 rounded-xl mt-4">
                      Individual record detail available on production home page.
                   </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* REPLICA FOOTER SECTIONS */}
        <section className="wrap py-24 border-t border-white/5">
           <div className="section-head text-left max-w-3xl">
              <div className="kicker">★ Global Intelligence</div>
              <h2 className="section-title">Verified facts for cross-border planning.</h2>
              <p className="text-lg text-muted">Reconciling public calendars with institutional closures and regional rules for zero-AI reliability.</p>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
