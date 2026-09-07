'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, MapPin, 
  Globe, BookOpen, 
  Check, 
  ChevronRight,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { DIWALI_NUANCE, TODAY_STORY } from '@/lib/ghi-data';
import { format, addDays, startOfDay, differenceInDays, isSameDay } from 'date-fns';

// --------------------------------------------------------------------------------
// DATA LAYER (Simulated for 2026 Prototype)
// --------------------------------------------------------------------------------

const HOLIDAYS_REGISTRY: Record<string, any[]> = {
  IN: [
    { date: "2026-09-04", name: "Janmashtami", type: "religious", scope: "Regional: Maharashtra" },
    { date: "2026-09-05", name: "Ganesh Chaturthi", type: "religious", scope: "Regional: Maharashtra & Goa" },
    { date: "2026-10-02", name: "Gandhi Jayanti", type: "public", scope: "National" },
    { date: "2026-10-20", name: "Dussehra", type: "religious", scope: "National" },
    { date: "2026-10-29", name: "Diwali", type: "public", scope: "National" },
    { date: "2026-10-30", name: "Govardhan Puja", type: "cultural", scope: "National" },
    { date: "2026-10-31", name: "Bhai Dooj", type: "cultural", scope: "National" },
  ],
  JP: [
    { date: "2026-09-21", name: "Respect for the Aged Day", type: "public", scope: "National" },
    { date: "2026-09-23", name: "Autumn Equinox Day", type: "public", scope: "National" },
    { date: "2026-10-12", name: "Sports Day", type: "public", scope: "National" },
  ],
  US: [
    { date: "2026-09-07", name: "Labor Day", type: "public", scope: "National" },
    { date: "2026-10-12", name: "Columbus Day", type: "public", scope: "National" },
    { date: "2026-10-31", name: "Halloween", type: "cultural", scope: "National" },
  ],
  SG: [
    { date: "2026-09-05", name: "Hari Raya Haji (regional)", type: "cultural", scope: "Regional" },
    { date: "2026-10-08", name: "Deepavali", type: "public", scope: "National" },
  ],
  GB: [
    { date: "2026-10-31", name: "Halloween", type: "cultural", scope: "National" },
  ],
};

const COUNTRIES = [
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
];

// --------------------------------------------------------------------------------
// PAGE COMPONENT
// --------------------------------------------------------------------------------

