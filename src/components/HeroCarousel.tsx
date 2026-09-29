'use client';

import React from 'react';

export function HeroCarousel() {
  return (
    <div className="w-full bg-[#171D3A] border-y border-white/5 py-12 md:py-24 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #F4F1E8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
       
       <div className="container mx-auto px-6 relative z-10 text-center space-y-4">
          <span className="font-mono text-[10px] font-bold text-[#E8A33D] uppercase tracking-[0.4em]">Intelligence Layer v4.2</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-white tracking-tighter leading-tight max-w-4xl mx-auto">
             World Class Date Precision. <br />
             <span className="italic text-[#9AA1C0]">Source-backed. Rule-driven.</span>
          </h2>
          <p className="text-lg text-[#9AA1C0] font-medium max-w-2xl mx-auto">
             We reconcile complex global calendars into structured planning intelligence.
          </p>
       </div>
    </div>
  );
}
