'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Database, 
  ShieldCheck, 
  Globe, 
  Server,
  ShieldAlert,
  MessageSquare
} from "lucide-react";

export default function ApiPage() {
  const WHATSAPP_LINK = "https://wa.me/919860997711";

  const jsonCode = `{
  "name": "Diwali",
  "date": "2026-11-08",
  "country": "IN",
  "institution": "Nasdaq U.S. Equity & Options Markets",
  "scope": "trading",
  "status": "CLOSED",
  "confidence": "HIGH",
  "source": "Nasdaq Trader — Holiday Schedule 2026"
}`;

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16 text-left">
            
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-center">
               <div className="space-y-6">
                  <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">API</div>
                  <h1 className="text-4xl md:text-6xl font-headline font-medium leading-tight tracking-tight">Put date intelligence into the tools you already use.</h1>
                  <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium">
                    Use Utsavs programmatically when your product, workflow or operation needs calendar intelligence at scale.
                  </p>
                  <div className="pt-4 flex gap-4">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold px-8 h-12 rounded-full shadow-lg">Chat for API Preview</Button>
                    </a>
                  </div>
               </div>

               <div className="bg-[#0B0F22] p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl font-mono text-[13px] text-zinc-300 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-4 text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]/40">Illustrative JSON</div>
                  <p className="text-[#4FD1C5] mb-2 font-bold">GET /v1/holidays?country=IN&year=2026</p>
                  <pre className="whitespace-pre-wrap leading-relaxed overflow-x-auto">
                    <code>{jsonCode}</code>
                  </pre>
               </div>
            </div>

            <section className="grid md:grid-cols-3 gap-8 pt-16 border-t border-white/10">
               {[
                 { title: "Structured Data", desc: "Access verified, cleaned and structured holiday information beyond a simple list.", icon: Database },
                 { title: "Origin → Destination", desc: "Identify mismatches between working calendars across borders automatically.", icon: Globe },
                 { title: "Change Intelligence", desc: "Track official date changes and late government announcements in real-time.", icon: Server }
               ].map(item => (
                 <div key={item.title} className="space-y-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-[#E8A33D]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-headline">{item.title}</h3>
                    <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">{item.desc}</p>
                 </div>
               ))}
            </section>

            <Card className="bg-[#171D3A] border-white/10 rounded-2xl overflow-hidden p-8 md:p-12">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-headline font-medium">Enterprise & Custom Access</h2>
                    <p className="text-[#9AA1C0] font-medium leading-relaxed">
                      We support large-scale deployments and specialized data requirements including banking, 
                      markets, trade lanes and specific jurisdictional rules.
                    </p>
                    <ul className="space-y-4">
                       {["Custom country/region sets", "High-volume SLAs", "Dedicated documentation", "Direct technical support"].map(li => (
                         <li key={li} className="flex items-center gap-3 text-sm font-bold text-[#F4F1E8]">
                            <ShieldCheck className="w-4 h-4 text-[#4FD1C5]" />
                            {li}
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div className="bg-[#0B0F22] p-8 rounded-xl border border-white/5 space-y-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Endpoint Coverage</p>
                      <p className="text-2xl font-headline font-bold">100+ Jurisdictions</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Update Frequency</p>
                      <p className="text-2xl font-headline font-bold">Real-time Analysis</p>
                    </div>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full mt-4">
                      <Button className="w-full bg-[#4FD1C5] text-[#0F1428] hover:bg-[#F4F1E8] font-bold h-12 rounded-full">
                        <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp Enterprise Sales
                      </Button>
                    </a>
                  </div>
               </div>
            </Card>

            <div className="p-8 md:p-12 rounded-3xl border-2 border-dashed border-white/10 bg-[#E8A33D]/5 space-y-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8A33D]/10 border border-[#E8A33D]/20 rounded-full mb-2">
                  <ShieldAlert className="w-4 h-4 text-[#E8A33D]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">Verified Deterministic Data</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-headline font-medium">Safe for secure risk workflows.</h2>
                <p className="text-sm text-[#9AA1C0] leading-relaxed max-w-2xl mx-auto font-medium">
                  Utsavs is engineered for absolute reliability. Our platform uses verified source data, 
                  ensuring no data leakage and a deterministic evidence chain. 
                  This makes our intelligence suitable for secure internal enterprise scheduling, compliance, 
                  and high-stakes operational risk workflows.
                </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
