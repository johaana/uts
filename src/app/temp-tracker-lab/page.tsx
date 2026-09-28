
'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { 
  RefreshCw,
  Globe,
  MapPin,
  AlertCircle,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

// --------------------------------------------------------------------------------
// AUTHORITATIVE MOCK DATA (Impact-First Intelligence)
// --------------------------------------------------------------------------------

const MARQUEE_DATA = [
  { c: 'India', e: 'Janmashtami', d: '4 Sep' },
  { c: 'Japan', e: 'Respect for Aged', d: '21 Sep' },
  { c: 'Mexico', e: 'Indep. Day', d: '16 Sep' },
  { c: 'USA', e: 'Labor Day', d: '7 Sep' },
  { c: 'Singapore', e: 'Deepavali', d: '8 Nov' }
];

const GLOBAL_INTEL = [
  {
    event: "Indonesia — Maulid Nabi",
    meta: "12 JURISDICTIONS · NATIONAL HOLIDAY",
    desc: "BANKING: Systemic public closures. Active settlement latency flagged for regional corridors."
  },
  {
    event: "Hong Kong — Mid-Autumn Festival",
    meta: "REGIONAL · PUBLIC HOLIDAY",
    desc: "MARKETS: Modified trading session. LOGISTICS: Standard port flow; extended transit schedules."
  }
];

const REGIONAL_INTEL_MAP: Record<string, any> = {
  IN: {
    country: "INDIA",
    region: "Maharashtra",
    event: "Janmashtami / Dahi Handi",
    intel: "URBAN: High density movement impact in Mumbai/Pune. BANKING: Mandatory regional closures."
  },
  JP: {
    country: "JAPAN",
    region: "Tokyo",
    event: "Respect for the Aged Day",
    intel: "MARKETS: JPX session suspended. BANKING: BoJ systems offline. LOGISTICS: 24h delay expected."
  },
  US: {
    country: "UNITED STATES",
    region: "Federal",
    event: "Labor Day",
    intel: "MARKETS: NYSE/NASDAQ suspended. GOVT: Federal offices closed. LOGISTICS: Sunday schedule."
  },
  SG: {
    country: "SINGAPORE",
    region: "Little India",
    event: "Deepavali Season",
    intel: "RETAIL: Extended trading in Little India. No national commercial shutdown indicated for this date."
  },
};

