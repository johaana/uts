"use client";

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  Globe, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Building2,
  GraduationCap
} from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function BuiltForPage() {
  const useCases = [
    {
      title: "Leisure Travel",
      subtitle: "When to go",
      icon: Plane,
      description: "Understand the cultural intensity and operational state of your destination. Flag festivals that drive high-density migration or unexpected closures.",
      impact: "A holiday is a signal for crowds and immersion, not just a day off.",
      theme: "from-blue-500/10 to-transparent",
      iconColor: "text-blue-400"
    },
    {
      title: "Education Partners",
      subtitle: "When to arrive",
      icon: GraduationCap,
      description: "Put institutional calendars and arrival timing around your dates. Align visa interviews and orientation with verified host-country intelligence.",
      impact: "A holiday can mean a university admissions office is offline for 48 hours.",
      theme: "from-purple-500/10 to-transparent",
      iconColor: "text-purple-400"
    },
    {
      title: "Global HR & Fintech",
      subtitle: "When to operate",
      icon: Building2,
      description: "Manage global workforce calendars with precision. Identify local regional holidays that affect payroll, meetings, and office availability.",
      impact: "A holiday means cross-border settlement latency and modified office hours.",
      theme: "from-gold/10 to-transparent",
      iconColor: "text-gold"
    }
  ];

  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
    }
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6 text-left">
          <div className="max-w-6xl mx-auto space-y-24">
            
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#4FD1C5] fill-current" />
                <span className="text-[12px] font-mono font-bold text-[#4FD1C5] tracking-[0.3em] uppercase">Solution Scopes</span>
              </div>
              <h1 className="text-4xl md:text-8xl font-headline font-medium leading-[0.95] tracking-tighter text-left">
                One date.<br/>Different consequences.
              </h1>
              <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium text-left max-w-2xl">
                A holiday for one traveler is a closed office for another. Utsavs provides the multi-layered intelligence needed to navigate the world's most complex calendars.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((uc, i) => (
                <Card key={i} className="bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden group hover:border-white/20 transition-all shadow-xl text-left flex flex-col">
                  <div className={`relative h-44 w-full bg-gradient-to-br ${uc.theme} flex items-center justify-center overflow-hidden shrink-0`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                    <uc.icon className={`w-24 h-24 ${uc.iconColor} opacity-20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700`} />
                    <uc.icon className={`absolute w-12 h-12 ${uc.iconColor} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`} />
                  </div>
                  
                  <CardContent className="p-8 space-y-6 pt-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/40">
                          <uc.icon className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                           <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E8A33D]">{uc.subtitle}</span>
                           <h3 className="text-2xl font-headline font-medium mt-1">{uc.title}</h3>
                        </div>
                      </div>
                      <p className="text-base text-[#F4F1E8]/80 font-medium leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                    <div className="p-4 bg-white/5 border-l-2 border-[#4FD1C5] rounded-r-lg mt-auto">
                       <p className="text-xs text-[#4FD1C5] italic font-medium">"{uc.impact}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* TRUST SECTION */}
            <div className="p-12 md:p-20 rounded-[48px] border-2 border-dashed border-white/10 bg-white/5 space-y-10 text-center max-w-5xl mx-auto">
                <div className="w-16 h-16 bg-[#E8A33D]/10 rounded-full flex items-center justify-center mx-auto">
                   <ShieldCheck className="w-8 h-8 text-[#E8A33D]" />
                </div>
                <div className="space-y-6 text-center">
                  <h2 className="text-3xl md:text-5xl font-headline font-medium tracking-tight">Source-backed intelligence.</h2>
                  <p className="text-lg md:text-xl text-[#9AA1C0] leading-relaxed max-w-3xl mx-auto font-medium">
                    Unlike generic AI, Utsavs uses a deterministic engine cross-checked by our research team. We independently verify institutional closures and government-declared dates for high-stakes operational risk assessment.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 pt-4">
                   {["Sourced", "Verified", "Institutional", "Policy-Aware"].map(tag => (
                     <div key={tag} className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#F4F1E8]">
                        <CheckCircle2 className="w-4 h-4 text-[#4FD1C5]" /> {tag}
                     </div>
                   ))}
                </div>
            </div>

            {/* FINAL CTA */}
            <section className="py-24 border-t border-white/10 text-center space-y-12">
               <h2 className="text-4xl md:text-7xl font-headline font-medium tracking-tight text-center">Need a custom set?</h2>
               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button onClick={openChat} className="bg-[#E8A33D] text-[#0F1428] font-bold px-12 h-16 rounded-full shadow-2xl transition-all hover:scale-105 uppercase tracking-widest text-xs">
                    Start Partner Chat <ArrowRight className="ml-2 w-5 h-5 text-[#0F1428]" />
                  </Button>
                  <Button asChild variant="ghost" className="px-10 h-16 font-bold border border-white/10 rounded-full hover:bg-white/5 transition-colors text-white uppercase text-xs tracking-widest">
                    <Link href="/partners">
                      Partner Benefits →
                    </Link>
                  </Button>
               </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
