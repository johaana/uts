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
  Info
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
  }
};

const COUNTRY_OPTIONS = [
  { code: 'IN', name: 'India' },
  { code: 'JP', name: 'Japan' },
  { code: 'US', name: 'United States' },
  { code: 'SG', name: 'Singapore' }
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
            <div className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase font-bold">Lab v7.0 · Subtle Hierarchy</div>
            <h1 className="text-3xl font-headline font-medium">Regional Intel as a Note</h1>
            <p className="text-sm text-muted max-w-2xl font-medium leading-relaxed">
              Regional data is presented as a secondary note or status block, integrated seamlessly into the existing hero card style without gaudy highlights.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
            
            {/* COLUMN 1: 8 DESIGN OPTIONS (LEFT) */}
            <div className="space-y-20 pb-40">

              {/* --- OPTION 1: THE INTEGRATED NOTE (FAVORITE) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Monitor className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Option 1: Integrated Note (Single Card)</span>
                </div>
                <aside className="border border-white/18 rounded-2xl bg-[#171D3A] overflow-hidden shadow-2xl">
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                      <h4 className="text-2xl font-bold font-headline text-white">Around the Globe</h4>
                      <span className="text-[10px] font-mono text-muted-dim tracking-widest uppercase">TODAY · 15 SEPT</span>
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
                       <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-soft">{regionalIntel.state} INTEL</span>
                            <div className="flex items-center gap-1">
                               <ShieldCheck className="w-3 h-3 text-teal/60" />
                               <span className="text-[9px] font-bold uppercase tracking-widest text-muted-dim">Verified</span>
                            </div>
                          </div>
                          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2">
                            <h5 className="text-sm font-bold text-paper/90">{regionalIntel.event}</h5>
                            <p className="text-[12.5px] text-muted leading-relaxed font-medium">{regionalIntel.consequence}</p>
                          </div>
                          <ReactiveNote />
                       </div>
                    </div>
                  </div>
                  <a className="block p-4 bg-white/[0.03] text-center text-[11px] font-bold text-gold-soft uppercase tracking-widest border-t border-white/10 hover:bg-white/5 transition-colors">
                    View Full Date Intelligence →
                  </a>
                </aside>
              </div>
              
              {/* --- OPTION 2: THE SUBTLE FOOTNOTE --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <AlignLeft className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Option 2: Subtle Footnote</span>
                </div>
                <div className="space-y-4">
                  <aside className="border border-white/18 rounded-2xl bg-[#171D3A] p-6 md:p-8 shadow-xl">
                    <h4 className="text-2xl font-bold font-headline text-white mb-6">Around the Globe</h4>
                    <div className="space-y-3">
                       {GLOBAL_TODAY.map(g => (
                         <div key={g.code} className="flex justify-between items-center text-[13.5px]">
                            <span><b className="text-white">{g.name}</b> — {g.event}</span>
                            <span className="text-[9px] font-mono text-muted-dim uppercase">{g.type}</span>
                         </div>
                       ))}
                    </div>
                  </aside>
                  <div className="px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl flex items-start gap-3">
                     <Info className="w-4 h-4 text-gold-soft shrink-0 mt-0.5" />
                     <div className="space-y-1">
                        <p className="text-xs font-bold text-paper uppercase tracking-widest">{regionalIntel.state} INTEL: {regionalIntel.event}</p>
                        <p className="text-[12px] text-muted leading-relaxed">{regionalIntel.consequence}</p>
                        <ReactiveNote />
                     </div>
                  </div>
                </div>
              </div>

              {/* --- OPTION 3: THE DUAL CONSOLE --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Tablet className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Option 3: Dual Console Hierarchy</span>
                </div>
                <div className="border border-white/18 rounded-2xl bg-[#171D3A] overflow-hidden shadow-2xl">
                   <div className="p-6 md:p-8 border-b border-white/10">
                      <h4 className="text-xl font-bold font-headline text-white mb-6">Global Pulse</h4>
                      <div className="grid sm:grid-cols-3 gap-6">
                         {GLOBAL_TODAY.map(g => (
                           <div key={g.code} className="space-y-1">
                              <p className="text-xs font-bold text-paper">{g.name}</p>
                              <p className="text-[10px] text-muted-dim leading-tight">{g.event}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="p-6 md:p-8 bg-white/[0.01]">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-xs font-bold font-mono text-gold-soft uppercase tracking-widest">{regionalIntel.state} CONTEXT</h4>
                        <ReactiveNote />
                      </div>
                      <div className="space-y-2">
                         <p className="text-sm font-bold text-white">{regionalIntel.event} · <span className="text-[10px] font-mono uppercase text-muted-dim">{regionalIntel.type}</span></p>
                         <p className="text-[13px] text-muted leading-relaxed font-medium">{regionalIntel.consequence}</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* --- OPTION 4: SIDELINE INTEL --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Grid3X3 className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Option 4: Sideline Status</span>
                </div>
                <div className="grid md:grid-cols-[1fr_200px] gap-4">
                  <aside className="border border-white/18 rounded-2xl bg-[#171D3A] p-6 shadow-xl">
                    <h4 className="text-xl font-bold font-headline text-white mb-6">World Today</h4>
                    <div className="space-y-3">
                       {GLOBAL_TODAY.map(g => (
                         <div key={g.code} className="text-sm border-l-2 border-white/5 pl-4 hover:border-teal transition-all">
                            <p className="font-bold text-white">{g.name}</p>
                            <p className="text-[11px] text-muted-dim">{g.event}</p>
                         </div>
                       ))}
                    </div>
                  </aside>
                  <div className="border border-dashed border-white/20 rounded-2xl p-5 bg-white/[0.01] flex flex-col justify-between">
                     <div className="space-y-3">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gold">{regionalIntel.state} INTEL</p>
                        <p className="text-xs font-bold leading-tight">{regionalIntel.event}</p>
                        <p className="text-[11px] text-muted-dim leading-relaxed">{regionalIntel.consequence.slice(0, 80)}...</p>
                     </div>
                     <ReactiveNote />
                  </div>
                </div>
              </div>

              {/* --- OPTION 5: DATA AUDIT LIST --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <TableIcon className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Option 5: High-Density Audit</span>
                </div>
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#171D3A]">
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
                         <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{regionalIntel.state} NOTE</span>
                            <ReactiveNote />
                         </div>
                         <p className="text-sm font-bold text-white mb-1">{regionalIntel.event}</p>
                         <p className="text-xs text-muted leading-relaxed max-w-xl">{regionalIntel.consequence}</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* --- OPTION 6: THE BENTO CONTEXT --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Grid3X3 className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Option 6: Bento Context</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
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
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{regionalIntel.state} INTEL</p>
                        <h5 className="font-bold text-white">{regionalIntel.event}</h5>
                        <p className="text-xs text-muted leading-relaxed font-medium">{regionalIntel.consequence}</p>
                      </div>
                      <div className="pt-4 border-t border-white/5">
                        <ReactiveNote />
                      </div>
                   </div>
                </div>
              </div>

              {/* --- OPTION 7: MINIMALIST BLOCK --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <AlignLeft className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Option 7: Editorial Block</span>
                </div>
                <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.01] space-y-12">
                   <div className="space-y-6">
                      <h4 className="text-2xl font-bold font-headline">Around the Globe</h4>
                      <div className="space-y-4">
                         {GLOBAL_TODAY.map(g => (
                           <div key={g.code} className="flex gap-4 items-baseline">
                              <span className="font-mono text-teal text-xs font-bold">{g.code}</span>
                              <span className="text-lg"><b>{g.name}</b> · <span className="text-muted">{g.event}</span></span>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="pt-8 border-t border-white/10 space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="text-base font-bold uppercase tracking-widest text-gold-soft">{regionalIntel.state}</h4>
                        <ReactiveNote />
                      </div>
                      <p className="text-sm font-bold">{regionalIntel.event}</p>
                      <p className="text-base text-muted leading-relaxed">{regionalIntel.consequence}</p>
                   </div>
                </div>
              </div>

              {/* --- OPTION 8: TECHNICAL CONSOLE --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Monitor className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Option 8: Operational Console</span>
                </div>
                <div className="font-mono p-8 border border-white/18 rounded-2xl bg-[#0B0F22] shadow-2xl space-y-8">
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
                      <p className="text-[10px] text-gold font-bold uppercase tracking-widest">>> {regionalIntel.state}_INTEL</p>
                      <div className="space-y-2 text-xs">
                         <p className="text-white font-bold">{regionalIntel.event.toUpperCase()}</p>
                         <p className="text-muted-dim leading-relaxed">{regionalIntel.consequence}</p>
                         <div className="pt-2">
                            <ReactiveNote />
                         </div>
                      </div>
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
                    <b>Live Interaction:</b> Change the Destination above. All <b>Regional Intel</b> notes on the left will update instantly.
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
