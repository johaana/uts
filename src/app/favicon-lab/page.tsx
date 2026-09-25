'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function FaviconLabPage() {
  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      <main className="py-24">
        <div className="max-w-[1180px] mx-auto px-6 space-y-16">
          <div className="space-y-4">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-widest uppercase">Identity Lab</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium">Favicon Options</h1>
            <p className="text-xl text-[#9AA1C0] max-w-2xl font-medium">
              Evaluating the brand glyph for browser tabs and mobile home screens.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1: The "U" */}
            <div className="p-10 bg-[#171D3A] border border-white/10 rounded-2xl flex flex-col items-center gap-8 shadow-xl">
               <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                  <span className="font-headline text-8xl font-bold text-[#0F1428]">U</span>
               </div>
               <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold">The "U" Glyph</h3>
                  <p className="text-xs text-[#9AA1C0]">Clean, professional, typographic. Inherits the Fraunces weight from the wordmark.</p>
               </div>
            </div>

            {/* Option 2: The Flame */}
            <div className="p-10 bg-[#171D3A] border border-white/10 rounded-2xl flex flex-col items-center gap-8 shadow-xl">
               <div className="w-32 h-32 bg-[#E8A33D] rounded-lg flex items-center justify-center">
                  <div className="w-12 h-20 bg-white rounded-full relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#F0C888]"></div>
                  </div>
               </div>
               <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold">The Eternal Flame</h3>
                  <p className="text-xs text-[#9AA1C0]">Symbolizes light and truth. A stylized interpretation of a traditional Diya flame.</p>
               </div>
            </div>

            {/* Option 3: Precision Dot */}
            <div className="p-10 bg-[#171D3A] border border-white/10 rounded-2xl flex flex-col items-center gap-8 shadow-xl">
               <div className="w-32 h-32 bg-[#171D3A] border border-[#4FD1C5] rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#4FD1C5] rounded-full shadow-[0_0_20px_rgba(79,209,197,0.8)]"></div>
               </div>
               <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold">The Precision Dot</h3>
                  <p className="text-xs text-[#9AA1C0]">Modern, technical, operational. Connects to the "Live Pulse" UI of the platform.</p>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
