
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
  Info
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
            : `We found ${result.records.length} ${result.records.length === 1 ? 'event' : 'events'} that may affect your ${result.query_context.purpose} plan. Review the details below.`
          }
        </p>
      </div>
    </div>
  );
}

export default function V1Page() {
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
        <section className="py-12 md:py-24 border-b">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="space-y-8 text-left">
                <h1 className="font-headline text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                  Know before you fly.<br/>Know before you schedule.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-medium">
                  Check a country and your actual dates — before you book,
                  schedule, send a student, or send an employee across borders.
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
                      <div className="pt-6 border-t mt-6">
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

        <section className="py-24 bg-muted/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-12">World Today</h2>
            <UpcomingFestivalsCarousel />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
