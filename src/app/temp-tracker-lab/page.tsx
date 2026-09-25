'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { ShieldCheck, Globe, Info, Activity } from "lucide-react";

// --------------------------------------------------------------------------------
// MOCK DATA FOR PROTOTYPE (SIMULATING SEPT 15, 2026)
// --------------------------------------------------------------------------------

const GLOBAL_TODAY = [
  { code: 'ID', name: 'Indonesia', event: 'Maulid Nabi', type: 'Religious Holiday' },
  { code: 'JP', name: 'Japan', event: 'Respect for the Aged Day', type: 'National Holiday' },
  { code: 'MX', name: 'Mexico', event: 'Independence Day Eve', type: 'National Holiday' }
];

const REGIONAL_FACTS: Record<string, any> = {
  IN: {
    state: "MAHARASHTRA",
    event: "Ganesh Chaturthi",
    type: "Religious Holiday",
    consequence: "Gazetted National Holiday. Mandatory closure for government and banking sectors. Expect significant urban movement impact due to public processions.",
    status: "REGIONAL PLANNING FACT"
  },
  JP: {
    state: "TOKYO",
    event: "Silver Week Opening",
    type: "National Holiday",
    consequence: "Japan Financial Markets (JPX) and banking systems are closed. Reduced operational capacity in Tokyo and Osaka business districts.",
    status: "MARKET CLOSURE FACT"
  },
  US: {
    state: "FEDERAL",
    event: "Labor Day (Observed)",
    type: "National Holiday",
    consequence: "Federal Government offices and USPS are closed. Trading sessions for NYSE and NASDAQ are suspended.",
    status: "FEDERAL PLANNING FACT"
  },
  SG: {
    state: "NATIONAL",
    event: "Deepavali Season",
    type: "Religious Holiday",
    consequence: "Regional Bank Holiday. High density activity in Little India district. Public sector operates at reduced capacity.",
    status: "JURISDICTIONAL FACT"
  }
};

const COUNTRY_OPTIONS = [
  { code: 'IN', name: 'India' },
  { code: 'JP', name: 'Japan' },
  { code: 'US', name: 'United States' },
  { code: 'SG', name: 'Singapore' }
];

// --------------------------------------------------------------------------------
// COMPONENT
// --------------------------------------------------------------------------------

