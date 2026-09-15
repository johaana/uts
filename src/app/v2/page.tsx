
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Info
} from "lucide-react";
import { getOperationalImpact } from '@/lib/operational/adapter';
import { OperationalQuery, OperationalResult } from '@/lib/operational/types';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { OperationalResultCard } from '@/components/operational/OperationalResultCard';

export default function V2Page() {
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
    <div className="bg-background text-foreground min-h-screen font-sans">
      <Header />
      
      <main>
        {/* HERO */}
        <section className="py-12 md:py-24 border-b">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* LEFT: Hero Copy */}
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">DATE INTELLIGENCE</div>
                <h1 className="font-headline text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                  Know before you fly.<br/>Know before you schedule.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-medium">
                  Check a country and your actual dates — before you book,
                  schedule, send a student, or send an employee across borders.
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <Link href="/date-intelligence">
                    <Button size="lg" className="font-bold px-8">Check a date <ArrowRight className="ml-2 w-4 h-4" /></Button>
                  </Link>
                  <a href="#how-it-works" className="text-sm font-bold text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
                    See how it works <span className="text-xs">↓</span>
                  </a>
                </div>
              </div>

              {/* RIGHT: The Tracker */}
              <div className="w-full">
                <Card className="border shadow-2xl overflow-hidden bg-card rounded-2xl">
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="flex items-center justify-between border-b pb-4">
                       <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-primary mb-1">DATE INTELLIGENCE</p>
                          <h2 className="text-2xl font-headline font-bold">Check your dates</h2>
                       </div>
                       <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">Live</span>
                       </div>
                    </div>

                    <div className="flex bg-muted/50 p-1 rounded-xl">
                      {['travel', 'study', 'workforce'].map((p) => (
                        <button 
                          key={p}
                          onClick={() => setQuery({...query, purpose: p as any})}
                          className={cn(
                            "flex-1 py-2 text-[11px] font-bold uppercase tracking-widest rounded-lg transition-all",
                            query.purpose === p ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {p === 'workforce' ? 'Business' : p}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-4">
                       <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Destination / Jurisdiction</label>
                          <Select value={query.destination} onValueChange={(v) => setQuery({...query, destination: v})}>
                            <SelectTrigger className="bg-background h-12"><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="IN">India</SelectItem>
                              <SelectItem value="JP">Japan</SelectItem>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                            </SelectContent>
                          </Select>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">From</label>
                            <Input type="date" value={query.startDate} onChange={(e) => setQuery({...query, startDate: e.target.value})} className="h-12" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">To</label>
                            <Input type="date" value={query.endDate} onChange={(e) => setQuery({...query, endDate: e.target.value})} className="h-12" />
                          </div>
                       </div>
                    </div>

                    <Button 
                      className="w-full font-bold h-12 shadow-lg" 
                      onClick={handleCheckImpact}
                      disabled={isSearching}
                    >
                      {isSearching ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : "Check dates"}
                    </Button>

                    {result && !isSearching && (
                      <div className="pt-6 border-t animate-in fade-in slide-in-from-top-4">
                        <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                          {result.records.map(record => (
                            <OperationalResultCard key={record.id} record={record} />
                          ))}
                        </div>
                        <div className="pt-4 text-center border-t mt-4">
                           <Link href="/date-intelligence" className="text-xs font-bold uppercase tracking-widest text-primary hover:underline flex items-center justify-center gap-1">
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
        <section className="py-24" id="world-today">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-16 space-y-4">
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">WORLD TODAY</div>
               <h2 className="text-3xl md:text-5xl font-headline font-bold">Dates are not just dates.</h2>
               <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                 Around the world, a date can mean a public holiday, a regional observance, an institutional closure, 
                 a working-day difference or something entirely specific to your trip.
               </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               <Card className="bg-primary/5 border-primary/20 p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">TODAY</span>
                    <h3 className="text-2xl font-headline font-bold">Understanding today's calendar</h3>
                    <p className="text-muted-foreground text-sm font-medium">See the dates and places that may matter today across our global index.</p>
                  </div>
                  <Link href="/date-intelligence" className="mt-8">
                     <Button variant="outline" className="font-bold">Explore today <ArrowRight className="ml-2 w-4 h-4" /></Button>
                  </Link>
               </Card>
               <Card className="p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">COMING UP</span>
                    <h3 className="text-2xl font-headline font-bold" id="next-event-name">Diwali 2026</h3>
                    <p className="text-muted-foreground text-sm font-medium" id="next-event-meta">8 November 2026 · India · National</p>
                  </div>
                  <Link href="/festivals/diwali" className="mt-8">
                     <Button variant="ghost" className="font-bold text-primary">Check the date <ArrowRight className="ml-2 w-4 h-4" /></Button>
                  </Link>
               </Card>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 bg-muted/5 border-t" id="how-it-works">
           <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-16 space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">HOW IT WORKS</div>
                <h2 className="text-3xl md:text-5xl font-headline font-bold">See what your dates may mean.</h2>
                <p className="text-lg text-muted-foreground font-medium">Utsavs brings relevant calendars and institutional information together around the date you actually care about.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { n: "01", t: "Travel", d: "Understand what may be happening when you arrive, from public dates to travel info.", a: "Choosing when to go" },
                   { n: "02", t: "Business", d: "See dates that may affect meetings, operations, working days and activity.", a: "Choosing when to schedule" },
                   { n: "03", t: "Study", d: "Put institutional calendars and arrival timing around your target dates.", a: "Choosing when to arrive" },
                   { n: "04", t: "Operations", d: "Go deeper when the job requires it — markets, banking, and logistics.", a: "Choosing when to operate" }
                 ].map(item => (
                   <div key={item.n} className="space-y-6 group">
                      <span className="text-3xl font-headline font-bold text-primary/30 group-hover:text-primary transition-colors">{item.n}</span>
                      <h3 className="text-xl font-bold">{item.t}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.d}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1">{item.a} <ArrowRight className="w-3 h-3" /></p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* SPECIALIZED INTELLIGENCE */}
        <section className="py-24 border-t">
           <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
                 <div className="space-y-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">SPECIALIZED INTELLIGENCE</div>
                    <h2 className="text-3xl md:text-5xl font-headline font-bold">One calendar underneath. <br/>Deeper calendars when required.</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                      The same date can affect a traveller, market, bank or operation differently. Utsavs keeps those layers distinct.
                    </p>
                    <Link href="/date-intelligence">
                      <Button variant="link" className="px-0 font-bold text-primary">Explore Date Intelligence →</Button>
                    </Link>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border rounded-xl overflow-hidden shadow-sm">
                    {[
                      { n: "01", t: "Regional calendars", s: "Country, state, province and jurisdiction" },
                      { n: "02", t: "Institutions", s: "Universities, missions and other institutions" },
                      { n: "03", t: "Markets & banking", s: "Trading, settlement, payments and working days" },
                      { n: "04", t: "Trade & logistics", s: "Customs, ports and documented operational timing" }
                    ].map(item => (
                      <div key={item.n} className="bg-card p-8 space-y-2 hover:bg-muted/10 transition-colors">
                        <span className="text-[10px] font-bold text-primary/50">{item.n}</span>
                        <h4 className="font-bold text-lg">{item.t}</h4>
                        <p className="text-xs text-muted-foreground font-medium">{item.s}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* API */}
        <section className="py-24 bg-primary/5 border-y">
           <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">FOR SYSTEMS</div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Need to work with the intelligence continuously?</h2>
                <p className="text-muted-foreground font-medium">Use Utsavs through the API for applications, workflows and systems that need calendar intelligence at scale.</p>
              </div>
              <Link href="/api">
                <Button size="lg" className="px-10 font-bold h-14">Explore the API <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
           </div>
        </section>

        {/* TRAVEL INSURANCE */}
        <section className="py-24 border-b">
           <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">TRAVEL INSURANCE</div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Plan for what you can predict. Protect against what you can't.</h2>
                <p className="text-muted-foreground font-medium">Explore how travel timing and protection work together — whether planning your own journey or building workflows.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/travel-insurance">
                  <Button size="lg" className="px-10 font-bold h-14">Get in touch <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </Link>
                <Link href="/travel-insurance#partner">
                   <Button variant="outline" size="lg" className="px-10 font-bold h-14">Partner with us →</Button>
                </Link>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
