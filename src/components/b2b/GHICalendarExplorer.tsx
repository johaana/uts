'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export function GHICalendarExplorer() {
  const [view, setView] = useState('grid');
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const highlights = [5, 8, 14, 26, 29];

  return (
    <section id="calendar" className="container mx-auto px-6 py-24 bg-white/50 border-y border-[#DED9D0]">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
             <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E94368] font-ui">Explorer</p>
             <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A]">The Calendar Explorer</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
             <div className="flex p-1 bg-[#F7F4EE] border border-[#DED9D0] rounded-sm font-ui">
                {['Grid', 'List', 'Timeline'].map((v) => (
                  <button 
                    key={v}
                    onClick={() => setView(v.toLowerCase())}
                    className={cn(
                      "px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all",
                      view === v.toLowerCase() ? "bg-white text-[#17151A] shadow-sm" : "text-[#6D6870]"
                    )}
                  >
                    {v}
                  </button>
                ))}
             </div>
          </div>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto pb-4 border-b border-[#DED9D0] font-ui">
          {['Holidays', 'Religious', 'Cultural', 'Public', 'Working Days', 'Long Weekends'].map(l => (
            <button key={l} className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.2em] text-[#6D6870] hover:text-[#17151A] transition-colors">{l}</button>
          ))}
        </div>

        <div className="bg-white border border-[#DED9D0] p-8 md:p-12 shadow-sm rounded-sm">
          <div className="space-y-8">
            <div className="flex items-center justify-between font-ui">
              <span className="text-2xl font-bold font-display">October 2026</span>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#6D6870]">India · National</div>
            </div>
            <div className="grid grid-cols-7 gap-px bg-[#DED9D0]">
               {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                 <div key={d} className="bg-[#F7F4EE] p-4 text-[9px] font-bold uppercase tracking-widest text-[#6D6870]">{d}</div>
               ))}
               {days.map(d => (
                 <div key={d} className={cn(
                   "bg-white aspect-square p-4 font-data text-sm flex flex-col justify-between hover:bg-[#F7F4EE] transition-colors cursor-pointer group",
                   highlights.includes(d) && "bg-[#F7F4EE]"
                 )}>
                    <span className={cn(highlights.includes(d) && "text-[#E94368] font-bold")}>{d}</span>
                    {highlights.includes(d) && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E94368]" />
                    )}
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
           <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest font-ui">Operational Context</h3>
              <div className="p-6 border border-[#DED9D0] rounded-sm space-y-4 font-ui">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6D6870]">Working Days</span>
                  <span className="font-bold">21</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6D6870]">Public Holidays</span>
                  <span className="font-bold">02</span>
                </div>
                <div className="h-[1px] bg-[#DED9D0]" />
                <div className="pt-2">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-[#E94368] mb-2">Long Weekend Alert</p>
                   <p className="text-sm font-medium">Diwali creates a 4-day bridge in 2026. High operational impact across logistics and service sectors.</p>
                </div>
              </div>
           </div>
           
           <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest font-ui">Cultural Lens</h3>
              <div className="p-6 border border-[#DED9D0] rounded-sm space-y-4 font-ui">
                 <p className="text-sm font-medium italic font-display">"The season of transition. From the harvest of late summer to the lights of deep autumn."</p>
                 <div className="flex gap-2">
                    {['Baan', 'Gifts', 'Clay', 'Lamps'].map(tag => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-[#F7F4EE] rounded-sm text-[#6D6870]">{tag}</span>
                    ))}
                 </div>
                 <button className="text-[10px] font-bold uppercase tracking-widest text-[#17151A] hover:text-[#E94368] transition-colors">Explore Regional Nuance →</button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
