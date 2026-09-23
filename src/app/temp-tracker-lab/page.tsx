'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { 
  Globe, 
  MapPin,
  Calendar,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Clock
} from "lucide-react";
import { format, startOfToday } from 'date-fns';
import { cn } from '@/lib/utils';

export default function TempTrackerLabPage() {
  const today = startOfToday();

  // Reusable Checker Component (Static for simulation of the new Global-First state)
  const GlobalFirstChecker = () => (
    <div className="checker opacity-90 pointer-events-none scale-[0.95] origin-top-right border-white/20">
      <div className="checker-top">
        <h3 className="font-headline text-paper">Trip impact checker</h3>
        <button type="button" className="compare-launch">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Compare</span>
        </button>
      </div>
      <div className="mode-toggle mb-6">
        <button type="button" className="active">Travel</button>
        <button type="button">Study</button>
        <button type="button">Business</button>
      </div>
      <div className="space-y-4">
        <div className="checker-field">
          <label className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Destination / Jurisdiction</label>
          <div className="bg-[#1E2650] border border-white/25 p-4 rounded-xl text-sm text-[#F0C888] font-bold flex items-center justify-between">
            <div className="flex items-center gap-3">
               <Globe className="w-4 h-4 text-[#4FD1C5]" /> 
               <span>Global — Select destination</span>
            </div>
            <ChevronRight className="w-3 h-3 opacity-40" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="checker-field"><label>From</label><div className="bg-[#1E2650] border border-white/18 p-3 rounded-lg text-sm text-[#9AA1C0]">2026-09-04</div></div>
          <div className="checker-field"><label>To</label><div className="bg-[#1E2650] border border-white/18 p-3 rounded-lg text-sm text-[#9AA1C0]">2026-10-04</div></div>
        </div>
      </div>
      <div className="mt-8 py-4 bg-white/5 border border-dashed border-white/10 text-[#9AA1C0] rounded-xl text-center font-bold text-[10px] uppercase tracking-[0.2em] italic">
        Select a country to calculate impact
      </div>
    </div>
  );

  const HomepageGridSim = ({ children, title, badge, description }: { children: React.ReactNode, title: string, badge: string, description: string }) => (
    <section className="py-24 border-b border-white/10 last:border-0 relative">
      <div className="max-w-[1180px] mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Badge className="bg-[#E8A33D] text-[#0F1428] font-bold px-3 py-1 w-fit">{badge}</Badge>
          <div className="space-y-1 text-left">
            <h2 className="text-2xl font-headline text-paper">{title}</h2>
            <p className="text-sm text-[#9AA1C0] max-w-xl">{description}</p>
          </div>
        </div>
      </div>
      
      <div className="hero wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="headline text-left">
              Know before you fly. <br /> Know before you schedule.
            </h1>
            <p className="sub text-left">
              Check a country and your actual dates — before you book, schedule, or send a team member across borders.
            </p>
            
            <div className="w-full mt-8">
              {children}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <GlobalFirstChecker />
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
            <div className="text-[12.5px] font-mono text-[#4FD1C5] tracking-widest uppercase">Product Model Review · Global-First</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium">The Today Agenda</h1>
            <p className="text-lg text-[#9AA1C0] max-w-2xl mx-auto font-medium leading-relaxed">
              Transitioning from a "Holiday List" to a "Global Intelligence Board". <br />
              Focusing on immediate status, natural timing, and data hierarchy.
            </p>
          </div>
        </div>

        {/* OPTION 1: The Global Status Agenda */}
        <HomepageGridSim 
          title="The Today Status Agenda" 
          badge="Recommendation"
          description="Global-First approach. Replaces India default with a worldwide 'Today' status. High density listing of all active records."
        >
          <div className="border border-white/20 rounded-3xl bg-[#171D3A] overflow-hidden shadow-2xl flex flex-col group transition-all">
            <div className="p-4 bg-[#1E2650] border-b border-white/10 flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8A33D] font-mono">Today around the world</span>
              <div className="flex items-center gap-2 px-2.5 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#4FD1C5]">Live Feed</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              {/* Date Block */}
              <div className="w-full md:w-32 bg-white/5 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center p-6 md:p-8">
                 <span className="text-4xl font-headline font-bold text-[#F0C888] leading-none mb-1">{format(today, 'dd')}</span>
                 <span className="text-[11px] font-mono text-[#9AA1C0] uppercase tracking-widest font-bold">{format(today, 'MMM')}</span>
              </div>

              {/* Intelligence Block */}
              <div className="flex-1 p-8 space-y-6 text-left">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#6E7495]">3 Countries · 3 Records</p>
                    <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase text-[#4FD1C5]">
                       <ShieldCheck className="w-3 h-3" /> Verified
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                     {/* Primary Event */}
                     <div className="space-y-1.5">
                       <h4 className="text-xl font-headline font-bold text-paper leading-tight">Japan — Autumn Equinox Day</h4>
                       <span className="inline-block px-2 py-0.5 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-sm text-[8px] font-bold uppercase text-[#4FD1C5]">National Holiday / Market Closure</span>
                     </div>

                     {/* Also Today - High Density Visibility */}
                     <div className="pt-4 border-t border-white/5 space-y-2.5">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[#E8A33D]/60">Also today</p>
                        <div className="space-y-2">
                           <div className="flex items-center gap-2 text-sm font-medium text-[#9AA1C0]">
                              <span className="text-[10px] opacity-40">+</span> Saudi Arabia — National Day
                           </div>
                           <div className="flex items-center gap-2 text-sm font-medium text-[#9AA1C0]">
                              <span className="text-[10px] opacity-40">+</span> United Arab Emirates — Cultural Observation
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/date-intelligence" className="block p-4 bg-white/5 text-[10px] font-bold text-[#F0C888] uppercase tracking-[0.4em] text-center border-t border-white/10 hover:bg-[#1E2650] transition-all">
              View Today's Intelligence →
            </Link>
          </div>
        </HomepageGridSim>

        {/* COMING UP PREVIEW */}
        <section className="py-24 bg-[#0F1428] border-t border-white/10">
          <div className="max-w-[1180px] mx-auto px-6">
             <div className="max-w-2xl mb-12 text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4FD1C5] mb-3">Timeline</p>
                <h2 className="text-3xl font-headline font-bold mb-4">Coming up globally.</h2>
                <p className="text-[#9AA1C0] font-medium leading-relaxed">The timeline where countdowns matter. From seasonal festivals to operational changes.</p>
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                {[
                  { date: "25 Sep", in: "In 2 days", country: "India", event: "Anant Chaturdashi", meta: "Regional · Maharashtra" },
                  { date: "01 Oct", in: "In 8 days", country: "China", event: "National Day", meta: "National · Public" },
                  { date: "02 Oct", in: "In 9 days", country: "India", event: "Gandhi Jayanti", meta: "National · Public" }
                ].map(item => (
                  <div key={item.event} className="p-6 border border-white/10 rounded-2xl bg-[#171D3A] space-y-4 group cursor-pointer hover:border-[#F0C888] transition-all">
                    <div className="flex justify-between items-start">
                       <div className="space-y-1">
                          <span className="text-[10px] font-mono text-[#F0C888] font-bold uppercase tracking-widest">{item.in}</span>
                          <p className="text-xl font-bold font-headline">{item.date}</p>
                       </div>
                       <ChevronRight className="w-4 h-4 text-[#6E7495] group-hover:text-white" />
                    </div>
                    <div className="space-y-1">
                       <h4 className="text-base font-bold text-paper">{item.country} — {item.event}</h4>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">{item.meta}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* THE "CLEAR WINDOW" CONCEPT */}
        <section className="py-24 bg-[#171D3A] border-y border-white/10">
          <div className="max-w-[1180px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
             <div className="flex-1 space-y-6 text-left">
                <Badge className="bg-[#4FD1C5] text-[#0F1428] font-bold">Concept</Badge>
                <h2 className="text-4xl font-headline font-bold">Operational honesty.</h2>
                <p className="text-lg text-[#9AA1C0] font-medium leading-relaxed">
                  When nothing is happening, we say so. A "Clear Operational Window" is as valuable to a business planner as a flagged holiday.
                </p>
             </div>
             <div className="flex-1 w-full max-w-md">
                <div className="p-10 border border-dashed border-white/20 rounded-3xl bg-white/5 text-center space-y-6">
                   <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-8 h-8 text-[#4FD1C5] opacity-50" />
                   </div>
                   <div className="space-y-2">
                      <h3 className="text-2xl font-headline font-bold">Clear Operational Window</h3>
                      <p className="text-sm text-[#9AA1C0] leading-relaxed">No major national or regional closures flagged for this date in the global index.</p>
                   </div>
                   <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#6E7495]">Status: Normal</div>
                </div>
             </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-[13px] text-[#6E7495]">
          <div>Utsavs · global calendar intelligence · prototype, 2026</div>
          <div className="flex gap-6">
            <Link href="/" className="text-[#9AA1C0] hover:text-white">Explore Utsavs.com</Link>
            <Link href="/calendar" className="text-[#9AA1C0] hover:text-white">Full calendar</Link>
            <Link href="/api" className="text-[#9AA1C0] hover:text-white">Join API preview</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
