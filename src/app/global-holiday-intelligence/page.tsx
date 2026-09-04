'use client';

import React, { useEffect } from 'react';
import { ProductHeader } from '@/components/b2b/ProductHeader';
import { CalendarHero } from '@/components/b2b/CalendarHero';
import { WorldPulse } from '@/components/b2b/WorldPulse';
import { CalendarExplorer } from '@/components/b2b/CalendarExplorer';
import { TrustInfrastructure } from '@/components/b2b/TrustInfrastructure';
import { ApiTeaserV3 } from '@/components/b2b/ApiTeaserV3';
import { EcosystemBridge } from '@/components/b2b/EcosystemBridge';
import { B2BFooterV3 } from '@/components/b2b/B2BFooterV3';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CalendarIntelligencePrototype() {
  // Inject fonts and isolate route styles
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&family=IBM+Plex+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.id = 'calendar-intelligence-isolation';
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
      document.getElementById('calendar-intelligence-isolation')?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#17151A] selection:bg-[#E94368]/20 font-sans antialiased overflow-x-hidden">
      <ProductHeader />
      
      <main className="space-y-[80px] md:space-y-[140px] pb-[100px]">
        {/* HERO / SEARCH */}
        <CalendarHero />

        {/* WORLD PULSE */}
        <WorldPulse />

        {/* YOUR WORLD (PERSONALIZED HOOK) */}
        <section className="container mx-auto px-6">
           <div className="bg-white border border-[#DED9D0] p-12 md:p-24 rounded-sm text-center space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#E94368] font-ui">Your World</p>
                <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A]">Your calendar, <br className="hidden md:block" /> personalized by location.</h2>
                <p className="text-lg md:text-xl text-[#6D6870] font-ui leading-relaxed max-w-2xl mx-auto font-medium">
                  Follow the jurisdictions that matter to you—where you live, where you work, and where you travel.
                </p>
              </div>
              <Button className="btn-ink h-14 px-12 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm shadow-xl shadow-[#17151A]/10 transition-all duration-300 hover:scale-105">
                Set Up Your World
              </Button>
           </div>
        </section>

        {/* CALENDAR EXPLORER */}
        <CalendarExplorer />

        {/* ONE HOLIDAY, MANY WORLDS */}
        <section className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
               <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E94368] font-ui text-left">Differentiator</p>
               <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A] text-left">One holiday. <br/> Many calendars.</h2>
               <p className="text-lg text-[#6D6870] leading-relaxed max-w-lg font-ui font-medium text-left">
                  Utsavs understands that a single event has different consequences across borders. We map the complexity of shared heritage and local law.
               </p>
               <div className="space-y-4 pt-4">
                  {['INDIA (National)', 'NEPAL (National)', 'SINGAPORE (Public Holiday)', 'MALAYSIA (Regional)'].map(loc => (
                    <div key={loc} className="flex items-center gap-4 group cursor-pointer">
                      <div className="h-[1px] w-8 bg-[#DED9D0] group-hover:bg-[#E94368] transition-all group-hover:w-12" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#6D6870] group-hover:text-[#17151A] transition-colors">{loc}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="flex-1 w-full bg-white border border-[#DED9D0] p-1 shadow-sm rounded-sm">
               <div className="bg-[#F7F4EE] p-12 text-center">
                  <p className="font-display italic text-2xl text-[#17151A]/40">Interactive Comparison Preview</p>
               </div>
            </div>
          </div>
        </section>

        {/* INFRASTRUCTURE / TRUST */}
        <TrustInfrastructure />

        {/* CULTURAL CONTEXT */}
        <section className="container mx-auto px-6 text-center space-y-16">
          <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-bold font-display tracking-tight">Data with <br className="md:hidden" /> cultural context.</h2>
              <p className="text-lg md:text-2xl text-[#6D6870] leading-relaxed font-ui max-w-3xl mx-auto font-medium">
                  A holiday is more than a date. Utsavs combines structured schemas with concise cultural intelligence—why it is celebrated and how it varies.
              </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
              {['Why it matters', 'Traditions', 'Regional nuance', 'Cultural significance'].map(l => (
                  <span key={l} className="px-10 py-5 border border-[#DED9D0] text-[10px] font-bold uppercase tracking-[0.3em] font-ui bg-white hover:border-[#E94368] transition-colors duration-500 cursor-default">{l}</span>
              ))}
          </div>
          <div className="pt-8">
              <p className="text-xl md:text-[42px] font-display font-bold leading-[1.1] text-[#17151A] tracking-tighter italic">
                  "Structured enough for machines. <br />
                  Meaningful enough for people."
              </p>
          </div>
        </section>

        {/* API PREVIEW */}
        <ApiTeaserV3 />

        {/* USE CASES */}
        <section className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E94368] font-ui">Lenses</p>
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A]">Built for systems that <br className="hidden md:block"/> need to understand time.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HR & Operations", desc: "Automate working-day calculations, payroll, and regional closure tracking." },
              { title: "Travel & Hospitality", desc: "Power discovery engines with verified festival dates and long-weekend intelligence." },
              { title: "Fintech & Business", desc: "Integrate market and regional holiday calendars for precise operational planning." },
              { title: "Developers", desc: "Leverage the first structured API built for global calendar intelligence." }
            ].map(c => (
              <div key={c.title} className="p-10 border border-[#DED9D0] bg-white rounded-sm space-y-6 hover:border-[#17151A] transition-all duration-500 hover:shadow-2xl group text-left">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] font-ui text-[#17151A]">{c.title}</h4>
                <p className="text-sm text-[#6D6870] leading-relaxed font-ui font-medium group-hover:text-[#17151A] transition-colors">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STORY / ECOSYSTEM */}
        <EcosystemBridge />

        {/* FINAL CTA */}
        <section className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter font-display leading-[0.9]">Understand <br/> the calendar.</h2>
            <p className="text-lg md:text-xl text-[#6D6870] font-ui font-medium max-w-2xl mx-auto">Verified global intelligence for the technical systems people use every day.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="btn-ink h-16 px-12 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
                    Join API Preview
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-12 border-2 border-[#17151A] text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm font-ui hover:bg-[#F7F4EE] transition-all active:scale-95">
                    Explore Utsavs
                </Button>
            </div>
          </div>
        </section>
      </main>

      <B2BFooterV3 />
    </div>
  );
}
