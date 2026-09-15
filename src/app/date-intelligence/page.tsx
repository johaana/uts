
'use client';

import React, { useState } from 'react';
import { PageLayout } from "@/components/PageLayout";
import { OperationalFAQ } from "@/components/operational/OperationalFAQ";
import { EmptyState } from "@/components/operational/EmptyState";
import { OperationalResultCard } from "@/components/operational/OperationalResultCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Loader2, ShieldCheck, AlertCircle } from "lucide-react";
import { getOperationalImpact } from '@/lib/operational/adapter';
import { OperationalQuery, OperationalResult } from '@/lib/operational/types';
import { cn } from '@/lib/utils';

function TripAdvisory({ result }: { result: OperationalResult }) {
  const hasImpacts = result.records.length > 0;
  const highSeverity = result.records.filter(r => r.consequences.severity === 'high');

  return (
    <div className={cn(
      "p-6 rounded-2xl mb-8 border flex flex-col md:flex-row items-center gap-6 transition-all animate-in fade-in slide-in-from-top-4 duration-500",
      !hasImpacts ? "bg-green-500/5 border-green-500/20" : 
      highSeverity.length > 0 ? "bg-red-500/5 border-red-500/20" : "bg-amber-500/5 border-amber-500/20"
    )}>
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
        !hasImpacts ? "bg-green-500/10 text-green-600" : 
        highSeverity.length > 0 ? "bg-red-500/10 text-red-600" : "bg-amber-500/10 text-amber-600"
      )}>
        {!hasImpacts ? <ShieldCheck className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
      </div>
      <div className="flex-1 space-y-1 text-center md:text-left">
        <h3 className="font-headline text-2xl font-bold">
          {!hasImpacts ? "Your date looks operationally good." : "Plan for specific operational impacts."}
        </h3>
        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
          {!hasImpacts 
            ? "No specific date impacts were found for this journey in our verified dataset. Standard cross-border rules apply."
            : `We found ${result.records.length} signal(s) that may affect your ${result.query_context.purpose} plan. Review the details below to understand the practical implications.`
          }
        </p>
      </div>
    </div>
  );
}

export default function DateIntelligencePage() {
  const [query, setQuery] = useState<OperationalQuery>({
    origin: '',
    destination: 'IN',
    startDate: '2026-11-01',
    endDate: '2026-11-15',
    purpose: 'travel'
  });
  const [result, setResult] = useState<OperationalResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleCheckImpact = async () => {
    setIsSearching(true);
    // Simulate slight network delay for UI feedback
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
      <PageLayout>
        {/* HERO */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">Know before you fly.<br/>Know before you schedule.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Check a country and your actual dates — before you book, schedule, send a student, or send an employee across borders.
          </p>
        </section>

        {/* TRIP IMPACT CHECKER */}
        <section className="mb-24">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-2xl overflow-hidden">
            <CardHeader className="bg-primary/5 border-b flex flex-row justify-between items-center px-6 py-4">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-primary" />
                <span className="font-bold text-sm uppercase tracking-widest">Trip Impact Checker</span>
              </div>
              <div className="hidden md:flex gap-2">
                 <Badge variant="outline" className="text-[10px] font-mono border-primary/20">SOURCE: AUTHORITATIVE</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Origin (Optional)</label>
                  <Input 
                    placeholder="e.g. US" 
                    value={query.origin}
                    onChange={(e) => setQuery({...query, origin: e.target.value.toUpperCase()})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Destination</label>
                  <Input 
                    placeholder="e.g. IN" 
                    value={query.destination}
                    onChange={(e) => setQuery({...query, destination: e.target.value.toUpperCase()})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Start Date</label>
                  <Input 
                    type="date" 
                    value={query.startDate}
                    onChange={(e) => setQuery({...query, startDate: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">End Date</label>
                  <Input 
                    type="date" 
                    value={query.endDate}
                    onChange={(e) => setQuery({...query, endDate: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Purpose</label>
                  <Select 
                    value={query.purpose} 
                    onValueChange={(v: any) => setQuery({...query, purpose: v})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="travel">Travel</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="study">Study</SelectItem>
                      <SelectItem value="workforce">Workforce</SelectItem>
                      <SelectItem value="logistics">Logistics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="font-bold px-12 transition-all active:scale-95" 
                  onClick={handleCheckImpact}
                  disabled={isSearching}
                >
                  {isSearching ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : null}
                  Check Impact
                </Button>
              </div>

              {/* RESULTS AREA */}
              <div className="pt-8 border-t">
                {!result && !isSearching && (
                  <div className="text-center py-10 text-muted-foreground">
                    <p className="text-sm italic">Select a destination and dates to begin. Results will be based on the relevant calendar and institutional sources available for that journey.</p>
                  </div>
                )}

                {isSearching && (
                   <div className="flex flex-col items-center justify-center py-20 space-y-4">
                      <Loader2 className="w-8 h-8 animate-spin text-primary" />
                      <p className="text-sm font-medium animate-pulse text-muted-foreground">Analyzing authoritative records...</p>
                   </div>
                )}

                {result && !isSearching && (
                  <div className="space-y-6 animate-in fade-in duration-700">
                    <TripAdvisory result={result} />
                    
                    {result.status === 'source_unavailable' && (
                      <EmptyState 
                        title="Source disconnected" 
                        message="The operational intelligence source is not currently connected to this application. No production records are available." 
                      />
                    )}
                    
                    {result.status === 'no_matching_records' && (
                      <div className="text-center py-10 px-6 border rounded-xl bg-muted/5">
                        <p className="text-sm text-muted-foreground">No specific operational impacts flagged for these criteria in the verified dataset.</p>
                      </div>
                    )}

                    {result.records.length > 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between px-2 mb-2">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Identified Signals</h4>
                          <span className="text-[10px] font-mono text-muted-foreground">v{result.metadata.version || '1.0.0'}</span>
                        </div>
                        {result.records.map(record => (
                          <OperationalResultCard key={record.id} record={record} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CORE PRODUCT EXPLANATION */}
        <section className="py-20 border-t">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">What is Date Intelligence?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Date Intelligence brings the calendar, local differences, and relevant institutional information together so you can understand what a particular date may mean for a particular plan. 
            </p>
            <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-xl mb-4">Does this date work for what I am trying to do?</h3>
              <p className="text-muted-foreground leading-relaxed">
                The same date can be desirable for a traveller who wants to experience an event, but disruptive for a business meeting or a logistics movement. Utsavs does not decide the "best" date; it exposes the practical implications so you can.
              </p>
            </div>
          </div>
        </section>

        <OperationalFAQ />
      </PageLayout>
    </div>
  );
}
