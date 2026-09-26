'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  RefreshCw, 
  Globe, 
  MapPin,
  CheckCircle2,
  Info
} from "lucide-react";
import { format, startOfToday } from 'date-fns';

// --------------------------------------------------------------------------------
// SIMULATED DATA (Matching Production Engine Logic)
// --------------------------------------------------------------------------------

const GLOBAL_TODAY = [
  { name: 'Indonesia', event: 'Maulid Nabi', type: 'Religious Holiday' },
  { name: 'Japan', event: 'Respect for the Aged Day', type: 'National Holiday' },
  { name: 'Mexico', event: 'Independence Day Eve', type: 'National Holiday' }
];

const REGIONAL_FACTS: Record<string, any> = {
  IN: {
    country: "India",
    state: "Maharashtra",
    event: "Ganesh Chaturthi",
    type: "Religious Holiday",
    consequence: "Gazetted National Holiday. Mandatory closure for government and banking sectors. Expect significant urban movement impact due to public processions.",
  },
  JP: {
    country: "Japan",
    state: "Tokyo",
    event: "Silver Week Opening",
    type: "National Holiday",
    consequence: "Japan Financial Markets (JPX) and banking systems are closed. Reduced operational capacity in Tokyo and Osaka business districts.",
  },
  US: {
    country: "United States",
    state: "Federal",
    event: "Labor Day (Observed)",
    type: "National Holiday",
    consequence: "Federal Government offices and USPS are closed. Trading sessions for NYSE and NASDAQ are suspended.",
  },
  SG: {
    country: "Singapore",
    state: "National",
    event: "Deepavali Season",
    type: "Religious Holiday",
    consequence: "Regional Bank Holiday. High density activity in Little India district. Public sector operates at reduced capacity.",
  },
};

const COUNTRY_OPTIONS = [
  { code: 'IN', name: 'India' },
  { code: 'JP', name: 'Japan' },
  { code: 'US', name: 'United States' },
  { code: 'SG', name: 'Singapore' },
  { code: 'FR', name: 'France (Empty State Test)' }
];

// --------------------------------------------------------------------------------
// COMPONENT
// --------------------------------------------------------------------------------

