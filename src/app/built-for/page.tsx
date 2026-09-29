'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  Globe, 
  Clock, 
  Landmark, 
  CheckCircle2,
  ArrowRight,
  ShieldAlert
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
    },
    {
      title: "Global Logistics",
      subtitle: "When to move",
      icon: Landmark,
      description: "Avoid demurrage and detention. Track port and customs operational status across multiple jurisdictions simultaneously.",
      impact: "A holiday is a documented operational shift in port and terminal throughput.",
      theme: "from-teal/10 to-transparent",
      iconColor: "text-teal"
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6 text-left">
          <div className="max-w-5xl mx-auto space-y-24">
            
            <div className="space-y-6 max-w-3xl">
              <div className="text-[12.5px] font-mono text-[#4FD1C5] tracking-[0.3em] uppercase">The Intelligence Layer</div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium leading-none tracking-tighter text-left">
                One date.<br/>Different consequences.
              </h1>
              <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium text-left">
                A holiday for one traveler is a closed office for another. Utsavs was built for teams and individuals who need to know which one they are.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((uc, i) => (
                <Card key={i} className="bg-[#171D3A] border-white/10 rounded-2xl overflow-hidden group hover:border-white/20 transition-all shadow-xl text-left">
                  {/* Stylized Icon Panel instead of Image */}
                  <div className={`relative h-64 w-full bg-gradient-to-br ${uc.theme} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                    <uc.icon className={`w-32 h-32 ${uc.iconColor} opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform duration-700`} />
                    <uc.icon className={`absolute w-16 h-16 ${uc.iconColor} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`} />
                  </div>
                  
                  <CardContent className="p-10 space-y-8 pt-6">
                    <div className="flex justify-between items-start">
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/40">
                        <uc.icon className="w-7 h-7" />
                      </div>
                      <div className="text-right">
                         <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8A33D]">{uc.subtitle}</span>
                         <h3 className="text-3xl font-headline font-medium mt-1">{uc.title}</h3>
                      </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg text-[#F4F1E8] font-medium leading-relaxed">
                          {uc.description}
                        </p>
                        <div className="p-4 bg-white/5 border-l-2 border-[#4FD1C5] rounded-r-lg">
                           <p className="text-sm text-[#4FD1C5] italic">"{uc.impact}"</p>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-10 md:p-16 rounded-[40px] border-2 border-dashed border-white/10 bg-white/5 space-y-8 text-center max-w-4xl mx-auto">
                <ShieldAlert className="w-10 h-10 text-[#E8A33D] mx-auto" />
                <div className="space-y-4 text-center">
                  <h2 className="text-3xl md:text-4xl font-headline font-medium">Verified Deterministic Data</h2>
                  <p className="text-lg text-[#9AA1C0] leading-relaxed max-w-2xl mx-auto font-medium">
                    Generic AI hallucinations cause date errors. Utsavs uses a deterministic engine verified against 
                    named authoritative sources, making it safe for high-stakes operational risk assessment.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                   {["Sourced", "Regional", "Institutional", "Policy-Aware"].map(tag => (
                     <div key={tag} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F4F1E8]">
                        <CheckCircle2 className="w-4 h-4 text-[#4FD1C5]" /> {tag}
                     </div>
                   ))}
                </div>
            </div>

            <section className="py-24 border-t border-white/10 text-center space-y-10">
               <h2 className="text-4xl md:text-6xl font-headline font-medium tracking-tight text-center">Ready to understand your dates?</h2>
               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button asChild className="bg-[#E8A33D] text-[#0F1428] font-bold px-12 h-16 rounded-full shadow-2xl transition-all hover:scale-105 uppercase tracking-widest text-xs">
                    <Link href="/">
                      Start Planning <ArrowRight className="ml-2 w-5 h-5 text-[#0F1428]" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="px-10 h-16 font-bold border border-white/10 rounded-full hover:bg-white/5 transition-colors">
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
