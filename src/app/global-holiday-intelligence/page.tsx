
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, ArrowRight, MapPin, Calendar, 
  Info, Globe, ShieldCheck, Clock,
  ChevronRight, ArrowDownRight, Tag, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { allEvents, internationalEvents } from '@/lib/festival-data';
import { parse, isFuture, isToday, startOfDay, format, isValid } from 'date-fns';

/**
 * DATA LOGIC
 * Unified dataset driven by real festival-data.ts
 */
const UNIFIED_DATA = [...allEvents, ...internationalEvents];

function getUpcomingEvents(limit = 8) {
  const now = startOfDay(new Date());
  return UNIFIED_DATA
    .map(event => ({
      ...event,
      parsedDate: parse(event.date.split(' - ')[0], 'MMM dd, yyyy', new Date())
    }))
    .filter(event => isValid(event.parsedDate) && (event.parsedDate >= now))
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime())
    .slice(0, limit);
}

const DIWALI_CASE_STUDY = [
  { country: "India", code: "IN", date: "Oct 29, 2026", status: "Public Holiday", nuance: "Centered on the North; focuses on Lord Rama's return to Ayodhya." },
  { country: "Nepal", code: "NP", date: "Oct 29, 2026", status: "National Holiday", nuance: "Known as Tihar; includes unique days for dogs, crows, and cows." },
  { country: "Singapore", code: "SG", date: "Oct 29, 2026", status: "Statutory Holiday", nuance: "A single day celebration; major activity centered in Little India." },
];

/**
 * COMPONENTS
 */

function GHIHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 md:px-12 bg-ivory/90 backdrop-blur-xl border-b border-warm-border/40">
      <Link href="/" className="flex flex-col leading-none group">
        <span className="font-headline text-2xl font-bold tracking-tight text-ink">UTSAVS</span>
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-coral -mt-0.5">INTELLIGENCE</span>
      </Link>
      <div className="flex items-center gap-8">
        <nav className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/calendar" className="hover:text-ink transition-colors">Calendar</Link>
          <Link href="/international-festivals" className="hover:text-ink transition-colors">International</Link>
          <Link href="/planner" className="hover:text-ink transition-colors">Planner</Link>
        </nav>
        <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-coral border border-coral/20 px-4 py-2 rounded-sm hover:bg-coral hover:text-white transition-all">
          ← BACK TO MAIN
        </Link>
      </div>
    </header>
  );
}

