'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

export default function BrandLabPage() {
  const versions = [
    {
      id: 'muted',
      name: 'Option B — Muted Contrast (Current)',
      className: 'logo-v-muted',
      desc: 'Wordmark in Paper (#F4F1E8), Tagline in Muted (#9AA1C0). High hierarchy, editorial feel.'
    },
    {
      id: 'monochrome',
      name: 'Option A — Unified Monochrome',
      className: 'logo-v-monochrome',
      desc: 'Both in Paper (#F4F1E8). Typographic relationship purely through italic shift. Pure but quiet.'
    },
    {
      id: 'gold',
      name: 'Legacy — Gold Accent',
      className: 'logo-v-gold',
      desc: 'Wordmark in Paper, Tagline in Gold (#E8A33D). High energy, emphasizes the "Occasion".'
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-20">
          <div className="space-y-4">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">Brand Lab</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium leading-tight">Typographic Lockup Options</h1>
            <p className="text-xl text-[#9AA1C0] leading-relaxed max-w-2xl font-medium">
              Evaluating the visual relationship between the Utsavs wordmark and the italic tagline across different color registers.
            </p>
          </div>

          <div className="space-y-12">
            {versions.map((v) => (
              <div key={v.id} className="grid md:grid-cols-[240px_1fr] gap-12 items-center p-12 bg-[#171D3A] border border-white/10 rounded-2xl shadow-xl">
                <div className={cn("logo", v.className)}>
                  Utsavs <span>from occasion to impact</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-headline">{v.name}</h3>
                  <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 space-y-6">
            <h2 className="font-headline text-2xl font-medium tracking-tight">Technical Note</h2>
            <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">
              These variants use the <strong>Fraunces</strong> family for both lines. The wordmark is set to 600 weight, while the tagline is 400 weight italic at 12px. The vertical relationship is forced via a flex-column layout with a 3px gap.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}