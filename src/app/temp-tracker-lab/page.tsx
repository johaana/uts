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
  Search,
  ChevronRight,
  Info,
  ShieldCheck
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

  // Reusable Checker Component (Static for simulation)
  const StaticChecker = () => (
    <div className="checker opacity-80 pointer-events-none scale-[0.95] origin-top-right">
      <div className="checker-top">
        <h3>Trip impact checker</h3>
        <button type="button" className="compare-launch">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Compare Countries</span>
        </button>
      </div>
      <div className="mode-toggle">
        <button type="button" className="active">Travel</button>
        <button type="button">Study</button>
        <button type="button">Business</button>
      </div>
      <div className="space-y-4">
        <div className="checker-field">
          <label>Destination</label>
          <div className="bg-[#1E2650] border border-white/18 p-3 rounded-lg text-sm text-[#9AA1C0]">India</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="checker-field"><label>From</label><div className="bg-[#1E2650] border border-white/18 p-3 rounded-lg text-sm text-[#9AA1C0]">2026-09-04</div></div>
          <div className="checker-field"><label>To</label><div className="bg-[#1E2650] border border-white/18 p-3 rounded-lg text-sm text-[#9AA1C0]">2026-10-04</div></div>
        </div>
      </div>
      <div className="mt-6 py-4 bg-[#E8A33D] text-[#0F1428] rounded-xl text-center font-bold text-sm uppercase tracking-widest">
        Check Impact
      </div>
    </div>
  );

  const HomepageGridSim = ({ children, title, badge }: { children: React.ReactNode, title: string, badge: string }) => (
    <section className="py-24 border-b border-white/10 last:border-0 relative">
      <div className="max-w-[1180px] mx-auto px-6 mb-12">
        <div className="flex items-center gap-3">
          <Badge className="bg-[#E8A33D] text-[#0F1428] font-bold px-3 py-1">{badge}</Badge>
          <h2 className="text-xl font-headline font-bold text-paper">{title}</h2>
        </div>
      </div>
      
      <div className="hero wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="headline">
              Know before you fly. <br /> Know before you schedule.
            </h1>
            <p className="sub">
              Check a country and your actual dates — before you book, schedule, or send a team member across borders.
            </p>
            
            <div className="w-full max-w-[460px]">
              {children}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <StaticChecker />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main>
        <div className="bg-[#171D3A]/50 border-b border-white/10 py-16">
          <div className="max-w-[1180px] mx-auto px-6 text-center space-y-4">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">UI Lab · Content-Led Review</div>
            <h1 className="text-4xl md:text-5xl font-headline font-medium">Intelligence Board Options</h1>
            <p className="text-lg text-[#9AA1C0] max-w-2xl mx-auto font-medium">
              Evaluating descriptive language and high-visibility event grouping.
            </p>
          </div>
        </div>

        {/* OPTION 1: The Agenda Board */}
        <HomepageGridSim title="The Agenda Board" badge="Option 1">
          <div className="border border-white/18 rounded-[18px] bg-[#171D3A] overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/10 bg-white/5 flex justify-between items-center">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-[#4FD1C5] uppercase tracking-widest">Temporal Status</span>
                <strong className="block text-paper text-base">{getTimingLabel(0)} · 3 Records</strong>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#4FD1C5]">Live</span>
              </div>
            </div>
            <div className="p-7 space-y-6 text-left">
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono text-[#E8A33D] uppercase tracking-widest">Primary Fact</h4>
                <p className="text-lg font-headline font-bold leading-tight">Japan — Autumn Equinox Day</p>
                <div className="flex items-center gap-2 text-xs text-[#9AA1C0]">
                   <ShieldCheck className="w-3 h-3" /> 
                   <span>Verified National Holiday</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/5 space-y-3">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Also Today</p>
                 <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-[#9AA1C0] group cursor-pointer hover:text-white transition-colors">
                       <span>Saudi Arabia — National Day</span>
                       <ChevronRight className="w-3 h-3" />
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#9AA1C0] group cursor-pointer hover:text-white transition-colors">
                       <span>United Arab Emirates — Cultural Observance</span>
                       <ChevronRight className="w-3 h-3" />
                    </div>
                 </div>
              </div>
            </div>
            <a className="block p-4 bg-white/5 text-[10px] font-bold text-[#F0C888] uppercase tracking-[0.2em] text-center border-t border-white/10 hover:bg-white/10 transition-all" href="#date-intelligence">
              Open Global Intelligence →
            </a>
          </div>
        </HomepageGridSim>

        {/* OPTION 2: The Date-Primary Agenda */}
        <HomepageGridSim title="The Date-Primary Agenda" badge="Option 2">
          <div className="border border-white/18 rounded-[18px] bg-[#171D3A] overflow-hidden shadow-2xl flex flex-col">
            <div className="flex border-b border-white/10">
              <div className="w-24 bg-white/5 border-r border-white/10 flex flex-col items-center justify-center p-4">
                 <span className="text-[9px] font-mono text-[#9AA1C0] uppercase tracking-widest mb-1">{getTimingLabel(0)}</span>
                 <span className="text-3xl font-headline font-bold text-[#E8A33D]">{format(today, 'dd')}</span>
                 <span className="text-[9px] font-mono text-[#9AA1C0] uppercase">{format(today, 'MMM')}</span>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center gap-2 text-left">
                 <div className="flex items-center gap-2">
                   <span className="text-[8px] font-bold uppercase tracking-widest text-[#6E7495]">National Event</span>
                   <Badge variant="outline" className="text-[7px] h-3.5 border-[#4FD1C5]/30 text-[#4FD1C5] uppercase px-1.5 rounded-sm">Verified</Badge>
                 </div>
                 <h4 className="text-base font-headline font-medium leading-tight">Japan — Autumn Equinox Day</h4>
                 <div className="mt-1 space-y-1">
                   <p className="text-[10px] text-[#9AA1C0]">+ Saudi Arabia: National Day</p>
                   <p className="text-[10px] text-[#9AA1C0]">+ UAE: Cultural Observance</p>
                 </div>
              </div>
            </div>
            <a className="block p-4 bg-[#1E2650] text-[10px] font-bold text-paper uppercase tracking-[0.2em] text-center hover:bg-[#252E60] transition-all" href="#date-intelligence">
              View Detailed Intelligence →
            </a>
          </div>
        </HomepageGridSim>

        {/* OPTION 4: The Minimalist Timeline */}
        <HomepageGridSim title="The Minimalist Timeline" badge="Option 4">
          <div className="bg-[#171D3A] border border-white/10 rounded-2xl p-7 space-y-6 shadow-2xl text-left relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4">
                <div className="w-2 h-2 rounded-full bg-[#4FD1C5] animate-pulse shadow-[0_0_10px_rgba(79,209,197,0.5)]"></div>
             </div>
             
             <div className="space-y-1">
                <span className="text-[9px] font-mono text-[#6E7495] uppercase tracking-[0.3em]">Calendar Feed</span>
                <h3 className="text-xl font-headline font-bold text-paper">{getTimingLabel(0)} · 3 Records</h3>
             </div>

             <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                <div className="relative pl-7 group cursor-pointer">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#E8A33D] border-4 border-[#171D3A] shadow-[0_0_0_1px_rgba(232,163,61,0.3)]"></div>
                  <p className="text-[9px] font-mono text-[#E8A33D] uppercase tracking-widest mb-0.5">National Record</p>
                  <h4 className="text-base font-headline font-medium text-paper group-hover:text-[#F0C888] transition-colors">Japan — Autumn Equinox Day</h4>
                </div>

                <div className="relative pl-7 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white/20 border-4 border-[#171D3A]"></div>
                  <p className="text-[9px] font-mono text-[#6E7495] uppercase tracking-widest mb-0.5">National Record</p>
                  <h4 className="text-sm font-headline text-paper">Saudi Arabia — National Day</h4>
                </div>

                <div className="relative pl-7 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white/10 border-4 border-[#171D3A]"></div>
                  <p className="text-[9px] font-mono text-[#6E7495] uppercase tracking-widest mb-0.5">Cultural Fact</p>
                  <h4 className="text-xs font-headline text-paper">UAE — Observance</h4>
                </div>
             </div>

             <button className="w-full py-3 border border-white/10 rounded-xl text-[10px] font-bold text-[#4FD1C5] uppercase tracking-widest hover:bg-white/5 transition-all">
                Enter Date Intelligence
             </button>
          </div>
        </HomepageGridSim>

        {/* OPTION 5: The High-Density Dashboard */}
        <HomepageGridSim title="The High-Density Board" badge="Option 5">
          <div className="bg-[#171D3A] border border-white/18 rounded-2xl overflow-hidden shadow-2xl flex flex-col text-left">
            <div className="grid grid-cols-2 bg-[#1E2650] border-b border-white/10 divide-x divide-white/10 text-center">
              <div className="p-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#4FD1C5] block mb-0.5">Global</span>
                <b className="text-lg font-headline text-paper">{getTimingLabel(0)}</b>
              </div>
              <div className="p-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495] block mb-0.5">Regional</span>
                <b className="text-lg font-headline text-paper">In 4 days</b>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3 text-[#E8A33D]" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#E8A33D]">Next National Facts</span>
                </div>
                <div className="space-y-3">
                   <div className="p-4 bg-white/5 rounded-xl border border-white/5 relative group cursor-pointer hover:bg-white/10 transition-all">
                      <h4 className="text-sm font-bold text-paper mb-0.5">Japan — Autumn Equinox</h4>
                      <p className="text-[10px] text-[#9AA1C0]">{format(today, 'd MMM')} · National</p>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E7495] opacity-0 group-hover:opacity-100" />
                   </div>
                   <div className="flex items-center justify-center gap-2 py-1 text-[9px] font-bold text-[#4FD1C5] uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
                      <Plus className="w-3 h-3" /> 2 other global events today
                   </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-[#6E7495]" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Next Local Observation</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="text-sm font-bold text-paper mb-0.5">Ganesh Chaturthi</h4>
                  <p className="text-[10px] text-[#9AA1C0]">Maharashtra, India · In 4 days</p>
                </div>
              </div>
            </div>

            <a className="block p-4 bg-[#E8A33D] text-[10px] font-bold text-[#0F1428] uppercase tracking-[0.2em] text-center" href="#date-intelligence">
              Explore All Records →
            </a>
          </div>
        </HomepageGridSim>
      </main>

      <footer className="py-12 border-t border-white/10">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-[13px] text-[#6E7495]">
          <div>Utsavs · global calendar intelligence · prototype, 2026</div>
          <div className="flex gap-6">
            <Link href="/" className="text-[#9AA1C0] hover:text-white">Explore Utsavs.com</Link>
            <Link href="/calendar" className="text-[#9AA1C0] hover:text-white">Full calendar</Link>
            <Link href="#api" className="text-[#9AA1C0] hover:text-white">Join API preview</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
