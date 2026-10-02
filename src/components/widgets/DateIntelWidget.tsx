"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Info, Calendar, MapPin } from "lucide-react";
import { getOperationalImpact } from "@/lib/operational/adapter";
import { COUNTRY_LABELS } from "@/lib/calendar-intelligence";
import { format, startOfToday } from "date-fns";
import { cn } from "@/lib/utils";

interface DateIntelWidgetProps {
  countryCode?: string;
  agencyId?: string;
  theme?: "light" | "dark";
  className?: string;
}

/**
 * @fileOverview Embeddable Date Intelligence Widget
 * This component is designed to be shared with agencies to show travel impact.
 */
export function DateIntelWidget({ 
  countryCode = "IN", 
  agencyId, 
  theme = "dark",
  className 
}: DateIntelWidgetProps) {
  const [impact, setImpact] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = format(startOfToday(), "yyyy-MM-dd");
    getOperationalImpact({
      destination: countryCode,
      startDate: today,
      endDate: today,
      purpose: "travel"
    }).then(res => {
      setImpact(res);
      setLoading(false);
    });
  }, [countryCode]);

  const bgColor = theme === "dark" ? "bg-[#171D3A]" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-[#17151A]";
  const mutedColor = theme === "dark" ? "text-[#9AA1C0]" : "text-[#6D6870]";
  const borderColor = theme === "dark" ? "border-white/10" : "border-[#DED9D0]";

  return (
    <Card className={cn("overflow-hidden rounded-2xl shadow-xl transition-all hover:scale-[1.02]", bgColor, borderColor, className)}>
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex flex-col items-start leading-none">
          <span className="text-[18px] font-serif font-bold text-white">Utsavs</span>
          <span className="text-[7px] font-mono font-bold text-[#E8A33D] uppercase tracking-[0.2em]">Intelligence</span>
        </div>
        <div className="flex items-center gap-1.5 text-green-500/80">
          <ShieldCheck className="w-2.5 h-2.5" />
          <span className="text-[8px] font-bold uppercase tracking-widest">Verified</span>
        </div>
      </div>
      
      <CardContent className="p-5 space-y-4 text-left">
        <div className="space-y-1">
          <p className="text-[9px] font-mono font-bold text-[#4FD1C5] uppercase tracking-widest">Global Pulse</p>
          <h3 className={cn("text-lg font-bold leading-tight", textColor)}>
            {COUNTRY_LABELS[countryCode]} Today
          </h3>
          <p className={cn("text-[10px] font-medium", mutedColor)}>
            {format(startOfToday(), "EEEE, d MMMM")}
          </p>
        </div>

        {loading ? (
          <div className="h-20 flex items-center justify-center opacity-20">
             <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>
        ) : impact?.records.length > 0 ? (
          <div className="space-y-3">
             {impact.records.slice(0, 2).map((r: any) => (
               <div key={r.id} className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1.5">
                  <span className="block text-[11px] font-bold text-white/90">{r.name}</span>
                  <p className="text-[9px] leading-relaxed text-[#9AA1C0] italic">"{r.consequences.implication}"</p>
               </div>
             ))}
          </div>
        ) : (
          <div className="py-6 text-center space-y-2 border border-dashed border-white/5 rounded-xl bg-white/[0.02]">
            <Info className="w-4 h-4 mx-auto opacity-20" />
            <p className={cn("text-[10px] italic font-medium", mutedColor)}>Standard operational day.</p>
          </div>
        )}

        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
           <span className="text-[7px] font-bold text-[#6E7495] uppercase tracking-widest">Powered by Utsavs API</span>
           <button className="text-[8px] font-bold text-[#E8A33D] uppercase tracking-widest hover:underline">Full Intel →</button>
        </div>
      </CardContent>
    </Card>
  );
}
