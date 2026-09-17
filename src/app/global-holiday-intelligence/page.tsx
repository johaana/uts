
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Globe, 
  BookOpen, 
  Check, 
  ArrowRight,
  Plus,
  Minus,
  Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { allEvents, internationalEvents } from '@/lib/festival-data';
import { format, addDays, startOfDay, differenceInDays, isSameDay, parse, isValid } from 'date-fns';

// --------------------------------------------------------------------------------
// DATA REGISTRY (2026-2027 Baseline)
// --------------------------------------------------------------------------------

const HOLIDAYS_REGISTRY: Record<string, any[]> = {
  IN: [
    { date: "2026-09-04", name: "Janmashtami", type: "religious" },
    { date: "2026-09-05", name: "Ganesh Chaturthi", type: "religious" },
    { date: "2026-10-02", name: "Gandhi Jayanti", type: "public" },
    { date: "2026-10-20", name: "Dussehra", type: "religious" },
    { date: "2026-11-08", name: "Diwali", type: "public" },
    { date: "2026-11-09", name: "Govardhan Puja", type: "cultural" },
    { date: "2026-11-10", name: "Bhai Dooj", type: "cultural" },
  ],
  JP: [
    { date: "2026-09-21", name: "Respect for the Aged Day", type: "public" },
    { date: "2026-09-22", name: "Bridge Holiday", type: "public" },
    { date: "2026-09-23", name: "Autumn Equinox Day", type: "public" },
    { date: "2026-10-12", name: "Sports Day", type: "public" },
    { date: "2026-11-03", name: "Culture Day", type: "public" },
  ],
  US: [
    { date: "2026-09-07", name: "Labor Day", type: "public" },
    { date: "2026-10-12", name: "Columbus Day", type: "public" },
    { date: "2026-10-31", name: "Halloween", type: "cultural" },
    { date: "2026-11-26", name: "Thanksgiving", type: "public" },
  ],
  SG: [
    { date: "2026-11-08", name: "Deepavali", type: "public" },
    { date: "2026-11-09", name: "Deepavali (In Lieu)", type: "public" },
  ],
  GB: [
    { date: "2026-08-31", name: "Summer Bank Holiday", type: "public" },
    { date: "2026-10-31", name: "Halloween", type: "cultural" },
    { date: "2026-12-25", name: "Christmas Day", type: "public" },
  ],
  DE: [
    { date: "2026-10-03", name: "German Unity Day", type: "public" },
  ],
  CA: [
    { date: "2026-09-04", name: "Labour Day", type: "public" },
    { date: "2026-10-12", name: "Thanksgiving", type: "public" },
  ],
  AU: [
    { date: "2026-10-05", name: "Labour Day (Regional)", type: "public" },
  ],
};

const COUNTRIES = [
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
];

const MODE_COPY = {
  traveler: "For travel planning, a holiday is a signal to check transport and accommodation. It doesn't always mean closures.",
  study: "For students, check if admissions or campus services are affected. University calendars are institution-specific.",
  corporate: "A working-calendar signal. Plan payments and approvals with a local working-day buffer.",
  compare: "Identify mismatches between origin and destination to avoid scheduling cross-border friction."
};

// --------------------------------------------------------------------------------
// PAGE COMPONENT
// --------------------------------------------------------------------------------

