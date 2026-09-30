'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  Landmark, 
  Activity, 
  Search, 
  Loader2, 
  Check, 
  Plane, 
  ChevronRight, 
  Lock,
  Globe,
  Info,
  Clock,
  AlertCircle,
  RefreshCw,
  RotateCcw,
  Terminal,
  Eye,
  EyeOff
} from "lucide-react";
import { getAsegoCategories, getAsegoPlans } from './actions';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function InternationalInsurancePage() {
  const { toast } = useToast();
  
  // 1. UAT SESSION CREDENTIALS (In-Memory Only)
  const [creds, setCreds] = useState({
    partnerId: '',
    sign: '',
    reference: '',
    showGate: false
  });

  // 2. SEARCH STATE
  const [searchParams, setSearchParams] = useState({
    age: '25',
    duration: '30',
    categoryId: ''
  });
  const [categories, setCategories] = useState<any[]>([]);
  const [plans, setPlans] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  
  // 3. DEBUG STATE
  const [showTrace, setShowTrace] = useState(false);
  const [lastTrace, setLastTrace] = useState<any>(null);

  // 4. INITIALIZATION
  useEffect(() => {
    if (creds.partnerId && creds.sign && creds.reference) {
      fetchCategories();
    }
  }, [creds.partnerId, creds.sign, creds.reference]);

  const fetchCategories = async () => {
    setIsConnecting(true);
    try {
      const res = await getAsegoCategories(creds);
      if (res.success && Array.isArray(res.data)) {
        setCategories(res.data);
        toast({ title: "UAT Connected", description: `Discovered ${res.data.length} destination categories.` });
      } else {
        toast({ title: "Connection Failed", description: "Metadata retrieval failed.", variant: "destructive" });
      }
    } catch (e) {
      toast({ title: "Connection Error", variant: "destructive" });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!creds.partnerId || !creds.sign || !creds.reference) {
      setCreds(prev => ({ ...prev, showGate: true }));
      return;
    }

    if (!searchParams.categoryId) {
        return toast({ title: "Selection Required", description: "Please select your destination region." });
    }

    setIsLoading(true);
    setHasSearched(true);
    setPlans([]);
    try {
      const res = await getAsegoPlans(creds, searchParams);
      setLastTrace(res);
      
      if (res.success) {
        const foundPlans = res.data?.sellingPlanDto || [];
        setPlans(foundPlans);
        if (foundPlans.length === 0) {
          toast({ title: "No Plans Found", description: "The UAT catalogue returned an empty result for these parameters." });
        }
      } else {
        toast({ title: "API Error", description: res.error || "Request failed", variant: "destructive" });
      }
    } catch (e) {
      toast({ title: "Search Error", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const isSessionActive = !!(creds.partnerId && creds.sign && creds.reference);

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="relative py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* HERO SECTION */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                <div className="text-left space-y-6 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full">
                        <ShieldCheck className="w-3 h-3 text-[#4FD1C5]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Verified UAT Environment</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-headline font-medium leading-[1.05] tracking-tighter">
                        Plan for the occasion.<br/>
                        <span className="italic text-[#9AA1C0]">Protect the impact.</span>
                    </h1>
                    <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium max-w-2xl">
                        Real-time international travel protection powered by Asego Dolphin UAT. 
                        Reconciling global dates with comprehensive coverage.
                    </p>
                </div>
                <div className="flex gap-3 pt-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setShowTrace(!showTrace)} 
                      className={cn(
                        "text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none transition-all",
                        showTrace ? "bg-white text-black border-white" : "border-white/10 text-white/40"
                      )}
                    >
                        <Terminal className="w-3 h-3 mr-2" /> {showTrace ? "Hide Trace" : "Show Trace"}
                    </Button>
                    <div className={cn(
                        "flex items-center gap-2 px-4 h-8 border rounded-none transition-all",
                        isSessionActive ? "bg-green-500/10 border-green-500/30 text-green-500" : "bg-amber-500/10 border-amber-500/30 text-amber-500"
                    )}>
                        <div className={cn("w-1.5 h-1.5 rounded-full", isSessionActive ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-amber-500 animate-pulse")}></div>
                        <span className="text-[9px] font-bold uppercase tracking-widest">{isSessionActive ? "UAT Session Active" : "UAT Connection Pending"}</span>
                    </div>
                </div>
            </div>

            {/* UAT CREDENTIAL GATE */}
            {creds.showGate && (
              <Card className="bg-[#171D3A] border-dashed border-[#E8A33D]/40 p-8 rounded-none shadow-2xl animate-in fade-in zoom-in-95 text-left ring-1 ring-[#E8A33D]/20">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <Lock className="w-5 h-5 text-[#E8A33D]" />
                       <h3 className="text-xl font-bold font-headline">UAT Session Activation</h3>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setCreds({...creds, showGate: false})} className="text-[#6E7495]">Cancel</Button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Partner ID</Label>
                       <Input 
                         value={creds.partnerId} 
                         onChange={e => setCreds({...creds, partnerId: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-12 rounded-none font-mono" 
                         placeholder="Enter UAT Partner ID"
                       />
                    </div>
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Sign (Custom Header)</Label>
                       <Input 
                         type="password"
                         value={creds.sign} 
                         onChange={e => setCreds({...creds, sign: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-12 rounded-none" 
                         placeholder="Paste Sign Credential"
                       />
                    </div>
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Reference (Custom Header)</Label>
                       <Input 
                         type="password"
                         value={creds.reference} 
                         onChange={e => setCreds({...creds, reference: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-12 rounded-none" 
                         placeholder="Paste Reference Credential"
                       />
                    </div>
                 </div>
                 <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-[#6E7495] italic">Credentials are held in memory for this session only and processed via secure Server Actions.</p>
                    <Button onClick={() => setCreds({...creds, showGate: false})} className="bg-[#E8A33D] text-[#0F1428] font-bold h-12 px-10 rounded-none shadow-lg">
                      Confirm & Initialize Session
                    </Button>
                 </div>
              </Card>
            )}

            {/* SEARCH COMPONENT */}
            <Card className="bg-[#171D3A] border-white/10 p-1 rounded-none shadow-3xl overflow-hidden">
              <form onSubmit={handleSearch} className="bg-[#1E2650] p-8 md:p-10 rounded-none grid grid-cols-1 md:grid-cols-4 gap-8 items-end text-left">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Destination Region</Label>
                    {searchParams.categoryId && (
                        <span className="text-[8px] font-mono text-[#E8A33D] truncate max-w-[100px] font-bold">ID: {searchParams.categoryId.slice(0,8)}...</span>
                    )}
                  </div>
                  <select 
                    disabled={!isSessionActive || isConnecting}
                    value={searchParams.categoryId}
                    onChange={e => setSearchParams({...searchParams, categoryId: e.target.value})}
                    className={cn(
                      "w-full h-14 px-4 bg-[#0F1428] border border-white/10 rounded-none outline-none transition-all text-sm font-medium",
                      !isSessionActive ? "opacity-50 cursor-not-allowed" : "focus:ring-2 focus:ring-[#E8A33D]"
                    )}
                  >
                    {!isSessionActive ? (
                      <option>Connect UAT to load...</option>
                    ) : isConnecting ? (
                      <option>Syncing regions...</option>
                    ) : (
                      <>
                        <option value="">Select Region</option>
                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </>
                    )}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Traveler Age</Label>
                  <Input 
                    type="number" 
                    value={searchParams.age}
                    onChange={e => setSearchParams({...searchParams, age: e.target.value})}
                    className="h-14 bg-[#0F1428] border-white/10 rounded-none font-bold text-center"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Duration (Days)</Label>
                  <Input 
                    type="number" 
                    value={searchParams.duration}
                    onChange={e => setSearchParams({...searchParams, duration: e.target.value})}
                    className="h-14 bg-[#0F1428] border-white/10 rounded-none font-bold text-center"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading || !isSessionActive || !searchParams.categoryId} 
                  className="h-14 bg-[#E8A33D] text-[#0F1428] font-bold rounded-none shadow-xl hover:bg-white transition-all active:scale-95 disabled:opacity-40"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Search className="w-4 h-4 mr-2" /> Search Selling Plans</>}
                </Button>
              </form>
            </Card>

            {/* RESULTS VIEW */}
            <div className="space-y-12">
               {/* 1. FORENSIC TRACE PANEL */}
               {showTrace && lastTrace && (
                 <Card className="bg-[#0B0F22] border-[#4FD1C5]/40 p-8 rounded-none text-left font-mono text-[11px] animate-in fade-in slide-in-from-top-4 duration-500 ring-1 ring-[#4FD1C5]/20">
                    <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#4FD1C5]">Forensic_Trace_v4.log</span>
                        <div className="flex gap-4">
                            <span className={cn("font-bold", lastTrace.success ? "text-green-500" : "text-red-500")}>STATUS: {lastTrace.success ? "200_OK" : "FAILURE"}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                           <div className="space-y-1">
                                <p className="text-[#6E7495] uppercase font-bold">Materialized Endpoint</p>
                                <p className="text-white break-all bg-white/5 p-2">{lastTrace.endpoint}</p>
                           </div>
                           <div className="space-y-1">
                                <p className="text-[#6E7495] uppercase font-bold">Headers Dispatched (Masked)</p>
                                <pre className="text-white/60 bg-white/5 p-2">{JSON.stringify(lastTrace.headersSent, null, 2)}</pre>
                           </div>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[#6E7495] uppercase font-bold">Raw Response Payload</p>
                           <pre className="text-white/80 bg-white/5 p-2 max-h-[400px] overflow-auto custom-scrollbar">
                             {JSON.stringify(lastTrace.data, null, 2)}
                           </pre>
                        </div>
                    </div>
                 </Card>
               )}

               {isLoading && (
                 <div className="py-32 text-center space-y-6">
                    <Activity className="w-12 h-12 animate-spin text-[#E8A33D] mx-auto opacity-40" />
                    <div className="space-y-2">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-[#E8A33D]">Interrogating Dolphin UAT...</p>
                        <p className="text-xs text-[#6E7495] italic">Retrieving ICICI Lombard sell-sheets for current parameters.</p>
                    </div>
                 </div>
               )}

               {!isLoading && plans.length > 0 && (
                 <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-4 text-left">
                       <h2 className="text-3xl font-headline font-bold">Insurance Catalogue</h2>
                       <div className="flex items-center gap-4">
                            <Badge variant="outline" className="text-[9px] font-bold border-white/10 text-white/40">{plans.length} PRODUCTS FOUND</Badge>
                            <span className="text-[10px] font-mono text-[#4FD1C5] font-bold uppercase tracking-widest">LIVE DATA ACTIVE</span>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {plans.map((plan) => {
                         const detail = plan.sellingPlanDetailsList?.[0];
                         const isSelected = selectedPlan?.detailId === detail?.detailId;

                         return (
                           <Card 
                             key={plan.planId} 
                             className={cn(
                               "bg-[#171D3A] border-white/10 rounded-none overflow-hidden transition-all duration-300 text-left flex flex-col h-full",
                               isSelected ? "ring-2 ring-[#4FD1C5] border-transparent shadow-[0_40px_80px_-20px_rgba(79,209,197,0.2)]" : "hover:border-white/20 hover:shadow-xl"
                             )}
                           >
                              <div className="p-8 border-b border-white/5 flex justify-between items-start shrink-0">
                                 <div className="space-y-1">
                                    <h3 className="font-bold text-xl leading-tight">{plan.planName}</h3>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">{plan.insurerName}</p>
                                 </div>
                                 {isSelected && <div className="w-6 h-6 bg-[#4FD1C5] rounded-full flex items-center justify-center"><Check className="w-4 h-4 text-[#0F1428]" /></div>}
                              </div>
                              <div className="p-8 space-y-8 flex-grow flex flex-col justify-between">
                                 <div className="p-6 bg-white/5 rounded-none space-y-3 border border-white/5">
                                    <div className="flex justify-between items-baseline">
                                       <span className="text-[10px] font-bold uppercase text-[#6E7495] tracking-widest">Premium Total</span>
                                       <span className="text-3xl font-bold text-white font-headline">₹{detail?.total}</span>
                                    </div>
                                    <div className="flex justify-between text-[9px] text-[#6E7495] uppercase font-bold tracking-widest pt-3 border-t border-white/5">
                                       <span>Base: ₹{detail?.basicRates}</span>
                                       <span>GST: ₹{detail?.gst}</span>
                                    </div>
                                 </div>
                                 <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm font-medium text-[#9AA1C0]">
                                       <Activity className="w-4 h-4 text-[#E8A33D]" />
                                       <span>Benefit Limit: {detail?.sumInsured || 'Standard'}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-[#9AA1C0]">
                                       <Clock className="w-4 h-4 text-[#E8A33D]" />
                                       <span>{detail?.minDays}-{detail?.maxDays} Days Eligibility</span>
                                    </div>
                                 </div>
                                 <Button 
                                   onClick={() => {
                                      setSelectedPlan({ 
                                        planId: plan.planId, 
                                        detailId: detail?.detailId, 
                                        name: plan.planName,
                                        total: detail?.total
                                      });
                                      toast({ title: "Plan Selected", description: plan.planName });
                                   }}
                                   className={cn(
                                     "w-full h-14 font-bold uppercase tracking-[0.2em] text-[10px] rounded-none",
                                     isSelected ? "bg-[#4FD1C5] text-[#0F1428]" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                   )}
                                 >
                                   {isSelected ? "Plan Selected" : "Choose Plan"}
                                 </Button>
                              </div>
                           </Card>
                         );
                       })}
                    </div>
                 </div>
               )}

               {!isLoading && plans.length === 0 && (
                 <div className="py-32 text-center space-y-10 border-2 border-dashed border-white/5 rounded-none bg-white/[0.01]">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto ring-1 ring-white/10">
                       {hasSearched ? <AlertCircle className="w-10 h-10 text-[#E8A33D] opacity-40" /> : <Globe className="w-10 h-10 text-[#6E7495] opacity-20" />}
                    </div>
                    <div className="space-y-3">
                       <h3 className="text-2xl font-headline font-bold text-[#6E7495]">
                         {hasSearched ? "No matching plans found." : "No plans discovered yet."}
                       </h3>
                       <p className="text-[#6E7495] max-w-sm mx-auto font-medium leading-relaxed">
                         {hasSearched 
                           ? "The current trip parameters returned no results from the UAT catalogue. Try a different duration or traveler age." 
                           : "Connect your UAT Session and enter trip parameters to interrogate the ICICI Lombard catalogue."}
                       </p>
                    </div>
                    <div className="flex gap-4 justify-center">
                       <Button onClick={() => setCreds({...creds, showGate: true})} variant="outline" className="font-bold border-white/10 h-12 px-10 rounded-none uppercase text-[10px] tracking-widest">
                         {isSessionActive ? "Update UAT Session" : "Connect UAT Session"}
                       </Button>
                       {isSessionActive && (
                         <Button onClick={fetchCategories} disabled={isConnecting} variant="ghost" className="text-primary font-bold uppercase text-[10px] tracking-widest h-12">
                            {isConnecting ? <Loader2 className="w-4 h-4 animate-spin" /> : <><RefreshCw className="w-4 h-4 mr-2" /> Sync Regions</>}
                         </Button>
                       )}
                    </div>
                 </div>
               )}
            </div>

            {/* SELECTION SUMMARY FLOATER */}
            {selectedPlan && (
              <div className="p-10 bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 rounded-none flex flex-col md:flex-row items-center justify-between gap-8 animate-in slide-in-from-bottom-12 duration-700 shadow-3xl ring-1 ring-[#4FD1C5]/20">
                 <div className="flex items-center gap-8 text-left">
                    <div className="w-20 h-20 bg-[#4FD1C5]/20 rounded-none flex items-center justify-center text-[#4FD1C5] shadow-inner border border-[#4FD1C5]/30">
                       <Plane className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4FD1C5]">READY FOR VALIDATION</p>
                       <h4 className="text-3xl font-bold font-headline leading-none">{selectedPlan.name}</h4>
                       <div className="flex flex-wrap items-center gap-6 pt-1">
                          <div className="flex flex-col">
                             <span className="text-[8px] font-bold text-[#6E7495] uppercase tracking-widest">Plan Identifier</span>
                             <span className="font-mono text-xs text-white/60">{selectedPlan.planId}</span>
                          </div>
                          <div className="flex flex-col">
                             <span className="text-[8px] font-bold text-[#6E7495] uppercase tracking-widest">Detail Identifier</span>
                             <span className="font-mono text-xs text-white/60">{selectedPlan.detailId}</span>
                          </div>
                          <div className="flex flex-col">
                             <span className="text-[8px] font-bold text-[#6E7495] uppercase tracking-widest">UAT Premium</span>
                             <span className="font-bold text-white">₹{selectedPlan.total}</span>
                          </div>
                       </div>
                    </div>
                 </div>
                 <Button onClick={() => window.open('https://client.crisp.chat/l.js', '_blank')} className="bg-white text-[#0F1428] hover:bg-[#F4F1E8] font-bold h-14 px-12 rounded-none uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all hover:scale-105 active:scale-95">
                    Verify Policy <ChevronRight className="w-4 h-4 ml-2" />
                 </Button>
              </div>
            )}

            {/* VALUE PROPOSITION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
               <Card className="bg-[#171D3A] border-white/10 p-12 rounded-none space-y-10 text-left border-l-4 border-l-[#E8A33D]">
                  <div className="space-y-6">
                     <div className="w-16 h-16 bg-[#E8A33D]/10 rounded-none flex items-center justify-center text-[#E8A33D] ring-1 ring-[#E8A33D]/30">
                        <Landmark className="w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-headline font-bold">Source Awareness</h3>
                     <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                        We don't just calculate risk. We reconcile it against official government notices, regional observances, and institutional schedules.
                     </p>
                  </div>
               </Card>

               <Card className="bg-[#171D3A] border-white/10 p-12 rounded-none space-y-10 text-left border-l-4 border-l-[#4FD1C5]">
                  <div className="space-y-6">
                     <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-none flex items-center justify-center text-[#4FD1C5] ring-1 ring-[#4FD1C5]/30">
                        <ShieldCheck className="w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-headline font-bold">Verified Coverage</h3>
                     <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                        UAT-verified integration ensures that your policy aligns with your actual travel dates and local jurisdictional rules.
                     </p>
                  </div>
               </Card>
            </div>

            {/* REGULATORY DISCLOSURE */}
            <div className="pt-20 border-t border-white/10 space-y-10 text-left">
              <div className="flex items-center gap-4">
                 <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6E7495] font-bold">Regulatory Disclosure</span>
                 <div className="h-px flex-1 bg-white/5"></div>
              </div>
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16">
                <div className="space-y-6 text-[11px] text-[#6E7495] leading-relaxed font-medium uppercase tracking-wider">
                  <p>Assistance services are facilitated by Asego Global Assistance Private Limited. Insurance is underwritten by an IRDAI authorised underwriter and is a subject matter of solicitation.</p>
                  <p>The content expressed in this platform is for information purposes only. Insurance underwritten by ICICI Lombard General Insurance Company Ltd or International Medical Group Inc. (IMG).</p>
                </div>
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-none flex flex-col justify-between gap-6">
                   <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        isSessionActive ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                      )}></div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                        {isSessionActive ? "UAT Discovery Session active" : "UAT Connection Pending"}
                      </span>
                   </div>
                   <button onClick={() => setCreds({...creds, showGate: true})} className="text-[10px] font-bold text-[#E8A33D] uppercase tracking-[0.2em] hover:underline text-left">
                      {isSessionActive ? "UPDATE UAT CREDENTIALS →" : "ENTER UAT CREDENTIALS →"}
                   </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
