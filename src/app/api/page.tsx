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
  Code,
  Link as LinkIcon,
  ChevronRight,
  Zap,
  Activity,
  MessageSquare,
  BookOpen,
  Eye,
  ArrowDown
} from "lucide-react";

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

  const scrollToDocs = () => {
    document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="relative">
        {/* HERO: Blueprint Style */}
        <section className="py-12 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F4F1E8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
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
                    <Button 
                      variant="ghost" 
                      onClick={scrollToDocs}
                      className="h-14 px-8 border border-white/10 rounded-full text-sm font-bold hover:bg-white/5 uppercase tracking-widest text-xs"
                    >
                      View Documentation
                    </Button>
                  </div>
               </div>

               <div className="relative group hidden lg:block">
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
          </div>
        </section>

        {/* POSITIONING: The Utsavs Gap */}
        <section className="py-24 bg-[#171D3A]/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr_auto] gap-16 items-center">
              <div className="space-y-6 text-left">
                <div className="text-[11px] font-mono text-[#4FD1C5] font-bold uppercase tracking-[0.4em]">The Core Philosophy</div>
                <h2 className="text-3xl md:text-5xl font-headline font-medium">Actionable Intelligence, not just security risk.</h2>
                <div className="space-y-6 text-lg text-[#9AA1C0] leading-relaxed font-medium">
                  <p>
                    Traditional security intelligence focuses on the 1% of extreme events — crime, kidnapping, or war. But 99% of professional journeys are paralyzed by <strong>Temporal Friction</strong>: the unannounced bank closure, the 4-hour urban delay, or the institutional deadline mismatch.
                  </p>
                  <p>
                    Utsavs addresses this gap by turning complex calendars into structured planning signals. We don't just tell you a holiday is happening; we tell you what it means for your specific purpose.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                 {[
                   { label: "Predictable", val: "Source-Backed" },
                   { label: "Logical", val: "Rule-Driven" },
                   { label: "Transparent", val: "Every answer has a trail" }
                 ].map(item => (
                   <div key={item.label} className="p-6 bg-[#0F1428] border border-white/10 rounded-2xl w-full lg:w-64 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">{item.label}</span>
                      <p className="text-sm font-bold text-white">{item.val}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* DATA LAYERS: The Product Value */}
        <section className="py-24">
           <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto space-y-16">
                <div className="max-w-3xl text-left space-y-4">
                    <span className="text-[11px] font-mono text-[#4FD1C5] font-bold uppercase tracking-[0.4em]">Architecture</span>
                    <h2 className="text-3xl md:text-5xl font-headline font-medium">Five layers of precision.</h2>
                    <p className="text-xl text-[#9AA1C0] font-medium">We normalize complex date information into structured data units.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 text-left">
                    {[
                      { 
                        title: "Temporal Fact", 
                        desc: "Deterministic event identification across 92+ jurisdictions. Name, classification, and duration.",
                        icon: Database 
                      },
                      { 
                        title: "Jurisdictional Scope", 
                        desc: "Granular mapping. Distinguish between National holidays and Regional rules that override the baseline.",
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
              </div>
           </div>
        </section>

        {/* DOCUMENTATION SECTION */}
        <section id="docs" className="py-24 bg-[#0B0F22] border-t border-white/5">
           <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto space-y-16">
                 <div className="text-left space-y-4">
                    <span className="text-[11px] font-mono text-[#E8A33D] font-bold uppercase tracking-[0.4em]">Documentation</span>
                    <h2 className="text-3xl md:text-5xl font-headline font-medium">Developer Quickstart</h2>
                 </div>

                 <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24">
                    {/* DOCS CONTENT */}
                    <div className="space-y-12 text-left">
                       <div className="space-y-6">
                          <h3 className="text-2xl font-bold font-headline flex items-center gap-3">
                             <ShieldCheck className="w-6 h-6 text-[#4FD1C5]" /> 01. Authentication
                          </h3>
                          <p className="text-[#9AA1C0] font-medium leading-relaxed">
                            Access to the Utsavs API is restricted to authorized partners. Every request must include an <code className="text-[#F4F1E8] bg-white/10 px-1.5 rounded">X-API-KEY</code> header. You can request an evaluation key via the primary CTA above.
                          </p>
                       </div>

                       <div className="space-y-6">
                          <h3 className="text-2xl font-bold font-headline flex items-center gap-3">
                             <Globe className="w-6 h-6 text-[#4FD1C5]" /> 02. Parameters
                          </h3>
                          <div className="space-y-4">
                             {[
                               { p: "jurisdiction", d: "ISO 3166-1 alpha-2 country code (e.g., IN, JP, US)." },
                               { p: "date", d: "Target ISO-8601 date string (e.g., 2026-11-08)." },
                               { p: "purpose", d: "Context filter: travel, study, workforce, or operations." }
                             ].map(param => (
                               <div key={param.p} className="flex gap-4 items-start">
                                  <code className="text-[#E8A33D] font-bold min-w-[100px]">{param.p}</code>
                                  <p className="text-sm text-[#9AA1C0] font-medium">{param.d}</p>
                               </div>
                             ))}
                          </div>
                       </div>

                       <div className="space-y-6">
                          <h3 className="text-2xl font-bold font-headline flex items-center gap-3">
                             <Zap className="w-6 h-6 text-[#4FD1C5]" /> 03. Response Schema
                          </h3>
                          <p className="text-[#9AA1C0] font-medium leading-relaxed">
                             Our engine returns a <code className="text-[#F4F1E8] bg-white/10 px-1.5 rounded">materialized_record</code>. This is not just a holiday name; it is a computed result based on the intersection of the date, jurisdiction-specific rules, and the chosen user purpose.
                          </p>
                       </div>
                    </div>

                    {/* CODE PANEL */}
                    <div className="space-y-6">
                       <div className="bg-[#171D3A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                          <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                             <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                             </div>
                             <span className="text-[10px] font-mono font-bold text-[#6E7495] uppercase">cURL Example</span>
                          </div>
                          <div className="p-6 md:p-8 font-mono text-[13px] text-zinc-300 bg-[#0F1428]/50 text-left">
                             <code className="block leading-relaxed">
                                <span className="text-teal">curl</span> -X GET <span className="text-white">"https://api.utsavs.com/v1/intelligence"</span> \<br/>
                                &nbsp;&nbsp;-H <span className="text-white">"X-API-KEY: YOUR_KEY"</span> \<br/>
                                &nbsp;&nbsp;-G \<br/>
                                &nbsp;&nbsp;--data-urlencode <span className="text-white">"jurisdiction=IN"</span> \<br/>
                                &nbsp;&nbsp;--data-urlencode <span className="text-white">"date=2026-11-08"</span>
                             </code>
                          </div>
                       </div>
                       
                       <div className="p-6 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-2xl text-left">
                          <div className="flex items-center gap-3 mb-3">
                             <Info className="w-5 h-5 text-[#E8A33D]" />
                             <h4 className="font-bold text-sm uppercase tracking-widest">Enterprise Support</h4>
                          </div>
                          <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">
                             Need to export bulk deterministic data sets or integrate real-time change alerts into your ERP/HR system? Contact us for Enterprise integration support.
                          </p>
                       </div>
                    </div>
                 </div>
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

      </main>

      <Footer />
    </div>
  );
}
