
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
  Info,
  ChevronDown,
  ChevronUp
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
    meta: "12 COUNTRIES: SYSTEMIC PUBLIC CLOSURES",
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
    meta: "REGIONAL OBSERVANCE",
    jurisdiction: "Maharashtra",
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
    meta: "STATE PUBLIC HOLIDAY",
    jurisdiction: "West India",
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
    meta: "NATIONAL PUBLIC HOLIDAY",
    jurisdiction: "National",
    impacts: { govt: 'CLOSED', banks: 'CLOSED', markets: 'CLOSED' },
    advice: {
      traveler: "URBAN: Major public sector closure. No access to government-facing services.",
      study: "ADMIN: National holiday. All institutional and administrative offices closed.",
      corporate: "SETTLEMENT: National banking suspension. RTGS and NEFT systems offline."
    }
  }
];

const REGIONAL_ROUNDUP_INDIA = [
  { region: "Maharashtra", event: "Janmashtami", intel: "URBAN: High movement impact in Mumbai/Pune. BANKS: Mandatory regional closures" },
  { region: "Uttar Pradesh", event: "Krishna Janmashtami", intel: "ADMIN: Partial public sector holiday. BANKS: Regular operational status" }
];

// --------------------------------------------------------------------------------
// SUB-COMPONENTS
// --------------------------------------------------------------------------------

const StatusStrip = ({ label, status, scenario }: { label: string, status: string, scenario: string }) => {
  const isB = scenario === 'B';
  const colorClass = status === 'CLOSED' || status === 'SUSPENDED' 
    ? (isB ? "text-red-400 bg-red-400/10 border-red-400/20" : "text-red-400") 
    : status === 'MODIFIED' 
    ? (isB ? "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" : "text-yellow-400") 
    : (isB ? "text-green-400 bg-green-400/10 border-green-400/20" : "text-green-400");

  return (
    <div className={cn(
      "flex items-center gap-1.5 px-2 py-0.5 border rounded-sm",
      isB ? colorClass : "border-white/10 bg-white/5"
    )}>
      <span className={cn("text-[8px] font-bold uppercase tracking-widest", isB ? "text-paper/80" : "text-muted-dim")}>{label}:</span>
      <span className={cn("text-[8px] font-extrabold uppercase tracking-widest", !isB && colorClass)}>
        {status}
      </span>
    </div>
  );
};

// --------------------------------------------------------------------------------
// MAIN LAB COMPONENT
// --------------------------------------------------------------------------------

