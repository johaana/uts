'use client';

import React from 'react';

export function GHINuance() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-10 text-left">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E94368] font-ui">Storytelling</p>
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A]">One Day. <br />Many Stories.</h2>
            <p className="text-lg text-[#6D6870] leading-relaxed font-ui font-medium max-w-lg">
              The same date can mean something entirely different as you cross a border. We capture the nuance, not just the date.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { label: "Regional Nuance", desc: "Why Diwali is 29 Oct in Delhi but 28 Oct in Singapore." },
              { label: "Cultural Depth", desc: "The transition from sacred ritual to public commercial closure." },
              { label: "Jurisdictional Rule", desc: "When local municipal law overrides the national schedule." }
            ].map(item => (
              <div key={item.label} className="space-y-2 border-l-2 border-[#E94368]/20 pl-6 group hover:border-[#E94368] transition-all">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#17151A]">{item.label}</h4>
                <p className="text-sm text-[#6D6870] font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full">
           <div className="bg-white border border-[#DED9D0] p-12 shadow-sm rounded-sm font-ui relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-[9px] font-bold uppercase tracking-widest text-[#DED9D0] font-data">U_REC_0921</div>
              <h3 className="text-3xl font-bold font-display mb-8 tracking-tight">Case Study: Diwali</h3>
              
              <div className="space-y-12">
                <div className="flex items-start gap-8 pb-8 border-b border-[#F7F4EE]">
                   <span className="font-data text-xs font-bold text-[#E94368]">INDIA</span>
                   <div className="flex-1 space-y-2 text-left">
                      <p className="text-lg font-bold">National Celebration</p>
                      <p className="text-sm text-[#6D6870]">Observed through the lens of Lord Rama's return to Ayodhya. Markets shutdown for the Vikram Samvat New Year.</p>
                   </div>
                </div>

                <div className="flex items-start gap-8 pb-8 border-b border-[#F7F4EE]">
                   <span className="font-data text-xs font-bold text-[#E94368]">NEPAL</span>
                   <div className="flex-1 space-y-2 text-left">
                      <p className="text-lg font-bold">Tihar Festival</p>
                      <p className="text-sm text-[#6D6870]">A five-day sequence honoring crows, dogs, cows, and the self. Different operational rules apply to banking and travel.</p>
                   </div>
                </div>

                <div className="flex items-start gap-8">
                   <span className="font-data text-xs font-bold text-[#E94368]">SGP</span>
                   <div className="flex-1 space-y-2 text-left">
                      <p className="text-lg font-bold">Deepavali</p>
                      <p className="text-sm text-[#6D6870]">A precise 1-day statutory holiday. High density activity in Little India; normal operational status elsewhere.</p>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
