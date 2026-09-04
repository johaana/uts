
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface IntelligenceRecordProps {
  size?: 'small' | 'large';
}

export function IntelligenceRecord({ size = 'small' }: IntelligenceRecordProps) {
  return (
    <div className={cn(
        "bg-white border border-[#DED9D0] relative transition-all duration-700 shadow-[0_32px_64px_-12px_rgba(23,21,26,0.08)] font-ui overflow-hidden group",
        size === 'large' ? "p-10 md:p-16 rounded-md" : "p-8 md:p-10 rounded-sm"
    )}>
      {/* Precision corner marking */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#E94368]/30"></div>
      
      {/* Top data-stripe */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#17151A]/5"></div>
      
      <div className="absolute top-0 right-0 p-8">
        <div className="flex items-center gap-2 px-3 py-1.5 border border-[#557568]/20 bg-[#557568]/5 rounded-full">
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#557568] shadow-[0_0_8px_rgba(85,117,104,0.4)]"
            ></motion.div>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#557568]">Verified</span>
        </div>
      </div>

      <div className="space-y-12">
        <div className="space-y-2">
          <h3 className={cn("font-display font-bold text-[#17151A] tracking-tight", size === 'large' ? "text-6xl md:text-8xl" : "text-5xl")}>Diwali</h3>
          <p className="text-[13px] font-bold uppercase tracking-[0.3em] text-[#6D6870]/80">India · National Scope</p>
        </div>

        <div className="grid grid-cols-2 gap-12">
            <div className="space-y-3">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#E94368]">Date</p>
                <p className="font-data text-2xl md:text-3xl font-medium tracking-tighter text-[#17151A]">08 Nov 2026</p>
            </div>
            <div className="space-y-3">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#6D6870]">Date Model</p>
                <p className="font-data text-2xl md:text-3xl font-medium tracking-tighter text-[#17151A]">Lunisolar</p>
            </div>
        </div>

        <div className="space-y-5">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#6D6870]">Classification</p>
            <div className="flex flex-wrap gap-2">
                {['Public Holiday', 'Religious Festival', 'Cultural Festival'].map(tag => (
                    <span key={tag} className="px-4 py-2 border border-[#DED9D0] text-[10px] font-bold uppercase tracking-[0.2em] text-[#17151A]/80 hover:border-[#17151A] transition-colors cursor-default">{tag}</span>
                ))}
            </div>
        </div>

        <div className="space-y-10 pt-10 border-t border-[#DED9D0]/50">
            <div className="space-y-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#E94368]">Why it matters</p>
                <p className="text-base md:text-lg leading-[1.4] text-[#17151A] font-display italic serif pr-8">
                    The Festival of Lights, symbolizing the spiritual victory of light over darkness and knowledge over ignorance.
                </p>
            </div>
            <div className="space-y-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#E94368]">Regional Context</p>
                <p className="text-[14px] leading-relaxed text-[#6D6870] font-medium pr-4">
                    Date variations apply in South India (Naraka Chaturdashi). Commercial closures vary by state jurisdiction.
                </p>
            </div>
        </div>

        <div className="pt-10 border-t border-[#DED9D0]/50 flex items-center justify-between">
            <div className="space-y-2">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#6D6870]">Source Attribution</p>
                <p className="text-[10px] font-bold font-data text-[#17151A]/60">Official Authoritative Reference</p>
            </div>
            <div className="flex flex-col items-end gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                <p className="text-[9px] font-extrabold text-[#E94368] uppercase tracking-[0.3em]">Sample Record</p>
                <div className="h-[1px] w-12 bg-[#E94368]"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
