
'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
  ShieldCheck, 
  RefreshCw, 
  Monitor,
  CheckCircle2,
  Globe,
  MapPin,
  List,
  Info,
  Activity,
  Zap,
  Layers,
  Maximize2,
  Minimize2,
  FileText
} from "lucide-react";

// --------------------------------------------------------------------------------
// DATA
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
// SHARED UI BLOCKS
// --------------------------------------------------------------------------------

const GlobalCardContent = ({ compact = false }: { compact?: boolean }) => (
  <div className={cn("space-y-4 text-left", compact ? "space-y-2" : "space-y-4")}>
    <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
      <h4 className={cn("font-bold font-headline text-white", compact ? "text-base" : "text-xl")}>Around the Globe</h4>
      <span className="text-[9px] font-mono text-muted-dim tracking-widest uppercase">TODAY</span>
    </div>
    <div className={cn("space-y-3", compact ? "space-y-1" : "space-y-3")}>
      {GLOBAL_TODAY.map(g => (
        <div key={g.code} className="flex justify-between items-center text-[12.5px]">
          <span><b className="text-white">{g.name}</b> — {g.event}</span>
          <span className="text-[9px] font-mono text-muted-dim uppercase font-bold tracking-wider">{g.type}</span>
        </div>
      ))}
    </div>
  </div>
);

