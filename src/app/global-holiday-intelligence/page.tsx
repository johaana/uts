'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, MapPin, Sparkles, Zap, Globe, Layers, Wind, Activity, Timer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TODAY_RECORDS, DIWALI_NUANCE, LONG_WEEKENDS_CINEMA } from '@/lib/ghi-data';
import imageData from '@/app/lib/placeholder-images.json';

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
      <div className="w-5 h-5 border border-coral rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-coral rounded-full" />
      </div>
      <span className="font-mono text-[10px] text-coral uppercase tracking-widest bg-ivory/90 px-3 py-1.5 rounded-sm shadow-sm backdrop-blur-md">
        LOC_{pos.x.toFixed(0)}:{pos.y.toFixed(0)}
      </span>
    </motion.div>
  );
}

/**
 * 01. HEADER — Minimalist / Floating
 */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-24 z-50 flex items-center justify-between px-8 md:px-16 pointer-events-none">
      <div className="flex flex-col pointer-events-auto">
        <span className="font-headline text-3xl font-bold tracking-tight text-ink">UTSAVS</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-coral -mt-1">GLOBAL INTELLIGENCE</span>
      </div>
      
      <div className="flex items-center gap-12 pointer-events-auto">
        <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-coral" />
            <span className="text-ink">STREAMING_GHI_V3</span>
          </div>
          <span className="w-1.5 h-1.5 bg-warm-border rounded-full" />
          <span>SYNCED TO UTC_0</span>
        </div>
        
        <Link href="/" className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-ink hover:text-coral transition-all">
          <span className="w-8 h-[1px] bg-ink group-hover:bg-coral transition-colors" />
          BACK TO SITE
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center px-8 md:px-16 overflow-hidden bg-ivory">
      {/* Immersive Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image 
          src={imageData.ghiHero.url} 
          alt="Atmospheric human celebration" 
          fill 
          className="object-cover grayscale brightness-125 opacity-30 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/80 to-transparent z-10" />
      </motion.div>

      <div className="relative z-20 w-full">
        <div className="max-w-4xl space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.8em] text-coral mb-8 block">TEMPORAL INSTRUMENT</p>
            <h1 className="font-headline text-7xl md:text-[11rem] leading-[0.8] font-bold tracking-tighter text-ink">
              The world <br /> <span className="italic font-display font-medium text-coral">actually</span> <br /> in sync.
            </h1>
          </motion.div>

          <motion.div 
            className="max-w-xl space-y-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-2xl text-muted-foreground font-medium leading-relaxed italic font-display">
              "We map the heartbeat of global culture into structured intelligence. Beyond the date, into the meaning."
            </p>
            
            <div className="relative group">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-coral group-focus-within:w-8 transition-all" />
              <input 
                placeholder="Search holiday, place or Ask the Calendar..."
                className="w-full h-20 bg-transparent border-b border-warm-border text-2xl font-display focus:outline-none focus:border-ink transition-all placeholder:text-muted-foreground/30 px-4"
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-muted-foreground">
                <span className="bg-white/80 px-2 py-1 border border-warm-border">CMD+K</span>
                <Search className="w-5 h-5 text-ink" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Record Overlay */}
      <motion.div 
        className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:block w-[450px]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: -50 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="bg-white p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-warm-border relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-coral scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-700" />
          <div className="space-y-10 text-left">
            <div className="flex justify-between items-start">
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-coral">FEATURED RECORD</span>
               <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse" />
                 <span className="font-mono text-[9px] text-muted-foreground">LIVE_ID_092</span>
               </div>
            </div>
            
            <div>
               <h3 className="text-5xl font-headline font-bold mb-2">Ganesh Chaturthi</h3>
               <p className="text-[11px] font-bold text-muted-foreground tracking-[0.3em] uppercase">India · Regional Scope</p>
            </div>

            <div className="pt-8 border-t border-warm-border space-y-4">
               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Operational Status</p>
               <div className="flex items-end justify-between">
                 <span className="text-3xl font-display italic">Partial Closure</span>
                 <span className="font-mono text-sm font-bold text-ink">05 SEP 2026</span>
               </div>
            </div>

            <Link href="/festivals/ganesh-chaturthi">
              <button className="w-full h-14 bg-ink text-ivory text-[10px] font-bold uppercase tracking-[0.3em] mt-8 hover:bg-coral transition-colors">
                Explore Intelligence →
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-[99] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}