export default function TempTrackerLabPage() {
  const [country, setCountry] = useState('IN');
  const [mode, setMode] = useState('traveler');
  
  const regionalIntel = REGIONAL_FACTS[country];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="wrap">
          
          <div className="mb-16 space-y-4 text-left">
            <div className="text-[12px] font-mono text-gold-soft tracking-[0.3em] uppercase">Intelligence Prototype v2</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium leading-tight">Visual Hierarchy Options</h1>
            <p className="text-xl text-muted max-w-2xl font-medium">
              Comparing 3 ways to present Regional vs Global intelligence. All options are reactive to the checker on the right.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            
            {/* COLUMN 1: INTELLIGENCE STACK OPTIONS (LEFT) */}
            <div className="space-y-32">
              
              {/* --- OPTION 1: BALANCED DUAL STACK (Refined Titles) --- */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold-soft">Option 1: Refined Proportions</span>
                </div>
                
                <div className="space-y-4">
                  {/* GLOBAL CARD */}
                  <aside className="hero-tracker !my-0 text-left border-white/10">
                    <div className="hero-tracker-head bg-white/[0.02]">
                      <div>
                        <span className="hero-tracker-kicker">WORLD TODAY</span>
                        <strong className="text-lg">Tuesday, 15 Sept 2026</strong>
                      </div>
                      <span className="hero-tracker-live"><i></i> Global View</span>
                    </div>
                    <div className="p-6 space-y-4">
                       <span className="text-[10px] font-mono font-bold text-teal uppercase tracking-[0.2em]">Around the globe</span>
                       <div className="space-y-3">
                          {GLOBAL_TODAY.map(g => (
                            <div key={g.code} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                               <span><b>{g.name}</b> — {g.event}</span>
                               <span className="text-[9px] font-mono text-muted-dim uppercase font-bold tracking-wider">{g.type}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                  </aside>

                  {/* REGIONAL CARD (Dynamic) */}
                  {regionalIntel && (
                    <aside className="hero-tracker !my-0 border-teal/30 bg-teal/[0.02] animate-in fade-in slide-in-from-top-2 duration-500 text-left">
                      <div className="hero-tracker-head border-teal/10 bg-teal/[0.03]">
                        <div>
                          <span className="hero-tracker-kicker !text-gold-soft">{regionalIntel.state} INTEL</span>
                          <strong className="text-base text-white/90 uppercase tracking-tight">{regionalIntel.status}</strong>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 border border-teal/30 bg-teal/10 rounded-full">
                           <ShieldCheck className="w-3 h-3 text-teal" />
                           <span className="text-[8px] font-bold uppercase tracking-wider text-teal">Verified</span>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                         <div className="space-y-1">
                            <h4 className="text-2xl font-bold font-headline leading-tight">{regionalIntel.event}</h4>
                            <p className="text-[10px] font-bold text-gold-soft uppercase tracking-widest">{regionalIntel.type} · JURISDICTIONAL</p>
                         </div>
                         <p className="text-[14px] text-paper/80 leading-relaxed font-medium">
                            {regionalIntel.consequence}
                         </p>
                         <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-muted-dim tracking-widest">
                            <span>SOURCE: AUTHORITATIVE REFERENCE</span>
                            <span className="text-teal font-bold">HIGH CONFIDENCE</span>
                         </div>
                      </div>
                    </aside>
                  )}
                </div>
              </div>

              {/* --- OPTION 2: MINIMALIST / COMPACT --- */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold-soft">Option 2: Minimalist</span>
                </div>
                
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#121832]">
                   <div className="p-8 space-y-12">
                      <div className="space-y-6">
                        <div className="flex justify-between items-end border-b border-white/10 pb-4">
                           <div className="space-y-1">
                              <p className="text-[10px] font-mono font-bold text-teal tracking-[0.3em] uppercase">Global Pulse</p>
                              <h3 className="text-2xl font-headline font-medium">Tuesday, 15 Sept</h3>
                           </div>
                           <Globe className="w-5 h-5 text-muted-dim" />
                        </div>
                        <div className="space-y-4">
                          {GLOBAL_TODAY.map(g => (
                            <div key={g.code} className="flex justify-between items-center">
                               <span className="text-sm font-medium"><b>{g.name}</b> · {g.event}</span>
                               <span className="text-[10px] text-muted-dim font-bold">{g.type}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {regionalIntel && (
                        <div className="space-y-6 pt-8 border-t border-white/10">
                           <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <p className="text-[10px] font-mono font-bold text-gold-soft tracking-[0.3em] uppercase">{regionalIntel.state} IMPACT</p>
                                <h4 className="text-3xl font-headline font-bold">{regionalIntel.event}</h4>
                              </div>
                              <span className="px-2 py-0.5 bg-teal/10 text-teal text-[9px] font-bold uppercase border border-teal/20 rounded">FACT</span>
                           </div>
                           <p className="text-base text-muted leading-relaxed italic pr-4">
                             "{regionalIntel.consequence}"
                           </p>
                        </div>
                      )}
                   </div>
                   <div className="bg-white/5 p-4 text-center text-[10px] font-mono text-muted-dim uppercase tracking-[0.4em]">
                      Utsavs Global Intelligence Engine v3.1
                   </div>
                </div>
              </div>

              {/* --- OPTION 3: STATUS TERMINAL (Data-Heavy) --- */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold-soft">Option 3: Status Terminal</span>
                </div>

                <div className="space-y-2">
                   {/* Global Row */}
                   <div className="p-8 bg-[#171D3A] border border-white/10 rounded-t-2xl border-b-0 flex justify-between items-center">
                      <div className="flex gap-10 items-center">
                        <div className="text-left">
                           <p className="text-[9px] font-mono text-teal font-bold uppercase tracking-widest mb-1">Status Date</p>
                           <p className="text-xl font-headline font-bold">15 SEPT 2026</p>
                        </div>
                        <div className="h-10 w-px bg-white/10 hidden md:block" />
                        <div className="text-left">
                           <p className="text-[9px] font-mono text-muted-dim font-bold uppercase tracking-widest mb-1">Global Load</p>
                           <p className="text-xl font-headline font-bold">3 ACTIVE EVENTS</p>
                        </div>
                      </div>
                      <Activity className="w-6 h-6 text-teal animate-pulse" />
                   </div>

                   {/* Regional Intel Board */}
                   {regionalIntel && (
                     <div className="p-8 bg-teal/5 border border-teal/20 border-t-0 rounded-b-2xl space-y-6">
                        <div className="flex items-baseline gap-4">
                           <h4 className="text-[11px] font-mono font-bold text-teal uppercase tracking-[0.4em] whitespace-nowrap">Status: {regionalIntel.state}</h4>
                           <div className="h-px bg-teal/20 flex-1" />
                        </div>
                        
                        <div className="grid md:grid-cols-[220px_1fr] gap-8">
                           <div className="space-y-1">
                              <h5 className="text-2xl font-headline font-bold text-white">{regionalIntel.event}</h5>
                              <p className="text-[10px] font-bold text-gold-soft uppercase tracking-widest">{regionalIntel.type}</p>
                           </div>
                           <div className="p-6 bg-black/20 rounded-lg border border-white/5">
                              <p className="text-[13px] font-mono text-teal/90 leading-relaxed uppercase">
                                >> {regionalIntel.consequence}
                              </p>
                           </div>
                        </div>
                     </div>
                   )}
                </div>
              </div>

            </div>

            {/* COLUMN 2: TRIP IMPACT CHECKER (RIGHT) */}
            <div className="checker text-left sticky top-32">
              <div className="checker-top">
                <h3 className="font-headline font-medium text-xl">Trip impact checker</h3>
              </div>
              
              <div className="mode-toggle">
                <button className={cn(mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button className={cn(mode === 'study' && "active")} onClick={() => setMode('study')}>Study</button>
                <button className={cn(mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business</button>
              </div>

              <div className="checker-row">
                <div className="checker-field">
                  <label>Destination / Jurisdiction</label>
                  <select value={country} onChange={e => setCountry(e.target.value)}>
                    {COUNTRY_OPTIONS.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="checker-field">
                  <label>From</label>
                  <input type="date" defaultValue="2026-09-15" />
                </div>
                <div className="checker-field">
                  <label>To</label>
                  <input type="date" defaultValue="2026-09-25" />
                </div>
              </div>

              <button className="w-full py-4 bg-gold text-ink font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-gold-soft transition-all shadow-xl">
                Check Impact
              </button>

              <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-dashed border-white/10">
                   <Info className="w-5 h-5 text-gold-soft shrink-0 mt-0.5" />
                   <p className="text-xs text-muted leading-relaxed font-medium">
                    <strong>PROTOTYPE NOTE:</strong> Changing the destination country will update the intelligence cards in the left column for all comparison options.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* DOCUMENTATION FOOTER */}
          <section className="mt-48 p-12 md:p-20 rounded-[40px] border-2 border-dashed border-white/10 bg-white/5 text-center space-y-12">
             <div className="space-y-4">
                <h3 className="text-3xl font-headline font-bold">Standardized Terminology</h3>
                <p className="text-muted max-w-xl mx-auto">Ensuring impact descriptions read naturally and carry the correct legal weight.</p>
             </div>
             
             <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 px-8 py-4 bg-panel-2 border border-white/10 rounded-full shadow-lg">
                   <span className="text-[10px] text-muted-dim uppercase font-bold tracking-[0.2em]">Label A</span>
                   <div className="w-px h-6 bg-white/10" />
                   <b className="text-gold-soft text-base">Religious Holiday</b>
                </div>
                <div className="flex items-center gap-3 px-8 py-4 bg-panel-2 border border-white/10 rounded-full shadow-lg">
                   <span className="text-[10px] text-muted-dim uppercase font-bold tracking-[0.2em]">Label B</span>
                   <div className="w-px h-6 bg-white/10" />
                   <b className="text-gold-soft text-base">National Holiday</b>
                </div>
             </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
