
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { 
  Globe, 
  ShieldCheck, 
  ChevronDown,
  ChevronUp,
  ArrowRight
} from "lucide-react";
import { format, isWithinInterval, startOfDay, parseISO } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';

// --------------------------------------------------------------------------------
// AUTHORITATIVE CONVERSATIONAL DATA
// --------------------------------------------------------------------------------

const GLOBAL_INTEL = [
  {
    id: "gi-1",
    event: "Indonesia — Maulid Nabi",
    meta: "12 COUNTRIES · SYSTEMIC CLOSURES",
    impacts: { govt: 'CLOSED', banks: 'CLOSED', markets: 'ACTIVE' },
    desc: "Most government offices and banks are closed across the country today. However, major financial markets remain open for trading as usual."
  },
  {
    id: "gi-2",
    event: "Hong Kong — Mid-Autumn Festival",
    meta: "REGIONAL · PUBLIC HOLIDAY",
    impacts: { govt: 'OPEN', banks: 'CLOSED', markets: 'MODIFIED' },
    desc: "Banks are closed today and the stock market is running on a modified session. You should expect about a 24-hour delay in local logistics and shipping."
  }
];

const PERIOD_EVENTS = [
  {
    date: "2026-09-04",
    shortDate: "4 Sep",
    name: "Janmashtami",
    scope: "REGIONAL",
    severity: "medium",
    jurisdiction: "Maharashtra",
    impacts: { govt: 'CLOSED', banks: 'CLOSED', markets: 'SUSPENDED' },
    advice: {
      traveler: "High density human pyramids in urban centers. Expect localized traffic diversions in Mumbai suburbs; add 45-min buffer for airport transfers.",
      study: "Regional university administration offices across Maharashtra are closed for the state holiday.",
      corporate: "Regional banking and financial settlements in Mumbai are suspended today; expect transaction latency for Maharashtra-based accounts."
    }
  },
  {
    date: "2026-09-25",
    shortDate: "25 Sep",
    name: "Anant Chaturdashi (Visarjan)",
    scope: "REGIONAL",
    severity: "high",
    jurisdiction: "Mumbai/Pune",
    impacts: { govt: 'CLOSED', banks: 'CLOSED', markets: 'CLOSED' },
    advice: {
      traveler: "Total urban shutdown in Mumbai. Massive processions block all major roads; add 3-hour buffer for any travel to the airport or train terminals.",
      study: "Complete campus access lockdown in city centers. Admissions and admin offices are non-operational.",
      corporate: "Major logistical shutdown. All commercial transport and branch banking in Mumbai is essentially offline."
    }
  },
  {
    date: "2026-10-02",
    shortDate: "2 Oct",
    name: "Gandhi Jayanti",
    scope: "NATIONAL",
    severity: "medium",
    jurisdiction: "India",
    impacts: { govt: 'CLOSED', banks: 'CLOSED', markets: 'CLOSED' },
    advice: {
      traveler: "Mandatory national holiday. All government offices and public services are closed nationwide. Expect heavy crowds at major memorials.",
      study: "All educational institutions and university administrative offices nationwide are closed today.",
      corporate: "National banking systems, including RTGS and NEFT, are offline today for the public holiday."
    }
  },
  {
    date: "2026-10-29",
    shortDate: "29 Oct",
    name: "Diwali (Lakshmi Puja)",
    scope: "NATIONAL",
    severity: "high",
    jurisdiction: "India",
    impacts: { govt: 'CLOSED', banks: 'CLOSED', markets: 'CLOSED' },
    advice: {
      traveler: "Maximum national impact. Total commercial shutdown across all major hubs. Expect extreme travel demand and limited shop availability.",
      study: "All universities are closed for the Diwali break; expect administration to be offline for 3-5 days.",
      corporate: "Complete national commercial shutdown. Financial markets and bank branches are closed for Lakshmi Puja."
    }
  }
];

// --------------------------------------------------------------------------------
// MAIN LAB COMPONENT
// --------------------------------------------------------------------------------

