'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, MapPin, Sparkles, Zap, Globe, Layers, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TODAY_RECORDS, DIWALI_NUANCE, LONG_WEEKENDS_CINEMA } from '@/lib/ghi-data';

/**
 * 00. CUSTOM CURSOR / ANNOTATOR
 */
function DataCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <motion.div 
      className="fixed pointer-events-none z-[9999] hidden lg:flex items-center gap-4"
      animate={{ x: pos.x + 20, y: pos.y + 20 }}
      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
    >
      <div className="w-4 h-4 border border-coral rounded-full" />
      <span className="font-mono text-[9px] text-coral uppercase tracking-widest bg-ivory/80 px-2 py-1 rounded">
        {pos.x.toFixed(0)}:{pos.y.toFixed(0)}
      </span>
    </motion.div>
  );
}

/**
 * 01. HEADER — Minimalist / Floating
 */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 z-50 flex items-center justify-between px-10">
      <div className="flex flex-col">
        <span className="font-headline text-2xl font-bold tracking-tight text-ink">UTSAVS</span>
        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground -mt-1">GLOBAL INTELLIGENCE</span>
      </div>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
          <span className="text-ink">Live Ticker:</span>
          <span>U_GEN_921 Confirmed</span>
          <span className="text-coral">●</span>
          <span>Lunisolar Sync Complete</span>
        </div>
        <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-ink hover:text-coral transition-colors">
          ← Back to Site
        </Link>
      </div>
    </header>
  );
}

/**
 * 02. CINEMATIC HERO
 */
function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center px-10 overflow-hidden bg-ivory">
      {/* Background Texture */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-ivory/40 z-10 backdrop-blur-[2px]" />
        <Image 
          src="https://picsum.photos/seed/utsavs1/1920/1080" 
          alt="Atmosphere" 
          fill 
          className="object-cover grayscale brightness-125 sepia-[0.2]"
          priority
        />
      </motion.div>

      <div className="relative z-20 grid lg:grid-cols-12 gap-20 w-full">
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.6em] text-coral mb-6">TEMPORAL INSTRUMENT V3.0</p>
            <h1 className="font-headline text-7xl md:text-[9rem] leading-[0.85] font-bold tracking-tighter text-ink">
              The world <br /> in sync.
            </h1>
          </motion.div>

          <motion.div 
            className="max-w-md space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl text-muted-foreground font-medium leading-relaxed italic">
              "We don't just list holidays. We map the heartbeat of global culture into precise operational intelligence."
            </p>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                placeholder="Search a place, date or celebration..."
                className="w-full h-16 pl-12 bg-white/80 border-warm-border text-lg font-medium focus:ring-0 focus:border-ink transition-all rounded-none"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                <span className="text-[9px] font-bold bg-muted px-2 py-1 rounded">⌘ K</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 hidden lg:flex flex-col justify-center gap-4">
           {TODAY_RECORDS.map((record, i) => (
              <motion.div
                key={record.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                whileHover={{ x: -10 }}
                className="bg-white border border-warm-border p-6 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start">
                   <div className="space-y-1">
                      <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">{record.coords}</p>
                      <h3 className="font-headline text-2xl font-bold">{record.name}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{record.place} · {record.type}</p>
                   </div>
                   <div className={cn(
                     "px-2 py-0.5 text-[8px] font-bold tracking-widest border",
                     record.status === 'LIVE' ? "border-coral text-coral" : "border-muted-foreground text-muted-foreground"
                   )}>
                     {record.status}
                   </div>
                </div>
              </motion.div>
           ))}
        </div>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[99] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}

/**
 * 03. TEMPORAL CONSTELLATION (The interactive world view)
 */
