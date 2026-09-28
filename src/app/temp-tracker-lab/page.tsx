'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { 
  Globe, 
  MapPin, 
  ShieldCheck, 
  Activity,
  Zap,
  Info
} from "lucide-react";

// --------------------------------------------------------------------------------
// AUTHORITATIVE MOCK DATA (Operational & Purpose Nuance)
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
    meta: "12 JURISDICTIONS · NATIONAL",
    impacts: { govt: 'CLOSED', banks: 'CLOSED', markets: 'ACTIVE' },
    desc: "BANKING: Systemic public closures. Active settlement latency flagged"
  },
  {
    event: "Hong Kong — Mid-Autumn Festival",
    meta: "REGIONAL · PUBLIC HOLIDAY",
    impacts: { govt: 'OPEN', banks: 'CLOSED', markets: 'MODIFIED' },
    desc: "MARKETS: Modified trading session. LOGISTICS: 24h transit delay"
  }
];

// DATA FOR THE PERIOD LIST (Sep 4 - Oct 31, 2026)
const PERIOD_EVENTS = [
  {
    date: "2026-09-04",
    shortDate: "4 Sep",
    name: "Janmashtami",
    meta: "Regional · Maharashtra",
    impacts: { govt: 'CLOSED', banks: 'CLOSED', markets: 'SUSPENDED' },
    advice: {
      traveler: "URBAN: High movement impact in Mumbai/Pune due to Dahi Handi processions.",
      study: "ADMIN: Regional university offices in Maharashtra likely offline for the day.",
      corporate: "BANKING: Regional settlement suspension. Expect transaction latency."
    }
  },
  {
    date: "2026-09-15",
    shortDate: "15 Sep",
    name: "Ganesh Chaturthi",
    meta: "Regional · West India",
    impacts: { govt: 'CLOSED', banks: 'CLOSED', markets: 'CLOSED' },
    advice: {
      traveler: "TRANSPORT: Heavy road closures in Mumbai. Mandatory urban travel buffer required.",
      study: "ADMISSIONS: Verification centers and campus services closed across the region.",
      corporate: "OPERATIONS: Full state-level commercial shutdown. Logistics pipelines offline."
    }
  },
  {
    date: "2026-10-02",
    shortDate: "2 Oct",
    name: "Gandhi Jayanti",
    meta: "National · India",
    impacts: { govt: 'CLOSED', banks: 'CLOSED', markets: 'CLOSED' },
    advice: {
      traveler: "URBAN: Major public sector closure. No access to government-facing services.",
      study: "ADMIN: National holiday. All institutional and administrative offices closed.",
      corporate: "SETTLEMENT: National banking suspension. RTGS and NEFT systems offline."
    }
  }
];

const REGIONAL_ROUNDUP_MAP: Record<string, any[]> = {
  IN: [
    { region: "Maharashtra", event: "Janmashtami", intel: "URBAN: High movement impact in Mumbai/Pune. BANKS: Mandatory regional closures" },
    { region: "Uttar Pradesh", event: "Krishna Janmashtami", intel: "ADMIN: Partial public sector holiday. BANKS: Regular operational status" }
  ],
  JP: [
    { region: "Tokyo", event: "Respect for the Aged", intel: "MARKETS: JPX session suspended. BANKS: BoJ systems offline" }
  ],
  US: [
    { region: "Federal", event: "Labor Day", intel: "MARKETS: NYSE/NASDAQ suspended. GOVT: Federal offices closed" }
  ]
};

// --------------------------------------------------------------------------------
// SUB-COMPONENTS
// --------------------------------------------------------------------------------

const StatusStrip = ({ label, status }: { label: string, status: string }) => (
  <div className="flex items-center gap-1.5 px-2 py-0.5 border border-white/10 bg-white/5 rounded-sm">
    <span className="text-[8px] font-bold text-muted-dim uppercase tracking-widest">{label}:</span>
    <span className={cn(
      "text-[8px] font-extrabold uppercase tracking-widest", 
      status === 'CLOSED' || status === 'SUSPENDED' ? "text-red-400" : status === 'MODIFIED' ? "text-yellow-400" : "text-green-400"
    )}>{status}</span>
  </div>
);

// --------------------------------------------------------------------------------
// MAIN LAB COMPONENT
// --------------------------------------------------------------------------------

