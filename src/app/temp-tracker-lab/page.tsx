'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  MapPin,
  RefreshCw,
  Activity,
  CheckCircle2,
  Info
} from "lucide-react";
import { format, startOfToday } from 'date-fns';

// --------------------------------------------------------------------------------
// AUTHORITATIVE MOCK DATA (Specific Operational Facts)
// --------------------------------------------------------------------------------

const GLOBAL_STATUS_DATA = [
  { name: 'Indonesia', event: 'Maulid Nabi', type: 'Religious Holiday' },
  { name: 'Japan', event: 'Respect for the Aged Day', type: 'National Holiday' },
  { name: 'Mexico', event: 'Independence Day Eve', type: 'National Holiday' }
];

const REGIONAL_FACTS: Record<string, any> = {
  IN: {
    country: "India",
    region: "Maharashtra",
    event: "Ganesh Chaturthi",
    type: "Religious Holiday",
    consequence: "Public immersion processions create severe urban congestion in Mumbai/Pune districts. Mandatory closures for public sector and banking. High density movement flagged.",
  },
  JP: {
    country: "Japan",
    region: "Tokyo",
    event: "Silver Week Opening",
    type: "National Holiday",
    consequence: "JPX (Stock Exchange) and BoJ systems suspended. Reduced service capacity in Chiyoda and Chuo commercial wards. Standard logistics delays expected.",
  },
  US: {
    country: "United States",
    region: "Federal",
    event: "Labor Day (Observed)",
    type: "National Holiday",
    consequence: "Federal Government offices and USPS operations closed. Equity trading sessions (NYSE/NASDAQ) suspended. Public transport operates on reduced holiday schedule.",
  },
  SG: {
    country: "Singapore",
    region: "Little India",
    event: "Deepavali Season",
    type: "Religious Holiday",
    consequence: "Extended trading hours in Little India district. Regional bank branches observe a holiday closure. No national commercial shutdown indicated.",
  },
};

const COUNTRY_OPTIONS = [
  { code: 'IN', name: 'India' },
  { code: 'JP', name: 'Japan' },
  { code: 'US', name: 'United States' },
  { code: 'SG', name: 'Singapore' },
  { code: 'FR', name: 'France (Empty State)' }
];

// --------------------------------------------------------------------------------
// COMPONENT
// --------------------------------------------------------------------------------

