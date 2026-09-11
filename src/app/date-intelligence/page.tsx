'use client';

import React, { useState } from 'react';
import { PageLayout } from "@/components/PageLayout";
import { OperationalFAQ } from "@/components/operational/OperationalFAQ";
import { EmptyState } from "@/components/operational/EmptyState";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Loader2 } from "lucide-react";
import { getOperationalImpact } from '@/lib/operational/adapter';
import { OperationalQuery, OperationalResult } from '@/lib/operational/types';

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
      const impact = await getOperationalImpact(query);
      setResult(impact);
      setIsSearching(false);
    }, 600);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <PageLayout>
        {/* HERO */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">Know before you fly.<br/>Know before you schedule.</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
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
            </CardHeader>
            <CardContent className="p-6 md:p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Origin (Optional)</label>
                  <Input 
                    placeholder="e.g. US" 
                    value={query.origin}
                    onChange={(e) => setQuery({...query, origin: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Destination</label>
                  <Input 
                    placeholder="e.g. IN" 
                    value={query.destination}
                    onChange={(e) => setQuery({...query, destination: e.target.value})}
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
                  className="font-bold px-12" 
                  onClick={handleCheckImpact}
                  disabled={isSearching}
                >
                  {isSearching ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : null}
                  Check Impact
                </Button>
              </div>

              {/* RESULTS AREA */}
              <div className="pt-8 border-t">
                {!result ? (
                  <div className="text-center py-10 text-muted-foreground">
                    <p className="text-sm italic">Select a destination and dates to begin. Results will be based on the relevant calendar and institutional sources available for that journey.</p>
                  </div>
                ) : result.status === 'source_unavailable' ? (
                  <EmptyState 
                    title="Source disconnected" 
                    message="The operational intelligence source is not currently connected to this application. No production records are available." 
                  />
                ) : result.status === 'no_matching_records' ? (
                  <div className="text-center py-10 text-muted-foreground">
                    <p className="text-sm">No specific operational impacts flagged for these criteria in the verified dataset.</p>
                  </div>
                ) : (
                  // Future: Render validated records here
                  null
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
