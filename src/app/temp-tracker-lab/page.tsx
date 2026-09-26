'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  RefreshCw, 
  LayoutGrid, 
  Tablet, 
  List, 
  Table as TableIcon, 
  AlignLeft, 
  Grid3X3,
  MousePointerClick,
  Monitor,
  Info,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

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
  },
  FR: null // Example for "No Regional Impact"
};

const COUNTRY_OPTIONS = [
  { code: 'IN', name: 'India' },
  { code: 'JP', name: 'Japan' },
  { code: 'US', name: 'United States' },
  { code: 'SG', name: 'Singapore' },
  { code: 'FR', name: 'France' }
];

// --------------------------------------------------------------------------------
// HELPER COMPONENTS
// --------------------------------------------------------------------------------

const ReactiveNote = () => (
  <div className="flex items-center gap-2 text-[9px] text-muted-dim font-bold uppercase tracking-widest mt-2">
    <RefreshCw className="w-3 h-3 animate-spin-slow" />
    <span>Regional intel · Reactive to country selection</span>
  </div>
);

const NoRegionalImpact = () => (
  <div className="p-4 border border-dashed border-white/10 rounded-xl bg-white/[0.01] flex items-center gap-3">
    <CheckCircle2 className="w-4 h-4 text-teal/40" />
    <div className="space-y-0.5 text-left">
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-dim">REGIONAL INTEL</p>
      <p className="text-[11px] text-muted-dim italic">No regional variants identified for this date. National rules apply.</p>
    </div>
  </div>
);

// --------------------------------------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------------------------------------

