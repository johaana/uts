'use client';

import { motion } from 'framer-motion';

export function WorldPulse() {
  const regions = [
    { name: "INDIA", events: [7, 24] },
    { name: "JAPAN", events: [10, 21] },
    { name: "USA", events: [4, 15] },
    { name: "SINGAPORE", events: [8, 22] },
    { name: "UK", events: [12] }
  ];

  return (
    <section id="world" className="container mx-auto px-6 py-24">
      <div className="mb-20 text-center space-y-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E94368] font-ui">World Pulse</p>
        <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A]">What's happening around the world?</h2>
        <p className="text-lg text-[#6D6870] font-ui max-w-xl mx-auto">A living view of holidays and observances happening now and next.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.4em] text-[#17151A] font-ui border-b border-[#DED9D0] pb-6">
          <div className="flex gap-8">
            <button className="text-[#E94368] border-b border-[#E94368]">Today</button>
            <button className="text-[#6D6870]">7 Days</button>
            <button className="text-[#6D6870]">This Month</button>
          </div>
          <div className="font-data">SEP 2026</div>
        </div>

        <div className="space-y-10">
          {regions.map((region) => (
            <div key={region.name} className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-ui">{region.name}</span>
              </div>
              <div className="relative h-[2px] bg-[#DED9D0]/50 w-full">
                {region.events.map((pos) => (
                  <motion.div
                    key={pos}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-[-3px] w-2 h-2 rounded-full bg-[#E94368] cursor-pointer"
                    style={{ left: `${pos * 3}%` }}
                    whileHover={{ scale: 1.5, boxShadow: "0 0 12px rgba(233, 67, 104, 0.4)" }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-12 grid grid-cols-3 gap-8 border-t border-[#DED9D0]">
          {[
            { label: "Countries Observing", val: "12" },
            { label: "Public Holidays", val: "04" },
            { label: "Cultural Events", val: "19" }
          ].map(stat => (
            <div key={stat.label} className="text-center space-y-1">
              <p className="text-[28px] font-display font-bold text-[#17151A]">{stat.val}</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6D6870]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
