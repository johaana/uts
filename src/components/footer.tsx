"use client";

import Link from "next/link";
import React from "react";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F1428] border-t border-white/10 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-6 lg:col-span-4 space-y-6 text-left">
                <Link href="/" className="flex flex-col items-start group">
                    <span className="font-headline text-3xl font-bold text-[#F4F1E8]">Utsavs</span>
                    <span className="text-[10px] text-[#E8A33D] font-mono font-bold uppercase tracking-[0.2em] mt-1">Global Holiday Intelligence</span>
                </Link>
                <p className="text-[#9AA1C0] max-w-sm text-[15px] leading-relaxed font-medium">
                  Authoritative, source-aware date intelligence for travel, business, study and global operations.
                </p>
            </div>

            <div className="md:col-span-3 lg:col-span-2 space-y-6 text-left">
              <h3 className="font-bold uppercase tracking-[0.25em] text-[10px] text-[#E8A33D]">Product</h3>
              <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-[#9AA1C0]">
                <li><Link href="/date-intelligence" className="hover:text-[#F4F1E8] transition-colors">Date Intelligence</Link></li>
                <li><Link href="/built-for" className="hover:text-[#F4F1E8] transition-colors">Built For</Link></li>
                <li><Link href="/api" className="hover:text-[#F4F1E8] transition-colors">API</Link></li>
                <li><Link href="/travel-insurance" className="hover:text-[#F4F1E8] transition-colors">Travel Insurance</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3 lg:col-span-2 space-y-6 text-left">
              <h3 className="font-bold uppercase tracking-[0.25em] text-[10px] text-[#E8A33D]">Resources</h3>
              <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-[#9AA1C0]">
                <li><a href="https://utsavs.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F1E8] transition-colors">Stories ↗</a></li>
                <li><Link href="/about" className="hover:text-[#F4F1E8] transition-colors">About Us</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-12 lg:col-span-4 space-y-6 lg:text-right text-left">
              <h3 className="font-bold uppercase tracking-[0.25em] text-[10px] text-[#E8A33D]">Contact</h3>
              <div className="space-y-6 flex flex-col items-start lg:items-end">
                  <a href="mailto:joy@utsavs.com" className="text-xl font-headline font-bold text-[#F4F1E8] hover:text-[#E8A33D] transition-colors">
                      joy@utsavs.com
                  </a>
                  <p className="text-[10px] text-[#6E7495] leading-relaxed uppercase tracking-widest font-bold">
                    &copy; {new Date().getFullYear()} Utsavs · global calendar intelligence
                  </p>
              </div>
            </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-[11.5px] text-[#6E7495] leading-relaxed max-w-4xl text-left font-medium">
          Date states and named sources are shown where available. Institutional information is kept separate from calendar events. 
          Lunar, Hijri and government-declared dates can change; Utsavs keeps the source and last-checked date visible so users can verify the underlying authority.
        </div>
      </div>
    </footer>
  );
}
