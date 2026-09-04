
import { Button } from '@/components/ui/button';
import { IntelligenceRecord } from './IntelligenceRecord';
import { motion } from 'framer-motion';

export function B2BHero() {
  return (
    <section className="pt-8 lg:pt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-2xl pt-2"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#E94368] mb-6 font-ui">Global Holiday Intelligence</p>
            <h1 className="text-5xl md:text-6xl lg:text-[84px] font-bold leading-[0.92] mb-8 tracking-[-0.04em] text-[#17151A] font-display">
              Understand the <br /> world's calendar.
            </h1>
            <div className="space-y-6 max-w-xl mb-10">
              <p className="text-lg md:text-xl text-[#6D6870] leading-snug font-ui font-medium tracking-tight">
                Structured, verified intelligence for holidays, festivals and observances — by country, region, date and source.
              </p>
              <p className="text-sm text-[#6D6870]/70 leading-relaxed font-ui max-w-md tracking-wide">
                Built for the systems that need to understand not only when a holiday occurs, but where it applies and how it impacts operations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-8">
              <Button size="lg" className="btn-ink h-12 px-10 text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#17151A]/10">
                Explore the Intelligence
              </Button>
              <Button variant="ghost" className="text-[#6D6870] hover:text-[#17151A] font-bold text-[10px] uppercase tracking-[0.3em] font-ui transition-all">
                API Preview
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full max-w-lg lg:sticky lg:top-24"
          >
            <div className="relative group">
                <div className="absolute -inset-20 bg-gradient-to-tr from-[#E94368]/5 to-transparent blur-[120px] rounded-full group-hover:opacity-100 transition-opacity duration-1000 opacity-50"></div>
                <IntelligenceRecord />
                <div className="mt-8 flex items-center justify-center gap-6">
                  <div className="h-[1px] w-12 bg-[#DED9D0]"></div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#6D6870] font-ui whitespace-nowrap opacity-60">Technical Protocol Preview</p>
                  <div className="h-[1px] w-12 bg-[#DED9D0]"></div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
