'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, MapPin, Sparkles, Activity, Timer, Layers, Zap, Plane, Globe, ShieldCheck, Clock, Bot, Camera, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 00. ENHANCED TEMPORARY DATA — VISUAL INTELLIGENCE
 */
const ESCAPE_MATRIX = {
  IN: [
    { title: "Diwali Bridge", date: "29 OCT", days: "4D", impact: "HIGH", label: "National", image: "https://picsum.photos/seed/uts-dw/800/600" },
    { title: "Holi Escape", date: "04 MAR", days: "5D", impact: "MED", label: "Regional", image: "https://picsum.photos/seed/uts-hl/800/600" },
  ],
  SG: [
    { title: "Lunar New Year", date: "29 JAN", days: "4D", impact: "CRITICAL", label: "Statutory", image: "https://picsum.photos/seed/uts-lny/800/600" },
    { title: "National Day", date: "07 AUG", days: "4D", impact: "HIGH", label: "Statutory", image: "https://picsum.photos/seed/uts-nd/800/600" },
  ],
  JP: [
    { title: "Golden Week", date: "29 APR", days: "7D", impact: "CRITICAL", label: "National", image: "https://picsum.photos/seed/uts-gw/800/600" },
    { title: "Obon Season", date: "13 AUG", days: "4D", impact: "HIGH", label: "Cultural", image: "https://picsum.photos/seed/uts-ob/800/600" },
  ],
  UK: [
    { title: "Bank Holiday", date: "25 MAY", days: "3D", impact: "LOW", label: "Bank", image: "https://picsum.photos/seed/uts-bh/800/600" },
    { title: "Easter Break", date: "03 APR", days: "4D", impact: "HIGH", label: "National", image: "https://picsum.photos/seed/uts-eb/800/600" },
  ]
};

const FEATURED_RECORDS = [
  { 
    id: 'DW-IN', 
    name: 'Diwali', 
    date: '29 OCT 2026', 
    country: 'India', 
    scope: 'National', 
    image: 'https://i.postimg.cc/SjF8HhM1/Diwali2.jpg',
    nuance: '"The North lights lamps for Rama\'s return; the South cleanses for Krishna\'s victory over Narakasura. Operational status: Total commercial shutdown."',
    category: ['Religious', 'Cultural'],
    impact: 'High'
  },
  { 
    id: 'LNY-CN', 
    name: 'Lunar New Year', 
    date: '29 JAN 2026', 
    country: 'China', 
    scope: 'Global', 
    image: 'https://picsum.photos/seed/uts-lny-hero/1200/800',
    nuance: '"The Year of the Horse begins. A 15-day sequence of reunion and renewal. Global logistical hubs operate at 40% capacity."',
    category: ['Cultural', 'Statutory'],
    impact: 'Critical'
  },
  { 
    id: 'TG-US', 
    name: 'Thanksgiving', 
    date: '26 NOV 2026', 
    country: 'USA', 
    scope: 'National', 
    image: 'https://picsum.photos/seed/uts-tg-hero/1200/800',
    nuance: '"A 4-day operational gap in North American markets. National holiday centered on harvest gratitude and family reunion."',
    category: ['Public', 'Cultural'],
    impact: 'National'
  }
];

