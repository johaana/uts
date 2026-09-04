
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, ArrowRight, MapPin, Zap, Compass, 
  Calendar, Timer, Activity, ShieldCheck, 
  Info, Bot, Layers, BarChart3, Globe2 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { allEvents, internationalEvents } from '@/lib/festival-data';
import { parse, isFuture, isToday, startOfDay, format, addDays, isSameDay } from 'date-fns';

/**
 * DATA LOGIC
 * Synchronized with the real Utsavs dataset for 2026.
 */
const ALL_GHI_DATA = [...allEvents, ...internationalEvents];

function getNextEvents(limit = 8) {
  const now = startOfDay(new Date());
  return ALL_GHI_DATA
    .map(event => ({
      ...event,
      parsedDate: parse(event.date.split(' - ')[0], 'MMM dd, yyyy', new Date())
    }))
    .filter(event => (isFuture(event.parsedDate) || isToday(event.parsedDate)))
    .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime())
    .slice(0, limit);
}

/**
 * COMPONENTS
 */

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 md:px-10 bg-ivory/90 backdrop-blur-md border-b border-warm-border/40">
      <div className="flex items-center gap-6">
        <Link href="/global-holiday-intelligence" className="flex flex-col">
          <span className="font-headline text-2xl font-bold tracking-tight text-ink leading-none">UTSAVS</span>
          <span className="text-[7px] font-bold uppercase tracking-[0.4em] text-coral mt-0.5">INTELLIGENCE</span>
        </Link>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">
        <Link href="#next" className="hover:text-ink transition-colors">Temporal Stream</Link>
        <Link href="#operational" className="hover:text-ink transition-colors">Operational</Link>
        <Link href="#regions" className="hover:text-ink transition-colors">Jurisdictions</Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-ink transition-all">
          ← UTSAVS.COM
        </Link>
        <button className="h-8 px-4 bg-ink text-ivory text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-coral transition-all">
          API_PREVIEW
        </button>
      </div>
    </header>
  );
}