export default function TempTrackerLabPage() {
  const [country, setCountry] = useState('IN');
  const [mode, setMode] = useState<'traveler' | 'study' | 'corporate'>('traveler');
  
  const regionalRoundup = REGIONAL_ROUNDUP_MAP[country] || [];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="pb-40">
        <section className="hero">
          <div className="wrap hero-grid">
            
            <div className="hero-copy text-left">
              <h1 className="headline md:max-w-none max-w-[320px]">
                Know before you fly. <br className="md:hidden" />
                Know before you schedule.
              </h1>
              <p className="sub hidden md:block">Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.</p>

              {/* LEFT SIDEBAR: Global Status */}
              <aside className="hero-tracker md:order-last">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">TODAY</span>
                    <strong className="text-[15.5px] font-headline">Friday, 4 September 2026</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> Intelligence view</span>
                </div>

                <div className="hero-tracker-next-grid text-left">
                  <div className="bg-white/[0.01]">
                    <div className="px-[18px] pt-4 pb-1 flex items-center justify-between border-l-2 border-[#4FD1C5]">
                      <span className="next-card-kicker flex items-center gap-1.5 !text-[#4FD1C5]">
                        <Globe className="w-2.5 h-2.5" /> GLOBAL STATUS
                      </span>
                    </div>
                    <div className="space-y-4 pb-4">
                      {GLOBAL_INTEL.map((item, idx) => (
                        <div key={idx} className={cn("px-[18px] py-1.5", idx > 0 && "border-t border-white/5 pt-3")}>
                          <span className="next-card-name text-[14.5px] font-bold">{item.event}</span>
                          <span className="next-card-date text-[10px] text-[#4FD1C5] mb-2 block font-bold uppercase tracking-wider">{item.meta}</span>
                          <div className="flex flex-wrap gap-1.5 mb-2">
                             <StatusStrip label="GOVT" status={item.impacts.govt} />
                             <StatusStrip label="BANKS" status={item.impacts.banks} />
                             <StatusStrip label="MKTS" status={item.impacts.markets} />
                          </div>
                          <p className="text-[12.5px] text-[#9AA1C0] leading-snug font-medium">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

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
                <a className="hero-tracker-link text-left" href="/date-intelligence">VIEW TODAY'S FULL INTELLIGENCE <span>→</span></a>
              </aside>
            </div>

            {/* TRIP CHECKER (Right Box) */}
            <div className="checker text-left" style={{ order: 1 }}>
              <div className="checker-top">
                <h3 className="font-headline text-[18px]">Trip impact checker</h3>
                <div className="flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-green-500">Active Engine</span>
                </div>
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
                    <option value="IN">India</option>
                    <option value="JP">Japan</option>
                    <option value="US">United States</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
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
                  <div><b className="font-headline text-[28px] text-[#F0C888]">3</b><span className="text-[11.5px] text-muted-dim block leading-tight">period flags</span></div>
                  <div><b className="font-headline text-[28px] text-[#F0C888]">2</b><span className="text-[11.5px] text-muted-dim block leading-tight">max run</span></div>
                  <div><b className="font-headline text-[28px] text-[#F0C888]">0</b><span className="text-[11.5px] text-muted-dim block leading-tight">days to next</span></div>
                </div>

                <div className="checker-brief text-xs leading-relaxed text-[#9AA1C0]">
                   <strong className="text-gold-soft font-bold uppercase tracking-widest text-[9px] mr-2">IN SHORT:</strong>
                   3 dates in your selected period are worth keeping in mind. The details below show what is happening on each date.
                </div>

                {/* TRIP SPECIFIC LIST (The Fix: Show all dates) */}
                <div className="checker-list mt-2 space-y-4 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
                   {PERIOD_EVENTS.map((event) => (
                     <div key={event.date} className="p-5 border border-white/5 rounded-xl bg-white/[0.02] space-y-3">
                        <div className="flex justify-between items-start">
                           <div className="space-y-0.5">
                              <h4 className="font-bold text-[14.5px]">{event.name}</h4>
                              <p className="text-[10px] text-muted-dim uppercase font-bold">{event.shortDate} · {event.meta}</p>
                           </div>
                           <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest">Verified</span>
                        </div>
                        
                        {/* General Operational Baseline */}
                        <div className="flex flex-wrap gap-2">
                          <StatusStrip label="GOVT" status={event.impacts.govt} />
                          <StatusStrip label="BANKS" status={event.impacts.banks} />
                          <StatusStrip label="MKTS" status={event.impacts.markets} />
                        </div>
                        
                        {/* Purpose Nuance Line (The chosen feature) */}
                        <p className="text-[12.5px] text-[#F4F1E8] font-medium leading-snug border-l border-[#E8A33D]/40 pl-3 py-1">
                           {event.advice[mode]}
                        </p>
                     </div>
                   ))}
                </div>

                {/* ADVISORY: Bottom of box for today's context */}
                <div className="p-5 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-xl space-y-4 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between border-b border-[#E8A33D]/10 pb-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#E8A33D] flex items-center gap-1.5">
                      <Activity className="w-3 h-3" /> DESTINATION ADVISORY · {country}
                    </span>
                    <span className="text-[8px] font-bold text-[#E8A33D]/40 uppercase tracking-widest">Today's Nuance</span>
                  </div>
                  <div className="space-y-4">
                    {regionalRoundup.length > 0 ? regionalRoundup.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between">
                           <span className="text-[13.5px] font-bold">{item.event}</span>
                           <span className="text-[9px] font-mono text-muted-dim uppercase">{item.region}</span>
                        </div>
                        <p className="text-[12px] leading-snug text-[#9AA1C0] font-medium">
                          {item.intel}
                        </p>
                      </div>
                    )) : (
                      <p className="text-[12px] italic text-muted-dim">Standard national rules apply today for this destination.</p>
                    )}
                  </div>
                  <div className="pt-2 border-t border-[#E8A33D]/10 flex items-center justify-between">
                     <span className="text-[8.5px] font-bold uppercase tracking-widest text-[#9AA1C0]">Trip-specific intelligence. Synced with selection.</span>
                     <ShieldCheck className="w-3 h-3 text-green-500/40" />
                  </div>
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

