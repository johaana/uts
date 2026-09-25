'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { Globe, MapPin, ShieldCheck, Info, Sparkles } from "lucide-react";
import { format } from 'date-fns';

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
    consequence: "Mandatory closure for government and banking sectors. Expect significant urban movement impact in Mumbai and Pune.",
    status: "REGIONAL PLANNING FACT"
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
      
      <main className="py-12 md:py-20">
        <div className="wrap space-y-24">
          
          {/* OPTION A: THE MULTI-LAYER APPROACH (IDEA 1) */}
          <section className="space-y-10">
            <div className="flex justify-between items-end border-b border-white/10 pb-6">
               <div className="space-y-1">
                  <span className="text-[10px] font-bold text-teal uppercase tracking-[0.3em]">Option A</span>
                  <h2 className="text-3xl font-headline font-bold text-white">The Multi-Layer Approach (Idea 1)</h2>
                  <p className="text-muted text-sm">Two cards: Global Pulse + Destination-specific Regional Intel.</p>
               </div>
            </div>

            <div className="hero-grid">
               {/* 01. The Checker (Left) */}
               <div className="checker">
                  <div className="checker-top">
                    <h3 className="font-headline font-medium text-lg">Trip impact checker</h3>
                  </div>
                  <div className="mode-toggle">
                    <button className={cn(mode === 'traveler' && "active")}>Travel</button>
                    <button>Study</button>
                    <button>Business</button>
                  </div>
                  <div className="checker-row">
                    <div className="checker-field">
                      <label>Destination</label>
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
                  <button className="w-full py-3.5 bg-gold text-ink font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-gold-soft transition-all">
                    Check Impact
                  </button>
               </div>

               {/* 02. Two Cards Side (Right) */}
               <div className="space-y-4">
                  {/* Card 1: Global */}
                  <aside className="hero-tracker !my-0">
                    <div className="hero-tracker-head">
                      <div>
                        <span className="hero-tracker-kicker">TODAY</span>
                        <strong className="text-lg">Tuesday, 15 Sept 2026</strong>
                      </div>
                      <span className="hero-tracker-live"><i></i> Global View</span>
                    </div>
                    <div className="p-5 space-y-3">
                       <span className="text-[9.5px] font-mono font-bold text-teal uppercase tracking-widest">Around the globe</span>
                       <div className="space-y-2">
                          {GLOBAL_TODAY.map(g => (
                            <div key={g.code} className="flex justify-between items-center text-sm">
                               <span><b>{g.name}</b> — {g.event}</span>
                               <span className="text-[9px] font-mono text-muted-dim uppercase">{g.type}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                  </aside>

                  {/* Card 2: Regional Intel (Restored Card) */}
                  {regionalIntel && (
                    <aside className="hero-tracker !my-0 border-teal/30 bg-teal/5 animate-in fade-in slide-in-from-top-2 duration-500">
                      <div className="hero-tracker-head border-teal/10">
                        <div>
                          <span className="hero-tracker-kicker !text-gold-soft">REGIONAL INTEL</span>
                          <strong className="text-lg text-white">{regionalIntel.state} SIGNAL</strong>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 border border-teal/30 bg-teal/10 rounded-full">
                           <ShieldCheck className="w-3 h-3 text-teal" />
                           <span className="text-[8px] font-bold uppercase tracking-wider text-teal">High Confidence</span>
                        </div>
                      </div>
                      <div className="p-5 space-y-4">
                         <div className="space-y-1">
                            <h4 className="text-base font-bold font-headline">{regionalIntel.event}</h4>
                            <p className="text-[10px] font-bold text-gold-soft uppercase tracking-widest">{regionalIntel.type} · JURISDICTIONAL</p>
                         </div>
                         <p className="text-[12.5px] text-muted leading-relaxed font-medium">
                            {regionalIntel.consequence}
                         </p>
                         <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-muted-dim">
                            <span>SOURCE: AUTHORITATIVE</span>
                            <span className="text-teal">PLANNING FACT</span>
                         </div>
                      </div>
                    </aside>
                  )}
               </div>
            </div>
          </section>

          {/* OPTION B: THE INTEGRATED FEED (IDEA 2) */}
          <section className="space-y-10">
            <div className="flex justify-between items-end border-b border-white/10 pb-6">
               <div className="space-y-1">
                  <span className="text-[10px] font-bold text-teal uppercase tracking-[0.3em]">Option B</span>
                  <h2 className="text-3xl font-headline font-bold text-white">The Integrated Feed (Idea 2)</h2>
                  <p className="text-muted text-sm">One unified card: Regional facts merged into the global pulse.</p>
               </div>
            </div>

            <div className="hero-grid">
               {/* 01. The Checker (Left) - Same as above */}
               <div className="checker">
                  <div className="checker-top">
                    <h3 className="font-headline font-medium text-lg">Trip impact checker</h3>
                  </div>
                  <div className="mode-toggle">
                    <button className={cn(mode === 'traveler' && "active")}>Travel</button>
                    <button>Study</button>
                    <button>Business</button>
                  </div>
                  <div className="checker-row">
                    <div className="checker-field">
                      <label>Destination</label>
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
                  <button className="w-full py-3.5 bg-gold text-ink font-bold text-sm uppercase tracking-widest rounded-xl">
                    Check Impact
                  </button>
               </div>

               {/* 02. Integrated Card (Right) */}
               <aside className="hero-tracker !my-0">
                  <div className="hero-tracker-head">
                    <div>
                      <span className="hero-tracker-kicker">WORLD TODAY</span>
                      <strong className="text-lg">Tuesday, 15 Sept 2026</strong>
                    </div>
                    <span className="hero-tracker-live"><i></i> Combined View</span>
                  </div>

                  <div className="p-5 space-y-6">
                    {/* Primary Regional Fact if matching */}
                    {regionalIntel && (
                      <div className="p-5 bg-teal/5 border border-teal/20 rounded-xl space-y-4">
                        <div className="flex justify-between items-start">
                           <div className="space-y-1">
                              <span className="text-[9px] font-mono font-bold text-teal uppercase tracking-widest">{regionalIntel.state} REGIONAL INTEL</span>
                              <h4 className="text-xl font-bold font-headline leading-tight">{regionalIntel.event}</h4>
                           </div>
                           <ShieldCheck className="w-4 h-4 text-teal opacity-50" />
                        </div>
                        <p className="text-[12.5px] text-paper/90 leading-relaxed font-medium italic">
                          "{regionalIntel.consequence}"
                        </p>
                      </div>
                    )}

                    {/* Global List */}
                    <div className="space-y-4">
                       <span className="text-[9.5px] font-mono font-bold text-muted-dim uppercase tracking-widest">Other global observances</span>
                       <div className="space-y-3">
                          {GLOBAL_TODAY.map(g => (
                            <div key={g.code} className="flex justify-between items-start gap-4">
                               <div className="flex-1 text-[13.5px]">
                                  <b className="text-paper">{g.name}</b> — {g.event}
                               </div>
                               <span className="text-[9px] font-bold text-muted-dim uppercase border border-white/10 px-2 py-0.5 rounded-full">{g.type}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>

                  <a className="hero-tracker-link text-left" href="#date-intelligence">
                    EXPLORE FULL DATE INTELLIGENCE <span>→</span>
                  </a>
               </aside>
            </div>
          </section>

          {/* TECHNICAL NOTE */}
          <div className="p-10 rounded-[32px] border-2 border-dashed border-white/10 bg-white/5 text-center space-y-4">
             <h3 className="text-xl font-headline font-bold">Refined Terminology Rules</h3>
             <div className="flex flex-wrap justify-center gap-4">
                <div className="px-4 py-2 bg-panel-2 border border-white/10 rounded-lg">
                   <span className="text-xs text-muted-dim mr-2">Religious</span> → <b className="text-gold-soft">Religious Holiday</b>
                </div>
                <div className="px-4 py-2 bg-panel-2 border border-white/10 rounded-lg">
                   <span className="text-xs text-muted-dim mr-2">Public / Holiday</span> → <b className="text-gold-soft">National Holiday</b>
                </div>
             </div>
             <p className="text-sm text-muted max-w-xl mx-auto">
                These refined labels ensure that descriptions like "Diwali is a Religious Holiday" read correctly and carry the appropriate weight.
             </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
