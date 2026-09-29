'use client';

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
  ShieldCheck
} from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function BuiltForPage() {
  const useCases = [
    {
      title: "Travelers",
      subtitle: "When to go",
      icon: Plane,
      description: "Understand the cultural intensity and operational state of your destination. Flag festivals that drive high-density migration or unexpected closures.",
      impact: "A holiday is a signal for crowds and immersion, not just a day off.",
      theme: "from-blue-500/10 to-transparent",
      iconColor: "text-blue-400"
    },
    {
      title: "International Students",
      subtitle: "When to arrive",
      icon: Globe,
      description: "Put institutional calendars and arrival timing around your dates. Align visa interviews and orientation with verified host-country intelligence.",
      impact: "A holiday can mean a university admissions office is offline for 48 hours.",
      theme: "from-purple-500/10 to-transparent",
      iconColor: "text-purple-400"
    },
    {
      title: "Corporate & HR",
      subtitle: "When to operate",
      icon: Clock,
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
              <div className="text-[12.5px] font-mono text-[#4FD1C5] tracking-[0.3em] uppercase">The Intelligence Layer</div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium leading-none tracking-tighter text-left">
                One date.<br/>Different consequences.
              </h1>
              <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium text-left">
                A holiday for one traveler is a closed office for another. Utsavs was built for teams and individuals who need to know which one they are.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((uc, i) => (
                <Card key={i} className="bg-[#171D3A] border-white/10 rounded-2xl overflow-hidden group hover:border-white/20 transition-all shadow-xl text-left flex flex-col">
                  {/* Stylized Icon Panel */}
                  <div className={`relative h-40 w-full bg-gradient-to-br ${uc.theme} flex items-center justify-center overflow-hidden shrink-0`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                    <uc.icon className={`w-20 h-20 ${uc.iconColor} opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform duration-700`} />
                    <uc.icon className={`absolute w-10 h-10 ${uc.iconColor} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`} />
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
                       <p className="text-xs text-[#4FD1C5] italic">"{uc.impact}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-10 md:p-16 rounded-[40px] border-2 border-dashed border-white/10 bg-white/5 space-y-8 text-center max-w-4xl mx-auto">
                <ShieldCheck className="w-10 h-10 text-[#E8A33D] mx-auto" />
                <div className="space-y-4 text-center">
                  <h2 className="text-3xl md:text-4xl font-headline font-medium">Source-backed intelligence.</h2>
                  <p className="text-lg text-[#9AA1C0] leading-relaxed max-w-2xl mx-auto font-medium">
                    Every data point is backed by an underlying source, with the source available to inspect. Human-verified. 
                    Unlike generic AI, Utsavs uses a deterministic engine cross-checked by our research team to ensure 
                    accuracy for high-stakes operational risk assessment.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                   {["Source-Backed", "Human-Verified", "Institutional", "Policy-Aware"].map(tag => (
                     <div key={tag} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F4F1E8]">
                        <CheckCircle2 className="w-4 h-4 text-[#4FD1C5]" /> {tag}
                     </div>
                   ))}
                </div>
            </div>

            <section className="py-24 border-t border-white/10 text-center space-y-10">
               <h2 className="text-4xl md:text-6xl font-headline font-medium tracking-tight text-center">Ready to understand your dates?</h2>
               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button onClick={openChat} className="bg-[#E8A33D] text-[#0F1428] font-bold px-12 h-16 rounded-full shadow-2xl transition-all hover:scale-105 uppercase tracking-widest text-xs">
                    Start Planning <ArrowRight className="ml-2 w-5 h-5 text-[#0F1428]" />
                  </Button>
                  <Button asChild variant="ghost" className="px-10 h-16 font-bold border border-white/10 rounded-full hover:bg-white/5 transition-colors text-white">
                    <Link href="/api">
                      Explore the API →
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
