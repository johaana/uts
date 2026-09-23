'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Globe, 
  MapPin,
  Calendar,
  AlertCircle,
  ChevronRight
} from "lucide-react";
import { format, startOfToday } from 'date-fns';
import { cn } from '@/lib/utils';

export default function TempTrackerLabPage() {
  const today = startOfToday();

  const getTimingLabel = (days: number) => {
    if (days === 0) return "Today";
    if (days === 1) return "Tomorrow";
    return `In ${days} days`;
  };

  const HeroSim = ({ children, title, badge }: { children: React.ReactNode, title: string, badge: string }) => (
    <div className="py-24 border-b border-white/10 last:border-0">
      <div className="max-w-[1180px] mx-auto px-6 mb-12">
        <div className="flex items-center gap-3">
          <Badge className="bg-[#E8A33D] text-[#0F1428] font-bold px-3 py-1">{badge}</Badge>
          <h2 className="text-xl font-headline font-bold text-[#9AA1C0]">{title}</h2>
        </div>
      </div>
      
      <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-[1fr_400px] gap-12 items-start">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-medium leading-[1.1] tracking-tight">
            Know before you fly. <br /> Know before you schedule.
          </h1>
          <p className="text-lg text-[#9AA1C0] max-w-[46ch] leading-relaxed">
            Check a country and your actual dates — before you book, schedule, or send a team member across borders.
          </p>
          <div className="flex gap-4 pt-4">
             <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-mono text-[#6E7495] uppercase tracking-widest">Verified Data</div>
             <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-mono text-[#6E7495] uppercase tracking-widest">Source Aware</div>
          </div>
        </div>
        
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main>
        <div className="bg-[#171D3A]/30 border-b border-white/10 py-12">
          <div className="max-w-[1180px] mx-auto px-6 text-center space-y-4">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">UI Lab · Hero Tracker Review</div>
            <h1 className="text-4xl md:text-5xl font-headline font-medium">Date Intelligence Agenda</h1>
            <p className="text-lg text-[#9AA1C0] max-w-2xl mx-auto font-medium">
              Evaluating different ways to present global signals on the homepage.
            </p>
          </div>
        </div>

        {/* OPTION 1: The Premium Signal Board */}
        <HeroSim title="The Signal Board" badge="Option 1">
          <div className="border border-white/18 rounded-[18px] bg-[#171D3A] overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            <div className="p-5 border-b border-white/10 bg-white/5 flex justify-between items-center">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-[#4FD1C5] uppercase tracking-widest">Global Status</span>
                <strong className="block text-paper text-base">{getTimingLabel(0)} · 3 events</strong>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#4FD1C5]">Live</span>
              </div>
            </div>
            <div className="p-7 space-y-5">
              <div className="space-y-1">
                <h4 className="text-[10px] font-mono text-[#E8A33D] uppercase tracking-widest">Primary Signal</h4>
                <p className="text-xl font-headline font-bold">Japan — Autumn Equinox Day</p>
              </div>
              <button className="flex items-center gap-2 text-[13px] font-bold text-[#4FD1C5] hover:text-white transition-colors group">
                <Plus className="w-4 h-4" /> 
                <span>2 more events on this day</span>
              </button>
            </div>
            <a className="block p-4 bg-white/5 text-[11px] font-bold text-[#F0C888] uppercase tracking-[0.2em] text-center border-t border-white/10 hover:bg-white/10 transition-all" href="#date-intelligence">
              See what this means →
            </a>
          </div>
        </HeroSim>

        {/* OPTION 2: The Date-Primary Agenda */}
        <HeroSim title="The Date-Primary Agenda" badge="Option 2">
          <div className="border border-white/18 rounded-[18px] bg-[#171D3A] overflow-hidden shadow-2xl flex flex-col transition-transform hover:scale-[1.02] duration-500">
            <div className="flex border-b border-white/10">
              <div className="w-28 bg-white/5 border-r border-white/10 flex flex-col items-center justify-center p-4 py-10">
                 <span className="text-[10px] font-mono text-[#9AA1C0] uppercase tracking-widest mb-1">{getTimingLabel(0)}</span>
                 <span className="text-3xl font-headline font-bold text-[#E8A33D]">{format(today, 'dd')}</span>
                 <span className="text-[10px] font-mono text-[#9AA1C0] uppercase">{format(today, 'MMM')}</span>
              </div>
              <div className="flex-1 p-7 flex flex-col justify-center gap-2 text-left">
                 <div className="flex items-center gap-2">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">National Signal</span>
                   <Badge variant="outline" className="text-[8px] h-4 border-white/10 text-[#9AA1C0] uppercase px-1.5 rounded-sm">Public</Badge>
                 </div>
                 <h4 className="text-lg font-headline font-medium leading-tight">Japan — Autumn Equinox Day</h4>
                 <button className="text-[11px] font-bold text-[#4FD1C5] text-left mt-1 hover:text-white transition-colors">+ 2 other global events</button>
              </div>
            </div>
            <a className="block p-4 bg-[#1E2650] text-[11px] font-bold text-[#F4F1E8] uppercase tracking-[0.2em] text-center hover:bg-[#252E60] transition-all" href="#date-intelligence">
              View Intelligence Agenda →
            </a>
          </div>
        </HeroSim>

        {/* OPTION 4: The Minimalist Timeline */}
        <HeroSim title="The Minimalist Timeline" badge="Option 4">
          <div className="bg-[#171D3A] border border-white/10 rounded-3xl p-8 space-y-8 shadow-2xl transition-transform hover:scale-[1.02] duration-500">
             <div className="space-y-1 text-left">
                <span className="text-[10px] font-mono text-[#6E7495] uppercase tracking-[0.3em]">Temporal Status</span>
                <h3 className="text-2xl font-headline font-bold text-[#F4F1E8]">{getTimingLabel(0)} · 3 Signals</h3>
             </div>

             <div className="space-y-8 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                <div className="relative pl-8 group cursor-pointer text-left">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#E8A33D] border-4 border-[#171D3A] shadow-[0_0_0_1px_rgba(232,163,61,0.3)]"></div>
                  <p className="text-[10px] font-mono text-[#E8A33D] uppercase tracking-widest mb-1">Primary Signal</p>
                  <h4 className="text-lg font-headline font-medium text-[#F4F1E8]">Japan — Autumn Equinox Day</h4>
                  <p className="text-xs text-[#9AA1C0] mt-1">Markets closed · Government offline</p>
                </div>

                <div className="relative pl-8 opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-left">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white/20 border-4 border-[#171D3A]"></div>
                  <p className="text-[10px] font-mono text-[#6E7495] uppercase tracking-widest mb-1">Secondary Signal</p>
                  <h4 className="text-base font-headline text-[#F4F1E8]">Saudi Arabia — National Day</h4>
                </div>
             </div>

             <button className="w-full py-4 border border-white/10 rounded-2xl text-[11px] font-bold text-[#4FD1C5] uppercase tracking-widest hover:bg-white/5 transition-all">
                Open Full Intelligence
             </button>
          </div>
        </HeroSim>

        {/* OPTION 5: The Multi-Channel Dashboard */}
        <HeroSim title="The Multi-Channel Board" badge="Option 5">
          <div className="bg-[#171D3A] border border-white/18 rounded-2xl overflow-hidden shadow-2xl flex flex-col transition-transform hover:scale-[1.02] duration-500">
            <div className="grid grid-cols-2 bg-[#1E2650] border-b border-white/10 divide-x divide-white/10">
              <div className="p-4 text-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#4FD1C5] block mb-1">Next National</span>
                <b className="text-xl font-headline text-paper">Today</b>
              </div>
              <div className="p-4 text-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495] block mb-1">Next Regional</span>
                <b className="text-xl font-headline text-paper">In 4 days</b>
              </div>
            </div>
            
            <div className="p-6 space-y-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#E8A33D]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">Global Awareness</span>
                </div>
                <div className="p-5 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="text-sm font-bold text-paper mb-1">Japan · Autumn Equinox</h4>
                  <p className="text-[11px] text-[#9AA1C0]">High operational impact</p>
                  <button className="text-[10px] font-bold text-[#4FD1C5] mt-3 flex items-center gap-1 hover:text-white">+ 2 others <ChevronRight className="w-3 h-3"/></button>
                </div>
              </div>

              <div className="space-y-3 opacity-60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#6E7495]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Regional Check</span>
                </div>
                <div className="p-5 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="text-sm font-bold text-paper mb-1">Ganesh Chaturthi</h4>
                  <p className="text-[11px] text-[#9AA1C0]">Maharashtra · Starts In 4 days</p>
                </div>
              </div>
            </div>

            <a className="block p-4 bg-[#E8A33D] text-[10px] font-bold text-[#0F1428] uppercase tracking-[0.2em] text-center font-bold" href="#date-intelligence">
              Enter Date Intelligence →
            </a>
          </div>
        </HeroSim>
      </main>

      <Footer />
    </div>
  );
}
