'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Globe, 
  Terminal,
  Code,
  Link as LinkIcon,
  Zap,
  Activity,
  Info,
  Key,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function ApiPage() {
  const jsonCode = `{
  "status": "success",
  "query": {
    "jurisdiction": "IN",
    "date": "2026-11-08",
    "purpose": "travel"
  },
  "metadata": {
    "timestamp": "2026-10-01T00:00:00.000Z",
    "source_connected": true,
    "version": "4.2.0-static-first",
    "now_resolved": "2026-10-01"
  },
  "records": [
    {
      "id": "RULE_IN_Diwali_dated_2026__2026-11-08",
      "rule_id": "RULE_IN_Diwali_dated_2026",
      "name": "Diwali",
      "category": "public",
      "jurisdiction": {
        "country_code": "IN",
        "country_name": "India",
        "scope": "national"
      },
      "temporal_kind": "recurring",
      "state": "confirmed",
      "confidence": "high",
      "evidence": {
        "source_name": "DoPT OM F.No.12/2/2023-JCA",
        "source_url": "https://example.com/holidays.pdf",
        "last_checked": "2026-09-05"
      },
      "consequences": {
        "implication": "National Holiday. Mandatory commercial shutdown in most states.",
        "severity": "high"
      }
    }
  ]
}`;

  const scrollToDocs = () => {
    document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
    }
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="relative">
        {/* HERO */}
        <section className="py-12 md:py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F4F1E8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
               <div className="space-y-8 text-left">
                  <h1 className="text-4xl md:text-7xl font-headline font-medium leading-[1.05] tracking-tighter text-left">
                    Data you <br/>can trace.
                  </h1>
                  <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium text-left">
                    The Utsavs API reconciles public calendars with institutional closures and regional rules. Built for technical systems that require high-stakes date precision.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={openChat}
                      className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold px-10 h-14 rounded-full shadow-2xl uppercase tracking-widest text-xs transition-all active:scale-95"
                    >
                      Request API Access
                    </Button>
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
                        <Terminal className="w-3 h-3" /> response_example.json
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[#4FD1C5] font-bold">
                        <span className="bg-[#4FD1C5]/10 px-2 py-0.5 rounded text-[10px]">GET</span>
                        <span>/api/v1/intelligence?jurisdiction=IN&date=2026-11-08</span>
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

        {/* DOCUMENTATION */}
        <section id="docs" className="py-24 bg-[#0B0F22] border-t border-white/5">
           <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto space-y-16">
                 <div className="text-left space-y-4">
                    <span className="text-[11px] font-mono text-[#E8A33D] font-bold uppercase tracking-[0.4em]">Documentation</span>
                    <h2 className="text-3xl md:text-5xl font-headline font-medium">Developer Quickstart</h2>
                 </div>

                 <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24">
                    <div className="space-y-12 text-left">
                       <div className="space-y-6">
                          <h3 className="text-2xl font-bold font-headline flex items-center gap-3">
                             <ShieldCheck className="w-6 h-6 text-[#4FD1C5]" /> 01. Authentication
                          </h3>
                          <p className="text-[#9AA1C0] font-medium leading-relaxed">
                            Every request must include an <code className="text-[#F4F1E8] bg-white/10 px-1.5 rounded">X-API-KEY</code> header. Access is restricted to authorized partners.
                          </p>
                       </div>

                       <div className="space-y-6">
                          <h3 className="text-2xl font-bold font-headline flex items-center gap-3">
                             <Globe className="w-6 h-6 text-[#4FD1C5]" /> 02. Parameters
                          </h3>
                          <div className="space-y-4">
                             {[
                               { p: "jurisdiction", d: "Required. ISO 3166-1 alpha-2 country code (e.g., IN, JP, US)." },
                               { p: "date", d: "Required. ISO-8601 date string (YYYY-MM-DD)." },
                               { p: "purpose", d: "Optional. Context filter: travel, business, study, workforce, or logistics. Default: travel." }
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
                             Our engine returns a <code className="text-[#F4F1E8] bg-white/10 px-1.5 rounded">materialized_record</code>. This is a computed result based on the intersection of the date, jurisdiction-specific rules, and the chosen user purpose.
                          </p>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <div className="bg-[#171D3A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                          <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                             <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                             </div>
                             <span className="text-[10px] font-mono font-bold text-[#6E7495] uppercase">cURL Example</span>
                          </div>
                          <div className="p-6 md:p-8 font-mono text-[13px] text-zinc-300 bg-[#0F1428]/50 text-left overflow-x-auto">
                             <code className="block leading-relaxed whitespace-pre-wrap break-all">
                                <span className="text-teal">curl</span> -X GET <span className="text-white">"https://utsavs.com/api/v1/intelligence"</span> \<br/>
                                &nbsp;&nbsp;-H <span className="text-white">"X-API-KEY: YOUR_KEY"</span> \<br/>
                                &nbsp;&nbsp;-G \<br/>
                                &nbsp;&nbsp;--data-urlencode <span className="text-white">"jurisdiction=IN"</span> \<br/>
                                &nbsp;&nbsp;--data-urlencode <span className="text-white">"date=2026-11-08"</span>
                             </code>
                          </div>
                       </div>
                       
                       <div 
                         onClick={openChat}
                         className="p-6 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-2xl text-left cursor-pointer hover:bg-[#E8A33D]/10 transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-3">
                             <Info className="w-5 h-5 text-[#E8A33D]" />
                             <h4 className="font-bold text-sm uppercase tracking-widest">Status Codes</h4>
                          </div>
                          <div className="space-y-2 text-sm text-[#9AA1C0] font-medium leading-relaxed">
                             <p><code className="text-white">200</code> — Successful query</p>
                             <p><code className="text-white">400</code> — Invalid request parameters (Date/Jurisdiction/Purpose)</p>
                             <p><code className="text-white">401</code> — Missing or invalid API key</p>
                             <p><code className="text-white">500</code> — Server configuration failure</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* INTEGRATION ROADMAP */}
        <section className="py-24 bg-[#0F1428] border-t border-white/5">
           <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto space-y-16">
                 <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-headline font-medium">Integration Roadmap</h2>
                    <p className="text-lg text-[#9AA1C0] font-medium">Four steps to production-grade intelligence.</p>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { step: "01", t: "Partner Request", d: "Initiate contact via the support chat. Our team evaluates jurisdiction requirements and volume tiers.", icon: Key },
                      { step: "02", t: "Sandbox Token", d: "Receive a restricted key for local development and schema validation in your testing environment.", icon: Activity },
                      { step: "03", t: "Schema Alignment", d: "Map your application purpose (travel/study/biz) to our deterministic record logic.", icon: Code },
                      { step: "04", t: "Production Key", d: "Rotate to a production-grade X-API-KEY with SLA-backed uptime and verified data refreshes.", icon: CheckCircle2 }
                    ].map((item) => (
                      <div key={item.step} className="p-8 bg-[#171D3A] rounded-[32px] border border-white/10 space-y-6 text-left group hover:border-[#E8A33D] transition-all">
                         <div className="flex items-center justify-between">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#E8A33D] group-hover:bg-[#E8A33D]/10 transition-colors">
                               <item.icon className="w-5 h-5" />
                            </div>
                            <span className="text-3xl font-headline font-bold text-white/10">{item.step}</span>
                         </div>
                         <div className="space-y-2">
                            <h4 className="text-xl font-bold text-white">{item.t}</h4>
                            <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>

                 <div className="pt-12 text-center">
                    <Button 
                      onClick={openChat}
                      className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold px-12 h-16 rounded-full shadow-2xl uppercase tracking-widest text-xs transition-all active:scale-95"
                    >
                      Start Partner Request <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
