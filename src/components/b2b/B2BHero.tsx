import { Button } from '@/components/ui/button';
import { IntelligenceRecord } from './IntelligenceRecord';

export function B2BHero() {
  return (
    <section className="pt-12 lg:pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          <div className="flex-1 max-w-2xl pt-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E94368] mb-6 font-ui">Global Holiday Intelligence</p>
            <h1 className="text-6xl md:text-7xl lg:text-[100px] font-bold leading-[0.95] mb-8 tracking-tighter text-[#17151A]">
              Understand the <br /> world's calendar.
            </h1>
            <div className="space-y-6 max-w-xl mb-12">
              <p className="text-lg md:text-xl text-[#6D6870] leading-relaxed font-ui">
                Structured, verified intelligence for holidays, festivals and observances — by country, region, date and source.
              </p>
              <p className="text-base text-[#6D6870]/80 leading-relaxed font-ui">
                Built for the systems that need to understand not only when a holiday occurs, but where it applies, what it means and how certain the information is.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
              <Button size="lg" className="btn-ink h-14 px-10 text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                Explore the Intelligence
              </Button>
              <Button variant="ghost" className="text-[#6D6870] hover:text-[#17151A] font-bold text-xs uppercase tracking-[0.2em] font-ui">
                API Preview
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg lg:sticky lg:top-32">
            <div className="relative">
                <div className="absolute -inset-10 bg-[#E94368]/5 blur-[100px] rounded-full"></div>
                <IntelligenceRecord />
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#6D6870] mt-6 text-center">Illustrative product record</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
