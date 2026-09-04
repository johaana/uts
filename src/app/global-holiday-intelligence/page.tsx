'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, MapPin, Sparkles, Wind, Activity, Timer, Layers, Zap, Plane, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DIWALI_NUANCE, ESCAPE_DATA, PULSE_FEED } from '@/lib/ghi-data';
import imageData from '@/app/lib/placeholder-images.json';

/**
 * 01. DASHBOARD HEADER
 */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-8 md:px-12 pointer-events-none">
      <div className="flex items-center gap-8 pointer-events-auto">
        <Link href="/global-holiday-intelligence" className="flex flex-col group">
          <span className="font-headline text-2xl font-bold tracking-tight text-ink group-hover:text-coral transition-colors">UTSAVS</span>
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-coral -mt-1">INTELLIGENCE</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 border-l border-warm-border pl-8">
           <span>VERIFIED_2026</span>
           <div className="flex items-center gap-2">
             <div className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
             <span>UTC_SYNCED</span>
           </div>
        </div>
      </div>
      
      <div className="flex items-center gap-8 pointer-events-auto">
        <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-ink transition-all">
          ← BACK TO SITE
        </Link>
        <button className="h-9 px-5 bg-ink text-ivory text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-coral transition-all">
          API PREVIEW
        </button>
      </div>
    </header>
  );
}

/**
 * 02. DASHBOARD HERO — THE CONTROL CENTER
 */
