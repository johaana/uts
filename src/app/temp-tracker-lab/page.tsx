'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Info, 
  Plus, 
  ChevronRight,
  Globe,
  Zap,
  Calendar
} from "lucide-react";
import { format, addDays, startOfToday } from 'date-fns';
import { cn } from '@/lib/utils';

export default function TempTrackerLabPage() {
  const today = startOfToday();

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl space-y-20">
          
          <div className="space-y-4 text-center">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">UI Review · Homepage Prototypes</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium leading-tight tracking-tight">Tracker Design Options</h1>
            <p className="text-xl text-[#9AA1C0] leading-relaxed max-w-2xl mx-auto font-medium">
              Choose how the Hero Tracker should look on the homepage. All options replace "0 days" with natural language and group multiple events.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* OPTION 1: The Premium Signal Board */}
            <div className="space-y-6">
              <div className="px-2">
                <Badge className="bg-[#4FD1C5] text-[#0F1428] font-bold">Option 1</Badge>
                <h3 className="text-lg font-headline font-bold mt-2">The Premium Signal Board</h3>
                <p className="text-sm text-[#9AA1C0] mt-1 italic">Focuses on urgency and "Signal" status. High contrast.</p>
              </div>
              
              <div className="w-full max-w-[380px] mx-auto border border-white/18 rounded-[18px] bg-[#171D3A] overflow-hidden shadow-2xl">
                <div className="p-5 border-b border-white/10 bg-white/5 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#4FD1C5] uppercase tracking-widest">Global Status</span>
                    <strong className="block text-paper">Today · 3 events</strong>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#4FD1C5]">Live</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-mono text-[#E8A33D] uppercase tracking-widest">Primary Signal</h4>
                    <p className="text-lg font-headline font-bold">Japan — Autumn Equinox Day</p>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-bold text-[#4FD1C5] hover:text-white transition-colors group/btn">
                    <Plus className="w-3.5 h-3.5" /> 
                    <span>2 more events on this day</span>
                  </button>
                </div>
                <a className="block p-4 bg-white/5 text-[11px] font-bold text-[#F0C888] uppercase tracking-[0.2em] text-center border-t border-white/10 hover:bg-white/10 transition-all" href="#date-intelligence">
                  See what this means →
                </a>
              </div>
            </div>

            {/* OPTION 2: The Date-Primary Agenda */}
            <div className="space-y-6">
              <div className="px-2">
                <Badge className="bg-[#E8A33D] text-[#0F1428] font-bold">Option 2</Badge>
                <h3 className="text-lg font-headline font-bold mt-2">The Date-Primary Agenda</h3>
                <p className="text-sm text-[#9AA1C0] mt-1 italic">Focuses on the Calendar as the anchor. Clean and editorial.</p>
              </div>

              <div className="w-full max-w-[380px] mx-auto border border-white/18 rounded-[18px] bg-[#171D3A] overflow-hidden shadow-2xl">
                <div className="flex">
                  <div className="w-24 bg-white/5 border-r border-white/10 flex flex-col items-center justify-center p-4 py-8">
                     <span className="text-[10px] font-mono text-[#9AA1C0] uppercase tracking-widest mb-1">Today</span>
                     <span className="text-2xl font-headline font-bold text-[#E8A33D]">23</span>
                     <span className="text-[10px] font-mono text-[#9AA1C0] uppercase">Sep</span>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center gap-2">
                     <div className="flex items-center gap-2">
                       <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">National Signal</span>
                       <Badge variant="outline" className="text-[8px] h-4 border-white/10 text-[#9AA1C0] uppercase px-1.5">Public</Badge>
                     </div>
                     <h4 className="text-lg font-headline font-medium leading-tight">Japan — Autumn Equinox Day</h4>
                     <button className="text-[11px] font-bold text-[#4FD1C5] text-left mt-1">+ 2 other global events</button>
                  </div>
                </div>
                <a className="block p-4 bg-[#1E2650] text-[11px] font-bold text-[#F4F1E8] uppercase tracking-[0.2em] text-center border-t border-white/10 hover:bg-[#252E60] transition-all" href="#date-intelligence">
                  View Intelligence Agenda →
                </a>
              </div>
            </div>

            {/* OPTION 3: The Narrative Tracker */}
            <div className="space-y-6">
              <div className="px-2">
                <Badge className="bg-white text-[#0F1428] font-bold">Option 3</Badge>
                <h3 className="text-lg font-headline font-bold mt-2">The Narrative Tracker</h3>
                <p className="text-sm text-[#9AA1C0] mt-1 italic">Focuses on the breadth of the data. Conversational.</p>
              </div>

              <div className="w-full max-w-[380px] mx-auto border border-white/18 rounded-[18px] bg-[#171D3A] overflow-hidden shadow-2xl">
                <div className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-full bg-[#E8A33D]/10 flex items-center justify-center text-[#E8A33D]">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                       <span className="block text-[22px] font-headline font-bold leading-none">Today</span>
                       <span className="text-[11px] text-[#6E7495] font-mono uppercase tracking-widest">{format(today, 'dd MMMM')}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                      <p className="text-[13px] text-[#9AA1C0] leading-relaxed">
                        Currently tracking <b className="text-white">3 events</b> across <b className="text-white">2 jurisdictions</b>.
                      </p>
                    </div>
                    <div className="space-y-2">
                       <div className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#E8A33D]" />
                         <span className="text-sm font-medium">Japan · Autumn Equinox</span>
                       </div>
                       <div className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#9AA1C0]" />
                         <span className="text-sm font-medium text-[#9AA1C0]">Saudi Arabia · National Day</span>
                       </div>
                    </div>
                  </div>
                </div>
                <a className="block p-4 bg-[#E8A33D] text-[11px] font-bold text-[#0F1428] uppercase tracking-[0.2em] text-center hover:bg-[#F0C888] transition-all" href="#date-intelligence">
                  Open Date Intel →
                </a>
              </div>
            </div>

          </div>

          {/* DESIGN SPECS SECTION */}
          <section className="p-10 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 space-y-8">
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <h2 className="font-headline text-2xl font-medium tracking-tight">The "0 Days" Solution</h2>
                  <p className="text-[#9AA1C0] text-sm leading-relaxed">
                    By implementing a <code className="text-paper bg-white/10 px-1 rounded">getTimingLabel(days)</code> helper, we anchor the product in the user's present.
                  </p>
                  <ul className="space-y-2 text-[13px] font-mono text-[#4FD1C5]">
                    <li>0 → "Today"</li>
                    <li>1 → "Tomorrow"</li>
                    <li>N → "In N days"</li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h2 className="font-headline text-2xl font-medium tracking-tight">One Date, Multiple Signals</h2>
                  <p className="text-[#9AA1C0] text-sm leading-relaxed">
                    We no longer duplicate cards for the same day. Instead, we show the <strong>Primary Signal</strong> (National/Public) and use a clickable link to expose the secondary ones.
                  </p>
                  <p className="text-[#9AA1C0] text-sm leading-relaxed">
                    This prevents the homepage from becoming a "scroll of cards" and turns it into a "board of dates."
                  </p>
               </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
