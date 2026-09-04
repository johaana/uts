'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, ArrowRight, MapPin, Calendar, 
  Info, Globe, InfoIcon, ShieldCheck, 
  Layers, Filter, ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { allEvents, internationalEvents } from '@/lib/festival-data';
import { parse, isFuture, isToday, startOfDay, format, addDays, getYear, isValid } from 'date-fns';

/**
 * DATA LOGIC
 * Correctly unified and filtered dataset.
 */
const UNIFIED_DATA = [...allEvents, ...internationalEvents];

function getNextMajorEvent() {
  const now = startOfDay(new Date());
  const sorted = UNIFIED_DATA
    .map(event => ({
      ...event,
      parsedDate: parse(event.date.split(' - ')[0], 'MMM dd, yyyy', new Date())
    }))
    .filter(event => isValid(event.parsedDate) && (isFuture(event.parsedDate) || isToday(event.parsedDate)))
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
  
  return sorted[0];
}

function getUpcomingStream(limit = 8) {
  const now = startOfDay(new Date());
  return UNIFIED_DATA
    .map(event => ({
      ...event,
      parsedDate: parse(event.date.split(' - ')[0], 'MMM dd, yyyy', new Date())
    }))
    .filter(event => isValid(event.parsedDate) && (isFuture(event.parsedDate) || isToday(event.parsedDate)))
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime())
    .slice(0, limit);
}

/**
 * COMPONENTS
 */

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 md:px-10 bg-ivory/95 backdrop-blur-md border-b border-warm-border/40">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="flex flex-col">
          <span className="font-headline text-2xl font-bold tracking-tight text-ink">UTSAVS</span>
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-coral -mt-1">INTELLIGENCE</span>
        </div>
      </Link>
      
      <div className="flex items-center gap-8">
        <nav className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/calendar" className="hover:text-ink transition-colors">Calendar</Link>
          <Link href="/international-festivals" className="hover:text-ink transition-colors">International</Link>
        </nav>
        <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-coral hover:text-ink transition-all">
          ← BACK TO MAIN
        </Link>
      </div>
    </header>
  );
}

