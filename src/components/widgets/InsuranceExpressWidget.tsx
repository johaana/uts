"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, MessageSquare, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsuranceExpressWidgetProps {
  agencyId?: string;
  className?: string;
}

/**
 * @fileOverview Insurance Express Widget - Lead Generation Mode
 * 
 * Updated to act as a lead capture tool for partners. Instead of 
 * transactional issuance, it routes interest to the inquiry channel.
 */
export function InsuranceExpressWidget({ agencyId = "PARTNER", className }: InsuranceExpressWidgetProps) {
  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
    }
  };

  return (
    <Card className={cn("overflow-hidden rounded-2xl shadow-xl bg-[#171D3A] border-white/10 text-left w-full max-w-sm", className)}>
      <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-serif font-bold text-white leading-tight">Travel Protection</span>
          <span className="text-[7px] font-mono font-bold text-[#4FD1C5] uppercase tracking-[0.2em]">Partner Hub</span>
        </div>
        <ShieldCheck className="w-5 h-5 text-[#E8A33D] opacity-60" />
      </div>

      <CardContent className="p-5 space-y-6">
        <div className="space-y-4">
          <div className="space-y-1">
             <p className="text-[10px] font-bold text-white/90 uppercase tracking-widest">Global Group Coverage</p>
             <p className="text-[10px] text-[#9AA1C0] leading-relaxed">
                Institutional-grade protection for international cohorts and large group bookings.
             </p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-xl space-y-3">
             <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">
                <span>Status</span>
                <span className="text-[#4FD1C5]">Available</span>
             </div>
             <div className="space-y-1">
                <p className="text-xs font-bold text-white">Full Medical & Trip Loss</p>
                <p className="text-[8px] text-[#9AA1C0]">Managed distribution for agencies</p>
             </div>
          </div>
        </div>

        <Button onClick={openChat} className="w-full h-12 bg-[#E8A33D] text-[#0F1428] hover:bg-white font-bold uppercase text-[10px] tracking-widest rounded-xl">
           Enquire for Group <MessageSquare className="ml-2 w-3 h-3" />
        </Button>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
           <div className="flex items-center gap-1.5 opacity-40">
              <Plane className="w-3 h-3 text-white" />
              <span className="text-[8px] font-bold uppercase tracking-widest text-[#6E7495]">Utsavs Network</span>
           </div>
           <span className="text-[8px] font-bold text-[#6E7495] uppercase">Ref: {agencyId}</span>
        </div>
      </CardContent>
    </Card>
  );
}
