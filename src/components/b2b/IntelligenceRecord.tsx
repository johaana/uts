import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface IntelligenceRecordProps {
  size?: 'small' | 'large';
}

export function IntelligenceRecord({ size = 'small' }: IntelligenceRecordProps) {
  return (
    <div className={cn(
        "bg-white border border-[#DED9D0] relative transition-all duration-1000 font-ui overflow-hidden group",
        size === 'large' ? "p-10 md:p-16 rounded-lg shadow-[0_48px_96px_-24px_rgba(23,21,26,0.12)]" : "p-6 md:p-10 rounded-md shadow-[0_32px_64px_-16px_rgba(23,21,26,0.08)]"
    )}>
      {/* Precision corner marking */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#E94368]/30"></div>
      
      {/* Top data-stripe */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#17151A]/5"></div>
      
      <div className="absolute top-0 right-0 p-6 md:p-10">
        <div className="flex items-center gap-2 px-3 py-1 border border-[#557568]/10 bg-[#557568]/5 rounded-full">
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#557568]"
            ></motion.div>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#557568]">Verified</span>
        </div>
      </div>

      <div className={cn("space-y-6", size === 'large' && "space-y-12")}>
        <div className="space-y-1">
          <h3 className={cn("font-display font-bold text-[#17151A] tracking-tight", size === 'large' ? "text-6xl md:text-8xl" : "text-3xl md:text-5xl")}>Diwali</h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6D6870]/60">India · National Scope</p>
        </div>

        <div className="grid grid-cols-2 gap-10">
            <div className="space-y-1.5">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#E94368]">Date</p>
                <p className="font-data text-lg md:text-2xl font-medium tracking-tighter text-[#17151A]">08 Nov 2026</p>
            </div>
            <div className="space-y-1.5">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#6D6870]">Date Model</p>
                <p className="font-data text-lg md:text-2xl font-medium tracking-tighter text-[#17151A]">Lunisolar</p>
            </div>
        </div>

        <div className="space-y-3">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#6D6870]">Classification</p>
            <div className="flex flex-wrap gap-2">
                {['Public Holiday', 'Religious', 'Cultural'].map(tag => (
                    <span key={tag} className="px-3 py-1 border border-[#DED9D0] text-[9px] font-bold uppercase tracking-[0.25em] text-[#17151A]/70 rounded-sm">{tag}</span>
                ))}
            </div>
        </div>

        <div className="space-y-6 pt-6 border-t border-[#DED9D0]/60">
            <div className="space-y-1.5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#E94368]">Why it matters</p>
                <p className="text-[14px] leading-relaxed text-[#17151A] font-display italic serif pr-4 max-w-md">
                    The Festival of Lights, symbolizing the spiritual victory of light over darkness and knowledge over ignorance.
                </p>
            </div>
            <div className="space-y-1.5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#E94368]">Regional Context</p>
                <p className="text-[13px] leading-relaxed text-[#6D6870] font-medium pr-4 max-w-md">
                    Date variations apply in South India. Commercial closures vary by state jurisdiction.
                </p>
            </div>
        </div>

        <div className="pt-6 border-t border-[#DED9D0]/60 flex items-center justify-between">
            <div className="space-y-1.5">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#6D6870]">Source Attribution</p>
                <p className="text-[10px] font-bold font-data text-[#17151A]/40 uppercase tracking-widest">Authoritative Reference</p>
            </div>
            <div className="flex flex-col items-end gap-1.5 opacity-40">
                <p className="text-[9px] font-extrabold text-[#E94368] uppercase tracking-[0.4em]">Sample Record</p>
                <div className="h-[1px] w-8 bg-[#E94368]"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
