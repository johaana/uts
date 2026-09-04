'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { format, parse, isFuture, isToday, startOfDay, addDays } from 'date-fns';
import { allEvents, internationalEvents } from '@/lib/festival-data';
import { DIWALI_NUANCE, LONG_WEEKENDS_PROTOTYPE, CountryNuance } from '@/lib/ghi-data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, ArrowRight, Info, Calendar as CalendarIcon, MapPin, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * GHI Header: Minimal and focused
 */
function GHIHeader() {
  return (
    <header className="h-16 border-b border-[#DED9D0] bg-[#F7F4EE] sticky top-0 z-50 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-[#17151A]">
          UTSAVS
        </Link>
        <span className="hidden sm:inline text-[9px] font-bold uppercase tracking-[0.2em] text-[#6D6870] mt-1 border-l border-[#DED9D0] pl-4">
          Global Holiday Intelligence
        </span>
      </div>
      <Link href="/" className="text-[11px] font-bold uppercase tracking-widest text-[#6D6870] hover:text-[#E94368] transition-colors">
        ← utsavs.com
      </Link>
    </header>
  );
}

/**
 * Hero Section: "Today, Actually"
 */
function GHIHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(false);
  const now = startOfDay(new Date());

  useEffect(() => setIsClient(true), []);

  const todayEvent = useMemo(() => {
    const combined = [...allEvents, ...internationalEvents];
    const match = combined.find(e => {
      const d = parse(e.date.split(' - ')[0], 'MMM dd, yyyy', new Date());
      return isToday(d);
    });
    if (match) return { ...match, isToday: true };
    
    const next = combined
      .map(e => ({ ...e, parsedDate: parse(e.date.split(' - ')[0], 'MMM dd, yyyy', new Date()) }))
      .filter(e => isFuture(e.parsedDate))
      .sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime())[0];
    
    return next ? { ...next, isToday: false } : null;
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    const combined = [...allEvents, ...internationalEvents];
    const filtered = combined.filter(e => 
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (e.country && e.country.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (e.region && e.region.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    // Unique by slug
    return Array.from(new Map(filtered.map(item => [item.slug, item])).values()).slice(0, 5);
  }, [searchQuery]);

  if (!isClient) return <div className="min-h-screen bg-[#F7F4EE]" />;

  return (
    <section className="container mx-auto px-6 py-12 md:py-24 border-b border-[#DED9D0]">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-6 space-y-10">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E94368]">
              TODAY · {format(new Date(), 'EEEE, MMMM dd, yyyy').toUpperCase()}
            </p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-[#17151A] leading-[1.05]">
              Here's what today <br /> actually is.
            </h1>
            <p className="text-lg text-[#6D6870] font-medium leading-relaxed max-w-lg">
              {todayEvent?.isToday 
                ? `Today is ${todayEvent.name} in ${todayEvent.country || todayEvent.region}. Not a holiday everywhere, but significant for millions.`
                : "A quiet day on most major global calendars—but not for long. See what the world is preparing for next."
              }
            </p>
          </div>

          <div className="space-y-4 relative max-w-xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D6870]" />
              <Input 
                placeholder="Search a festival, country, or date..."
                className="h-14 pl-12 bg-white border-[#DED9D0] rounded-sm text-base font-medium focus:ring-0 focus:border-[#17151A]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-20 bg-white border border-[#DED9D0] mt-1 shadow-xl rounded-sm overflow-hidden">
                <div className="p-2 border-b border-[#F7F4EE] bg-[#F7F4EE]/50 text-[9px] font-bold uppercase tracking-widest text-[#6D6870]">
                  Matches Found
                </div>
                {searchResults.map(res => (
                  <Link key={res.slug} href={res.link || `/festivals`} className="flex items-center justify-between p-4 hover:bg-[#F7F4EE] group transition-colors">
                    <div>
                      <p className="font-bold text-sm text-[#17151A]">{res.name}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#6D6870]">{res.country || res.region}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#DED9D0] group-hover:text-[#E94368] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2">
              <Link href="/calendar" className="text-[11px] font-bold uppercase tracking-widest text-[#17151A] flex items-center gap-2 hover:text-[#E94368] transition-colors">
                This month's calendar <ArrowRight className="w-3 h-3" />
              </Link>
              <Link href="/international-festivals" className="text-[11px] font-bold uppercase tracking-widest text-[#17151A] flex items-center gap-2 hover:text-[#E94368] transition-colors">
                Explore global festivals <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <Card className="bg-white border-[#DED9D0] rounded-sm shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4">
                <Badge className="bg-[#557568] text-white text-[8px] font-bold tracking-widest uppercase rounded-none px-2 py-0.5">
                  {todayEvent?.isToday ? "LIVE TODAY" : "COMING UP NEXT"}
                </Badge>
             </div>
             <CardContent className="p-8 md:p-12 space-y-8">
                <div>
                   <p className="font-mono text-[10px] text-[#6D6870] mb-2 uppercase tracking-widest">
                     Record: {todayEvent?.slug?.replace('-', '_').toUpperCase() || 'U_GEN_001'}
                   </p>
                   <h3 className="font-headline text-4xl md:text-5xl font-bold text-[#17151A] leading-tight">
                     {todayEvent?.name || "The World's Calendar"}
                   </h3>
                   <p className="text-xs font-bold text-[#6D6870] mt-2 flex items-center gap-2">
                     <MapPin className="w-3 h-3 text-[#E94368]" />
                     {todayEvent?.country || todayEvent?.region || "Global"} · {todayEvent?.type}
                   </p>
                </div>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-[#F7F4EE]">
                  <div>
                    <p className="text-[9px] font-bold text-[#6D6870] uppercase tracking-widest mb-1">Observed Date</p>
                    <p className="font-mono text-xl font-bold text-[#17151A]">{todayEvent?.date.split(' - ')[0] || "—"}</p>
                  </div>
                   <div>
                    <p className="text-[9px] font-bold text-[#6D6870] uppercase tracking-widest mb-1">Status</p>
                    <p className="font-mono text-xl font-bold text-[#557568]">Confirmed</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[9px] font-bold text-[#E94368] uppercase tracking-widest">Why it matters</p>
                  <p className="text-sm font-medium leading-relaxed text-[#17151A]">
                    {todayEvent?.description || "Utsavs standardizes global temporal data into human-readable and machine-ready intelligence."}
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="#nuance" className="text-[11px] font-bold text-[#6D6870] uppercase tracking-widest hover:text-[#17151A] flex items-center gap-2">
                    Date works differently elsewhere <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
             </CardContent>
          </Card>
          <p className="text-[9px] font-bold text-[#6D6870]/50 uppercase tracking-[0.3em] mt-4 text-center">
            SOURCE: UTSAVS FESTIVAL GUIDE · DATA VERIFIED BY INTERNAL OPS
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * Storytelling: One Festival, Five Countries
 */
function OneFestivalManyWorlds() {
  const [activeChip, setActiveChip] = useState(DIWALI_NUANCE[0]);

  return (
    <section id="nuance" className="container mx-auto px-6 py-24 bg-white/50 border-b border-[#DED9D0]">
       <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-[#17151A]">Same festival. Different day, different rules.</h2>
            <p className="text-lg text-[#6D6870] max-w-xl mx-auto">
              A holiday is not just a point in time. It is a local law, a regional ritual, and a specific economic status.
            </p>
          </div>

          <div className="bg-white border border-[#DED9D0] p-6 rounded-sm shadow-sm">
            <div className="flex flex-wrap gap-2 justify-center mb-10 pb-6 border-b border-[#F7F4EE]">
              {DIWALI_NUANCE.map(n => (
                <button 
                  key={n.country}
                  onClick={() => setActiveChip(n)}
                  className={cn(
                    "px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full border",
                    activeChip.country === n.country 
                      ? "bg-[#17151A] text-white border-[#17151A]" 
                      : "bg-[#F7F4EE] text-[#6D6870] border-[#DED9D0] hover:border-[#17151A]"
                  )}
                >
                  {n.country}
                </button>
              ))}
            </div>

            <div className="px-4 md:px-12 space-y-6 min-h-[160px]">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1">
                   <p className="text-[9px] font-bold uppercase tracking-widest text-[#E94368]">Observed Date</p>
                   <p className="font-mono text-2xl font-bold text-[#17151A]">{activeChip.date}</p>
                </div>
                 <div className="space-y-1 md:text-right">
                   <p className="text-[9px] font-bold uppercase tracking-widest text-[#6D6870]">Operational Status</p>
                   <p className="text-base font-bold text-[#17151A]">{activeChip.status}</p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#F7F4EE]">
                 <p className="text-[9px] font-bold uppercase tracking-widest text-[#6D6870] mb-3">Local Nuance</p>
                 <p className="text-xl font-headline italic leading-relaxed text-[#17151A]">
                   "{activeChip.nuance}"
                 </p>
              </div>
            </div>
          </div>
       </div>
    </section>
  );
}

/**
 * Why the Date Moves: Logic Cards
 */
function WhyDateMoves() {
  const logicItems = [
    { title: "Fixed", desc: "Christmas is always 25 December—the Gregorian calendar doesn't shift it, making it operationally predictable." },
    { title: "Lunar", desc: "Diwali follows the moon, so it lands on a different Gregorian date each year. In 2026, it falls on Nov 8." },
    { title: "Declared", desc: "Some holidays are set by government notification every year, not by any astronomical or calendar rule at all." },
  ];

  return (
    <section className="container mx-auto px-6 py-24 border-b border-[#DED9D0]">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center md:text-left">
           <h2 className="font-headline text-4xl font-bold text-[#17151A]">Why the date moves.</h2>
           <p className="text-lg text-[#6D6870] mt-2">Time is calculated differently across cultures. Utsavs knows which is which.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {logicItems.map(item => (
            <Card key={item.title} className="bg-[#F7F4EE] border-none shadow-none rounded-none p-8 border-l border-[#DED9D0]">
               <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E94368] mb-6">{item.title}</h3>
               <p className="text-base font-medium leading-relaxed text-[#17151A]">
                 {item.desc}
               </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Long Weekends: Real Data Opportunity
 */
function LongWeekendsSection() {
  return (
    <section className="container mx-auto px-6 py-24 bg-white/30 border-b border-[#DED9D0]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-center">
        <div className="flex-1 space-y-6">
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E94368]">PLANNING</p>
           <h2 className="font-headline text-4xl md:text-5xl font-bold text-[#17151A]">Long weekends <br />worth knowing.</h2>
           <p className="text-lg text-[#6D6870]">The smart way to find your next escape, driven by calendar alignment logic.</p>
           <Link href="/blog/long-weekends-2026">
              <Button variant="link" className="p-0 h-auto text-[#17151A] font-bold uppercase tracking-widest text-xs">
                See the full 2026 cheatsheet <ArrowRight className="ml-2 w-3 h-3"/>
              </Button>
           </Link>
        </div>

        <div className="flex-[1.2] space-y-1">
          {LONG_WEEKENDS_PROTOTYPE.map((lw, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-[#DED9D0] group hover:border-[#17151A] transition-all cursor-pointer">
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-[#17151A]">{lw.name}</h4>
                <p className="font-mono text-[10px] text-[#6D6870] uppercase tracking-widest">{lw.date} · {lw.alignment}</p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                <Badge className="bg-[#E94368] text-white rounded-none font-bold text-[10px] tracking-widest px-3 py-1 mb-2">{lw.duration}</Badge>
                <p className="text-xs text-[#6D6870] font-medium italic">"{lw.logic}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Footer: Minimal one-liner
 */
function GHIFooter() {
  return (
    <footer className="py-12 bg-[#F7F4EE] border-t border-[#DED9D0] text-center">
      <div className="container mx-auto px-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6D6870]">
          UTSAVS · Global Holiday Intelligence (prototype) · © {new Date().getFullYear()} Utsavs · 
          <Link href="/" className="ml-2 hover:text-[#E94368] transition-colors underline underline-offset-4">← utsavs.com</Link>
        </p>
      </div>
    </footer>
  );
}

export default function GHIPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#17151A] font-sans selection:bg-[#E94368]/20 antialiased">
      <GHIHeader />
      <main>
        <GHIHero />
        <OneFestivalManyWorlds />
        <WhyDateMoves />
        <LongWeekendsSection />
        
        <section className="container mx-auto px-6 py-24 text-center">
           <div className="max-w-3xl mx-auto space-y-10">
              <p className="text-2xl md:text-3xl font-headline italic leading-relaxed text-[#6D6870]">
                "This is Utsavs figuring out how to know the world's calendar, not just India's. The full festival guides, recipes and stories are still at the heart of it—this page is just us thinking out loud."
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/">
                  <Button size="lg" className="bg-[#17151A] text-white rounded-none h-14 px-10 font-bold uppercase tracking-widest text-[10px]">Explore Utsavs.com</Button>
                </Link>
                <Link href="/calendar">
                  <Button variant="outline" size="lg" className="border-[#17151A] text-[#17151A] rounded-none h-14 px-10 font-bold uppercase tracking-widest text-[10px]">See the full calendar</Button>
                </Link>
              </div>
           </div>
        </section>
      </main>
      <GHIFooter />
    </div>
  );
}
