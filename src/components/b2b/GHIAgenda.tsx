'use client';

import React, { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { GHI_RECORDS } from '@/lib/calendar-intelligence-data';

export function GHIAgenda() {
  const [filter, setFilter] = useState('all');

  // Logic to show events relative to the current real date
  const agendaEvents = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();

    // For the prototype, we show the current month's events and the next month
    // to give it a "working agenda" feel
    return GHI_RECORDS.filter(event => {
      if (filter === 'public') return event.type === 'Public';
      return true;
    }).sort((a, b) => a.month - b.month || a.day - b.day);
  }, [filter]);

  return (
    <section id="calendar" className="container mx-auto px-6 py-24 bg-white/50 border-y border-[#DED9D0]">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-left">
          <div className="space-y-4">
             <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E94368] font-ui">Temporal Explorer</p>
             <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A]">The Operational Agenda</h2>
             <p className="text-lg text-[#6D6870] font-ui font-medium max-w-xl">
               High-density temporal data for operational planning. No grids. No clutter. Just what matters next.
             </p>
          </div>
          
          <div className="flex p-1 bg-[#F7F4EE] border border-[#DED9D0] rounded-sm font-ui">
            {['All', 'Public', 'Working Days'].map((v) => (
              <button 
                key={v}
                onClick={() => setFilter(v.toLowerCase())}
                className={cn(
                  "px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all",
                  filter === v.toLowerCase() ? "bg-white text-[#17151A] shadow-sm" : "text-[#6D6870]"
                )}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {agendaEvents.map((event, i) => {
            const isToday = new Date().getMonth() === event.month && new Date().getDate() === event.day;
            
            return (
              <div 
                key={event.id}
                className={cn(
                  "group flex flex-col md:flex-row md:items-center gap-6 p-8 bg-white border rounded-sm transition-all cursor-pointer relative overflow-hidden",
                  isToday ? "border-[#17151A] ring-1 ring-inset ring-[#17151A]/10" : "border-[#DED9D0] hover:border-[#17151A]"
                )}
              >
                <div className="w-32 space-y-1">
                  <p className="font-data text-sm font-bold text-[#17151A] uppercase">
                    {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short' }).format(new Date(2026, event.month, event.day))}
                  </p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6D6870]">{event.status}</p>
                </div>

                <div className="hidden md:block w-px h-12 bg-[#DED9D0]" />

                <div className="flex-1 space-y-1 text-left">
                  <h3 className="text-2xl font-bold font-display tracking-tight text-[#17151A]">{event.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6D6870]">{event.country} · {event.scope}</p>
                </div>

                <div className="flex flex-wrap gap-2 md:w-64">
                  {event.category.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#F7F4EE] text-[9px] font-bold uppercase tracking-widest text-[#6D6870] rounded-sm border border-[#DED9D0]/40">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-[#E94368] opacity-0 group-hover:opacity-100 transition-opacity font-ui">
                  Detail →
                </button>

                {isToday && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-[#E94368] text-white text-[8px] font-bold uppercase tracking-widest font-ui">
                    Live Today
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
           <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest font-ui text-[#17151A]">Operational Insights</h3>
              <div className="p-8 border border-[#DED9D0] rounded-sm space-y-6 font-ui bg-white shadow-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6D6870] font-bold uppercase tracking-widest">Business Days</span>
                  <span className="font-data font-bold">21</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#6D6870] font-bold uppercase tracking-widest">Local Closures</span>
                  <span className="font-data font-bold">02</span>
                </div>
                <div className="h-[1px] bg-[#DED9D0]" />
                <p className="text-sm font-medium leading-relaxed">"High operational density in South Asia due to seasonal festivals. Expect market-specific shipping delays."</p>
              </div>
           </div>
           
           <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest font-ui text-[#17151A]">Data Determination</h3>
              <div className="p-8 border border-[#DED9D0] rounded-sm space-y-6 font-ui bg-[#17151A] text-[#F7F4EE]">
                 <p className="text-sm font-medium italic font-display leading-relaxed">"Certainty is a first-class data property. We differentiate between government-confirmed dates and algorithmic estimates."</p>
                 <div className="flex gap-4">
                    {['Confirmed', 'Calculated', 'Provisional'].map(status => (
                      <span key={status} className="text-[9px] font-bold uppercase tracking-[0.3em] border border-[#E94368]/40 px-2 py-1 text-[#E94368]">{status}</span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
