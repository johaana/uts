'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Globe, 
  MapPin,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Clock,
  Search,
  ArrowRight,
  Info,
  Database,
  CalendarRange
} from "lucide-react";
import { format, startOfToday, addDays } from 'date-fns';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function TempTrackerLabPage() {
  const today = startOfToday();
  const todayDisplay = format(today, 'EEEE, d MMMM yyyy');

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main>
        {/* SECTION 1: TODAY AROUND THE WORLD (The Product) */}
        <section className="py-12 md:py-20 border-b border-white/10">
          <div className="max-w-[1180px] mx-auto px-6 space-y-12">
            
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                 <div className="flex items-center gap-2 px-2.5 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#4FD1C5]">Authoritative Data · Updated Today</span>
                 </div>
              </div>
              <p className="text-[12.5px] font-mono text-[#E8A33D] tracking-[0.3em] uppercase">Global Date Intelligence</p>
              <h1 className="text-4xl md:text-6xl font-headline font-medium tracking-tight">
                TODAY · {format(today, 'd MMMM yyyy').toUpperCase()}
              </h1>
              <p className="text-xl text-[#9AA1C0] max-w-2xl font-medium">
                3 countries · 3 records · 2 national holidays active in the global index.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Record 1 */}
               <div className="p-8 bg-[#171D3A] border border-white/18 rounded-2xl space-y-6 group hover:border-[#4FD1C5] transition-all shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">JAPAN</span>
                       <h3 className="text-2xl font-headline font-bold">Autumn Equinox Day</h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase text-[#4FD1C5] border border-[#4FD1C5]/30 px-2 py-0.5 rounded-full">
                       <ShieldCheck className="w-3 h-3" /> Verified
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                       <span className="px-2 py-0.5 bg-[#4FD1C5]/10 text-[#4FD1C5] text-[9px] font-bold uppercase tracking-widest rounded-sm">National Holiday</span>
                       <span className="px-2 py-0.5 bg-[#E8A33D]/10 text-[#F0C888] text-[9px] font-bold uppercase tracking-widest rounded-sm">Market Closure</span>
                    </div>
                    <p className="text-[13px] text-[#9AA1C0] leading-relaxed">JPX (Tokyo Stock Exchange) and banks closed. High operational impact across logistics.</p>
                  </div>
               </div>

               {/* Record 2 */}
               <div className="p-8 bg-[#171D3A] border border-white/18 rounded-2xl space-y-6 group hover:border-[#4FD1C5] transition-all shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">SAUDI ARABIA</span>
                       <h3 className="text-2xl font-headline font-bold">National Day</h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase text-[#4FD1C5] border border-[#4FD1C5]/30 px-2 py-0.5 rounded-full">
                       <ShieldCheck className="w-3 h-3" /> Verified
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                       <span className="px-2 py-0.5 bg-[#4FD1C5]/10 text-[#4FD1C5] text-[9px] font-bold uppercase tracking-widest rounded-sm">National Holiday</span>
                    </div>
                    <p className="text-[13px] text-[#9AA1C0] leading-relaxed">Full government and public sector closure. Standard holiday protocol observed.</p>
                  </div>
               </div>

               {/* Record 3 */}
               <div className="p-8 bg-[#171D3A] border border-white/18 rounded-2xl space-y-6 group hover:border-[#4FD1C5] transition-all shadow-xl">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">UAE</span>
                       <h3 className="text-2xl font-headline font-bold">Cultural Observation</h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase text-[#9AA1C0] border border-white/10 px-2 py-0.5 rounded-full">
                       High Confidence
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                       <span className="px-2 py-0.5 bg-white/5 text-[#9AA1C0] text-[9px] font-bold uppercase tracking-widest rounded-sm">Cultural Event</span>
                    </div>
                    <p className="text-[13px] text-[#9AA1C0] leading-relaxed">Regional cultural events active. Normal operational status for banks and government.</p>
                  </div>
               </div>
            </div>

            <div className="flex justify-center">
              <Link href="/date-intelligence">
                <Button className="bg-white/5 border border-white/10 text-[#F0C888] font-bold px-10 h-14 rounded-full hover:bg-[#1E2650] tracking-widest text-xs uppercase">
                  View Full Intelligence Board <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMING UP AROUND THE WORLD (Timeline) */}
        <section className="py-24 bg-[#0B0F22]/40 border-b border-white/10">
          <div className="max-w-[1180px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
               <div className="space-y-4">
                  <p className="text-[12.5px] font-mono text-[#4FD1C5] tracking-[0.3em] uppercase">The Timeline</p>
                  <h2 className="text-4xl font-headline font-medium tracking-tight">Coming up globally.</h2>
                  <p className="text-lg text-[#9AA1C0] max-w-xl">Where countdowns matter. From seasonal festivals to major operational transitions.</p>
               </div>
               <button className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F0C888] border-b border-[#F0C888]/30 pb-1">View 30-day forecast</button>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
               {[
                 { date: "25 SEP", in: "TOMORROW", country: "India", event: "Anant Chaturdashi", meta: "Regional · Maharashtra" },
                 { date: "01 OCT", in: "IN 7 DAYS", country: "China", event: "National Day", meta: "National · Public" },
                 { date: "02 OCT", in: "IN 8 DAYS", country: "India", event: "Gandhi Jayanti", meta: "National · Public" },
                 { date: "12 OCT", in: "IN 18 DAYS", country: "USA", event: "Columbus Day", meta: "Federal · Public" }
               ].map(item => (
                 <div key={item.event} className="p-8 border border-white/10 rounded-3xl bg-[#171D3A] space-y-6 group cursor-pointer hover:border-[#F0C888] transition-all relative overflow-hidden">
                    <div className="flex justify-between items-start relative z-10">
                       <div className="space-y-1">
                          <span className="text-[10px] font-mono text-[#E8A33D] font-bold uppercase tracking-widest">{item.in}</span>
                          <p className="text-2xl font-bold font-headline">{item.date}</p>
                       </div>
                       <ChevronRight className="w-4 h-4 text-[#6E7495] group-hover:text-white" />
                    </div>
                    <div className="space-y-1 relative z-10">
                       <h4 className="text-base font-bold text-paper leading-snug">{item.country} — {item.event}</h4>
                       <p className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">{item.meta}</p>
                    </div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 blur-3xl rounded-full group-hover:bg-[#F0C888]/10 transition-all"></div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: CHECK A DESTINATION (Personal Analysis) */}
        <section className="py-24">
          <div className="max-w-[1180px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
             <div className="flex-1 space-y-8">
                <p className="text-[12.5px] font-mono text-[#E8A33D] tracking-[0.3em] uppercase">Personal Planning</p>
                <h2 className="text-4xl md:text-6xl font-headline font-medium tracking-tight">Know before you book.</h2>
                <p className="text-lg text-[#9AA1C0] leading-relaxed">
                  Identify specific date friction for your destination. We reconcile public calendars with institutional closures and travel advisories.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8">
                   <div className="space-y-3">
                      <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-[#4FD1C5]" />
                      </div>
                      <h4 className="font-bold text-sm uppercase tracking-widest">Timing Context</h4>
                      <p className="text-xs text-[#9AA1C0] leading-relaxed">Check if your trip lands on a long weekend or major festival bridge.</p>
                   </div>
                   <div className="space-y-3">
                      <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-[#4FD1C5]" />
                      </div>
                      <h4 className="font-bold text-sm uppercase tracking-widest">Operational Fact</h4>
                      <p className="text-xs text-[#9AA1C0] leading-relaxed">Verified closures for banks, markets, and government-facing services.</p>
                   </div>
                </div>
             </div>

             <div className="flex-1 w-full max-w-lg">
                <div className="p-10 border border-white/18 rounded-[32px] bg-[#171D3A] shadow-2xl space-y-8">
                   <div className="space-y-2">
                      <h3 className="text-2xl font-headline font-bold">Check a Destination</h3>
                      <p className="text-sm text-[#9AA1C0]">Planning travel, study or business?</p>
                   </div>

                   <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Where are you going?</label>
                        <div className="relative">
                           <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4FD1C5]" />
                           <Select defaultValue="placeholder">
                              <SelectTrigger className="bg-[#0F1428] border-white/10 h-14 pl-12">
                                <SelectValue placeholder="Select destination" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="placeholder">Select destination</SelectItem>
                                <SelectItem value="IN">India</SelectItem>
                                <SelectItem value="JP">Japan</SelectItem>
                                <SelectItem value="SG">Singapore</SelectItem>
                                <SelectItem value="US">United States</SelectItem>
                              </SelectContent>
                           </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">From</label>
                          <Input type="date" className="bg-[#0F1428] border-white/10 h-14" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">To</label>
                          <Input type="date" className="bg-[#0F1428] border-white/10 h-14" />
                        </div>
                      </div>

                      <Button className="w-full h-14 bg-[#E8A33D] text-[#0F1428] font-bold text-sm uppercase tracking-widest rounded-full shadow-2xl hover:bg-[#F0C888] transition-all">
                        Check Trip Impact
                      </Button>
                   </div>

                   <div className="p-6 bg-white/5 border border-dashed border-white/10 rounded-2xl text-center">
                      <p className="text-[11px] font-bold text-[#6E7495] uppercase tracking-widest italic">Select a country to calculate impact</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* SECTION 4: WHY UTSAVS (The Infrastructure) */}
        <section className="py-24 bg-[#171D3A] border-y border-white/10">
          <div className="max-w-[1180px] mx-auto px-6">
             <div className="max-w-2xl mb-16 text-left">
                <p className="text-[12.5px] font-mono text-[#E8A33D] tracking-[0.3em] uppercase">Verification Architecture</p>
                <h2 className="text-4xl md:text-5xl font-headline font-medium tracking-tight mb-4">Every date comes with honesty.</h2>
                <p className="text-lg text-[#9AA1C0]">We distinguish between established rules andalgorithmic estimates.</p>
             </div>

             <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-white/18 rounded-3xl overflow-hidden shadow-2xl">
                {[
                  { m: 'SRC', h: 'Source-aware', p: 'Access the exact authoritative origins of every date and regional rule.', i: Database },
                  { m: 'VER', h: 'Verification-aware', p: 'Differentiate between confirmed, declared, and estimated observations.', i: ShieldCheck },
                  { m: 'REG', h: 'Region-aware', p: 'Navigate the complex jurisdictional differences between states and provinces.', i: MapPin },
                  { m: 'DAT', h: 'Date-aware', p: 'Sophisticated handling of lunar, lunisolar, and declared cycles.', i: CalendarRange }
                ].map(t => (
                  <div key={t.h} className="bg-[#0F1428] p-10 border-[0.5px] border-white/10 group hover:bg-[#1E2650] transition-colors">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#E8A33D]/10 transition-colors">
                      <t.i className="w-6 h-6 text-[#4FD1C5]" />
                    </div>
                    <h4 className="font-bold text-lg mb-3">{t.h}</h4>
                    <p className="text-sm text-[#9AA1C0] leading-relaxed">{t.p}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
