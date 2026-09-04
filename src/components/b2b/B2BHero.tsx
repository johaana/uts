'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { IntelligenceRecord } from './IntelligenceRecord';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_RECORDS, IntelligenceRecordData } from '@/lib/calendar-intelligence-data';
import { cn } from '@/lib/utils';

export function B2BHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCK_RECORDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeRecord = MOCK_RECORDS[currentIndex];

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-2xl"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#E94368] mb-4 font-ui">Global Holiday Intelligence</p>
            <h1 className="text-5xl md:text-6xl lg:text-[92px] font-bold leading-[0.95] mb-8 tracking-[-0.03em] text-[#17151A] font-display">
              Understand the <br /> world's calendar.
            </h1>
            <div className="space-y-6 max-w-lg mb-10">
              <p className="text-lg md:text-2xl text-[#6D6870] leading-tight font-ui font-medium tracking-tight">
                Structured, verified intelligence for holidays, festivals and observances — by country, region, date and source.
              </p>
              <p className="text-sm text-[#6D6870]/70 leading-relaxed font-ui max-w-md tracking-wide">
                Built for the systems that need to understand not only when a holiday occurs, but where it applies and how it impacts operations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-10">
              <Button size="lg" className="bg-[#17151A] text-white hover:bg-[#17151A]/90 h-12 px-8 text-[11px] font-bold uppercase tracking-[0.3em] rounded-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-[#17151A]/10">
                Explore the Intelligence
              </Button>
              <Button variant="ghost" className="text-[#6D6870] hover:text-[#17151A] font-bold text-[11px] uppercase tracking-[0.3em] font-ui transition-all">
                API Preview
              </Button>
            </div>
          </motion.div>
          
          <div className="flex-1 w-full max-w-lg lg:sticky lg:top-8 relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeRecord.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="absolute -inset-16 bg-gradient-to-tr from-[#E94368]/10 to-transparent blur-[120px] rounded-full group-hover:opacity-100 transition-opacity duration-1000 opacity-60"></div>
                <IntelligenceRecord record={activeRecord} />
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-8 flex items-center justify-center gap-4">
              {MOCK_RECORDS.map((_, i) => (
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
