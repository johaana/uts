'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, MapPin, Sparkles, Activity, Timer, Layers, Zap, Plane, Globe, ShieldCheck, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 00. PROTOTYPE DATA ENGINE
 */
const ESCAPE_MATRIX = {
  IN: [
    { title: "Diwali Bridge", date: "29 OCT", days: "4D", impact: "HIGH", label: "National" },
    { title: "Holi Escape", date: "04 MAR", days: "5D", impact: "MED", label: "Regional" },
  ],
  SG: [
    { title: "Lunar New Year", date: "29 JAN", days: "4D", impact: "CRITICAL", label: "Statutory" },
    { title: "National Day", date: "07 AUG", days: "4D", impact: "HIGH", label: "Statutory" },
  ],
  JP: [
    { title: "Golden Week", date: "29 APR", days: "7D", impact: "CRITICAL", label: "National" },
    { title: "Obon Season", date: "13 AUG", days: "4D", impact: "HIGH", label: "Cultural" },
  ],
  UK: [
    { title: "Bank Holiday", date: "25 MAY", days: "3D", impact: "LOW", label: "Bank" },
    { title: "Easter Break", date: "03 APR", days: "4D", impact: "HIGH", label: "National" },
  ]
};

const PULSE_LOG = [
  { region: "ASIA", name: "Ganesh Chaturthi", code: "IN", status: "Active", intensity: 92 },
  { region: "AMER", name: "Labor Day", code: "US", status: "Pending", intensity: 10 },
  { region: "EURO", name: "Oktoberfest Setup", code: "DE", status: "Observance", intensity: 45 },
  { region: "SEAS", name: "Mooncake Prep", code: "CN", status: "Cultural", intensity: 60 },
];

/**
 * 01. DASHBOARD HEADER
 */