const RegionalCardContent = ({ data, variant = "default" }: { data: any, variant?: string }) => {
  if (!data) return (
    <div className="p-4 border border-dashed border-white/10 rounded-xl bg-white/[0.01] flex items-center gap-3">
      <CheckCircle2 className="w-4 h-4 text-teal/40" />
      <div className="space-y-0.5 text-left">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-dim">REGIONAL INTEL</p>
        <p className="text-[11px] text-muted-dim italic">No regional variants identified for this date.</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-3 text-left">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gold-soft">REGIONAL INTEL</span>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 text-teal/60" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-muted-dim">Verified</span>
        </div>
      </div>
      <div className={cn(
        "p-4 rounded-xl space-y-1",
        variant === "monospace" ? "font-mono bg-[#0B0F22]" : "bg-white/[0.02] border border-white/5"
      )}>
        <h5 className={cn("font-bold text-paper/90", variant === "large" ? "text-base" : "text-sm")}>
          {data.country} · {data.state} · {data.event}
        </h5>
        <p className={cn(
          "leading-relaxed font-medium",
          variant === "large" ? "text-sm text-paper/80" : "text-[12px] text-muted",
          variant === "monospace" && "text-teal/80"
        )}>
          {data.consequence}
        </p>
      </div>
      <div className="flex items-start gap-2 text-[9px] text-muted-dim font-bold uppercase tracking-widest mt-2 pt-2 border-t border-white/5">
        <RefreshCw className="w-3 h-3 animate-spin-slow mt-0.5" />
        <span className="leading-relaxed">Showing regional intel for the selected country. Changes with checker selection.</span>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------------------------------------

export default function TempTrackerLabPage() {
  const [country, setCountry] = useState('IN');
  const regionalIntel = REGIONAL_FACTS[country];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12">
        <div className="max-w-[1180px] mx-auto px-6">
          
          <div className="mb-16 space-y-2 text-left border-b border-white/10 pb-8">
            <div className="text-[10px] font-mono text-gold tracking-[0.3em] uppercase font-bold">Stack Laboratory v10.0</div>
            <h1 className="text-3xl md:text-5xl font-headline font-medium">Stacked Intelligence Variants</h1>
            <p className="text-lg text-muted max-w-2xl font-medium">
              10 variations of the preferred "Two-Card Stack" layout. 
              <strong> Adjust the Country on the right to test reactivity.</strong>
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-start">
            
            <div className="space-y-32 pb-60">

              {/* V1: Baseline */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold/60"><Layers className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">v1: Original Baseline</span></div>
                <div className="space-y-3">
                  <div className="p-6 bg-[#171D3A] border border-white/18 rounded-2xl shadow-xl"><GlobalCardContent /></div>
                  <div className="p-6 bg-[#171D3A] border border-white/18 rounded-2xl shadow-xl"><RegionalCardContent data={regionalIntel} /></div>
                </div>
              </div>

              {/* V2: Ultra Compact */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold/60"><Minimize2 className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">v2: Ultra Compact</span></div>
                <div className="space-y-2">
                  <div className="p-4 bg-[#171D3A] border border-white/10 rounded-xl"><GlobalCardContent compact /></div>
                  <div className="p-4 bg-[#171D3A] border border-white/10 rounded-xl"><RegionalCardContent data={regionalIntel} /></div>
                </div>
              </div>

              {/* V3: Descriptive Focus */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold/60"><AlignLeft className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">v3: Descriptive Focus</span></div>
                <div className="space-y-3">
                  <div className="p-6 bg-[#171D3A] border border-white/18 rounded-2xl opacity-60 scale-95 origin-left"><GlobalCardContent compact /></div>
                  <div className="p-8 bg-[#171D3A] border border-white/18 rounded-2xl shadow-2xl ring-1 ring-white/10"><RegionalCardContent data={regionalIntel} variant="large" /></div>
                </div>
              </div>

              {/* V4: Operational Monospace */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold/60"><Monitor className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">v4: Operational Monospace</span></div>
                <div className="space-y-3">
                  <div className="p-6 bg-[#171D3A] border border-white/18 rounded-2xl"><GlobalCardContent /></div>
                  <div className="p-6 bg-[#171D3A] border border-white/18 rounded-2xl"><RegionalCardContent data={regionalIntel} variant="monospace" /></div>
                </div>
              </div>

              {/* V5: Unified Container */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold/60"><Maximize2 className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">v5: Unified Container</span></div>
                <div className="bg-[#171D3A] border border-white/18 rounded-2xl overflow-hidden divide-y divide-white/10 shadow-2xl">
                  <div className="p-6"><GlobalCardContent /></div>
                  <div className="p-6 bg-white/[0.01]"><RegionalCardContent data={regionalIntel} /></div>
                </div>
              </div>

              {/* V6: Semantic Markers */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold/60"><Globe className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">v6: Semantic Markers</span></div>
                <div className="space-y-4">
                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0"><Globe className="w-5 h-5 text-teal" /></div>
                      <div className="flex-1 p-6 bg-[#171D3A] border border-white/10 rounded-2xl"><GlobalCardContent compact /></div>
                   </div>
                   <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-gold" /></div>
                      <div className="flex-1 p-6 bg-[#171D3A] border border-white/10 rounded-2xl"><RegionalCardContent data={regionalIntel} /></div>
                   </div>
                </div>
              </div>

              {/* V7: Borderless Shadow Stack */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold/60"><Zap className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">v7: Borderless Shadow Stack</span></div>
                <div className="space-y-6">
                  <div className="p-6 bg-[#1e2650] rounded-2xl shadow-lg"><GlobalCardContent /></div>
                  <div className="p-6 bg-[#171D3A] rounded-2xl shadow-inner"><RegionalCardContent data={regionalIntel} /></div>
                </div>
              </div>

              {/* V8: Accent Stripe */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold/60"><FileText className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">v8: Accent Stripe</span></div>
                <div className="space-y-3">
                  <div className="p-6 bg-[#171D3A] border border-white/10 border-l-4 border-l-teal rounded-r-2xl"><GlobalCardContent compact /></div>
                  <div className="p-6 bg-[#171D3A] border border-white/10 border-l-4 border-l-gold rounded-r-2xl"><RegionalCardContent data={regionalIntel} /></div>
                </div>
              </div>

              {/* V9: High Intensity Labels */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold/60"><Activity className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">v9: High Intensity Labels</span></div>
                <div className="space-y-4">
                  <div className="p-6 bg-[#171D3A] border border-white/18 rounded-2xl">
                    <Badge className="mb-4 bg-teal/10 text-teal border-teal/20">GLOBAL_STATUS</Badge>
                    <GlobalCardContent compact />
                  </div>
                  <div className="p-6 bg-[#171D3A] border border-white/18 rounded-2xl">
                    <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">REGIONAL_INTEL</Badge>
                    <RegionalCardContent data={regionalIntel} />
                  </div>
                </div>
              </div>

              {/* V10: Deep Logic Feed */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gold/60"><List className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">v10: Deep Logic Feed</span></div>
                <div className="p-8 bg-[#171D3A] border border-white/18 rounded-3xl space-y-12">
                   <GlobalCardContent />
                   <div className="pt-8 border-t border-dashed border-white/10">
                      <RegionalCardContent data={regionalIntel} variant="large" />
                   </div>
                </div>
              </div>

            </div>

            {/* STICKY CHECKER (RIGHT) */}
            <div className="checker text-left sticky top-24 !p-8 shadow-2xl border-white/10 h-fit bg-[#171D3A] rounded-2xl">
              <h3 className="font-headline font-medium text-xl mb-6">Trip impact checker</h3>
              <div className="space-y-4">
                <div className="checker-field">
                  <label>Destination</label>
                  <select value={country} onChange={e => setCountry(e.target.value)} className="!py-3 !text-sm">
                    {COUNTRY_OPTIONS.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="checker-field">
                    <label>From</label>
                    <input type="date" defaultValue="2026-09-15" className="!py-2.5 !text-xs" />
                  </div>
                  <div className="checker-field">
                    <label>To</label>
                    <input type="date" defaultValue="2026-09-25" className="!py-2.5 !text-xs" />
                  </div>
                </div>
                <button className="w-full py-4 bg-gold text-ink font-bold text-[11px] uppercase tracking-[0.2em] rounded-xl hover:bg-gold-soft transition-all">
                  Check Dates
                </button>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                 <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-dashed border-white/10">
                    <Info className="w-4 h-4 text-gold-soft shrink-0 mt-0.5" />
                    <p className="text-[10px] text-muted-dim leading-relaxed font-medium">
                      Changing the destination here will update the <b>Regional Intel</b> logic for all variants on the left.
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
