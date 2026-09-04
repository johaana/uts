
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, ArrowRight, MapPin, 
  Globe, ChevronRight, Sparkles, Clock, BookOpen, Send
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { allEvents, internationalEvents } from '@/lib/festival-data';
import { DIWALI_NUANCE, TODAY_STORY } from '@/lib/ghi-data';
import { format, parse, isValid, addDays, startOfDay, differenceInDays } from 'date-fns';

// Constants from the provided design
const HOLIDAYS_REGISTRY: Record<string, any[]> = {
  IN: [
    { date: "2026-09-05", name: "Ganesh Chaturthi", type: "religious" },
    { date: "2026-10-02", name: "Gandhi Jayanti", type: "public" },
    { date: "2026-10-20", name: "Dussehra", type: "religious" },
    { date: "2026-10-29", name: "Diwali", type: "public" },
    { date: "2026-10-30", name: "Govardhan Puja", type: "cultural" },
    { date: "2026-10-31", name: "Bhai Dooj", type: "cultural" },
  ],
  JP: [
    { date: "2026-09-21", name: "Respect for the Aged Day", type: "public" },
    { date: "2026-09-23", name: "Autumn Equinox Day", type: "public" },
    { date: "2026-10-12", name: "Sports Day", type: "public" },
  ],
  US: [
    { date: "2026-09-07", name: "Labor Day", type: "public" },
    { date: "2026-10-12", name: "Columbus Day", type: "public" },
    { date: "2026-10-31", name: "Halloween", type: "cultural" },
  ],
  SG: [
    { date: "2026-09-05", name: "Hari Raya Haji (regional)", type: "cultural" },
    { date: "2026-10-08", name: "Deepavali", type: "public" },
  ],
  GB: [
    { date: "2026-10-31", name: "Halloween", type: "cultural" },
  ],
};

const COUNTRIES = [
  { code: 'IN', name: 'India' },
  { code: 'JP', name: 'Japan' },
  { code: 'US', name: 'United States' },
  { code: 'SG', name: 'Singapore' },
  { code: 'GB', name: 'United Kingdom' },
];

