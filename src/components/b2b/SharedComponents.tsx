'use client';

import { Button } from '@/components/ui/button';

export function TrustPillars() {
  const pillars = [
    { title: "SOURCE-AWARE", desc: "Access the exact authoritative origins of every date and regional rule." },
    { title: "VERIFICATION-AWARE", desc: "Differentiate between confirmed, declared, and estimated observations." },
    { title: "REGION-AWARE", desc: "Navigate the complex jurisdictional differences between states and cities." },
    { title: "DATE-AWARE", desc: "Sophisticated handling of lunar, lunisolar, and government-declared cycles." },
  ];

  return (
    <section id="intelligence" className="container mx-auto px-6">
      <div className="bg-[#17151A] text-[#F7F4EE] p-12 md:p-24 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E94368]/10 blur-[150px] -mr-48 -mt-48"></div>
        <div className="relative z-10 space-y-24">
            <div className="max-w-3xl space-y-6 text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#E94368]">The Verified Layer</p>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[0.95] tracking-tighter">Trust is part <br/>of the data.</h2>
                <p className="text-lg md:text-xl text-[#F7F4EE]/60 font-ui leading-relaxed max-w-2xl">
                  Holiday information is not equally certain everywhere. We expose the origin, status, and context of every single record.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 text-left">
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

export function FinalCTA() {
  return (
    <section className="container mx-auto px-6 text-center py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter font-display leading-[0.9]">Understand <br/> the calendar.</h2>
        <p className="text-lg md:text-xl text-[#6D6870] font-ui font-medium max-w-2xl mx-auto">High-precision global intelligence for the technical systems people use every day.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-[#17151A] text-white hover:bg-[#17151A]/90 h-14 px-10 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm shadow-2xl hover:scale-105 transition-all duration-300">
                Join API Preview
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 border-2 border-[#17151A] text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm font-ui hover:bg-[#F7F4EE] transition-all">
                Explore Utsavs.com
            </Button>
        </div>
      </div>
    </section>
  );
}