const HEADER_OPTIONS = [
  "JURISDICTIONAL RULES",
  "REGIONAL NUANCE",
  "LOCAL IMPACT",
  "SELECTION INSIGHT",
  "DESTINATION ADVISORY"
];

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
  const [headerIndex, setHeaderIndex] = useState(0);
  const [isComparing, setIsComparing] = useState(false);
  const [mode, setMode] = useState('traveler');
  
  const regionalIntel = REGIONAL_INTEL_MAP[country];
  const activeHeader = HEADER_OPTIONS[headerIndex];

  const cycleHeader = () => {
    setHeaderIndex((prev) => (prev + 1) % HEADER_OPTIONS.length);
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main>
        {/* LAB CONTROLS (Floating) */}
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-[#1E2650] border border-white/20 p-4 rounded-2xl shadow-2xl">
          <div className="flex flex-col gap-1">
             <span className="text-[9px] font-bold uppercase tracking-widest text-[#4FD1C5]">Header Lab</span>
             <button onClick={cycleHeader} className="flex items-center gap-2 bg-[#171D3A] hover:bg-[#252D5A] px-4 py-2 rounded-lg text-xs font-bold transition-all border border-white/10">
                <RefreshCw className="w-3 h-3 text-[#E8A33D]" />
                Switch Header: {activeHeader}
             </button>
          </div>
        </div>

        {/* HERO REPLICA */}
        <section className="hero">
          <div className="wrap hero-grid">
            
            <div className="hero-copy text-left">
              <h1 className="headline md:max-w-none max-w-[320px]">
                Know before you fly. <br className="md:hidden" />
                Know before you schedule.
              </h1>
              <p className="sub hidden md:block">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              {/* TRACKER REPLICA */}
              <aside className="hero-tracker md:order-last">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">TODAY</span>
                    <strong className="text-[15.5px] font-headline">Friday, 4 September 2026</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> Intelligence view</span>
                </div>

                <div className="hero-tracker-next-grid text-left">
                  {/* GLOBAL STATUS (Teal Anchor) */}
                  <div className="bg-white/[0.01]">
                    <div className="px-[18px] pt-4 pb-1 flex items-center justify-between border-l-2 border-[#4FD1C5]">
                      <span className="next-card-kicker flex items-center gap-1.5 !text-[#4FD1C5]">
                        <Globe className="w-2.5 h-2.5" /> AROUND THE GLOBE
                      </span>
                      <span className="text-[8px] font-bold text-[#4FD1C5]/40 uppercase tracking-widest">General Impact</span>
                    </div>
                    
                    <div className="space-y-4 pb-4">
                      {GLOBAL_INTEL.map((item, idx) => (
                        <div key={idx} className={cn("px-[18px] py-1.5", idx > 0 && "border-t border-white/5 pt-3")}>
                          <span className="next-card-name text-[14.5px] font-bold">{item.event}</span>
                          <span className="next-card-date text-[10px] text-[#4FD1C5] mb-1 block font-bold uppercase tracking-wider">{item.meta}</span>
                          <p className="text-[12px] text-[#9AA1C0] leading-tight font-medium max-w-[360px]">
                              {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* REGIONAL INTEL (Gold Anchor) */}
                  <div className="hero-tracker-next-card border-t border-white/10 bg-[#E8A33D]/[0.01] py-5 relative">
                     <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E8A33D]"></div>
                     
                     <div className="px-1 flex items-center justify-between mb-3">
                        <span className="next-card-kicker !text-[#E8A33D] uppercase tracking-widest flex items-center gap-1.5">
                           <MapPin className="w-2.5 h-2.5" /> {activeHeader} · {regionalIntel?.country || 'NA'}
                        </span>
                        {regionalIntel && <span className="text-[8px] font-bold text-[#E8A33D] border border-[#E8A33D]/40 px-1.5 py-0.5 rounded-sm uppercase tracking-widest">Live Nuance</span>}
                     </div>
                     
                     {regionalIntel ? (
                       <div className="space-y-1 px-1">
                          <span className="next-card-name !text-[14.5px] block font-bold">
                            {regionalIntel.event} · {regionalIntel.region}
                          </span>
                          <p className="text-[12px] leading-tight text-[#9AA1C0] block font-medium max-w-[360px]">
                              {regionalIntel.intel}
                          </p>
                       </div>
                     ) : (
                       <div className="py-2 px-1">
                          <span className="next-card-date italic text-[#6E7495] font-medium text-[12px] flex items-center gap-2">
                             <AlertCircle className="w-3.5 h-3.5 opacity-50" /> No regional variants identified. National rules apply.
                          </span>
                       </div>
                     )}

                     {/* COMPACT FOOTER */}
                     <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between px-1">
                        <div className="flex items-center gap-2">
                           <RefreshCw className="w-2.5 h-2.5 text-[#E8A33D]" />
                           <span className="text-[8.5px] font-bold uppercase tracking-widest text-[#9AA1C0]">
                              Jurisdictional context. Synced with selection.
                           </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                           <span className="text-[8px] font-bold text-green-500/60 uppercase">Verified</span>
                           <ShieldCheck className="w-3 h-3 text-green-500/40" />
                        </div>
                     </div>
                  </div>
                </div>

                {/* MARQUEE TRACK (Dates Restored) */}
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

            {/* TRIP CHECKER REPLICA */}
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

                <div className="checker-list mt-4">
                   <p className="text-[12px] text-muted-dim italic text-center py-10 border border-dashed border-white/10 rounded-xl">
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
