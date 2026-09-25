'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  Globe, 
  ShieldCheck, 
  Search, 
  Layout, 
  Share2, 
  Calendar,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SocialCardLabPage() {
  const options = [
    {
      id: 'terminal',
      name: 'Option 1: The Intelligence Terminal',
      desc: 'High-contrast, professional, and deterministic. Best for B2B/Enterprise trust.',
      render: (
        <div className="w-full aspect-[1200/630] bg-[#0F1428] p-16 flex flex-col justify-between relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8A33D]/5 blur-[120px] -mr-32 -mt-32"></div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E8A33D] rounded-lg flex items-center justify-center">
                <Globe className="text-[#0F1428] w-6 h-6" />
              </div>
              <span className="font-display text-4xl font-bold tracking-tight">Utsavs</span>
            </div>
            <p className="text-[14px] font-mono text-[#4FD1C5] uppercase tracking-[0.4em] font-bold">Global Holiday Intelligence</p>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-display font-medium leading-[1.1] tracking-tight mb-8">
              Verified calendar fact. <br/>Zero-AI reliability.
            </h2>
            <div className="flex gap-6">
               <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-[#4FD1C5]" />
                  <span className="text-[12px] font-bold uppercase tracking-widest text-[#9AA1C0]">Deterministic Data</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-[#4FD1C5]" />
                  <span className="text-[12px] font-bold uppercase tracking-widest text-[#9AA1C0]">Source Aware</span>
               </div>
            </div>
          </div>

          <div className="absolute bottom-16 right-16 opacity-20">
             <div className="p-8 border border-white/20 rounded-2xl bg-white/5 space-y-4 w-[320px]">
                <div className="h-2 w-24 bg-white/20 rounded"></div>
                <div className="h-4 w-48 bg-white/40 rounded"></div>
                <div className="h-2 w-32 bg-white/20 rounded"></div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'connection',
      name: 'Option 2: The Global Connection',
      desc: 'Clean, minimalist, and authoritative. Focuses on the "Global Meridian" identity.',
      render: (
        <div className="w-full aspect-[1200/630] bg-white p-16 flex items-center justify-center relative overflow-hidden rounded-xl border border-gray-200 shadow-2xl">
          <div className="absolute inset-0 bg-[#F7F4EE]/30"></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-10">
            <div className="space-y-4">
               <div className="w-24 h-24 bg-[#171D3A] rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                  <Globe className="text-[#E8A33D] w-12 h-12" />
               </div>
               <div className="space-y-1">
                  <h1 className="font-display text-6xl font-bold text-[#0F1428] tracking-tighter">Utsavs</h1>
                  <p className="text-[11px] font-mono font-bold uppercase tracking-[0.5em] text-[#E8A33D]">Global Date Intelligence</p>
               </div>
            </div>
            <p className="text-2xl text-[#6E7495] max-w-xl font-medium">
              Understand the world's calendar. Structured intelligence for travel, study and operations.
            </p>
            <div className="pt-4">
              <span className="px-6 py-2 border border-[#E8A33D]/30 text-[#E8A33D] text-xs font-bold uppercase tracking-widest rounded-full">utsavs.com/api</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fusion',
      name: 'Option 3: The Context Fusion',
      desc: 'Atmospheric and meaningful. Blends cultural beauty with technical precision.',
      render: (
        <div className="w-full aspect-[1200/630] bg-[#0F1428] relative overflow-hidden rounded-xl shadow-2xl">
          <img 
            src="https://i.postimg.cc/SjF8HhM1/Diwali2.jpg" 
            alt="Diwali Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1428] via-[#0F1428]/80 to-transparent"></div>
          
          <div className="relative z-10 h-full p-20 flex flex-col justify-between">
            <div className="space-y-2">
               <span className="font-display text-4xl font-bold">Utsavs</span>
               <p className="text-[12px] font-mono text-[#E8A33D] uppercase tracking-[0.3em]">Planning around the occasion</p>
            </div>

            <div className="max-w-xl space-y-8">
              <h2 className="text-6xl font-display font-medium tracking-tight">Know the date. <br />Calculate the impact.</h2>
              <div className="p-6 bg-white border border-white/20 rounded-2xl shadow-2xl space-y-4">
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">RECORD_081126</span>
                    <span className="px-2 py-0.5 bg-green-500/10 text-green-600 text-[9px] font-bold uppercase rounded">Verified</span>
                 </div>
                 <div className="space-y-1">
                    <p className="text-2xl font-bold text-[#0F1428]">8 Nov 2026 — Diwali</p>
                    <p className="text-xs text-gray-500 font-medium">India · National Holiday · Total Market Closure</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      <main className="py-24">
        <div className="max-w-[1180px] mx-auto px-6 space-y-20">
          <div className="space-y-4">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">Launch Lab</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium">Social Sharing Options</h1>
            <p className="text-xl text-[#9AA1C0] max-w-2xl font-medium leading-relaxed">
              Evaluating how the platform appears on LinkedIn, Twitter, and WhatsApp. These designs reconcile cultural richness with deterministic data authority.
            </p>
          </div>

          <div className="space-y-32">
            {options.map((opt) => (
              <div key={opt.id} className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-headline">{opt.name}</h3>
                  <p className="text-sm text-[#9AA1C0] max-w-xl">{opt.desc}</p>
                </div>
                <div className="max-w-full overflow-hidden">
                  {opt.render}
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 text-center space-y-6">
            <h2 className="text-2xl font-headline font-medium">Production Checklist</h2>
            <div className="flex flex-wrap justify-center gap-4">
               {['brand-lab', 'favicon-lab', 'temp-tracker-lab', 'color-palettes', 'v1', 'v2'].map(p => (
                 <div key={p} className="px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest rounded-lg flex items-center gap-2">
                    Remove: /{p}
                 </div>
               ))}
            </div>
            <p className="text-sm text-[#9AA1C0] italic">
              Removing these routes will clean up the sitemap and ensure users only see the production interface.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
