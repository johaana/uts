'use client';

import React, { useEffect } from 'react';
import { B2BHeader } from '@/components/b2b/B2BHeader';
import { B2BHero } from '@/components/b2b/B2BHero';
import { WorldPulse } from '@/components/b2b/WorldPulse';
import { CalendarExplorer } from '@/components/b2b/CalendarExplorer';
import { JurisdictionHierarchy } from '@/components/b2b/JurisdictionHierarchy';
import { BeyondTheDate, TrustPillars, CulturalContext, EcosystemStatement, FinalCTA } from '@/components/b2b/SharedComponents';
import { B2BFooter } from '@/components/b2b/B2BFooter';

export default function GlobalHolidayIntelligenceV3() {
  // Inject fonts and isolate route styles to Claude-like visual discipline
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
        {/* 01. HERO / PRODUCT INTERACTION */}
        <B2BHero />

        {/* 02. WORLD PULSE (The Living Heatmap) */}
        <WorldPulse />

        {/* 03. JURISDICTION HIERARCHY (The Enterprise Moat) */}
        <JurisdictionHierarchy />

        {/* 04. CALENDAR EXPLORER (Operational Lenses) */}
        <CalendarExplorer />

        {/* 05. BEYOND THE DATE PIPELINE (Philosophy) */}
        <BeyondTheDate />

        {/* 06. TRUST INFRASTRUCTURE (Credibility) */}
        <TrustPillars />

        {/* 07. ECOSYSTEM BRIDGE (The Story) */}
        <EcosystemStatement />

        {/* 08. FINAL CTA */}
        <FinalCTA />
      </main>

      <B2BFooter />
    </div>
  );
}
