'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function B2BHeader() {
  return (
    <header className="b2b-header h-[80px] border-b border-[#DED9D0] bg-[#F7F4EE]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-6">
        <div className="flex flex-col items-start leading-none group">
            <Link href="/global-holiday-intelligence" className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-[#17151A]">UTSAVS</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#6D6870] mt-1 font-ui">Global Holiday Intelligence</span>
            </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <Link href="#product" className="text-[12px] font-bold text-[#6D6870] hover:text-[#17151A] transition-colors uppercase tracking-widest font-ui">Product</Link>
          <Link href="#data" className="text-[12px] font-bold text-[#6D6870] hover:text-[#17151A] transition-colors uppercase tracking-widest font-ui">Data</Link>
          <Link href="#developers" className="text-[12px] font-bold text-[#6D6870] hover:text-[#17151A] transition-colors uppercase tracking-widest font-ui">Developers</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link href="/" className="hidden lg:inline-block text-[11px] font-bold text-[#6D6870] hover:text-[#E94368] transition-colors uppercase tracking-widest font-ui">
            ← Utsavs.com
          </Link>
          <Button className="btn-ink h-10 px-6 font-bold text-xs uppercase tracking-widest rounded-sm">
            API Preview
          </Button>
        </div>
      </div>
    </header>
  );
}
