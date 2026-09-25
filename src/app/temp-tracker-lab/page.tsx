'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { ShieldCheck, Globe, Info, RefreshCw, List, LayoutGrid, Tablet, Table as TableIcon, AlignLeft, Grid3X3 } from "lucide-react";

// --------------------------------------------------------------------------------
// DATA & TYPES
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
  },
  JP: {
    state: "TOKYO",
    event: "Silver Week Opening",
    type: "National Holiday",
    consequence: "Japan Financial Markets (JPX) and banking systems are closed. Reduced operational capacity in Tokyo and Osaka business districts.",
  },
  US: {
    state: "FEDERAL",
    event: "Labor Day (Observed)",
    type: "National Holiday",
    consequence: "Federal Government offices and USPS are closed. Trading sessions for NYSE and NASDAQ are suspended.",
  },
  SG: {
    state: "NATIONAL",
    event: "Deepavali Season",
    type: "Religious Holiday",
    consequence: "Regional Bank Holiday. High density activity in Little India district. Public sector operates at reduced capacity.",
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
      
      <main className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="mb-10 space-y-2 text-left border-b border-white/10 pb-6">
            <div className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase font-bold">Lab v5.0 · Proportional High-Density</div>
            <h1 className="text-2xl font-headline font-medium">Restoring Regional Intel (7 Compact Options)</h1>
            <p className="text-sm text-muted max-w-2xl font-medium">
              Removed all gaudy highlights and hyped borders. Regional and Global carry equal weight.
              Change the <b>Destination</b> in the right column to update the <b>Intel</b> on the left.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
            
            {/* COLUMN 1: 7 DESIGN OPTIONS (LEFT) */}
            <div className="space-y-32 pb-40">
              
              {/* --- OPTION 1: COMPACT BALANCED --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <LayoutGrid className="w-4 h-4 text-gold" />
                   <span className="text-[11px] font-bold uppercase tracking-widest">Option 1: Balanced Dual Stack</span>
                </div>
                <div className="space-y-3">
                  <aside className="border border-white/10 rounded-lg bg-[#171D3A] p-5 shadow-sm">
                    <div className="flex justify-between items-baseline mb-4 border-b border-white/5 pb-2">
                      <h4 className="text-base font-bold font-headline">Around the Globe</h4>
                      <span className="text-[10px] font-mono text-muted-dim">15 SEPT</span>
                    </div>
                    <div className="space-y-2">
                       {GLOBAL_TODAY.map(g => (
                         <div key={g.code} className="flex justify-between items-center text-[13px]">
                            <span><b className="text-white">{g.name}</b> — {g.event}</span>
                            <span className="text-[9px] font-mono text-muted-dim uppercase">{g.type}</span>
                         </div>
                       ))}
                    </div>
                  </aside>

                  <aside className="border border-white/10 rounded-lg bg-[#171D3A] p-5 shadow-sm">
                    <div className="flex justify-between items-baseline mb-4 border-b border-white/5 pb-2">
                      <h4 className="text-base font-bold font-headline">{regionalIntel.state} INTEL</h4>
                      <div className="flex items-center gap-1.5">
                         <ShieldCheck className="w-3 h-3 text-teal" />
                         <span className="text-[9px] font-bold uppercase text-teal">Verified</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                       <h5 className="text-sm font-bold text-white">{regionalIntel.event}</h5>
                       <p className="text-sm text-muted leading-relaxed font-medium">{regionalIntel.consequence}</p>
                       <p className="text-[10px] text-muted-dim italic pt-1 flex items-center gap-2">
                         <RefreshCw className="w-3 h-3" /> Reactive to country selection.
                       </p>
                    </div>
                  </aside>
                </div>
              </div>

              {/* --- OPTION 2: INTEGRATED STATUS BOARD --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Tablet className="w-4 h-4 text-gold" />
                   <span className="text-[11px] font-bold uppercase tracking-widest">Option 2: Unified Status Board</span>
                </div>
                <div className="border border-white/10 rounded-lg overflow-hidden bg-[#171D3A]">
                   <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex justify-between items-baseline">
                      <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Operational Pulse · 15 Sept</h4>
                      <span className="text-[9px] font-mono text-muted-dim">92 Jurisdictions Indexed</span>
                   </div>
                   <div className="divide-y divide-white/5">
                      <div className="p-5 space-y-3">
                         <span className="text-[10px] font-mono text-teal uppercase font-bold tracking-widest">Global Overview</span>
                         <div className="grid md:grid-cols-3 gap-4">
                            {GLOBAL_TODAY.map(g => (
                              <div key={g.code} className="text-[12px]">
                                <p className="font-bold text-white">{g.name}</p>
                                <p className="text-[10px] text-muted-dim">{g.event}</p>
                              </div>
                            ))}
                         </div>
                      </div>
                      <div className="p-5 space-y-3 bg-white/[0.01]">
                         <span className="text-[10px] font-mono text-gold uppercase font-bold tracking-widest">{regionalIntel.state} CONTEXT</span>
                         <div className="space-y-1">
                            <p className="text-sm font-bold text-white">{regionalIntel.event} · <span className="text-gold-soft text-[10px] font-mono uppercase">{regionalIntel.type}</span></p>
                            <p className="text-sm text-muted leading-relaxed max-w-2xl">{regionalIntel.consequence}</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* --- OPTION 3: SEMANTIC LIST (NO CARDS) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <List className="w-4 h-4 text-gold" />
                   <span className="text-[11px] font-bold uppercase tracking-widest">Option 3: Semantic List</span>
                </div>
                <div className="space-y-8 p-4 border border-white/5 rounded-xl bg-white/[0.02]">
                   <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <span className="h-px bg-white/10 flex-1"></span>
                         <h4 className="text-[10px] font-mono font-bold text-muted-dim uppercase tracking-[0.3em]">World Today</h4>
                         <span className="h-px bg-white/10 flex-1"></span>
                      </div>
                      <div className="space-y-3">
                        {GLOBAL_TODAY.map(g => (
                          <div key={g.code} className="flex gap-4 items-baseline">
                             <span className="text-[11px] font-mono text-teal font-bold">{g.code}</span>
                             <span className="text-sm"><b>{g.name}</b> · {g.event}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <span className="h-px bg-white/10 flex-1"></span>
                         <h4 className="text-[10px] font-mono font-bold text-muted-dim uppercase tracking-[0.3em]">{regionalIntel.state} Intel</h4>
                         <span className="h-px bg-white/10 flex-1"></span>
                      </div>
                      <div className="space-y-2">
                         <h5 className="text-base font-bold font-headline">{regionalIntel.event}</h5>
                         <p className="text-sm text-muted leading-relaxed italic">{regionalIntel.consequence}</p>
                         <p className="text-[9px] font-mono text-muted-dim uppercase tracking-widest">Calculated Planning Fact</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* --- OPTION 4: UNIFIED SIGNAL PANE (SPLIT) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Tablet className="w-4 h-4 text-gold" />
                   <span className="text-[11px] font-bold uppercase tracking-widest">Option 4: Unified Signal Pane</span>
                </div>
                <div className="border border-white/10 rounded-lg overflow-hidden shadow-xl">
                   <div className="grid md:grid-cols-2 gap-px bg-white/10">
                      <div className="bg-[#121832] p-6 space-y-4">
                         <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Global Today</h4>
                         <div className="space-y-2.5">
                            {GLOBAL_TODAY.map(g => (
                              <div key={g.code} className="text-[13px] leading-snug">
                                <p className="font-bold text-white/90">{g.name}</p>
                                <p className="text-[11px] text-muted-dim font-medium">{g.event}</p>
                              </div>
                            ))}
                         </div>
                      </div>
                      <div className="bg-[#171D3A] p-6 space-y-4">
                         <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{regionalIntel.state}</h4>
                         <div className="space-y-2">
                            <h5 className="text-sm font-bold">{regionalIntel.event}</h5>
                            <p className="text-[13px] text-muted leading-relaxed font-medium">
                              {regionalIntel.consequence}
                            </p>
                         </div>
                         <div className="pt-2 border-t border-white/5 text-[9px] text-muted-dim font-mono uppercase tracking-widest">
                           Jurisdictional Fact
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* --- OPTION 5: HIGH-DENSITY TABLE --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <TableIcon className="w-4 h-4 text-gold" />
                   <span className="text-[11px] font-bold uppercase tracking-widest">Option 2: High-Density Table</span>
                </div>
                <div className="border border-white/10 rounded-lg overflow-hidden bg-[#171D3A] font-ui">
                   <table className="w-full text-left text-[12px]">
                      <thead>
                         <tr className="bg-white/5 text-muted-dim text-[10px] font-mono uppercase tracking-widest">
                            <th className="p-4 font-bold">Scope</th>
                            <th className="p-4 font-bold">Event / Observance</th>
                            <th className="p-4 font-bold">Type</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {GLOBAL_TODAY.map(g => (
                           <tr key={g.code}>
                              <td className="p-4 font-bold text-teal">{g.name}</td>
                              <td className="p-4">{g.event}</td>
                              <td className="p-4 text-muted-dim uppercase text-[10px]">{g.type}</td>
                           </tr>
                         ))}
                         <tr className="bg-gold/5">
                            <td className="p-4 font-bold text-gold">{regionalIntel.state}</td>
                            <td className="p-4">
                               <p className="font-bold mb-1">{regionalIntel.event}</p>
                               <p className="text-xs text-muted leading-relaxed max-w-sm">{regionalIntel.consequence}</p>
                            </td>
                            <td className="p-4 text-gold-soft uppercase text-[10px] font-bold">Planning Fact</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
              </div>

              {/* --- OPTION 6: MINIMALIST TEXT BLOCKS --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <AlignLeft className="w-4 h-4 text-gold" />
                   <span className="text-[11px] font-bold uppercase tracking-widest">Option 6: Minimalist Text Blocks</span>
                </div>
                <div className="grid md:grid-cols-2 gap-12 p-2">
                   <div className="space-y-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal">Global Context</h4>
                      <div className="space-y-3">
                        {GLOBAL_TODAY.map(g => (
                          <p key={g.code} className="text-sm leading-tight">
                            <b className="text-white">{g.name}</b> · {g.event}
                          </p>
                        ))}
                      </div>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">{regionalIntel.state} Context</h4>
                      <div className="space-y-2">
                        <p className="text-sm font-bold">{regionalIntel.event}</p>
                        <p className="text-[13px] text-muted leading-relaxed">{regionalIntel.consequence}</p>
                        <p className="text-[9px] text-muted-dim font-bold uppercase tracking-widest pt-2">Reactive Intelligence Feed</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* --- OPTION 7: BENTO DASHBOARD --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Grid3X3 className="w-4 h-4 text-gold" />
                   <span className="text-[11px] font-bold uppercase tracking-widest">Option 7: Bento Dashboard</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                   <div className="md:col-span-2 p-5 bg-[#171D3A] border border-white/10 rounded-lg space-y-4">
                      <span className="text-[10px] font-mono text-teal font-bold uppercase">World Pulse</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                         {GLOBAL_TODAY.map(g => (
                           <div key={g.code} className="text-xs">
                              <p className="font-bold text-white">{g.name}</p>
                              <p className="text-muted-dim">{g.event}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="p-5 bg-white/[0.03] border border-white/10 rounded-lg flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono text-gold font-bold uppercase">{regionalIntel.state}</span>
                        <p className="text-sm font-bold">{regionalIntel.event}</p>
                        <p className="text-[11px] text-muted leading-relaxed line-clamp-4">{regionalIntel.consequence}</p>
                      </div>
                      <div className="pt-4 text-[9px] font-bold text-gold uppercase tracking-widest">
                         Live Planning Signal
                      </div>
                   </div>
                </div>
              </div>

            </div>

            {/* COLUMN 2: TRIP IMPACT CHECKER (RIGHT) */}
            <div className="checker text-left sticky top-24 !p-6 shadow-2xl border-white/10 h-fit bg-[#171D3A] rounded-xl">
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

              <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-dashed border-white/10">
                   <Info className="w-4 h-4 text-gold-soft shrink-0 mt-0.5" />
                   <p className="text-[11px] text-muted leading-relaxed font-medium">
                    This lab simulates <b>Sept 15, 2026</b>. Use the Destination menu above to test reactive intelligence mapping.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