export default function GlobalHolidayIntelligencePage() {
  const [isClient, setIsClient] = useState(false);
  const [activeNuance, setActiveNuance] = useState('India');
  
  useEffect(() => setIsClient(true), []);

  const heroEvent = useMemo(() => getNextMajorEvent(), []);
  const upcomingStream = useMemo(() => getUpcomingStream(10), []);

  if (!isClient) return <div className="min-h-screen bg-ivory" />;

  return (
    <div className="min-h-screen bg-ivory text-ink selection:bg-coral/20 font-sans antialiased pb-24">
      <Header />
      
      {/* 01. THE "NEXT IN FOCUS" HERO */}
      <section className="pt-24 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div className="bg-white border border-warm-border rounded-sm overflow-hidden shadow-[0_32px_64px_-16px_rgba(23,21,26,0.08)]">
          <div className="grid lg:grid-cols-12">
            
            {/* LEFT: THE VISUAL AUTHORITY */}
            <div className="lg:col-span-7 relative h-[400px] lg:h-[650px] overflow-hidden group">
               <Image 
                src={heroEvent?.image || "https://i.postimg.cc/SNGxJ8VJ/ganesh-chaturthi-festival.jpg"} 
                alt={heroEvent?.name || "Featured Event"}
                fill
                className="object-cover transition-transform duration-[15s] group-hover:scale-110"
                priority
               />
               <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />
               <div className="absolute top-8 left-8 flex flex-col gap-2">
                  <div className="px-3 py-1 bg-coral text-white text-[9px] font-bold uppercase tracking-[0.3em] rounded-full inline-flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Next in Focus
                  </div>
                  <p className="text-[10px] font-mono text-white/70 uppercase tracking-widest">REF_REC_{heroEvent?.slug.split('-')[0].toUpperCase()}</p>
               </div>
               
               <div className="absolute bottom-8 left-8 max-w-md space-y-4">
                  <h1 className="font-headline text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter">
                    {heroEvent?.name}
                  </h1>
                  <p className="text-white/90 text-lg font-display italic serif">
                    "{heroEvent?.description}"
                  </p>
               </div>
            </div>

            {/* RIGHT: THE INTELLIGENCE RECORD */}
            <div className="lg:col-span-5 p-8 md:p-16 flex flex-col justify-center space-y-12">
               <div className="space-y-10">
                  <div className="flex justify-between items-start border-b border-warm-border/40 pb-8">
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-coral">Location & Scope</p>
                       <p className="text-2xl font-bold tracking-tight">
                        {heroEvent?.country || heroEvent?.region}
                        <span className="text-muted-foreground/40 font-normal ml-3">· {heroEvent?.country ? 'National' : 'Regional'}</span>
                       </p>
                    </div>
                    <div className="text-right space-y-1">
                       <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Date Intelligence</p>
                       <p className="font-mono text-lg font-bold">{heroEvent?.date}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Date Model</p>
                       <p className="text-sm font-bold uppercase tracking-widest">{heroEvent?.type === 'Holiday' ? 'Fixed/Government' : 'Lunisolar'}</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Status</p>
                       <div className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                          <p className="text-sm font-bold uppercase tracking-widest text-green-700">Confirmed</p>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Operational Nuance</p>
                    <div className="p-5 bg-ivory border border-warm-border/60 rounded-sm">
                       <p className="text-sm leading-relaxed italic font-display">
                        {heroEvent?.country === 'India' 
                          ? "Expect state-specific variations in public office closures. Commercial activity remains active in most tier-1 cities."
                          : "National bank and administrative closure confirmed. Logistical density expected to increase 3 days prior."}
                       </p>
                    </div>
                  </div>
               </div>

               <div className="pt-8 border-t border-warm-border/40 flex items-center justify-between">
                  <div className="flex gap-3">
                    <button className="h-10 px-6 bg-ink text-ivory text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-coral transition-all">
                      VIEW FULL RECORD
                    </button>
                    <button className="h-10 px-4 border border-warm-border text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm hover:border-ink transition-all">
                      SHARE DATA
                    </button>
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground/40">SOURCE: UTSAVS_CORE_V6</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. UNIVERSAL SEARCH (COMMAND BAR STYLE) */}
      <section className="py-16 px-6 md:px-10 max-w-4xl mx-auto">
        <div className="space-y-4 text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">Search the Graph</p>
          <h2 className="text-3xl font-headline font-bold">Ask anything about the world's calendar.</h2>
        </div>
        
        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/30 group-focus-within:text-coral transition-colors" />
          <input 
            placeholder="e.g., 'Diwali 2027', 'Singapore long weekends', 'Maharashtra holidays'..."
            className="w-full h-16 bg-white border border-warm-border text-lg font-display px-16 shadow-sm focus:outline-none focus:border-ink rounded-sm transition-all"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 px-2 py-1 bg-ivory border border-warm-border rounded-sm text-[9px] font-mono text-muted-foreground">
            ⌘ K
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
           <span>Suggested Lenses:</span>
           {['Public Holidays', 'Religious', 'Working Days', 'Long Weekends'].map(tag => (
             <button key={tag} className="hover:text-ink transition-colors underline underline-offset-8 decoration-warm-border hover:decoration-coral">{tag}</button>
           ))}
        </div>
      </section>

      {/* 03. THE INTELLIGENCE STREAM (UPCOMING EVENTS) */}
      <section className="py-24 px-6 md:px-10 bg-white border-y border-warm-border">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-coral">Temporal Stream</p>
              <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">The 90-Day Pulse.</h2>
              <p className="text-muted-foreground text-base font-display italic">"A high-density view of global transitions."</p>
            </div>
            <Link href="/calendar" className="text-[11px] font-bold uppercase tracking-widest text-ink flex items-center gap-2 group">
              EXPLORE FULL 2026/27 CALENDAR <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-border/40 border border-warm-border overflow-hidden rounded-sm">
            {upcomingStream.map((event, i) => (
              <div key={event.slug + i} className="bg-white p-8 space-y-8 hover:bg-ivory/50 transition-colors group relative">
                 <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="text-[9px] font-mono font-bold text-coral uppercase tracking-widest">{event.country || event.region}</p>
                      <p className="text-[8px] font-mono text-muted-foreground">REF: {event.slug.split('-')[0].toUpperCase()}</p>
                    </div>
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest border",
                      event.type === 'Holiday' ? 'border-blue-200 text-blue-600' : 'border-coral/20 text-coral'
                    )}>
                      {event.type}
                    </span>
                 </div>
                 
                 <div className="space-y-2">
                    <h4 className="text-2xl font-bold tracking-tight font-headline italic leading-tight group-hover:text-coral transition-colors">{event.name}</h4>
                    <p className="font-mono text-[10px] font-bold text-ink uppercase tracking-widest">{event.date.split(',')[0]}</p>
                 </div>

                 <div className="pt-6 border-t border-warm-border/30">
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 font-display italic">
                      {event.description}
                    </p>
                 </div>

                 <Link href={event.link || "/festivals"} className="absolute inset-0 z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. DEEP DIVE: ONE STORY, MANY WORLDS (DIWALI CASE STUDY) */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">Regional Nuance</p>
              <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.95]">Same Story. <br />Many Worlds.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-display italic pr-12">
                "Utsavs tracks how one festival morphs as it crosses borders. A date is just a coordinate; the nuance is the data."
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['India', 'Nepal', 'Singapore', 'UK'].map(country => (
                <button 
                  key={country}
                  onClick={() => setActiveNuance(country)}
                  className={cn(
                    "px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border transition-all",
                    activeNuance === country 
                      ? "bg-ink text-white border-ink" 
                      : "bg-white text-muted-foreground border-warm-border hover:border-ink"
                  )}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
             <div className="bg-white border border-warm-border p-10 md:p-14 shadow-xl rounded-sm relative overflow-hidden font-ui">
                <div className="absolute top-0 right-0 p-8">
                  <Globe className="w-8 h-8 text-coral/10" />
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNuance}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="space-y-1">
                       <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-coral">JURISDICTION: {activeNuance.toUpperCase()}</p>
                       <h3 className="text-3xl font-bold font-display tracking-tight">
                        {activeNuance === 'Nepal' ? 'Tihar Festival' : activeNuance === 'Singapore' ? 'Deepavali' : 'Diwali'}
                       </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-y border-warm-border/40 py-8">
                       <div className="space-y-1">
                          <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Observed Date</p>
                          <p className="font-mono text-sm font-bold">OCT 29, 2026</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Status</p>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-ink">Public Holiday</p>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground">The Local Lens</p>
                       <p className="text-sm leading-relaxed text-ink font-display italic">
                        {activeNuance === 'India' && "Focuses on Lord Rama's return to Ayodhya. Markets shutdown for the new financial year."}
                        {activeNuance === 'Nepal' && "A 5-day sequence honoring crows, dogs, and cows before the lamps are lit."}
                        {activeNuance === 'Singapore' && "Centred in Little India, characterized by massive light installations and open-air bazaars."}
                        {activeNuance === 'UK' && "A community-led festival. Leicester hosts the largest celebration outside the subcontinent."}
                       </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>
      </section>

      {/* 05. BRIDGE TO CORE */}
      <section className="py-32 px-6 md:px-10 text-center bg-ink text-ivory overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 blur-[120px]" />
         <div className="max-w-3xl mx-auto space-y-12 relative z-10">
            <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.9]">Every day <br />is a story.</h2>
            <p className="text-lg md:text-xl text-ivory/60 font-display italic max-w-2xl mx-auto leading-relaxed">
              "Utsavs is building the unified temporal layer for global culture. From ancient rituals to national bank holidays, we map the world's pulse."
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link href="/">
                 <button className="h-14 px-10 bg-coral text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white hover:text-ink transition-all">EXPLORE THE MAIN SITE</button>
               </Link>
               <Link href="/calendar">
                 <button className="h-14 px-10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white hover:text-ink transition-all">SEE THE FULL CALENDAR</button>
               </Link>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-10 text-center border-t border-warm-border/40">
         <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-muted-foreground/40">
           © 2026 UTSAVS · GLOBAL HOLIDAY INTELLIGENCE · PROTOTYPE_V6 · <Link href="/" className="hover:text-coral transition-colors underline underline-offset-4">UTSAVS.COM</Link>
         </p>
      </footer>
    </div>
  );
}

