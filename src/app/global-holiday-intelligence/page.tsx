
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, ArrowRight, MapPin, 
  Info, Globe, ShieldCheck,
  ChevronRight, Calendar,
  Loader2, Sparkles, Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { allEvents, internationalEvents } from '@/lib/festival-data';
import { DIWALI_NUANCE, CALENDAR_LOGIC_EXPLANATION } from '@/lib/ghi-data';
import { format, parse, isValid, isToday, isFuture, startOfDay } from 'date-fns';

/**
 * GHI HEADER - Minimalist & Pro
 */
function GHIHeader() {
  return (
    <header className="h-16 flex items-center justify-between px-6 md:px-12 bg-ivory border-b border-warm-border/40 sticky top-0 z-50">
      <Link href="/" className="flex flex-col leading-none group">
        <span className="font-headline text-2xl font-bold tracking-tight text-ink">UTSAVS</span>
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-coral -mt-0.5">INTELLIGENCE</span>
      </Link>
      <div className="flex items-center gap-8">
        <nav className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/calendar" className="hover:text-ink transition-colors">Full Calendar</Link>
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

/**
 * SEARCH COMPONENT - Functional
 */
function UniversalSearch({ events }: { events: any[] }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    const filtered = events.filter(e => 
      e.name.toLowerCase().includes(query.toLowerCase()) || 
      e.country?.toLowerCase().includes(query.toLowerCase()) ||
      e.region?.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
    setResults(filtered);
  }, [query, events]);

  return (
    <div className="relative w-full max-w-lg z-30">
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 group-focus-within:text-coral transition-colors" />
        <input 
          placeholder="Search a festival, country, or date..."
          className="w-full h-14 pl-12 pr-4 bg-white border border-warm-border rounded-sm text-sm font-medium focus:outline-none focus:border-ink transition-all shadow-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-warm-border shadow-2xl rounded-sm overflow-hidden"
          >
            {results.map((r, i) => (
              <Link 
                key={i} 
                href={r.link || '/festivals'}
                className="flex items-center justify-between p-4 hover:bg-ivory border-b last:border-b-0 border-warm-border/30 group"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-ink">{r.name}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{r.country || r.region} · {r.date}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-coral transition-all" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * MOVING CARDS - Live Today
 */
function LiveTodayStream({ todayEvents }: { todayEvents: any[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (todayEvents.length <= 1) return;
    const itv = setInterval(() => setIndex(prev => (prev + 1) % todayEvents.length), 5000);
    return () => clearInterval(itv);
  }, [todayEvents.length]);

  const active = todayEvents[index] || todayEvents[0];

  if (!active) return null;

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/5] bg-white border border-warm-border shadow-xl rounded-sm overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col"
        >
          <div className="relative h-1/2 w-full overflow-hidden">
             <Image 
                src={active.image || "https://picsum.photos/seed/utsavs/800/600"} 
                alt={active.name} 
                fill 
                className="object-cover transition-transform duration-[10s] scale-110 group-hover:scale-100"
                data-ai-hint={active.hint}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
             <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-coral text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg">
                  <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                  Live Record
                </div>
             </div>
          </div>
          
          <div className="flex-1 p-8 flex flex-col justify-between">
             <div className="space-y-4">
                <div className="space-y-1">
                   <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-coral">Observed In</p>
                   <h3 className="text-3xl font-headline font-bold text-ink leading-tight">{active.name}</h3>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{active.country || active.region} · {active.type}</p>
                </div>
                
                <div className="space-y-2 pt-4 border-t border-warm-border/50">
                   <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink">Intelligence</p>
                   <p className="text-sm text-muted-foreground leading-relaxed italic">"{active.description}"</p>
                </div>
             </div>

             <div className="flex items-center justify-between pt-6 border-t border-warm-border/30">
                <span className="text-[9px] font-mono font-bold text-muted-foreground/50">DATA: CONFIRMED_V1.2</span>
                <Link href={active.link || "/festivals"} className="text-[10px] font-bold uppercase tracking-widest text-ink hover:text-coral transition-colors flex items-center gap-2">
                   View Full Record <ArrowRight className="w-3 h-3" />
                </Link>
             </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {todayEvents.map((_, i) => (
          <div key={i} className={cn("h-1 rounded-full transition-all duration-500", i === index ? "w-4 bg-coral" : "w-1 bg-warm-border")} />
        ))}
      </div>
    </div>
  );
}

export default function GlobalHolidayIntelligencePage() {
  const [activeNuance, setActiveNuance] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  // Compute Live Data
  const { todayEvents, longWeekends } = useMemo(() => {
    // Simulated current date for prototype (Sep 4, 2026 - Janmashtami)
    const mockToday = parse('Sep 04, 2026', 'MMM dd, yyyy', new Date());
    const all = [...allEvents, ...internationalEvents];
    
    const today = all.filter(e => {
        const start = parse(e.date.split(' - ')[0], 'MMM dd, yyyy', new Date());
        return isValid(start) && start.getMonth() === mockToday.getMonth() && start.getDate() === mockToday.getDate();
    });

    const lws = all.filter(e => e.longWeekend).slice(0, 3);

    return { todayEvents: today.length > 0 ? today : all.slice(0, 3), longWeekends: lws };
  }, []);

  if (!isClient) return <div className="min-h-screen bg-ivory" />;

  return (
    <div className="min-h-screen bg-ivory text-ink selection:bg-coral/20 font-sans antialiased pb-24">
      <GHIHeader />

      {/* 01. HERO - TODAY ACTUALLY */}
      <section className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-coral">Today Actually</span>
                <div className="h-px w-12 bg-coral/30" />
                <span className="font-mono text-[11px] font-bold text-muted-foreground/60">{format(new Date(), 'dd MMM yyyy').toUpperCase()}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[0.95] text-ink">
                The world doesn't <br /> wait for Monday.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg font-medium">
                "Utsavs knows what today is — where, for whom, and why. Verified temporal data for discovery and operations."
              </p>
            </div>

            <div className="space-y-8">
              <UniversalSearch events={[...allEvents, ...internationalEvents]} />
              
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <Link href="/calendar" className="text-[11px] font-bold uppercase tracking-widest text-ink group hover:text-coral transition-colors flex items-center gap-2 border-b border-ink/10 pb-1">
                   Explore Full Calendar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/international-festivals" className="text-[11px] font-bold uppercase tracking-widest text-ink group hover:text-coral transition-colors flex items-center gap-2 border-b border-ink/10 pb-1">
                   Global Destinations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
             <LiveTodayStream todayEvents={todayEvents} />
             {/* Abstract data particles */}
             <div className="absolute -top-12 -right-12 w-64 h-64 bg-coral/5 rounded-full blur-[100px] -z-10" />
             <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </section>

      {/* 02. ONE FESTIVAL, MANY WORLDS */}
      <section className="bg-ink text-ivory py-32">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-4">
                   <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">Regional Nuance</p>
                   <h2 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9]">One Day.<br/>Many Worlds.</h2>
                   <p className="text-xl text-ivory/60 font-display italic max-w-lg leading-relaxed">
                     "Diwali isn't one date. It's one story told on five different days depending on where you live. Utsavs knows the difference."
                   </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {DIWALI_NUANCE.map((item, i) => (
                    <button 
                      key={item.country}
                      onClick={() => setActiveNuance(i)}
                      className={cn(
                        "px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm border transition-all",
                        activeNuance === i 
                          ? "bg-white text-ink border-white shadow-xl scale-105" 
                          : "bg-transparent text-ivory/40 border-white/10 hover:border-white/30"
                      )}
                    >
                      {item.country}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white text-ink p-10 md:p-16 shadow-2xl rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                   <Globe className="w-24 h-24" />
                </div>
                
                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeNuance}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     className="space-y-10"
                   >
                     <div className="space-y-2">
                        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-coral">Intelligence Record</p>
                        <h3 className="text-5xl font-bold font-display tracking-tight leading-[0.95]">
                           {DIWALI_NUANCE[activeNuance].name}
                        </h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{DIWALI_NUANCE[activeNuance].status}</p>
                     </div>

                     <div className="grid grid-cols-2 gap-12 border-y border-warm-border/40 py-8">
                        <div className="space-y-1">
                           <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Observed Date</p>
                           <p className="font-mono text-lg font-bold uppercase">{DIWALI_NUANCE[activeNuance].date}</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Operational Flow</p>
                           <p className="font-mono text-xs font-bold uppercase">Lunisolar Cycle</p>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Local Lens</p>
                        <p className="text-xl leading-relaxed text-ink font-display italic pr-4">
                          "{DIWALI_NUANCE[activeNuance].nuance}"
                        </p>
                        <p className="text-xs font-bold text-coral/80 uppercase tracking-widest">
                          Impact: {DIWALI_NUANCE[activeNuance].impact}
                        </p>
                     </div>
                   </motion.div>
                </AnimatePresence>
              </div>
           </div>
        </div>
      </section>

      {/* 03. WHY THE DATE MOVES */}
      <section className="container mx-auto px-6 py-32 border-b border-warm-border/40">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">Why the date moves.</h2>
             <p className="text-muted-foreground text-lg font-medium max-w-xl mx-auto">"Some holidays are fixed. Some follow the moon. We track the logic behind the shift."</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
             {CALENDAR_LOGIC_EXPLANATION.map((item, i) => (
               <div key={i} className="space-y-6 group">
                  <div className="w-12 h-px bg-coral group-hover:w-full transition-all duration-700" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-display uppercase tracking-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="px-3 py-2 bg-ivory border border-warm-border rounded-sm text-[10px] font-bold uppercase tracking-widest">
                    Example: {item.example}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 04. LONG WEEKENDS */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2">
               <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">Planning Bridges</p>
               <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter leading-none">Upcoming Escapes.</h2>
            </div>
            <Link href="/blog/long-weekends-2026" className="text-[11px] font-bold uppercase tracking-widest text-ink border-b-2 border-ink pb-1 hover:text-coral hover:border-coral transition-all">
               FULL 2026 GUIDE →
            </Link>
          </div>

          <div className="divide-y divide-warm-border/40 border-y border-warm-border/40">
            {longWeekends.map((lw, i) => (
               <div key={i} className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:bg-white/50 transition-colors px-4 -mx-4">
                  <div className="flex items-center gap-8">
                     <span className="font-mono text-xs font-bold text-coral w-12">{lw.country === 'India' ? 'IN' : 'GL'}</span>
                     <div className="space-y-1">
                        <h4 className="text-2xl font-bold font-display tracking-tight group-hover:text-coral transition-colors">{lw.name}</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{lw.date}</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <p className="text-sm font-bold font-display italic text-ink/60">Fri–Mon, 4 days off if leave taken Fri</p>
                     <ChevronRight className="w-5 h-5 text-warm-border group-hover:text-coral transition-colors" />
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. BRIDGE & CTA */}
      <section className="container mx-auto px-6 py-32 text-center border-t border-warm-border/40 bg-white/30">
        <div className="max-w-3xl mx-auto space-y-12">
           <p className="text-2xl md:text-4xl font-display font-bold leading-tight tracking-tight text-ink/80">
              "This is Utsavs figuring out how to know the world's calendar, not just India's. This page is us thinking out loud."
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/">
                <button className="h-14 px-10 bg-ink text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:bg-coral transition-all shadow-xl active:scale-95">
                  Explore Utsavs.com
                </button>
              </Link>
              <Link href="/calendar">
                <button className="h-14 px-10 border-2 border-ink text-ink text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm hover:bg-ink hover:text-white transition-all">
                  See Full Calendar
                </button>
              </Link>
           </div>
        </div>
      </section>

      {/* 06. FOOTER */}
      <footer className="py-12 px-6 text-center border-t border-warm-border/40">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60">
           UTSAVS · Global Holiday Intelligence (prototype) · © 2026 · <Link href="/" className="hover:text-coral">← utsavs.com</Link>
        </p>
      </footer>
    </div>
  );
}
