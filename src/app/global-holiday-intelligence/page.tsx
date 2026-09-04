
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, MapPin, Zap, Compass, Calendar, Timer, Activity, ShieldCheck, Info, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { allEvents, internationalEvents } from '@/lib/festival-data';
import { parse, isFuture, isToday, startOfDay, format, differenceInDays } from 'date-fns';

/**
 * DATA LOGIC
 * We pull from the real Utsavs dataset to ensure the "Intelligence" 
 * is grounded in reality.
 */
const ALL_GHI_DATA = [...allEvents, ...internationalEvents];

function getNextEvents(limit = 4) {
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
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 md:px-10 bg-ivory/80 backdrop-blur-md border-b border-warm-border/40">
      <div className="flex items-center gap-6">
        <Link href="/global-holiday-intelligence" className="flex flex-col">
          <span className="font-headline text-2xl font-bold tracking-tight text-ink">UTSAVS</span>
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-coral -mt-1">INTELLIGENCE</span>
        </Link>
      </div>
      
      <nav className="hidden lg:flex items-center gap-8 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60">
        <Link href="#next" className="hover:text-ink transition-colors">Calendar</Link>
        <Link href="#operational" className="hover:text-ink transition-colors">Operational</Link>
        <Link href="#regions" className="hover:text-ink transition-colors">Regions</Link>
        <Link href="#api" className="hover:text-ink transition-colors">API</Link>
      </nav>

      <div className="flex items-center gap-6">
        <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-ink transition-all">
          ← UTSAVS.COM
        </Link>
        <button className="h-9 px-5 bg-ink text-ivory text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-coral transition-all">
          API PREVIEW
        </button>
      </div>
    </header>
  );
}

