'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, ArrowRight, MapPin, Calendar, 
  Info, Globe, ShieldCheck, Clock,
  ChevronRight, ArrowDownRight, Tag, Zap,
  Menu, X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { GHI_RECORDS, GHIEvent } from '@/lib/calendar-intelligence-data';
import { format, parseISO, isToday, isFuture, startOfDay } from 'date-fns';

/**
 * EXPERT DATA LAYER (PROTOTYPE)
 */
const DIWALI_CASE_STUDY = [
  { country: "India", code: "IN", date: "Nov 08, 2026", status: "Public Holiday", nuance: "Centered on Lord Rama's return. National bank and market closures." },
  { country: "Singapore", code: "SG", date: "Nov 08, 2026", status: "Public Holiday", nuance: "Celebrated as Deepavali. Major activity in Little India. Banks closed." },
  { country: "United Kingdom", code: "UK", date: "Nov 08, 2026", status: "Observance", nuance: "Not a public holiday. Major cultural events in Leicester and London." },
];

function GHIHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 md:px-12 bg-ivory/95 backdrop-blur-xl border-b border-warm-border/40">
      <Link href="/" className="flex flex-col leading-none group">
        <span className="font-headline text-2xl font-bold tracking-tight text-ink">UTSAVS</span>
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-coral -mt-0.5">INTELLIGENCE</span>
      </Link>
      <div className="flex items-center gap-8">
        <nav className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/calendar" className="hover:text-ink transition-colors">Calendar</Link>
          <Link href="/international-festivals" className="hover:text-ink transition-colors">International</Link>
          <Link href="/planner" className="hover:text-ink transition-colors">AI Planner</Link>
        </nav>
        <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-ink hover:text-coral transition-colors flex items-center gap-2">
          ← UTSAVS.COM
        </Link>
      </div>
    </header>
  );
}