/**
 * 03. TEMPORAL CONSTELLATION
 */
function Constellation() {
  return (
    <section className="py-48 px-8 md:px-16 bg-ink text-ivory relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-12 h-full opacity-10">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-ivory/20" />
          ))}
        </div>
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral">WORLD PULSE</p>
            <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              The density of <br/> <span className="italic font-display font-medium text-coral/80">human</span> celebration.
            </h2>
          </div>
          <p className="text-2xl text-ivory/60 max-w-xl leading-relaxed font-display">
            Every dot is a verified event. Every pulse is a localized closure. We monitor the grid so your life stays in sync with the planet's time.
          </p>
          <div className="flex gap-20 pt-8">
            <div className="space-y-1">
              <p className="text-6xl font-headline font-bold">142</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-ivory/40">Verified Today</p>
            </div>
            <div className="space-y-1">
              <p className="text-6xl font-headline font-bold text-coral">18</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-ivory/40">Active Closures</p>
            </div>
          </div>
        </div>

        <div className="relative aspect-square flex items-center justify-center">
          {/* Pulsing Visual */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-ivory/10"
          />
          <div className="w-4/5 h-4/5 relative bg-ivory/[0.02] rounded-full border border-ivory/5 backdrop-blur-3xl">
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
               <Globe className="w-48 h-48" />
             </div>
             {/* Interaction points */}
             {[15, 35, 55, 75].map((pos, i) => (
               <motion.div
                 key={i}
                 className="absolute w-3 h-3 bg-coral rounded-full shadow-[0_0_30px_rgba(233,67,104,0.6)] cursor-pointer"
                 style={{ left: `${pos}%`, top: `${pos + (i % 2 ? 10 : -10)}%` }}
                 animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                 transition={{ repeat: Infinity, duration: 3, delay: i * 0.8 }}
                 whileHover={{ scale: 2 }}
               />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 04. DIWALI NUANCE EXPLORER
 */
function NuanceExplorer() {
  const [active, setActive] = useState(DIWALI_NUANCE[0]);

  return (
    <section className="py-48 bg-ivory overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 space-y-24">
        <div className="text-center space-y-6">
           <h2 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter">One day. <br />Many worlds.</h2>
           <p className="text-2xl text-muted-foreground max-w-xl mx-auto font-display italic">The same festival, refracted through different borders and laws.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <div className="space-y-4">
            {DIWALI_NUANCE.map(n => (
              <button 
                key={n.id}
                onClick={() => setActive(n)}
                className={cn(
                  "w-full flex items-center justify-between p-10 border transition-all duration-500 text-left relative",
                  active.id === n.id ? "bg-ink text-ivory border-ink translate-x-4 shadow-2xl" : "bg-white border-warm-border hover:border-muted-foreground/30"
                )}
              >
                <div className="flex items-center gap-10">
                  <span className="font-mono text-xs opacity-40">{n.countryCode}</span>
                  <span className="font-display text-4xl font-bold">{n.country}</span>
                </div>
                <ArrowRight className={cn("w-6 h-6 transition-all duration-500", active.id === n.id ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0")} />
                {active.id === n.id && (
                  <motion.div layoutId="tab-underline" className="absolute left-0 w-1.5 h-1/2 bg-coral top-1/4" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={active.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="bg-white border border-warm-border p-16 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.1)] relative flex flex-col justify-between"
            >
              <div className="space-y-12">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-coral rounded-full" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-coral">LOCAL_NUANCE_REPORT</span>
                </div>
                
                <div className="space-y-4">
                   <h3 className="font-headline text-7xl font-bold tracking-tight">{active.name}</h3>
                   <p className="font-mono text-xl text-ink">{active.date}</p>
                </div>

                <div className="pt-12 border-t border-muted/10">
                   <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">INTELLIGENCE SUMMARY</p>
                   <p className="text-3xl font-display leading-[1.3] text-ink italic">
                      "{active.nuance}"
                   </p>
                </div>
              </div>

              <div className="mt-16 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 border-t border-warm-border pt-8">
                 <span>Source: Utsavs Protocol 9</span>
                 <div className="flex items-center gap-2">
                   <Timer className="w-3 h-3" />
                   <span>VERIFIED_2026</span>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/**
 * 05. PLANNING SLIDER
 */
function PlanningSlider() {
  return (
    <section className="py-48 bg-ink text-ivory overflow-hidden">
      <div className="px-8 md:px-16 mb-24">
         <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral mb-6">OPERATIONAL PLANNING</p>
         <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter">The next reason <br/> to depart.</h2>
      </div>

      <div className="flex gap-12 px-8 md:px-16 overflow-x-auto pb-20 no-scrollbar">
         {LONG_WEEKENDS_CINEMA.map((lw, i) => (
           <motion.div 
             key={i}
             whileHover={{ y: -20, backgroundColor: "#E94368", color: "#FFF" }}
             className="min-w-[480px] bg-ivory/[0.03] border border-ivory/10 p-16 space-y-16 group cursor-pointer transition-all duration-700 ease-[0.16, 1, 0.3, 1]"
           >
              <div className="flex justify-between items-start">
                 <span className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">{lw.label}</span>
                 <Wind className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="space-y-4">
                 <h3 className="font-headline text-5xl font-bold tracking-tight leading-none">{lw.title}</h3>
                 <p className="font-mono text-2xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">{lw.dates}</p>
              </div>
              <p className="text-lg font-medium leading-relaxed font-display italic opacity-40 group-hover:opacity-100 transition-opacity">
                "{lw.logic}"
              </p>
              <div className="pt-4">
                 <span className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-ivory/20 pb-2 group-hover:border-white transition-all">Explore Availability</span>
              </div>
           </motion.div>
         ))}
      </div>
    </section>
  );
}

/**
 * 06. FINAL CALL
 */
function Footer() {
  return (
    <footer className="py-48 px-8 md:px-16 bg-ivory border-t border-warm-border text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 z-0">
        <Image src={imageData.ghiHero.url} alt="Background" fill className="object-cover" />
      </div>
      
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        <h2 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85]">Understand <br /> the calendar.</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
           <Link href="/">
              <button className="h-20 px-12 bg-ink text-ivory text-[11px] font-bold uppercase tracking-[0.4em] rounded-none shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all">EXPLORE UTSAVS.COM</button>
           </Link>
           <Link href="/calendar">
              <button className="h-20 px-12 border-2 border-ink text-ink text-[11px] font-bold uppercase tracking-[0.4em] rounded-none hover:bg-ink hover:text-ivory transition-all">FULL CALENDAR VIEW</button>
           </Link>
        </div>
        
        <div className="pt-24 border-t border-warm-border flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] font-bold uppercase tracking-[0.5em]">
           <p>© 2026 UTSAVS · GLOBAL HOLIDAY INTELLIGENCE</p>
           <p>SYNCED_TO_GRID_REF_092</p>
        </div>
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
        <section className="py-48 px-8 md:px-16 border-y border-warm-border bg-white overflow-hidden">
           <div className="max-w-5xl mx-auto text-center space-y-12">
              <Layers className="w-12 h-12 mx-auto text-coral opacity-20" />
              <p className="text-4xl md:text-6xl font-display italic leading-tight text-muted-foreground/80 font-medium">
                "Utsavs is the infrastructure for the moments that matter. From deep cultural ritual to precision global logistics."
              </p>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
