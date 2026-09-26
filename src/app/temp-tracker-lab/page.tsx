
'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { 
  RefreshCw,
  Search,
  ShieldCheck
} from "lucide-react";
import { format, startOfToday } from 'date-fns';

// --------------------------------------------------------------------------------
// AUTHORITATIVE MOCK DATA
// --------------------------------------------------------------------------------

const MARQUEE_DATA = [
  { c: 'India', e: 'Janmashtami', d: '4 Sep' },
  { c: 'Japan', e: 'Respect for Aged', d: '21 Sep' },
  { c: 'Mexico', e: 'Indep. Day', d: '16 Sep' },
  { c: 'USA', e: 'Labor Day', d: '7 Sep' },
  { c: 'Singapore', e: 'Deepavali', d: '8 Nov' }
];

const GLOBAL_INTEL = {
  event: "Indonesia — Maulid Nabi",
  meta: "4 Sep · 12 countries · National Holiday",
  desc: "Significant public sector closures across SE Asia. Global settlement systems active; regional latency flagged."
};

const REGIONAL_INTEL_MAP: Record<string, any> = {
  IN: {
    country: "INDIA",
    region: "Maharashtra",
    event: "Ganesh Chaturthi",
    intel: "Mandatory public/bank closures. High urban movement impact in Mumbai/Pune due to public processions."
  },
  JP: {
    country: "JAPAN",
    region: "Tokyo",
    event: "Respect for the Aged Day",
    intel: "JPX (Stock Exchange) and BoJ systems suspended. Standard logistics delays expected nationwide."
  },
  US: {
    country: "UNITED STATES",
    region: "Federal",
    event: "Labor Day",
    intel: "NYSE/NASDAQ sessions suspended. USPS and Federal offices closed. Transit on holiday schedule."
  },
  SG: {
    country: "SINGAPORE",
    region: "Little India",
    event: "Deepavali Season",
    intel: "Extended trading in Little India district. No national commercial shutdown indicated for this date."
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
  
  const regionalIntel = REGIONAL_INTEL_MAP[country];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main>
        {/* HERO REPLICA */}
        <section className="hero">
          <div className="wrap hero-grid">
            
            <div className="hero-copy text-left">
              <h1 className="headline md:max-w-none max-w-[320px]">
                Know before you fly. <br className="md:hidden" />
                Know before you schedule.
              </h1>
              <p className="sub hidden md:block">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              {/* THE TRACKER */}
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
                    <span className="next-card-kicker flex items-center gap-1.5">
                      <ShieldCheck className="w-2.5 h-2.5" /> AROUND THE GLOBE
                    </span>
                    <span className="next-card-name text-[15px] mt-1">{GLOBAL_INTEL.event}</span>
                    <span className="next-card-date text-[10.5px] opacity-60 mb-2 block">{GLOBAL_INTEL.meta}</span>
                    <p className="text-[12.5px] text-muted leading-snug font-medium max-w-[340px]">
                        {GLOBAL_INTEL.desc}
                    </p>
                  </div>

                  {/* REGIONAL INTEL NOTE (Optimized for Space) */}
                  <div className="hero-tracker-next-card border-t border-white/10 bg-white/[0.01]">
                     <span className="next-card-kicker !text-[#E8A33D] uppercase tracking-widest">REGIONAL INTEL · {regionalIntel?.country || 'NA'}</span>
                     
                     {regionalIntel ? (
                       <div className="space-y-1">
                          <span className="next-card-name !text-[15px] block">
                            {regionalIntel.event} · {regionalIntel.region}
                          </span>
                          <span className="next-card-date text-[12.5px] leading-snug text-muted block font-medium max-w-[340px]">
                              {regionalIntel.intel}
                          </span>
                       </div>
                     ) : (
                       <div className="py-1">
                          <span className="next-card-date italic text-muted-dim font-medium text-[12.5px]">No regional variants identified. National rules apply.</span>
                       </div>
                     )}

                     {/* Compact Wording & Better use of space */}
                     <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 opacity-50">
                        <RefreshCw className="w-2.5 h-2.5 text-[#E8A33D]" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#9AA1C0]">
                          Jurisdiction-specific. Synchronized with selection.
                        </span>
                     </div>
                  </div>
                </div>

                {/* MARQUEE WITH DATES */}
                <div className="hero-tracker-feed">
                  <div className="marquee">
                    <div className="marquee-track">
                      {MARQUEE_DATA.concat(MARQUEE_DATA).map((item, i) => (
                        <span key={i} className="chip">
                          <b>{item.c}</b> — {item.e} · {item.d}
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

            {/* CHECKER REPLICA */}
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
