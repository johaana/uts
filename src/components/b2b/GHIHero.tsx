'use client';

import React, { useState } from 'react';
import { Search, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { TODAY_CELEBRATIONS, LONG_WEEKENDS_PREVIEW } from '@/lib/ghi-temp-data';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function GHIHero() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="pt-12 lg:pt-20 container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* LEFT: WORLD PULSE */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E94368] font-ui">World Pulse</p>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-[0.95] tracking-tight">
              What the world <br/> celebrates today.
            </h1>
            <p className="text-lg text-[#6D6870] font-ui leading-relaxed font-medium">
              "A living view of holidays, festivals and observances happening around the world."
            </p>
          </div>

          {/* SIMPLIFIED MAP VISUALIZATION */}
          <div className="relative aspect-[16/9] bg-white border border-[#DED9D0] rounded-sm p-8 overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none">
               {/* Concept: SVG dots for countries */}
               <svg viewBox="0 0 800 400" className="w-full h-full fill-[#17151A]">
                  <circle cx="200" cy="150" r="4" className="animate-pulse fill-[#E94368] opacity-100"/>
                  <circle cx="580" cy="180" r="4" className="animate-pulse fill-[#E94368] opacity-100"/>
                  <circle cx="450" cy="220" r="4" className="animate-pulse fill-[#E94368] opacity-100"/>
               </svg>
            </div>
            <div className="relative h-full flex flex-col justify-end">
              <div className="space-y-6">
                 {TODAY_CELEBRATIONS.map((event) => (
                    <div key={event.id} className="flex items-center gap-6 group/row cursor-pointer">
                       <span className="font-data text-[10px] font-bold text-[#6D6870] w-12">{event.countryCode}</span>
                       <div className="flex-1">
                          <p className="text-sm font-bold font-ui">{event.name}</p>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-[#6D6870]/60">{event.category.join(' · ')}</p>
                       </div>
                       <ArrowRight className="w-4 h-4 text-[#DED9D0] group-hover/row:text-[#E94368] group-hover/row:translate-x-1 transition-all" />
                    </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[10px] font-bold uppercase tracking-[0.3em] font-ui border-b border-[#17151A] pb-1 hover:text-[#E94368] hover:border-[#E94368] transition-all">
               View All Today
            </button>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] font-ui bg-[#E94368] text-white px-6 py-3 rounded-sm hover:scale-105 transition-all">
               <Sparkles className="w-3 h-3" />
               Surprise Me
            </button>
          </div>
        </div>

        {/* RIGHT: PLAN */}
        <div className="lg:col-span-7 space-y-12 bg-white border border-[#DED9D0] p-8 md:p-16 rounded-sm shadow-sm relative">
           {/* Precision Marker */}
           <div className="absolute top-0 right-0 p-6 text-[9px] font-bold uppercase tracking-widest text-[#DED9D0] font-data">GHI_v3.0_PLANNER</div>
           
           <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6D6870] font-ui">Plan</p>
                <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">Find your <br/> next escape.</h2>
                <p className="text-lg text-[#6D6870] font-ui leading-relaxed font-medium">
                  "Discover holidays, festivals and long weekends worth planning around."
                </p>
              </div>

              {/* SEARCH */}
              <div className="space-y-6">
                 <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#DED9D0] group-focus-within:text-[#E94368] transition-colors" />
                    <Input 
                      placeholder="Search a holiday, place or date..."
                      className="h-14 pl-12 bg-[#F7F4EE]/50 border-[#DED9D0] rounded-sm font-ui text-base focus:ring-0 focus:border-[#17151A] transition-all"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                 </div>
                 <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-[#6D6870]">
                    <span>Diwali 2026</span>
                    <span>Japan in October</span>
                    <span>Holidays in India</span>
                    <span>Next Long Weekend</span>
                 </div>
              </div>

              {/* LONG WEEKEND FINDER */}
              <div className="pt-10 border-t border-[#DED9D0] space-y-8">
                 <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.2em] font-ui">Long Weekend Finder</h4>
                      <p className="text-xs text-[#6D6870] font-medium">"Your next reason to get away."</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold font-ui">
                       <MapPin className="w-4 h-4 text-[#E94368]" />
                       <span>INDIA</span>
                       <span className="text-[#DED9D0]">/</span>
                       <button className="text-[#6D6870] hover:text-[#17151A]">Change</button>
                    </div>
                 </div>

                 <div className="space-y-4">
                    {LONG_WEEKENDS_PREVIEW.map((item) => (
                       <div key={item.id} className="p-6 border border-[#DED9D0] rounded-sm hover:border-[#17151A] transition-all group/lw">
                          <div className="flex justify-between items-start mb-4">
                             <div>
                                <p className="text-xl font-bold font-display">{item.name}</p>
                                <p className="font-data text-[10px] text-[#E94368] font-bold uppercase tracking-widest">{item.dates}</p>
                             </div>
                             <div className="text-right">
                                <span className="bg-[#F7F4EE] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">{item.duration}</span>
                             </div>
                          </div>
                          <p className="text-xs text-[#6D6870] font-medium leading-relaxed mb-4 group-hover/lw:text-[#17151A] transition-colors">{item.description}</p>
                          <button className="text-[9px] font-bold uppercase tracking-[0.3em] font-ui text-[#17151A] flex items-center gap-2">
                             Explore Detail <ArrowRight className="w-3 h-3" />
                          </button>
                       </div>
                    ))}
                 </div>

                 <button className="w-full btn-ink h-12 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm">
                    Explore Long Weekends →
                 </button>
              </div>
           </div>
        </div>

      </div>

      {/* SECONDARY ACTIONS */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
         {['MY CALENDAR', 'EXPLORE THE WORLD', 'CHECK THE DATES'].map(a => (
            <button key={a} className="text-[10px] font-bold uppercase tracking-[0.4em] font-ui text-[#6D6870] hover:text-[#E94368] transition-colors">
               {a}
            </button>
         ))}
      </div>
    </section>
  );
}
