
'use client';

import React, { useState, useMemo } from 'react';
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

// --------------------------------------------------------------------------------
// SIMULATED DATA
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
  const regionalIntel = REGIONAL_FACTS[country];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          
          {/* LAB KICKER */}
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
             <div className="space-y-1">
                <div className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase font-bold">Hero Simulation · Variant 5</div>
                <h1 className="text-2xl font-headline font-medium text-muted">Homepage Integration Preview</h1>
             </div>
             <div className="p-3 bg-white/5 rounded-lg border border-dashed border-white/10 max-w-xs">
                <p className="text-[10px] text-muted-dim leading-tight">
                  This page simulates exactly how the <b>Unified Container</b> logic will appear on the live hero. Use the Trip Checker to test reactivity.
                </p>
             </div>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
            
            {/* LEFT: HERO COPY + INTEL STACK (VARIANT 5) */}
            <div className="space-y-10 text-left">
              <div className="space-y-6">
                <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight">
                  Know before you fly. <br/> Know before you schedule.
                </h2>
                <p className="text-lg text-muted max-w-lg font-medium">
                  Check a country and your actual dates — before you book, schedule, or send a team across borders.
                </p>
              </div>

              {/* VARIANT 5: UNIFIED CONTAINER */}
              <div className="bg-[#171D3A] border border-white/18 rounded-2xl overflow-hidden divide-y divide-white/10 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                
                {/* Global Section */}
                <div className="p-6 md:p-8 space-y-5">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold font-headline text-lg text-white">Around the Globe</h4>
                    <span className="text-[9px] font-mono text-muted-dim tracking-[0.2em] uppercase font-bold">TODAY</span>
                  </div>
                  <div className="space-y-3.5">
                    {GLOBAL_TODAY.map(g => (
                      <div key={g.name} className="flex justify-between items-center text-[13.5px]">
                        <span className="font-medium"><b className="text-white">{g.name}</b> — {g.event}</span>
                        <span className="text-[9px] font-mono text-muted-dim uppercase font-bold tracking-wider">{g.type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regional Section (The Note) */}
                <div className="p-6 md:p-8 bg-white/[0.01]">
                   {regionalIntel ? (
                     <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                             <MapPin className="w-3.5 h-3.5 text-gold-soft" />
                             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-soft">REGIONAL INTEL</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3 h-3 text-teal/60" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-dim">Verified</span>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <h5 className="font-bold text-paper/90 text-[15px]">
                            {regionalIntel.country} · {regionalIntel.state} · {regionalIntel.event}
                          </h5>
                          <p className="text-[13px] text-muted leading-relaxed font-medium">
                            {regionalIntel.consequence}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-muted-dim font-bold uppercase tracking-widest pt-3 border-t border-white/5">
                           <RefreshCw className="w-3 h-3 animate-spin-slow" />
                           <span>Updated for {regionalIntel.country}</span>
                        </div>
                     </div>
                   ) : (
                     <div className="flex items-center gap-3 py-2">
                        <CheckCircle2 className="w-5 h-5 text-teal/40" />
                        <div className="space-y-0.5">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-dim">REGIONAL INTEL</p>
                          <p className="text-[12px] text-muted-dim italic">No regional variants identified for this date. National rules apply.</p>
                        </div>
                     </div>
                   )}
                </div>
              </div>

              {/* FOOTER LINK SIMULATION */}
              <a className="inline-flex items-center gap-2 text-xs font-bold text-gold-soft uppercase tracking-widest hover:text-gold transition-colors" href="#">
                 View Full date intelligence <Globe className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* RIGHT: TRIP CHECKER (REPLICATING PRODUCTION) */}
            <div className="checker text-left shadow-2xl border-white/10 bg-[#171D3A] rounded-2xl p-8 lg:p-10 sticky top-24">
              <div className="flex justify-between items-center mb-8">
                 <h3 className="font-headline font-medium text-xl">Trip impact checker</h3>
                 <div className="flex items-center gap-1.5 px-2.5 py-1 bg-teal/10 border border-teal/20 rounded-full">
                    <div className="w-1 h-1 rounded-full bg-teal animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-teal">Source Connected</span>
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
                    <input type="date" defaultValue="2026-11-01" className="w-full bg-[#1E2650] border border-white/18 text-white rounded-xl px-4 py-3 text-xs outline-none" />
                  </div>
                  <div className="checker-field">
                    <label>To</label>
                    <input type="date" defaultValue="2026-11-15" className="w-full bg-[#1E2650] border border-white/18 text-white rounded-xl px-4 py-3 text-xs outline-none" />
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
                      Note: Changing the destination here will dynamically update the <b>Regional Intel</b> feed on the left to reflect local jurisdiction rules.
                    </p>
                 </div>
              </div>
            </div>

          </div>

          {/* SECONDARY INFO BLOCK */}
          <div className="mt-40 pt-20 border-t border-white/10 max-w-3xl mx-auto text-center space-y-6">
             <h3 className="font-headline text-2xl italic">"The same date can mean something entirely different as you cross a border. We capture the nuance, not just the date."</h3>
             <div className="flex justify-center gap-4">
                <span className="font-mono text-[11px] text-muted-dim border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">Region-aware</span>
                <span className="font-mono text-[11px] text-muted-dim border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">Source-aware</span>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