export default function GlobalHolidayIntelligencePage() {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  
  useEffect(() => setIsClient(true), []);

  const nextEvents = useMemo(() => getNextEvents(12), []);
  const heroEvent = nextEvents[0];

  // Operational Simulation Logic
  const next30Days = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => addDays(new Date(), i));
  }, []);

  if (!isClient) return <div className="min-h-screen bg-ivory" />;

  return (
    <div className="min-h-screen bg-ivory text-ink selection:bg-coral/20 font-sans antialiased pb-24">
      <Header />
      
      {/* 01. DASHBOARD HERO (TIGHTENED) */}
      <section className="pt-24 px-6 md:px-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: COMMAND BAR & CONTEXT */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                 <div className="h-[1px] w-4 bg-coral" />
                 <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-coral">SYSTEM_SYNC_ACTIVE</p>
              </div>
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-ink leading-[0.95]">
                One world.<br />Many calendars.
              </h1>
            </div>

            {/* INTEGRATED SEARCH */}
            <div className="space-y-4">
               <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                  <input 
                    placeholder="Search a holiday, state or city..."
                    className="w-full h-12 bg-white border border-warm-border text-sm font-display focus:outline-none focus:border-ink transition-all px-12 shadow-sm rounded-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
               <div className="flex flex-wrap gap-2">
                  {['Maharashtra', 'Japan', 'October'].map(q => (
                    <button key={q} className="px-2 py-1 bg-white border border-warm-border text-[8px] font-bold uppercase tracking-widest text-muted-foreground hover:text-ink transition-colors rounded-sm">
                      {q}
                    </button>
                  ))}
               </div>
            </div>

            {/* OPERATIONAL SNAPSHOT (30 DAY PULSE) */}
            <div className="p-5 bg-white border border-warm-border rounded-sm space-y-5 shadow-sm">
               <div className="flex items-center justify-between border-b border-warm-border/40 pb-3">
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 text-muted-foreground">
                    <Activity className="w-3 h-3 text-coral" /> 30_DAY_OUTLOOK
                  </h3>
                  <span className="font-mono text-[8px] text-muted-foreground">SEPTEMBER 2026</span>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[18px] font-headline font-bold text-ink">21</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Working Days</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[18px] font-headline font-bold text-coral">03</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Operational Breaks</p>
                  </div>
               </div>

               <div className="pt-3 border-t border-warm-border/40">
                  <p className="text-[10px] leading-relaxed italic font-display text-muted-foreground">
                    "Medium operational friction expected in South Asia due to seasonal transition."
                  </p>
               </div>
            </div>

            {/* REGIONAL ACTIVITY TOGGLES */}
            <div className="space-y-3">
               <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-ink ml-1">Jurisdiction Pulse</p>
               <div className="grid grid-cols-2 gap-2">
                  {[
                    { l: 'NORTH', s: 'STABLE' },
                    { l: 'SOUTH', s: 'PEAK' },
                    { l: 'WEST', s: 'ACTIVE' },
                    { l: 'EAST', s: 'TRANSITION' }
                  ].map(r => (
                    <button key={r.l} className="p-3 bg-white border border-warm-border rounded-sm text-left hover:border-ink transition-colors group">
                       <div className="flex justify-between items-center">
                          <span className="text-[9px] font-bold uppercase tracking-widest">{r.l}</span>
                          <div className={cn("w-1 h-1 rounded-full", r.s === 'PEAK' ? 'bg-coral' : 'bg-muted-foreground/30')} />
                       </div>
                       <p className="text-[7px] font-mono text-muted-foreground mt-1 uppercase">{r.s}</p>
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* RIGHT: THE NEXT MAJOR EVENT RECORD */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-warm-border relative overflow-hidden group shadow-lg rounded-sm">
              <div className="grid md:grid-cols-12">
                
                {/* IMAGE COLUMN (TIGHTER) */}
                <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden border-r border-warm-border/40">
                  <Image 
                    src={heroEvent?.image || "https://i.postimg.cc/SNGxJ8VJ/ganesh-chaturthi-festival.jpg"} 
                    alt="Hero" 
                    fill 
                    className="object-cover transition-transform duration-[10s] group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                  <div className="absolute top-4 left-4 px-2 py-1 bg-ink text-ivory rounded-full flex items-center gap-2">
                     <Timer className="w-2.5 h-2.5 text-coral" />
                     <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Next in focus</span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-[7px] text-white/60 uppercase">
                    IMG_REF: {heroEvent?.slug.split('-')[0].toUpperCase()} // COORDS: 18.9N 72.8E
                  </div>
                </div>

                {/* DATA COLUMN */}
                <div className="md:col-span-7 p-8 md:p-12 space-y-6">
                   <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-bold text-coral uppercase tracking-widest">{heroEvent?.country || heroEvent?.region}</span>
                        <div className="h-[1px] w-4 bg-warm-border" />
                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{heroEvent?.type}</span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-ink">{heroEvent?.name}</h3>
                   </div>

                   <div className="grid grid-cols-2 gap-6 py-5 border-y border-warm-border/40">
                      <div className="space-y-1">
                         <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Scope</p>
                         <div className="flex items-center gap-2">
                            <Layers className="w-3 h-3 text-muted-foreground/40" />
                            <span className="font-mono text-[10px] font-bold text-ink uppercase">Regional (Maharashtra)</span>
                         </div>
                      </div>
                      <div className="space-y-1 text-right">
                         <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Event Date</p>
                         <p className="font-mono text-xs font-bold text-ink">{heroEvent?.date}</p>
                      </div>
                   </div>

                   <div className="space-y-3">
                      <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Nuance & Context</p>
                      <p className="text-sm text-ink leading-relaxed font-display italic">
                        "{heroEvent?.description}"
                      </p>
                   </div>

                   <div className="pt-4 flex justify-between items-center">
                      <div className="flex gap-2">
                         <span className="text-[7px] font-bold uppercase tracking-widest px-2 py-1 bg-ivory border border-warm-border text-muted-foreground">Confirmed_Data</span>
                         <span className="text-[7px] font-bold uppercase tracking-widest px-2 py-1 bg-ivory border border-warm-border text-muted-foreground">Lunisolar_Model</span>
                      </div>
                      <Link href={heroEvent?.link || "/festivals"}>
                         <button className="text-[9px] font-bold uppercase tracking-widest text-ink hover:text-coral transition-colors flex items-center gap-2 group">
                           FULL_RECORD <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                         </button>
                      </Link>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. TEMPORAL STREAM (REPLACING CAROUSEL) */}
      <section id="next" className="py-24 px-6 md:px-10 bg-white border-y border-warm-border overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-3">
               <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-coral">TEMPORAL_STREAM</p>
               <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tight">The Upcoming Grid.</h2>
               <p className="text-muted-foreground text-sm font-display italic">"Navigating the next 90 days of global culture."</p>
            </div>
            <Link href="/calendar" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-ink underline underline-offset-8">Explore full 2026/27 cycle →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nextEvents.slice(1, 5).map((event, i) => (
              <motion.div 
                key={event.slug + i}
                whileHover={{ y: -4 }}
                className="bg-ivory border border-warm-border p-5 space-y-5 group rounded-sm"
              >
                 <div className="relative aspect-video rounded-sm overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src={event.image || "https://picsum.photos/seed/uts-grid/400/300"} alt={event.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-ink/10" />
                 </div>
                 <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-mono font-bold text-coral uppercase">{event.country || event.region}</span>
                      <span className="text-[8px] font-mono text-muted-foreground">REF: {event.slug.split('-')[0].toUpperCase()}</span>
                    </div>
                    <h4 className="text-lg font-bold tracking-tight font-display italic leading-tight">{event.name}</h4>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{event.date}</p>
                 </div>
                 <div className="pt-3 border-t border-warm-border/40">
                    <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">{event.description}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. JURISDICTIONAL INTELLIGENCE (REGIONAL FOCUS) */}
      <section id="regions" className="py-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-coral">Regional Nuance</p>
              <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight leading-[1.05]">Local rules override the nation.</h2>
              <p className="text-base text-muted-foreground leading-relaxed font-display italic pr-12">
                "Utsavs models the hierarchical relationship between country, state, and city calendars. A national holiday in India often has entirely different compliance rules in Mumbai than in Kochi."
              </p>
              
              <div className="space-y-4">
                 {[
                   { t: 'Administrative Closure', d: 'Government and Banking systems offline.' },
                   { t: 'Cultural High-Density', d: 'Urban movement significantly impacted.' },
                   { t: 'Regional Variant', d: 'Date differs from the National standard.' }
                 ].map(item => (
                   <div key={item.t} className="flex gap-4 p-4 bg-white border border-warm-border rounded-sm hover:border-ink transition-colors">
                      <ShieldCheck className="w-5 h-5 text-coral shrink-0" />
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-widest">{item.t}</p>
                        <p className="text-xs text-muted-foreground">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="relative aspect-[4/5] bg-white border border-warm-border shadow-xl rounded-sm p-10 overflow-hidden font-ui">
              <div className="absolute top-0 right-0 p-8">
                <BarChart3 className="w-8 h-8 text-coral/20" />
              </div>
              <h3 className="text-2xl font-bold font-display tracking-tight mb-10">Jurisdiction Hierarchy</h3>
              
              <div className="space-y-10 relative">
                 <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-warm-border" />
                 {[
                   { l: 'COUNTRY', v: 'India', c: 'National' },
                   { l: 'STATE', v: 'Maharashtra', c: 'Gazetted' },
                   { l: 'CITY', v: 'Mumbai', c: 'Municipal' },
                   { l: 'LOCAL', v: 'South Mumbai', c: 'Localized' }
                 ].map((lvl, i) => (
                   <div key={lvl.l} className="pl-6 relative group">
                      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-warm-border group-hover:bg-coral transition-colors" />
                      <div className="flex justify-between items-center">
                         <div>
                            <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">{lvl.l}</p>
                            <p className="text-lg font-bold font-display">{lvl.v}</p>
                         </div>
                         <span className="text-[7px] font-mono bg-ivory border border-warm-border px-1.5 py-0.5 rounded-sm">{lvl.c}</span>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="mt-12 pt-8 border-t border-warm-border/40">
                 <p className="text-[9px] font-bold uppercase tracking-widest text-ink mb-2">INTELLIGENCE_OUTPUT</p>
                 <div className="bg-ivory p-4 rounded-sm border border-warm-border/60">
                    <p className="text-xs font-medium leading-relaxed">"Verified closure confirmed for Mumbai jurisdiction only. Neighboring districts maintain operational status."</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 04. AI PLANNER CTA (TIGHTER) */}
      <section className="py-20 px-6 md:px-10 bg-ink text-ivory overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 blur-[120px]" />
         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-5xl font-headline font-bold tracking-tight">Ask the Calendar.</h3>
                <p className="text-lg text-ivory/60 font-display italic">
                  "Which regional holidays affect our Mumbai team next week?"
                </p>
                <Link href="/planner">
                  <button className="h-12 px-8 bg-coral text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white hover:text-ink transition-all flex items-center gap-2 group mx-auto md:mx-0">
                    LAUNCH AI PLANNER <Bot className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                  </button>
                </Link>
            </div>
            <div className="flex-1 relative aspect-video w-full rounded-sm overflow-hidden border border-white/10">
               <Image src="https://i.postimg.cc/VLQf0kKF/long-weekend-1.jpg" alt="Planner" fill className="object-cover grayscale opacity-40" />
               <div className="absolute inset-0 bg-ink/40" />
            </div>
         </div>
      </section>

      {/* 05. FINAL DATA STATEMENT */}
      <section className="py-32 px-6 md:px-10 text-center">
         <div className="max-w-3xl mx-auto space-y-8">
            <Globe2 className="w-8 h-8 mx-auto text-coral" />
            <h2 className="text-3xl md:text-6xl font-display font-medium italic tracking-tight leading-tight">
              "Utsavs provides the verified temporal layer for global operations."
            </h2>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
               <button className="h-12 px-10 bg-ink text-ivory text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-coral transition-all">JOIN API_PREVIEW</button>
               <Link href="/">
                 <button className="h-12 px-10 border border-ink text-ink text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-ink hover:text-ivory transition-all">BACK TO UTSAVS.COM</button>
               </Link>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-10 text-center border-t border-warm-border/40">
         <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-muted-foreground/40">
           © 2026 UTSAVS · GLOBAL HOLIDAY INTELLIGENCE · REC_VERSION_6.0 · <Link href="/" className="hover:text-coral transition-colors">UTSAVS.COM</Link>
         </p>
      </footer>
    </div>
  );
}
