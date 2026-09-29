'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Database, 
  ShieldCheck, 
  Globe, 
  Terminal,
  ShieldAlert,
  MessageSquare,
  Code,
  Link as LinkIcon,
  ChevronRight,
  Zap,
  Activity
} from "lucide-react";
import Link from 'next/link';

export default function ApiPage() {
  const WHATSAPP_LINK = "https://wa.me/919860997711";

  const jsonCode = `{
  "event": "Ganesh Chaturthi",
  "date": "2026-09-15",
  "jurisdiction": {
    "country_code": "IN",
    "region": "Maharashtra",
    "scope": "regional"
  },
  "status": "CONFIRMED",
  "determination": "Lunisolar Calculation",
  "planning_implication": "Full commercial shutdown in Mumbai/Pune. Add 3-hour buffer for airport transfers.",
  "evidence": {
    "source": "Gazette of Maharashtra",
    "url": "https://gazette.maharashtra.gov.in/..."
  }
}`;

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-24 relative overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F4F1E8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto space-y-24">
            
            {/* HERO: Blueprint Style */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
               <div className="space-y-8 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8A33D]/10 border border-[#E8A33D]/20 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8A33D]">API Preview v4.2</span>
                  </div>
                  <h1 className="text-4xl md:text-7xl font-headline font-medium leading-[1.05] tracking-tighter">
                    Data you <br/>can trace.
                  </h1>
                  <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium">
                    The Utsavs API reconciles public calendars with institutional closures and regional rules. Built for technical systems that require high-stakes date precision.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold px-10 h-14 rounded-full shadow-2xl uppercase tracking-widest text-xs transition-all active:scale-95">
                        Request API Access
                      </Button>
                    </a>
                    <Button variant="ghost" className="h-14 px-8 border border-white/10 rounded-full text-sm font-bold hover:bg-white/5 uppercase tracking-widest text-xs">
                      View Documentation
                    </Button>
                  </div>
               </div>

               <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A33D] to-[#4FD1C5] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-[#0B0F22] p-8 md:p-12 rounded-3xl border border-white/10 shadow-3xl font-mono text-[13px] text-zinc-300 overflow-hidden text-left">
                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#4FD1C5]/40 flex items-center gap-2">
                        <Terminal className="w-3 h-3" /> response_materialized.json
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[#4FD1C5] font-bold">
                        <span className="bg-[#4FD1C5]/10 px-2 py-0.5 rounded text-[10px]">GET</span>
                        <span>/v1/intelligence?jurisdiction=IN-MH&date=2026-09-15</span>
                      </div>
                      <pre className="whitespace-pre-wrap leading-relaxed overflow-x-auto text-left border-l border-white/5 pl-4 py-2">
                        <code className="text-[#F4F1E8]">{jsonCode}</code>
                      </pre>
                    </div>
                  </div>
               </div>
            </div>

            {/* DATA LAYERS: The Product Value */}
            <section className="space-y-16 py-12 border-t border-white/10">
               <div className="max-w-3xl text-left space-y-4">
                  <span className="text-[11px] font-mono text-[#4FD1C5] font-bold uppercase tracking-[0.4em]">Infrastructure</span>
                  <h2 className="text-3xl md:text-5xl font-headline font-medium">Five layers of precision.</h2>
               </div>
               
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                  {[
                    { 
                      title: "Temporal Fact", 
                      desc: "Deterministic event identification across 92+ jurisdictions. Name, classification, and duration.",
                      icon: Database 
                    },
                    { 
                      title: "Jurisdictional Scope", 
                      desc: "Granular mapping. Distinguish between National holidays and State/Regional rules that override the baseline.",
                      icon: Globe 
                    },
                    { 
                      title: "Date State", 
                      desc: "Verification status. Clearly differentiate between Officially Confirmed dates and Lunisolar Estimates.",
                      icon: Activity 
                    },
                    { 
                      title: "Planning Implication", 
                      desc: "Human-verified impact. Specific advice for banking, logistics, travel, and institutional attendance.",
                      icon: Zap 
                    },
                    { 
                      title: "The Trail (Evidence)", 
                      desc: "Provenance transparency. Every record is cited with a direct link to the authoritative source document.",
                      icon: LinkIcon 
                    },
                    { 
                      title: "Machine Ready", 
                      desc: "Standardized JSON output. ISO 8601 and ISO 3166 compliant for seamless system integration.",
                      icon: Code 
                    }
                  ].map(layer => (
                    <div key={layer.title} className="space-y-4 group">
                       <div className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-[#E8A33D] group-hover:bg-[#E8A33D]/10 transition-colors">
                          <layer.icon className="w-5 h-5" />
                       </div>
                       <h3 className="text-xl font-bold font-headline">{layer.title}</h3>
                       <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">{layer.desc}</p>
                    </div>
                  ))}
               </div>
            </section>

            {/* THE GAP SECTION: Positioning */}
            <section className="p-10 md:p-16 bg-[#171D3A] rounded-[48px] border border-white/10 shadow-3xl text-left">
               <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
                  <div className="space-y-8">
                     <div className="space-y-4">
                        <span className="text-[10px] font-mono text-[#E8A33D] font-bold uppercase tracking-[0.4em]">The Utsavs Gap</span>
                        <h2 className="text-3xl md:text-5xl font-headline font-medium leading-tight">Actions, not assumptions.</h2>
                        <p className="text-lg text-[#9AA1C0] font-medium leading-relaxed">
                          While traditional security intelligence focuses on extreme events, Utsavs addresses the <strong>Temporal Friction</strong> that affects everyday professional journeys. 
                        </p>
                     </div>
                     <div className="p-6 bg-[#0F1428]/40 border-l-2 border-[#E8A33D] rounded-r-xl italic text-paper/80 font-medium leading-relaxed">
                       "Productivity is often paralyzed by what isn't on a standard calendar: the unannounced bank closure, the 4-hour urban delay, or the institutional deadline mismatch."
                     </div>
                  </div>
                  <div className="space-y-6">
                     <div className="space-y-2">
                        <p className="text-sm font-bold uppercase tracking-widest">Enterprise Access</p>
                        <ul className="space-y-4">
                           {["Custom country/region sets", "High-volume SLAs", "Sourced evidence chain", "Dedicated technical support"].map(item => (
                             <li key={item} className="flex items-center gap-3 text-sm font-bold text-white/90">
                                <ShieldCheck className="w-4 h-4 text-[#4FD1C5]" /> {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                     <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
                       <Button className="w-full bg-[#4FD1C5] text-[#0F1428] hover:bg-[#F4F1E8] font-bold h-12 rounded-full uppercase tracking-widest text-[10px]">
                         <MessageSquare className="w-4 h-4 mr-2" /> Inquire for Enterprise
                       </Button>
                     </a>
                  </div>
               </div>
            </section>

            {/* TRUST BANNER */}
            <div className="py-12 border-y border-white/5 text-center flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 opacity-60">
                <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                  <ShieldCheck className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Deterministic Logic</span>
                </div>
                <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                  <Database className="w-5 h-5 text-[#E8A33D]" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Sourced Evidence</span>
                </div>
                <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                  <Code className="w-5 h-5 text-white" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest">System Ready</span>
                </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
