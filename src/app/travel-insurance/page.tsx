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
  MessageSquare
} from "lucide-react";
import Link from 'next/link';

export default function TravelInsurancePage() {
  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-20">
            
            <div className="space-y-6 text-center">
              <div className="text-[12.5px] font-mono text-[#4FD1C5] tracking-widest uppercase">Travel Insurance</div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium leading-tight tracking-tight">Plan for what you can predict. Protect against what you can't.</h1>
              <p className="text-xl text-[#9AA1C0] leading-relaxed max-w-2xl mx-auto font-medium">
                Utsavs helps you plan around dates, calendars and other things you can anticipate. Protection can help with the unexpected.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/919860997711" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold px-12 h-16 rounded-full shadow-2xl transition-transform hover:scale-105">
                    <MessageSquare className="w-5 h-5 mr-2" /> WhatsApp Our Team <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-xl text-left">
               <div className="bg-[#171D3A] p-10 space-y-6 border-b md:border-b-0 md:border-r border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8A33D]">FOR USERS</span>
                  <h3 className="text-2xl font-headline font-medium">Personal Protection</h3>
                  <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">
                    Whether you are a student, a business traveller or exploring for leisure, insurance provides a safety net for covered medical emergencies and travel disruptions.
                  </p>
                  <ul className="space-y-3">
                     {["Emergency medical & evacuation", "Baggage loss and delay", "Trip cancellation & interruption"].map(li => (
                       <li key={li} className="flex items-center gap-3 text-xs font-bold text-[#F4F1E8]">
                          <ShieldCheck className="w-4 h-4 text-[#4FD1C5]" />
                          {li}
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="bg-[#171D3A] p-10 space-y-6" id="partner">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8A33D]">PARTNERSHIPS</span>
                  <h3 className="text-2xl font-headline font-medium">Partner with Utsavs</h3>
                  <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">
                    Interested in bringing travel protection into your own customer or employee journey? We work with providers and institutions on context-aware protection.
                  </p>
                  <div className="grid grid-cols-1 gap-4 pt-2">
                     <div className="p-4 bg-white/5 rounded-lg border border-white/5 space-y-2">
                        <p className="text-xs font-bold flex items-center gap-2"><Handshake className="w-4 h-4 text-[#4FD1C5]" /> B2B</p>
                        <p className="text-[11px] text-[#9AA1C0]">Work with us on organizational travel protection and corporate risk workflows.</p>
                     </div>
                     <div className="p-4 bg-white/5 rounded-lg border border-white/5 space-y-2">
                        <p className="text-xs font-bold flex items-center gap-2"><Users2 className="w-4 h-4 text-[#4FD1C5]" /> B2B2C</p>
                        <p className="text-[11px] text-[#9AA1C0]">Bring travel-protection experiences into your own customer or student workflow.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="p-10 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 text-left space-y-6">
              <h2 className="font-headline text-2xl font-medium flex items-center gap-3 text-foreground tracking-tight">
                <ShieldAlert className="w-6 h-6 text-[#E8A33D]" />
                Important Disclosure
              </h2>
              <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">
                Insurance is the subject matter of solicitation. Coverage, eligibility, benefits, exclusions and terms are determined by the applicable policy and insurer. Please review the policy wording and applicable requirements before purchase.
              </p>
              <div className="h-px bg-white/10 w-full" />
              <p className="text-xs text-[#6E7495] leading-relaxed font-medium italic">
                Utsavs provides planning and date intelligence context. We are currently working toward connecting travel intelligence with travel protection workflows. We welcome discussions with providers, partners, and corporate users interested in context-aware protection.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
