'use client';

import React, { useEffect } from 'react';
import { GHIHeader } from '@/components/b2b/GHIHeader';
import { GHIHero } from '@/components/b2b/GHIHero';
import { GHIFeaturedRecord } from '@/components/b2b/GHIFeaturedRecord';
import { GHIWorldPulseSection } from '@/components/b2b/GHIWorldPulseSection';
import { GHICalendarExplorer } from '@/components/b2b/GHICalendarExplorer';
import { GHICulturalPhilosophy } from '@/components/b2b/GHICulturalPhilosophy';
import { GHIInfrastructure } from '@/components/b2b/GHIInfrastructure';
import { GHIApiSection } from '@/components/b2b/GHIApiSection';
import { GHIFooter } from '@/components/b2b/GHIFooter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FEATURED_RECORD } from '@/lib/ghi-temp-data';

export default function GlobalHolidayIntelligenceV3() {
  // Inject fonts and isolate route styles
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&family=IBM+Plex+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.id = 'ghi-v3-isolation';
    style.innerHTML = `
      header:not(.ghi-header), footer:not(.ghi-footer), .bottom-nav { display: none !important; }
      body { background-color: #F7F4EE !important; }
      :root {
        --font-display: 'Newsreader', serif;
        --font-ui: 'Manrope', sans-serif;
        --font-data: 'IBM Plex Mono', monospace;
      }
      .font-display { font-family: var(--font-display); }
      .font-ui { font-family: var(--font-ui); }
      .font-data { font-family: var(--font-data); }
      
      .btn-ink {
        background-color: #17151A;
        color: #FFFFFF;
        font-family: var(--font-ui);
        transition: all 0.3s ease;
      }
      .btn-ink:hover {
        background-color: #17151A;
        box-shadow: 0 4px 20px -4px rgba(233, 67, 104, 0.3);
        transform: translateY(-1px);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.getElementById('ghi-v3-isolation')?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#17151A] selection:bg-[#E94368]/20 font-sans antialiased overflow-x-hidden">
      <GHIHeader />
      
      <main className="space-y-[100px] md:space-y-[160px] pb-[100px]">
        {/* 02. HERO / SEARCH */}
        <GHIHero />

        {/* 06. FEATURED INTELLIGENCE RECORD */}
        <GHIFeaturedRecord record={FEATURED_RECORD} />

        {/* 09. WORLD PULSE */}
        <GHIWorldPulseSection />

        {/* 10. CALENDAR EXPLORER */}
        <GHICalendarExplorer />

        {/* 11. CULTURAL PHILOSOPHY */}
        <GHICulturalPhilosophy />

        {/* 12. INFRASTRUCTURE */}
        <GHIInfrastructure />

        {/* 13. API */}
        <GHIApiSection />

        {/* FINAL CTA */}
        <section className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter font-display leading-[0.9]">Understand <br/> the calendar.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="btn-ink h-14 px-12 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm shadow-2xl">
                Join API Preview
              </Button>
              <Button variant="outline" className="h-14 px-12 border-2 border-[#17151A] text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm font-ui hover:bg-[#F7F4EE]">
                Explore Utsavs
              </Button>
            </div>
          </div>
        </section>
      </main>

      <GHIFooter />
    </div>
  );
}
