'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  MapPin,
  RefreshCw,
  Info,
  Globe,
  Search
} from "lucide-react";
import { format, startOfToday } from 'date-fns';

// --------------------------------------------------------------------------------
// AUTHORITATIVE MOCK DATA (Specific Operational Facts)
// --------------------------------------------------------------------------------

const GLOBAL_STATUS_DATA = [
  { code: 'ID', name: 'Indonesia', event: 'Maulid Nabi' },
  { code: 'JP', name: 'Japan', event: 'Respect for the Aged Day' },
  { code: 'MX', name: 'Mexico', event: 'Independence Day' },
  { code: 'US', name: 'USA', event: 'Labor Day' },
  { code: 'SG', name: 'Singapore', event: 'Deepavali Season' }
];

const REGIONAL_INTEL_MAP: Record<string, any> = {
  IN: {
    country: "India",
    region: "Maharashtra",
    event: "Ganesh Chaturthi",
    type: "Religious Holiday",
    intel: "Mandatory closures for public sector and banking. High urban movement impact flagged in Mumbai/Pune due to public processions."
  },
  JP: {
    country: "Japan",
    region: "Tokyo / National",
    event: "Silver Week",
    type: "National Holiday",
    intel: "JPX (Stock Exchange) and BoJ systems suspended. Standard logistics delays expected across all prefectures."
  },
  US: {
    country: "United States",
    region: "Federal",
    event: "Labor Day",
    type: "National Holiday",
    intel: "NYSE/NASDAQ sessions suspended. USPS and Federal offices closed. Transit operates on holiday schedule."
  },
  SG: {
    country: "Singapore",
    region: "Little India",
    event: "Deepavali Season",
    type: "Cultural Note",
    intel: "Extended trading hours in Little India district. No national commercial shutdown indicated for this specific date."
  },
};

const COUNTRY_OPTIONS = [
  { code: 'IN', name: 'India' },
  { code: 'JP', name: 'Japan' },
  { code: 'US', name: 'United States' },
  { code: 'SG', name: 'Singapore' },
  { code: 'FR', name: 'France (Empty State)' }
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
        <section className="hero">
          <div className="wrap hero-grid">
            
            {/* LEFT COLUMN: COPY & TRACKER */}
            <div className="hero-copy text-left">
              <h1 className="headline">
                Know before you fly. <br className="md:hidden" />
                Know before you schedule.
              </h1>
              <p className="sub hidden md:block">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              {/* THE TRACKER (REPLICA) */}
              <aside className="hero-tracker md:order-last" style={{ order: 3 }}>
                <div className="hidden md:block">
                  <div className="hero-tracker-head">
                    <div>
                      <span className="hero-tracker-kicker">TODAY</span>
                      <strong id="hero-tracker-date">{todayFull}</strong>
                    </div>
                    <span className="hero-tracker-live"><i></i> Intelligence view</span>
                  </div>

                  <div className="hero-tracker-next-grid text-left">
                    {/* GLOBAL CARD */}
                    <div className="hero-tracker-next-card">
                      <span className="next-card-kicker">Around the globe</span>
                      <span className="next-card-name" id="pulse-global-name">Indonesia — Maulid Nabi</span>
                      <span className="next-card-date" id="pulse-global-date">
                        Today · 12 countries · National Holiday
                      </span>
                    </div>

                    {/* REGIONAL INTEL (INTEGRATED NOTE) */}
                    <div className="hero-tracker-next-card border-t border-white/5 bg-white/[0.01]">
                       <div className="flex justify-between items-baseline mb-1">
                          <span className="next-card-kicker !text-[#F0C888]">Regional Intel · {COUNTRY_OPTIONS.find(c => c.code === country)?.name}</span>
                          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 rounded border border-white/10">
                            <ShieldCheck className="w-2.5 h-2.5 text-muted-dim" />
                            <span className="text-[8px] font-bold uppercase tracking-widest text-muted-dim">Verified</span>
                          </div>
                       </div>
                       
                       {regionalIntel ? (
                         <div className="space-y-3">
                            <span className="next-card-name text-[15px]">
                              {regionalIntel.event} · {regionalIntel.region}
                            </span>
                            <span className="next-card-date text-[13px] leading-relaxed text-[#9AA1C0] block font-medium">
                              {regionalIntel.intel}
                            </span>
                         </div>
                       ) : (
                         <div className="py-2 flex items-center gap-3">
                            <span className="next-card-date italic text-muted-dim font-medium">No regional variants identified for this date. National rules apply.</span>
                         </div>
                       )}

                       <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 opacity-40">
                          <RefreshCw className="w-3 h-3" />
                          <span className="text-[9px] font-bold uppercase tracking-widest">Linked to checker selection</span>
                       </div>
                    </div>
                  </div>

                  <div className="hero-tracker-feed">
                    <div className="marquee">
                      <div className="marquee-track">
                        {GLOBAL_STATUS_DATA.concat(GLOBAL_STATUS_DATA).map((item, i) => (
                          <span key={i} className="chip">
                            <b>{item.name}</b> — {item.event}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a className="hero-tracker-link hidden md:block text-left" href="#date-intelligence">
                  VIEW TODAY'S INTELLIGENCE <span>→</span>
                </a>
              </aside>
            </div>

            {/* RIGHT COLUMN: THE CHECKER (REPLICA) */}
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
                  <div><b className="font-headline">3</b><span>dates to keep in mind</span></div>
                  <div><b className="font-headline">2</b><span>days in longest flagged run</span></div>
                  <div><b className="font-headline">0</b><span>days to next one</span></div>
                </div>

                <div className="checker-brief">
                  <strong>IN SHORT:</strong> 3 dates in your selected period are worth keeping in mind. The details below show what is happening on each date.
                </div>

                <div className="checker-list">
                   <p className="text-xs text-muted-dim italic text-center py-8 border border-dashed border-white/5 rounded-xl">
                      Record preview available on production home page.
                   </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* REPLICA FOOTER SECTIONS */}
        <section className="wrap py-24 border-t border-white/5">
           <div className="section-head text-left max-w-3xl">
              <div className="kicker">★ Date intelligence</div>
              <h2 className="section-title">One place for the calendar fact.</h2>
              <p>Reconciling public calendars with institutional closures and regional rules for zero-AI reliability.</p>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