function DashboardHero() {
  const [country, setCountry] = useState<'IN' | 'SG' | 'JP'>('IN');
  const [activeRecord, setActiveRecord] = useState(DIWALI_NUANCE[0]);

  return (
    <section className="relative min-h-screen pt-24 pb-12 px-8 md:px-12 flex flex-col justify-between overflow-hidden bg-ivory">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-5 pointer-events-none">
        <Image src={imageData.ghiHero.url} alt="Ambient" fill className="object-cover grayscale" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-start h-full">
        {/* LEFT: PRIMARY ACTION & ESCAPE MATRIX */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-coral">TEMPORAL INSTRUMENT</p>
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-ink leading-[0.9]">
              The world <br /> <span className="italic font-display font-medium text-coral">actually</span> in sync.
            </h1>
          </div>

          {/* GLOBAL SEARCH COMMAND */}
          <div className="max-w-2xl relative group">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-warm-border group-focus-within:bg-coral transition-colors" />
            <input 
              placeholder="Search holiday, place, or ask: 'When is the next break?'"
              className="w-full h-16 bg-white border-warm-border border-b text-xl font-display focus:outline-none focus:border-ink transition-all placeholder:text-muted-foreground/30 px-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-ink/30" />
            </div>
          </div>

          {/* ESCAPE MATRIX */}
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center justify-between border-b border-warm-border pb-4">
               <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink">Find Your Next Escape</h2>
               <div className="flex gap-4">
                  {(['IN', 'SG', 'JP'] as const).map(c => (
                    <button 
                      key={c} 
                      onClick={() => setCountry(c)}
                      className={cn("text-[10px] font-bold transition-all", country === c ? "text-coral border-b border-coral" : "text-muted-foreground/40 hover:text-ink")}
                    >
                      {c}
                    </button>
                  ))}
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
               {ESCAPE_DATA[country].map((escape, i) => (
                 <motion.div 
                   key={escape.title + country}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="p-6 bg-white border border-warm-border hover:border-coral transition-all cursor-pointer group shadow-sm"
                 >
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{escape.days}</span>
                       <Plane className="w-3 h-3 text-coral opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-2xl font-headline font-bold mb-1">{escape.title}</h3>
                    <p className="font-mono text-xs text-ink/60">{escape.dates}</p>
                    <div className="mt-4 pt-4 border-t border-warm-border flex items-center justify-between">
                       <span className="text-[9px] font-bold uppercase tracking-tighter text-muted-foreground">{escape.requirement}</span>
                       <span className="text-[9px] font-bold uppercase tracking-widest text-coral opacity-0 group-hover:opacity-100 transition-opacity">Details →</span>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        {/* RIGHT: FEATURED RECORD & LIVE PULSE */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* THE RECORD */}
          <div className="bg-white p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-warm-border relative overflow-hidden group rounded-sm">
             <div className="absolute top-0 left-0 w-1 h-full bg-coral/10 group-hover:bg-coral transition-colors duration-700" />
             
             <div className="space-y-8">
                <div className="flex justify-between items-start">
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-coral">LIVE_RECORD_092</span>
                   </div>
                   <span className="font-mono text-[9px] text-muted-foreground uppercase">{activeRecord.id}</span>
                </div>

                <div>
                   <h3 className="text-5xl font-headline font-bold tracking-tight mb-1">{activeRecord.name}</h3>
                   <p className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">{activeRecord.country} · {activeRecord.status}</p>
                </div>

                <div className="grid grid-cols-2 gap-8 py-6 border-y border-warm-border">
                   <div className="space-y-1">
                      <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Local Date</p>
                      <p className="font-mono text-sm font-bold text-ink">{activeRecord.date}</p>
                   </div>
                   <div className="space-y-1 text-right">
                      <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Classification</p>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-coral">{activeRecord.type}</p>
                   </div>
                </div>

                <div className="space-y-3">
                   <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Intelligence Nuance</p>
                   <p className="text-base font-display italic leading-snug">
                     "{activeRecord.nuance}"
                   </p>
                </div>

                <div className="pt-4 flex items-center justify-between">
                   <div className="flex gap-2">
                      {['Government', 'Local', 'Verified'].map(t => (
                        <span key={t} className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 bg-ivory rounded-full text-muted-foreground">{t}</span>
                      ))}
                   </div>
                   <button className="text-[10px] font-bold uppercase tracking-widest text-ink hover:text-coral transition-colors">Details →</button>
                </div>
             </div>
          </div>

          {/* WORLD PULSE TICKER */}
          <div className="bg-ink text-ivory p-8 rounded-sm space-y-6">
             <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-coral">WORLD_PULSE_FEED</span>
                <Activity className="w-4 h-4 text-coral animate-pulse" />
             </div>
             <div className="space-y-4">
                {PULSE_FEED.map((feed, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer" onClick={() => {
                    // Simulation: Update featured record if it were India
                    if(feed.code === 'IN') setActiveRecord(DIWALI_NUANCE[0]);
                  }}>
                    <span className="font-mono text-[10px] opacity-30 w-12">{feed.region}</span>
                    <div className={cn("w-1.5 h-1.5 rounded-full transition-colors", feed.active ? "bg-coral shadow-[0_0_10px_#E94368]" : "bg-ivory/10")} />
                    <span className="text-xs font-bold uppercase tracking-widest flex-1 group-hover:text-coral transition-colors">{feed.label}</span>
                    <span className="font-mono text-[9px] opacity-20">{feed.code}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[99] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}

/**
 * 03. CALENDAR INFRASTRUCTURE SECTION
 */
function Infrastructure() {
  const points = [
    { title: "Source-Aware", icon: Layers, desc: "Direct integration with local government notifications." },
    { title: "Verification-Trail", icon: Activity, desc: "Algorithmic validation of lunar and lunisolar cycles." },
    { title: "Jurisdiction-Certainty", icon: MapPin, desc: "Local municipal rules indexed to the city level." },
    { title: "Impact-Modeling", icon: Zap, desc: "Operational closure density mapped across sectors." }
  ];

  return (
    <section className="py-32 px-8 md:px-12 bg-white border-y border-warm-border">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-12">
        {points.map((p, i) => (
          <div key={i} className="space-y-6 text-left">
             <div className="w-8 h-8 flex items-center justify-center text-coral mb-4">
                <p.icon className="w-6 h-6" />
             </div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink">{p.title}</h4>
             <p className="text-sm text-muted-foreground leading-relaxed font-ui font-medium">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * 04. FOOTER
 */
function Footer() {
  return (
    <footer className="py-24 px-8 md:px-12 bg-ivory text-center">
       <div className="max-w-2xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl font-headline font-bold tracking-tight">Understand the calendar.</h2>
            <p className="text-lg text-muted-foreground font-display italic">"Structured enough for systems. Meaningful enough for people."</p>
          </div>
          <div className="flex justify-center gap-8 pt-8 border-t border-warm-border">
             <button className="btn-ink h-14 px-10 text-[10px] font-bold uppercase tracking-widest rounded-sm">EXPLORE UTSAVS.COM</button>
             <button className="h-14 px-10 border border-ink text-ink text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-ink hover:text-ivory transition-all">API PREVIEW</button>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-muted-foreground/30 pt-12">© 2026 UTSAVS · GLOBAL HOLIDAY INTELLIGENCE</p>
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
      <Header />
      <main>
        <DashboardHero />
        <Infrastructure />
        
        {/* Philosophy Break */}
        <section className="py-48 px-8 md:px-12 bg-white flex items-center justify-center border-b border-warm-border">
           <div className="max-w-3xl text-center space-y-12">
              <Sparkles className="w-12 h-12 mx-auto text-coral/20" />
              <p className="text-5xl md:text-7xl font-display font-medium italic tracking-tight text-ink leading-tight">
                "Utsavs is the infrastructure for the moments that matter. From deep cultural ritual to precision global logistics."
              </p>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
