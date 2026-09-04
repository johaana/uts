'use client';

import React, { useEffect } from 'react';
import { B2BHeader } from '@/components/b2b/B2BHeader';
import { B2BFooter } from '@/components/b2b/B2BFooter';
import { B2BHero } from '@/components/b2b/B2BHero';
import { Capabilities } from '@/components/b2b/Capabilities';
import { Comparison } from '@/components/b2b/Comparison';
import { DataHierarchy } from '@/components/b2b/DataHierarchy';
import { ApiTeaser } from '@/components/b2b/ApiTeaser';
import { 
  TrustPillars, 
  CulturalContext, 
  UseCaseGrid, 
  EcosystemStatement, 
  FinalCTA,
  BeyondTheDate
} from '@/components/b2b/SharedComponents';
import { IntelligenceRecord } from '@/components/b2b/IntelligenceRecord';

export default function GlobalHolidayIntelligencePage() {
  // Inject required fonts and suppress global header/footer for this isolated route
  useEffect(() => {
    // Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&family=IBM+Plex+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Suppress global header/footer
    const style = document.createElement('style');
    style.id = 'b2b-isolation-styles';
    style.innerHTML = `
      header:not(.b2b-header), footer:not(.b2b-footer), .bottom-nav { display: none !important; }
      body { background-color: #F7F4EE !important; }
    `;
    document.head.appendChild(style);

    return () => {
      document.getElementById('b2b-isolation-styles')?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#17151A] selection:bg-[#E94368]/20 font-sans antialiased overflow-x-hidden">
      {/* Scoped CSS Utility Classes */}
      <style jsx global>{`
        :root {
          --font-display: 'Newsreader', serif;
          --font-ui: 'Manrope', sans-serif;
          --font-data: 'IBM Plex Mono', monospace;
        }
        .font-display { font-family: var(--font-display); }
        .font-ui { font-family: var(--font-ui); }
        .font-data { font-family: var(--font-data); }
        
        h1, h2, h3 { font-family: var(--font-display); }
        
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
        .data-line {
          height: 1px;
          background: #DED9D0;
          position: relative;
        }
        .data-dot {
          width: 6px;
          height: 6px;
          background: #E94368;
          border-radius: 50%;
          position: absolute;
          top: -2.5px;
        }
        .tech-grid {
          background-image: 
            linear-gradient(to right, #DED9D0 1px, transparent 1px),
            linear-gradient(to bottom, #DED9D0 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
        }
      `}</style>

      <B2BHeader />
      
      <main className="space-y-[80px] md:space-y-[140px] pb-[100px]">
        <div className="relative">
          <div className="absolute inset-0 tech-grid opacity-[0.15] pointer-events-none"></div>
          <B2BHero />
        </div>
        
        <BeyondTheDate />
        
        <Capabilities />
        
        <Comparison />
        
        <section className="container mx-auto px-6">
            <div className="text-center mb-16">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E94368] mb-4 font-ui">The Intelligence Model</p>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">One holiday.<br/>More useful information.</h2>
            </div>
            <div className="max-w-4xl mx-auto">
                <IntelligenceRecord size="large" />
            </div>
        </section>

        <DataHierarchy />
        
        <TrustPillars />
        
        <CulturalContext />
        
        <ApiTeaser />
        
        <UseCaseGrid />
        
        <EcosystemStatement />
        
        <FinalCTA />
      </main>

      <B2BFooter />
    </div>
  );
}
