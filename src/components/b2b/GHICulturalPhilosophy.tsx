'use client';

import React from 'react';
import { STORY_PREVIEWS } from '@/lib/ghi-temp-data';

export function GHICulturalPhilosophy() {
  return (
    <section className="container mx-auto px-6 text-center space-y-16">
      <div className="space-y-4">
         <h2 className="text-5xl md:text-8xl font-bold tracking-tighter font-display leading-[0.9]">Beyond the date.</h2>
         <p className="text-lg md:text-2xl text-[#6D6870] font-ui leading-relaxed max-w-2xl mx-auto font-medium">
            "A holiday is more than a date."
         </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
         {STORY_PREVIEWS.map(story => (
            <div key={story.title} className="p-10 border border-[#DED9D0] bg-white rounded-sm text-left group hover:border-[#17151A] transition-all">
               <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E94368] mb-6 block">{story.tag}</span>
               <h3 className="text-3xl font-bold font-display mb-4 tracking-tight">{story.title}</h3>
               <p className="text-sm text-[#6D6870] leading-relaxed font-ui font-medium">{story.desc}</p>
            </div>
         ))}
      </div>

      <div className="pt-8">
         <p className="text-2xl md:text-[42px] font-display font-bold leading-[1.1] text-[#17151A] tracking-tighter max-w-3xl mx-auto">
            "Structured enough for machines. <br />
            Meaningful enough for people."
         </p>
      </div>
    </section>
  );
}
