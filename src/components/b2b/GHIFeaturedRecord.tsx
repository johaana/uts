'use client';

import React from 'react';
import { GHIEvent } from '@/lib/ghi-temp-data';
import { cn } from '@/lib/utils';

export function GHIFeaturedRecord({ record }: { record: GHIEvent }) {
  return (
    <section className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
           <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#E94368] font-ui">Intelligence Record</p>
           <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight italic">A holiday is more than a date.</h2>
        </div>

        <div className="bg-white border border-[#DED9D0] p-10 lg:p-20 relative rounded-sm shadow-[0_48px_96px_-24px_rgba(23,21,26,0.12)] font-ui overflow-hidden">
           {/* Status Indicator */}
           <div className="absolute top-0 left-0 p-10">
              <div className="flex items-center gap-2 px-3 py-1 border border-[#DED9D0] bg-[#F7F4EE]/50 rounded-full">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#557568] animate-pulse" />
                 <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#17151A]">{record.status}</span>
              </div>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 pt-10">
              <div className="space-y-12">
                 <div>
                    <h3 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-[#17151A]">{record.name}</h3>
                    <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#6D6870] mt-2">{record.country} · National Scope</p>
                 </div>

                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#E94368]">Date</p>
                       <p className="font-data text-2xl tracking-tighter text-[#17151A]">{record.date}</p>
                    </div>
                    <div className="space-y-2">
                       <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#6D6870]">Date Model</p>
                       <p className="font-data text-2xl tracking-tighter text-[#17151A]">{record.model}</p>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#6D6870]">Classification</p>
                    <div className="flex flex-wrap gap-2">
                       {record.category.map(tag => (
                          <span key={tag} className="px-3 py-1 border border-[#DED9D0] text-[9px] font-bold uppercase tracking-[0.25em] text-[#17151A]/70 rounded-sm">{tag}</span>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="space-y-12">
                 <div className="space-y-3">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#E94368]">Why it matters</p>
                    <p className="text-lg leading-relaxed text-[#17151A] font-display italic serif pr-4">{record.whyItMatters}</p>
                 </div>

                 <div className="space-y-3">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#6D6870]">Regional Context</p>
                    <p className="text-sm leading-relaxed text-[#6D6870] font-medium">{record.regionalContext}</p>
                 </div>

                 <div className="pt-8 border-t border-[#DED9D0]/60 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.3em] text-[#6D6870]/50">
                    <span>Source: Authoritative Reference</span>
                    <span className="text-[#E94368]/40">Determination: Confirmed</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
