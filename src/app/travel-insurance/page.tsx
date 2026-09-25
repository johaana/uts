'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Plane, 
  Globe, 
  Landmark, 
  ArrowRight,
  ShieldAlert,
  Users2,
  Handshake,
  MessageSquare,
  Stethoscope,
  Briefcase,
  Smartphone,
  School,
  Backpack,
  Trophy,
  History
} from "lucide-react";

export default function TravelInsurancePage() {
  const WHATSAPP_LINK = "https://wa.me/919860997711";

  const coreFeatures = [
    {
      title: "Emergency Medical",
      desc: "Sum insured ranging from $75,000 to $1 Million. Includes worldwide medical assistance and emergency evacuation.",
      icon: Stethoscope
    },
    {
      title: "Anywhere to Anywhere",
      desc: "Comprehensive protection that can be availed by foreign nationals, NRIs, and travellers departing/arriving at any global destination.",
      icon: Globe
    },
    {
      title: "Active Baggage Tracking",
      desc: "96-hour guaranteed compensation if your luggage is not tracked. Covers any airline, anywhere in the world.",
      icon: Backpack
    },
    {
      title: "Flight Special Covers",
      desc: "Protection against flight delays, trip cancellations, missed connections, and change-in-fee costs.",
      icon: Plane
    }
  ];

  const studentFeatures = [
    {
      title: "Education Continuity",
      desc: "Study Interruption and Sponsor Protection ensuring your education stays on track even during family or financial emergencies.",
      icon: School
    },
    {
      title: "Institutional Safety",
      desc: "Unique coverage for University Insolvency and Bail Bond support in foreign jurisdictions.",
      icon: Landmark
    },
    {
      title: "Sports & Wellness",
      desc: "Specialized cover for inter-collegiate sports injuries, mental health support, and wellness screenings.",
      icon: Trophy
    },
    {
      title: "Lifestyle Protection",
      desc: "Comprehensive cover for gadgets, mugging protection, and debit/credit card fraud while studying abroad.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-24">
            
            {/* HERO */}
            <div className="space-y-8 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Verified Assistance Network</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium leading-tight tracking-tight">
                Plan for what you can predict. <br/>
                <span className="italic text-[#9AA1C0]">Protect against what you can't.</span>
              </h1>
              <p className="text-xl text-[#9AA1C0] leading-relaxed max-w-2xl mx-auto font-medium">
                Utsavs provides the date intelligence to plan your journey. We partner with global networks to provide the assistance to protect it.
              </p>
              <div className="pt-6">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold px-12 h-16 rounded-full shadow-2xl transition-transform hover:scale-105 uppercase tracking-widest text-xs">
                    <MessageSquare className="w-5 h-5 mr-2" /> Chat for Assistance Details
                  </Button>
                </a>
              </div>
            </div>

            {/* CORE SOLUTIONS */}
            <div className="space-y-12">
              <div className="text-left space-y-2">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#E8A33D]">Global Standards</p>
                <h2 className="text-3xl font-headline font-medium">New-Age Travel Assistance</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreFeatures.map((f, i) => (
                  <Card key={i} className="bg-[#171D3A] border-white/10 p-8 rounded-2xl group hover:border-[#4FD1C5] transition-all">
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#4FD1C5]/10 transition-colors">
                          <f.icon className="w-6 h-6 text-[#4FD1C5]" />
                       </div>
                       <div className="space-y-2 text-left">
                          <h4 className="text-xl font-bold font-headline">{f.title}</h4>
                          <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">{f.desc}</p>
                       </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* STUDENT ASSIST */}
            <div className="p-10 md:p-16 bg-[#1E2650] border border-white/10 rounded-[40px] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8A33D]/5 blur-[120px] -mr-32 -mt-32"></div>
               <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
                  <div className="space-y-6 text-left">
                    <div className="w-12 h-12 bg-[#E8A33D]/10 rounded-full flex items-center justify-center text-[#E8A33D]">
                      <School className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-headline font-medium leading-tight">Maximum Student Safety. Minimum Worries.</h3>
                    <p className="text-[#9AA1C0] font-medium leading-relaxed">
                      Tailored solutions for international students meeting university and visa requirements (F1, J1, M1). 
                      Access to over 1.4 million healthcare providers and 67,000 pharmacies.
                    </p>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block pt-4">
                       <Button variant="outline" className="border-white/20 hover:bg-white/5 font-bold rounded-full h-12 px-8">
                         View Student Plans
                       </Button>
                    </a>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8 text-left">
                    {studentFeatures.map((sf, idx) => (
                      <div key={idx} className="space-y-3">
                         <sf.icon className="w-5 h-5 text-[#E8A33D]" />
                         <h4 className="font-bold text-lg">{sf.title}</h4>
                         <p className="text-xs text-[#9AA1C0] leading-relaxed font-medium">{sf.desc}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* PARTNERSHIPS */}
            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-xl text-left">
               <div className="bg-[#171D3A] p-10 space-y-6 border-b md:border-b-0 md:border-r border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8A33D]">FOR ORGANISATIONS</span>
                  <h3 className="text-2xl font-headline font-medium">B2B Risk Workflows</h3>
                  <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">
                    Integrate travel protection into your corporate travel policy. Work with us on organizational risk and workforce scheduling.
                  </p>
                  <ul className="space-y-3">
                     {["Automated policy mapping", "Bulk enrollment", "Corporate risk reporting"].map(li => (
                       <li key={li} className="flex items-center gap-3 text-xs font-bold text-[#F4F1E8]">
                          <Handshake className="w-4 h-4 text-[#4FD1C5]" />
                          {li}
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="bg-[#171D3A] p-10 space-y-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8A33D]">CONCIERGE SERVICES</span>
                  <h3 className="text-2xl font-headline font-medium">Health Navigation</h3>
                  <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">
                    Direct access to medical bill negotiation, provider search, and patient advocacy teams nationwide.
                  </p>
                  <div className="grid grid-cols-1 gap-4 pt-2">
                     <div className="p-4 bg-white/5 rounded-lg border border-white/5 space-y-2">
                        <p className="text-xs font-bold flex items-center gap-2"><History className="w-4 h-4 text-[#4FD1C5]" /> Bill Review</p>
                        <p className="text-[11px] text-[#9AA1C0]">Expert negotiators review bills for discrepancies and inaccuracies.</p>
                     </div>
                     <div className="p-4 bg-white/5 rounded-lg border border-white/5 space-y-2">
                        <p className="text-xs font-bold flex items-center gap-2"><Globe className="w-4 h-4 text-[#4FD1C5]" /> Global Support</p>
                        <p className="text-[11px] text-[#9AA1C0]">Multilingual 24/7/365 assistance network supported across 45+ states and globally.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* DISCLOSURE */}
            <div className="p-10 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 text-left space-y-6">
              <h2 className="font-headline text-2xl font-medium flex items-center gap-3 text-foreground tracking-tight">
                <ShieldAlert className="w-6 h-6 text-[#E8A33D]" />
                Important Disclosure
              </h2>
              <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">
                Insurance is a subject matter of solicitation. Utsavs provides planning and date intelligence context and facilitates assistance through authorized global providers. Coverage, eligibility, and terms are determined by the applicable policy and insurer. Please review the official policy wording and applicable requirements before purchase.
              </p>
              <div className="h-px bg-white/10 w-full" />
              <p className="text-xs text-[#6E7495] leading-relaxed font-medium italic text-center">
                For detailed quotes, policy wording, and assistance network specifics, please connect with our representative on WhatsApp.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
