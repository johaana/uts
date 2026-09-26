
'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  RefreshCw,
  Globe,
  MapPin,
  Activity,
  AlertCircle,
  Search
} from "lucide-react";
import { format, startOfToday } from 'date-fns';

// --------------------------------------------------------------------------------
// AUTHORITATIVE MOCK DATA
// --------------------------------------------------------------------------------

const MARQUEE_DATA = [
  { name: 'Indonesia', event: 'Maulid Nabi', impact: 'National Closure' },
  { name: 'Japan', event: 'Respect for the Aged Day', impact: 'Markets Suspended' },
  { name: 'Mexico', event: 'Independence Day', impact: 'Public Holiday' },
  { name: 'USA', event: 'Labor Day', impact: 'Federal Holiday' },
  { name: 'Singapore', event: 'Deepavali Season', impact: 'Active' }
];

const GLOBAL_INTEL = {
  event: "Indonesia — Maulid Nabi",
  meta: "Today · 12 jurisdictions affected · National Holiday",
  market_status: "MIXED STATUS",
  logistics: "NORMAL",
  summary: "Significant public sector closures across Southeast Asia. Global settlement systems remain active with regional latency flagged."
};

const REGIONAL_INTEL_MAP: Record<string, any> = {
  IN: {
    country: "INDIA",
    region: "Maharashtra",
    event: "Ganesh Chaturthi",
    status: "CLOSED",
    logistics: "MODIFIED",
    intel: "Mandatory closures for public sector and banking. High urban movement impact flagged in Mumbai/Pune due to public processions."
  },
  JP: {
    country: "JAPAN",
    region: "Tokyo",
    event: "Respect for the Aged Day",
    status: "SUSPENDED",
    logistics: "NORMAL",
    intel: "JPX (Stock Exchange) and BoJ systems suspended. Standard logistics delays expected across all prefectures."
  },
  US: {
    country: "UNITED STATES",
    region: "Federal",
    event: "Labor Day",
    status: "OFFLINE",
    logistics: "DELAYED",
    intel: "NYSE/NASDAQ sessions suspended. USPS and Federal offices closed. Transit operates on holiday schedule."
  },
  SG: {
    country: "SINGAPORE",
    region: "Little India",
    event: "Deepavali Season",
    status: "ACTIVE",
    logistics: "NORMAL",
    intel: "Extended trading hours in Little India district. No national commercial shutdown indicated for this specific date."
  },
};

const COUNTRY_OPTIONS = [
  { code: 'IN', name: 'India' },
  { code: 'JP', name: 'Japan' },
  { code: 'US', name: 'United States' },
  { code: 'SG', name: 'Singapore' },
  { code: 'FR', name: 'France (No Impact)' }
];

// --------------------------------------------------------------------------------
// COMPONENT
// --------------------------------------------------------------------------------

