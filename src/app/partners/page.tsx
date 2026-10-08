"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  ShieldCheck, 
  Globe, 
  Layout, 
  MessageSquare, 
  TrendingUp, 
  ArrowRight,
  Code,
  Smartphone,
  CheckCircle2,
  Lock,
  FileText
} from "lucide-react";
import { DateIntelWidget } from "@/components/widgets/DateIntelWidget";
import { InsuranceExpressWidget } from "@/components/widgets/InsuranceExpressWidget";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';

export default function PartnersPage() {
  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
    }
  };

  const benefits = [
    {
      title: "Date Intelligence",
      desc: "Verified date intelligence for your clients: the 'why' behind every date.",
      icon: Globe,
      color: "text-[#4FD1C5]"
    },
    {
      title: "Managed Insurance",
      desc: "Offer international travel insurance through one managed engine. Available to approved partners.",
      icon: ShieldCheck,
      color: "text-[#E8A33D]"
    },
    {
      title: "Distribution Widgets",
      desc: "Embed our tools on your site with a copy-and-paste snippet. No custom dev required.",
      icon: Layout,
      color: "text-purple-400"
    },
    {
      title: "Onboarding Support",
      desc: "Support from the Utsavs team for onboarding, domain verification, and integration.",
      icon: MessageSquare,
      color: "text-blue-400"
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main>
        {/* HERO */}
        <section className="py-20 md:py-32 border-b border-white/5 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40 grayscale-[20%]">
             <Image 
               src={placeholderImages.corporateHero.url} 
               fill 
               style={{ objectFit: 'cover' }} 
               alt="Partnership Background" 
               data-ai-hint="business traveler"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0F1428]/95 via-[#0F1428]/40 to-[#0F1428]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <Card className="max-w-4xl mx-auto bg-[#171D3A]/80 backdrop-blur-2xl border-white/10 rounded-[48px] overflow-hidden shadow-3xl">
               <CardContent className="p-10 md:p-20 text-center space-y-8">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex items-center gap-3 text-[#E8A33D]">
                      <Zap className="w-5 h-5 fill-current" />
                      <span className="text-[12px] font-mono font-bold uppercase tracking-[0.4em]">Ecosystem Expansion</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-headline font-medium tracking-tighter leading-[0.95] text-white">
                      One engine. <br />Many ways to distribute.
                    </h1>
                    <p className="text-xl text-[#9AA1C0] leading-relaxed max-w-2xl mx-auto font-medium">
                      Join the Utsavs partner network. Add verified holiday intelligence and, for approved partners, travel insurance to your workflow.
                    </p>
                  </div>
                  <div className="pt-6">
                    <Button onClick={openChat} className="bg-[#E8A33D] text-[#0F1428] hover:bg-white font-bold h-16 px-12 rounded-full shadow-2xl text-base transition-all group active:scale-95">
                      Become a Partner <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
               </CardContent>
            </Card>
          </div>
        </section>

        {/* BENEFITS GRID */}
        <section className="py-24 bg-white/[0.01]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {benefits.map((b, i) => (
                <div key={i} className="space-y-6 group text-left">
                  <div className={cn("w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110", b.color)}>
                    <b.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-headline font-bold text-white">{b.title}</h3>
                    <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WIDGET PREVIEW SECTION */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10 text-left">
                 <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-headline font-medium tracking-tight">The "No-Code" Advantage.</h2>
                    <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                      Deploy our verified engine on your own site. Once approved, your widget goes live in minutes with a simple embed snippet.
                    </p>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] mt-1" />
                       <p className="text-sm text-[#F4F1E8] font-medium leading-relaxed"><span className="font-bold">Instant Deployment:</span> Copy-paste an embed snippet to go live after approval.</p>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] mt-1" />
                       <p className="text-sm text-[#F4F1E8] font-medium leading-relaxed"><span className="font-bold">Conversion Optimized:</span> Minimalist design that builds trust and drives client engagement.</p>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] mt-1" />
                       <p className="text-sm text-[#F4F1E8] font-medium leading-relaxed"><span className="font-bold">Managed Records:</span> Sales are recorded against your agency in your private partner portal.</p>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                 <div className="absolute -inset-10 bg-[#E8A33D]/5 blur-[80px] rounded-full"></div>
                 <div className="relative z-10 space-y-4">
                    <p className="text-[10px] font-mono font-bold text-[#E8A33D] uppercase tracking-widest text-center opacity-60">Date Intelligence</p>
                    <DateIntelWidget className="w-full" />
                 </div>
                 <div className="relative z-10 space-y-4 pt-12 md:pt-24">
                    <p className="text-[10px] font-mono font-bold text-[#4FD1C5] uppercase tracking-widest text-center opacity-60">Insurance Express</p>
                    <InsuranceExpressWidget className="w-full" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTAL PREVIEW */}
        <section className="py-24 bg-[#171D3A] border-y border-white/5 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               <div className="flex-1 w-full order-2 lg:order-1 relative">
                  {/* Sample Data Watermark */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 z-20 pointer-events-none opacity-10">
                     <span className="text-[120px] font-bold border-8 border-white p-10 whitespace-nowrap">SAMPLE DATA</span>
                  </div>
                  
                  <Card className="bg-[#0B0F22] border-white/10 rounded-[32px] overflow-hidden shadow-2xl scale-110 md:scale-100 origin-left relative z-10">
                     <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                        <div className="flex gap-1.5">
                           <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>
                        <span className="text-[9px] font-mono font-bold text-[#6E7495] uppercase tracking-widest">partner_dashboard_v2.1</span>
                     </div>
                     <div className="p-10 space-y-12">
                        <div className="grid grid-cols-3 gap-8">
                           <div className="space-y-1 text-left">
                              <p className="text-[10px] text-[#6E7495] uppercase font-bold tracking-widest">Policies (Month)</p>
                              <p className="text-3xl font-bold font-serif text-white">42</p>
                           </div>
                           <div className="space-y-1 text-center">
                              <p className="text-[10px] text-[#6E7495] uppercase font-bold tracking-widest">Travellers</p>
                              <p className="text-3xl font-bold font-serif text-white">128</p>
                           </div>
                           <div className="space-y-1 text-right">
                              <p className="text-[10px] text-[#6E7495] uppercase font-bold tracking-widest">Docs Ready</p>
                              <p className="text-3xl font-bold font-serif text-[#4FD1C5]">42</p>
                           </div>
                        </div>
                        <div className="h-px bg-white/5 w-full"></div>
                        <div className="space-y-4">
                           <div className="flex items-center justify-between text-[11px] font-bold text-[#6E7495] uppercase tracking-widest">
                              <span>Recent Activity</span>
                              <span className="text-[#4FD1C5] flex items-center gap-1.5"><TrendingUp className="w-3 h-3" /> Live Feed</span>
                           </div>
                           
                           <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                              <div className="text-left"><p className="font-bold text-xs">P002491</p><p className="text-[10px] text-[#9AA1C0]">Student Essential · Asia Pacific</p></div>
                              <div className="text-right"><p className="font-bold text-xs text-green-500">ISSUED</p><p className="text-[10px] text-[#9AA1C0]">20 Oct 2026</p></div>
                           </div>
                           <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                              <div className="text-left"><p className="font-bold text-xs">P002492</p><p className="text-[10px] text-[#9AA1C0]">Corporate Premium · Europe</p></div>
                              <div className="text-right"><p className="font-bold text-xs text-green-500">ISSUED</p><p className="text-[10px] text-[#9AA1C0]">21 Oct 2026</p></div>
                           </div>
                           <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 opacity-60">
                              <div className="text-left"><p className="font-bold text-xs">P002493</p><p className="text-[10px] text-[#9AA1C0]">Leisure Group · Americas</p></div>
                              <div className="text-right"><p className="font-bold text-xs text-yellow-500">PENDING</p><p className="text-[10px] text-[#9AA1C0]">22 Oct 2026</p></div>
                           </div>
                        </div>
                     </div>
                  </Card>
               </div>
               <div className="flex-1 text-left space-y-8 order-1 lg:order-2">
                  <div className="space-y-4">
                     <h2 className="text-3xl md:text-5xl font-headline font-medium tracking-tight leading-tight">One Dashboard. <br/>Complete Visibility.</h2>
                     <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                        Every approved partner gets a private portal to issue policies, see their own sales, and download policy documents in real-time.
                     </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <Lock className="w-6 h-6 text-[#E8A33D]" />
                        <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">Private by Design</h4>
                        <p className="text-xs text-[#9AA1C0] leading-relaxed">Each agency sees only its own policies and records via secure authentication.</p>
                     </div>
                     <div className="space-y-2">
                        <FileText className="w-6 h-6 text-[#4FD1C5]" />
                        <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">One Record, One Place</h4>
                        <p className="text-xs text-[#9AA1C0] leading-relaxed">Search and download policies and documents directly from your integrated list.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-32 text-center">
           <div className="container mx-auto px-6 max-w-4xl space-y-12">
              <h2 className="text-4xl md:text-7xl font-headline font-medium tracking-tight">Ready to join the network?</h2>
              <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium">
                 Speak with our team about partnership terms for your agency. Commission and distribution rights are discussed during onboarding.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                 <Button onClick={openChat} className="bg-[#E8A33D] text-[#0F1428] font-bold h-16 px-12 rounded-full shadow-2xl text-lg hover:scale-105 transition-all">
                    Start Partner Chat
                 </Button>
                 <Button variant="ghost" asChild className="text-[#9AA1C0] hover:text-white uppercase font-bold tracking-[0.2em] text-[10px]">
                    <Link href="/api">Explore the API Documents →</Link>
                 </Button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
