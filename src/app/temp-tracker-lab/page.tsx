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
  AlertCircle
} from "lucide-react";
import { format, startOfToday } from 'date-fns';
import { cn } from '@/lib/utils';

export default function TempTrackerLabPage() {
  const today = startOfToday();

  // Helper to simulate the logic we will move to the homepage
  const getTimingLabel = (days: number) => {
    if (days === 0) return "Today";
    if (days === 1) return "Tomorrow";
    return `In ${days} days`;
  };

  const HeroLayout = ({ children, title, badge }: { children: React.ReactNode, title: string, badge: string }) => (
    <div className="space-y-12 border-b border-white/10 pb-24 mb-24 last:border-0">
      <div className="flex items-center gap-3 px-2">
        <Badge className="bg-[#E8A33D] text-[#0F1428] font-bold">{badge}</Badge>
        <h2 className="text-xl font-headline font-bold text-muted">{title}</h2>
      </div>
      <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-headline font-medium leading-[1.1] tracking-tight">
            Know before you fly. <br /> Know before you schedule.
          </h1>
          <p className="text-lg text-[#9AA1C0] max-w-[46ch]">
            Check a country and your actual dates — before you book, schedule, or send a team member across borders.
          </p>
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
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="space-y-4 text-center mb-24">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">UI Review · Hero Section Prototypes</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium">Date Intelligence Agenda</h1>
            <p className="text-xl text-[#9AA1C0] leading-relaxed max-w-2xl mx-auto font-medium">
              Evaluating how the Hero Tracker handles multiple events and natural timing language.
            </p>
          </div>

          {/* OPTION 1: The Premium Signal Board */}
          <HeroLayout title="The Premium Signal Board" badge="Option 1">
            <div className="border border-white/18 rounded-[18px] bg-[#171D3A] overflow-hidden shadow-2xl">
              <div className="p-5 border-b border-white/10 bg-white/5 flex justify-between items-center">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-[#4FD1C5] uppercase tracking-widest">Global Status</span>
                  <strong className="block text-paper">{getTimingLabel(0)} · 3 events</strong>
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
          </HeroLayout>

          {/* OPTION 2: The Date-Primary Agenda */}
          <HeroLayout title="The Date-Primary Agenda" badge="Option 2">
            <div className="border border-white/18 rounded-[18px] bg-[#171D3A] overflow-hidden shadow-2xl">
              <div className="flex">
                <div className="w-24 bg-white/5 border-r border-white/10 flex flex-col items-center justify-center p-4 py-8">
                   <span className="text-[10px] font-mono text-[#9AA1C0] uppercase tracking-widest mb-1">{getTimingLabel(0)}</span>
                   <span className="text-2xl font-headline font-bold text-[#E8A33D]">23</span>
                   <span className="text-[10px] font-mono text-[#9AA1C0] uppercase">{format(today, 'MMM')}</span>
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
          </HeroLayout>

          {/* OPTION 3: The Narrative Tracker */}
          <HeroLayout title="The Narrative Tracker" badge="Option 3">
            <div className="border border-white/18 rounded-[18px] bg-[#171D3A] overflow-hidden shadow-2xl">
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full bg-[#E8A33D]/10 flex items-center justify-center text-[#E8A33D]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                     <span className="block text-[22px] font-headline font-bold leading-none">{getTimingLabel(0)}</span>
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
          </HeroLayout>

          {/* OPTION 4: The Minimalist Timeline */}
          <HeroLayout title="The Minimalist Timeline" badge="Option 4">
            <div className="bg-[#171D3A] border border-white/10 rounded-3xl p-8 space-y-8 shadow-xl">
               <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#6E7495] uppercase tracking-[0.3em]">Temporal Status</span>
                  <h3 className="text-2xl font-headline font-bold text-[#F4F1E8]">{getTimingLabel(0)} — Multiple Events</h3>
               </div>

               <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                  <div className="relative pl-8 group cursor-pointer">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#E8A33D] border-4 border-[#171D3A] shadow-[0_0_0_1px_rgba(232,163,61,0.3)]"></div>
                    <p className="text-[10px] font-mono text-[#E8A33D] uppercase tracking-widest mb-1">Primary Signal</p>
                    <h4 className="text-lg font-headline font-medium text-[#F4F1E8]">Japan — Autumn Equinox Day</h4>
                    <p className="text-xs text-[#9AA1C0] mt-1">Markets closed · Government offline</p>
                  </div>

                  <div className="relative pl-8 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white/20 border-4 border-[#171D3A]"></div>
                    <p className="text-[10px] font-mono text-[#6E7495] uppercase tracking-widest mb-1">Secondary Signal</p>
                    <h4 className="text-base font-headline text-[#F4F1E8]">Saudi Arabia — National Day</h4>
                  </div>
               </div>

               <button className="w-full py-4 border border-white/10 rounded-2xl text-xs font-bold text-[#4FD1C5] uppercase tracking-widest hover:bg-white/5 transition-all">
                  Open 23 Sep Intelligence
               </button>
            </div>
          </HeroLayout>

          {/* OPTION 5: The High-Density Dashboard */}
          <HeroLayout title="The Multi-Channel Board" badge="Option 5">
            <div className="bg-[#171D3A] border border-white/18 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
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
              
              <div className="p-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#E8A33D]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">Global Awareness</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h4 className="text-sm font-bold text-paper mb-1">Japan · Autumn Equinox</h4>
                    <p className="text-[11px] text-[#9AA1C0]">National holiday · High operational impact</p>
                    <button className="text-[10px] font-bold text-[#4FD1C5] mt-2">+ 2 other countries</button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#6E7495]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Regional: India</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h4 className="text-sm font-bold text-paper mb-1">Ganesh Chaturthi</h4>
                    <p className="text-[11px] text-[#9AA1C0]">Regional (Maharashtra) · Starts In 4 days</p>
                  </div>
                </div>
              </div>

              <a className="block p-4 bg-[#E8A33D] text-[10px] font-bold text-[#0F1428] uppercase tracking-[0.2em] text-center" href="#date-intelligence">
                Enter Date Intelligence →
              </a>
            </div>
          </HeroLayout>

        </div>
      </main>

      <Footer />
    </div>
  );
}
