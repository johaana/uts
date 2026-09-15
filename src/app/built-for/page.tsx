'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  Briefcase, 
  Globe, 
  Clock, 
  Landmark,
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import Link from 'next/link';

export default function BuiltForPage() {
  const useCases = [
    {
      title: "Travel",
      subtitle: "Choosing when to go",
      icon: Plane,
      description: "Understand what may be happening when you arrive, from public and regional dates to relevant travel information and local observances.",
      benefits: [
        "Flag festival dates before booking flights",
        "See if your trip lands on a long weekend",
        "Plan around crowds and potential price spikes"
      ]
    },
    {
      title: "Corporate / HR",
      subtitle: "Choosing when to operate",
      icon: Clock,
      description: "Check destination holidays before approving international travel or onboarding. Know exactly which state or city holidays apply to your team.",
      benefits: [
        "Avoid scheduling audits on local holidays",
        "Build region-aware global leave calendars",
        "Coordinate projects across multi-country teams"
      ]
    },
    {
      title: "Business & Finance",
      subtitle: "Choosing when to schedule",
      icon: Briefcase,
      description: "Don't get caught out by market closures or banking holidays. Compare origin and destination calendars before scheduling market-sensitive deadlines.",
      benefits: [
        "Track early closes and settlement cycles",
        "Plan payroll and payments with confidence",
        "Identify cross-border working day mismatches"
      ]
    },
    {
      title: "Study Abroad",
      subtitle: "Choosing when to arrive",
      icon: Globe,
      description: "Put institutional calendars and arrival timing around your dates. Align visa interviews and orientation sessions with verified host-country info.",
      benefits: [
        "Check arrival windows against academic start",
        "Avoid move-in or exam date conflicts",
        "Navigate student visa and policy changes"
      ]
    },
    {
      title: "Logistics",
      subtitle: "Choosing when to move",
      icon: Landmark,
      description: "Cross-check field operations and deliveries against several countries' holidays at once. Anticipate reduced staffing at customs and ports.",
      benefits: [
        "Plan around port and terminal closures",
        "Calculate demurrage exposure in advance",
        "Align carrier schedules with local observances"
      ]
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="space-y-4">
              <div className="text-[12.5px] font-mono text-[#4FD1C5] tracking-widest uppercase">Built For</div>
              <h1 className="text-4xl md:text-6xl font-headline font-medium leading-tight tracking-tight">Choose the right day for what you are trying to do.</h1>
              <p className="text-xl text-[#9AA1C0] leading-relaxed max-w-2xl font-medium">
                Travel, study, business, workforce and operations can all be affected by the same date in different ways. Utsavs helps you see the practical consequence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((uc, i) => (
                <Card key={i} className="bg-[#171D3A] border-white/10 hover:border-white/20 transition-all group rounded-2xl overflow-hidden shadow-lg">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-[#E8A33D] group-hover:scale-110 transition-transform">
                        <uc.icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                         <span className="text-[9px] font-bold uppercase tracking-widest text-[#E8A33D]">{uc.subtitle}</span>
                         <h3 className="text-2xl font-headline font-medium mt-1">{uc.title}</h3>
                      </div>
                    </div>
                    <p className="text-[15px] text-[#9AA1C0] leading-relaxed font-medium">
                      {uc.description}
                    </p>
                    <ul className="space-y-3 pt-4 border-t border-white/5">
                       {uc.benefits.map((benefit, j) => (
                         <li key={j} className="flex items-start gap-3 text-sm text-[#F4F1E8] font-medium leading-snug">
                            <ChevronRight className="w-4 h-4 text-[#4FD1C5] shrink-0 mt-0.5" />
                            {benefit}
                         </li>
                       ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <section className="py-16 border-y border-white/10 text-center space-y-8">
               <h2 className="text-3xl font-headline font-medium">Ready to understand your dates?</h2>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/date-intelligence">
                    <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold px-10 h-14 rounded-full">
                      Start Planning Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/api">
                    <Button variant="ghost" className="px-10 h-14 font-bold border border-white/10 rounded-full">
                      Explore the API →
                    </Button>
                  </Link>
               </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
