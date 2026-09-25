'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { ShieldCheck } from "lucide-react";

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
            <div className="text-[12px] font-mono text-gold-soft tracking-[0.3em] uppercase">Intelligence Prototype</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium leading-tight">Idea 1: Dual-Card Intel Stack</h1>
            <p className="text-xl text-muted max-w-2xl font-medium">
              Placement: Intelligence on the left, Trip Impact Checker on the right. Terminology: "Religious Holiday" & "National Holiday".
            </p>
          </div>

          <div className="hero-grid">
            
            {/* COLUMN 1: INTELLIGENCE (LEFT) */}
            <div className="space-y-4">
              
              {/* CARD 1: GLOBAL PULSE */}
              <aside className="hero-tracker !my-0 text-left">
                <div className="hero-tracker-head">
                  <div>
                    <span className="hero-tracker-kicker">WORLD TODAY</span>
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

              {/* CARD 2: REGIONAL INTEL (DESTINATION SPECIFIC) */}
              {regionalIntel && (
                <aside className="hero-tracker !my-0 border-teal/30 bg-teal/5 animate-in fade-in slide-in-from-top-2 duration-500 text-left">
                  <div className="hero-tracker-head border-teal/10">
                    <div>
                      <span className="hero-tracker-kicker !text-gold-soft">{regionalIntel.state} INTEL</span>
                      <strong className="text-lg text-white">REGIONAL PLANNING FACT</strong>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 border border-teal/30 bg-teal/10 rounded-full">
                       <ShieldCheck className="w-3 h-3 text-teal" />
                       <span className="text-[8px] font-bold uppercase tracking-wider text-teal">High Confidence</span>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                     <div className="space-y-1">
                        <h4 className="text-xl font-bold font-headline">{regionalIntel.event}</h4>
                        <p className="text-[10px] font-bold text-gold-soft uppercase tracking-widest">{regionalIntel.type} · JURISDICTIONAL</p>
                     </div>
                     <p className="text-[13.5px] text-paper/90 leading-relaxed font-medium">
                        {regionalIntel.consequence}
                     </p>
                     <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-muted-dim">
                        <span>SOURCE: AUTHORITATIVE REFERENCE</span>
                        <span className="text-teal">VERIFIED</span>
                     </div>
                  </div>
                </aside>
              )}

              <a className="hero-tracker-link text-left" href="/date-intelligence">
                EXPLORE FULL DATE INTELLIGENCE <span>→</span>
              </a>
            </div>

            {/* COLUMN 2: TRIP IMPACT CHECKER (RIGHT) */}
            <div className="checker text-left">
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

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-muted leading-relaxed font-medium">
                  <strong>PROTOTYPE NOTE:</strong> Changing the destination to "India" above will trigger the regional intelligence card on the left to show Maharashtra-specific data.
                </p>
              </div>
            </div>

          </div>

          {/* DOCUMENTATION FOOTER */}
          <section className="mt-32 p-12 rounded-[40px] border-2 border-dashed border-white/10 bg-white/5 text-center space-y-6">
             <h3 className="text-2xl font-headline font-bold">Standardized Terminology</h3>
             <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 px-6 py-3 bg-panel-2 border border-white/10 rounded-full">
                   <span className="text-xs text-muted-dim uppercase font-bold tracking-widest">Internal Category</span>
                   <div className="w-px h-4 bg-white/10" />
                   <b className="text-gold-soft text-sm">Religious Holiday</b>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-panel-2 border border-white/10 rounded-full">
                   <span className="text-xs text-muted-dim uppercase font-bold tracking-widest">Internal Category</span>
                   <div className="w-px h-4 bg-white/10" />
                   <b className="text-gold-soft text-sm">National Holiday</b>
                </div>
             </div>
             <p className="text-sm text-muted max-w-xl mx-auto leading-relaxed">
                This terminology update ensures that impact descriptions read naturally (e.g., "Ganesh Chaturthi is a Religious Holiday") and carry the correct legal weight for business and travel users.
             </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