export default function TempTrackerLabPage() {
  const [country, setCountry] = useState('IN');
  const [mode, setMode] = useState<'traveler' | 'study' | 'corporate'>('traveler');
  const [scenario, setScenario] = useState<'A' | 'C'>('A');
  const [expandedDate, setExpandedDate] = useState<string | null>(null);

  const [fromDate, setFromDate] = useState('2026-09-01');
  const [toDate, setToDate] = useState('2026-10-31');

  const filteredEvents = useMemo(() => {
    const start = startOfDay(parseISO(fromDate));
    const end = startOfDay(parseISO(toDate));
    return PERIOD_EVENTS.filter(e => {
        const d = startOfDay(parseISO(e.date));
        return isWithinInterval(d, { start, end });
    });
  }, [fromDate, toDate]);

  const heroSignal = useMemo(() => {
    const superEvent = filteredEvents.find(e => e.severity === 'high');
    if (superEvent) {
      return {
        location: superEvent.jurisdiction,
        title: superEvent.name,
        date: superEvent.shortDate,
        scope: superEvent.scope,
        desc: superEvent.advice[mode],
        kind: 'high'
      };
    }
    const nationalEvent = filteredEvents.find(e => e.scope === 'NATIONAL');
    if (nationalEvent) {
      return {
        location: nationalEvent.jurisdiction,
        title: nationalEvent.name,
        date: nationalEvent.shortDate,
        scope: nationalEvent.scope,
        desc: nationalEvent.advice[mode],
        kind: 'national'
      };
    }
    return null;
  }, [filteredEvents, mode]);

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
                Know before you plan. <br className="md:hidden" />
                Not after.
              </h1>
              <p className="sub hidden md:block">Refined high-fidelity data signals.</p>

              <aside className="hero-tracker md:order-last">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker uppercase tracking-widest text-[#E8A33D] font-mono text-[10px]">Global Pulse</span>
                    <strong className="text-[15.5px] font-headline">Friday, 4 Sep 2026</strong>
                  </div>
                  <span className="hero-tracker-live"><i></i> World view</span>
                </div>

                <div className="hero-tracker-next-grid text-left border-b border-white/10">
                   <div className="px-[18px] py-6 space-y-4">
                      <div className="flex items-center gap-2 px-2.5 py-1 bg-teal/10 border border-teal/20 rounded-full w-fit">
                        <Globe className="w-2.5 h-2.5 text-teal" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-teal">World State Today</span>
                      </div>
                      <div className="space-y-4">
                        {GLOBAL_INTEL.map((item) => (
                          <div key={item.id} className="space-y-1.5">
                            <span className="block text-[14px] font-bold">{item.event}</span>
                            <p className="text-[12px] text-[#9AA1C0] leading-snug">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>

                <div className="hero-tracker-feed">
                  <div className="marquee">
                    <div className="marquee-track">
                      {PERIOD_EVENTS.concat(PERIOD_EVENTS).map((item, i) => (
                        <span key={i} className="chip">
                          <b>{item.jurisdiction}</b> — {item.name} · {item.shortDate}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <a className="hero-tracker-link text-left" href="/date-intelligence">VIEW TODAY'S FULL INTELLIGENCE <span>→</span></a>
              </aside>
            </div>

            <div className="checker text-left order-1">
              <div className="checker-top">
                <h3 className="font-headline text-[18px]">Trip impact checker</h3>
                <button type="button" className="compare-launch" onClick={() => setScenario(scenario === 'A' ? 'C' : 'A')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3 4 7l4 4M4 7h13M16 21l4-4-4-4M20 17H7"/>
                  </svg>
                  <span>{scenario === 'A' ? 'Option C' : 'Option A'}</span>
                </button>
              </div>

              <div className="mode-toggle">
                <button type="button" className={cn(mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button type="button" className={cn(mode === 'study' && "active")} onClick={() => setMode('study')}>Study</button>
                <button type="button" className={cn(mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business</button>
              </div>

              <div className="space-y-4">
                <div className="checker-field">
                  <label className="text-[10.5px] font-mono uppercase tracking-widest">Destination</label>
                  <select value={country} onChange={e => setCountry(e.target.value)} className="bg-[#1E2650] border border-white/10 rounded-lg p-2.5 text-sm">
                    <option value="IN">India</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="checker-field">
                    <label className="text-[10.5px] font-mono uppercase tracking-widest">From</label>
                    <input type="date" value={fromDate} onChange={e => setFromDate(e.target.value)} className="bg-[#1E2650] border border-white/10 rounded-lg p-2.5 text-sm" />
                  </div>
                  <div className="checker-field">
                    <label className="text-[10.5px] font-mono uppercase tracking-widest">To</label>
                    <input type="date" value={toDate} onChange={e => setToDate(e.target.value)} className="bg-[#1E2650] border border-white/10 rounded-lg p-2.5 text-sm" />
                  </div>
                </div>
                
                <div className="checker-summary py-4 border-b border-white/10 flex gap-4 text-left">
                  <div><b className="font-headline text-[28px] text-[#F0C888]">{filteredEvents.length}</b><span className="text-[11.5px] text-muted-dim block leading-tight">period flags</span></div>
                  <div><b className="font-headline text-[28px] text-[#F0C888]">{heroSignal ? '1' : '0'}</b><span className="text-[11.5px] text-muted-dim block leading-tight">high-impact</span></div>
                </div>

                {/* SCENARIO A: REFINED HIGH-FIDELITY LIST */}
                {scenario === 'A' && (
                  <div className="mt-4 space-y-2">
                    <div className="checker-list space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar pr-1">
                      {filteredEvents.map((event) => (
                        <div key={event.date} className="border-b border-white/5 last:border-0 group">
                          <button 
                            onClick={() => toggleExpand(event.date)}
                            className="w-full flex items-center justify-between py-4 hover:bg-white/[0.02] transition-all text-left"
                          >
                             <div className="flex items-center gap-6">
                                <div className="w-14 font-mono text-[10px] text-[#6E7495] uppercase tracking-widest">{event.shortDate}</div>
                                <div className="space-y-1">
                                   <span className="block font-bold text-[15px] group-hover:text-[#E8A33D] transition-colors leading-tight">
                                     {event.jurisdiction} — {event.name}
                                   </span>
                                   <span className="block text-[9px] font-bold text-[#6E7495] uppercase tracking-[0.2em]">{event.scope}</span>
                                </div>
                             </div>
                             {expandedDate === event.date ? <ChevronUp className="w-4 h-4 text-[#6E7495]" /> : <ChevronDown className="w-4 h-4 text-[#6E7495]" />}
                          </button>
                          
                          <AnimatePresence>
                            {expandedDate === event.date && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pb-6 space-y-4 px-[80px]">
                                   <p className="text-[13px] font-medium leading-relaxed italic text-[#9AA1C0] border-l border-[#E8A33D]/30 pl-4">
                                     "{event.advice[mode]}"
                                   </p>
                                   <div className="flex items-center justify-between text-[9px] font-bold text-[#6E7495] uppercase tracking-[0.2em] pt-2 border-t border-white/5">
                                      <span>Source: Authoritative Registry</span>
                                      <div className="flex items-center gap-1 text-green-500/60">
                                        <ShieldCheck className="w-2.5 h-2.5" />
                                        <span>Verified</span>
                                      </div>
                                   </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SCENARIO C: REFINED INTERPRETATION */}
                {scenario === 'C' && heroSignal && (
                  <div className="pt-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className={cn(
                      "p-6 rounded-2xl border bg-white/[0.03] border-white/10 shadow-xl"
                    )}>
                      <div className="space-y-5">
                        <div className="space-y-1">
                          <div className="flex flex-col gap-0.5">
                             <h4 className="text-xl font-headline font-bold text-paper leading-tight">
                               {heroSignal.location} — {heroSignal.title}
                             </h4>
                             <div className="flex items-center gap-2">
                               <span className="text-[10px] font-mono text-gold-soft uppercase tracking-widest font-bold">{heroSignal.date}</span>
                               <span className="text-[10px] font-mono text-muted-dim uppercase tracking-widest font-bold">· {heroSignal.scope}</span>
                             </div>
                          </div>
                        </div>

                        <p className="text-[13.5px] text-[#9AA1C0] leading-relaxed font-medium italic border-l-2 border-[#E8A33D]/40 pl-4">
                          "{heroSignal.desc}"
                        </p>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                           <span className="text-[9px] font-bold text-muted-dim uppercase tracking-widest">Determination: Confirmed</span>
                           <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 text-green-500 text-[9px] font-bold uppercase rounded-sm border border-green-500/20">
                             <ShieldCheck className="w-3 h-3" /> Source Verified
                           </div>
                        </div>
                      </div>
                    </div>

                    <button className="mt-6 w-full flex items-center justify-center gap-2 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F0C888] hover:text-white transition-colors border border-white/10 rounded-xl bg-white/[0.02]">
                       View Full Date Intelligence <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* SCENARIO SWITCHER */}
        <section className="fixed bottom-0 left-0 right-0 bg-[#0B0F22]/95 backdrop-blur-md border-t border-white/10 p-4 z-[60]">
           <div className="max-w-md mx-auto flex flex-col gap-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-dim text-center">Lab Toggle: Scenario A vs Scenario C</p>
              <div className="grid grid-cols-2 gap-2">
                 <button 
                  onClick={() => setScenario('A')}
                  className={cn(
                    "py-2 rounded-lg text-xs font-bold transition-all border",
                    scenario === 'A' ? "bg-white text-black border-white" : "text-white/40 border-white/10 hover:border-white/30"
                  )}
                 >
                   Option A (List)
                 </button>
                 <button 
                  onClick={() => setScenario('C')}
                  className={cn(
                    "py-2 rounded-lg text-xs font-bold transition-all border",
                    scenario === 'C' ? "bg-white text-black border-white" : "text-white/40 border-white/10 hover:border-white/30"
                  )}
                 >
                   Option C (Interpretation)
                 </button>
              </div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
