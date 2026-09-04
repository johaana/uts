
import { cn } from '@/lib/utils';

interface IntelligenceRecordProps {
  size?: 'small' | 'large';
}

export function IntelligenceRecord({ size = 'small' }: IntelligenceRecordProps) {
  return (
    <div className={cn(
        "bg-white border border-[#DED9D0] relative transition-all duration-500 hover:shadow-2xl font-ui",
        size === 'large' ? "p-10 md:p-16" : "p-8 md:p-10"
    )}>
      <div className="absolute top-0 right-0 p-4">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#557568]"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#557568]">Verified</span>
        </div>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className={cn("font-display font-bold text-[#17151A] mb-1 leading-none", size === 'large' ? "text-5xl md:text-6xl" : "text-4xl")}>Diwali</h3>
          <p className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#6D6870]">India · National Scope</p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E94368]">Date</p>
                <p className="font-display text-2xl md:text-3xl font-bold">8 November 2026</p>
            </div>
            <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6D6870]">Model</p>
                <p className="font-display text-2xl md:text-3xl font-bold">Lunisolar</p>
            </div>
        </div>

        <div className="space-y-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6D6870]">Classification</p>
            <div className="flex flex-wrap gap-2">
                {['Public Holiday', 'Religious Festival', 'Cultural Festival'].map(tag => (
                    <span key={tag} className="px-3 py-1 border border-[#DED9D0] text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                ))}
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-[#DED9D0]">
            <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368]">Why it matters</p>
                <p className="text-sm leading-relaxed text-[#6D6870] font-medium italic">
                    The Festival of Lights, symbolizing the spiritual victory of light over darkness and knowledge over ignorance.
                </p>
            </div>
            <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368]">Regional Context</p>
                <p className="text-sm leading-relaxed text-[#6D6870] font-medium">
                    Date variations apply in South India (Naraka Chaturdashi). Commercial closures vary by state jurisdiction.
                </p>
            </div>
        </div>

        <div className="pt-8 border-t border-[#DED9D0] flex items-center justify-between">
            <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6D6870]">Source</p>
                <p className="text-[11px] font-bold">Illustrative Authoritative Reference</p>
            </div>
            <p className="text-[10px] font-bold text-[#E94368] italic tracking-tighter">Sample Record</p>
        </div>
      </div>
    </div>
  );
}
