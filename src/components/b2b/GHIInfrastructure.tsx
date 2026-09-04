'use client';

import React from 'react';

const pillars = [
  { title: "SOURCE-AWARE", desc: "Access the exact authoritative origins of every date and regional rule." },
  { title: "VERIFICATION-AWARE", desc: "Differentiate between confirmed, declared, provisional, and estimated observations." },
  { title: "REGION-AWARE", desc: "Navigate the complex jurisdictional differences between states and provinces." },
  { title: "DATE-AWARE", desc: "Sophisticated handling of lunar, lunisolar, and government-declared cycles." },
];

export function GHIInfrastructure() {
  return (
    <section className="container mx-auto px-6">
      <div className="bg-[#17151A] text-[#F7F4EE] p-12 md:p-24 rounded-sm relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E94368]/10 blur-[150px] -mr-48 -mt-48"></div>
        
        <div className="relative z-10 space-y-24">
            <div className="max-w-3xl space-y-6">
               <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#E94368] font-ui">Infrastructure</p>
               <h2 className="text-4xl md:text-7xl font-bold font-display leading-[0.95] tracking-tighter">Trust is part <br/>of the data.</h2>
               <p className="text-lg md:text-xl text-[#F7F4EE]/60 font-ui leading-relaxed max-w-2xl font-medium">
                  Holiday information is not equally certain everywhere. Utsavs is designed to expose the origin, status, and context of every record.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
               {pillars.map(p => (
                  <div key={p.title} className="space-y-4">
                     <div className="h-0.5 w-10 bg-[#E94368]"></div>
                     <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E94368] font-ui">{p.title}</h4>
                     <p className="text-sm leading-relaxed text-[#F7F4EE]/80 font-ui font-medium">{p.desc}</p>
                  </div>
               ))}
            </div>
        </div>
      </div>
    </section>
  );
}