export default function GlobalHolidayIntelligencePage() {
  const [isClient, setIsClient] = useState(false);
  const [country, setCountry] = useState('IN');
  const [startDate, setStartDate] = useState('2026-09-04');
  const [endDate, setEndDate] = useState('2026-10-31');
  const [mode, setMode] = useState<'traveler' | 'corporate'>('traveler');
  const [activeNuance, setActiveNuance] = useState(0);

  useEffect(() => setIsClient(true), []);

  // Impact Checker Logic
  const impactData = useMemo(() => {
    const start = startOfDay(new Date(startDate));
    const end = startOfDay(new Date(endDate));
    const all = (HOLIDAYS_REGISTRY[country] || [])
      .map(h => ({ ...h, d: startOfDay(new Date(h.date)) }))
      .sort((a, b) => a.d.getTime() - b.d.getTime());
    
    const inRange = all.filter(h => h.d >= start && h.d <= end);
    const upcoming = all.find(h => h.d >= startOfDay(new Date('2026-09-04')));

    // Calculate longest consecutive closure run
    let longest = 0;
    let currentRun = 0;
    let prevD: Date | null = null;
    
    inRange.forEach(h => {
      if (prevD && differenceInDays(h.d, prevD) <= 2) {
        currentRun += 1;
      } else {
        currentRun = 1;
      }
      longest = Math.max(longest, currentRun);
      prevD = h.d;
    });

    const nextDays = upcoming ? differenceInDays(upcoming.d, startOfDay(new Date('2026-09-04'))) : '—';
    const publicCount = inRange.filter(h => h.type === 'public').length;

    return { inRange, longest, nextDays, publicCount };
  }, [country, startDate, endDate]);

  if (!isClient) return <div className="min-h-screen bg-[#0F1428]" />;

  return (
    <div className="min-h-screen bg-[#0F1428] text-[#F4F1E8] font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      
      {/* ---------- NAV ---------- */}
      <header className="sticky top-0 z-50 bg-[#0F1428]/86 backdrop-blur-md border-b border-[#F4F1E8]/10">
        <nav className="max-w-[1180px] mx-auto px-6 md:px-8 flex items-center justify-between h-[76px]">
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-2xl font-semibold tracking-tight">Utsavs</span>
            <span className="font-mono text-[10px] text-[#E8A33D] tracking-[0.14em] font-medium">GLOBAL CALENDAR INTELLIGENCE</span>
          </div>
          <div className="hidden md:flex gap-9 text-[14.5px] text-[#9AA1C0]">
            <Link href="#explore" className="hover:text-white transition-colors">Explore</Link>
            <Link href="#calendar" className="hover:text-white transition-colors">Calendar</Link>
            <Link href="#world" className="hover:text-white transition-colors">World</Link>
            <Link href="#intelligence" className="hover:text-white transition-colors">Intelligence</Link>
            <Link href="#api" className="hover:text-white transition-colors">API</Link>
          </div>
          <Link href="#api" className="text-sm font-medium bg-[#F0C888] text-[#0F1428] px-5 py-2.5 rounded-full hover:bg-[#E8A33D] transition-colors">
            Join the API preview
          </Link>
        </nav>
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section className="py-11 md:py-14" id="explore">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            
            {/* Left: Headline & Search */}
            <div className="space-y-6">
              <div className="font-mono text-[12.5px] text-[#4FD1C5] tracking-wide flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] shadow-[0_0_8px_#4FD1C5]" />
                TODAY · {format(new Date(), 'dd MMM yyyy').toUpperCase()}
              </div>
              <h1 className="font-headline font-medium text-4xl md:text-5xl leading-[1.08] tracking-tight max-w-[15ch]">
                Know before you fly. Know before you schedule.
              </h1>
              <p className="text-lg text-[#9AA1C0] max-w-[46ch]">
                Check any country's holidays against your actual dates — so travel agencies, HR teams and travelers stop finding out about a closure the hard way.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center bg-[#171D3A] border border-[#F4F1E8]/18 rounded-[14px] p-1.5 pl-5 max-w-[480px] focus-within:border-[#E8A33D] transition-colors">
                  <input 
                    type="text" 
                    placeholder="Try “Diwali 2026” or “holidays in Japan, October”" 
                    className="flex-1 bg-transparent border-none text-[#F4F1E8] font-sans text-[15px] py-3 focus:outline-none placeholder:text-[#6E7495]"
                  />
                  <button className="bg-[#E8A33D] text-[#0F1428] font-semibold text-sm px-5 py-2.5 rounded-[9px] hover:bg-[#F0C888] transition-colors">
                    Search
                  </button>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Diwali 2026', 'Long weekends · India', 'Japan, October'].map(hint => (
                    <span key={hint} className="text-[12.5px] text-[#6E7495] font-mono border border-[#F4F1E8]/10 px-2.5 py-1 rounded-full">{hint}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Checker Widget */}
            <div className="bg-[#171D3A] border border-[#F4F1E8]/18 rounded-[18px] p-7 md:p-8 space-y-5">
              <div className="flex justify-between items-center">
                <h3 className="font-headline text-lg font-medium text-white">Trip & business impact checker</h3>
                <div className="flex bg-[#1E2650] p-1 rounded-full text-xs font-medium">
                  <button 
                    onClick={() => setMode('traveler')}
                    className={cn("px-3 py-1.5 rounded-full transition-all", mode === 'traveler' ? "bg-[#E8A33D] text-[#0F1428]" : "text-[#9AA1C0]")}
                  >Traveler</button>
                  <button 
                    onClick={() => setMode('corporate')}
                    className={cn("px-3 py-1.5 rounded-full transition-all", mode === 'corporate' ? "bg-[#E8A33D] text-[#0F1428]" : "text-[#9AA1C0]")}
                  >Corporate</button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[#6E7495] font-mono uppercase tracking-wider">Destination</label>
                  <select 
                    value={country} 
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-[#1E2650] border border-[#F4F1E8]/18 text-[#F4F1E8] rounded-[9px] px-3 py-2.5 text-[13.5px] focus:outline-none focus:border-[#E8A33D]"
                  >
                    {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] text-[#6E7495] font-mono uppercase tracking-wider">From</label>
                  <input 
                    type="date" 
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-[#1E2650] border border-[#F4F1E8]/18 text-[#F4F1E8] rounded-[9px] px-3 py-2.5 text-[13.5px] focus:outline-none focus:border-[#E8A33D]" 
                  />
                </div>
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <label className="text-[11px] text-[#6E7495] font-mono uppercase tracking-wider">To</label>
                  <input 
                    type="date" 
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-[#1E2650] border border-[#F4F1E8]/18 text-[#F4F1E8] rounded-[9px] px-3 py-2.5 text-[13.5px] focus:outline-none focus:border-[#E8A33D]" 
                  />
                </div>
              </div>

              <div className="flex gap-2 flex-wrap">
                {[7, 30, 90].map(days => (
                  <button 
                    key={days}
                    onClick={() => {
                      const start = new Date('2026-09-04');
                      setStartDate('2026-09-04');
                      setEndDate(format(addDays(start, days), 'yyyy-MM-dd'));
                    }}
                    className={cn(
                      "text-[12px] px-3 py-1.5 rounded-full border border-[#F4F1E8]/18 transition-colors",
                      differenceInDays(new Date(endDate), new Date(startDate)) === days ? "border-[#E8A33D] text-[#F0C888]" : "text-[#9AA1C0]"
                    )}
                  >Next {days} days</button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-[#1E2650] rounded-xl">
                <div>
                  <b className="font-headline text-2xl font-semibold text-[#F0C888] block">{impactData.inRange.length}</b>
                  <span className="text-[11.5px] text-[#6E7495] leading-tight block mt-0.5">days that affect plans</span>
                </div>
                <div>
                  <b className="font-headline text-2xl font-semibold text-[#F0C888] block">{impactData.longest}</b>
                  <span className="text-[11.5px] text-[#6E7495] leading-tight block mt-0.5">{impactData.longest === 1 ? 'day longest closure' : 'day closure streak'}</span>
                </div>
                <div>
                  <b className="font-headline text-2xl font-semibold text-[#F0C888] block">{impactData.nextDays}</b>
                  <span className="text-[11.5px] text-[#6E7495] leading-tight block mt-0.5">days to next one</span>
                </div>
              </div>

              <div className="max-h-[180px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {impactData.inRange.length === 0 ? (
                  <div className="text-sm text-[#6E7495] text-center py-6">No flagged holidays in this window.</div>
                ) : (
                  impactData.inRange.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 bg-[#1E2650] rounded-[9px] text-[13px]">
                      <span className="font-mono text-[11.5px] text-[#9AA1C0] min-w-[52px]">{format(h.d, 'dd MMM')}</span>
                      <span className="flex-1 text-[#F4F1E8] font-medium">{h.name}</span>
                      <span className={cn(
                        "text-[10.5px] font-mono px-2 py-0.5 rounded-full uppercase",
                        h.type === 'public' ? "bg-[#E8A33D]/16 text-[#F0C888]" : "bg-[#4FD1C5]/14 text-[#4FD1C5]"
                      )}>{h.type}</span>
                    </div>
                  ))
                )}
              </div>

              {impactData.publicCount > 0 && (
                <div className="p-3.5 bg-[#E8A33D]/10 border border-[#E8A33D]/25 rounded-xl text-[12.5px] leading-relaxed">
                  {mode === 'corporate' ? (
                    <><b className="text-[#F0C888]">Plan around it.</b> {impactData.publicCount} public holiday{impactData.publicCount > 1 ? 's' : ''} fall inside this window — offices and banks in {COUNTRIES.find(c => c.code === country)?.name} will likely be closed. Avoid scheduling client meetings.</>
                  ) : (
                    <><b className="text-[#F0C888]">Good to know.</b> {impactData.publicCount} public holiday{impactData.publicCount > 1 ? 's' : ''} during your trip — expect busier sights, higher fares, and some shop closures.</>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ---------- STORY OF TODAY ---------- */}
        <section className="bg-[#171D3A]/50 border-y border-[#F4F1E8]/10 py-20">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-1 hidden md:block">
              <div className="w-px h-32 bg-[#F4F1E8]/20 mx-auto" />
            </div>
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-4 text-[#E8A33D]">
                <BookOpen className="w-5 h-5" />
                <span className="font-mono text-[10px] uppercase tracking-[0.5em]">The Story of Today</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-medium tracking-tight italic">{TODAY_STORY.headline}</h2>
              <p className="text-xl md:text-2xl text-[#9AA1C0] leading-relaxed font-display italic">
                "{TODAY_STORY.content}"
              </p>
            </div>
            <div className="md:col-span-4 bg-[#0F1428] border border-[#F4F1E8]/10 p-8 rounded-sm space-y-8">
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#E8A33D]">Live Stat</p>
                <p className="text-4xl font-bold font-headline">{TODAY_STORY.stat}</p>
              </div>
              <div className="space-y-1 pt-4 border-t border-[#F4F1E8]/10">
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#9AA1C0]">Context</p>
                <p className="text-xs font-bold uppercase tracking-widest">{TODAY_STORY.context}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- WORLD PULSE ---------- */}
        <section className="bg-[#171D3A] border-b border-[#F4F1E8]/10 py-6 overflow-hidden" id="world">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8 flex items-center gap-12">
            <div className="flex gap-9 shrink-0 pr-9 border-r border-[#F4F1E8]/18">
              <div className="text-left">
                <b className="font-headline text-2xl font-semibold block">12</b>
                <span className="text-[11px] text-[#6E7495] uppercase tracking-wider">countries</span>
              </div>
              <div className="text-left">
                <b className="font-headline text-2xl font-semibold block">4</b>
                <span className="text-[11px] text-[#6E7495] uppercase tracking-wider">holidays</span>
              </div>
            </div>
            <div className="relative flex-1 overflow-hidden whitespace-nowrap mask-marquee">
              <div className="inline-flex gap-4 animate-marquee">
                {[
                  { c: 'India', e: 'Janmashtami, Dahi Handi' },
                  { c: 'Japan', e: 'no observance today' },
                  { c: 'USA', e: 'Labor Day season' },
                  { c: 'Singapore', e: 'Hungry Ghost Month' },
                  { c: 'India', e: 'Janmashtami, Dahi Handi' },
                  { c: 'Japan', e: 'no observance today' },
                ].map((item, i) => (
                  <span key={i} className="text-[13.5px] text-[#9AA1C0] border border-[#F4F1E8]/10 px-3.5 py-1.5 rounded-full">
                    <b className="text-[#F4F1E8] font-medium">{item.c}</b> — {item.e}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { c: 'India', e: 'Janmashtami, Dahi Handi' },
                  { c: 'Japan', e: 'no observance today' },
                  { c: 'USA', e: 'Labor Day season' },
                  { c: 'Singapore', e: 'Hungry Ghost Month' },
                  { c: 'India', e: 'Janmashtami, Dahi Handi' },
                  { c: 'Japan', e: 'no observance today' },
                ].map((item, i) => (
                  <span key={`dup-${i}`} className="text-[13.5px] text-[#9AA1C0] border border-[#F4F1E8]/10 px-3.5 py-1.5 rounded-full">
                    <b className="text-[#F4F1E8] font-medium">{item.c}</b> — {item.e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- NUANCE CASE STUDY ---------- */}
        <section className="py-24">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10 text-left">
                  <div className="space-y-4">
                    <div className="font-mono text-[11px] text-[#E8A33D] uppercase tracking-[0.5em]">Storytelling</div>
                    <h2 className="font-headline text-4xl md:text-6xl font-medium tracking-tight">One Day. <br />Many Stories.</h2>
                    <p className="text-lg text-[#9AA1C0] leading-relaxed max-w-lg">
                      The same festival can mean something entirely different as you cross a border. We capture the nuance, not just the date.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {DIWALI_NUANCE.map((item, i) => (
                      <button 
                        key={item.country}
                        onClick={() => setActiveNuance(i)}
                        className={cn(
                          "px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm border transition-all",
                          activeNuance === i 
                            ? "bg-[#F4F1E8] text-[#0F1428] border-white shadow-xl scale-105" 
                            : "bg-transparent text-[#F4F1E8]/30 border-white/10 hover:border-white/30"
                        )}
                      >
                        {item.country}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full">
                  <div className="bg-[#171D3A] border border-[#F4F1E8]/18 p-10 md:p-14 relative rounded-sm shadow-2xl font-sans text-left overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-[9px] font-mono font-bold uppercase tracking-widest text-[#F4F1E8]/10">U_REC_0921</div>
                    
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeNuance}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                      >
                        <div>
                          <h3 className="text-4xl md:text-5xl font-bold font-headline tracking-tight leading-none mb-2">
                            {DIWALI_NUANCE[activeNuance].name}
                          </h3>
                          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#9AA1C0]">{DIWALI_NUANCE[activeNuance].status} · {DIWALI_NUANCE[activeNuance].country}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-y border-[#F4F1E8]/10 py-8">
                          <div className="space-y-1">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-[#9AA1C0]">Observed Date</p>
                            <p className="font-mono text-lg font-bold uppercase text-[#E8A33D]">{DIWALI_NUANCE[activeNuance].date}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-[#9AA1C0]">Operational Impact</p>
                            <p className="font-mono text-xs font-bold uppercase">{DIWALI_NUANCE[activeNuance].impact}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8A33D]">Local Lens</p>
                          <p className="text-xl leading-relaxed text-[#F4F1E8] font-display italic pr-4">
                            "{DIWALI_NUANCE[activeNuance].nuance}"
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* ---------- EXPLORER (October 2026 Example) ---------- */}
        <section id="calendar" className="py-24 border-t border-[#F4F1E8]/10">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8">
            <div className="section-head mb-14 text-left">
              <div className="font-mono text-[12px] text-[#4FD1C5] uppercase tracking-widest mb-3">Take a closer look</div>
              <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight mb-4">See what a month actually looks like.</h2>
              <p className="text-[#9AA1C0] text-lg max-w-[52ch]">We flag the bridges for you — that one day off that quietly turns a weekend into a four-day break.</p>
            </div>
            <div className="grid md:grid-cols-[1.1fr_0.9fr] border border-[#F4F1E8]/18 rounded-[18px] overflow-hidden bg-[#171D3A]">
              <div className="p-9 md:p-12">
                <div className="flex justify-between items-baseline mb-8">
                  <h3 className="font-headline text-xl font-medium">October 2026 · India</h3>
                  <span className="font-mono text-[11px] text-[#6E7495] uppercase">national view</span>
                </div>
                <div className="grid grid-cols-7 gap-1.5 mb-4">
                  {['M','T','W','T','F','S','S'].map(d => (
                    <div key={d} className="text-[11px] text-[#6E7495] text-center font-mono pb-2">{d}</div>
                  ))}
                  {[28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1].map((d, i) => (
                    <div key={i} className={cn(
                      "aspect-square flex items-center justify-center text-sm rounded-lg transition-colors",
                      i < 3 ? "text-[#6E7495]/40" : "text-[#9AA1C0]",
                      [31, 32, 33, 34].includes(i) ? "bg-[#E8A33D]/16 text-[#F0C888] font-semibold" : "hover:bg-white/5"
                    )}>
                      {d}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#4FD1C5]/10 border border-[#4FD1C5]/25 rounded-xl text-[13.5px] text-white">
                  <b className="text-[#4FD1C5]">Long weekend flagged.</b> Diwali on the 29th bridges into a 4-day break across most states.
                </div>
              </div>
              <div className="bg-[#1E2650] p-9 md:p-12 flex flex-col justify-center gap-8 border-l border-[#F4F1E8]/18">
                <div className="flex justify-between items-baseline pb-5 border-b border-[#F4F1E8]/10">
                  <b className="font-headline text-3xl font-semibold text-[#F0C888]">21</b>
                  <span className="text-[13px] text-[#9AA1C0] uppercase tracking-wider">working days</span>
                </div>
                <div className="flex justify-between items-baseline pb-5 border-b border-[#F4F1E8]/10">
                  <b className="font-headline text-3xl font-semibold text-[#F0C888]">2</b>
                  <span className="text-[13px] text-[#9AA1C0] uppercase tracking-wider">public holidays</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <b className="font-headline text-3xl font-semibold text-[#F0C888]">1</b>
                  <span className="text-[13px] text-[#9AA1C0] uppercase tracking-wider">bridge opportunity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- TRUST PILLARS ---------- */}
        <section id="intelligence" className="py-24 bg-[#171D3A]">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8">
            <div className="section-head mb-14 text-left">
              <div className="font-mono text-[12px] text-[#E8A33D] uppercase tracking-widest mb-3">Verified Infrastructure</div>
              <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight mb-4">Trust is part of the data.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-[#F4F1E8]/18 rounded-[16px] overflow-hidden bg-[#F4F1E8]/10">
              {[
                { m: 'SRC', h: 'Source-aware', p: 'Access the exact authoritative origins of every date and regional rule.' },
                { m: 'VER', h: 'Verification-aware', p: 'Differentiate between confirmed, declared, and estimated observations.' },
                { m: 'REG', h: 'Region-aware', p: 'Navigate the complex jurisdictional differences between states and cities.' },
                { m: 'DAT', h: 'Date-aware', p: 'Sophisticated handling of lunar, lunisolar, and declared cycles.' }
              ].map(t => (
                <div key={t.h} className="bg-[#171D3A] p-8 border-[0.5px] border-[#F4F1E8]/10 text-left">
                  <div className="w-9 h-9 border border-[#4FD1C5]/40 rounded-lg flex items-center justify-center font-mono text-[13px] text-[#4FD1C5] mb-6">{t.m}</div>
                  <h4 className="font-semibold text-[15.5px] mb-2">{t.h}</h4>
                  <p className="text-[13.5px] text-[#9AA1C0] leading-relaxed">{t.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- API PREVIEW ---------- */}
        <section id="api" className="py-24 border-t border-[#F4F1E8]/10">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid md:grid-cols-[0.95fr_1.05fr] border border-[#F4F1E8]/18 rounded-[18px] overflow-hidden bg-[#171D3A]">
            <div className="p-11 flex flex-col justify-center text-left">
              <h3 className="font-headline text-3xl font-medium mb-4">Built for the tools people actually rely on.</h3>
              <p className="text-[#9AA1C0] text-[15px] mb-8 max-w-[38ch]">Payroll runs, travel planners, and scheduling tools all ask the same question: is this day different anywhere that matters to me?</p>
              <button className="self-start border border-[#F4F1E8]/18 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:border-[#E8A33D] hover:bg-[#E8A33D]/10 transition-all">Read the API docs</button>
            </div>
            <div className="bg-[#0B0F22] p-11 font-mono text-[13.5px] leading-relaxed text-[#C7CDEB] overflow-x-auto text-left">
              <span className="text-[#4FD1C5]">GET</span> /v1/holidays?country=IN&year=2027<br /><br />
              {'{'}<br />
              &nbsp;&nbsp;<span className="text-[#F0C888]">"name"</span>: <span className="text-[#A9D18E]">"Diwali"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#F0C888]">"date"</span>: <span className="text-[#A9D18E]">"2027-10-29"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#F0C888]">"country"</span>: <span className="text-[#A9D18E]">"IN"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#F0C888]">"scope"</span>: <span className="text-[#A9D18E]">"national"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#F0C888]">"categories"</span>: [<span className="text-[#A9D18E]">"religious"</span>, <span className="text-[#A9D18E]">"cultural"</span>],<br />
              &nbsp;&nbsp;<span className="text-[#F0C888]">"dateStatus"</span>: <span className="text-[#E8A33D]">"CONFIRMED"</span>,<br />
              &nbsp;&nbsp;<span className="text-[#F0C888]">"verificationStatus"</span>: <span className="text-[#E8A33D]">"VERIFIED"</span><br />
              {'}'}
            </div>
          </div>
        </section>

        {/* ---------- CLOSING FLOW ---------- */}
        <section className="py-24 text-center border-t border-[#F4F1E8]/10 bg-[#0F1428]">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8">
            <h2 className="font-headline font-medium italic text-2xl md:text-3xl leading-relaxed text-white max-w-[26ch] mx-auto mb-12">
              We started out just helping people find out what's being celebrated today. Turns out a lot of systems needed to know that too.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="font-mono text-[13px] text-[#0F1428] bg-[#F0C888] px-5 py-2.5 rounded-full">Discovery</span>
              <span className="text-[#9AA1C0] text-sm">—</span>
              <span className="font-mono text-[13px] text-[#9AA1C0] border border-[#F4F1E8]/18 px-5 py-2.5 rounded-full">Global intelligence</span>
              <span className="text-[#9AA1C0] text-sm">—</span>
              <span className="font-mono text-[13px] text-[#9AA1C0] border border-[#F4F1E8]/18 px-5 py-2.5 rounded-full">Intelligence API</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-9 border-t border-[#F4F1E8]/10">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 flex flex-wrap justify-between items-center gap-4 text-[13px] text-[#6E7495]">
          <div>Utsavs · global calendar intelligence · prototype, 2026</div>
          <div className="flex gap-6">
            <Link href="/" className="text-[#9AA1C0] hover:text-white transition-colors">Explore Utsavs.com</Link>
            <Link href="/calendar" className="text-[#9AA1C0] hover:text-white transition-colors">Full calendar</Link>
            <Link href="#api" className="text-[#9AA1C0] hover:text-white transition-colors">Join API preview</Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .mask-marquee {
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .font-headline { font-family: 'Fraunces', serif; }
        .font-display { font-family: 'Fraunces', serif; font-style: italic; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(244,241,232,0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
}