const CULTURAL_SEASONS = [
  { name: "Autumn of Light", region: "South Asia", months: "SEP—NOV", image: "https://picsum.photos/seed/uts-autumn/400/600", desc: "A transition from monsoon to fire, marked by Diwali and Dussehra." },
  { name: "The Lunar Dawn", region: "East Asia", months: "JAN—FEB", image: "https://picsum.photos/seed/uts-spring/400/600", desc: "The world's largest human migration begins as the moon resets." },
  { name: "Solstice Fires", region: "Northern Europe", months: "DEC—JAN", image: "https://picsum.photos/seed/uts-winter/400/600", desc: "Chasing the darkness with ancient fire rituals and midwinter light." },
  { name: "Equinox Renewal", region: "Global", months: "MAR—APR", image: "https://picsum.photos/seed/uts-equinox/400/600", desc: "A planet-wide celebration of spring and spiritual rebirth." },
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
    <header className="fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-6 md:px-10 bg-ivory/80 backdrop-blur-md border-b border-warm-border/40">
      <div className="flex items-center gap-10">
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
      
      <div className="flex items-center gap-6">
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
  const [recordIndex, setRecordIndex] = useState(0);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    if (searchFocused) return;
    const interval = setInterval(() => {
      setRecordIndex((prev) => (prev + 1) % FEATURED_RECORDS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [searchFocused]);

  const activeRecord = FEATURED_RECORDS[recordIndex];

  return (
    <section className="relative min-h-screen pt-20 pb-12 px-6 md:px-10 flex flex-col bg-ivory overflow-hidden">
      {/* Editorial Background Texture */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.04] pointer-events-none grayscale mix-blend-multiply">
        <Image src="https://picsum.photos/seed/ghi-texture-1/1920/1080" alt="Texture" fill className="object-cover" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: INTENT & PLANNING (5 Cols) */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
               <div className="h-[1px] w-8 bg-coral" />
               <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-coral">TEMPORAL_INSTRUMENT_V3</p>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-ink leading-[0.92]">
              The world <br /> <span className="italic font-display font-medium text-coral underline underline-offset-4 decoration-coral/20">actually</span> in sync.
            </h1>
            <p className="text-lg text-muted-foreground font-display italic">
              "Utsavs understands when, where, and why the world stops."
            </p>
          </div>

          {/* SEARCH COMMAND */}
          <div className="space-y-3">
             <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-ink ml-1">Universal Search</label>
             <div className="relative group">
                <div className={cn(
                  "absolute -left-1 top-0 bottom-0 w-1 bg-coral transition-all duration-500",
                  searchFocused ? "h-full" : "h-1/4 opacity-20"
                )} />
                <input 
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Ask: 'Which holidays affect Singapore next month?'"
                  className="w-full h-16 bg-white border border-warm-border text-xl font-display focus:outline-none focus:border-ink transition-all placeholder:text-muted-foreground/20 px-8 shadow-sm"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
                  <div className="h-4 w-px bg-warm-border" />
                  <Bot className="w-5 h-5 text-coral/40" />
                </div>
             </div>
             <div className="flex flex-wrap gap-4 pt-2">
                {['India vs UK', 'Long weekends 2027', 'Why does Diwali move?'].map(q => (
                  <button key={q} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-ink transition-colors underline underline-offset-4 decoration-warm-border">
                    {q}
                  </button>
                ))}
             </div>
          </div>

          {/* ESCAPE MATRIX - HIGH DENSITY */}
          <div className="space-y-6 pt-6 border-t border-warm-border/40">
            <div className="flex items-center justify-between">
               <h2 className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink flex items-center gap-2">
                 <Compass className="w-3 h-3 text-coral" /> PLANNING MATRIX
               </h2>
               <div className="flex gap-4">
                  {(['IN', 'SG', 'JP', 'UK'] as const).map(c => (
                    <button 
                      key={c} 
                      onClick={() => setActiveGeo(c)}
                      className={cn("text-[10px] font-bold tracking-widest transition-all", activeGeo === c ? "text-coral border-b border-coral" : "text-muted-foreground/30 hover:text-ink")}
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
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-center gap-4 p-4 bg-white border border-warm-border hover:border-coral transition-all cursor-pointer group rounded-sm"
                 >
                    <div className="relative w-14 h-14 bg-ivory rounded-sm overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                       <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                       <h3 className="text-sm font-bold uppercase tracking-tight">{item.title}</h3>
                       <p className="text-[9px] text-muted-foreground font-mono uppercase">DATE: {item.date} · IMPACT: {item.impact}</p>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                       <span className="text-[8px] font-bold uppercase text-coral">Plan</span>
                       <ArrowRight className="w-3 h-3 text-coral" />
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        {/* RIGHT: THE RECORD — NOW WITH VISUAL INTELLIGENCE (7 Cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeRecord.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-warm-border relative overflow-hidden group shadow-[0_48px_96px_-24px_rgba(23,21,26,0.1)] rounded-sm"
            >
              {/* Metadata Overlay */}
              <div className="absolute top-0 right-0 p-8 z-20 text-right pointer-events-none">
                 <p className="font-mono text-[8px] text-ink/20 uppercase tracking-widest leading-relaxed">
                   REC_ID: {activeRecord.id}<br />
                   IMG_REF: UTS_V092<br />
                   SYNC_RES: 100%
                 </p>
              </div>

              {/* Visual Slot */}
              <div className="relative h-64 md:h-[400px] overflow-hidden">
                <Image src={activeRecord.image} alt={activeRecord.name} fill className="object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                
                {/* Live Status */}
                <div className="absolute top-8 left-8 flex items-center gap-2 px-3 py-1 bg-ink text-ivory rounded-full">
                  <div className="w-1.5 h-1.5 bg-coral rounded-full animate-pulse shadow-[0_0_10px_#E94368]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em]">INTELLIGENCE_RECORD</span>
                </div>
              </div>

              <div className="p-10 md:p-16 pt-0 space-y-12">
                 <div className="space-y-2">
                    <h3 className="text-6xl md:text-8xl font-headline font-bold tracking-tight text-ink">{activeRecord.name}</h3>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground tracking-[0.4em] uppercase">
                       <span>{activeRecord.country}</span>
                       <div className="w-1 h-1 bg-warm-border rounded-full" />
                       <span>{activeRecord.scope} Scope</span>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-12 py-8 border-y border-warm-border/40">
                    <div className="space-y-3">
                       <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Local Presence</p>
                       <p className="font-display text-2xl font-bold text-ink leading-none">{activeRecord.date}</p>
                       <p className="text-[8px] font-mono text-muted-foreground/60 uppercase">DETERMINATION: CONFIRMED</p>
                    </div>
                    <div className="space-y-3 text-right">
                       <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Classification</p>
                       <div className="flex flex-col items-end gap-1">
                         {activeRecord.category.map(tag => (
                           <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-coral">{tag}</span>
                         ))}
                       </div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Zap className="w-3 h-3" /> Intelligence Nuance
                    </p>
                    <p className="text-2xl font-display italic leading-snug text-ink/80 pr-12">
                      {activeRecord.nuance}
                    </p>
                 </div>

                 <div className="pt-8 flex items-center justify-between border-t border-warm-border/20">
                    <div className="flex gap-4">
                       {['Primary_Source', 'Govt_Verified'].map(t => (
                         <span key={t} className="text-[8px] font-bold uppercase tracking-widest px-3 py-1.5 bg-ivory border border-warm-border rounded-sm text-muted-foreground">{t}</span>
                       ))}
                    </div>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-ink hover:text-coral transition-colors flex items-center gap-2 group/btn">
                      Full Exploration <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
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
 * 03. CULTURAL SEASONS — VISUAL EXPLORER
 */
function CulturalSeasons() {
  return (
    <section className="py-32 px-6 md:px-10 bg-white border-y border-warm-border overflow-hidden">
       <div className="mb-16 space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-coral text-center">Visual Discovery</p>
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-center">The rhythm of the planet.</h2>
       </div>

       <div className="flex gap-6 overflow-x-auto pb-12 snap-x px-4 no-scrollbar">
          {CULTURAL_SEASONS.map((season, i) => (
            <motion.div 
              key={season.name}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-80 snap-start space-y-6"
            >
               <div className="relative aspect-[3/4] rounded-sm overflow-hidden group">
                  <Image src={season.image} alt={season.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2">{season.region}</p>
                    <h4 className="text-2xl font-display italic font-bold">{season.name}</h4>
                  </div>
               </div>
               <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-coral">{season.months}</span>
                    <span className="text-[9px] font-mono text-muted-foreground">REF: 00{i+1}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-ui font-medium">{season.desc}</p>
               </div>
            </motion.div>
          ))}
       </div>
    </section>
  );
}

/**
 * 04. INFRASTRUCTURE & TRUST
 */
function Infrastructure() {
  const points = [
    { title: "Source-Aware", icon: Layers, desc: "Direct integration with official municipal notifications." },
    { title: "Jurisdiction-Certainty", icon: MapPin, desc: "Local municipal rules indexed at the individual city level." },
    { title: "Impact-Modeling", icon: Zap, desc: "Closure density mapped across finance, logistics, and retail." },
    { title: "Visual-Context", icon: Camera, desc: "Human-verified editorial imagery for every global event." }
  ];

  return (
    <section className="py-32 px-6 md:px-10 bg-ivory">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16">
        {points.map((p, i) => (
          <div key={i} className="space-y-6 group cursor-default">
             <div className="w-10 h-10 flex items-center justify-center text-coral bg-white border border-warm-border/60 rounded-sm group-hover:border-coral transition-colors duration-500">
                <p.icon className="w-5 h-5" />
             </div>
             <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-ink">{p.title}</h4>
             <p className="text-sm text-muted-foreground leading-relaxed font-ui font-medium">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * 05. FOOTER
 */
function Footer() {
  return (
    <footer className="py-24 px-6 md:px-10 bg-white text-center border-t border-warm-border">
       <div className="max-w-2xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Time, decoded.</h2>
            <p className="text-base text-muted-foreground font-display italic">"The infrastructure for the moments that matter."</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="h-14 px-12 bg-ink text-ivory text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-coral transition-all">JOIN API PREVIEW</button>
             <button className="h-14 px-12 border border-ink text-ink text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-ink hover:text-ivory transition-all">EXPLORE UTSAVS.COM</button>
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-muted-foreground/30 pt-12">© 2026 UTSAVS · GLOBAL HOLIDAY INTELLIGENCE · PROTOTYPE_V4</p>
       </div>
    </footer>
  );
}

export default function GHIPageV4() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div className="min-h-screen bg-ivory" />;

  return (
    <div className="min-h-screen bg-ivory text-ink selection:bg-coral/20 font-sans antialiased">
      <Header />
      <main>
        <DashboardHero />
        <CulturalSeasons />
        
        {/* Big Product Philosophy */}
        <section className="py-48 px-6 md:px-10 bg-white border-b border-warm-border flex items-center justify-center">
           <div className="max-w-4xl text-center space-y-12">
              <Sparkles className="w-10 h-10 mx-auto text-coral/30" />
              <p className="text-4xl md:text-7xl font-display font-medium italic tracking-tight text-ink leading-[1.1]">
                "Beyond the date. We understand the <span className="text-coral">soul</span> of the calendar."
              </p>
              <div className="h-[1px] w-24 bg-coral/20 mx-auto" />
              <p className="text-sm text-muted-foreground font-mono uppercase tracking-[0.4em]">Structured · Verified · Visual · Human</p>
           </div>
        </section>

        <Infrastructure />
      </main>
      <Footer />
      
      {/* Film Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
