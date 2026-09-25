'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

export function GHIFooter() {
  return (
    <footer className="ghi-footer pt-32 pb-16 border-t border-[#DED9D0] bg-[#F7F4EE]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-4 space-y-6">
                <Link href="/global-holiday-intelligence" className="flex flex-col">
                    <span className="font-display text-3xl font-bold tracking-tight text-[#17151A]">UTSAVS</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6D6870] mt-1 font-ui">Global Holiday Intelligence</span>
                </Link>
                <p className="text-sm text-[#6D6870] max-w-xs leading-relaxed font-ui font-medium">
                    The world's structured, verified holiday, festival and observance intelligence.
                </p>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368] font-ui">Product</h4>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-[#6D6870] font-ui">
                    <li><Link href="#product" className="hover:text-[#17151A] transition-colors">Capabilities</Link></li>
                    <li><Link href="#calendar" className="hover:text-[#17151A] transition-colors">Calendar</Link></li>
                    <li><Link href="#world" className="hover:text-[#17151A] transition-colors">World Pulse</Link></li>
                </ul>
            </div>

            <div className="lg:col-span-2 space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368] font-ui">Company</h4>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-[#6D6870] font-ui">
                    <li><Link href="/about" className="hover:text-[#17151A] transition-colors">About Us</Link></li>
                    <li><Link href="/" className="hover:text-[#17151A] transition-colors">Utsavs.com</Link></li>
                </ul>
            </div>

            <div className="lg:col-span-4 space-y-6 lg:text-right">
                <p className="text-[11px] font-bold text-[#6D6870] uppercase tracking-[0.2em] font-ui">Inquiries</p>
                <a href="https://wa.me/919860997711" target="_blank" rel="noopener noreferrer" className="flex items-center lg:justify-end gap-2 text-lg font-display font-bold hover:text-[#E94368] transition-colors">
                  <MessageSquare className="w-5 h-5 text-[#E94368]" /> +91 9860997711
                </a>
            </div>
        </div>
        
        <div className="pt-8 border-t border-[#DED9D0] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-bold text-[#6D6870] uppercase tracking-widest font-ui">&copy; 2026 Utsavs Global Holiday Intelligence</p>
            <div className="flex gap-8 text-[10px] font-bold text-[#6D6870] uppercase tracking-widest font-ui">
                <Link href="#" className="hover:text-[#E94368]">Privacy</Link>
                <Link href="#" className="hover:text-[#E94368]">Terms</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