export default function GHIPageV5() {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => setIsClient(true), []);

  const nextEvents = useMemo(() => getNextEvents(8), []);
  const heroEvent = nextEvents[0];

  if (!isClient) return <div className="min-h-screen bg-ivory" />;

  return (
    <div className="min-h-screen bg-ivory text-ink selection:bg-coral/20 font-sans antialiased pb-24">
      <Header />
      
      {/* 01. HERO DASHBOARD */}
      <section className="pt-32 px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: THE COMMAND CENTER */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="h-[1px] w-8 bg-coral" />
                 <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-coral">SYSTEM_READY</p>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-ink leading-[0.92]">
                Understand the <br /> world's calendar.
              </h1>
              <p className="text-lg text-muted-foreground font-display italic">
                "Verified temporal intelligence for operations and exploration."
              </p>
            </div>

            {/* UNIVERSAL SEARCH */}
            <div className="space-y-3">
               <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-ink ml-1">Search the Calendar</label>
               <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/30" />
                  <input 
                    placeholder="Search holiday, place or 'next long weekend'..."
                    className="w-full h-16 bg-white border border-warm-border text-xl font-display focus:outline-none focus:border-ink transition-all px-16 shadow-sm rounded-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
               <div className="flex flex-wrap gap-4 pt-2">
                  {['Japan in Oct', 'India Long Weekends', 'Office closures UK'].map(q => (
                    <button key={q} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-ink transition-colors underline underline-offset-4 decoration-warm-border">
                      {q}
                    </button>
                  ))}
               </div>
            </div>

            {/* LIVE PULSE MINI-WIDGET */}
            <div className="p-6 bg-white border border-warm-border rounded-sm space-y-4 shadow-sm">
               <div className="flex items-center justify-between border-b border-warm-border/40 pb-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                    <Activity className="w-3 h-3 text-coral" /> HAPPENING_NOW
                  </h3>
                  <span className="font-mono text-[9px] text-muted-foreground">{format(new Date(), 'dd MMM yyyy').toUpperCase()}</span>
               </div>
               <div className="space-y-2">
                  <p className="text-sm font-medium">Currently: {heroEvent?.name || 'Standard Calendar Period'}</p>
                  <p className="text-[9px] font-mono text-muted-foreground uppercase">LOC: {heroEvent?.country || heroEvent?.region} · STATUS: CONFIRMED</p>
               </div>
            </div>
          </div>

          {/* RIGHT: NEXT IN FOCUS (TIGHTER IMAGE) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-warm-border relative overflow-hidden group shadow-xl rounded-sm">
              <div className="relative h-64 md:h-[320px] overflow-hidden">
                <Image 
                  src={heroEvent?.image || "https://picsum.photos/seed/uts-fallback/1200/800"} 
                  alt="Next Festival" 
                  fill 
                  className="object-cover transition-transform duration-[10s] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute top-6 right-6 px-3 py-1 bg-ink text-ivory rounded-full flex items-center gap-2">
                   <Timer className="w-3 h-3 text-coral" />
                   <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Next Major Event</span>
                </div>
              </div>

              <div className="p-10 pt-0 space-y-8">
                 <div>
                    <h3 className="text-6xl font-headline font-bold tracking-tight text-ink">{heroEvent?.name}</h3>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground tracking-[0.4em] uppercase mt-2">
                       <span>{heroEvent?.country || heroEvent?.region}</span>
                       <div className="w-1 h-1 bg-warm-border rounded-full" />
                       <span>{heroEvent?.type}</span>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-8 py-6 border-y border-warm-border/40">
                    <div className="space-y-1">
                       <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Verification</p>
                       <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-muted-foreground/40" />
                          <span className="font-mono text-xs font-bold text-ink">CONFIRMED_DATA</span>
                       </div>
                    </div>
                    <div className="space-y-1 text-right">
                       <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Local Date</p>
                       <p className="font-mono text-sm font-bold text-ink">{heroEvent?.date}</p>
                    </div>
                 </div>

                 <p className="text-base text-muted-foreground leading-relaxed font-display italic pr-12">
                   "{heroEvent?.description}"
                 </p>

                 <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      {['Official_Notice', 'Lunisolar_Cal'].map(t => (
                        <span key={t} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-ivory border border-warm-border rounded-sm text-muted-foreground">{t}</span>
                      ))}
                    </div>
                    <Link href={heroEvent?.link || "/festivals"}>
                       <button className="text-[10px] font-bold uppercase tracking-widest text-ink hover:text-coral transition-colors flex items-center gap-2">
                         FULL_RECORD <ArrowRight className="w-3 h-3" />
                       </button>
                    </Link>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. UPCOMING INTELLIGENCE CAROUSEL (REPLACING HOME CAROUSEL) */}
      <section id="next" className="py-24 px-6 md:px-10 bg-white border-y border-warm-border overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-4">
             <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">TEMPORAL_STREAM</p>
             <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">The Upcoming Grid.</h2>
          </div>
          <Link href="/calendar" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-ink underline underline-offset-8">Explore full year →</Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x">
          {nextEvents.map((event, i) => (
            <motion.div 
              key={event.slug + i}
              whileHover={{ y: -4 }}
              className="flex-shrink-0 w-80 snap-start bg-ivory border border-warm-border p-6 space-y-6 group"
            >
               <div className="relative aspect-video rounded-sm overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image src={event.image || "https://picsum.photos/seed/uts-grid/400/300"} alt={event.name} fill className="object-cover" />
               </div>
               <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold text-coral uppercase tracking-tighter">{event.country || event.region}</span>
                    <span className="text-[9px] font-mono text-muted-foreground">ID: {event.slug.split('-')[0].toUpperCase()}</span>
                  </div>
                  <h4 className="text-xl font-bold tracking-tight font-display italic">{event.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{event.date}</p>
               </div>
               <div className="pt-4 border-t border-warm-border/40">
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{event.description}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03. OPERATIONAL INSIGHTS (BUSINESS TRIP READINESS) */}
      <section id="operational" className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
           <div className="flex-1 space-y-8 text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-coral">Operational Intelligence</p>
              <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Plan with <br /> jurisdictional <br /> certainty.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-display italic">
                "Utsavs models the impact of holidays on international teams, logistics, and travel windows."
              </p>
              <div className="flex gap-4">
                 <button className="h-12 px-8 bg-ink text-ivory text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-coral transition-all">VIEW IMPACT ANALYSIS</button>
              </div>
           </div>

           <div className="flex-1 w-full grid grid-cols-2 gap-4">
              {[
                { label: "Working Days", val: "21", sub: "Next 30 Days" },
                { label: "Public Closures", val: "03", sub: "Regional Average" },
                { label: "Long Weekends", val: "02", sub: "Oct — Nov 2026" },
                { label: "System Confidence", val: "100%", sub: "Source Verified" },
              ].map(stat => (
                <div key={stat.label} className="p-8 bg-white border border-warm-border rounded-sm text-center space-y-2">
                   <p className="text-4xl font-headline font-bold text-ink">{stat.val}</p>
                   <p className="text-[9px] font-bold uppercase tracking-widest text-ink">{stat.label}</p>
                   <p className="text-[8px] text-muted-foreground uppercase font-mono">{stat.sub}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 04. AI PLANNING BRIDGE */}
      <section className="py-24 px-6 md:px-10 bg-white border-y border-warm-border">
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-warm-border">
               <Image src="https://i.postimg.cc/VLQf0kKF/long-weekend-1.jpg" alt="Planner" fill className="object-cover grayscale" />
               <div className="absolute inset-0 flex items-center justify-center bg-ink/20">
                  <Bot className="w-12 h-12 text-ivory/80" />
               </div>
            </div>
            <div className="flex-1 space-y-6">
                <h3 className="text-4xl font-headline font-bold tracking-tight">Ask the Calendar.</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-display italic">
                  "Which holidays affect our Singapore office next month? Where should we go in October for a 4-day break?"
                </p>
                <Link href="/planner">
                  <button className="text-[10px] font-bold uppercase tracking-widest text-ink hover:text-coral transition-colors flex items-center gap-2 group">
                    LAUNCH AI PLANNER <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
            </div>
         </div>
      </section>

      {/* 05. REGIONAL INTELLIGENCE (FROM HOME) */}
      <section id="regions" className="py-24 px-6 md:px-10">
        <div className="mb-16 space-y-4 text-center">
           <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">Regional Lenses</p>
           <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">The geography of time.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { name: "North India", status: "High Activity", img: "https://i.postimg.cc/kGQ9w7QS/north-india-festivals.webp" },
             { name: "West Asia", status: "Seasonal Transition", img: "https://i.postimg.cc/jjxTcV2w/Western-India-festivals-1.jpg" },
             { name: "South India", status: "Stabilized", img: "https://i.postimg.cc/j5CbVzzR/south-indian-festivals.jpg" }
           ].map(region => (
             <Link key={region.name} href={`/festivals?region=${region.name.split(' ')[0]}`} className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-warm-border">
                <Image src={region.img} alt={region.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white space-y-1">
                   <p className="text-[8px] font-bold uppercase tracking-widest text-coral/80">{region.status}</p>
                   <h4 className="text-2xl font-display font-bold italic">{region.name}</h4>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="w-5 h-5 text-white" />
                </div>
             </Link>
           ))}
        </div>
      </section>

      {/* 06. FINAL BRAND STATEMENT */}
      <section className="py-48 px-6 md:px-10 bg-ink text-ivory text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <ShieldCheck className="w-10 h-10 mx-auto text-coral" />
            <h2 className="text-4xl md:text-7xl font-display font-medium italic tracking-tight leading-[1.1]">
              "Beyond the date. We understand the <span className="text-coral">soul</span> of the calendar."
            </h2>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
               <button className="h-14 px-12 bg-coral text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-ink transition-all">JOIN API PREVIEW</button>
               <Link href="/">
                 <button className="h-14 px-12 border border-ivory text-ivory text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-ivory hover:text-ink transition-all">EXPLORE UTSAVS.COM</button>
               </Link>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 md:px-10 text-center border-t border-warm-border/40">
         <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-muted-foreground/40">
           © 2026 UTSAVS · GLOBAL HOLIDAY INTELLIGENCE · PROTOTYPE_V5 · <Link href="/" className="hover:text-coral transition-colors">UTSAVS.COM</Link>
         </p>
      </footer>

      {/* Film Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

