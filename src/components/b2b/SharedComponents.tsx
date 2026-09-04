'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function BeyondTheDate() {
  const steps = [
    { label: "When", sub: "DATE" },
    { label: "Where", sub: "PLACE" },
    { label: "What", sub: "CONTEXT" },
    { label: "Why", sub: "VERIFICATION" },
    { label: "How", sub: "IMPACT" }
  ];

  return (
    <section className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Beyond the date.</h2>
            <p className="text-lg md:text-xl text-[#6D6870] leading-relaxed font-ui max-w-2xl mx-auto">
                Utsavs tells systems when a holiday occurs, where it applies, what kind of day it is, why it matters, and how certain the information is.
            </p>
        </div>
        <div className="pt-12 relative max-w-3xl mx-auto">
            <div className="data-line"></div>
            <div className="flex justify-between mt-8">
                {steps.map((step, i) => (
                    <div key={step.label} className="relative flex flex-col items-center">
                        <div className="data-dot" style={{ left: '50%', marginLeft: '-3px' }}></div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#17151A] mb-1 font-ui">{step.label}</p>
                        <p className="text-[9px] font-bold text-[#6D6870] uppercase tracking-widest font-data">{step.sub}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

export function TrustPillars() {
  const pillars = [
    { title: "SOURCE-AWARE", desc: "Know exactly where information comes from." },
    { title: "VERIFICATION-AWARE", desc: "Know whether a date is confirmed, provisional or estimated." },
    { title: "REGION-AWARE", desc: "Understand differences between countries, states and regions." },
    { title: "DATE-AWARE", desc: "Handle fixed, lunar, lunisolar and declared dates." },
  ];

  return (
    <section className="container mx-auto px-6">
      <div className="bg-[#17151A] text-[#F7F4EE] p-12 md:p-24 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E94368]/5 blur-[120px]"></div>
        <div className="relative z-10 space-y-24">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Trust is part of the data.</h2>
                <p className="text-lg text-[#F7F4EE]/60 font-ui leading-relaxed">
                    Holiday information is not equally certain everywhere. Utsavs is designed to expose the origin, status and context of every date.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {pillars.map(p => (
                    <div key={p.title} className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E94368] font-ui">{p.title}</h4>
                        <p className="text-sm leading-relaxed text-[#F7F4EE]/80 font-ui">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

export function CulturalContext() {
  const labels = ["Why it matters", "Traditions", "Regional nuance", "Cultural significance"];

  return (
    <section className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">Data with cultural context.</h2>
            <p className="text-lg md:text-xl text-[#6D6870] leading-relaxed font-ui max-w-2xl mx-auto">
                A holiday is more than a date. Utsavs combines structured calendar data with concise cultural context — why it is celebrated, key traditions and regional variations.
            </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
            {labels.map(l => (
                <span key={l} className="px-6 py-3 border border-[#DED9D0] text-[10px] font-bold uppercase tracking-[0.2em] font-ui">{l}</span>
            ))}
        </div>
        <div className="pt-8">
            <p className="text-xl md:text-[32px] font-display font-bold leading-tight text-[#17151A]">
                Structured enough for machines. <br />
                Meaningful enough for people.
            </p>
        </div>
      </div>
    </section>
  );
}

export function UseCaseGrid() {
  const cases = [
    { title: "HR & Operations", desc: "Working days, closures and regional calendars." },
    { title: "Travel & Hospitality", desc: "Festivals, holidays and long-weekend discovery." },
    { title: "Fintech & Business", desc: "Regional holidays, market closures and planning." },
    { title: "Developers", desc: "Structured calendar intelligence for products." }
  ];

  return (
    <section className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for systems that need<br/>to understand the calendar.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map(c => (
          <div key={c.title} className="p-10 border border-[#DED9D0] bg-white rounded-sm space-y-4 hover:border-[#E94368] transition-colors">
            <h4 className="text-[12px] font-bold uppercase tracking-widest font-ui">{c.title}</h4>
            <p className="text-sm text-[#6D6870] leading-relaxed font-ui">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EcosystemStatement() {
  return (
    <section className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto text-center py-24 border-t border-b border-[#DED9D0] space-y-16">
        <p className="text-2xl md:text-4xl font-display font-bold leading-tight text-[#6D6870]">
            Utsavs began by helping people discover festivals. <br />
            <span className="text-[#17151A]">We're now building the intelligence layer that helps systems understand them.</span>
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            <div className="space-y-1">
                <p className="font-display text-xl font-bold">Utsavs.com</p>
                <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.2em] font-ui">Consumer Discovery</p>
            </div>
            <div className="text-[#E94368] rotate-90 md:rotate-0">→</div>
            <div className="space-y-1">
                <p className="font-display text-xl font-bold text-[#E94368]">Global Holiday Intelligence</p>
                <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.2em] font-ui">Structured Infrastructure</p>
            </div>
            <div className="text-[#E94368] rotate-90 md:rotate-0">→</div>
            <div className="space-y-1">
                <p className="font-display text-xl font-bold">Intelligence API</p>
                <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.2em] font-ui">B2B Delivery</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Build with a better understanding <br className="hidden md:block" /> of the world's calendar.</h2>
        <p className="text-lg text-[#6D6870] font-ui">Global holiday intelligence for the systems people use every day.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="btn-ink h-16 px-10 text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                Join API Preview
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 border-2 border-[#17151A] text-xs font-bold uppercase tracking-[0.2em] rounded-sm font-ui">
                Explore Utsavs
            </Button>
        </div>
      </div>
    </section>
  );
}
