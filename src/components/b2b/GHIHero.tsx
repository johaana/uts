'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Sparkles, Loader2 } from 'lucide-react';
import { GHI_RECORDS, GHIEvent } from '@/lib/calendar-intelligence-data';
import { IntelligenceRecord } from './IntelligenceRecord';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function GHIHero() {
  const [isRotating, setIsRotating] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Logic to find "Today" relative to the current real date
  // Since we are using 2026 dates in the mock, we simulate 
  // the "Today" experience by cycling through a relevant subset
  const [currentIndex, setCurrentIndex] = useState(0);
  const todayEvents = useMemo(() => GHI_RECORDS.slice(0, 3), []);
  const activeRecord = todayEvents[currentIndex];

  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % todayEvents.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isRotating, todayEvents.length]);

  return (
    <section className="pt-6 pb-24 lg:pt-12 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl space-y-12">
            <div className="space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#E94368] mb-4 font-ui">Calendar Intelligence</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.92] tracking-tighter text-[#17151A] font-display">
                Understand the <br /> world's calendar.
              </h1>
              <p className="text-lg md:text-xl text-[#6D6870] font-ui leading-relaxed max-w-2xl font-medium text-left">
                A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.
              </p>
              <div className="pt-4 text-left">
                <Link href="/date-intelligence">
                    <button className="bg-[#17151A] text-white font-bold text-xs h-12 px-8 rounded-sm shadow-lg hover:bg-black transition-colors uppercase tracking-widest">
                      Check Date Intelligence →
                    </button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="pt-8 border-t border-[#DED9D0]">
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
          
          <div className="flex-[1.2] w-full relative">
            <div className="absolute -top-12 left-0 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#E94368]/5 border border-[#E94368]/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E94368] animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E94368]">Live Now</span>
              </div>
              <p className="text-[10px] font-bold text-[#6D6870]/60 uppercase tracking-widest">Celebrating Today</p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeRecord.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <IntelligenceRecord record={activeRecord} />
              </motion.div>
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