export default function GlobalHolidayIntelligencePage() {
  const [isClient, setIsClient] = useState(false);
  const [mode, setMode] = useState<'traveler' | 'corporate' | 'compare'>('traveler');
  
  // Single Country Search State
  const [country, setCountry] = useState('IN');
  const [startDate, setStartDate] = useState('2026-09-04');
  const [endDate, setEndDate] = useState('2026-10-31');
  
  // Compare State
  const [compA, setCompA] = useState('IN');
  const [compB, setCompB] = useState('JP');
  const [compC, setCompC] = useState('US');
  const [thirdCountryOn, setThirdCountryOn] = useState(false);
  const [compareFilter, setCompareFilter] = useState<'all' | 'mismatch' | 'overlap'>('all');

  useEffect(() => setIsClient(true), []);

  // --- Logic: Impact Engine (Single View) ---
  const impactData = useMemo(() => {
    const start = startOfDay(new Date(startDate));
    const end = startOfDay(new Date(endDate));
    const all = (HOLIDAYS_REGISTRY[country] || [])
      .map(h => ({ ...h, d: startOfDay(new Date(h.date)) }))
      .sort((a, b) => a.d.getTime() - b.d.getTime());
    
    const inRange = all.filter(h => h.d >= start && h.d <= end);
    const upcoming = all.find(h => h.d >= startOfDay(new Date('2026-09-04')));

    // Longest streak
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
  }, [country, startDate, endDate]);

  // --- Logic: Comparison Engine ---
  const compareData = useMemo(() => {
    const start = startOfDay(new Date(startDate));
    const end = startOfDay(new Date(endDate));
    const selectedCountries = [compA, compB];
    if (thirdCountryOn) selectedCountries.push(compC);

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
        kind: isOverlap ? 'overlap' : 'mismatch',
        data: byDate[date]
      };
    });

    const mismatchRows = rows.filter(r => r.kind === 'mismatch');
    const overlapRows = rows.filter(r => r.kind === 'overlap');
    const visible = compareFilter === 'mismatch' ? mismatchRows : compareFilter === 'overlap' ? overlapRows : rows;

    const nextMismatch = mismatchRows.find(r => r.d >= start);
    const nextMismatchDays = nextMismatch ? differenceInDays(nextMismatch.d, startOfDay(new Date('2026-09-04'))) : '—';

    return { rows, mismatchRows, overlapRows, visible, nextMismatchDays, selectedCountries };
  }, [compA, compB, compC, thirdCountryOn, startDate, endDate, compareFilter]);

  if (!isClient) return <div className="min-h-screen bg-[#0F1428]" />;

  return (
    <div className="min-h-screen bg-[#0F1428] text-[#F4F1E8] font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      
      {/* ---------- NAV ---------- */}
      <header className="sticky top-0 z-50 bg-[#0F1428]/86 backdrop-blur-md border-b border-[#F4F1E8]/10">
        <nav className="max-w-[1180px] mx-auto px-6 md:px-8 flex items-center justify-between h-[76px]">
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-2xl font-semibold tracking-tight">Utsavs</span>
            <span className="font-mono text-[10px] text-[#E8A33D] tracking-[0.14em] font-medium uppercase">GLOBAL CALENDAR INTELLIGENCE</span>
          </div>
          <div className="hidden md:flex gap-9 text-[14.5px] text-[#9AA1C0]">
            <Link href="#explore" className="hover:text-white transition-colors">Explore</Link>
            <Link href="#calendar" className="hover:text-white transition-colors">Calendar</Link>
            <Link href="#world" className="hover:text-white transition-colors">World</Link>
            <Link href="#intelligence" className="hover:text-white transition-colors">Intelligence</Link>
            <Link href="#api" className="hover:text-white transition-colors">API</Link>
          </div>
          <Link href="#api" className="text-sm font-medium bg-[#F0C888] text-[#0F1428] px-5 py-2.5 rounded-full hover:bg-[#E8A33D] transition-colors">
            Join the API preview
          </Link>
        </nav>
      </header>

      <main>
        {/* ---------- HERO SECTION ---------- */}
        <section className="py-10 md:py-14" id="explore">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            
            <div className="space-y-6">
              <div className="font-mono text-[12.5px] text-[#4FD1C5] tracking-wide flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] shadow-[0_0_8px_#4FD1C5]" />
                TODAY · {format(new Date(), 'dd MMM yyyy').toUpperCase()}
              </div>
              <h1 className="font-headline font-medium text-4xl md:text-5xl leading-[1.1] tracking-tight max-w-[15ch]">
                Know before you fly. Know before you schedule.
              </h1>
              <p className="text-lg text-[#9AA1C0] max-w-[46ch] font-medium leading-relaxed">
                Check any country's holidays against your actual dates — so travel agencies, HR teams and travelers stop finding out about a closure the hard way.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center bg-[#171D3A] border border-[#F4F1E8]/18 rounded-[14px] p-1.5 pl-5 max-w-[480px] focus-within:border-[#E8A33D] transition-colors">
                  <input 
                    type="text" 
                    placeholder="Try “Diwali 2026” or “holidays in Japan, October”" 
                    className="flex-1 bg-transparent border-none text-[#F4F1E8] font-sans text-[15px] py-3 focus:outline-none placeholder:text-[#6E7495]"
                  />
                  <button className="bg-[#E8A33D] text-[#0F1428] font-semibold text-sm px-5 py-2.5 rounded-[9px] hover:bg-[#F0C888] transition-colors">
                    Search
                  </button>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Diwali 2026', 'Long weekends · India', 'Japan, October', 'Compare two countries'].map(hint => (
                    <span key={hint} className="text-[12.5px] text-[#6E7495] font-mono border border-[#F4F1E8]/10 px-2.5 py-1 rounded-full whitespace-nowrap">{hint}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* IMPACT CHECKER WIDGET */}
            <div className="bg-[#171D3A] border border-[#F4F1E8]/18 rounded-[18px] p-7 md:p-8 space-y-5 shadow-2xl relative overflow-hidden">
              <div className="checker-top flex justify-between items-center">
                <h3 className="font-headline text-lg font-medium text-white">Impact & Comparison Tool</h3>
                <div className="mode-toggle flex bg-[#1E2650] p-1 rounded-full text-xs font-medium">
                  <button 
                    onClick={() => setMode('traveler')}
                    className={cn("px-3 py-1.5 rounded-full transition-all", mode === 'traveler' ? "bg-[#E8A33D] text-[#0F1428]" : "text-[#9AA1C0]")}
                  >Traveler</button>
                  <button 
                    onClick={() => setMode('corporate')}
                    className={cn("px-3 py-1.5 rounded-full transition-all", mode === 'corporate' ? "bg-[#E8A33D] text-[#0F1428]" : "text-[#9AA1C0]")}
                  >Corporate</button>
                  <button 
                    onClick={() => setMode('compare')}
                    className={cn("px-3 py-1.5 rounded-full transition-all", mode === 'compare' ? "bg-[#E8A33D] text-[#0F1428]" : "text-[#9AA1C0]")}
                  >Compare</button>
                </div>
              </div>

              {/* Input Row: Single View */}
              {mode !== 'compare' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <div className="space-y-1.5">
                    <label className="text-[11px] text-[#6E7495] font-mono uppercase tracking-wider">Destination</label>
                    <select 
                      value={country} 
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full bg-[#1E2650] border border-[#F4F1E8]/18 text-[#F4F1E8] rounded-[9px] px-3 py-2.5 text-[13.5px] focus:outline-none focus:border-[#E8A33D]"
                    >
                      {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <div className="space-y-1.5 flex-1">
                      <label className="text-[11px] text-[#6E7495] font-mono uppercase tracking-wider">From</label>
                      <input 
                        type="date" 
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full bg-[#1E2650] border border-[#F4F1E8]/18 text-[#F4F1E8] rounded-[9px] px-3 py-2 text-[13.5px] focus:outline-none focus:border-[#E8A33D]" 
                      />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <label className="text-[11px] text-[#6E7495] font-mono uppercase tracking-wider">To</label>
                      <input 
                        type="date" 
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full bg-[#1E2650] border border-[#F4F1E8]/18 text-[#F4F1E8] rounded-[9px] px-3 py-2 text-[13.5px] focus:outline-none focus:border-[#E8A33D]" 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Input Row: Compare View */}
              {mode === 'compare' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] text-[#6E7495] font-mono uppercase tracking-wider">Region A</label>
                      <select value={compA} onChange={e => setCompA(e.target.value)} className="w-full bg-[#1E2650] border border-[#F4F1E8]/18 text-[#F4F1E8] rounded-[9px] px-3 py-2.5 text-[13px]"><>{COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}</></select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] text-[#6E7495] font-mono uppercase tracking-wider">Region B</label>
                      <select value={compB} onChange={e => setCompB(e.target.value)} className="w-full bg-[#1E2650] border border-[#F4F1E8]/18 text-[#F4F1E8] rounded-[9px] px-3 py-2.5 text-[13px]"><>{COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}</></select>
                    </div>
                    {thirdCountryOn && (
                       <div className="space-y-1.5">
                        <label className="text-[11px] text-[#6E7495] font-mono uppercase tracking-wider">Region C</label>
                        <select value={compC} onChange={e => setCompC(e.target.value)} className="w-full bg-[#1E2650] border border-[#F4F1E8]/18 text-[#F4F1E8] rounded-[9px] px-3 py-2.5 text-[13px]"><>{COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}</></select>
                      </div>
                    )}
                    {!thirdCountryOn && (
                      <div className="flex items-end">
                        <button onClick={() => setThirdCountryOn(true)} className="w-full h-[40px] flex items-center justify-center gap-2 text-[12px] text-[#9AA1C0] border border-dashed border-[#F4F1E8]/20 rounded-sm hover:border-[#E8A33D] hover:text-[#F4F1E8] transition-all">
                           <Plus className="w-3 h-3" /> Add Region
                        </button>
                      </div>
                    )}
                  </div>
                  {thirdCountryOn && (
                    <button onClick={() => setThirdCountryOn(false)} className="text-[10px] uppercase font-bold text-[#E94368] tracking-widest flex items-center gap-1">
                      <Minus className="w-3 h-3" /> Remove Third Region
                    </button>
                  )}
                </div>
              )}

              {/* Results Area */}
              <AnimatePresence mode="wait">
                {mode !== 'compare' ? (
                  <motion.div 
                    key="single"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-3 gap-3 p-4 bg-[#1E2650] rounded-xl">
                      <div>
                        <b className="font-headline text-2xl font-semibold text-[#F0C888] block">{impactData.inRange.length}</b>
                        <span className="text-[11px] text-[#6E7495] leading-tight block mt-0.5">days that affect plans</span>
                      </div>
                      <div>
                        <b className="font-headline text-2xl font-semibold text-[#F0C888] block">{impactData.longest}</b>
                        <span className="text-[11px] text-[#6E7495] leading-tight block mt-0.5">{impactData.longest === 1 ? 'day longest closure' : 'day closure streak'}</span>
                      </div>
                      <div>
                        <b className="font-headline text-2xl font-semibold text-[#F0C888] block">{impactData.nextDays}</b>
                        <span className="text-[11px] text-[#6E7495] leading-tight block mt-0.5">days to next one</span>
                      </div>
                    </div>

                    <div className="max-h-[160px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                      {impactData.inRange.length === 0 ? (
                        <div className="text-sm text-[#6E7495] text-center py-6">No flagged holidays in this window.</div>
                      ) : (
                        impactData.inRange.map((h, i) => (
                          <div key={i} className="flex items-center gap-3 p-2.5 bg-[#1E2650] rounded-[9px] text-[13px]">
                            <span className="font-mono text-[11.5px] text-[#9AA1C0] min-w-[52px]">{format(h.d, 'dd MMM')}</span>
                            <span className="flex-1 text-[#F4F1E8] font-medium">{h.name}</span>
                            <span className={cn(
                              "text-[10.5px] font-mono px-2 py-0.5 rounded-full uppercase",
                              h.type === 'public' ? "bg-[#E8A33D]/16 text-[#F0C888]" : h.type === 'religious' ? "bg-[#4FD1C5]/14 text-[#4FD1C5]" : "bg-[#F4F1E8]/8 text-[#9AA1C0]"
                            )}>{h.type}</span>
                          </div>
                        ))
                      )}
                    </div>

                    {impactData.publicCount > 0 && (
                      <div className="p-3.5 bg-[#E8A33D]/10 border border-[#E8A33D]/25 rounded-xl text-[12px] leading-relaxed">
                        {mode === 'corporate' ? (
                          <><b className="text-[#F0C888]">Plan around it.</b> {impactData.publicCount} public holiday{impactData.publicCount > 1 ? 's' : ''} fall inside this window — offices and banks in {COUNTRIES.find(c => c.code === country)?.name} will likely be closed.</>
                        ) : (
                          <><b className="text-[#F0C888]">Good to know.</b> {impactData.publicCount} public holiday{impactData.publicCount > 1 ? 's' : ''} during your trip — expect busier sights and higher fares.</>
                        )}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="compare"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-3 gap-3 p-4 bg-[#1E2650] rounded-xl">
                      <div>
                        <b className="font-headline text-2xl font-semibold text-[#F0C888] block">{compareData.rows.length}</b>
                        <span className="text-[11px] text-[#6E7495] block mt-0.5">dates flagged in total</span>
                      </div>
                      <div>
                        <b className="font-headline text-2xl font-semibold text-[#F0C888] block">{compareData.mismatchRows.length}</b>
                        <span className="text-[11px] text-[#6E7495] block mt-0.5">mismatched holidays</span>
                      </div>
                      <div>
                        <b className="font-headline text-2xl font-semibold text-[#F0C888] block">{compareData.nextMismatchDays}</b>
                        <span className="text-[11px] text-[#6E7495] block mt-0.5">days to next mismatch</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-2">
                       {['all', 'mismatch', 'overlap'].map(f => (
                         <button 
                            key={f}
                            onClick={() => setCompareFilter(f as any)}
                            className={cn(
                              "text-[10px] uppercase font-bold px-3 py-1.5 rounded-full border border-[#F4F1E8]/10 transition-all",
                              compareFilter === f ? "border-[#E8A33D] text-[#F0C888] bg-[#E8A33D]/5" : "text-[#6E7495]"
                            )}
                         >
                           {f}
                         </button>
                       ))}
                    </div>

                    <div className="max-h-[160px] overflow-auto border border-[#F4F1E8]/10 rounded-xl custom-scrollbar">
                      <table className="w-full text-left text-[12px] border-collapse">
                        <thead className="sticky top-0 bg-[#1E2650] border-b border-[#F4F1E8]/10">
                          <tr>
                            <th className="p-3 font-mono text-[10px] uppercase text-[#6E7495]">Date</th>
                            {compareData.selectedCountries.map(code => (
                              <th key={code} className="p-3 font-mono text-[10px] uppercase text-[#6E7495]">{code}</th>
                            ))}
                            <th className="p-3 font-mono text-[10px] uppercase text-[#6E7495]">Signal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {compareData.visible.length === 0 ? (
                            <tr><td colSpan={5} className="p-8 text-center text-[#6E7495]">No dates matching filters.</td></tr>
                          ) : (
                            compareData.visible.map(row => (
                              <tr key={row.date} className="border-b border-[#F4F1E8]/5 hover:bg-[#F4F1E8]/5 transition-colors">
                                <td className="p-3 font-mono text-[#9AA1C0]">{format(row.d, 'dd MMM')}</td>
                                {compareData.selectedCountries.map(code => (
                                  <td key={code} className="p-3 font-medium">
                                    {row.data[code] ? row.data[code].name : <span className="opacity-20">—</span>}
                                  </td>
                                ))}
                                <td className="p-3">
                                  <span className={cn(
                                    "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm",
                                    row.kind === 'mismatch' ? "text-[#E8A33D] bg-[#E8A33D]/10" : "text-[#9AA1C0] bg-white/5"
                                  )}>{row.kind}</span>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ---------- WORLD PULSE TICKER ---------- */}
        <section className="pulse bg-[#171D3A] border-y border-[#F4F1E8]/10 py-6 overflow-hidden" id="world">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8 flex items-center gap-12">
            <div className="flex gap-9 shrink-0 pr-9 border-r border-[#F4F1E8]/18">
              <div className="text-left">
                <b className="font-headline text-2xl font-semibold block">12</b>
                <span className="text-[11px] text-[#6E7495] uppercase tracking-wider">countries</span>
              </div>
              <div className="text-left">
                <b className="font-headline text-2xl font-semibold block">4</b>
                <span className="text-[11px] text-[#6E7495] uppercase tracking-wider">holidays</span>
              </div>
            </div>
            <div className="relative flex-1 overflow-hidden whitespace-nowrap mask-marquee">
              <div className="inline-flex gap-4 animate-marquee">
                {[
                  { c: 'India', e: 'Janmashtami, Dahi Handi', f: '🇮🇳' },
                  { c: 'Japan', e: 'no observance today', f: '🇯🇵' },
                  { c: 'USA', e: 'Labor Day season', f: '🇺🇸' },
                  { c: 'Singapore', e: 'National Day season', f: '🇸🇬' },
                  { c: 'India', e: 'Janmashtami, Dahi Handi', f: '🇮🇳' },
                  { c: 'Japan', e: 'no observance today', f: '🇯🇵' },
                ].map((item, i) => (
                  <span key={i} className="text-[13.5px] text-[#9AA1C0] border border-[#F4F1E8]/10 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                    <span>{item.f}</span> <b className="text-[#F4F1E8] font-medium">{item.c}</b> — {item.e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- THE STORY OF TODAY ---------- */}
        <section className="bg-[#0F1428] border-b border-[#F4F1E8]/10 py-20">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-1 hidden md:block">
              <div className="w-px h-32 bg-[#F4F1E8]/20 mx-auto" />
            </div>
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-4 text-[#E8A33D]">
                <BookOpen className="w-5 h-5" />
                <span className="font-mono text-[10px] uppercase tracking-[0.5em]">The Story of Today</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-medium tracking-tight italic">{TODAY_STORY.headline}</h2>
              <p className="text-xl md:text-2xl text-[#9AA1C0] leading-relaxed font-display italic">
                "{TODAY_STORY.content}"
              </p>
            </div>
            <div className="md:col-span-4 bg-[#171D3A] border border-[#F4F1E8]/10 p-8 rounded-sm space-y-8">
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#E8A33D]">Live Metric</p>
                <p className="text-4xl font-bold font-headline">{TODAY_STORY.stat}</p>
              </div>
              <div className="space-y-1 pt-4 border-t border-[#F4F1E8]/10">
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#9AA1C0]">Operational context</p>
                <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Regional impact concentrated in Mumbai metropolitan region.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- EXPLORER (October 2026 Example) ---------- */}
        <section id="calendar" className="py-24 border-t border-[#F4F1E8]/10">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8">
            <div className="section-head mb-14 text-left">
              <div className="font-mono text-[12px] text-[#4FD1C5] uppercase tracking-widest mb-3">Take a closer look</div>
              <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight mb-4">See what a month actually looks like.</h2>
              <p className="text-[#9AA1C0] text-lg max-w-[52ch]">We flag the bridges for you — that one day off that quietly turns a weekend into a four-day break.</p>
            </div>
            <div className="grid md:grid-cols-[1.1fr_0.9fr] border border-[#F4F1E8]/18 rounded-[18px] overflow-hidden bg-[#171D3A]">
              <div className="p-9 md:p-12">
                <div className="flex justify-between items-baseline mb-8">
                  <h3 className="font-headline text-xl font-medium">October 2026 · India</h3>
                  <span className="font-mono text-[11px] text-[#6E7495] uppercase">national view</span>
                </div>
                <div className="grid grid-cols-7 gap-1.5 mb-4">
                  {['M','T','W','T','F','S','S'].map((d, idx) => (
                    <div key={`${d}-${idx}`} className="text-[11px] text-[#6E7495] text-center font-mono pb-2">{d}</div>
                  ))}
                  {[28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1].map((d, i) => (
                    <div key={i} className={cn(
                      "aspect-square flex items-center justify-center text-sm rounded-lg transition-colors",
                      i < 3 ? "text-[#6E7495]/40" : "text-[#9AA1C0]",
                      [31, 32, 33, 34].includes(i) ? "bg-[#E8A33D]/16 text-[#F0C888] font-semibold" : "hover:bg-white/5"
                    )}>
                      {d}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#4FD1C5]/10 border border-[#4FD1C5]/25 rounded-xl text-[13.5px] text-white">
                  <b className="text-[#4FD1C5]">Long weekend flagged.</b> Diwali on the 29th bridges into a 4-day break across most states.
                </div>
              </div>
              <div className="bg-[#1E2650] p-9 md:p-12 flex flex-col justify-center gap-8 border-l border-[#F4F1E8]/18">
                <div className="flex justify-between items-baseline pb-5 border-b border-[#F4F1E8]/10 text-left">
                  <b className="font-headline text-3xl font-semibold text-[#F0C888]">21</b>
                  <span className="text-[13px] text-[#9AA1C0] uppercase tracking-wider">working days</span>
                </div>
                <div className="flex justify-between items-baseline pb-5 border-b border-[#F4F1E8]/10 text-left">
                  <b className="font-headline text-3xl font-semibold text-[#F0C888]">2</b>
                  <span className="text-[13px] text-[#9AA1C0] uppercase tracking-wider">public holidays</span>
                </div>
                <div className="flex justify-between items-baseline text-left">
                  <b className="font-headline text-3xl font-semibold text-[#F0C888]">1</b>
                  <span className="text-[13px] text-[#9AA1C0] uppercase tracking-wider">bridge opportunity</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- TRUST PILLARS ---------- */}
        <section id="intelligence" className="py-24 bg-[#171D3A]">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8">
            <div className="section-head mb-14 text-left">
              <div className="font-mono text-[12px] text-[#E8A33D] uppercase tracking-widest mb-3">Verified Infrastructure</div>
              <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight mb-4">Trust is part of the data.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-[#F4F1E8]/18 rounded-[16px] overflow-hidden bg-[#F4F1E8]/10">
              {[
                { m: 'SRC', h: 'Source-aware', p: 'Access the exact authoritative origins of every date and regional rule.' },
                { m: 'VER', h: 'Verification-aware', p: 'Differentiate between confirmed, declared, and estimated observations.' },
                { m: 'REG', h: 'Region-aware', p: 'Navigate the complex jurisdictional differences between states and cities.' },
                { m: 'DAT', h: 'Date-aware', p: 'Sophisticated handling of lunar, lunisolar, and declared cycles.' }
              ].map(t => (
                <div key={t.h} className="bg-[#171D3A] p-8 border-[0.5px] border-[#F4F1E8]/10 text-left">
                  <div className="w-9 h-9 border border-[#4FD1C5]/40 rounded-lg flex items-center justify-center font-mono text-[13px] text-[#4FD1C5] mb-6">{t.m}</div>
                  <h4 className="font-semibold text-[15.5px] mb-2">{t.h}</h4>
                  <p className="text-[13.5px] text-[#9AA1C0] leading-relaxed">{t.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CLOSING FLOW ---------- */}
        <section className="py-24 text-center border-t border-[#F4F1E8]/10 bg-[#0F1428]">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8">
            <h2 className="font-headline font-medium italic text-2xl md:text-3xl leading-relaxed text-white max-w-[26ch] mx-auto mb-12 text-left md:text-center">
              We started out just helping people find out what's being celebrated today. Turns out a lot of systems needed to know that too.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="font-mono text-[13px] text-[#0F1428] bg-[#F0C888] px-5 py-2.5 rounded-full">Discovery</span>
              <span className="text-[#9AA1C0] text-sm">—</span>
              <span className="font-mono text-[13px] text-[#9AA1C0] border border-[#F4F1E8]/18 px-5 py-2.5 rounded-full">Global intelligence</span>
              <span className="text-[#9AA1C0] text-sm">—</span>
              <span className="font-mono text-[13px] text-[#9AA1C0] border border-[#F4F1E8]/18 px-5 py-2.5 rounded-full">Intelligence API</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-9 border-t border-[#F4F1E8]/10">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 flex flex-wrap justify-between items-center gap-4 text-[13px] text-[#6E7495]">
          <div>Utsavs · global calendar intelligence · prototype, 2026</div>
          <div className="flex gap-6">
            <Link href="/" className="text-[#9AA1C0] hover:text-white transition-colors">Explore Utsavs.com</Link>
            <Link href="/calendar" className="text-[#9AA1C0] hover:text-white transition-colors">Full calendar</Link>
            <Link href="#api" className="text-[#9AA1C0] hover:text-white transition-colors">Join API preview</Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .mask-marquee {
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .font-headline { font-family: var(--font-headline), serif; }
        .font-display { font-family: var(--font-display), serif; font-style: italic; }
        .font-mono { font-family: var(--font-mono), monospace; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(244,241,232,0.1); border-radius: 10px; }
      `}</style>
    </div>
  );
}
