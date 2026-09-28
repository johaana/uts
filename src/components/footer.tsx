
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const [reviewDate, setReviewDate] = useState("8 Sept 2026");
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    const now = new Date();
    setReviewDate(format(now, "d MMM yyyy"));
    setCurrentYear(format(now, "yyyy"));
  }, []);

  return (
    <footer className="bg-ink border-t border-white/5 py-20">
      <div className="wrap space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
           <div className="space-y-6 text-left">
              <div className="flex flex-col">
                <span className="font-headline text-3xl font-bold tracking-tight">Utsavs</span>
                <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-[0.3em] mt-1">GLOBAL HOLIDAY INTELLIGENCE</span>
              </div>
              <p className="text-muted leading-relaxed max-w-sm font-medium">
                The world's structured, verified holiday and observance intelligence engine. 
                Built for technical systems and professional planning.
              </p>
           </div>
           <div className="flex flex-col md:items-end gap-8 text-left">
              <Link href="/api">
                <Button className="bg-[#E8A33D] text-[#0F1428] font-bold h-12 px-8 rounded-full shadow-lg group active:scale-95 transition-all">
                  Get API Access <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="flex gap-8 text-sm font-bold text-muted uppercase tracking-widest">
                <Link href="/date-intelligence" className="hover:text-white transition-colors">Explorer</Link>
                <Link href="/travel-insurance" className="hover:text-white transition-colors">Insurance</Link>
                <Link href="/festivals" className="hover:text-white transition-colors">Stories</Link>
              </div>
           </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-muted-dim font-bold uppercase tracking-widest">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center md:text-left">
             <span>&copy; {currentYear} UTSAVS</span>
             <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-teal shadow-[0_0_5px_var(--teal)]"></div>
                NOMINAL OPERATIONAL STATUS
             </span>
             <span>ISO 3166-1 alpha-2 / ISO-8601 COMPLIANCE</span>
          </div>
          <div>CURATED DATA LAST REVIEWED {reviewDate}</div>
        </div>

        <div className="text-[10px] text-muted-dim/60 leading-relaxed uppercase tracking-wider max-w-5xl mx-auto text-center border-t border-white/5 pt-8">
          Each record carries a date state and a named source. Institutional closures are sourced separately from calendar events. Lunar and government-declared dates are subject to change; Utsavs maintains the source and verification status for all 1,091 deterministic rules.
        </div>
      </div>
    </footer>
  );
}