export default function TempTrackerLabPage() {
  const [country, setCountry] = useState('IN');
  const [todayDate, setTodayDate] = useState('');
  const [fullDate, setFullDate] = useState('');
  
  useEffect(() => {
    const today = startOfToday();
    setTodayDate(format(today, 'd MMM'));
    setFullDate(format(today, 'EEEE, d MMMM yyyy'));
  }, []);

  const regionalIntel = REGIONAL_FACTS[country];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="wrap">
          
          <div className="mb-16 space-y-2 text-left">
            <div className="text-[11px] font-mono text-gold tracking-[0.4em] uppercase font-bold">Lab v11.0 · Single Card Integration</div>
            <h1 className="text-3xl font-headline font-medium">Approved Stack (Unified Container)</h1>
            <p className="text-sm text-muted-foreground">The Regional Intel is presented as an integrated note. Spacing and typography exactly match the production hero.</p>
          </div>

          <div className="hero-grid items-start">
            
            {/* LEFT: THE REPLICA TRACKER */}
            <div className="space-y-12">
              
              {/* VARIANT A: THE UNIFIED CARD (Primary Selection) */}
              <div className="space-y-6 text-left">
                <div className="hero-tracker shadow-2xl overflow-hidden border border-white/18 bg-[#171D3A]">
                  <div className="hero-tracker-head">
                      <div>
                        <span className="hero-tracker-kicker">TODAY</span>
                        <strong className="text-[15.5px]">{fullDate}</strong>
                      </div>
                      <span className="hero-tracker-live"><i></i> Intelligence View</span>
                  </div>

                  {/* GLOBAL STATUS SECTION */}
                  <div className="p-6 md:p-8 space-y-5 border-b border-white/10">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold font-headline text-[15.5px] text-white">Around the Globe</h4>
                      <span className="text-[9px] font-mono text-muted-dim tracking-[0.2em] uppercase font-bold">National Status</span>
                    </div>
                    <div className="space-y-3">
                      {GLOBAL_STATUS_DATA.map(g => (
                        <div key={g.name} className="flex justify-between items-center text-[14px]">
                          <span className="font-medium text-paper/90"><b className="text-white">{g.name}</b> — {g.event}</span>
                          <span className="text-[9px] font-mono text-muted-dim uppercase font-bold tracking-widest">{g.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* REGIONAL INTEL SECTION (Integrated as a Note) */}
                  <div className="p-6 md:p-8 bg-white/[0.01] text-left">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                           <Activity className="w-4 h-4 text-teal" />
                           <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">Regional Intel</h4>
                         </div>
                         <div className="flex items-center gap-1.5">
                           <ShieldCheck className="w-3.5 h-3.5 text-muted-dim/60" />
                           <span className="text-[9px] font-bold uppercase tracking-widest text-muted-dim">Verified Record</span>
                         </div>
                      </div>

                      {regionalIntel ? (
                        <div className="space-y-3">
                          <p className="text-[15px] font-bold font-headline text-paper">
                            {regionalIntel.country} · {regionalIntel.region} · {regionalIntel.event}
                          </p>
                          <p className="text-[13px] text-muted leading-relaxed font-medium">
                            {regionalIntel.consequence}
                          </p>
                        </div>
                      ) : (
                        <div className="py-2 flex items-center gap-3">
                           <CheckCircle2 className="w-4 h-4 text-muted-dim/40" />
                           <p className="text-[13px] text-muted-dim italic font-medium">No regional variants identified for this date. National rules apply.</p>
                        </div>
                      )}

                      <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                        <RefreshCw className="w-3 h-3 text-gold/40 animate-spin-slow" />
                        <p className="text-[9px] font-bold uppercase tracking-widest text-muted-dim">
                          Showing regional intel for the selected country. Changes with checker selection.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="hero-tracker-feed !border-t-0">
                    <div className="marquee">
                      <div className="marquee-track">
                        {GLOBAL_STATUS_DATA.concat(GLOBAL_STATUS_DATA).map((item, i) => (
                          <span key={i} className="chip">
                            <b>{item.name}</b> — {item.event}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a className="hero-tracker-link text-left" href="#">
                    VIEW FULL DATE INTELLIGENCE <span>→</span>
                  </a>
                </div>
              </div>

              {/* VARIANT B: THE MUTED FOOTNOTE */}
              <div className="space-y-8 text-left opacity-80 scale-95 origin-left">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-dim"></div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-muted-dim">Alternative: Muted Footnote</span>
                </div>
                <div className="hero-tracker border border-white/10 rounded-xl overflow-hidden bg-panel">
                   <div className="p-6 space-y-4">
                      <h4 className="font-headline text-[15.5px] font-bold">Around the Globe Today</h4>
                      <div className="space-y-2">
                        {GLOBAL_STATUS_DATA.slice(0, 2).map(g => (
                          <p key={g.name} className="text-sm text-muted font-medium"><b className="text-white">{g.name}</b>: {g.event}</p>
                        ))}
                      </div>
                      <div className="pt-6 mt-6 border-t border-white/5 flex gap-4">
                         <div className="shrink-0 pt-0.5"><Info className="w-4 h-4 text-gold-soft" /></div>
                         <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-soft">Regional Note · {country}</span>
                            <p className="text-[12.5px] text-muted font-medium leading-relaxed">
                              {regionalIntel?.consequence || "No specific regional impact recorded for this jurisdiction."}
                            </p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

            </div>

            {/* RIGHT: THE CONTROL CHECKER (Exact Replica) */}
            <div className="checker shadow-2xl border-white/10 bg-[#171D3A] rounded-2xl p-8 lg:p-10 sticky top-24">
              <div className="flex justify-between items-center mb-8">
                 <h3 className="font-headline font-medium text-xl">Trip impact checker</h3>
                 <div className="flex items-center gap-1.5 px-2.5 py-1 bg-teal/10 border border-teal/20 rounded-full">
                    <div className="w-1 h-1 rounded-full bg-teal animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-teal">Live</span>
                 </div>
              </div>

              <div className="space-y-6">
                <div className="checker-field">
                  <label>Destination / Jurisdiction</label>
                  <select 
                    value={country} 
                    onChange={e => setCountry(e.target.value)} 
                    className="w-full bg-[#1E2650] border border-white/18 text-white rounded-xl px-4 py-3.5 text-sm focus:border-gold outline-none transition-all cursor-pointer"
                  >
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
            </div>

          </div>

          {/* QUOTE / PHILOSOPHY */}
          <div className="mt-32 pt-20 border-t border-white/10 max-w-3xl mx-auto text-center space-y-6">
             <h3 className="font-headline text-2xl md:text-3xl italic text-paper/80">"The same date can mean something entirely different as you cross a border. We capture the nuance, not just the date."</h3>
             <div className="flex justify-center gap-4">
                <span className="font-mono text-[11px] text-muted-dim border border-white/10 px-4 py-1.5 rounded-full uppercase tracking-widest">Source-aware</span>
                <span className="font-mono text-[11px] text-muted-dim border border-white/10 px-4 py-1.5 rounded-full uppercase tracking-widest">Region-aware</span>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
