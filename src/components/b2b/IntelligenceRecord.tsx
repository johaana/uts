'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { IntelligenceRecordData } from '@/lib/calendar-intelligence-data';

interface IntelligenceRecordProps {
  record: IntelligenceRecordData;
  className?: string;
}

export function IntelligenceRecord({ record, className }: IntelligenceRecordProps) {
  return (
    <div className={cn(
      "bg-white border border-[#DED9D0] p-8 md:p-12 relative transition-all duration-700 font-ui overflow-hidden rounded-sm shadow-[0_48px_96px_-24px_rgba(23,21,26,0.12)]",
      className
    )}>
      {/* Corner Precision Marker */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#E94368]/30"></div>
      
      {/* Header Status */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2 px-3 py-1 border border-[#DED9D0] bg-[#F7F4EE]/50 rounded-full">
           <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className={cn("w-1.5 h-1.5 rounded-full", record.status === 'Verified' ? "bg-[#557568]" : "bg-[#D99A3D]")}
           />
           <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#17151A]">
             {record.status}
           </span>
        </div>
        <p className="text-[9px] font-bold text-[#6D6870] uppercase tracking-[0.2em]">Record ID: {record.id.toUpperCase()}</p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <div>
          <h3 className="font-display font-bold text-[#17151A] tracking-tight text-4xl md:text-5xl lg:text-7xl">
            {record.name}
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#6D6870]/60 mt-1">
            {record.location.country} · {record.location.scope} Scope
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-1.5">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#E94368]">Date</p>
            <p className="font-data text-xl md:text-2xl font-medium tracking-tighter text-[#17151A]">{record.date.observed}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#6D6870]">Date Model</p>
            <p className="font-data text-xl md:text-2xl font-medium tracking-tighter text-[#17151A]">{record.date.model}</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#6D6870]">Classification</p>
          <div className="flex flex-wrap gap-2">
            {record.classification.map(tag => (
              <span key={tag} className="px-3 py-1 border border-[#DED9D0] text-[9px] font-bold uppercase tracking-[0.25em] text-[#17151A]/70 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-[#DED9D0] grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#E94368]">Why it matters</p>
            <p className="text-sm leading-relaxed text-[#17151A] font-display italic serif pr-4">
              {record.whyItMatters}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.4em] text-[#6D6870]">Regional Context</p>
            <p className="text-sm leading-relaxed text-[#6D6870] font-medium">
              {record.regionalContext}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-[#DED9D0]/60 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.3em] text-[#6D6870]/50">
        <div className="flex flex-col gap-1">
          <span>Source: {record.source}</span>
          <span>Determination: {record.date.certainty}</span>
        </div>
        <span className="text-[#E94368]/40">Intelligence Protocol v3.0</span>
      </div>
    </div>
  );
}
