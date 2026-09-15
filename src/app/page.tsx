'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Loader2, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Landmark, 
  Briefcase, 
  Plane,
  Clock,
  Info,
  Wind,
  Droplets,
  Share,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { getOperationalImpact } from '@/lib/operational/adapter';
import { OperationalQuery, OperationalResult } from '@/lib/operational/types';
import { cn } from '@/lib/utils';
import { OperationalResultCard } from '@/components/operational/OperationalResultCard';
import { UpcomingFestivalsCarousel } from '@/components/UpcomingFestivalsCarousel';

function TripAdvisory({ result }: { result: OperationalResult }) {
  const hasImpacts = result.records.length > 0;
  return (
    <div className={cn(
      "p-4 rounded-xl mb-4 border flex items-start gap-4 transition-all animate-in fade-in slide-in-from-top-4 duration-500",
      !hasImpacts ? "bg-accent/5 border-accent/20" : "bg-primary/5 border-primary/20"
    )}>
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
        !hasImpacts ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
      )}>
        {!hasImpacts ? <ShieldCheck className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[#F0C888]">
          IN SHORT
        </h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed">
          {!hasImpacts 
            ? "No specific date impacts were found for this journey in our verified dataset. Standard cross-border rules apply."
            : `We found ${result.records.length} signal(s) that may affect your ${result.query_context.purpose} plan. Review the details below to understand the practical implications.`
          }
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState<OperationalQuery>({
    destination: 'IN',
    startDate: '2026-11-01',
    endDate: '2026-11-15',
    purpose: 'travel'
  });
  const [result, setResult] = useState<OperationalResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleCheckImpact = async () => {
    setIsSearching(true);
    // Simulate natural search delay
    setTimeout(async () => {
      try {
        const impact = await getOperationalImpact(query);
        setResult(impact);
      } catch (e) {
        console.error(e);
      } finally {
        setIsSearching(false);
      }
    }, 600);
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="py-12 md:py-24 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-24 items-start">
              
              {/* LEFT: Copy */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#4FD1C5] font-mono text-[12.5px] tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] shadow-[0_0_8px_#4FD1C5]"></div>
                    DATE INTELLIGENCE
                  </div>
                  <h1 className="font-headline text-4xl md:text-6xl font-medium leading-[1.08] tracking-tight">
                    Know before you fly.<br/>Know before you schedule.
                  </h1>
                  <p className="text-lg text-[#9AA1C0] leading-relaxed max-w-lg font-medium">
                    Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <Link href="/date-intelligence">
                    <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold px-8 h-12 rounded-full transition-all">
                      Check a date <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="#how-it-works" className="text-sm font-bold text-[#6E7495] hover:text-[#F4F1E8] flex items-center gap-1 transition-colors">
                    See how it works <span className="text-xs">↓</span>
                  </a>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4 text-[12px] font-mono text-[#6E7495]">
                   <span><b className="text-[#F4F1E8] font-sans font-medium">100</b> countries tracked</span>
                   <span className="text-white/10">·</span>
                   <span>live feeds where available</span>
                   <span className="text-white/10">·</span>
                   <span>evidence shown where available</span>
                </div>
              </div>

              {/* RIGHT: Tracker Card */}
              <div className="w-full">
                <Card className="bg-[#171D3A] border-white/18 shadow-2xl rounded-2xl overflow-hidden">
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="flex items-center justify-between">
                       <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-[#E8A33D] mb-1">DATE INTELLIGENCE</p>
                          <h2 className="text-xl font-headline font-medium">Check your dates</h2>
                       </div>
                       <div className="flex items-center gap-1.5 px-3 py-1 bg-accent/5 border border-accent/20 rounded-full">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] shadow-[0_0_8px_#4FD1C5]"></div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#4FD1C5]">Live</span>
                       </div>
                    </div>

                    <div className="flex bg-[#1E2650] p-1 rounded-xl">
                      {['travel', 'study', 'workforce'].map((p) => (
                        <button 
                          key={p}
                          onClick={() => setQuery({...query, purpose: p as any})}
                          className={cn(
                            "flex-1 py-2 text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all",
                            query.purpose === p ? "bg-[#E8A33D] text-[#0F1428]" : "text-[#9AA1C0] hover:text-[#F4F1E8]"
                          )}
                        >
                          {p === 'workforce' ? 'Business' : p}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-4">
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-[#6E7495] font-mono">Destination / Jurisdiction</label>
                          <Select value={query.destination} onValueChange={(v) => setQuery({...query, destination: v})}>
                            <SelectTrigger className="bg-[#1E2650] border-white/10 h-11"><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="IN">India</SelectItem>
                              <SelectItem value="JP">Japan</SelectItem>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                              <SelectItem value="GB">United Kingdom</SelectItem>
                              <SelectItem value="AU">Australia</SelectItem>
                              <SelectItem value="SG">Singapore</SelectItem>
                              <SelectItem value="DE">Germany</SelectItem>
                            </SelectContent>
                          </Select>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-[#6E7495] font-mono">From</label>
                            <Input type="date" value={query.startDate} onChange={(e) => setQuery({...query, startDate: e.target.value})} className="bg-[#1E2650] border-white/10 h-11" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-[#6E7495] font-mono">To</label>
                            <Input type="date" value={query.endDate} onChange={(e) => setQuery({...query, endDate: e.target.value})} className="bg-[#1E2650] border-white/10 h-11" />
                          </div>
                       </div>
                    </div>

                    <Button 
                      className="w-full bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold h-12 shadow-lg transition-all active:scale-[0.98]" 
                      onClick={handleCheckImpact}
                      disabled={isSearching}
                    >
                      {isSearching ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : "Check dates"}
                    </Button>

                    {result && !isSearching && (
                      <div className="pt-6 border-t border-white/10 animate-in fade-in slide-in-from-top-4">
                        <TripAdvisory result={result} />
                        <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                          {result.records.map(record => (
                            <OperationalResultCard key={record.id} record={record} />
                          ))}
                        </div>
                        <div className="pt-4 text-center border-t border-white/10 mt-4">
                           <Link href="/date-intelligence" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F0C888] hover:underline flex items-center justify-center gap-1">
                              Open Date Intelligence <ArrowRight className="w-3 h-3" />
                           </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* WORLD TODAY */}
        <section className="py-24 bg-[#0F1428]" id="world-today">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
               <div className="space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4FD1C5] font-mono">WORLD TODAY</div>
                  <h2 className="text-3xl md:text-5xl font-headline font-medium">Dates are not just dates.</h2>
                  <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium max-w-lg">
                    Around the world, a date can mean a public holiday, a regional observance, an institutional closure, 
                    a working-day difference or something entirely specific to the purpose of your trip.
                  </p>
               </div>
               <div className="w-full">
                  <UpcomingFestivalsCarousel />
               </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-white/5 border-t border-white/10" id="how-it-works">
           <div className="container mx-auto px-6">
              <div className="max-w-3xl mb-16 space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8A33D] font-mono">HOW IT WORKS</div>
                <h2 className="text-3xl md:text-5xl font-headline font-medium">See what your dates may mean for travel, study or business.</h2>
                <p className="text-lg text-[#9AA1C0] font-medium">Utsavs brings relevant calendars and deeper institutional information together around the date you actually care about.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                 {[
                   { n: "01", t: "Travel", d: "Understand what may be happening when you arrive, from public and regional dates to relevant travel information.", a: "Choosing when to go" },
                   { n: "02", t: "Business", d: "See dates that may affect meetings, operations, working days and business activity.", a: "Choosing when to schedule" },
                   { n: "03", t: "Study", d: "Put institutional calendars, arrival timing and relevant student information around the dates you are considering.", a: "Choosing when to arrive" },
                   { n: "04", t: "Operations", d: "Go deeper when the job requires it — markets, banking, customs, institutions and regional calendars.", a: "Choosing when to operate" }
                 ].map(item => (
                   <div key={item.n} className="bg-[#0F1428] p-8 space-y-6 group">
                      <span className="text-3xl font-headline font-bold text-white/10 group-hover:text-[#E8A33D] transition-colors">{item.n}</span>
                      <h3 className="text-xl font-bold font-headline">{item.t}</h3>
                      <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium min-h-[80px]">{item.d}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D] flex items-center gap-1">{item.a} <ArrowRight className="w-3 h-3" /></p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* SPECIALIZED INTELLIGENCE */}
        <section className="py-24 border-t border-white/10">
           <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
                 <div className="space-y-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4FD1C5] font-mono">SPECIALIZED INTELLIGENCE</div>
                    <h2 className="text-3xl md:text-5xl font-headline font-medium">One calendar underneath. <br/>Deeper calendars when the job demands it.</h2>
                    <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                      The same date can affect a traveller, market, bank, institution or operation differently. Utsavs keeps those layers distinct and brings the relevant evidence together.
                    </p>
                    <Link href="/date-intelligence" className="inline-block text-[#F0C888] font-bold text-sm hover:underline">
                      Explore Date Intelligence <span>→</span>
                    </Link>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { n: "01", t: "Regional calendars", s: "Country, state, province and jurisdiction" },
                      { n: "02", t: "Institutions", s: "Universities, missions and other institutions" },
                      { n: "03", t: "Markets & banking", s: "Trading, settlement, payments and working days" },
                      { n: "04", t: "Trade & logistics", s: "Customs, ports and documented operational timing" }
                    ].map(item => (
                      <div key={item.n} className="bg-white/5 border border-white/10 p-8 space-y-2 rounded-xl group hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-bold text-[#E8A33D]/50 font-mono">{item.n}</span>
                        <h4 className="font-bold text-lg font-headline">{item.t}</h4>
                        <p className="text-xs text-[#9AA1C0] font-medium">{item.s}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* API */}
        <section id="api" className="py-24 bg-white/5 border-y border-white/10">
           <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl space-y-4 text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8A33D] font-mono">FOR SYSTEMS</div>
                <h2 className="text-3xl md:text-4xl font-headline font-medium">Need to work with the intelligence continuously?</h2>
                <p className="text-[#9AA1C0] font-medium leading-relaxed">Use Utsavs through the API for applications, workflows and operational systems that need calendar and date intelligence at scale.</p>
              </div>
              <Link href="/api">
                <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] px-10 font-bold h-14 rounded-full">
                  Explore the API <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
           </div>
        </section>

        {/* TRAVEL INSURANCE */}
        <section className="py-24 border-b border-white/10">
           <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl space-y-4 text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4FD1C5] font-mono">TRAVEL INSURANCE</div>
                <h2 className="text-3xl md:text-4xl font-headline font-medium">Plan for what you can predict. Protect against what you can't.</h2>
                <p className="text-[#9AA1C0] font-medium leading-relaxed">Explore how travel timing and travel protection can work together — whether you are planning your own journey or building a travel workflow for customers, employees or students.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/travel-insurance">
                  <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] px-10 font-bold h-14 rounded-full shadow-lg">
                    Get in touch <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/travel-insurance#partner">
                   <Button variant="ghost" className="px-10 font-bold h-14 text-[#F4F1E8] hover:bg-white/5 border border-white/10 rounded-full">
                     Partner with us →
                   </Button>
                </Link>
              </div>
           </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
           <div className="container mx-auto px-6 max-w-3xl">
              <div className="text-center mb-16 space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E8A33D] font-mono">QUESTIONS</div>
                <h2 className="text-3xl md:text-4xl font-headline font-medium">A few things worth knowing.</h2>
              </div>
              
              <div className="space-y-8">
                 {[
                   { q: "Does Utsavs tell me whether I should travel?", a: "No. Utsavs shows the dates, evidence and practical implications that may matter to your purpose, so you can make the decision." },
                   { q: "Why can the same date mean different things?", a: "A public holiday, regional observance, university calendar or institutional closure can affect places and activities differently. Utsavs keeps those scopes separate." },
                   { q: "Are all dates confirmed?", a: "No. Some dates are officially published well in advance; others depend on later announcements, lunar observation or institutional publication. Source and date state are shown where available." },
                   { q: "Does Utsavs replace visa or immigration advice?", a: "No. Entry eligibility depends on the traveller's circumstances and the relevant authority. Utsavs provides timing and planning context." },
                   { q: "Can I use Utsavs for business or study?", a: "Yes. The same date can be examined for travel, business, study, workforce and operational planning, with deeper institutional information where verified." }
                 ].map((item, i) => (
                   <div key={i} className="space-y-2 border-b border-white/5 pb-8 last:border-0">
                      <h4 className="font-bold text-lg">{item.q}</h4>
                      <p className="text-[#9AA1C0] leading-relaxed">{item.a}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CLOSING */}
        <section className="py-24 border-t border-white/10 text-center">
           <div className="container mx-auto px-6 max-w-4xl space-y-12">
              <h2 className="text-3xl md:text-5xl font-headline font-medium italic leading-relaxed text-[#F4F1E8]">
                Check the date first. If it turns out to matter to you, the story's one click away.
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4 text-[13px] font-mono text-[#9AA1C0]">
                <span className="px-6 py-3 bg-[#E8A33D] text-[#0F1428] font-bold rounded-full">Intelligence & API</span>
                <span className="opacity-20">—</span>
                <span className="px-6 py-3 border border-white/10 rounded-full">Cultural stories</span>
                <span className="opacity-20">—</span>
                <span className="px-6 py-3 border border-white/10 rounded-full">Recipes & travel</span>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
