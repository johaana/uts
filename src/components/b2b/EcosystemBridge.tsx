'use client';

export function EcosystemBridge() {
  return (
    <section className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto text-center py-24 border-t border-[#DED9D0] space-y-16">
        <div className="space-y-6">
          <p className="text-2xl md:text-4xl font-display font-bold leading-tight text-[#6D6870] tracking-tight">
              Utsavs began by helping people discover festivals. <br />
              <span className="text-[#17151A]">We're now building the intelligence layer that helps systems understand them.</span>
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 relative">
            <div className="space-y-2">
                <p className="font-display text-xl font-bold text-[#17151A]">Utsavs.com</p>
                <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.3em] font-ui">Discovery</p>
            </div>
            <div className="text-[#E94368] rotate-90 md:rotate-0 font-bold text-xl opacity-40 font-ui">→</div>
            <div className="space-y-2 px-10 py-6 bg-white border border-[#E94368]/20 shadow-sm relative">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E94368]"></div>
                <p className="font-display text-xl font-bold text-[#E94368]">Global Intelligence</p>
                <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.3em] font-ui">Infrastructure</p>
            </div>
            <div className="text-[#E94368] rotate-90 md:rotate-0 font-bold text-xl opacity-40 font-ui">→</div>
            <div className="space-y-2">
                <p className="font-display text-xl font-bold text-[#17151A]">Intelligence API</p>
                <p className="text-[9px] text-[#6D6870] uppercase font-bold tracking-[0.3em] font-ui">Delivery</p>
            </div>
        </div>
      </div>
    </section>
  );
}