function Header() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-GB', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    update();
    const inv = setInterval(update, 1000);
    return () => clearInterval(inv);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 md:px-10 bg-ivory/80 backdrop-blur-md border-b border-warm-border/40 pointer-events-none">
      <div className="flex items-center gap-10 pointer-events-auto">
        <Link href="/global-holiday-intelligence" className="flex flex-col group">
          <span className="font-headline text-2xl font-bold tracking-tight text-ink group-hover:text-coral transition-colors">UTSAVS</span>
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-coral -mt-1">INTELLIGENCE</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
           <div className="flex items-center gap-2">
             <div className="w-1 h-1 bg-coral rounded-full animate-pulse" />
             <span>SYNC_LIVE: {time}</span>
           </div>
           <span>UTC+05:30</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6 pointer-events-auto">
        <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-ink transition-all">
          ← UTSAVS.COM
        </Link>
        <button className="h-9 px-5 bg-ink text-ivory text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-coral transition-all shadow-sm">
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
  const [activeGeo, setActiveGeo] = useState<keyof typeof ESCAPE_MATRIX>('IN');
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <section className="relative min-h-screen pt-20 pb-12 px-6 md:px-10 flex flex-col bg-ivory overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03] pointer-events-none grayscale">
        <Image src="https://picsum.photos/seed/ghi-tight-1/1200/1600" alt="Background" fill className="object-cover" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: INTENT & PLANNING (5 Cols) */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-coral flex items-center gap-2">
              <Timer className="w-3 h-3" /> TEMPORAL_INSTRUMENT_V3
            </p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-ink leading-[0.95]">
              The world <br /> <span className="italic font-display font-medium text-coral">actually</span> in sync.
            </h1>
          </div>

          {/* SEARCH COMMAND */}
          <div className="relative group">
            <div className={cn(
              "absolute -left-1 top-0 bottom-0 w-1 bg-coral/20 transition-all duration-500",
              searchFocused ? "h-full bg-coral" : "h-1/3"
            )} />
            <input 
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder="Search holiday, place, or ask: 'When is the next break?'"
              className="w-full h-14 bg-white border border-warm-border text-lg font-display focus:outline-none focus:border-ink transition-all placeholder:text-muted-foreground/30 px-6 shadow-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Search className="w-4 h-4 text-ink/20" />
            </div>
          </div>

          {/* ESCAPE MATRIX - HIGH DENSITY */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-warm-border pb-3">
               <h2 className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink flex items-center gap-2">
                 <Plane className="w-3 h-3" /> FIND YOUR NEXT ESCAPE
               </h2>
               <div className="flex gap-3">
                  {(['IN', 'SG', 'JP', 'UK'] as const).map(c => (
                    <button 
                      key={c} 
                      onClick={() => setActiveGeo(c)}
                      className={cn("text-[9px] font-bold transition-all px-1 pb-0.5", activeGeo === c ? "text-coral border-b border-coral" : "text-muted-foreground/30 hover:text-ink")}
                    >
                      {c}
                    </button>
                  ))}
               </div>
            </div>

            <div className="grid gap-2">
               {ESCAPE_MATRIX[activeGeo].map((item, i) => (
                 <motion.div 
                   key={item.title + activeGeo}
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.05 }}
                   className="flex items-center gap-4 p-4 bg-white border border-warm-border hover:border-coral transition-all cursor-pointer group rounded-sm"
                 >
                    <div className="w-12 flex flex-col items-center border-r border-warm-border pr-4">
                       <span className="font-mono text-xs font-bold text-ink">{item.date}</span>
                       <span className="text-[8px] font-bold text-coral">{item.days}</span>
                    </div>
                    <div className="flex-1">
                       <h3 className="text-sm font-bold uppercase tracking-tight">{item.title}</h3>
                       <p className="text-[9px] text-muted-foreground font-mono uppercase">{item.label} · IMPACT: {item.impact}</p>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="text-[8px] font-bold uppercase text-coral">Details</span>
                       <ArrowRight className="w-3 h-3 text-coral" />
                    </div>
                 </motion.div>
               ))}
               <button className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60 hover:text-ink pt-2 transition-colors">View full {activeGeo} schedule →</button>
            </div>
          </div>
        </div>

        {/* RIGHT: DATA MIRROR (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* THE RECORD */}
          <div className="bg-white p-8 md:p-12 shadow-[0_32px_64px_-24px_rgba(23,21,26,0.08)] border border-warm-border relative overflow-hidden group rounded-sm">
             <div className="absolute top-0 left-0 w-full h-1 bg-coral/5 group-hover:bg-coral transition-colors duration-700" />
             <div className="absolute top-4 right-4 font-mono text-[8px] opacity-20">REC_ID: DW-IN-2026</div>
             
             <div className="space-y-10">
                <div className="flex justify-between items-start">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-coral rounded-full animate-pulse shadow-[0_0_10px_#E94368]" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-coral">LIVE_RECORD_092</span>
                        <span className="text-[8px] font-mono text-muted-foreground">SYNC_STABILITY: 100%</span>
                      </div>
                   </div>
                </div>

                <div>
                   <h3 className="text-6xl md:text-8xl font-headline font-bold tracking-tight text-ink mb-1">Diwali</h3>
                   <p className="text-[11px] font-bold text-muted-foreground tracking-[0.4em] uppercase">INDIA · NATIONAL · PUBLIC HOLIDAY</p>
                </div>

                <div className="grid grid-cols-2 gap-12 py-8 border-y border-warm-border/60">
                   <div className="space-y-2">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Local Date</p>
                      <p className="font-display text-2xl font-bold text-ink">29 OCT 2026</p>
                      <p className="text-[8px] font-mono opacity-40 uppercase">Model: Lunisolar</p>
                   </div>
                   <div className="space-y-2 text-right">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Classification</p>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-coral">Religious</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-coral">Cultural</span>
                      </div>
                   </div>
                </div>

                <div className="space-y-4">
                   <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Intelligence Nuance</p>
                   <p className="text-xl font-display italic leading-snug text-ink/80 pr-6">
                     "The North lights lamps for Rama's return; the South cleanses for Krishna's victory over Narakasura. Operational status: Total commercial shutdown."
                   </p>
                </div>

                <div className="pt-6 flex items-center justify-between border-t border-warm-border/30">
                   <div className="flex gap-3">
                      {['Govt_Verified', 'Regional_Aware', 'Primary_Source'].map(t => (
                        <span key={t} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-ivory border border-warm-border rounded-sm text-muted-foreground">{t}</span>
                      ))}
                   </div>
                   <button className="text-[10px] font-bold uppercase tracking-widest text-ink hover:text-coral transition-colors flex items-center gap-2 group/btn">
                     Full Context <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
             </div>
          </div>

          {/* WORLD PULSE TICKER - HIGH DENSITY */}
          <div className="bg-ink text-ivory rounded-sm overflow-hidden flex flex-col">
             <div className="px-6 py-4 flex items-center justify-between border-b border-white/5">
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-coral">WORLD_PULSE_STREAM</span>
                <div className="flex items-center gap-4">
                  <Activity className="w-3 h-3 text-coral animate-pulse" />
                  <span className="font-mono text-[8px] opacity-40">AUTO_REFRESH: 60s</span>
                </div>
             </div>
             <div className="divide-y divide-white/5">
                {PULSE_LOG.map((feed, i) => (
                  <div key={i} className="px-6 py-3.5 flex items-center gap-6 group cursor-pointer hover:bg-white/5 transition-colors">
                    <span className="font-mono text-[9px] opacity-20 w-10">{feed.region}</span>
                    <div className={cn("w-1.5 h-1.5 rounded-full", feed.status === "Active" ? "bg-coral shadow-[0_0_8px_#E94368]" : "bg-ivory/10")} />
                    <span className="text-xs font-bold uppercase tracking-widest flex-1 group-hover:text-coral transition-colors">{feed.name}</span>
                    <div className="flex items-center gap-4">
                       <div className="hidden md:flex items-center gap-2">
                          <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                             <div className="h-full bg-coral" style={{ width: `${feed.intensity}%` }} />
                          </div>
                          <span className="font-mono text-[8px] opacity-30">{feed.intensity}%</span>
                       </div>
                       <span className="font-mono text-[9px] opacity-20">{feed.code}</span>
                    </div>
                  </div>
                ))}
             </div>
             <div className="px-6 py-3 bg-white/5 flex items-center justify-center text-[9px] font-bold uppercase tracking-[0.3em] opacity-40">
                End of Live Stream
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 03. CALENDAR INFRASTRUCTURE SECTION
 */
function Infrastructure() {
  const points = [
    { title: "Source-Aware", icon: Layers, desc: "Direct integration with local government and municipal notifications." },
    { title: "Verification-Trail", icon: Activity, desc: "Algorithmic validation of lunar and seasonal lunisolar cycles." },
    { title: "Jurisdiction-Certainty", icon: MapPin, desc: "Local municipal rules indexed to the individual city level." },
    { title: "Impact-Modeling", icon: Zap, desc: "Closure density mapped across finance, logistics, and retail sectors." }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-white border-y border-warm-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {points.map((p, i) => (
          <div key={i} className="space-y-4">
             <div className="w-8 h-8 flex items-center justify-center text-coral bg-ivory rounded-sm border border-warm-border/50">
                <p.icon className="w-5 h-5" />
             </div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink">{p.title}</h4>
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
    <footer className="py-20 px-6 md:px-10 bg-ivory text-center">
       <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl font-headline font-bold tracking-tight">Understand the calendar.</h2>
            <p className="text-base text-muted-foreground font-display italic">"High-precision global intelligence for humans and systems."</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-warm-border">
             <button className="btn-ink h-12 px-10 text-[10px] font-bold uppercase tracking-widest rounded-sm">EXPLORE UTSAVS.COM</button>
             <button className="h-12 px-10 border border-ink text-ink text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-ink hover:text-ivory transition-all">API PREVIEW</button>
          </div>
          <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-muted-foreground/30 pt-10">© 2026 UTSAVS · GLOBAL HOLIDAY INTELLIGENCE · PROTOTYPE_V3</p>
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
        <section className="py-40 px-6 md:px-10 bg-white flex items-center justify-center border-b border-warm-border">
           <div className="max-w-3xl text-center space-y-10">
              <div className="flex items-center justify-center gap-4 opacity-20">
                <div className="w-12 h-[1px] bg-ink" />
                <Sparkles className="w-8 h-8" />
                <div className="w-12 h-[1px] bg-ink" />
              </div>
              <p className="text-4xl md:text-6xl font-display font-medium italic tracking-tight text-ink leading-tight">
                "Utsavs is the infrastructure for the moments that matter. From deep cultural ritual to precision global logistics."
              </p>
              <div className="flex items-center justify-center gap-6">
                 <Link href="/about" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-coral transition-colors">Our Story</Link>
                 <Link href="/api" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-coral transition-colors">Intelligence Model</Link>
              </div>
           </div>
        </section>
      </main>
      <Footer />
      
      {/* Subtle Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
