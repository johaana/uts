'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Terminal, 
  Database, 
  ShieldCheck, 
  Layers, 
  Globe,
  ArrowRight,
  Server
} from "lucide-react";
import Link from 'next/link';

export default function ApiPage() {
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
          <div className="max-w-5xl mx-auto space-y-16">
            
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-center">
               <div className="space-y-6">
                  <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">API</div>
                  <h1 className="text-4xl md:text-6xl font-headline font-medium leading-tight tracking-tight">Put date intelligence into the tools you already use.</h1>
                  <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium">
                    Use Utsavs programmatically when your product, workflow or operation needs calendar intelligence at scale.
                  </p>
                  <div className="pt-4 flex gap-4">
                    <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold px-8 h-12 rounded-full shadow-lg">Join API Preview</Button>
                    <a href="mailto:api@utsavs.com">
                      <Button variant="ghost" className="border border-white/10 hover:bg-white/5 font-bold px-8 h-12 rounded-full">Contact Support</Button>
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
                  <div className="space-y-6 text-left">
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
                    <Link href="mailto:joy@utsavs.com?subject=Enterprise API Inquiry">
                      <Button className="w-full mt-4 bg-[#4FD1C5] text-[#0F1428] hover:bg-[#F4F1E8] font-bold h-12 rounded-full">Contact Enterprise Sales</Button>
                    </Link>
                  </div>
               </div>
            </Card>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
