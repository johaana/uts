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
  Terminal
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SocialCardLabPage() {
  const options = [
    {
      id: 'authored-logo',
      name: 'Option 1: The Authored Style (with Logo)',
      desc: 'Clean, high-impact typography with the Utsavs brand lockup at the base. Direct and editorial.',
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
      id: 'terminal-api',
      name: 'Option 2: The Intelligence Terminal (API Focus)',
      desc: 'Emphasizes the "Global Holiday Intelligence" product and technical reliability. High trust for B2B/Corporate.',
      render: (
        <div className="w-full aspect-[1200/630] bg-[#0F1428] p-16 flex flex-col justify-between relative overflow-hidden rounded-xl border border-white/10 shadow-2xl text-left">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8A33D]/5 blur-[140px] -mr-40 -mt-40"></div>
          
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#E8A33D] rounded-xl flex items-center justify-center">
              <Globe className="text-[#0F1428] w-7 h-7" />
            </div>
            <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-tight text-white">Utsavs</span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-[#4FD1C5]">Global Intelligence</span>
            </div>
          </div>

          <div className="relative z-10 max-w-3xl space-y-8">
            <h2 className="text-6xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tighter text-[#F4F1E8]">
              Verified calendar fact. <br/>Zero-AI reliability.
            </h2>
            <div className="flex gap-8">
               <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full">
                  <ShieldCheck className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="text-[14px] font-bold uppercase tracking-widest text-[#9AA1C0]">Deterministic Data</span>
               </div>
               <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="text-[14px] font-bold uppercase tracking-widest text-[#9AA1C0]">Source Aware</span>
               </div>
            </div>
          </div>

          <div className="absolute bottom-16 right-16 opacity-30">
             <div className="p-8 border border-white/20 rounded-2xl bg-white/5 space-y-4 w-[360px] font-mono">
                <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-3 h-3 text-[#4FD1C5]" />
                    <span className="text-[10px] text-[#4FD1C5]">GET /v1/intelligence</span>
                </div>
                <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                <div className="h-2 w-full bg-white/40 rounded-full"></div>
                <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'atmospheric-fusion',
      name: 'Option 3: The Context Fusion',
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
    },
    {
      id: 'brand-pure',
      name: 'Option 4: Brand Pure',
      desc: 'Focuses entirely on the brand promise and the "Single Now" pulse.',
      render: (
        <div className="w-full aspect-[1200/630] bg-[#F7F4EE] p-16 flex items-center justify-center relative overflow-hidden rounded-xl border border-gray-200 shadow-2xl">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#171D3A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-12">
            <div className="space-y-6">
               <div className="w-32 h-32 bg-[#171D3A] rounded-[40px] flex items-center justify-center mx-auto shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                  <Globe className="text-[#E8A33D] w-16 h-16" />
               </div>
               <div className="space-y-2">
                  <h1 className="font-serif text-8xl font-bold text-[#0F1428] tracking-tighter">Utsavs</h1>
                  <p className="text-[14px] font-mono font-bold uppercase tracking-[0.6em] text-[#E8A33D]">Global Date Intelligence</p>
               </div>
            </div>
            <p className="text-3xl text-[#6E7495] max-w-2xl font-medium font-serif leading-relaxed">
              Standardizing global holiday intelligence for travel, study and operations.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <span className="px-8 py-3 bg-[#171D3A] text-white text-[12px] font-bold uppercase tracking-widest rounded-full shadow-lg">utsavs.com</span>
              <span className="text-gray-300">/</span>
              <span className="text-[#171D3A] font-mono text-sm font-bold">API PREVIEW</span>
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
              We are generating high-precision sharing previews. Visit this page on a desktop, screenshot your preferred design, and provide the image link for the permanent <code className="text-[#F4F1E8] bg-white/10 px-1.5 rounded">og:image</code> property.
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

          <section className="p-12 md:p-20 rounded-[48px] border-2 border-dashed border-white/10 bg-white/5 space-y-10">
            <div className="max-w-2xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-white tracking-tight">The API Philosophy</h2>
                <p className="text-lg text-[#9AA1C0] leading-relaxed">
                   Utsavs is moving beyond discovery. Our API is the "Global Holiday Intelligence" layer. 
                   It translates cultural dates into <strong>deterministic operational data</strong> for three primary stakeholders:
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { t: "HR & People", d: "Automate leave calendars and working-day calculations for global teams." },
                 { t: "Finance & Fintech", d: "Track regional bank holidays and market closures with source-aware precision." },
                 { t: "Logistics", d: "Calculate terminal closures and customs availability across multi-country trade lanes." }
               ].map(card => (
                 <div key={card.t} className="p-8 bg-[#171D3A] rounded-3xl border border-white/5 space-y-4 text-left">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                       <Zap className="w-5 h-5 text-[#E8A33D]" />
                    </div>
                    <h4 className="font-bold text-lg">{card.t}</h4>
                    <p className="text-sm text-[#9AA1C0] leading-relaxed">{card.d}</p>
                 </div>
               ))}
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
