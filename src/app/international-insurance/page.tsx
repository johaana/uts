
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
  Activity, 
  Search, 
  Loader2, 
  Check, 
  Plane, 
  ChevronRight, 
  Lock,
  Globe,
  AlertCircle,
  Terminal,
  Eye,
  EyeOff
} from "lucide-react";
import { getAsegoCategories, getAsegoPlans, getAsegoPlanDetails, NormalizedPlan } from './actions';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function InternationalInsurancePage() {
  const { toast } = useToast();
  
  // 1. SESSION STATE
  const [creds, setCreds] = useState({
    partnerId: '',
    sign: '',
    reference: '',
    showGate: false
  });
  const [showSecrets, setShowSecrets] = useState(false);

  // 2. SEARCH & DATA STATE
  const [searchParams, setSearchParams] = useState({
    age: '25',
    duration: '30',
    categoryId: ''
  });
  const [categories, setCategories] = useState<any[]>([]);
  const [plans, setPlans] = useState<NormalizedPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [hydratingPlanId, setHydratingPlanId] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<NormalizedPlan | null>(null);
  
  // 3. DIAGNOSTICS
  const [showTrace, setShowTrace] = useState(false);
  const [lastTrace, setLastTrace] = useState<any>(null);

  const isSessionActive = !!(creds.partnerId.trim() && creds.sign.trim() && creds.reference.trim());

  // Connection logic
  useEffect(() => {
    if (isSessionActive) {
      fetchCategories();
    }
  }, [creds.partnerId, creds.sign, creds.reference]);

  const fetchCategories = async () => {
    setIsConnecting(true);
    try {
      const res = await getAsegoCategories(creds);
      if (res.success && Array.isArray(res.data)) {
        setCategories(res.data);
        toast({ title: "Regions Synced", description: `Discovered ${res.data.length} UAT destinations.` });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSessionActive) {
      setCreds(prev => ({ ...prev, showGate: true }));
      return;
    }

    setIsLoading(true);
    setHasSearched(true);
    setPlans([]);
    setSelectedPlan(null);

    try {
      const res = await getAsegoPlans(creds, searchParams);
      setLastTrace(res);
      
      if (res.success && Array.isArray(res.data)) {
        setPlans(res.data);
      } else {
        toast({ title: "API Failure", description: res.error || "UAT result empty", variant: "destructive" });
      }
    } catch (e) {
      toast({ title: "Search Error", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectPlan = async (plan: NormalizedPlan) => {
    setHydratingPlanId(plan.planId);
    try {
      const res = await getAsegoPlanDetails(creds, plan.planId);
      if (res.success && res.data) {
        const hydrated = res.data;
        setSelectedPlan(prev => {
          if (!prev) return hydrated;
          return {
            ...prev,
            ...Object.fromEntries(
              Object.entries(hydrated).filter(([, v]) => v !== undefined && v !== null)
            ),
          };
        });
        toast({ title: "Plan Ready", description: "Detail identifier resolved successfully." });
      } else {
        setSelectedPlan(plan);
        toast({ title: "Partial Selection", description: "Using base parameters (Detail ID pending)." });
      }
    } catch (e) {
      toast({ title: "Selection Error", variant: "destructive" });
    } finally {
      setHydratingPlanId(null);
    }
  };

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
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Dolphin UAT Environment</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-headline font-medium leading-[1.05] tracking-tighter">
                        Plan the occasion.<br/>
                        <span className="italic text-[#9AA1C0]">Protect the impact.</span>
                    </h1>
                    <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium max-w-2xl">
                        Real-time travel protection powered by Asego. 
                        Reconciling global dates with comprehensive institutional coverage.
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
                        <span className="text-[9px] font-bold uppercase tracking-widest">{isSessionActive ? "UAT Active" : "UAT Disconnected"}</span>
                    </div>
                </div>
            </div>

            {/* UAT CREDENTIAL GATE */}
            {creds.showGate && (
              <Card className="bg-[#171D3A] border-dashed border-[#E8A33D]/40 p-8 rounded-none shadow-2xl animate-in fade-in zoom-in-95 text-left ring-1 ring-[#E8A33D]/20">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <Lock className="w-5 h-5 text-[#E8A33D]" />
                       <h3 className="text-xl font-bold font-headline">Session Activation</h3>
                    </div>
                    <button onClick={() => setShowSecrets(!showSecrets)} className="text-[#6E7495] hover:text-white transition-colors">
                        {showSecrets ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Partner ID</Label>
                       <Input 
                         value={creds.partnerId} 
                         onChange={e => setCreds({...creds, partnerId: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-12 rounded-none font-mono" 
                       />
                    </div>
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Sign</Label>
                       <Input 
                         type={showSecrets ? "text" : "password"}
                         value={creds.sign} 
                         onChange={e => setCreds({...creds, sign: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-12 rounded-none" 
                       />
                    </div>
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Reference</Label>
                       <Input 
                         type={showSecrets ? "text" : "password"}
                         value={creds.reference} 
                         onChange={e => setCreds({...creds, reference: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-12 rounded-none" 
                       />
                    </div>
                 </div>
                 <Button onClick={() => setCreds({...creds, showGate: false})} className="w-full bg-[#E8A33D] text-[#0F1428] font-bold h-12 rounded-none">
                    Update UAT Session
                 </Button>
              </Card>
            )}

            {/* SEARCH FORM */}
            <Card className="bg-[#171D3A] border-white/10 p-1 rounded-none shadow-3xl">
              <form onSubmit={handleSearch} className="bg-[#1E2650] p-8 md:p-10 rounded-none grid grid-cols-1 md:grid-cols-4 gap-8 items-end text-left">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Destination</Label>
                  </div>
                  <select 
                    disabled={!isSessionActive || isConnecting}
                    value={searchParams.categoryId}
                    onChange={e => setSearchParams({...searchParams, categoryId: e.target.value})}
                    className="w-full h-14 px-4 bg-[#0F1428] border border-white/10 rounded-none outline-none transition-all text-sm font-medium"
                  >
                    {!isSessionActive ? (
                      <option>Connect UAT...</option>
                    ) : isConnecting ? (
                      <option>Loading...</option>
                    ) : (
                      <>
                        <option value="">Select Region</option>
                        {categories.map(c => <option key={c.id || c.name} value={c.id}>{c.name}</option>)}
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
                  className="h-14 bg-[#E8A33D] text-[#0F1428] font-bold rounded-none shadow-xl hover:bg-white transition-all disabled:opacity-40"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Search className="w-4 h-4 mr-2" /> Search Plans</>}
                </Button>
              </form>
            </Card>

            {/* RESULTS VIEW */}
            <div className="space-y-12">
               {showTrace && lastTrace && (
                 <Card className="bg-[#0B0F22] border-[#4FD1C5]/40 p-8 rounded-none text-left font-mono text-[11px] animate-in fade-in slide-in-from-top-4 ring-1 ring-[#4FD1C5]/20">
                    <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#4FD1C5]">Forensic_Trace_v4.5.log</span>
                        <span className={cn("font-bold", lastTrace.success ? "text-green-500" : "text-red-500")}>STATUS: {lastTrace.success ? "200_OK" : "FAILURE"}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                           <div className="space-y-1">
                                <p className="text-[#6E7495] uppercase font-bold">Materialized Endpoint</p>
                                <p className="text-white break-all bg-white/5 p-2">{lastTrace.endpoint}</p>
                           </div>
                           <div className="space-y-1">
                                <p className="text-[#6E7495] uppercase font-bold">Top Level Keys Found</p>
                                <p className="text-white bg-white/5 p-2">{Object.keys(lastTrace.data || {}).join(', ')}</p>
                           </div>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[#6E7495] uppercase font-bold">Normalized Model View</p>
                           <pre className="text-[#4FD1C5] bg-white/5 p-2 overflow-auto max-h-[300px] custom-scrollbar">
                             {JSON.stringify(plans, null, 2)}
                           </pre>
                        </div>
                    </div>
                 </Card>
               )}

               {isLoading && (
                 <div className="py-32 text-center space-y-6">
                    <Activity className="w-12 h-12 animate-spin text-[#E8A33D] mx-auto opacity-40" />
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-[#E8A33D]">Interrogating UAT Catalogue...</p>
                 </div>
               )}

               {!isLoading && plans.length > 0 && (
                 <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-4 text-left">
                       <h2 className="text-3xl font-headline font-bold">Insurance Catalogue</h2>
                       <Badge variant="outline" className="text-[9px] font-bold border-white/10 text-white/40">{plans.length} PRODUCTS DISCOVERED</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {plans.map((plan, index) => {
                         const isSelected = selectedPlan?.planId === plan.planId;
                         const isHydrating = hydratingPlanId === plan.planId;

                         return (
                           <Card 
                             key={`${plan.planId}-${index}`} 
                             className={cn(
                               "bg-[#171D3A] border-white/10 rounded-none transition-all flex flex-col h-full",
                               isSelected ? "ring-2 ring-[#4FD1C5] border-transparent" : "hover:border-white/20"
                             )}
                           >
                              <div className="p-8 border-b border-white/5 flex justify-between items-start shrink-0">
                                 <div className="space-y-1">
                                    <h3 className="font-bold text-xl leading-tight">{plan.name ?? "—"}</h3>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">{plan.insurer}</p>
                                 </div>
                              </div>
                              <div className="p-8 space-y-8 flex-grow flex flex-col justify-between">
                                 <div className="p-6 bg-white/5 rounded-none space-y-3">
                                    <div className="flex justify-between items-baseline">
                                       <span className="text-[10px] font-bold uppercase text-[#6E7495] tracking-widest">Premium Total</span>
                                       <span className="text-3xl font-bold text-white font-headline">₹{plan.premium ?? '—'}</span>
                                    </div>
                                    <p className="text-[9px] text-[#6E7495] uppercase font-bold tracking-widest">{plan.currency}</p>
                                 </div>
                                 <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-[#9AA1C0]">
                                       <Activity className="w-3.5 h-3.5 text-[#E8A33D]" />
                                       <span>Age: {plan.minAge}-{plan.maxAge}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-[#9AA1C0]">
                                       <ChevronRight className="w-3.5 h-3.5 text-[#E8A33D]" />
                                       <span>Duration: {plan.minDays}-{plan.maxDays} Days</span>
                                    </div>
                                 </div>
                                 <Button 
                                   disabled={!!hydratingPlanId}
                                   onClick={() => handleSelectPlan(plan)}
                                   className={cn(
                                     "w-full h-14 font-bold uppercase tracking-[0.2em] text-[10px] rounded-none transition-all",
                                     isSelected ? "bg-[#4FD1C5] text-[#0F1428]" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                   )}
                                 >
                                   {isSelected ? "Plan Selected" : isHydrating ? <Loader2 className="w-4 h-4 animate-spin" /> : "Choose Plan"}
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
                         {hasSearched ? "No matching plans found." : "Discovery Passive"}
                       </h3>
                       <p className="text-[#6E7495] max-sm mx-auto font-medium leading-relaxed">
                         {hasSearched 
                           ? "The current trip parameters returned an empty result in UAT. Try a different duration or age." 
                           : "Connect your UAT Session and enter trip parameters to interrogate the catalogue."}
                       </p>
                    </div>
                    <Button onClick={() => setCreds({...creds, showGate: true})} variant="outline" className="font-bold border-white/10 h-12 px-10 rounded-none uppercase text-[10px] tracking-widest">
                      {isSessionActive ? "Configure UAT Session" : "Connect UAT Session"}
                    </Button>
                 </div>
               )}
            </div>

            {/* SELECTION SUMMARY FLOATER */}
            {selectedPlan && (
              <div className="p-10 bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 rounded-none flex flex-col md:flex-row items-center justify-between gap-8 animate-in slide-in-from-bottom-12 duration-700 shadow-3xl ring-1 ring-[#4FD1C5]/20">
                 <div className="flex items-center gap-8 text-left">
                    <div className="w-20 h-20 bg-[#4FD1C5]/20 rounded-none flex items-center justify-center text-[#4FD1C5] border border-[#4FD1C5]/30">
                       <Plane className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4FD1C5]">TRANSACTION READY</p>
                       <h4 className="text-3xl font-bold font-headline leading-none">{selectedPlan.name ?? '—'}</h4>
                       <div className="flex flex-wrap items-center gap-6 pt-1">
                          <div className="flex flex-col">
                             <span className="text-[8px] font-bold text-[#6E7495] uppercase tracking-widest">Plan Identifier</span>
                             <span className="font-mono text-xs text-white/60">{selectedPlan.planId}</span>
                          </div>
                          <div className="flex flex-col">
                             <span className="text-[8px] font-bold text-[#6E7495] uppercase tracking-widest">Detail Identifier</span>
                             <span className={cn("font-mono text-xs", selectedPlan.detailId ? "text-white/80" : "text-amber-500")}>
                                {selectedPlan.detailId || 'PENDING_HYDRATION'}
                             </span>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="text-right space-y-2">
                    <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">UAT Estimated Total</p>
                    <p className="text-4xl font-bold font-headline">₹{selectedPlan.premium ?? '0'}</p>
                 </div>
              </div>
            )}

            {/* REGULATORY DISCLOSURE */}
            <div className="pt-8 mt-8 border-t border-white/10 space-y-4 text-left">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6E7495]">
                Regulatory Disclosure
              </span>
              <div className="space-y-4 text-[10px] text-[#9AA1C0] leading-relaxed normal-case tracking-normal">
                <div className="space-y-1">
                  <p>Assistance services are facilitated by Asego Global Assistance Private Limited.</p>
                  <p>Insurance is underwritten by an IRDAI authorised underwriter and is a subject matter of solicitation.</p>
                </div>
                <p>The content expressed in this platform is for information purposes only and it does not accept any liability of any sort unless confirmed by an authorized representative. All Insurance policies are sold under the Corporate Agency of Asego Global Assistance Private Limited bearing IRDAI registration no. Ca0776.</p>
                <div className="h-px bg-white/10 w-full" />
                <p className="italic text-[#9AA1C0] normal-case tracking-normal">Note: Assistance provided by Asego Travel LLP. Student Journey plans meet leading U.S. university and visa requirements for F1, J1, and M1 students. Insurance underwritten by an IRDAI authorised underwriter – ICICI Lombard General Insurance Company Ltd or International Medical Group Inc. (IMG).</p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
