
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  ChevronDown,
  ChevronUp,
  Clock,
  Activity
} from "lucide-react";
import { format, isWithinInterval, startOfDay, parseISO, startOfToday } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';

const GLOBAL_INTEL = [
  {
    id: "gi-1",
    event: "Indonesia — Maulid Nabi",
    desc: "Most government offices and banks are closed across the country today. Major financial markets remain open."
  },
  {
    id: "gi-2",
    event: "Hong Kong — Mid-Autumn Festival",
    desc: "Banks are closed today; stock market on modified session. Expect 24-hour shipping delays."
  }
];

const PERIOD_EVENTS = [
  {
    date: "2026-09-04",
    shortDate: "4 Sep",
    name: "Janmashtami",
    scope: "REGIONAL",
    jurisdiction: "Maharashtra",
    country: "India",
    advice: {
      traveler: "High density human pyramids. Expect localized traffic diversions in Mumbai; add 45-min buffer for airport transfers.",
      study: "Regional university offices across Maharashtra are closed.",
      corporate: "Regional banking in Mumbai suspended; expect transaction latency."
    }
  },
  {
    date: "2026-10-29",
    shortDate: "29 Oct",
    name: "Diwali (Lakshmi Puja)",
    scope: "NATIONAL",
    jurisdiction: "India",
    country: "India",
    advice: {
      traveler: "Maximum national impact. Total commercial shutdown. Expect extreme travel demand.",
      study: "All universities closed for break; administration offline for 3-5 days.",
      corporate: "Complete national commercial shutdown. Financial markets closed."
    }
  }
];

export function TempTrackerClient() {
  const [isClient, setIsClient] = useState(false);
  const [mode, setMode] = useState<'traveler' | 'study' | 'corporate'>('traveler');
  const [expandedDate, setExpandedDate] = useState<string | null>(null);

  useEffect(() => setIsClient(true), []);

  const localSignalsFeed = useMemo(() => {
    return [{ text: "Standard global working day · 92 jurisdictions verified.", isLive: true }];
  }, []);

  return (
    <section className="hero">
      <div className="wrap hero-grid !gap-12">
        <div className="hero-copy text-left">
          <h1 className="headline text-white">Logic Lab</h1>
          <p className="sub text-[#9AA1C0]">Prototyping dynamic advice generation.</p>

          <aside className="hero-tracker md:order-last bg-[#171D3A] border border-white/10 rounded-2xl overflow-hidden">
            <div className="hero-tracker-head p-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#E8A33D] mb-1">LIVE UPDATES</span>
                <strong className="text-[17px] font-headline text-white">{isClient ? format(new Date(), 'EEEE, d MMM yyyy') : '...'}</strong>
              </div>
              <Clock className="w-4 h-4 text-[#4FD1C5]" />
            </div>

            <div className="px-6 py-6 space-y-6">
              {GLOBAL_INTEL.map((item) => (
                <div key={item.id} className="space-y-1.5 border-l-2 border-white/5 pl-4 hover:border-[#4FD1C5] transition-all">
                  <span className="block text-[14px] font-bold text-white">{item.event}</span>
                  <p className="text-[12.5px] text-[#9AA1C0] leading-relaxed italic">"{item.desc}"</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="checker bg-[#171D3A] p-8 rounded-2xl border border-white/10 text-left">
          <div className="mode-toggle grid grid-cols-3 gap-2 bg-[#0F1428] p-1 rounded-xl mb-6">
            {(['traveler', 'study', 'corporate'] as const).map(m => (
              <button 
                key={m} 
                onClick={() => setMode(m)}
                className={cn("py-2 rounded-lg text-xs font-bold transition-all", mode === m ? "bg-[#E8A33D] text-black" : "text-[#6E7495] hover:text-white")}
              >
                {m.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {PERIOD_EVENTS.map((event) => (
              <div key={event.date} className="border-b border-white/5 last:border-0">
                <button 
                  onClick={() => setExpandedDate(expandedDate === event.date ? null : event.date)}
                  className="w-full flex items-center justify-between py-4 group"
                >
                   <div className="flex items-center gap-6">
                      <div className="text-[10px] font-mono text-[#6E7495] uppercase">{event.shortDate}</div>
                      <span className="font-bold text-white group-hover:text-[#E8A33D] transition-colors">{event.name}</span>
                   </div>
                   {expandedDate === event.date ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                
                {expandedDate === event.date && (
                  <div className="pb-6 animate-in fade-in slide-in-from-top-2">
                     <div className="p-4 bg-white/5 border-l-2 border-[#E8A33D] rounded-r-lg">
                        <p className="text-sm text-[#9AA1C0] italic leading-relaxed">"{event.advice[mode]}"</p>
                     </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
