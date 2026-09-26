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
  Table as TableIcon, 
  AlignLeft, 
  Grid3X3,
  MousePointerClick,
  Monitor,
  Info,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Fingerprint
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
  FR: null 
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
  <div className="flex items-start gap-2 text-[9px] text-muted-dim font-bold uppercase tracking-widest mt-3 pt-3 border-t border-white/5">
    <RefreshCw className="w-3 h-3 animate-spin-slow mt-0.5" />
    <span className="leading-relaxed">This shows regional intel for the selected country. Changes with checker selection.</span>
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
            <div className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase font-bold">Lab v9.0 · High Context & Unified</div>
            <h1 className="text-3xl font-headline font-medium">Regional Intelligence Architecture</h1>
            <p className="text-sm text-muted max-w-2xl font-medium leading-relaxed">
              Testing improved country-context labeling and unified layouts where Global and Regional data share a single visual logic. 
              <strong> Change "Destination" on the right to see live updates.</strong>
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
            
            {/* COLUMN 1: 10 DESIGN OPTIONS (LEFT) */}
            <div className="space-y-24 pb-40">

              {/* --- OPTION 1: THE REPLICA (current hero feel) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Monitor className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 1: Integrated Note (Hero Replica)</span>
                </div>
                <aside className="border border-white/18 rounded-2xl bg-[#171D3A] overflow-hidden shadow-2xl">
                  <div className="p-6 space-y-6">
                    <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                      <h4 className="text-xl font-bold font-headline text-white">Around the Globe</h4>
                      <span className="text-[10px] font-mono text-muted-dim tracking-widest uppercase">TODAY</span>
                    </div>
                    
                    <div className="space-y-4">
                       {GLOBAL_TODAY.map(g => (
                         <div key={g.code} className="flex justify-between items-center text-[13px]">
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
                              <h5 className="text-sm font-bold text-paper/90">{regionalIntel.event} · {regionalIntel.country} · {regionalIntel.state}</h5>
                              <p className="text-[12px] text-muted leading-relaxed font-medium">{regionalIntel.consequence}</p>
                            </div>
                            <ReactiveNote />
                         </div>
                       ) : <NoRegionalImpact />}
                    </div>
                  </div>
                </aside>
              </div>
              
              {/* --- OPTION 2: UNIFIED STATUS FEED (Cleanest) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <List className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 2: Unified Status Feed</span>
                </div>
                <div className="border border-white/10 rounded-2xl bg-[#171D3A] overflow-hidden text-left">
                   <div className="p-6 bg-white/[0.02] border-b border-white/5 flex justify-between items-center">
                      <h4 className="text-sm font-bold uppercase tracking-widest">Temporal Intelligence</h4>
                      <span className="text-[9px] font-mono text-muted-dim">15 SEP 2026</span>
                   </div>
                   <div className="divide-y divide-white/5">
                      {GLOBAL_TODAY.map(g => (
                        <div key={g.code} className="p-4 px-6 flex justify-between items-center">
                           <div className="space-y-0.5">
                              <p className="text-[9px] font-bold text-teal/60 uppercase tracking-tighter">GLOBAL · {g.name}</p>
                              <p className="text-sm font-bold">{g.event}</p>
                           </div>
                           <span className="text-[9px] font-bold uppercase text-muted-dim">{g.type}</span>
                        </div>
                      ))}
                      {regionalIntel ? (
                        <div className="p-6 bg-gold/[0.03]">
                           <div className="space-y-3">
                              <div className="flex justify-between items-start">
                                 <div className="space-y-0.5">
                                    <p className="text-[10px] font-bold text-gold uppercase tracking-widest">REGIONAL · {regionalIntel.country} · {regionalIntel.state}</p>
                                    <p className="text-base font-bold text-white">{regionalIntel.event}</p>
                                 </div>
                                 <Badge variant="outline" className="border-gold/30 text-gold text-[8px]">PLANNING FACT</Badge>
                              </div>
                              <p className="text-[12.5px] text-muted leading-relaxed">{regionalIntel.consequence}</p>
                              <ReactiveNote />
                           </div>
                        </div>
                      ) : (
                        <div className="p-6 opacity-40 text-center italic text-xs">No regional variants identified.</div>
                      )}
                   </div>
                </div>
              </div>

              {/* --- OPTION 3: THE SIGNAL PANE (Split) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Grid3X3 className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 3: The Signal Pane (Split)</span>
                </div>
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#171D3A] grid md:grid-cols-[1fr_1.1fr] divide-x divide-white/10">
                   <div className="p-6 space-y-6 text-left">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-dim">Global Snapshot</p>
                      <div className="space-y-4">
                         {GLOBAL_TODAY.map(g => (
                           <div key={g.code} className="space-y-1">
                              <p className="text-xs font-bold text-paper">{g.name}</p>
                              <p className="text-[10px] text-muted-dim leading-tight">{g.event}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="p-6 bg-white/[0.01] text-left relative">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-6">Regional Context</p>
                      {regionalIntel ? (
                        <div className="space-y-4">
                           <div className="space-y-1">
                              <h5 className="text-lg font-bold font-headline leading-tight">{regionalIntel.event}</h5>
                              <p className="text-[10px] font-bold text-muted-dim uppercase">{regionalIntel.country} · {regionalIntel.state}</p>
                           </div>
                           <p className="text-[12px] text-muted leading-relaxed">{regionalIntel.consequence}</p>
                           <ReactiveNote />
                        </div>
                      ) : <NoRegionalImpact />}
                   </div>
                </div>
              </div>

              {/* --- OPTION 4: MONOSPACE TERMINAL (Operational) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Monitor className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 4: Operational Console</span>
                </div>
                <div className="font-mono p-8 border border-white/18 rounded-2xl bg-[#0B0F22] shadow-2xl space-y-8 text-left">
                   <div className="space-y-4">
                      <p className="text-[10px] text-teal font-bold uppercase tracking-widest">>> GLOBAL_FEED_SYNC</p>
                      <div className="space-y-2 text-xs">
                        {GLOBAL_TODAY.map(g => (
                          <div key={g.code} className="flex gap-4 border-l border-teal/20 pl-4">
                             <span className="text-muted-dim">[{g.code}]</span>
                             <span>{g.event.toUpperCase()}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div className="space-y-4 pt-6 border-t border-white/10">
                      <p className="text-[10px] text-gold font-bold uppercase tracking-widest">>> REGIONAL_INTEL_REACTIVE</p>
                      {regionalIntel ? (
                        <div className="space-y-3 text-xs">
                           <div className="flex gap-2">
                              <span className="text-white font-bold">[{regionalIntel.country.toUpperCase()} · {regionalIntel.state.toUpperCase()}]</span>
                              <span className="text-gold">{regionalIntel.event.toUpperCase()}</span>
                           </div>
                           <p className="text-muted-dim leading-relaxed bg-white/[0.02] p-3 rounded">{regionalIntel.consequence}</p>
                           <div className="pt-2">
                              <ReactiveNote />
                           </div>
                        </div>
                      ) : <p className="text-xs text-muted-dim italic">NO REGIONAL CONFLICT IDENTIFIED.</p>}
                   </div>
                </div>
              </div>

              {/* --- OPTION 5: MINIMALIST BLOCK --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <AlignLeft className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 5: Minimalist Text Blocks</span>
                </div>
                <div className="space-y-10 text-left">
                   <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <h4 className="text-xl font-bold font-headline">Around the Globe</h4>
                         <div className="h-px flex-1 bg-white/10"></div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {GLOBAL_TODAY.map(g => (
                          <span key={g.code} className="text-sm"><b className="text-teal">{g.code}</b> {g.event}</span>
                        ))}
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <h4 className="text-xl font-bold font-headline text-gold-soft">Regional Intel</h4>
                         <div className="h-px flex-1 bg-gold/10"></div>
                      </div>
                      {regionalIntel ? (
                        <div className="space-y-2">
                           <p className="text-sm font-bold">{regionalIntel.country} · {regionalIntel.state} · {regionalIntel.event}</p>
                           <p className="text-[13px] text-muted leading-relaxed max-w-2xl">{regionalIntel.consequence}</p>
                           <ReactiveNote />
                        </div>
                      ) : <NoRegionalImpact />}
                   </div>
                </div>
              </div>

              {/* --- OPTION 6: BENTO DASHBOARD --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <LayoutGrid className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 6: Bento Snapshot</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                   <div className="p-6 bg-[#171D3A] border border-white/10 rounded-2xl space-y-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-dim">Global Today</p>
                      <div className="space-y-4">
                        {GLOBAL_TODAY.map(g => (
                          <div key={g.code} className="flex justify-between items-center text-sm">
                            <span className="font-bold">{g.name}</span>
                            <span className="text-[10px] text-muted-dim uppercase">{g.code}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between">
                      {regionalIntel ? (
                        <div className="space-y-3">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-gold">REGIONAL · {regionalIntel.country}</p>
                           <h5 className="font-bold text-white leading-tight">{regionalIntel.event} ({regionalIntel.state})</h5>
                           <p className="text-xs text-muted-dim leading-relaxed">{regionalIntel.consequence.slice(0, 80)}...</p>
                           <ReactiveNote />
                        </div>
                      ) : <NoRegionalImpact />}
                   </div>
                </div>
              </div>

              {/* --- OPTION 7: SIDEBAR NOTIFICATION STYLE --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Info className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 7: Sidebar Alerts</span>
                </div>
                <div className="space-y-4 text-left">
                   <div className="p-5 border border-white/10 rounded-xl bg-[#171D3A] flex items-start gap-4">
                      <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center shrink-0">
                         <Globe className="w-4 h-4 text-teal" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-sm font-bold">Global Status Update</p>
                         <p className="text-xs text-muted-dim">Multiple observances across 12 countries. Standard international rules apply.</p>
                      </div>
                   </div>
                   {regionalIntel ? (
                     <div className="p-5 border border-gold/20 rounded-xl bg-gold/[0.02] flex items-start gap-4">
                        <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                           <AlertCircle className="w-4 h-4 text-gold-soft" />
                        </div>
                        <div className="space-y-1">
                           <p className="text-sm font-bold">Regional Intel: {regionalIntel.country}</p>
                           <p className="text-xs text-paper/80 font-bold">{regionalIntel.event} · {regionalIntel.state}</p>
                           <p className="text-xs text-muted-dim leading-relaxed">{regionalIntel.consequence}</p>
                           <ReactiveNote />
                        </div>
                     </div>
                   ) : <NoRegionalImpact />}
                </div>
              </div>

              {/* --- OPTION 8: THE TREND LINE (Unified) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <TrendingUp className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 8: The Trend Line</span>
                </div>
                <div className="p-8 border border-white/10 rounded-2xl bg-[#171D3A] text-left space-y-8">
                   <div className="flex justify-between items-center">
                      <h4 className="text-xl font-bold font-headline">Calendar Momentum</h4>
                      <span className="px-3 py-1 bg-teal/10 text-teal text-[9px] font-bold rounded-full">92 JURISDICTIONS ACTIVE</span>
                   </div>
                   <div className="grid grid-cols-4 gap-4">
                      {GLOBAL_TODAY.map(g => (
                        <div key={g.code} className="space-y-1 border-l border-white/10 pl-4">
                           <p className="text-[10px] text-muted-dim font-bold">{g.code}</p>
                           <p className="text-sm font-bold">{g.event}</p>
                        </div>
                      ))}
                      {regionalIntel ? (
                        <div className="space-y-1 border-l border-gold/40 pl-4 bg-gold/[0.03] p-2 rounded-r-lg">
                           <p className="text-[10px] text-gold font-bold">{regionalIntel.country.toUpperCase()}</p>
                           <p className="text-sm font-bold">{regionalIntel.event}</p>
                        </div>
                      ) : <div className="text-[10px] text-muted-dim italic flex items-center">No local conflict</div>}
                   </div>
                   <div className="pt-4 border-t border-white/5">
                      {regionalIntel && (
                        <div className="space-y-1">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-gold">Operational Impact: {regionalIntel.state}</p>
                           <p className="text-xs text-muted leading-relaxed">{regionalIntel.consequence}</p>
                        </div>
                      )}
                      <ReactiveNote />
                   </div>
                </div>
              </div>

              {/* --- OPTION 9: THE AUTHENTICITY BADGE --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Fingerprint className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 9: Data Fingerprint</span>
                </div>
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#171D3A] text-left">
                   <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-teal"></div>
                         <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Global Verification</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {GLOBAL_TODAY.map(g => (
                          <div key={g.code} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                             <p className="text-[11px] font-bold">{g.name}: {g.event}</p>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div className="p-8 bg-white/[0.02] border-t border-white/5">
                      {regionalIntel ? (
                        <div className="space-y-4">
                           <div className="flex items-center gap-3">
                              <ShieldCheck className="w-5 h-5 text-gold-soft" />
                              <h5 className="text-lg font-bold font-headline">Regional Verification: {regionalIntel.country}</h5>
                           </div>
                           <div className="space-y-1 border-l-2 border-gold/30 pl-6">
                              <p className="text-sm font-bold text-gold-soft">{regionalIntel.event} · {regionalIntel.state}</p>
                              <p className="text-[13px] text-muted leading-relaxed">{regionalIntel.consequence}</p>
                           </div>
                           <ReactiveNote />
                        </div>
                      ) : <NoRegionalImpact />}
                   </div>
                </div>
              </div>

              {/* --- OPTION 10: THE COMPACT STATUS CHIP --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                   <Tablet className="w-4 h-4 text-gold" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gold/60">Option 10: Chip-Based Overview</span>
                </div>
                <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.01] text-left space-y-8">
                   <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-dim">Currently Observing</p>
                      <div className="flex flex-wrap gap-2">
                         {GLOBAL_TODAY.map(g => (
                           <span key={g.code} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium">{g.name}: {g.event}</span>
                         ))}
                         {regionalIntel && (
                           <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs font-bold text-gold-soft underline underline-offset-4 decoration-gold/50">{regionalIntel.country} ({regionalIntel.state})</span>
                         )}
                      </div>
                   </div>
                   {regionalIntel && (
                     <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gold">Local Impact Note</p>
                        <p className="text-sm text-muted leading-relaxed font-medium italic">"{regionalIntel.consequence}"</p>
                        <ReactiveNote />
                     </div>
                   )}
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
                    <b>Interaction Point:</b> Changing the Destination here instantly updates the <b>Regional Intel</b> logic on the left across all 10 options.
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
