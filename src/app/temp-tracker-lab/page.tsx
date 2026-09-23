'use client';

import React, { useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Info, 
  Plus, 
  ChevronRight,
  Clock
} from "lucide-react";
import { format, addDays, differenceInDays, startOfToday } from 'date-fns';
import { cn } from '@/lib/utils';

// Helper for the new timing language system
function getTimingLabel(days: number) {
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  return `In ${days} days`;
}

// Mock data for the demonstration
const mockAgenda = [
  {
    date: format(startOfToday(), 'yyyy-MM-dd'),
    events: [
      { country: "Japan", name: "Autumn Equinox Day", type: "Public" },
      { country: "Saudi Arabia", name: "National Day", type: "Public" }
    ]
  },
  {
    date: format(addDays(startOfToday(), 1), 'yyyy-MM-dd'),
    events: [
      { country: "South Africa", name: "Heritage Day", type: "Public" }
    ]
  },
  {
    date: format(addDays(startOfToday(), 3), 'yyyy-MM-dd'),
    events: [
      { country: "India", name: "Regional Observance", type: "Cultural" },
      { country: "United States", name: "Federal Event", type: "Policy" },
      { country: "Germany", name: "Bank Holiday", type: "Banking" }
    ]
  }
];

export default function TempTrackerLabPage() {
  const today = startOfToday();

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl space-y-16">
          
          <div className="space-y-4">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">UI Lab · Content Design</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium leading-tight tracking-tight">The Agenda View</h1>
            <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium">
              Prototyping a "Date-Primary" language system. Moving from a holiday countdown to an intelligence agenda.
            </p>
          </div>

          <section className="space-y-8">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#4FD1C5]">Prototype: Hero Tracker</h2>
            
            <div className="grid gap-6">
              {mockAgenda.map((item, idx) => {
                const dateObj = new Date(item.date + 'T00:00:00');
                const daysAway = differenceInDays(dateObj, today);
                const timingLabel = getTimingLabel(daysAway);
                const mainEvent = item.events[0];
                const extraCount = item.events.length - 1;

                return (
                  <Card key={idx} className="bg-[#171D3A] border-white/10 overflow-hidden shadow-2xl group transition-all hover:border-white/20">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-center">
                        
                        {/* Left: Timing Block */}
                        <div className="p-6 md:p-8 md:w-48 bg-white/5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5">
                           <span className={cn(
                             "text-[10px] font-mono uppercase tracking-widest mb-1",
                             daysAway === 0 ? "text-[#E8A33D]" : "text-[#9AA1C0]"
                           )}>
                             {timingLabel}
                           </span>
                           <span className="text-2xl font-headline font-bold">
                             {format(dateObj, 'dd MMM')}
                           </span>
                        </div>

                        {/* Right: Intelligence Block */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="space-y-2">
                             <div className="flex items-center gap-3">
                               <span className="text-[10px] font-mono text-[#6E7495] uppercase tracking-wider">National Signal</span>
                               <Badge variant="outline" className="text-[9px] border-white/10 text-[#9AA1C0] uppercase font-bold">{mainEvent.type}</Badge>
                             </div>
                             <h3 className="text-xl font-headline font-medium group-hover:text-[#E8A33D] transition-colors">
                                {mainEvent.country} — {mainEvent.name}
                             </h3>
                             
                             {/* Clickable Extra Events */}
                             {extraCount > 0 && (
                               <button className="flex items-center gap-2 text-xs font-bold text-[#4FD1C5] hover:text-white transition-colors pt-2 group/btn">
                                 <Plus className="w-3 h-3" /> 
                                 <span>{extraCount} more {extraCount === 1 ? 'event' : 'events'} on this day</span>
                                 <ChevronRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                               </button>
                             )}
                          </div>

                          <button className="h-11 px-6 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2 shrink-0">
                             Intelligence <Info className="w-4 h-4 text-[#E8A33D]" />
                          </button>
                        </div>

                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section className="p-10 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 space-y-6">
            <h2 className="font-headline text-2xl font-medium tracking-tight">Design Notes</h2>
            <div className="grid md:grid-cols-2 gap-8 text-[13.5px] text-[#9AA1C0] font-medium leading-relaxed">
              <div className="space-y-3">
                <p><b className="text-[#F4F1E8]">Natural Language:</b> Using "Today" and "Tomorrow" anchors the user in their current reality, making the data feel urgent and alive.</p>
                <p><b className="text-[#F4F1E8]">The clickable +N:</b> This preserves the "One Date" logic. It avoids cluttered UIs when multiple countries celebrate on the same day.</p>
              </div>
              <div className="space-y-3">
                <p><b className="text-[#F4F1E8]">Identity:</b> Even with 3 events, the Date remains the visual anchor. This prepares the user for the filtered "Date Intelligence" panel below.</p>
                <p><b className="text-[#F4F1E8]">No more '0 days':</b> September 23rd is "Today", not a countdown at its finish line.</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