export default function TempTrackerLabPage() {
  const [country, setCountry] = useState('IN');
  const [todayDate, setTodayDate] = useState('');
  
  useEffect(() => {
    setTodayDate(format(startOfToday(), 'EEEE, d MMMM yyyy'));
  }, []);

  const regionalIntel = REGIONAL_FACTS[country];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="hero">
        <div className="wrap">
          
          {/* LAB KICKER (Production Meta) */}
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
             <div className="space-y-1">
                <div className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase font-bold">Hero Simulation · Integrated Logic</div>
                <h1 className="text-2xl font-headline font-medium text-muted">Homepage Production Preview</h1>
             </div>
             <div className="p-3 bg-white/5 rounded-lg border border-dashed border-white/10 max-w-xs">
                <p className="text-[10px] text-muted-dim leading-tight">
                  This simulation uses exact production Tailwind classes. Use the Trip Checker on the right to test regional intelligence reactivity.
                </p>
             </div>
          </div>

          <div className="hero-grid items-start">
            
            {/* LEFT: HERO COPY + UNIFIED INTELLIGENCE CONTAINER */}
            <div className="space-y-8 text-left">
              <div className="space-y-6">
                <h1 className="headline">
                  Know before you fly. <br/> Know before you schedule.
                </h1>
                <p className="sub">
                  Check a country and your actual dates — before you book, schedule, or send a team across borders.
                </p>
              </div>

              {/* UNIFIED CONTAINER (Variant 5) */}
              <div className="hero-tracker !mb-0 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                
                {/* 1. Head: Today Context */}
                <div className="hero-tracker-head">
                    <div>
                      <span className="hero-tracker-kicker">TODAY</span>
                      <strong className="text-lg">{todayDate || "Determining next..."}</strong>
                    </div>
                    <span className="hero-tracker-live"><i></i> Intelligence view</span>
                </div>

                {/* 2. Global Section (Primary) */}
                <div className="p-6 md:p-8 space-y-6 border-b border-white/10">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold font-headline text-xl text-white">Around the Globe</h4>
                    <span className="text-[9px] font-mono text-muted-dim tracking-[0.2em] uppercase font-bold">NATIONAL</span>
                  </div>
                  <div className="space-y-4">
                    {GLOBAL_TODAY.map(g => (
                      <div key={g.name} className="flex justify-between items-center text-[14px]">
                        <span className="font-medium leading-tight"><b className="text-white">{g.name}</b> — {g.event}</span>
                        <span className="text-[9px] font-mono text-muted-dim uppercase font-bold tracking-wider shrink-0 ml-4">{g.type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Regional Intel (Subordinate Note) */}
                <div className="p-6 md:p-8 bg-white/[0.01]">
                   {regionalIntel ? (
                     <div className="space-y-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                             <MapPin className="w-4 h-4 text-gold-soft" />
                             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-soft">REGIONAL INTEL</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-teal/60" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-dim">Verified Record</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-bold text-paper/90 text-base font-headline">
                            {regionalIntel.country} · {regionalIntel.state} · {regionalIntel.event}
                          </h5>
                          <p className="text-[13.5px] text-muted leading-relaxed font-medium">
                            {regionalIntel.consequence}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-muted-dim font-bold uppercase tracking-widest pt-4 border-t border-white/5">
                           <RefreshCw className="w-3 h-3 text-gold/40" />
                           <span>Updated for {regionalIntel.country} · changes with checker</span>
                        </div>
                     </div>
                   ) : (
                     <div className="flex items-center gap-3 py-2">
                        <CheckCircle2 className="w-5 h-5 text-teal/40" />
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-dim">REGIONAL INTEL</p>
                          <p className="text-[13px] text-muted-dim italic">No regional variants identified for this date. National rules apply.</p>
                        </div>
                     </div>
                   )}
                </div>

                {/* 4. Marquee Section */}
                <div className="hero-tracker-feed !border-t-0">
                  <div className="marquee">
                    <div className="marquee-track">
                      {[
                        { f: '🇮🇳', c: 'India', e: 'Janmashtami' },
                        { f: '🇯🇵', c: 'Japan', e: 'Respect for the Aged' },
                        { f: '🇺🇸', c: 'USA', e: 'Labor Day Observed' },
                        { f: '🇸🇬', c: 'Singapore', e: 'Deepavali' },
                        { f: '🇲🇽', c: 'Mexico', e: 'Independence Day' },
                        { f: '🇮🇳', c: 'India', e: 'Janmashtami' },
                      ].map((item, i) => (
                        <span key={i} className="chip">
                          <b>{item.c}</b> — {item.e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a className="hero-tracker-link text-left" href="#date-intelligence">
                  VIEW FULL DATE INTELLIGENCE <span>→</span>
                </a>
              </div>
            </div>

            {/* RIGHT: TRIP CHECKER (Production Accurate) */}
            <div className="checker shadow-2xl border-white/10 bg-[#171D3A] rounded-2xl p-8 lg:p-10 sticky top-24">
              <div className="flex justify-between items-center mb-8">
                 <h3 className="font-headline font-medium text-xl">Trip impact checker</h3>
                 <div className="flex items-center gap-1.5 px-2.5 py-1 bg-teal/10 border border-teal/20 rounded-full">
                    <div className="w-1 h-1 rounded-full bg-teal animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-teal">Live Connection</span>
                 </div>
              </div>

              <div className="space-y-6">
                <div className="checker-field">
                  <label>Destination / Jurisdiction</label>
                  <select value={country} onChange={e => setCountry(e.target.value)} className="w-full bg-[#1E2650] border border-white/18 text-white rounded-xl px-4 py-3.5 text-sm focus:border-gold outline-none transition-all">
                    {COUNTRY_OPTIONS.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="checker-field">
                    <label>From</label>
                    <input type="date" defaultValue="2026-09-04" className="w-full bg-[#1E2650] border border-white/18 text-white rounded-xl px-4 py-3 text-xs outline-none" />
                  </div>
                  <div className="checker-field">
                    <label>To</label>
                    <input type="date" defaultValue="2026-10-31" className="w-full bg-[#1E2650] border border-white/18 text-white rounded-xl px-4 py-3 text-xs outline-none" />
                  </div>
                </div>
                <button className="w-full py-4 bg-gold text-ink font-bold text-[11px] uppercase tracking-[0.25em] rounded-xl hover:bg-gold-soft transition-all shadow-lg active:scale-[0.98]">
                  Check Impact
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                 <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-dashed border-white/10">
                    <Info className="w-4 h-4 text-gold-soft shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-dim leading-relaxed font-medium">
                      Note: Changing the destination here will dynamically update the <b>Regional Intel</b> section on the left to reflect local jurisdiction rules.
                    </p>
                 </div>
              </div>
            </div>

          </div>

          {/* FOOTER NOTE (Cinema Style) */}
          <div className="mt-32 pt-20 border-t border-white/10 max-w-3xl mx-auto text-center space-y-6">
             <h3 className="font-headline text-2xl md:text-3xl italic text-paper/80">"The same date can mean something entirely different as you cross a border. We capture the nuance, not just the date."</h3>
             <div className="flex justify-center gap-4">
                <span className="font-mono text-[11px] text-muted-dim border border-white/10 px-4 py-1.5 rounded-full uppercase tracking-widest">Region-aware</span>
                <span className="font-mono text-[11px] text-muted-dim border border-white/10 px-4 py-1.5 rounded-full uppercase tracking-widest">Source-aware</span>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