function Constellation() {
  return (
    <section className="py-32 px-10 bg-ink text-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
           {Array.from({ length: 144 }).map((_, i) => (
             <div key={i} className="border-[0.5px] border-ivory/20" />
           ))}
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-coral">WORLD PULSE</p>
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">The density of <br/> human celebration.</h2>
          <p className="text-xl text-ivory/60 max-w-lg leading-relaxed">
            Every dot is a verified event. Every pulse is a localized closure. We monitor the grid so your systems stay in sync with the planet's time.
          </p>
          <div className="pt-10 flex gap-12">
             <div>
                <p className="text-4xl font-headline font-bold">142</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-ivory/40">Events Today</p>
             </div>
             <div>
                <p className="text-4xl font-headline font-bold">18</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-ivory/40">Active Closures</p>
             </div>
          </div>
        </div>

        <div className="aspect-square relative border border-ivory/10 bg-ivory/[0.02] rounded-full flex items-center justify-center">
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 rounded-full border border-dashed border-ivory/20"
           />
           <div className="relative w-4/5 h-4/5">
              {/* Mapping mock nodes */}
              {[20, 45, 60, 85].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-coral rounded-full cursor-pointer shadow-[0_0_20px_rgba(233,67,104,0.8)]"
                  style={{ left: `${pos}%`, top: `${pos}%` }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                />
              ))}
              <Globe className="absolute inset-0 m-auto w-12 h-12 text-ivory/10" />
           </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 04. NUANCE EXPLORER (The Diwali interaction)
 */
function NuanceExplorer() {
  const [active, setActive] = useState(DIWALI_NUANCE[0]);

  return (
    <section className="py-32 px-10 bg-ivory">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center space-y-4">
           <h2 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter">One day. <br />Many worlds.</h2>
           <p className="text-xl text-muted-foreground max-w-xl mx-auto">The same festival, refracted through different borders and laws.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-2">
            {DIWALI_NUANCE.map(n => (
              <button 
                key={n.id}
                onClick={() => setActive(n)}
                className={cn(
                  "w-full flex items-center justify-between p-8 border transition-all text-left group",
                  active.id === n.id ? "bg-ink text-ivory border-ink" : "bg-white border-warm-border hover:border-ink"
                )}
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs opacity-40">{n.countryCode}</span>
                  <span className="font-display text-2xl font-bold">{n.country}</span>
                </div>
                <ArrowRight className={cn("w-5 h-5 transition-transform", active.id === n.id ? "translate-x-2" : "opacity-0 group-hover:opacity-100")} />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white border border-warm-border p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                 <Zap className="w-6 h-6 text-coral opacity-20" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-coral mb-8">INTELLIGENCE RECORD</p>
              <h3 className="font-headline text-6xl font-bold mb-4">{active.name}</h3>
              <p className="text-lg font-mono font-bold text-ink mb-12">{active.date} · {active.status}</p>
              
              <div className="pt-8 border-t border-muted/20">
                 <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-4">LOCAL NUANCE</p>
                 <p className="text-2xl font-display italic leading-relaxed text-ink">
                    "{active.nuance}"
                 </p>
              </div>

              <div className="mt-12 pt-8 border-t border-muted/10 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                 <span>Source: Utsavs Protocol</span>
                 <span>Verification: Confirmed</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/**
 * 05. LONG WEEKEND SLIDER
 */
function PlanningSlider() {
  return (
    <section className="py-32 bg-ink text-ivory overflow-hidden">
      <div className="px-10 mb-16">
         <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-coral mb-4">PLANNING</p>
         <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">Your next <br/> reason to go.</h2>
      </div>

      <div className="flex gap-8 px-10 overflow-x-auto pb-10 no-scrollbar">
         {LONG_WEEKENDS_CINEMA.map((lw, i) => (
           <motion.div 
             key={i}
             whileHover={{ y: -10 }}
             className="min-w-[400px] bg-ivory/[0.03] border border-ivory/10 p-10 space-y-12 group cursor-pointer hover:bg-coral hover:text-white transition-all duration-500"
           >
              <div className="flex justify-between items-start">
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{lw.label}</span>
                 <Wind className="w-5 h-5 opacity-40 group-hover:opacity-100" />
              </div>
              <div>
                 <h3 className="font-headline text-4xl font-bold mb-2">{lw.title}</h3>
                 <p className="font-mono text-lg">{lw.dates}</p>
              </div>
              <p className="text-sm font-medium leading-relaxed opacity-60 group-hover:opacity-100">
                {lw.logic}
              </p>
              <button className="text-[10px] font-bold uppercase tracking-widest underline underline-offset-8">Explore Options</button>
           </motion.div>
         ))}
      </div>
    </section>
  );
}

/**
 * 06. FOOTER
 */
function Footer() {
  return (
    <footer className="py-20 px-10 bg-ivory border-t border-warm-border text-center">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">Understand the calendar.</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
           <Link href="/">
              <button className="h-14 px-10 bg-ink text-ivory text-[10px] font-bold uppercase tracking-widest rounded-none shadow-2xl hover:scale-105 transition-all">Explore Utsavs.com</button>
           </Link>
           <Link href="/calendar">
              <button className="h-14 px-10 border-2 border-ink text-ink text-[10px] font-bold uppercase tracking-widest rounded-none hover:bg-muted/10 transition-all">Full Calendar</button>
           </Link>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground pt-10">
          © 2026 UTSAVS · GLOBAL HOLIDAY INTELLIGENCE · PROTOTYPE V3
        </p>
      </div>
    </footer>
  );
}

export default function GHIPage() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div className="min-h-screen bg-ivory" />;

  return (
    <div className="min-h-screen bg-ivory text-ink selection:bg-coral/20 font-sans antialiased">
      <DataCursor />
      <Header />
      <main>
        <Hero />
        <Constellation />
        <NuanceExplorer />
        <PlanningSlider />
        
        {/* BRIDGE SECTION */}
        <section className="py-32 px-10 border-y border-warm-border bg-white">
           <div className="max-w-4xl mx-auto text-center space-y-8">
              <Layers className="w-10 h-10 mx-auto text-coral opacity-40" />
              <p className="text-3xl md:text-5xl font-display italic leading-tight text-muted-foreground">
                "Utsavs is the infrastructure for the moments that matter. <br/>
                From deep ritual to global logistics."
              </p>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
