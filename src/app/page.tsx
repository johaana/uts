
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  ChevronRight
} from "lucide-react";
import { getOperationalImpact } from '@/lib/operational/adapter';
import { OperationalQuery, OperationalResult } from '@/lib/operational/types';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { OperationalResultCard } from '@/components/operational/OperationalResultCard';
import { UpcomingFestivalsCarousel } from '@/components/UpcomingFestivalsCarousel';

function TripAdvisory({ result }: { result: OperationalResult }) {
  const hasImpacts = result.records.length > 0;
  return (
    <div className={cn(
      "p-6 rounded-2xl mb-8 border flex flex-col md:flex-row items-center gap-6 transition-all animate-in fade-in slide-in-from-top-4 duration-500",
      !hasImpacts ? "bg-accent/5 border-accent/20" : "bg-primary/5 border-primary/20"
    )}>
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
        !hasImpacts ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
      )}>
        {!hasImpacts ? <ShieldCheck className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
      </div>
      <div className="flex-1 space-y-1 text-center md:text-left">
        <h3 className="font-headline text-2xl font-bold">
          {!hasImpacts ? "Your date looks operationally good." : "Plan for specific operational impacts."}
        </h3>
        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
          {!hasImpacts 
            ? "No specific date impacts were found for this journey in our verified dataset. Standard cross-border rules apply."
            : `We found ${result.records.length} signal(s) that may affect your ${result.query_context.purpose} plan. Review the details below.`
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
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="py-12 md:py-24 border-b">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="space-y-8 text-left">
                <h1 className="font-headline text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                  Know before you fly.<br/>Know before you schedule.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.
                </p>
                <div className="flex gap-4">
                   <Badge variant="secondary" className="px-3 py-1 font-bold text-[10px] tracking-widest uppercase">Verified Data</Badge>
                   <Badge variant="secondary" className="px-3 py-1 font-bold text-[10px] tracking-widest uppercase">Source Aware</Badge>
                </div>
              </div>

              <div className="w-full">
                <Card className="border-primary/20 shadow-2xl overflow-hidden bg-card">
                  <CardHeader className="bg-primary/5 border-b flex flex-row justify-between items-center px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Search className="w-5 h-5 text-primary" />
                      <span className="font-bold text-sm uppercase tracking-widest">Trip Impact Checker</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Destination</label>
                        <Select value={query.destination} onValueChange={(v) => setQuery({...query, destination: v})}>
                          <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
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
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Purpose</label>
                        <Select value={query.purpose} onValueChange={(v: any) => setQuery({...query, purpose: v})}>
                          <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="travel">Travel</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="study">Study</SelectItem>
                            <SelectItem value="workforce">Workforce</SelectItem>
                            <SelectItem value="logistics">Logistics</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Start Date</label>
                        <Input type="date" value={query.startDate} onChange={(e) => setQuery({...query, startDate: e.target.value})} className="bg-background" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">End Date</label>
                        <Input type="date" value={query.endDate} onChange={(e) => setQuery({...query, endDate: e.target.value})} className="bg-background" />
                      </div>
                    </div>
                    <Button 
                      className="w-full font-bold h-12 transition-all active:scale-[0.98]" 
                      onClick={handleCheckImpact}
                      disabled={isSearching}
                    >
                      {isSearching ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : null}
                      Check Impact
                    </Button>

                    {result && !isSearching && (
                      <div className="pt-6 border-t mt-6 animate-in fade-in slide-in-from-top-4 duration-500">
                        <TripAdvisory result={result} />
                        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                          {result.records.map(record => (
                            <OperationalResultCard key={record.id} record={record} />
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* WORLD TODAY SECTION */}
        <section className="py-24 bg-muted/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-4">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl md:text-5xl font-bold">World Today</h2>
                <p className="text-muted-foreground font-medium">Discover what's happening and what's next on the global calendar.</p>
              </div>
              <Link href="/date-intelligence">
                <Button variant="ghost" className="font-bold uppercase tracking-widest text-xs group">
                  View Full Calendar <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <UpcomingFestivalsCarousel />
          </div>
        </section>

        {/* SPECIALIZED INTELLIGENCE */}
        <section className="py-24 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-16 space-y-4">
              <h2 className="font-headline text-3xl md:text-5xl font-bold">Specialized intelligence.</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">One calendar underneath. Deeper calendars when the job demands it.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Bank Closures", desc: "Differentiate between a public holiday and an actual banking shutdown.", icon: Landmark },
                { title: "Market Depth", desc: "Track exchange operating windows, early closes, and settlement cycles.", icon: Briefcase },
                { title: "Working Days", desc: "Calculate business days with jurisdictional precision.", icon: Clock }
              ].map((item) => (
                <div key={item.title} className="p-8 border rounded-2xl bg-card hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUILT FOR CTA */}
        <section className="py-24 border-t bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="font-headline text-4xl md:text-6xl font-bold">Built for decisions.</h2>
              <p className="text-xl text-muted-foreground">Utsavs powers timing decisions for global travel, study, and operations.</p>
              <Link href="/built-for">
                <Button size="lg" className="px-12 font-bold h-14 text-lg">Explore Use Cases</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* API PREVIEW */}
        <section id="api" className="py-24 border-t">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                 <h2 className="font-headline text-3xl md:text-5xl font-bold">One API.<br/>Global intelligence.</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   Integrate high-precision global holiday and institutional intelligence into your products and workflows.
                 </p>
                 <Link href="/api">
                   <Button variant="outline" className="font-bold px-8 h-12 uppercase tracking-widest text-xs">Join API Preview</Button>
                 </Link>
               </div>
               <div className="flex-1 w-full bg-zinc-950 p-6 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl font-mono text-[13px] text-zinc-300">
                  <p className="text-emerald-400 mb-2">GET /v1/holidays?country=IN&year=2026</p>
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    <code>{`{
  "name": "Diwali",
  "date": "2026-11-08",
  "country": "IN",
  "scope": "national",
  "status": "CONFIRMED",
  "verification": "HIGH"
}`}</code>
                  </pre>
               </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
