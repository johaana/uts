'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  MessageSquare,
  Users as UsersIcon,
  Globe,
  Plus,
  ArrowRight,
  Plane,
  HeartPulse,
  Package
} from "lucide-react";
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';

/**
 * @fileOverview Insurance Dashboard - Lead Generation Mode
 * 
 * Hides the transactional Asego engine (Search/Select/Buy) while 
 * maintaining the professional product presence for the public launch.
 */

export function InsuranceDashboard({ isDebug }: { isDebug: boolean }) {
  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
      (window as any).$crisp.push(['set', 'session:data', [[["inquiry_type", "international_insurance"]]]]);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="relative min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 rounded-[40px] overflow-hidden grayscale-[30%] opacity-40">
          <Image 
            src={placeholderImages.insuranceHero.url} 
            fill 
            style={{ objectFit: 'cover' }} 
            alt="International Travel" 
            data-ai-hint="travel insurance protection"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1428]/95 via-[#0F1428]/40 to-transparent" />
        </div>

        <Card className="relative z-10 w-full max-w-5xl bg-[#171D3A]/80 backdrop-blur-2xl border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
          <CardContent className="p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center text-left">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] border-[#E8A33D]/30 text-[#E8A33D] py-1 px-3">
                  Institutional & Group Bookings
                </Badge>
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight">
                  Protect your <br />global journey.
                </h2>
                <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium max-w-md">
                  Professional-grade travel protection for group departures, institutional travel, and student cohorts. 
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <HeartPulse className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="text-sm font-bold text-white/90">Medical Coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="text-sm font-bold text-white/90">Trip Delays</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="text-sm font-bold text-white/90">Lost Baggage</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="text-sm font-bold text-white/90">Policy document delivery</span>
                </div>
              </div>

              <div className="pt-6">
                <Button onClick={openChat} className="h-16 px-12 bg-[#E8A33D] text-[#0F1428] font-bold text-lg rounded-2xl shadow-xl hover:scale-[1.02] transition-all group">
                  Enquire Now <MessageSquare className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-1 gap-4 w-72">
               {[
                 { label: "Volume Discounts", icon: UsersIcon },
                 { label: "Global Reach", icon: Globe },
                 { label: "Verified Data", icon: ShieldCheck }
               ].map((item, idx) => (
                 <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-2xl space-y-3">
                    <item.icon className="w-6 h-6 text-[#E8A33D]" />
                    <p className="text-sm font-bold text-white uppercase tracking-widest">{item.label}</p>
                 </div>
               ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
         <Card className="bg-[#171D3A] border-white/10 p-10 rounded-[32px] text-left space-y-4">
            <h4 className="text-xl font-bold text-white">Partner Distribution</h4>
            <p className="text-sm text-[#9AA1C0] leading-relaxed">
              Travel agencies can integrate our managed insurance distribution engine to provide 
              seamless protection to their clients. 
            </p>
            <Button variant="link" asChild className="p-0 h-auto text-[#E8A33D] font-bold uppercase text-[10px] tracking-widest">
               <a href="/partners">Partner Benefits <ArrowRight className="ml-1 w-3 h-3" /></a>
            </Button>
         </Card>
         <Card className="bg-[#171D3A] border-white/10 p-10 rounded-[32px] text-left space-y-4">
            <h4 className="text-xl font-bold text-white">Group Policies</h4>
            <p className="text-sm text-[#9AA1C0] leading-relaxed">
              We specialize in custom quotes for large travel cohorts, corporate off-sites, and 
              university exchange programs.
            </p>
            <Button onClick={openChat} variant="link" className="p-0 h-auto text-[#E8A33D] font-bold uppercase text-[10px] tracking-widest">
               Request Quote <ArrowRight className="ml-1 w-3 h-3" />
            </Button>
         </Card>
      </div>
    </div>
  );
}
