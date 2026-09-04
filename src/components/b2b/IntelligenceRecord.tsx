import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface IntelligenceRecordProps {
  size?: 'small' | 'large';
}

export function IntelligenceRecord({ size = 'small' }: IntelligenceRecordProps) {
  return (
    <div className={cn(
        "bg-white border border-[#DED9D0] relative transition-all duration-700 shadow-[0_24px_48px_-12px_rgba(23,21,26,0.08)] font-ui overflow-hidden group",
        size === 'large' ? "p-8 md:p-12 rounded-md" : "p-3 md:p-5 rounded-sm"
    )}>
      {/* Precision corner marking */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#E94368]/30"></div>
      
      {/* Top data-stripe */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#17151A]/5"></div>
      
      <div className="absolute top-0 right-0 p-3 md:p-5">
        <div className="flex items-center gap-1 px-1.5 py-0.5 border border-[#557568]/20 bg-[#557568]/5 rounded-full">
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-[#557568]"
            ></motion.div>
            <span className="text-[7px] font-extrabold uppercase tracking-[0.25em] text-[#557568]">Verified</span>
        </div>
      </div>

      <div className={cn("space-y-3", size === 'large' && "space-y-8")}>
        <div className="space-y-0.5">
          <h3 className={cn("font-display font-bold text-[#17151A] tracking-tight", size === 'large' ? "text-5xl md:text-7xl" : "text-2xl md:text-3xl")}>Diwali</h3>
          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#6D6870]/80">India · National Scope</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-0.5">
                <p className="text-[7px] font-extrabold uppercase tracking-[0.3em] text-[#E94368]">Date</p>
                <p className="font-data text-base md:text-lg font-medium tracking-tighter text-[#17151A]">08 Nov 2026</p>
            </div>
            <div className="space-y-0.5">
                <p className="text-[7px] font-extrabold uppercase tracking-[0.3em] text-[#6D6870]">Date Model</p>
                <p className="font-data text-base md:text-lg font-medium tracking-tighter text-[#17151A]">Lunisolar</p>
            </div>
        </div>

        <div className="space-y-1.5">
            <p className="text-[7px] font-extrabold uppercase tracking-[0.3em] text-[#6D6870]">Classification</p>
            <div className="flex flex-wrap gap-1">
                {['Public Holiday', 'Religious', 'Cultural'].map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 border border-[#DED9D0] text-[7.5px] font-bold uppercase tracking-[0.2em] text-[#17151A]/80">{tag}</span>
                ))}
            </div>
        </div>

        <div className="space-y-3 pt-3 border-t border-[#DED9D0]/50">
            <div className="space-y-0.5">
                <p className="text-[7.5px] font-extrabold uppercase tracking-[0.3em] text-[#E94368]">Why it matters</p>
                <p className="text-[12px] leading-[1.3] text-[#17151A] font-display italic serif pr-2">
                    The Festival of Lights, symbolizing the spiritual victory of light over darkness and knowledge over ignorance.
                </p>
            </div>
            <div className="space-y-0.5">
                <p className="text-[7.5px] font-extrabold uppercase tracking-[0.3em] text-[#E94368]">Regional Context</p>
                <p className="text-[11px] leading-relaxed text-[#6D6870] font-medium pr-2">
                    Date variations apply in South India. Commercial closures vary by state jurisdiction.
                </p>
            </div>
        </div>

        <div className="pt-3 border-t border-[#DED9D0]/50 flex items-center justify-between">
            <div className="space-y-0.5">
                <p className="text-[7px] font-extrabold uppercase tracking-[0.3em] text-[#6D6870]">Source Attribution</p>
                <p className="text-[7.5px] font-bold font-data text-[#17151A]/60">Authoritative Reference</p>
            </div>
            <div className="flex flex-col items-end gap-0.5 opacity-40">
                <p className="text-[7px] font-extrabold text-[#E94368] uppercase tracking-[0.3em]">Sample Record</p>
                <div className="h-[1px] w-5 bg-[#E94368]"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
