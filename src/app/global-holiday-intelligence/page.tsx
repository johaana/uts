'use client';

import React, { useEffect } from 'react';
import { B2BHeader } from '@/components/b2b/B2BHeader';
import { B2BHero } from '@/components/b2b/B2BHero';
import { GHIAgenda } from '@/components/b2b/GHIAgenda';
import { GHINuance } from '@/components/b2b/GHINuance';
import { TrustPillars, FinalCTA } from '@/components/b2b/SharedComponents';
import { B2BFooter } from '@/components/b2b/B2BFooter';
import { ApiTeaserV3 } from '@/components/b2b/ApiTeaserV3';

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
      header:not(.b2b-header), footer:not(.b2b-footer), .bottom-nav { display: none !important; }
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
      <B2BHeader />
      
      <main className="space-y-[100px] md:space-y-[160px] pb-[100px]">
        {/* 01. HERO / LIVE DASHBOARD */}
        <B2BHero />

        {/* 02. THE AGENDA (Replacement for oversized calendar) */}
        <GHIAgenda />

        {/* 03. NUANCE & STORYTELLING */}
        <GHINuance />

        {/* 04. TRUST & VERIFICATION */}
        <TrustPillars />

        {/* 05. API PREVIEW */}
        <ApiTeaserV3 />

        {/* 06. FINAL CTA */}
        <FinalCTA />
      </main>

      <B2BFooter />
    </div>
  );
}