export default function GlobalHolidayIntelligencePage() {
  const [isClient, setIsClient] = useState(false);
  const [activeNuance, setActiveNuance] = useState(0);
  
  useEffect(() => setIsClient(true), []);

  // Expert Logic: Determine "Today" and "Next Up" accurately
  // Simulated for Prototype using Sep 2026 as the target month
  const todayRecord = useMemo(() => GHI_RECORDS.find(r => r.date === '2026-09-04'), []);
  const nextMajor = useMemo(() => GHI_RECORDS.find(r => r.date === '2026-09-15'), []);
  const upcoming = useMemo(() => GHI_RECORDS.slice(1, 5), []);

  if (!isClient) return <div className="min-h-screen bg-ivory" />;

  return (
    <div className="min-h-screen bg-ivory text-ink selection:bg-coral/20 font-sans antialiased">
      <GHIHeader />

      {/* 01. MASTER RECORD HERO (Cinematic Pro) */}
      <section className="pt-24 px-4 md:px-6">
        <div className="relative aspect-[4/5] md:aspect-[21/9] overflow-hidden rounded-sm shadow-2xl border border-warm-border/50 group">
          <Image 
            src={todayRecord?.image || "https://i.postimg.cc/T3ccXCRv/dahi-handi.jpg"} 
            alt={todayRecord?.name || "Intelligence Hero"}
            fill
            className="object-cover transition-transform duration-[30s] scale-110 group-hover:scale-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1 bg-coral text-white text-[9px] font-bold uppercase tracking-[0.3em] rounded-full inline-flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Live Record
                  </div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">ID: {todayRecord?.id.toUpperCase()}</span>
                </div>
                <h1 className="font-headline text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85]">
                  {todayRecord?.name}
                </h1>
                <p className="text-white/70 text-lg md:text-xl font-display italic serif max-w-lg leading-relaxed">
                  "{todayRecord?.whyItMatters}"
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-sm space-y-8">
                 <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-1">
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-coral">Observed In</p>
                      <p className="text-xl font-bold text-white tracking-tight">{todayRecord?.country}</p>
                      <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest">{todayRecord?.scope} Scope</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">Temporal Status</p>
                      <div className="flex items-center justify-end gap-2">
                        <ShieldCheck className="w-3 h-3 text-green-400" />
                        <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Confirmed</p>
                      </div>
                      <p className="font-mono text-xs font-bold text-white uppercase mt-1">4 SEP 2026</p>
                    </div>
                 </div>
                 
                 <div className="space-y-3 pt-6 border-t border-white/10">
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">Operational Insight</p>
                    <p className="text-sm text-white/80 leading-relaxed font-medium italic">
                      "{todayRecord?.impact}"
                    </p>
                 </div>
                 
                 <Link href="/festivals" className="block">
                   <button className="w-full h-14 bg-white text-ink text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-coral hover:text-white transition-all rounded-sm shadow-xl">
                      Access Full Intelligence
                   </button>
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. SEARCH THE CALENDAR (Expert Logic) */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
           <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">Find what matters next.</h2>
           <p className="text-muted-foreground text-lg font-display italic">"Search 2026–2028 verified holiday data across global jurisdictions."</p>
        </div>
        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/30 group-focus-within:text-coral transition-colors" />
          <input 
            placeholder="Search by festival, country, or jurisdiction..."
            className="w-full h-20 bg-white border border-warm-border text-2xl font-display px-16 shadow-sm focus:outline-none focus:border-ink rounded-sm transition-all"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 px-3 py-1.5 bg-ivory border border-warm-border rounded-sm text-[10px] font-mono text-muted-foreground">
            COMMAND + K
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
           {['Diwali 2027', 'Maharashtra Holidays', 'Singapore vs India', 'Long Weekends'].map(tag => (
             <button key={tag} className="hover:text-ink transition-colors underline decoration-coral/20 underline-offset-4">{tag}</button>
           ))}
        </div>
      </section>

      {/* 03. CASE STUDY: THE DIWALI GAP (Storytelling Pro) */}
      <section className="py-32 px-6 md:px-12 bg-ink text-ivory">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">Jurisdictional Nuance</p>
              <h2 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9]">One Day.<br/>Many Worlds.</h2>
              <p className="text-xl text-ivory/60 font-display italic max-w-lg leading-relaxed">
                "Utsavs tracks how one festival morphs as it crosses borders. A date is just a coordinate; the nuance is the intelligence."
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
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-coral">Intelligence Record</p>
                    <h3 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-[0.95]">
                      {DIWALI_CASE_STUDY[activeNuance].country === 'Nepal' ? 'Tihar' : 'Diwali'}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{DIWALI_CASE_STUDY[activeNuance].status}</p>
                 </div>

                 <div className="grid grid-cols-2 gap-12 border-y border-warm-border/40 py-10">
                    <div className="space-y-1">
                       <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Observed Date</p>
                       <p className="font-mono text-lg font-bold uppercase">{DIWALI_CASE_STUDY[activeNuance].date}</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Data Type</p>
                       <p className="font-mono text-xs font-bold uppercase">Lunisolar Cycle</p>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">The Local Lens</p>
                    <p className="text-xl leading-relaxed text-ink font-display italic pr-4">
                      "{DIWALI_CASE_STUDY[activeNuance].nuance}"
                    </p>
                 </div>
               </motion.div>
             </AnimatePresence>

             <div className="text-[9px] font-mono font-bold text-muted-foreground/30 uppercase tracking-[0.4em]">
                RECORD: UTSAVS_NUANCE_V1.5
             </div>
          </div>
        </div>
      </section>

      {/* 04. NEXT IN FOCUS (Expert Horizontal Stream) */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2">
               <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">Stream v1.2</p>
               <h2 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter">Next in Focus.</h2>
               <p className="text-muted-foreground text-xl font-display italic">"High-density tracking of global celebrations over the next 90 days."</p>
            </div>
            <Link href="/calendar" className="text-[11px] font-bold uppercase tracking-widest text-ink group border-b-2 border-ink pb-2">
              FULL 2026/27 CALENDAR <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcoming.map((event, i) => (
              <Link key={event.id} href="/festivals" className="bg-white border border-warm-border p-10 rounded-sm hover:border-ink transition-all group relative">
                 <div className="flex justify-between items-start mb-16">
                    <div className="space-y-1">
                      <p className="text-[11px] font-mono font-bold text-coral uppercase tracking-widest">{event.countryCode}</p>
                      <p className="text-[9px] font-mono text-muted-foreground">REF: {event.id.toUpperCase()}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border border-warm-border text-muted-foreground">{event.type}</span>
                 </div>
                 <div className="space-y-3 mb-10">
                    <h4 className="text-3xl font-bold tracking-tight font-headline leading-tight group-hover:text-coral transition-colors">{event.name}</h4>
                    <p className="font-mono text-[11px] font-bold text-ink uppercase tracking-[0.2em]">{format(parseISO(event.date), 'dd MMM yyyy')}</p>
                 </div>
                 <div className="pt-8 border-t border-warm-border/40">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 font-display italic">
                      "{event.whyItMatters}"
                    </p>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05. OPERATIONAL PLANNER (Bridges) */}
      <section className="py-24 px-6 md:px-12 border-t border-warm-border/40 bg-secondary/20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">Plan your next escape.</h2>
             <p className="text-muted-foreground text-lg font-display italic">"Identifying long-weekend 'bridges' across India and the globe."</p>
          </div>
          
          <div className="space-y-4">
             {[
               { name: "Gudi Padwa", date: "Mar 20, 2026", note: "Fri–Sun · 3 days off", country: "India" },
               { name: "Eid-al-Fitr", date: "Mar 21, 2026", note: "Sat–Mon · 3 days off if leave taken Mon", country: "Global" },
               { name: "Diwali 2026", date: "Nov 08, 2026", note: "Sat–Mon · 3 day national bridge", country: "India" }
             ].map((bridge, i) => (
               <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-warm-border rounded-sm hover:shadow-xl transition-all">
                  <div className="flex items-center gap-8">
                     <span className="font-mono text-sm font-bold text-coral">{bridge.country}</span>
                     <div className="space-y-1">
                        <h4 className="text-2xl font-bold font-display">{bridge.name}</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{bridge.date}</p>
                     </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-6">
                     <p className="text-sm font-bold font-display italic text-ink/60">{bridge.note}</p>
                     <ArrowRight className="w-5 h-5 text-coral" />
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 06. FOOTER (Minimal Pro) */}
      <footer className="py-16 px-6 md:px-12 text-center border-t border-warm-border/40">
        <div className="max-w-4xl mx-auto space-y-8">
           <Link href="/" className="flex flex-col items-center">
             <span className="font-headline text-3xl font-bold tracking-tight text-ink">UTSAVS</span>
             <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-coral -mt-0.5">Global Holiday Intelligence</span>
           </Link>
           <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted-foreground/40">
             © 2026 UTSAVS · PROTOTYPE_V2.0 · <Link href="/" className="hover:text-coral transition-colors">UTSAVS.COM</Link>
           </p>
        </div>
      </footer>
    </div>
  );
}