export default function TempTrackerLabPage() {
  const [country, setCountry] = useState('IN');
  const [todayFull, setTodayFull] = useState('');
  const [isComparing, setIsComparing] = useState(false);
  const [mode, setMode] = useState('traveler');
  
  useEffect(() => {
    const today = startOfToday();
    setTodayFull(format(today, 'EEEE, d MMMM yyyy'));
  }, []);

  const regionalIntel = REGIONAL_INTEL_MAP[country];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main>
        {/* EXACT HERO REPLICA */}
        <section className="hero py-12 md:py-16">
          <div className="wrap hero-grid">
            
            {/* LEFT COLUMN: REPLICA COPY & TRACKER */}
            <div className="hero-copy text-left">
              <h1 className="headline md:max-w-none max-w-[320px]">
                Know before you fly. <br className="md:hidden" />
                Know before you schedule.
              </h1>
              <p className="sub hidden md:block">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              {/* THE TRACKER (INTELLIGENCE FEED) */}
              <aside className="hero-tracker md:order-last">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">TODAY</span>
                    <strong className="text-[15.5px]">{todayFull}</strong>
                  </div>
                  <span className="hero-tracker-live">
                    <i className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] shadow-[0_0_8px_rgba(79,209,197,0.65)]"></i> 
                    Intelligence view
                  </span>
                </div>

                <div className="hero-tracker-next-grid text-left">
                  {/* GLOBAL INTELLIGENCE BLOCK */}
                  <div className="hero-tracker-next-card">
                    <span className="next-card-kicker !text-[#4FD1C5]">AROUND THE GLOBE</span>
                    <span className="next-card-name text-[18px] mt-1">{GLOBAL_INTEL.event}</span>
                    <span className="next-card-date text-[12px] opacity-60 mb-4 block">{GLOBAL_INTEL.meta}</span>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="flex flex-col gap-0.5">
                           <span className="text-[9px] font-mono text-muted-dim uppercase tracking-widest">Global Markets</span>
                           <span className="text-[11px] font-bold text-[#F0C888]">{GLOBAL_INTEL.market_status}</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                           <span className="text-[9px] font-mono text-muted-dim uppercase tracking-widest">Global Logistics</span>
                           <span className="text-[11px] font-bold text-paper">{GLOBAL_INTEL.logistics}</span>
                        </div>
                    </div>
                    <p className="text-[13px] text-muted leading-relaxed font-medium">
                        {GLOBAL_INTEL.summary}
                    </p>
                  </div>

                  {/* REGIONAL INTELLIGENCE BLOCK (INTEGRATED NOTE) */}
                  <div className="hero-tracker-next-card border-t border-white/10 bg-white/[0.01]">
                     <div className="flex justify-between items-center mb-3">
                        <span className="next-card-kicker !text-[#E8A33D] uppercase tracking-widest">REGIONAL INTEL · {regionalIntel?.country || 'NA'}</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#4FD1C5] bg-[#4FD1C5]/10 px-2 py-0.5 rounded border border-[#4FD1C5]/20">Verified</span>
                     </div>
                     
                     {regionalIntel ? (
                       <div className="space-y-4">
                          <span className="next-card-name !text-[16px] block">
                            {regionalIntel.event} · {regionalIntel.region}
                          </span>
                          <div className="grid grid-cols-2 gap-4 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                              <div className="flex flex-col gap-0.5">
                                 <span className="text-[9px] font-mono text-muted-dim uppercase tracking-widest">Market Status</span>
                                 <span className="text-[11px] font-bold text-paper">{regionalIntel.status}</span>
                              </div>
                              <div className="flex flex-col gap-0.5">
                                 <span className="text-[9px] font-mono text-muted-dim uppercase tracking-widest">Logistics</span>
                                 <span className="text-[11px] font-bold text-[#E8A33D]">{regionalIntel.logistics}</span>
                              </div>
                          </div>
                          <span className="next-card-date text-[13px] leading-relaxed text-muted block font-medium">
                              {regionalIntel.intel}
                          </span>
                       </div>
                     ) : (
                       <div className="py-2">
                          <span className="next-card-date italic text-muted-dim font-medium">No regional variants identified for this date. National rules apply.</span>
                       </div>
                     )}

                     <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between opacity-50">
                        <div className="flex items-center gap-2">
                          <RefreshCw className="w-3 h-3 text-[#E8A33D]" />
                          <span className="text-[9px] font-bold uppercase tracking-widest">Linked to checker selection</span>
                        </div>
                        <span className="text-[9px] font-mono text-muted-dim uppercase">Engine v3.1</span>
                     </div>
                  </div>
                </div>

                {/* NO-DATE MARQUEE */}
                <div className="hero-tracker-feed">
                  <div className="marquee">
                    <div className="marquee-track">
                      {MARQUEE_DATA.concat(MARQUEE_DATA).map((item, i) => (
                        <span key={i} className="chip">
                          <b>{item.name}</b> — {item.event} · <span className="text-[10px] uppercase opacity-60 font-bold">{item.impact}</span>
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
                <h3>Trip impact checker</h3>
                <button type="button" className="compare-launch" onClick={() => setIsComparing(!isComparing)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3 4 7l4 4M4 7h13M16 21l4-4-4-4M20 17H7"/>
                  </svg>
                  <span>{isComparing ? 'Single view' : 'Compare countries'}</span>
                </button>
              </div>

              <div className="mode-toggle">
                <button type="button" className={cn(mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button type="button" className={cn(mode === 'study' && "active")} onClick={() => setMode('study')}>Study abroad</button>
                <button type="button" className={cn(mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business travel</button>
              </div>

              <div className="space-y-4">
                <div className="checker-field">
                  <label>Destination / Jurisdiction</label>
                  <select value={country} onChange={e => setCountry(e.target.value)}>
                    {COUNTRY_OPTIONS.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
                <div className="checker-row date-row">
                  <div className="checker-field">
                    <label>From</label>
                    <input type="date" defaultValue="2026-09-04" />
                  </div>
                  <div className="checker-field">
                    <label>To</label>
                    <input type="date" defaultValue="2026-10-31" />
                  </div>
                </div>
                
                <div className="checker-summary">
                  <div><b className="font-headline text-[28px]">3</b><span>dates to keep in mind</span></div>
                  <div><b className="font-headline text-[28px]">2</b><span>days in longest flagged run</span></div>
                  <div><b className="font-headline text-[28px]">0</b><span>days to next one</span></div>
                </div>

                <div className="checker-brief text-[13px] leading-relaxed">
                  <strong>IN SHORT:</strong> 3 dates in your selected period are worth keeping in mind. The details below show what is happening on each date.
                </div>

                <div className="checker-list">
                   <p className="text-[12px] text-muted-dim italic text-center py-8 border border-dashed border-white/10 rounded-xl">
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
