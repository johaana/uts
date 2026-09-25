'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  Globe, 
  ShieldCheck, 
  CheckCircle2,
  Lock,
  Zap,
  Terminal,
  Plane,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export default function SocialCardLabPage() {
  const options = [
    {
      id: 'authored-logo',
      name: 'Option 1: The Authored Style (Editorial)',
      desc: 'Clean, high-impact typography with the Utsavs brand lockup. Focuses on the conversational hook.',
      render: (
        <div className="w-full aspect-[1200/630] bg-[#0F1428] p-20 flex flex-col justify-center relative overflow-hidden rounded-xl border border-white/10 shadow-2xl text-left">
          <div className="space-y-0 mb-10">
            <h2 className="text-[72px] font-serif font-medium leading-[1.05] tracking-tight text-[#F4F1E8]">
              Know before you plan.
            </h2>
            <h2 className="text-[72px] font-serif font-medium leading-[1.05] tracking-tight text-[#F4F1E8]">
              Not after.
            </h2>
          </div>
          <p className="text-[28px] font-sans text-[#9AA1C0] leading-relaxed max-w-[850px]">
            A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.
          </p>
          
          <div className="absolute bottom-16 left-20 flex flex-col items-start gap-0.5">
             <span className="font-serif text-[32px] font-bold text-[#F4F1E8] tracking-tight">Utsavs</span>
             <span className="font-serif italic text-[14px] text-[#9AA1C0] font-normal">from occasion to impact</span>
          </div>

          <div className="absolute bottom-16 right-20 flex items-center gap-3">
             <div className="w-3 h-3 bg-[#E8A33D] rounded-full shadow-[0_0_15px_rgba(232,163,61,0.5)]"></div>
             <span className="font-mono text-[14px] font-bold text-[#E8A33D] uppercase tracking-[0.2em]">Global Holiday Intelligence</span>
          </div>
        </div>
      )
    },
    {
      id: 'global-transit',
      name: 'Option 2: The Global Transit (Movement)',
      desc: 'Visualizes the "Aeroplane + Globe" concept. Emphasizes the intersection of travel and global data.',
      render: (
        <div className="w-full aspect-[1200/630] bg-[#171D3A] p-20 flex flex-col justify-between relative overflow-hidden rounded-xl border border-white/10 shadow-2xl text-left">
          <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#4FD1C5]/5 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 flex items-center gap-6">
             <div className="w-20 h-20 bg-[#F4F1E8] rounded-[32px] flex items-center justify-center shadow-xl transform -rotate-6">
                <Globe className="text-[#0F1428] w-10 h-10" />
             </div>
             <div className="space-y-1">
                <h1 className="font-serif text-4xl font-bold text-white tracking-tight">Utsavs</h1>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#E8A33D]">Global Intelligence</p>
             </div>
          </div>

          <div className="relative z-10 space-y-6">
             <h2 className="text-[82px] font-serif font-medium leading-[0.95] tracking-tighter text-[#F4F1E8]">
                World Class <br />Date Precision.
             </h2>
             <div className="flex items-center gap-4">
                <div className="px-6 py-3 bg-[#E8A33D] text-[#0F1428] rounded-full flex items-center gap-3 shadow-lg">
                   <Plane className="w-5 h-5 fill-current" />
                   <span className="text-sm font-bold uppercase tracking-widest">Travel Ready</span>
                </div>
                <div className="px-6 py-3 bg-white/5 border border-white/10 text-[#9AA1C0] rounded-full flex items-center gap-3">
                   <ShieldCheck className="w-5 h-5" />
                   <span className="text-sm font-bold uppercase tracking-widest">Verified Sources</span>
                </div>
             </div>
          </div>

          <div className="absolute bottom-[-40px] right-[-40px] opacity-10">
             <Plane className="w-[400px] h-[400px] transform -rotate-12" />
          </div>
        </div>
      )
    },
    {
      id: 'verified-pulse',
      name: 'Option 3: The Verified Pulse (Technical)',
      desc: 'Focuses on the "Precision Dot" and the pulse of the world. High trust for B2B/API users.',
      render: (
        <div className="w-full aspect-[1200/630] bg-[#0F1428] p-20 flex flex-col justify-end relative overflow-hidden rounded-xl border border-white/10 shadow-2xl text-left">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1E2650 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="absolute top-16 right-16 flex items-center gap-3">
             <div className="w-3 h-3 bg-[#4FD1C5] rounded-full shadow-[0_0_15px_rgba(79,209,197,0.8)]"></div>
             <span className="font-mono text-[12px] font-bold text-[#4FD1C5] uppercase tracking-[0.3em]">Live Intelligence Feed</span>
          </div>

          <div className="relative z-10 space-y-12">
            <div className="space-y-4">
                <h2 className="text-[76px] font-serif font-medium leading-none tracking-tighter text-[#F4F1E8]">
                  From dates <br /> to determination.
                </h2>
                <p className="text-[24px] font-sans text-[#9AA1C0] max-w-2xl font-medium">
                   Reconciling public calendars with institutional closures and regional rules for zero-AI reliability.
                </p>
            </div>
            
            <div className="flex items-center gap-12 pt-8 border-t border-white/10">
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono font-bold text-[#6E7495] uppercase">Coverage</span>
                  <span className="text-2xl font-bold text-white">92+ Jurisdictions</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono font-bold text-[#6E7495] uppercase">Records</span>
                  <span className="text-2xl font-bold text-white">1000+ Deterministic</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono font-bold text-[#6E7495] uppercase">Confidence</span>
                  <span className="text-2xl font-bold text-[#4FD1C5]">Verified Source</span>
               </div>
            </div>
          </div>

          <div className="absolute bottom-16 right-16 flex flex-col items-end text-right">
             <span className="font-serif text-[42px] font-bold text-white tracking-tighter">Utsavs</span>
             <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#E8A33D]">API PREVIEW</span>
          </div>
        </div>
      )
    },
    {
      id: 'atmospheric-fusion',
      name: 'Option 4: The Context Fusion',
      desc: 'Blends atmospheric cultural imagery with technical precision. Warm but professional.',
      render: (
        <div className="w-full aspect-[1200/630] bg-[#0F1428] relative overflow-hidden rounded-xl shadow-2xl">
          <img 
            src="https://i.postimg.cc/SjF8HhM1/Diwali2.jpg" 
            alt="Diwali Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1428] via-[#0F1428]/90 to-transparent"></div>
          
          <div className="relative z-10 h-full p-20 flex flex-col justify-between text-left">
            <div className="space-y-2">
               <div className="flex items-center gap-3">
                  <span className="font-serif text-4xl font-bold text-white tracking-tight">Utsavs</span>
                  <div className="h-px w-20 bg-[#E8A33D]/40"></div>
                  <span className="font-mono text-[12px] font-bold text-[#E8A33D] uppercase tracking-[0.4em]">Intelligence</span>
               </div>
               <p className="font-serif italic text-[16px] text-[#9AA1C0]">Planning around the occasion</p>
            </div>

            <div className="max-w-xl space-y-10">
              <h2 className="text-7xl font-serif font-medium leading-tight tracking-tight text-white">
                Know the date. <br />Calculate the impact.
              </h2>
              <div className="p-8 bg-white border border-white/20 rounded-[24px] shadow-[0_32px_64px_rgba(0,0,0,0.4)] space-y-5">
                 <div className="flex items-center justify-between">
                    <span className="text-[12px] font-mono font-bold text-gray-400 uppercase tracking-widest">RECORD_081126</span>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-600 text-[10px] font-bold uppercase rounded-full border border-green-500/20">
                        <ShieldCheck className="w-3 h-3" /> Verified
                    </div>
                 </div>
                 <div className="space-y-1">
                    <p className="text-3xl font-bold text-[#0F1428] font-serif">8 Nov 2026 — Diwali</p>
                    <p className="text-sm text-gray-500 font-medium">National Holiday · Mandatory Closure · High Density Movement</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-24">
        <div className="max-w-[1180px] mx-auto px-6 space-y-24">
          
          <div className="space-y-6 text-left max-w-3xl">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-[0.3em] uppercase">Visual Identity Lab</div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight">Social Card Designer</h1>
            <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium">
              Screenshotted cards should be saved as PNGs. Update the <code className="text-[#F4F1E8] bg-white/10 px-1.5 rounded">og:image</code> property in <code className="text-[#F4F1E8] bg-white/10 px-1.5 rounded">layout.tsx</code> once finalized.
            </p>
          </div>

          <div className="space-y-40">
            {options.map((opt) => (
              <div key={opt.id} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-white/10 pb-6">
                  <div className="space-y-2 text-left">
                    <h3 className="text-2xl font-bold font-serif">{opt.name}</h3>
                    <p className="text-sm text-[#9AA1C0] max-w-xl">{opt.desc}</p>
                  </div>
                  <Badge variant="outline" className="border-[#4FD1C5] text-[#4FD1C5] uppercase font-bold tracking-widest text-[10px]">1200 x 630 px</Badge>
                </div>
                <div className="max-w-full overflow-hidden rounded-xl shadow-[0_64px_128px_-32px_rgba(0,0,0,0.8)]">
                  {opt.render}
                </div>
              </div>
            ))}
          </div>

          <section className="p-12 md:p-20 rounded-[48px] border-2 border-dashed border-white/10 bg-white/5 space-y-12">
            <div className="max-w-2xl mx-auto text-center space-y-6">
                <div className="w-12 h-12 bg-[#E8A33D]/10 rounded-full flex items-center justify-center mx-auto">
                   <Activity className="w-6 h-6 text-[#E8A33D]" />
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-white tracking-tight">The Intelligence API</h2>
                <p className="text-lg text-[#9AA1C0] leading-relaxed">
                   To answer your question: <strong>Yes, the API exists.</strong> The project currently includes the <strong>Temporal Intelligence Engine</strong> in <code className="text-white">src/lib/operational</code>. 
                   This engine is the source of truth for the platform.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { 
                   t: "Deterministic Logic", 
                   d: "Unlike generic AI, our engine follows hard rules for lunar, lunisolar, and government-declared dates.",
                   icon: Terminal
                 },
                 { 
                   t: "Operational Mapping", 
                   d: "The API translates a date into consequences for Banking, Logistics, and Corporate HR systems.",
                   icon: Zap
                 },
                 { 
                   t: "Source Authenticity", 
                   d: "Every data point in the API is accompanied by its authoritative source and verification status.",
                   icon: ShieldCheck
                 }
               ].map(card => (
                 <div key={card.t} className="p-8 bg-[#171D3A] rounded-3xl border border-white/5 space-y-4 text-left group hover:border-[#4FD1C5] transition-colors">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#4FD1C5]/10 transition-colors">
                       <card.icon className="w-5 h-5 text-[#4FD1C5]" />
                    </div>
                    <h4 className="font-bold text-lg">{card.t}</h4>
                    <p className="text-sm text-[#9AA1C0] leading-relaxed">{card.d}</p>
                 </div>
               ))}
            </div>
            
            <div className="text-center pt-8">
               <Badge variant="outline" className="px-4 py-2 border-[#E8A33D] text-[#E8A33D] font-mono text-[10px] uppercase tracking-[0.3em]">Private API Preview v3.1</Badge>
            </div>
          </section>

          <div className="text-center pt-12">
            <p className="text-[11px] font-bold text-[#6E7495] uppercase tracking-[0.4em] mb-10">End of Designer View</p>
            <div className="h-px bg-white/5 w-full"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