export default function TempTrackerLabPage() {
  const [country, setCountry] = useState('IN');
  const [mode, setMode] = useState<'traveler' | 'study' | 'corporate'>('traveler');
  const [scenario, setScenario] = useState<'A' | 'B' | 'C'>('A');
  const [expandedDate, setExpandedDate] = useState<string | null>(null);

  const toggleExpand = (date: string) => {
    setExpandedDate(expandedDate === date ? null : date);
  };

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

              {/* LEFT SIDEBAR: Global Pulse */}
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
                        <Globe className="w-2.5 h-2.5" /> GLOBAL PULSE
                      </span>
                    </div>
                    <div className="space-y-4 pb-4">
                      {GLOBAL_INTEL.map((item, idx) => (
                        <div key={idx} className={cn("px-[18px] py-1.5", idx > 0 && "border-t border-white/5 pt-3")}>
                          <span className="next-card-name text-[14.5px] font-bold">{item.event}</span>
                          <span className="next-card-date text-[10px] text-[#4FD1C5] mb-2 block font-bold uppercase tracking-wider">{item.meta}</span>
                          <div className="flex flex-wrap gap-1.5 mb-2">
                             <StatusStrip label="GOVT" status={item.impacts.govt} scenario={scenario} />
                             <StatusStrip label="BANKS" status={item.impacts.banks} scenario={scenario} />
                             <StatusStrip label="MKTS" status={item.impacts.markets} scenario={scenario} />
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

                {/* SCENARIO A: BASELINE LIST */}
                {scenario === 'A' && (
                  <div className="checker-list mt-2 space-y-4 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
                    {PERIOD_EVENTS.map((event) => (
                      <div key={event.date} className="p-5 border border-white/5 rounded-xl bg-white/[0.02] space-y-3">
                          <div className="flex justify-between items-start">
                            <div className="space-y-0.5">
                                <h4 className="font-bold text-[14.5px]">{event.name}</h4>
                                <p className="text-[10px] text-muted-dim uppercase font-bold">{event.shortDate} · {event.jurisdiction}</p>
                            </div>
                            <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest">Verified</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <StatusStrip label="GOVT" status={event.impacts.govt} scenario="A" />
                            <StatusStrip label="BANKS" status={event.impacts.banks} scenario="A" />
                            <StatusStrip label="MKTS" status={event.impacts.markets} scenario="A" />
                          </div>
                          <p className="text-[12.5px] text-[#F4F1E8] font-medium leading-snug border-l border-[#E8A33D]/40 pl-3 py-1">
                            {event.advice[mode]}
                          </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* SCENARIO B: SMART BRIEFING CONSOLE */}
                {scenario === 'B' && (
                  <div className="checker-list mt-2 space-y-4 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar">
                    {PERIOD_EVENTS.map((event, idx) => (
                      <div key={event.date} className={cn(
                        "p-5 border rounded-xl space-y-4 relative overflow-hidden",
                        idx === 0 ? "border-[#E8A33D] bg-[#E8A33D]/5" : "border-white/5 bg-white/[0.02]"
                      )}>
                        {idx === 0 && (
                          <div className="absolute top-0 right-0 px-3 py-0.5 bg-[#E8A33D] text-[#0F1428] text-[8px] font-extrabold uppercase tracking-widest">
                            LIVE TODAY
                          </div>
                        )}
                        <div className="flex justify-between items-baseline">
                           <div className="space-y-1">
                              <h4 className="font-bold text-[16px] font-headline">{event.name}</h4>
                              <p className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#E8A33D]">{event.shortDate} · {event.meta}</p>
                           </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5">
                          <StatusStrip label="GOVT" status={event.impacts.govt} scenario="B" />
                          <StatusStrip label="BANKS" status={event.impacts.banks} scenario="B" />
                          <StatusStrip label="MKTS" status={event.impacts.markets} scenario="B" />
                        </div>

                        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                           <p className="text-[12px] text-paper font-semibold leading-snug italic">
                             "{event.advice[mode]}"
                           </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* SCENARIO C: INTERACTIVE MINIMALIST */}
                {scenario === 'C' && (
                  <div className="checker-list mt-2 space-y-1">
                    {PERIOD_EVENTS.map((event) => (
                      <div key={event.date} className="border-b border-white/5">
                        <button 
                          onClick={() => toggleExpand(event.date)}
                          className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors group"
                        >
                           <div className="flex items-center gap-4">
                              <span className="font-mono text-[11px] text-muted-dim w-12">{event.shortDate}</span>
                              <span className="font-bold text-[14.5px] group-hover:text-gold-soft transition-colors">{event.name}</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <span className="text-[9px] font-bold text-muted-dim uppercase tracking-widest">{event.impacts.govt === 'CLOSED' ? 'SHUTDOWN' : 'PARTIAL'}</span>
                              {expandedDate === event.date ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                           </div>
                        </button>
                        {expandedDate === event.date && (
                          <div className="p-5 bg-white/[0.03] space-y-4 animate-in slide-in-from-top-2 duration-300">
                             <div className="flex flex-wrap gap-2">
                                <StatusStrip label="GOVT" status={event.impacts.govt} scenario="C" />
                                <StatusStrip label="BANKS" status={event.impacts.banks} scenario="C" />
                                <StatusStrip label="MKTS" status={event.impacts.markets} scenario="C" />
                             </div>
                             <div className="p-3 border-l-2 border-[#E8A33D] bg-[#E8A33D]/5">
                                <p className="text-[13px] font-medium leading-relaxed">{event.advice[mode]}</p>
                             </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* ADVISORY FOOTER */}
                <div className="p-5 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E8A33D]/10 pb-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#E8A33D] flex items-center gap-1.5">
                      <Activity className="w-3 h-3" /> {scenario === 'A' ? `DESTINATION ADVISORY · ${country}` : `LIVE JURISDICTIONAL ROUNDUP · ${country}`}
                    </span>
                    <span className="text-[8px] font-bold text-[#E8A33D]/40 uppercase tracking-widest">Local Nuance</span>
                  </div>
                  <div className="space-y-4">
                    {REGIONAL_ROUNDUP_INDIA.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between">
                           <span className="text-[13.5px] font-bold">{item.event}</span>
                           <span className="text-[9px] font-mono text-muted-dim uppercase">{item.region}</span>
                        </div>
                        <p className="text-[12px] leading-snug text-[#9AA1C0] font-medium">
                          {item.intel}
                        </p>
                      </div>
                    ))}
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

        {/* SCENARIO SWITCHER */}
        <section className="fixed bottom-0 left-0 right-0 bg-[#0B0F22] border-t border-white/10 p-4 z-[60]">
           <div className="max-w-md mx-auto flex flex-col gap-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-dim text-center">UI/UX Scenario Switcher</p>
              <div className="grid grid-cols-3 gap-2">
                 {(['A', 'B', 'C'] as const).map(s => (
                   <button 
                    key={s}
                    onClick={() => setScenario(s)}
                    className={cn(
                      "py-2 rounded-lg text-xs font-bold transition-all border",
                      scenario === s ? "bg-white text-black border-white" : "text-white/40 border-white/10 hover:border-white/30"
                    )}
                   >
                     Option {s}
                   </button>
                 ))}
              </div>
              <p className="text-[9px] text-muted-dim text-center italic">
                {scenario === 'A' && "Standard list with bottom advisory."}
                {scenario === 'B' && "Grouped cards, semantic labels, merged 'Today' Hero."}
                {scenario === 'C' && "Minimalist dates, expansion drawers for advisory."}
              </p>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
