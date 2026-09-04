'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function BeyondTheDate() {
  const steps = [
    { label: "When", sub: "DATE", delay: 0.1 },
    { label: "Where", sub: "PLACE", delay: 0.2 },
    { label: "What", sub: "CONTEXT", delay: 0.3 },
    { label: "Why", sub: "VERIFICATION", delay: 0.4 },
    { label: "How", sub: "IMPACT", delay: 0.5 }
  ];

  return (
    <section className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-[#17151A]">Beyond the date.</h2>
            <p className="text-lg md:text-xl text-[#6D6870] leading-relaxed font-ui max-w-2xl mx-auto font-medium">
                Utsavs provides the context systems need: where it applies, why it matters, and how certain the information is.
            </p>
        </div>
        <div className="pt-8 relative max-w-4xl mx-auto px-8">
            <div className="data-line opacity-50"></div>
            <div className="flex justify-between mt-10 relative">
                {steps.map((step, i) => (
                    <motion.div 
                        key={step.label} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: step.delay }}
                        className="relative flex flex-col items-center"
                    >
                        <div className="data-dot" style={{ left: '50%', marginLeft: '-3px' }}></div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#17151A] mb-1 font-ui">{step.label}</p>
                        <p className="text-[9px] font-bold text-[#E94368] uppercase tracking-[0.25em] font-data">{step.sub}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

export function TrustPillars() {
  const pillars = [
    { title: "SOURCE-AWARE", desc: "Access the exact authoritative origins of every date and regional rule." },
    { title: "VERIFICATION-AWARE", desc: "Differentiate between confirmed, provisional, and estimated observations." },
    { title: "REGION-AWARE", desc: "Navigate the complex jurisdictional differences between states and provinces." },
    { title: "DATE-AWARE", desc: "Sophisticated handling of lunar, lunisolar, and government-declared cycles." },
  ];

  return (
    <section className="container mx-auto px-6">
      <div className="bg-[#17151A] text-[#F7F4EE] p-12 md:p-24 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E94368]/10 blur-[150px] -mr-48 -mt-48"></div>
        <div className="relative z-10 space-y-24">
            <div className="max-w-3xl space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#E94368]">Data Architecture</p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[0.95] tracking-tighter">Trust is part <br/>of the data.</h2>
                <p className="text-lg md:text-xl text-[#F7F4EE]/60 font-ui leading-relaxed max-w-2xl">
                    Holiday information is not equally certain everywhere. Utsavs exposes the origin, status, and context of every record.
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

export function CulturalContext() {
  const labels = ["Event Context", "Sacred Traditions", "Regional Nuance", "Significance"];

  return (
    <section className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">Data with <br className="md:hidden" /> cultural context.</h2>
            <p className="text-lg md:text-xl text-[#6D6870] leading-relaxed font-ui max-w-3xl mx-auto font-medium">
                A holiday is more than a date. Utsavs combines structured schemas with concise cultural intelligence — why it is celebrated and how it varies.
            </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
            {labels.map(l => (
                <span key={l} className="px-8 py-4 border border-[#DED9D0] text-[10px] font-bold uppercase tracking-[0.3em] font-ui bg-white hover:border-[#E94368] transition-colors duration-500 cursor-default">{l}</span>
            ))}
        </div>
        <div className="pt-8">
            <p className="text-xl md:text-[36px] font-display font-bold leading-[1.1] text-[#17151A] tracking-tight">
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
    { title: "HR & Operations", desc: "Automate working-day calculations, payroll, and regional closure tracking." },
    { title: "Travel & Hospitality", desc: "Power discovery engines with verified festival dates and long-weekend intelligence." },
    { title: "Fintech & Business", desc: "Integrate market and regional holiday calendars for precise operational planning." },
    { title: "Developers", desc: "Leverage the first structured API built for global calendar intelligence." }
  ];

  return (
    <section className="container mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#E94368] font-ui">Implementation</p>
        <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-[#17151A]">Built for systems that <br className="hidden md:block"/> need to understand time.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map(c => (
          <div key={c.title} className="p-8 border border-[#DED9D0] bg-white rounded-sm space-y-4 hover:border-[#17151A] transition-all duration-500 hover:shadow-xl group">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] font-ui text-[#17151A]">{c.title}</h4>
            <p className="text-xs text-[#6D6870] leading-relaxed font-ui font-medium group-hover:text-[#17151A] transition-colors">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EcosystemStatement() {
  return (
    <section className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto text-center py-20 border-t border-b border-[#DED9D0] space-y-16">
        <p className="text-2xl md:text-4xl font-display font-bold leading-tight text-[#6D6870] tracking-tight">
            Utsavs began by helping people discover festivals. <br />
            <span className="text-[#17151A]">Now we build the layer that helps systems understand them.</span>
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 relative">
            <div className="space-y-2">
                <p className="font-display text-xl font-bold text-[#17151A]">Utsavs.com</p>
                <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.3em] font-ui">Discovery</p>
            </div>
            <div className="text-[#E94368] rotate-90 md:rotate-0 font-bold text-xl opacity-40">→</div>
            <div className="space-y-2 px-8 py-5 bg-white border border-[#DED9D0] shadow-sm">
                <p className="font-display text-xl font-bold text-[#E94368]">Global Intelligence</p>
                <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.3em] font-ui">Infrastructure</p>
            </div>
            <div className="text-[#E94368] rotate-90 md:rotate-0 font-bold text-xl opacity-40">→</div>
            <div className="space-y-2">
                <p className="font-display text-xl font-bold text-[#17151A]">Intelligence API</p>
                <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.3em] font-ui">Delivery</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="container mx-auto px-6 text-center py-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter font-display leading-[0.9]">Understand <br/> the calendar.</h2>
        <p className="text-lg md:text-xl text-[#6D6870] font-ui font-medium max-w-2xl mx-auto">Verified global intelligence for the technical systems people use every day.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="btn-ink h-14 px-10 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm shadow-2xl hover:scale-105 transition-all duration-300">
                Join API Preview
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 border-2 border-[#17151A] text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm font-ui hover:bg-[#F7F4EE] transition-all">
                Explore Utsavs
            </Button>
        </div>
      </div>
    </section>
  );
}
