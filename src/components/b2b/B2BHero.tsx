
import { Button } from '@/components/ui/button';
import { IntelligenceRecord } from './IntelligenceRecord';

export function B2BHero() {
  return (
    <section className="pt-20 lg:pt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E94368] mb-6">Global Holiday Intelligence</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter">
              Understand the <br className="hidden md:block" /> world's calendar.
            </h1>
            <p className="text-lg md:text-xl text-[#6D6870] mb-12 leading-relaxed font-ui max-w-xl">
              Structured, verified intelligence for holidays, festivals and observances — by country, region, date and source.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Button size="lg" className="btn-ink h-14 px-8 text-xs font-bold uppercase tracking-[0.2em] rounded-none">
                Explore the Intelligence
              </Button>
              <Button variant="ghost" className="text-[#6D6870] hover:text-[#17151A] font-bold text-xs uppercase tracking-[0.2em]">
                API Preview
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
                <div className="absolute -inset-10 bg-[#E94368]/5 blur-[100px] rounded-full"></div>
                <IntelligenceRecord />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
