'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { ShieldCheck, Globe, Info, Activity, RefreshCw, Layers } from "lucide-react";

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
      
      <main className="py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          
          <div className="mb-12 space-y-2 text-left border-b border-white/10 pb-6">
            <div className="text-[10px] font-mono text-gold-soft tracking-[0.3em] uppercase font-bold">Lab v4.0 · High Density UI</div>
            <h1 className="text-2xl md:text-3xl font-headline font-medium">Refining Date Intelligence Proportions</h1>
            <p className="text-sm text-muted max-w-xl font-medium">
              Experimental options with minimal spacing and balanced headlines. Use the Trip Checker on the right to update the Regional Intel cards.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            
            {/* COLUMN 1: INTELLIGENCE STACK OPTIONS (LEFT) */}
            <div className="space-y-24">
              
              {/* --- OPTION 1: COMPACT BALANCED --- */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-gold-soft">Option 1: Compact Balanced</span>
                </div>
                
                <div className="space-y-2">
                  <aside className="border border-white/10 rounded-lg overflow-hidden bg-[#171D3A] shadow-xl">
                    <div className="bg-white/[0.04] p-4 border-b border-white/5 flex justify-between items-center">
                      <span className="text-[10px] font-mono text-teal font-bold uppercase tracking-widest">WORLD TODAY · 15 SEPT</span>
                      <Globe className="w-3 h-3 text-muted-dim" />
                    </div>
                    <div className="p-4 space-y-2">
                       {GLOBAL_TODAY.map(g => (
                         <div key={g.code} className="flex justify-between items-center text-[12.5px] border-b border-white/5 pb-1.5 last:border-0 last:pb-0">
                            <span><b className="text-white">{g.name}</b> — {g.event}</span>
                            <span className="text-[8px] font-mono text-muted-dim uppercase font-bold">{g.type}</span>
                         </div>
                       ))}
                    </div>
                  </aside>

                  {regionalIntel && (
                    <aside className="border border-teal/20 rounded-lg overflow-hidden bg-teal/[0.02]">
                      <div className="bg-teal/[0.04] px-4 py-2 border-b border-teal/10 flex justify-between items-center">
                        <span className="text-[10px] font-mono text-gold-soft font-bold uppercase tracking-widest">{regionalIntel.state} INTEL</span>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 border border-teal/30 bg-teal/10 rounded-full">
                           <ShieldCheck className="w-2.5 h-2.5 text-teal" />
                           <span className="text-[8px] font-bold uppercase tracking-wider text-teal">Verified</span>
                        </div>
                      </div>
                      <div className="p-4 space-y-3">
                         <div className="space-y-0.5">
                            <h4 className="text-base font-bold font-headline text-white">{regionalIntel.event}</h4>
                            <p className="text-[9px] font-bold text-gold-soft uppercase tracking-widest">{regionalIntel.type}</p>
                         </div>
                         <p className="text-[12.5px] text-paper/70 leading-relaxed font-medium">
                            {regionalIntel.consequence}
                         </p>
                         <div className="text-[9px] text-muted-dim italic border-t border-white/5 pt-2 flex items-center gap-2">
                            <RefreshCw className="w-3 h-3 opacity-30" /> Reactive to country selection.
                         </div>
                      </div>
                    </aside>
                  )}
                </div>
              </div>

              {/* --- OPTION 4: UNIFIED SIGNAL PANE (SIDE-BY-SIDE / TIGHT STACK) --- */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-gold-soft">Option 4: Unified Signal Pane</span>
                </div>
                
                <div className="border border-white/10 rounded-lg overflow-hidden bg-[#121832] shadow-2xl">
                   <div className="grid md:grid-cols-2 gap-px bg-white/10">
                      <div className="bg-[#121832] p-5 space-y-4">
                         <div className="flex justify-between items-baseline border-b border-white/5 pb-2">
                            <span className="text-[10px] font-mono font-bold text-teal uppercase tracking-widest">Global Today</span>
                            <span className="text-[10px] font-mono text-muted-dim">15 SEPT</span>
                         </div>
                         <div className="space-y-2.5">
                            {GLOBAL_TODAY.map(g => (
                              <div key={g.code} className="text-[12px] leading-tight">
                                <p className="font-bold text-white/90">{g.name}</p>
                                <p className="text-[10px] text-muted-dim font-medium">{g.event}</p>
                              </div>
                            ))}
                         </div>
                      </div>
                      <div className="bg-teal/[0.03] p-5 space-y-4">
                         {regionalIntel ? (
                            <>
                               <div className="flex justify-between items-baseline border-b border-teal/10 pb-2">
                                  <span className="text-[10px] font-mono font-bold text-gold-soft uppercase tracking-widest">{regionalIntel.state}</span>
                                  <span className="text-[9px] font-bold text-teal uppercase px-1.5 py-0.5 bg-teal/10 rounded">FACT</span>
                               </div>
                               <div className="space-y-2">
                                  <h4 className="text-base font-bold font-headline">{regionalIntel.event}</h4>
                                  <p className="text-[12px] text-muted leading-relaxed font-medium italic">
                                    {regionalIntel.consequence}
                                  </p>
                               </div>
                               <div className="pt-2 border-t border-teal/10 text-[9px] text-muted-dim font-mono uppercase tracking-widest">
                                 Reactive Intel
                               </div>
                            </>
                         ) : (
                            <div className="h-full flex items-center justify-center text-muted-dim text-xs italic">
                               Select country for local intel
                            </div>
                         )}
                      </div>
                   </div>
                </div>
              </div>

              {/* --- OPTION 5: DATA-ONLY LIST (BAREBONES) --- */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-gold-soft">Option 5: Data-Only Minimalist</span>
                </div>

                <div className="space-y-8 p-2 border border-white/5 rounded-lg bg-black/10">
                   <div className="space-y-3">
                      <div className="flex items-center gap-3">
                         <span className="h-px bg-teal/30 flex-1" />
                         <span className="text-[10px] font-mono font-bold text-teal uppercase tracking-[0.3em]">WORLD PULSE</span>
                         <span className="h-px bg-teal/30 flex-1" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         {GLOBAL_TODAY.map(g => (
                           <div key={g.code} className="p-3 bg-white/5 rounded">
                              <p className="text-[10px] font-bold text-muted-dim uppercase">{g.name}</p>
                              <p className="text-sm font-bold text-white mt-1">{g.event}</p>
                           </div>
                         ))}
                      </div>
                   </div>

                   {regionalIntel && (
                     <div className="space-y-3">
                        <div className="flex items-center gap-3">
                           <span className="h-px bg-gold/30 flex-1" />
                           <span className="text-[10px] font-mono font-bold text-gold-soft uppercase tracking-[0.3em]">{regionalIntel.state} INTEL</span>
                           <span className="h-px bg-gold/30 flex-1" />
                        </div>
                        <div className="p-5 border border-gold/20 rounded bg-gold/[0.02]">
                           <div className="flex justify-between items-start gap-8">
                              <div className="space-y-1 flex-1">
                                 <h4 className="text-lg font-bold font-headline">{regionalIntel.event}</h4>
                                 <p className="text-sm text-paper/80 leading-relaxed font-medium">
                                    {regionalIntel.consequence}
                                  </p>
                              </div>
                              <div className="text-right space-y-1">
                                 <span className="text-[9px] font-bold text-gold-soft uppercase block">{regionalIntel.type}</span>
                                 <span className="text-[9px] text-muted-dim font-mono block italic">Reactive Data</span>
                              </div>
                           </div>
                        </div>
                     </div>
                   )}
                </div>
              </div>

            </div>

            {/* COLUMN 2: TRIP IMPACT CHECKER (RIGHT) */}
            <div className="checker text-left sticky top-24 !p-6 shadow-2xl border-white/10">
              <div className="checker-top !mb-4">
                <h3 className="font-headline font-medium text-lg">Trip impact checker</h3>
              </div>
              
              <div className="mode-toggle !mb-4">
                <button className={cn("!py-1.5", mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button className={cn("!py-1.5", mode === 'study' && "active")} onClick={() => setMode('study')}>Study</button>
                <button className={cn("!py-1.5", mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business</button>
              </div>

              <div className="checker-row !mb-3">
                <div className="checker-field">
                  <label>Destination / Jurisdiction</label>
                  <select value={country} onChange={e => setCountry(e.target.value)} className="!py-2 !text-sm">
                    {COUNTRY_OPTIONS.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="checker-field">
                  <label>From</label>
                  <input type="date" defaultValue="2026-09-15" className="!py-2 !text-sm" />
                </div>
                <div className="checker-field">
                  <label>To</label>
                  <input type="date" defaultValue="2026-09-25" className="!py-2 !text-sm" />
                </div>
              </div>

              <button className="w-full py-3 bg-gold text-ink font-bold text-[12px] uppercase tracking-widest rounded-lg hover:bg-gold-soft transition-all active:scale-[0.98]">
                Check Impact
              </button>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-dashed border-white/10">
                   <Info className="w-4 h-4 text-gold-soft shrink-0 mt-0.5" />
                   <p className="text-[11px] text-muted leading-relaxed font-medium">
                    Changing the destination will update the left column in real-time.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* STANDARDS FOOTER */}
          <section className="mt-24 p-10 rounded-[32px] border-2 border-dashed border-white/10 bg-white/5 text-center space-y-8">
             <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-headline font-bold">Standardized Terminology</h3>
                <p className="text-muted text-sm">Strict mapping for operational and planning weigh-in.</p>
             </div>
             
             <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-3 px-6 py-3 bg-panel-2 border border-white/10 rounded-full">
                   <span className="text-[9px] text-muted-dim uppercase font-bold tracking-[0.2em]">Religious</span>
                   <div className="w-px h-4 bg-white/10" />
                   <b className="text-gold-soft text-sm">Religious Holiday</b>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-panel-2 border border-white/10 rounded-full">
                   <span className="text-[9px] text-muted-dim uppercase font-bold tracking-[0.2em]">National</span>
                   <div className="w-px h-4 bg-white/10" />
                   <b className="text-gold-soft text-sm">National Holiday</b>
                </div>
             </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
