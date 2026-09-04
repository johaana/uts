'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Loader2 } from 'lucide-react';
import { MOCK_RECORDS, IntelligenceRecordData } from '@/lib/calendar-intelligence-data';
import { IntelligenceRecord } from './IntelligenceRecord';
import { Input } from '@/components/ui/input';

export function CalendarHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [searchQuery, setSearchTerm] = useState('');
  const [activeRecord, setActiveRecord] = useState<IntelligenceRecordData>(MOCK_RECORDS[0]);

  // Handle rotation
  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOCK_RECORDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isRotating]);

  // Update active record based on rotation
  useEffect(() => {
    if (isRotating) {
      setActiveRecord(MOCK_RECORDS[currentIndex]);
    }
  }, [currentIndex, isRotating]);

  // Handle search simulation
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    setIsRotating(false);

    const match = MOCK_RECORDS.find(r => 
      r.name.toLowerCase().includes(val.toLowerCase()) || 
      r.location.country.toLowerCase().includes(val.toLowerCase())
    );
    if (match) setActiveRecord(match);
  };

  return (
    <section className="pt-12 pb-24 lg:pt-20 lg:pb-32 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
        {/* Left: Product Interaction */}
        <div className="flex-1 max-w-xl space-y-10">
          <div className="space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#E94368] mb-4 font-ui">Calendar Intelligence</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.92] tracking-tighter text-[#17151A] font-display">
              Understand the <br /> world's calendar.
            </h1>
            <p className="text-lg md:text-xl text-[#6D6870] leading-relaxed font-ui font-medium max-w-md">
              Search holidays, festivals and observances anywhere in the world.
            </p>
          </div>

          {/* Search Interface */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#17151A] font-ui">Search the Calendar</label>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D6870] group-focus-within:text-[#E94368] transition-colors" />
                <Input 
                  type="text"
                  placeholder="Search a holiday, place, date or question..."
                  className="h-14 pl-12 bg-white border-[#DED9D0] rounded-sm font-ui text-base focus:ring-0 focus:border-[#17151A] transition-all"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {['Diwali', 'Japan', 'October 2026', 'What\'s next in India?'].map(ex => (
                  <button 
                    key={ex}
                    onClick={() => { setSearchTerm(ex); handleSearch({ target: { value: ex } } as any); }}
                    className="text-[10px] font-bold uppercase tracking-widest text-[#6D6870] hover:text-[#17151A] transition-colors underline underline-offset-4"
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#DED9D0]">
               <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#6D6870] font-ui">Your Calendar</p>
                    <div className="flex items-center gap-2 text-sm font-bold font-ui">
                      <MapPin className="w-4 h-4 text-[#E94368]" />
                      <span>WORLD</span>
                      <button className="text-[10px] text-[#6D6870] font-medium ml-2 hover:text-[#17151A]">Change →</button>
                    </div>
                  </div>
                  <button className="btn-ink h-10 px-6 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-2">
                    Use My Location
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Right: Dynamic Record */}
        <div className="flex-[1.2] w-full relative">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeRecord.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <IntelligenceRecord record={activeRecord} isHero={true} />
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-[9px] font-bold uppercase tracking-[0.4em] text-[#6D6870]/40">
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
    </section>
  );
}
