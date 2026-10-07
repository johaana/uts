
import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  Globe, 
  ShieldCheck, 
  Zap,
  Terminal,
  Plane,
  Activity
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow'
};

export default function SocialCardLabPage() {
  const options = [
    {
      id: 'authored-logo',
      name: 'Option 1: The Authored Style (Editorial)',
      desc: 'Clean, high-impact typography with the Utsavs brand lockup. Focuses on the conversational hook.',
      render: (
        <div className="w-full aspect-[1200/630] bg-[#0F1428] p-20 flex flex-col justify-center relative overflow-hidden rounded-xl border border-white/10 shadow-2xl text-left">
          <div className="space-y-0 mb-10">
            <h2 className="text-[72px] font-serif font-medium leading-[1.05] tracking-tight text-[#F4F1E8]">
              Know before you plan.
            </h2>
            <h2 className="text-[72px] font-serif font-medium leading-[1.05] tracking-tight text-[#F4F1E8]">
              Not after.
            </h2>
          </div>
          <p className="text-[28px] font-sans text-[#9AA1C0] leading-relaxed max-w-[850px]">
            A holiday for one traveler is a closed office for another. Know which one you are. Same date. Different plans. Different consequences.
          </p>
          
          <div className="absolute bottom-16 left-20 flex flex-col items-start gap-0.5">
             <span className="font-serif text-[32px] font-bold text-[#F4F1E8] tracking-tight">Utsavs</span>
             <span className="font-serif italic text-[14px] text-[#9AA1C0] font-normal">from occasion to impact</span>
          </div>

          <div className="absolute bottom-16 right-20 flex items-center gap-3">
             <div className="w-3 h-3 bg-[#E8A33D] rounded-full shadow-[0_0_15px_rgba(232,163,61,0.5)]"></div>
             <span className="font-mono text-[14px] font-bold text-[#E8A33D] uppercase tracking-[0.2em]">Global Holiday Intelligence</span>
          </div>
        </div>
      )
    },
    {
      id: 'verified-pulse',
      name: 'Option 2: The Verified Pulse (Technical)',
      desc: 'Focuses on the "Precision Dot" and the pulse of the world. High trust for B2B/API users.',
      render: (
        <div className="w-full aspect-[1200/630] bg-[#0F1428] p-20 flex flex-col justify-end relative overflow-hidden rounded-xl border border-white/10 shadow-2xl text-left">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1E2650 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="absolute top-16 right-16 flex items-center gap-3">
             <div className="w-3 h-3 bg-[#4FD1C5] rounded-full shadow-[0_0_15px_rgba(79,209,197,0.8)]"></div>
             <span className="font-mono text-[12px] font-bold text-[#4FD1C5] uppercase tracking-[0.3em]">Live Intelligence Feed</span>
          </div>

          <div className="relative z-10 space-y-12">
            <div className="space-y-4">
                <h2 className="text-[76px] font-serif font-medium leading-none tracking-tighter text-[#F4F1E8]">
                  From dates <br /> to determination.
                </h2>
                <p className="text-[24px] font-sans text-[#9AA1C0] max-w-2xl font-medium">
                   Reconciling public calendars with institutional closures and regional rules for zero-AI reliability.
                </p>
            </div>
            
            <div className="flex items-center gap-12 pt-8 border-t border-white/10">
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono font-bold text-[#6E7495] uppercase">Coverage</span>
                  <span className="text-2xl font-bold text-white">92+ Jurisdictions</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono font-bold text-[#6E7495] uppercase">Confidence</span>
                  <span className="text-2xl font-bold text-[#4FD1C5]">Verified Source</span>
               </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-24">
        <div className="max-w-[1180px] mx-auto px-6 space-y-24">
          <div className="space-y-6 text-left max-w-3xl">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-[0.3em] uppercase">Visual Identity Lab</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium leading-tight">Social Card Designer</h1>
          </div>

          <div className="space-y-40">
            {options.map((opt) => (
              <div key={opt.id} className="space-y-8 animate-in fade-in duration-700">
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-white/10 pb-6">
                  <div className="space-y-2 text-left">
                    <h3 className="text-2xl font-bold text-white font-headline">{opt.name}</h3>
                    <p className="text-sm text-[#9AA1C0] max-w-xl">{opt.desc}</p>
                  </div>
                  <Badge variant="outline" className="border-[#4FD1C5] text-[#4FD1C5] uppercase font-bold tracking-widest text-[10px]">1200 x 630 px</Badge>
                </div>
                <div className="max-w-full overflow-hidden rounded-xl shadow-2xl">
                  {opt.render}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
