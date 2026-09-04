'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function B2BHeader() {
  return (
    <header className="h-[72px] border-b border-[#DED9D0]/60 bg-[#F7F4EE]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        <div className="flex flex-col items-start leading-none group">
            <Link href="/global-holiday-intelligence" className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-[#17151A]">UTSAVS</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#6D6870] mt-1 font-ui">Global Holiday Intelligence</span>
            </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#explore" className="text-[11px] font-bold text-[#6D6870] hover:text-[#17151A] transition-all uppercase tracking-[0.2em] font-ui">Explore</Link>
          <Link href="#calendar" className="text-[11px] font-bold text-[#6D6870] hover:text-[#17151A] transition-all uppercase tracking-[0.2em] font-ui">Calendar</Link>
          <Link href="#world" className="text-[11px] font-bold text-[#6D6870] hover:text-[#17151A] transition-all uppercase tracking-[0.2em] font-ui">World</Link>
          <Link href="#intelligence" className="text-[11px] font-bold text-[#6D6870] hover:text-[#17151A] transition-all uppercase tracking-[0.2em] font-ui">Intelligence</Link>
          <Link href="#api" className="text-[11px] font-bold text-[#6D6870] hover:text-[#17151A] transition-all uppercase tracking-[0.2em] font-ui">API</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link href="/" className="hidden lg:inline-block text-[10px] font-bold text-[#6D6870] hover:text-[#E94368] transition-colors uppercase tracking-[0.2em] font-ui">
            ← Utsavs.com
          </Link>
          <Button className="bg-[#17151A] text-white hover:bg-[#17151A]/90 h-9 px-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-sm">
            API Preview
          </Button>
        </div>
      </div>
    </header>
  );
}
