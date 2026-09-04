import { cn } from '@/lib/utils';

interface IntelligenceRecordProps {
  size?: 'small' | 'large';
}

export function IntelligenceRecord({ size = 'small' }: IntelligenceRecordProps) {
  return (
    <div className={cn(
        "bg-white border border-[#DED9D0] relative transition-all duration-500 shadow-sm font-ui",
        size === 'large' ? "p-10 md:p-16 rounded-md" : "p-8 md:p-10 rounded-sm"
    )}>
      <div className="absolute top-0 right-0 p-6">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#557568]"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#557568]">Verified</span>
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className={cn("font-display font-bold text-[#17151A] mb-1 leading-none", size === 'large' ? "text-5xl md:text-7xl" : "text-4xl")}>Diwali</h3>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#6D6870]">India · National Scope</p>
        </div>

        <div className="grid grid-cols-2 gap-10">
            <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E94368]">Date</p>
                <p className="font-data text-xl md:text-2xl font-medium tracking-tight">08 Nov 2026</p>
            </div>
            <div className="space-y-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6D6870]">Model</p>
                <p className="font-data text-xl md:text-2xl font-medium tracking-tight">Lunisolar</p>
            </div>
        </div>

        <div className="space-y-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6D6870]">Classification</p>
            <div className="flex flex-wrap gap-2">
                {['Public Holiday', 'Religious Festival', 'Cultural Festival'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 border border-[#DED9D0] text-[9px] font-bold uppercase tracking-widest">{tag}</span>
                ))}
            </div>
        </div>

        <div className="space-y-8 pt-8 border-t border-[#DED9D0]">
            <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368]">Why it matters</p>
                <p className="text-sm leading-relaxed text-[#17151A] font-medium font-display italic">
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
                <p className="text-[11px] font-bold font-data">Illustrative Authoritative Reference</p>
            </div>
            <p className="text-[9px] font-bold text-[#E94368] uppercase tracking-widest">Sample Record</p>
        </div>
      </div>
    </div>
  );
}
