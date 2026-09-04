'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export function GHIApiSection() {
  const jsonCode = `{
  "name": "Diwali",
  "date": "2027-10-29",
  "country": "IN",
  "scope": "national",
  "categories": ["religious", "cultural"],
  "dateStatus": "CONFIRMED",
  "verificationStatus": "VERIFIED"
}`;

  return (
    <section id="api" className="container mx-auto px-6 py-24 border-t border-[#DED9D0]">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E94368] font-ui">API Preview</p>
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A]">One API.<br/>Global intelligence.</h2>
            <p className="text-lg text-[#6D6870] font-ui leading-relaxed max-w-lg font-medium">
                Build calendars, scheduling tools, travel experiences and operational systems on structured holiday intelligence.
            </p>
            <Button className="btn-ink h-12 px-10 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-sm transition-all active:scale-95">
                Join API Preview
            </Button>
        </div>

        <div className="flex-1 w-full max-w-xl">
            <div className="bg-white border border-[#DED9D0] p-8 md:p-12 relative rounded-sm shadow-sm overflow-hidden font-data">
                <div className="absolute top-0 right-0 p-6 text-[9px] font-bold uppercase tracking-widest text-[#6D6870] font-ui">Illustrative Response</div>
                <div className="text-xs space-y-6">
                    <div className="text-[#6D6870] flex items-center gap-2">
                        <span className="text-[#17151A] font-bold">GET</span> /v1/holidays?country=IN&year=2027
                    </div>
                    <pre className="text-[#17151A] leading-relaxed overflow-x-auto p-4 bg-[#F7F4EE]/50 rounded-sm">
                        <code>{jsonCode}</code>
                    </pre>
                </div>
            </div>
        </div>
      </div>

      <div className="mt-24 py-16 border-t border-b border-[#DED9D0] text-center space-y-12">
         <p className="text-2xl md:text-4xl font-display font-bold leading-tight text-[#6D6870] tracking-tight">
            Utsavs began by helping people discover festivals. <br />
            <span className="text-[#17151A]">We're now building the intelligence layer that helps systems understand them.</span>
         </p>
         
         <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 relative">
            <div className="space-y-1">
               <p className="font-display text-xl font-bold text-[#17151A]">Utsavs.com</p>
               <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.3em] font-ui">Discovery</p>
            </div>
            <div className="text-[#E94368] rotate-90 md:rotate-0 font-bold text-xl opacity-40">→</div>
            <div className="space-y-1 px-8 py-4 bg-white border border-[#DED9D0] shadow-sm">
               <p className="font-display text-xl font-bold text-[#E94368]">Global Intelligence</p>
               <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.3em] font-ui">Infrastructure</p>
            </div>
            <div className="text-[#E94368] rotate-90 md:rotate-0 font-bold text-xl opacity-40">→</div>
            <div className="space-y-1">
               <p className="font-display text-xl font-bold text-[#17151A]">Intelligence API</p>
               <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.3em] font-ui">Delivery</p>
            </div>
         </div>
      </div>
    </section>
  );
}
