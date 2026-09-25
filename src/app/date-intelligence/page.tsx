'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Loader2, 
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { getOperationalImpact } from '@/lib/operational/adapter';
import { getSource } from '@/lib/operational/source';
import { OperationalQuery, OperationalResult, CanonicalRule } from '@/lib/operational/types';
import { cn } from '@/lib/utils';
import { OperationalResultCard } from '@/components/operational/OperationalResultCard';
import { COUNTRY_LABELS } from '@/lib/calendar-intelligence';

const LENS_LABELS = {
  all: "All intelligence"
};

export default function DateIntelligencePage() {
  const [canonicalRules, setCanonicalRules] = useState<CanonicalRule[]>([]);
  const [query, setQuery] = useState<OperationalQuery>({
    destination: 'IN',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    purpose: 'travel'
  });
  const [result, setResult] = useState<OperationalResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [activeLens, setActiveLens] = useState('all');

  useEffect(() => {
    getSource().getCanonicalRules().then(rules => {
      setCanonicalRules(rules);
    });
  }, []);

  const allAvailableCountries = useMemo(() => {
    const codes = canonicalRules.map(r => r.jurisdiction?.country_code).filter(Boolean);
    return Array.from(new Set(codes as string[])).sort();
  }, [canonicalRules]);

  const handleSearch = async (overrideQuery?: any) => {
    const q = overrideQuery || query;
    setIsSearching(true);
    setTimeout(async () => {
      try {
        const impact = await getOperationalImpact(q);
        setResult(impact);
      } catch (e) {
        console.error(e);
      } finally {
        setIsSearching(false);
      }
    }, 400);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const changeDate = (days: number) => {
    const current = new Date(query.startDate);
    current.setDate(current.getDate() + days);
    const dateStr = current.toISOString().split('T')[0];
    const newQuery = { ...query, startDate: dateStr, endDate: dateStr };
    setQuery(newQuery);
    handleSearch(newQuery);
  };

  const setToday = () => {
    const dateStr = new Date().toISOString().split('T')[0];
    const newQuery = { ...query, startDate: dateStr, endDate: dateStr };
    setQuery(newQuery);
    handleSearch(newQuery);
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="space-y-4">
              <div className="text-[12.5px] font-mono text-[#F0C888] tracking-widest uppercase">★ Date intelligence</div>
              <h1 className="text-3xl md:text-5xl font-headline font-medium leading-tight">What happens on this date?</h1>
              <p className="text-[#9AA1C0] leading-relaxed max-w-2xl font-medium">
                One place for the calendar fact, travel signals and institution-specific evidence around a date — with the scope and source kept visible.
              </p>
            </div>

            <div className="border border-white/18 rounded-2xl bg-[#171D3A] overflow-hidden shadow-2xl">
              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 p-6 bg-[#1E2650] border-b border-white/10 items-end">
                <div className="space-y-2">
                  <label className="block text-[10.5px] font-mono text-[#6E7495] uppercase tracking-wider">Date · live today by default</label>
                  <Input 
                    type="date" 
                    value={query.startDate} 
                    onChange={(e) => {
                      const d = e.target.value;
                      setQuery({...query, startDate: d, endDate: d});
                    }}
                    className="bg-[#0F1428] border-white/10 h-11"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10.5px] font-mono text-[#6E7495] uppercase tracking-wider">Place</label>
                  <Select value={query.destination} onValueChange={(v) => setQuery({...query, destination: v})}>
                    <SelectTrigger className="bg-[#0F1428] border-white/10 h-11"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {allAvailableCountries.map(code => (
                        <SelectItem key={code} value={code}>{COUNTRY_LABELS[code] || code}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2 h-11">
                  <Button variant="ghost" onClick={setToday} className="h-full border border-white/10 hover:bg-white/5 px-4 font-bold text-xs uppercase tracking-widest">Today</Button>
                  <Button variant="ghost" size="icon" onClick={() => changeDate(-1)} className="h-full border border-white/10 hover:bg-white/5"><ChevronLeft className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => changeDate(1)} className="h-full border border-white/10 hover:bg-white/5"><ChevronRight className="w-4 h-4" /></Button>
                </div>
              </div>

              {/* Lenses */}
              <div className="flex flex-wrap gap-2 p-4 md:px-6 border-b border-white/10">
                {Object.entries(LENS_LABELS).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveLens(key)}
                    className={cn(
                      "px-4 py-2 text-[11.5px] font-bold uppercase tracking-wider rounded-full transition-all border",
                      activeLens === key 
                        ? "bg-[#E8A33D] text-[#0F1428] border-[#E8A33D]" 
                        : "bg-transparent text-[#9AA1C0] border-white/10 border-white/30"
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-2">
                {/* Left: Date context */}
                <div className="p-8 space-y-6 border-b md:border-b-0 md:border-r border-white/10">
                   <div className="space-y-1">
                      <p className="text-[10.5px] font-mono text-[#4FD1C5] uppercase tracking-widest">Date context</p>
                      <h2 className="text-3xl font-headline font-medium text-[#F4F1E8] flex items-baseline gap-3">
                        {new Date(query.startDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        {query.startDate === new Date().toISOString().split('T')[0] && (
                          <span className="text-[10px] font-mono text-[#4FD1C5] border border-[#4FD1C5]/30 rounded-full px-2 py-0.5 uppercase">Today</span>
                        )}
                      </h2>
                      <p className="text-[13px] text-[#9AA1C0]">
                        {COUNTRY_LABELS[query.destination] || query.destination} · Weekday
                      </p>
                   </div>

                   <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
                      <div className="bg-[#1E2650] p-4 space-y-1">
                        <span className="text-[10px] font-mono text-[#6E7495] uppercase">Calendar</span>
                        <p className="text-sm font-headline font-medium">
                          {result?.records.filter(r => r.category === 'holiday' || r.category === 'regional').length || 0} events
                        </p>
                      </div>
                      <div className="bg-[#1E2650] p-4 space-y-1">
                        <span className="text-[10px] font-mono text-[#6E7495] uppercase">Planning</span>
                        <p className="text-sm font-headline font-medium">
                          {result?.records.filter(r => r.category !== 'holiday' && r.category !== 'regional').length || 0} items
                        </p>
                      </div>
                      <div className="bg-[#1E2650] p-4 space-y-1">
                        <span className="text-[10px] font-mono text-[#6E7495] uppercase">Confidence</span>
                        <p className="text-sm font-headline font-medium">HIGH</p>
                      </div>
                   </div>

                   <div className="pt-6">
                      {isSearching ? (
                        <div className="flex items-center gap-3 text-[#9AA1C0] py-4">
                           <Loader2 className="w-5 h-5 animate-spin" />
                           <span className="text-sm font-medium italic">Evaluating planning implications...</span>
                        </div>
                      ) : result && result.records.length > 0 ? (
                        <div className="p-6 border border-primary/20 bg-primary/5 rounded-xl">
                          <p className="text-sm font-medium leading-relaxed">
                            We found {result.records.length} record(s) that may affect your planning for this date and location.
                          </p>
                        </div>
                      ) : (
                        <div className="p-6 text-center border border-dashed border-white/10 rounded-xl">
                          <p className="text-sm text-[#9AA1C0] italic font-medium">
                            No holiday or observance is currently recorded for this place and date in Utsavs.
                          </p>
                        </div>
                      )}
                   </div>
                </div>

                {/* Right: Operational signals */}
                <div className="p-8 space-y-6 bg-white/5">
                   <div className="space-y-1">
                      <p className="text-[10.5px] font-mono text-[#4FD1C5] uppercase tracking-widest">What affects this date?</p>
                   </div>
                   
                   <div className="space-y-4">
                      {isSearching ? (
                        <div className="space-y-4">
                          {[1,2,3].map(i => <div key={i} className="h-20 bg-white/5 animate-pulse rounded-lg"></div>)}
                        </div>
                      ) : result && result.records.length > 0 ? (
                        <div className="space-y-4">
                           {result.records.map(record => (
                             <OperationalResultCard key={record.id} record={record} />
                           ))}
                        </div>
                      ) : (
                        <div className="space-y-8 pt-4">
                           {['Government', 'Banking', 'Markets', 'Travel'].map(cat => (
                             <div key={cat} className="flex justify-between items-start gap-4 group">
                                <div className="space-y-1 text-left">
                                   <p className="text-[11px] font-mono text-[#6E7495] uppercase tracking-wider">{cat}</p>
                                   <p className="text-sm font-medium text-[#9AA1C0]">No specific operational impact recorded.</p>
                                </div>
                                <span className="text-[10px] font-mono text-[#6E7495] px-2 py-0.5 border border-dashed border-white/10 rounded-full">NONE</span>
                             </div>
                           ))}
                        </div>
                      )}
                   </div>
                </div>
              </div>

              {/* Foot */}
              <div className="p-4 md:px-6 bg-[#1E2650] border-t border-white/10 text-[11.5px] text-[#6E7495] leading-relaxed text-left">
                <b>Reading the page:</b> the calendar tells you what the date is; institutional rows show published institution-level planning considerations; 
                the travel row adds a live public advisory when available. No closure is inferred from a holiday or weekend alone.
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