export default function GlobalHolidayIntelligencePage() {
  const [isClient, setIsClient] = useState(false);
  const [activeNuance, setActiveNuance] = useState(0);
  
  useEffect(() => setIsClient(true), []);

  const upcoming = useMemo(() => getUpcomingEvents(12), []);
  const heroEvent = upcoming[0];
  const todayDate = isClient ? format(new Date(), 'EEEE, MMMM dd, yyyy') : '';

  if (!isClient) return <div className="min-h-screen bg-ivory" />;

  return (
    <div className="min-h-screen bg-ivory text-ink selection:bg-coral/20 font-sans antialiased pb-24">
      <GHIHeader />
      
      {/* 01. THE MASTER RECORD HERO (One-Glance Authority) */}
      <section className="pt-24 px-4 md:px-12 max-w-[1600px] mx-auto">
        <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/8] overflow-hidden rounded-sm group shadow-2xl border border-warm-border/50">
          <Image 
            src={heroEvent?.image || "https://i.postimg.cc/SNGxJ8VJ/ganesh-chaturthi-festival.jpg"} 
            alt={heroEvent?.name}
            fill
            className="object-cover transition-transform duration-[20s] scale-105 group-hover:scale-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
          
          {/* Hero Overlay: Technical Data */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-coral text-white text-[9px] font-bold uppercase tracking-[0.3em] rounded-full inline-flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Next in Focus
                  </div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">REF: {heroEvent?.slug.split('-')[0].toUpperCase()}</span>
                </div>
                <h1 className="font-headline text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85]">
                  {heroEvent?.name}
                </h1>
                <p className="text-white/80 text-lg md:text-xl font-display italic serif max-w-lg">
                  "{heroEvent?.description}"
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-10 rounded-sm min-w-[320px] space-y-6">
                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-coral">Location & Scope</p>
                  <p className="text-xl font-bold text-white tracking-tight">{heroEvent?.country || heroEvent?.region} <span className="text-white/40 font-normal ml-2">· {heroEvent?.region === 'Nationwide' ? 'National' : 'Regional'}</span></p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Observation</p>
                    <p className="font-mono text-xs font-bold text-white uppercase">{heroEvent?.date}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Status</p>
                    <div className="flex items-center justify-end gap-2">
                      <ShieldCheck className="w-3 h-3 text-green-400" />
                      <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Confirmed</p>
                    </div>
                  </div>
                </div>
                <Link href={heroEvent?.link || "/festivals"}>
                   <button className="w-full h-12 bg-white text-ink text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-coral hover:text-white transition-all rounded-sm">
                      Access Intelligence Record
                   </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. UNIVERSAL COMMAND BAR (Search) */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/30 group-focus-within:text-coral transition-colors" />
          <input 
            placeholder="Search a country, festival, date or ask 'what is today?'"
            className="w-full h-18 bg-white border border-warm-border text-xl font-display px-16 shadow-sm focus:outline-none focus:border-ink rounded-sm transition-all py-4"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 px-2 py-1 bg-ivory border border-warm-border rounded-sm text-[9px] font-mono text-muted-foreground">
            ⌘ K
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
           {['Public Holidays', 'October 2026', 'Long Weekends', 'Regional Nuance'].map(tag => (
             <button key={tag} className="hover:text-ink transition-colors">{tag}</button>
           ))}
        </div>
      </section>

      {/* 03. THE INTELLIGENCE STREAM (Tight Horizontal Feed) */}
      <section className="py-24 px-6 md:px-12 border-t border-warm-border/40">
        <div className="max-w-[1600px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">Stream v6.0</p>
              <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">The Temporal Flow.</h2>
              <p className="text-muted-foreground text-lg font-display italic">"High-density mapping of global celebrations over the next 90 days."</p>
            </div>
            <Link href="/calendar" className="text-[10px] font-bold uppercase tracking-widest text-ink flex items-center gap-2 group border-b border-ink/10 pb-2">
              EXPLORE FULL 2026/27 CALENDAR <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcoming.slice(1, 9).map((event, i) => (
              <Link key={event.slug + i} href={event.link || "/festivals"} className="bg-white border border-warm-border p-8 rounded-sm hover:border-ink transition-all group relative">
                 <div className="flex justify-between items-start mb-12">
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono font-bold text-coral uppercase tracking-widest">{event.country || event.region}</p>
                      <p className="text-[8px] font-mono text-muted-foreground">PRECISION_ID: {event.slug.split('-')[0].toUpperCase()}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest border border-warm-border text-muted-foreground">{event.type}</span>
                 </div>
                 <div className="space-y-2 mb-8">
                    <h4 className="text-2xl font-bold tracking-tight font-headline italic leading-tight group-hover:text-coral transition-colors">{event.name}</h4>
                    <p className="font-mono text-[10px] font-bold text-ink uppercase tracking-widest">{event.date.split(',')[0]}</p>
                 </div>
                 <div className="pt-6 border-t border-warm-border/30">
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 font-display italic">
                      "{event.description}"
                    </p>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04. CASE STUDY: ONE FESTIVAL, MANY WORLDS (Interactive) */}
      <section className="py-32 px-6 md:px-12 bg-ink text-ivory">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">Cross-Border Nuance</p>
              <h2 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9]">One Day.<br/>Many Worlds.</h2>
              <p className="text-xl text-ivory/60 font-display italic max-w-lg leading-relaxed">
                "Utsavs tracks how one festival morphs as it crosses borders. A date is just a coordinate; the nuance is the data."
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {DIWALI_CASE_STUDY.map((item, i) => (
                <button 
                  key={item.country}
                  onClick={() => setActiveNuance(i)}
                  className={cn(
                    "flex items-center justify-between px-8 py-6 rounded-sm border transition-all text-left group",
                    activeNuance === i 
                      ? "bg-white text-ink border-white" 
                      : "bg-transparent text-ivory/40 border-white/10 hover:border-white/30"
                  )}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-sm font-bold opacity-30">{item.code}</span>
                    <span className="text-xl font-bold font-display uppercase tracking-tight">{item.country}</span>
                  </div>
                  <ChevronRight className={cn("w-5 h-5 transition-transform", activeNuance === i ? "translate-x-1 text-coral" : "opacity-0")} />
                </button>
              ))}
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/5] bg-white text-ink p-12 md:p-20 shadow-2xl rounded-sm flex flex-col justify-between overflow-hidden">
             <div className="absolute top-0 right-0 p-12">
                <Globe className="w-12 h-12 text-coral/5" />
             </div>
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeNuance}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 className="space-y-12"
               >
                 <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-coral">Observance Intelligence</p>
                    <h3 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-[0.95]">
                      {DIWALI_CASE_STUDY[activeNuance].country === 'Nepal' ? 'Tihar' : 'Diwali'}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{DIWALI_CASE_STUDY[activeNuance].status}</p>
                 </div>

                 <div className="grid grid-cols-2 gap-12 border-y border-warm-border/40 py-10">
                    <div className="space-y-1">
                       <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Observed Date</p>
                       <p className="font-mono text-lg font-bold">29 OCT 2026</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Data Type</p>
                       <p className="font-mono text-[10px] font-bold uppercase">Lunisolar Cycle</p>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">The Local Lens</p>
                    <p className="text-lg leading-relaxed text-ink font-display italic pr-4">
                      "{DIWALI_CASE_STUDY[activeNuance].nuance}"
                    </p>
                 </div>
               </motion.div>
             </AnimatePresence>

             <div className="text-[9px] font-mono font-bold text-muted-foreground/30 uppercase tracking-[0.4em]">
                RECORD: UTSAVS_NUANCE_V1.2
             </div>
          </div>
        </div>
      </section>

      {/* 05. BRIDGE TO CORE */}
      <section className="py-32 px-6 md:px-12 text-center overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 blur-[120px] rounded-full" />
         <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <h2 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9]">Time is a <br />human resource.</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-display italic max-w-2xl mx-auto leading-relaxed">
              "We're building the unified temporal layer for global culture. From ancient rituals to national bank holidays, we map the world's pulse."
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
               <Link href="/">
                 <button className="h-16 px-12 bg-ink text-ivory text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:bg-coral transition-all shadow-xl">EXPLORE UTSAVS.COM</button>
               </Link>
               <Link href="/calendar">
                 <button className="h-16 px-12 border-2 border-ink text-ink text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:bg-ivory transition-all">SEE THE FULL CALENDAR</button>
               </Link>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-12 text-center border-t border-warm-border/40">
         <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-muted-foreground/40">
           © 2026 UTSAVS · GLOBAL HOLIDAY INTELLIGENCE · PROTOTYPE_V6 · <Link href="/" className="hover:text-coral transition-colors underline underline-offset-4 decoration-coral/30">UTSAVS.COM</Link>
         </p>
      </footer>
    </div>
  );
}