export default function TempTrackerLabPage() {
  const [country, setCountry] = useState('IN');
  const [mode, setMode] = useState('traveler');
  
  const regionalIntel = REGIONAL_FACTS[country];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12">
        <div className="max-w-[1180px] mx-auto px-6">
          
          <div className="mb-12 space-y-2 text-left border-b border-white/10 pb-6">
            <div className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase font-bold">Lab v8.0 · Unified & Contextual</div>
            <h1 className="text-3xl font-headline font-medium">Standardized Regional Intel</h1>
            <p className="text-sm text-muted max-w-2xl font-medium leading-relaxed">
              Standardizing labels to "REGIONAL INTEL" and testing unified/compact layouts that handle empty states gracefully.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
            
            {/* COLUMN 1: 10 DESIGN OPTIONS (LEFT) */}
            <div className="space-y-24 pb-40">

              {/* --- OPTION 1: INTEGRATED NOTE --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Monitor className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 1: The Integrated Note</span>
                </div>
                <aside className="border border-white/18 rounded-2xl bg-[#171D3A] overflow-hidden shadow-2xl">
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                      <h4 className="text-2xl font-bold font-headline text-white">Around the Globe</h4>
                      <span className="text-[10px] font-mono text-muted-dim tracking-widest uppercase">TODAY</span>
                    </div>
                    
                    <div className="space-y-4">
                       {GLOBAL_TODAY.map(g => (
                         <div key={g.code} className="flex justify-between items-center text-[13.5px]">
                            <span><b className="text-white">{g.name}</b> — {g.event}</span>
                            <span className="text-[9px] font-mono text-muted-dim uppercase font-bold tracking-wider">{g.type}</span>
                         </div>
                       ))}
                    </div>

                    <div className="pt-6 border-t border-white/10">
                       {regionalIntel ? (
                         <div className="space-y-2 text-left">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-soft">REGIONAL INTEL</span>
                              <div className="flex items-center gap-1">
                                 <ShieldCheck className="w-3 h-3 text-teal/60" />
                                 <span className="text-[9px] font-bold uppercase tracking-widest text-muted-dim">Verified</span>
                              </div>
                            </div>
                            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-1">
                              <h5 className="text-sm font-bold text-paper/90">{regionalIntel.event} · {regionalIntel.state}</h5>
                              <p className="text-[12.5px] text-muted leading-relaxed font-medium">{regionalIntel.consequence}</p>
                            </div>
                            <ReactiveNote />
                         </div>
                       ) : <NoRegionalImpact />}
                    </div>
                  </div>
                </aside>
              </div>
              
              {/* --- OPTION 2: UNIFIED SPLIT CARD (New) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Grid3X3 className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 2: Unified Split View</span>
                </div>
                <aside className="border border-white/18 rounded-2xl bg-[#171D3A] overflow-hidden shadow-xl grid md:grid-cols-[1.2fr_1fr] divide-x divide-white/10">
                   <div className="p-6 md:p-8 space-y-6 text-left">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-dim">Global Pulse</h4>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse shadow-[0_0_8px_var(--teal)]"></span>
                      </div>
                      <div className="space-y-4">
                        {GLOBAL_TODAY.map(g => (
                          <div key={g.code} className="space-y-0.5">
                            <p className="text-xs font-bold text-white">{g.name}</p>
                            <p className="text-[11px] text-muted-dim leading-tight">{g.event}</p>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div className="p-6 md:p-8 bg-white/[0.01] text-left">
                      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-soft mb-6">Regional Intel</h4>
                      {regionalIntel ? (
                        <div className="space-y-4">
                           <div className="space-y-1">
                              <p className="text-lg font-bold font-headline leading-tight">{regionalIntel.event}</p>
                              <p className="text-[10px] font-bold text-muted-dim uppercase tracking-widest">{regionalIntel.state} · {regionalIntel.type}</p>
                           </div>
                           <p className="text-[12.5px] text-muted leading-relaxed border-l border-gold/30 pl-4">{regionalIntel.consequence}</p>
                           <ReactiveNote />
                        </div>
                      ) : (
                        <div className="flex flex-col h-full justify-center text-center opacity-40">
                           <AlertCircle className="w-5 h-5 mx-auto mb-2" />
                           <p className="text-[11px] font-bold uppercase tracking-widest">No Regional Conflict</p>
                        </div>
                      )}
                   </div>
                </aside>
              </div>

              {/* --- OPTION 3: THE EMBEDDED SIGNAL (New Idea) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Info className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 3: The Embedded Signal</span>
                </div>
                <div className="p-8 border border-white/10 rounded-2xl bg-[#171D3A] space-y-10 text-left">
                   <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold font-headline">Around the Globe</h4>
                      <div className="flex gap-2">
                         <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-bold">LIVE</span>
                         <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-bold">15 SEPT</span>
                      </div>
                   </div>
                   
                   <div className="grid sm:grid-cols-2 gap-12">
                      <div className="space-y-5">
                         {GLOBAL_TODAY.map(g => (
                           <div key={g.code} className="flex gap-4 items-start">
                              <span className="text-xs font-mono font-bold text-teal">{g.code}</span>
                              <div className="space-y-0.5">
                                 <p className="text-sm font-bold">{g.name}</p>
                                 <p className="text-[11px] text-muted-dim">{g.event}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                      <div className="relative">
                         <div className="absolute left-[-24px] top-0 bottom-0 w-px bg-white/10 hidden sm:block"></div>
                         {regionalIntel ? (
                           <div className="space-y-4">
                              <div className="space-y-1">
                                 <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">REGIONAL INTEL</p>
                                 <p className="text-base font-bold font-headline">{regionalIntel.event}</p>
                              </div>
                              <p className="text-[12px] text-muted leading-relaxed">{regionalIntel.consequence}</p>
                              <ReactiveNote />
                           </div>
                         ) : <NoRegionalImpact />}
                      </div>
                   </div>
                </div>
              </div>

              {/* --- OPTION 4: THE DUAL CONSOLE --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Tablet className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 4: Dual Console (Tight)</span>
                </div>
                <div className="border border-white/18 rounded-2xl bg-[#171D3A] overflow-hidden shadow-2xl">
                   <div className="p-6 border-b border-white/10 text-left">
                      <h4 className="text-xl font-bold font-headline text-white mb-6">Global Pulse</h4>
                      <div className="grid grid-cols-3 gap-6">
                         {GLOBAL_TODAY.map(g => (
                           <div key={g.code} className="space-y-1">
                              <p className="text-xs font-bold text-paper">{g.name}</p>
                              <p className="text-[10px] text-muted-dim leading-tight">{g.event}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="p-6 bg-white/[0.01] text-left">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-xs font-bold font-mono text-gold-soft uppercase tracking-widest">REGIONAL INTEL</h4>
                        <ReactiveNote />
                      </div>
                      {regionalIntel ? (
                        <div className="space-y-2">
                           <p className="text-sm font-bold text-white">{regionalIntel.event} · <span className="text-[10px] font-mono uppercase text-muted-dim">{regionalIntel.state}</span></p>
                           <p className="text-[13px] text-muted leading-relaxed font-medium">{regionalIntel.consequence}</p>
                        </div>
                      ) : <NoRegionalImpact />}
                   </div>
                </div>
              </div>

              {/* --- OPTION 5: DATA AUDIT LIST --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <TableIcon className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 5: Audit Feed Style</span>
                </div>
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#171D3A] text-left">
                   <div className="p-6 border-b border-white/10">
                      <h4 className="text-lg font-bold font-headline text-white">Global Feed</h4>
                   </div>
                   <div className="divide-y divide-white/5">
                      {GLOBAL_TODAY.map(g => (
                        <div key={g.code} className="flex justify-between items-center p-4 px-6 text-sm">
                           <span><b className="text-teal">{g.code}</b> · {g.name} — {g.event}</span>
                           <span className="text-[9px] font-mono text-muted-dim uppercase">{g.type}</span>
                        </div>
                      ))}
                      <div className="p-6 bg-white/[0.02]">
                         {regionalIntel ? (
                           <>
                             <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">REGIONAL INTEL</span>
                                <ReactiveNote />
                             </div>
                             <p className="text-sm font-bold text-white mb-1">{regionalIntel.event} ({regionalIntel.state})</p>
                             <p className="text-xs text-muted leading-relaxed max-w-xl">{regionalIntel.consequence}</p>
                           </>
                         ) : <NoRegionalImpact />}
                      </div>
                   </div>
                </div>
              </div>

              {/* --- OPTION 6: THE BENTO CONTEXT --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Grid3X3 className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 6: Bento Snapshot</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                   <div className="p-6 bg-[#171D3A] border border-white/18 rounded-2xl space-y-6 shadow-xl">
                      <h4 className="text-xl font-bold font-headline text-white">World Pulse</h4>
                      <div className="space-y-3">
                         {GLOBAL_TODAY.map(g => (
                           <div key={g.code} className="flex items-center justify-between text-sm">
                              <span className="font-bold">{g.name}</span>
                              <span className="text-[10px] text-muted-dim uppercase">{g.code}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-6 flex flex-col justify-between">
                      {regionalIntel ? (
                        <>
                          <div className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">REGIONAL INTEL</p>
                            <h5 className="font-bold text-white">{regionalIntel.event}</h5>
                            <p className="text-xs text-muted-dim leading-relaxed font-medium">{regionalIntel.consequence.slice(0, 100)}...</p>
                          </div>
                          <div className="pt-4 border-t border-white/5">
                            <ReactiveNote />
                          </div>
                        </>
                      ) : <NoRegionalImpact />}
                   </div>
                </div>
              </div>

              {/* --- OPTION 7: THE MINIMALIST STRIP (New) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <AlignLeft className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 7: The Minimalist Strip</span>
                </div>
                <div className="space-y-6 text-left p-8 border border-white/5 rounded-3xl bg-white/[0.01]">
                   <div className="space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-muted-dim">Global Today</h4>
                      <div className="flex flex-wrap gap-4">
                         {GLOBAL_TODAY.map(g => (
                           <span key={g.code} className="px-3 py-1.5 border border-white/10 rounded-lg text-[13px]">
                             <b className="text-white">{g.code}</b> {g.event}
                           </span>
                         ))}
                      </div>
                   </div>
                   <div className="pt-6 border-t border-white/10">
                      {regionalIntel ? (
                        <div className="flex items-start gap-4">
                           <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                              <Info className="w-5 h-5 text-gold-soft" />
                           </div>
                           <div className="space-y-1">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-gold">REGIONAL INTEL: {regionalIntel.state}</p>
                              <p className="text-sm font-bold text-white">{regionalIntel.event}</p>
                              <p className="text-[12.5px] text-muted leading-relaxed">{regionalIntel.consequence}</p>
                              <ReactiveNote />
                           </div>
                        </div>
                      ) : <NoRegionalImpact />}
                   </div>
                </div>
              </div>

              {/* --- OPTION 8: TECHNICAL CONSOLE --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Monitor className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 8: Operational Console</span>
                </div>
                <div className="font-mono p-8 border border-white/18 rounded-2xl bg-[#0B0F22] shadow-2xl space-y-8 text-left">
                   <div className="space-y-4">
                      <p className="text-[10px] text-teal font-bold uppercase tracking-widest">>> GLOBAL_FEED_SNAPSHOT</p>
                      <div className="space-y-2 text-xs">
                        {GLOBAL_TODAY.map(g => (
                          <div key={g.code} className="flex gap-4">
                             <span className="text-muted-dim">[{g.code}]</span>
                             <span>{g.event.toUpperCase()}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div className="space-y-4 pt-6 border-t border-white/10">
                      <p className="text-[10px] text-gold font-bold uppercase tracking-widest">>> REGIONAL_INTEL_REACTIVE</p>
                      {regionalIntel ? (
                        <div className="space-y-2 text-xs">
                           <p className="text-white font-bold">{regionalIntel.event.toUpperCase()} [{regionalIntel.state}]</p>
                           <p className="text-muted-dim leading-relaxed">{regionalIntel.consequence}</p>
                           <div className="pt-2">
                              <ReactiveNote />
                           </div>
                        </div>
                      ) : <p className="text-xs text-muted-dim italic">NO REGIONAL CONFLICT IDENTIFIED.</p>}
                   </div>
                </div>
              </div>

            </div>

            {/* COLUMN 2: TRIP IMPACT CHECKER (RIGHT) */}
            <div className="checker text-left sticky top-24 !p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border-white/10 h-fit bg-[#171D3A] rounded-2xl">
              <div className="checker-top !mb-6">
                <h3 className="font-headline font-medium text-xl">Trip impact checker</h3>
              </div>
              
              <div className="mode-toggle !mb-6">
                <button className={cn("!py-2", mode === 'traveler' && "active")} onClick={() => setMode('traveler')}>Travel</button>
                <button className={cn("!py-2", mode === 'study' && "active")} onClick={() => setMode('study')}>Study</button>
                <button className={cn("!py-2", mode === 'corporate' && "active")} onClick={() => setMode('corporate')}>Business</button>
              </div>

              <div className="checker-row !mb-4">
                <div className="checker-field">
                  <label>Destination / Jurisdiction</label>
                  <select value={country} onChange={e => setCountry(e.target.value)} className="!py-3 !text-sm">
                    {COUNTRY_OPTIONS.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="checker-field">
                  <label>From</label>
                  <input type="date" defaultValue="2026-09-15" className="!py-3 !text-sm" />
                </div>
                <div className="checker-field">
                  <label>To</label>
                  <input type="date" defaultValue="2026-09-25" className="!py-3 !text-sm" />
                </div>
              </div>

              <button className="w-full py-4 bg-gold text-ink font-bold text-[12px] uppercase tracking-[0.2em] rounded-xl hover:bg-gold-soft transition-all active:scale-[0.98] shadow-lg">
                Check Impact
              </button>

              <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-dashed border-white/10">
                   <div className="p-2 bg-gold/10 rounded-full shrink-0">
                      <MousePointerClick className="w-4 h-4 text-gold-soft" />
                   </div>
                   <p className="text-[11px] text-muted leading-relaxed font-medium">
                    <b>Live Interaction:</b> Change the Destination above. All <b>Regional Intel</b> notes on the left will update instantly. Try <b>France</b> for the empty state.
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