export default function GlobalHolidayIntelligencePage() {
  const [isClient, setIsClient] = useState(false);
  const [mode, setMode] = useState<'traveler' | 'study' | 'corporate' | 'compare'>('compare');
  
  // States
  const [country, setCountry] = useState('IN');
  const [startDate, setStartDate] = useState('2026-09-04');
  const [endDate, setEndDate] = useState('2026-10-31');
  const [compA, setCompA] = useState('IN');
  const [compB, setCompB] = useState('JP');
  const [compC, setCompC] = useState('US');
  const [thirdCountryOn, setThirdCountryOn] = useState(false);
  const [compareFilter, setCompareFilter] = useState<'all' | 'mismatch' | 'overlap'>('all');

  useEffect(() => setIsClient(true), []);

  // --- Logic: Impact Checker ---
  const impactData = useMemo(() => {
    if (!isClient) return { inRange: [], longest: 0, nextDays: '—', publicCount: 0 };
    
    const start = startOfDay(new Date(startDate));
    const end = startOfDay(new Date(endDate));
    const all = (HOLIDAYS_REGISTRY[country] || [])
      .map(h => ({ ...h, d: startOfDay(new Date(h.date)) }))
      .sort((a, b) => a.d.getTime() - b.d.getTime());
    
    const inRange = all.filter(h => h.d >= start && h.d <= end);
    const upcoming = all.find(h => h.d >= startOfDay(new Date('2026-09-04')));

    let longest = 0, currentRun = 0, prevD: Date | null = null;
    inRange.forEach(h => {
      if (prevD && differenceInDays(h.d, prevD) <= 2) {
        currentRun += 1;
      } else {
        currentRun = 1;
      }
      longest = Math.max(longest, currentRun);
      prevD = h.d;
    });

    const nextDays = upcoming ? differenceInDays(upcoming.d, startOfDay(new Date('2026-09-04'))) : '—';
    const publicCount = inRange.filter(h => h.type === 'public').length;

    return { inRange, longest, nextDays, publicCount };
  }, [isClient, country, startDate, endDate]);

  // --- Logic: Comparison Engine ---
  const compareData = useMemo(() => {
    if (!isClient) return { rows: [], mismatchRows: [], overlapRows: [], visible: [], nextMismatchDays: '—', selectedCountries: [] };
    
    const start = startOfDay(new Date(startDate));
    const end = startOfDay(new Date(endDate));
    const selectedCountries = thirdCountryOn ? [compA, compB, compC] : [compA, compB];

    const byDate: Record<string, Record<string, any>> = {};
    selectedCountries.forEach(code => {
      (HOLIDAYS_REGISTRY[code] || []).forEach(h => {
        const d = startOfDay(new Date(h.date));
        if (d >= start && d <= end) {
          byDate[h.date] = byDate[h.date] || {};
          byDate[h.date][code] = h;
        }
      });
    });

    const rows = Object.keys(byDate).sort().map(date => {
      const affected = selectedCountries.filter(code => byDate[date][code]);
      const isOverlap = affected.length === selectedCountries.length;
      return { 
        date, 
        d: startOfDay(new Date(date)), 
        affected, 
        kind: isOverlap ? 'overlap' : 'mismatch' as const,
        data: byDate[date]
      };
    });

    const mismatchRows = rows.filter(r => r.kind === 'mismatch');
    const overlapRows = rows.filter(r => r.kind === 'overlap');
    const visible = compareFilter === 'mismatch' ? mismatchRows : compareFilter === 'overlap' ? overlapRows : rows;

    const nextMismatch = mismatchRows.find(r => r.d >= start);
    const nextMismatchDays = nextMismatch ? differenceInDays(nextMismatch.d, startOfDay(new Date('2026-09-04'))) : '—';

    return { rows, mismatchRows, overlapRows, visible, nextMismatchDays, selectedCountries };
  }, [isClient, compA, compB, compC, thirdCountryOn, startDate, endDate, compareFilter]);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#0F1428] text-[#F4F1E8] font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      
      {/* ---------- HEADER ---------- */}
      <header className="sticky top-0 z-50 bg-[#0F1428]/86 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-[1180px] mx-auto px-6 h-[76px] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-2xl font-semibold">Utsavs</span>
            <span className="font-mono text-[10px] text-[#E8A33D] tracking-[0.14em] uppercase">GLOBAL CALENDAR INTELLIGENCE</span>
          </div>
          <div className="hidden md:flex gap-9 text-[14.5px] text-[#9AA1C0]">
            <Link href="#explore" className="hover:text-white">Explore</Link>
            <Link href="#calendar" className="hover:text-white">Calendar</Link>
            <Link href="#world" className="hover:text-white">World</Link>
            <Link href="#intelligence" className="hover:text-white">Intelligence</Link>
            <Link href="#api" className="hover:text-white">API</Link>
          </div>
          <button className="text-sm font-medium bg-[#F0C888] text-[#0F1428] px-5 py-2.5 rounded-full hover:bg-[#E8A33D]">
            Join API preview
          </button>
        </nav>
      </header>

      <main>
        {/* ---------- HERO SECTION ---------- */}
        <section className="py-10 md:py-16" id="explore">
          <div className="max-w-[1180px] mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            
            <div className="space-y-6">
              <h1 className="font-headline font-medium text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Know before you fly. Know before you schedule.
              </h1>
              <p className="text-lg text-[#9AA1C0] max-w-[46ch]">
                Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center bg-[#171D3A] border border-white/18 rounded-[14px] p-1.5 pl-5 max-w-[480px] focus-within:border-[#E8A33D]">
                  <input 
                    type="text" 
                    placeholder="Try “Diwali 2026” or “holidays in Japan, October”" 
                    className="flex-1 bg-transparent border-none text-white text-[15px] py-3 focus:outline-none placeholder:text-[#6E7495]"
                  />
                  <button className="bg-[#E8A33D] text-[#0F1428] font-semibold text-sm px-5 py-2.5 rounded-[9px]">
                    Search
                  </button>
                </div>
                <div className="flex flex-wrap gap-2.5 text-[12.5px] text-[#6E7495] font-mono">
                  {['Diwali 2026', 'Long weekends · India', 'Japan, October', 'Compare two countries'].map(h => (
                    <span key={h} className="border border-white/10 px-2.5 py-1 rounded-full">{h}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* IMPACT CHECKER TOOL */}
            <div className="bg-[#171D3A] border border-white/18 rounded-[18px] p-6 md:p-8 space-y-5 shadow-2xl">
              <div className="flex justify-between items-center">
                <h3 className="font-headline text-lg font-medium">Date Intelligence</h3>
                <div className="flex bg-[#1E2650] p-1 rounded-full">
                   {(['compare', 'traveler', 'study', 'corporate'] as const).map(m => (
                     <button 
                       key={m}
                       onClick={() => setMode(m)}
                       className={cn("px-3 py-1.5 rounded-full text-[11px] font-medium transition-all capitalize", mode === m ? "bg-[#E8A33D] text-[#0F1428]" : "text-[#9AA1C0]")}
                     >
                       {m === 'compare' ? 'Origin → Destination' : m}
                     </button>
                   ))}
                </div>
              </div>
              
              <p className="text-xs text-[#6E7495] leading-relaxed">
                {mode === 'compare' 
                  ? "Compare two calendars across a date range — then see what the difference means for planning."
                  : MODE_COPY[mode]}
              </p>

              {mode === 'compare' ? (
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#6E7495] font-mono uppercase">Origin</label>
                    <select value={compA} onChange={e => setCompA(e.target.value)} className="w-full bg-[#1E2650] border border-white/18 text-white rounded-[9px] px-3 py-2.5 text-[13px]">
                      {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-[#6E7495] font-mono uppercase">Destination</label>
                    <select value={compB} onChange={e => setCompB(e.target.value)} className="w-full bg-[#1E2650] border border-white/18 text-white rounded-[9px] px-3 py-2.5 text-[13px]">
                      {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                    </select>
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <label className="text-[10px] text-[#6E7495] font-mono uppercase">Destination</label>
                  <select value={country} onChange={e => setCountry(e.target.value)} className="w-full bg-[#1E2650] border border-white/18 text-white rounded-[9px] px-3 py-2.5 text-[13px]">
                    {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] text-[#6E7495] font-mono uppercase">Start Date</label>
                  <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full bg-[#1E2650] border border-white/18 text-white rounded-[9px] px-3 py-2 text-[13px]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] text-[#6E7495] font-mono uppercase">End Date</label>
                  <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full bg-[#1E2650] border border-white/18 text-white rounded-[9px] px-3 py-2 text-[13px]" />
                </div>
              </div>

              {/* Mode Views */}
              {mode !== 'compare' ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3 p-4 bg-[#1E2650] rounded-xl text-center">
                    <div>
                      <b className="font-headline text-2xl text-[#F0C888]">{impactData.inRange.length}</b>
                      <span className="text-[10px] text-[#6E7495] block">flagged dates</span>
                    </div>
                    <div>
                      <b className="font-headline text-2xl text-[#F0C888]">{impactData.longest}</b>
                      <span className="text-[10px] text-[#6E7495] block">max streak</span>
                    </div>
                    <div>
                      <b className="font-headline text-2xl text-[#F0C888]">{impactData.nextDays}</b>
                      <span className="text-[10px] text-[#6E7495] block">days to next</span>
                    </div>
                  </div>
                  
                  <div className="max-h-[160px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                    {impactData.inRange.length === 0 ? (
                      <p className="text-center text-[13px] text-[#6E7495] py-6">No flagged holidays in this window.</p>
                    ) : (
                      impactData.inRange.map((h, i) => (
                        <div key={i} className="flex items-center gap-3 p-2.5 bg-[#1E2650] rounded-[9px] text-[12px]">
                          <span className="font-mono text-[#9AA1C0] min-w-[52px]">{format(h.d, 'dd MMM')}</span>
                          <span className="flex-1 font-medium">{h.name}</span>
                          <span className={cn("text-[9px] font-mono px-2 py-0.5 rounded-full uppercase", h.type === 'public' ? "bg-[#E8A33D]/20 text-[#F0C888]" : "bg-white/10 text-[#9AA1C0]")}>{h.type}</span>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="p-4 bg-[#1E2650] border border-white/10 rounded-xl space-y-2">
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#F0C888]">Why this matters</h4>
                    <p className="text-[12.5px] text-[#9AA1C0] leading-relaxed">
                      {impactData.publicCount > 0 
                        ? `Found ${impactData.publicCount} public holiday events. Expect government-facing closures and reduced operational capacity in the target jurisdiction.`
                        : "No major public closures flagged. Normal operational status expected for the selected range."}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3 p-4 bg-[#1E2650] rounded-xl text-center">
                    <div><b className="font-headline text-2xl text-[#F0C888]">{compareData.rows.length}</b><span className="text-[10px] text-[#6E7495] block">flagged dates</span></div>
                    <div><b className="font-headline text-2xl text-[#F0C888]">{compareData.mismatchRows.length}</b><span className="text-[10px] text-[#6E7495] block">mismatches</span></div>
                    <div><b className="font-headline text-2xl text-[#F0C888]">{compareData.nextMismatchDays}</b><span className="text-[10px] text-[#6E7495] block">to mismatch</span></div>
                  </div>

                  <div className="max-h-[160px] overflow-auto border border-white/10 rounded-lg custom-scrollbar">
                    <table className="w-full text-left text-[11px]">
                      <thead className="sticky top-0 bg-[#1E2650]">
                        <tr>
                          <th className="p-3 font-mono text-[#6E7495]">Date</th>
                          {compareData.selectedCountries.map(c => <th key={c} className="p-3 font-mono text-[#6E7495]">{c}</th>)}
                          <th className="p-3 font-mono text-[#6E7495]">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {compareData.visible.map(r => (
                          <tr key={r.date} className="border-t border-white/5 hover:bg-white/5">
                            <td className="p-3 font-mono">{format(r.d, 'dd MMM')}</td>
                            {compareData.selectedCountries.map(c => (
                              <td key={c} className="p-3">{r.data[c] ? r.data[c].name : '—'}</td>
                            ))}
                            <td className="p-3">
                              <span className={cn("font-bold uppercase text-[9px]", r.kind === 'mismatch' ? "text-[#E8A33D]" : "text-[#9AA1C0]")}>{r.kind === 'mismatch' ? 'MISMATCH' : 'OVERLAP'}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-[#1E2650] border border-white/10 rounded-xl space-y-2">
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#F0C888]">Planning Insight</h4>
                    <p className="text-[12.5px] text-[#9AA1C0] leading-relaxed">
                      {compareData.mismatchRows.length > 0 
                        ? `Identified ${compareData.mismatchRows.length} date mismatches. Cross-border meetings or settlement cycles should account for these specific regional friction points.`
                        : "Calendars are fully aligned for the selected date range. Normal cross-border operations expected."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ---------- WORLD PULSE TICKER ---------- */}
        <section className="pulse py-6 bg-[#171D3A] border-y border-white/10 overflow-hidden" id="world">
          <div className="max-w-[1180px] mx-auto px-6 flex items-center gap-12">
            <div className="flex gap-9 shrink-0 pr-9 border-r border-white/18">
              <div className="pulse-stat"><b className="font-headline text-2xl">12</b><span className="text-[11px] text-[#6E7495] uppercase tracking-wider block">countries</span></div>
              <div className="pulse-stat"><b className="font-headline text-2xl">4</b><span className="text-[11px] text-[#6E7495] uppercase tracking-wider block">holidays</span></div>
            </div>
            <div className="relative flex-1 overflow-hidden whitespace-nowrap mask-marquee">
              <div className="inline-flex gap-4 marquee-track">
                {[
                  { f: '🇮🇳', c: 'India', e: 'Janmashtami, Dahi Handi' },
                  { f: '🇯🇵', c: 'Japan', e: 'no observance today' },
                  { f: '🇺🇸', c: 'USA', e: 'Labor Day (observed Mon)' },
                  { f: '🇸🇬', c: 'Singapore', e: 'National Day season' },
                  { f: '🇮🇳', c: 'India', e: 'Janmashtami, Dahi Handi' },
                  { f: '🇯🇵', c: 'Japan', e: 'no observance today' },
                ].map((item, i) => (
                  <span key={i} className="text-[13.5px] text-[#9AA1C0] border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                    <span>{item.f}</span> <b className="text-white">{item.c}</b> — {item.e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CALENDAR EXPLORER ---------- */}
        <section id="calendar" className="py-24">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="max-w-[600px] mb-14">
              <div className="font-mono text-[12px] text-[#4FD1C5] uppercase tracking-widest mb-3">Calendar Scrutiny</div>
              <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight mb-4">See what a month actually looks like.</h2>
              <p className="text-[#9AA1C0] text-lg">We flag the bridges for you — that one day off that quietly turns a weekend into a four-day break.</p>
            </div>
            
            <div className="grid md:grid-cols-[1.1fr_0.9fr] border border-white/18 rounded-[18px] overflow-hidden bg-[#171D3A]">
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-baseline mb-8">
                  <h3 className="font-headline text-xl font-medium">November 2026 · India</h3>
                  <span className="font-mono text-[11px] text-[#6E7495] uppercase">national view</span>
                </div>
                <div className="grid grid-cols-7 gap-1.5 mb-4">
                  {['M','T','W','T','F','S','S'].map((d, idx) => (
                    <div key={`${d}-${idx}`} className="text-[11px] text-[#6E7495] text-center font-mono pb-2">{d}</div>
                  ))}
                  {/* Calendar Grid Simulation */}
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((d, i) => (
                    <div key={i} className={cn(
                      "aspect-square flex items-center justify-center text-sm rounded-lg transition-colors",
                      [7, 9, 23].includes(i) ? "bg-[#E8A33D]/16 text-[#F0C888] font-semibold" : "text-[#9AA1C0] hover:bg-white/5"
                    )}>
                      {d}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#4FD1C5]/10 border border-[#4FD1C5]/25 rounded-xl text-[13px] text-white">
                  <b className="text-[#4FD1C5]">Long weekend flagged.</b> Diwali on the 8th creates a significant national operational shift.
                </div>
              </div>
              <div className="bg-[#1E2650] p-8 md:p-12 flex flex-col justify-center gap-8 border-l border-white/18">
                <div className="flex justify-between items-baseline pb-5 border-b border-white/10">
                  <b className="font-headline text-3xl font-semibold text-[#F0C888]">21</b>
                  <span className="text-[13px] text-[#9AA1C0] uppercase tracking-wider">working days</span>
                </div>
                <div className="flex justify-between items-baseline pb-5 border-b border-white/10">
                  <b className="font-headline text-3xl font-semibold text-[#F0C888]">2</b>
                  <span className="text-[13px] text-[#9AA1C0] uppercase tracking-wider">public holidays</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <b className="font-headline text-3xl font-semibold text-[#F0C888]">1</b>
                  <span className="text-[13px] text-[#9AA1C0] uppercase tracking-wider">long weekend</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- TRUST PILLARS ---------- */}
        <section id="intelligence" className="py-24 bg-[#171D3A]">
          <div className="max-w-[1180px] mx-auto px-6">
             <div className="max-w-[600px] mb-14 text-left">
              <div className="font-mono text-[12px] text-[#E8A33D] uppercase tracking-widest mb-3">Verification Architecture</div>
              <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight mb-4">Every date comes with honesty.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-white/18 rounded-[16px] overflow-hidden">
               {[
                { m: 'SRC', h: 'Source-aware', p: 'Access the exact authoritative origins of every date and regional rule.' },
                { m: 'VER', h: 'Verification-aware', p: 'Differentiate between confirmed, declared, and estimated observations.' },
                { m: 'REG', h: 'Region-aware', p: 'Navigate the complex jurisdictional differences between states and provinces.' },
                { m: 'DAT', h: 'Date-aware', p: 'Sophisticated handling of lunar, lunisolar, and declared cycles.' }
              ].map(t => (
                <div key={t.h} className="bg-[#0F1428] p-8 border-[0.5px] border-white/10">
                  <div className="w-9 h-9 border border-[#4FD1C5]/40 rounded-lg flex items-center justify-center font-mono text-[13px] text-[#4FD1C5] mb-6">{t.m}</div>
                  <h4 className="font-semibold text-[15.5px] mb-2">{t.h}</h4>
                  <p className="text-[13.5px] text-[#9AA1C0] leading-relaxed">{t.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CLOSING ---------- */}
        <section className="py-24 text-center">
          <div className="max-w-[1180px] mx-auto px-6">
            <h2 className="font-headline font-medium italic text-2xl md:text-3xl leading-relaxed text-white max-w-[26ch] mx-auto mb-12">
              "We started out just helping people find out what's being celebrated today. Turns out a lot of systems needed to know that too."
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="font-mono text-[13px] text-[#0F1428] bg-[#F0C888] px-5 py-2.5 rounded-full">Discovery</span>
              <span className="text-[#9AA1C0] text-sm">—</span>
              <span className="font-mono text-[13px] text-[#9AA1C0] border border-white/18 px-5 py-2.5 rounded-full">Global intelligence</span>
              <span className="text-[#9AA1C0] text-sm">—</span>
              <span className="font-mono text-[13px] text-[#9AA1C0] border border-white/18 px-5 py-2.5 rounded-full">Intelligence API</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-[13px] text-[#6E7495]">
          <div>Utsavs · global calendar intelligence · prototype, 2026</div>
          <div className="flex gap-6">
            <Link href="/" className="text-[#9AA1C0] hover:text-white">Explore Utsavs.com</Link>
            <Link href="/calendar" className="text-[#9AA1C0] hover:text-white">Full calendar</Link>
            <Link href="#api" className="text-[#9AA1C0] hover:text-white">Join API preview</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
