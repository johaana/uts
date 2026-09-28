'use client';

import { useEffect, useState, useMemo } from 'react';
import { IntelligenceRecord } from './IntelligenceRecord';
import { motion, AnimatePresence } from 'framer-motion';
import { GHI_RECORDS, GHIEvent } from '@/lib/calendar-intelligence-data';
import { MapPin, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function B2BHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  const todayEvents = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth(); 
    const currentDay = now.getDate();

    const matches = GHI_RECORDS.filter(r => r.month === currentMonth && r.day === currentDay);
    if (matches.length > 0) return matches;

    const monthly = GHI_RECORDS.filter(r => r.month === currentMonth);
    if (monthly.length > 0) return monthly;

    return GHI_RECORDS.slice(0, 3);
  }, []);

  useEffect(() => {
    if (!isRotating || todayEvents.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % todayEvents.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isRotating, todayEvents.length]);

  const activeRecord = todayEvents[currentIndex];

  return (
    <section className="pt-6 pb-24 lg:pt-12 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 text-left">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          {/* 01. INTENT */}
          <div className="flex-1 max-w-xl space-y-10">
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#E94368] mb-4 font-ui">Calendar Intelligence</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.92] tracking-tighter text-[#17151A] font-display">
                Understand the <br /> world's calendar.
              </h1>
              <p className="text-lg md:text-xl text-[#6D6870] leading-relaxed font-ui font-medium max-w-md">
                Verified temporal data for human discovery and operational systems.
              </p>
            </div>

            <div className="space-y-6">
              <div className="pt-6 border-t border-[#DED9D0]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <MapPin className="w-4 h-4 text-[#E94368]" />
                     <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#17151A] font-ui">Your Location: <span className="text-[#6D6870]">MUMBAI, INDIA</span></p>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-[#6D6870] hover:text-[#17151A] transition-colors">Change →</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* 02. LIVE RECORD */}
          <div className="flex-[1.2] w-full relative">
            <div className="absolute -top-12 left-0 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#E94368]/5 border border-[#E94368]/20 rounded-full">
                <Sparkles className="w-3 h-3 text-[#E94368]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E94368]">Living Calendar</span>
              </div>
              <p className="text-[10px] font-bold text-[#6D6870]/60 uppercase tracking-widest">Showing: Celebrations Today</p>
            </div>

            <AnimatePresence mode="wait">
              {activeRecord && (
                <motion.div 
                  key={activeRecord.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <IntelligenceRecord record={activeRecord} />
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="mt-8 flex items-center justify-center gap-4 text-[9px] font-bold uppercase tracking-[0.4em] text-[#6D6870]/40">
              {todayEvents.map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-1 transition-all duration-500", 
                    i === currentIndex ? "w-8 bg-[#E94368]" : "w-2 bg-[#DED9D0]"
                  )} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
