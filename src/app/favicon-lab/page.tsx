'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  ShieldCheck, 
  Globe, 
  Zap, 
  Calendar, 
  CircleDot, 
  Sparkle, 
  Compass, 
  Lock, 
  Waves,
  Sun
} from 'lucide-react';

export default function FaviconLabPage() {
  const options = [
    {
      id: 'u-glyph',
      name: 'The "U" Glyph',
      desc: 'Clean, professional, typographic. Inherits the Fraunces weight from the wordmark.',
      icon: <span className="font-headline text-8xl font-bold text-[#0F1428]">U</span>,
      bg: 'bg-white'
    },
    {
      id: 'eternal-flame',
      name: 'The Eternal Flame',
      desc: 'Symbolizes light and truth. A stylized interpretation of a traditional Diya flame.',
      icon: (
        <div className="w-12 h-20 bg-white rounded-full relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#F0C888]"></div>
        </div>
      ),
      bg: 'bg-[#E8A33D]'
    },
    {
      id: 'precision-dot',
      name: 'The Precision Dot',
      desc: 'Modern, technical, operational. Connects to the "Live Pulse" UI of the platform.',
      icon: <div className="w-4 h-4 bg-[#4FD1C5] rounded-full shadow-[0_0_20px_rgba(79,209,197,0.8)]"></div>,
      bg: 'bg-[#171D3A]',
      border: 'border-[#4FD1C5]'
    },
    {
      id: 'verified-shield',
      name: 'The Data Shield',
      desc: 'Focuses on the "Verified" and "Deterministic" promise. High trust for B2B.',
      icon: <ShieldCheck className="w-20 h-20 text-[#4FD1C5]" />,
      bg: 'bg-[#1E2650]'
    },
    {
      id: 'global-meridian',
      name: 'The Global Meridian',
      desc: 'Abstract globe with focus on time zones and regionality.',
      icon: <Globe className="w-20 h-20 text-[#E8A33D]" />,
      bg: 'bg-[#171D3A]'
    },
    {
      id: 'impact-spark',
      name: 'The Impact Spark',
      desc: 'Represents the "Impact" in your tagline. Kinetic and energetic.',
      icon: <Zap className="w-20 h-20 text-[#F0C888]" />,
      bg: 'bg-[#0F1428]',
      border: 'border-white/10'
    },
    {
      id: 'calendar-node',
      name: 'The Calendar Node',
      desc: 'Literal but refined. The intersection of a specific date and global data.',
      icon: <Calendar className="w-20 h-20 text-white" />,
      bg: 'bg-[#E8A33D]'
    },
    {
      id: 'the-pulse',
      name: 'The Signal Pulse',
      desc: 'A concentric radio wave pattern representing the "Pulse" of the world.',
      icon: <CircleDot className="w-20 h-20 text-[#4FD1C5]" />,
      bg: 'bg-[#171D3A]'
    },
    {
      id: 'luminous-sparkle',
      name: 'The Luminous Sparkle',
      desc: 'A nod to festivals (lights/stars) but with a mathematical, grid-aligned feel.',
      icon: <Sparkle className="w-20 h-20 text-[#E8A33D]" />,
      bg: 'bg-white'
    },
    {
      id: 'direction-compass',
      name: 'The Horizon Compass',
      desc: 'For the traveler and the planner. Finding the right path/date.',
      icon: <Compass className="w-20 h-20 text-[#9AA1C0]" />,
      bg: 'bg-[#1E2650]'
    },
    {
      id: 'secure-vault',
      name: 'The Secure Vault',
      desc: 'Reinforces "Safe for internal use" and "No data leakage".',
      icon: <Lock className="w-20 h-20 text-[#4FD1C5]" />,
      bg: 'bg-[#0F1428]',
      border: 'border-[#4FD1C5]/20'
    },
    {
      id: 'tidal-wave',
      name: 'The Cultural Wave',
      desc: 'Representing the flow of traditions and the "Boil Over" of festivals like Pongal.',
      icon: <Waves className="w-20 h-20 text-white" />,
      bg: 'bg-[#171D3A]'
    },
    {
      id: 'solar-source',
      name: 'The Solar Source',
      desc: 'The sun as the ultimate source of many calendars (Solar/Lunisolar).',
      icon: <Sun className="w-20 h-20 text-[#0F1428]" />,
      bg: 'bg-[#E8A33D]'
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      <main className="py-24">
        <div className="max-w-[1180px] mx-auto px-6 space-y-16">
          <div className="space-y-4">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">Identity Lab</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium">Favicon Options v2</h1>
            <p className="text-xl text-[#9AA1C0] max-w-2xl font-medium">
              Expanded options focusing on the intersection of global data, verification, and cultural light.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {options.map((opt) => (
              <div key={opt.id} className="p-10 bg-[#171D3A] border border-white/10 rounded-2xl flex flex-col items-center gap-8 shadow-xl group hover:border-[#E8A33D] transition-all">
                <div className={`w-32 h-32 ${opt.bg} ${opt.border || ''} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                  {opt.icon}
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold">{opt.name}</h3>
                  <p className="text-xs text-[#9AA1C0] leading-relaxed">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 text-center">
            <p className="text-sm text-[#9AA1C0]">
              Once a direction is selected, we will generate the multi-size ICO, PNG, and SVG assets for the production root.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
