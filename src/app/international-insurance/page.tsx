
'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  AlertCircle
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
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  // 3. INITIALIZATION
  // Watch all 3 credentials to trigger category fetch
  useEffect(() => {
    if (creds.partnerId && creds.sign && creds.reference) {
      fetchCategories();
    }
  }, [creds.partnerId, creds.sign, creds.reference]);

  const fetchCategories = async () => {
    setIsConnecting(true);
    try {
      const data = await getAsegoCategories(creds);
      const categoryList = Array.isArray(data) ? data : [];
      setCategories(categoryList);
      if (categoryList.length > 0) {
        toast({ title: "UAT Connected", description: `Discovered ${categoryList.length} destination categories.` });
      }
    } catch (e) {
      toast({ title: "Connection Failed", description: "Please check your UAT credentials.", variant: "destructive" });
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
    setPlans([]);
    try {
      const res = await getAsegoPlans(creds, searchParams);
      const foundPlans = res?.sellingPlanDto || [];
      setPlans(foundPlans);
      if (foundPlans.length === 0) {
        toast({ title: "No Plans Available", description: "Try adjusting the duration or age requirements." });
      }
    } catch (e) {
      toast({ title: "Search Error", description: "Unable to retrieve plans from Asego UAT.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
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
            <div className="text-left space-y-6 max-w-4xl">
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

            {/* UAT CREDENTIAL GATE */}
            {creds.showGate && (
              <Card className="bg-[#171D3A] border-dashed border-[#E8A33D]/40 p-8 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 text-left">
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
                         className="bg-[#0F1428] border-white/10 h-12 rounded-xl" 
                         placeholder="Enter UAT Partner ID"
                       />
                    </div>
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Sign (UAT Header)</Label>
                       <Input 
                         type="password"
                         value={creds.sign} 
                         onChange={e => setCreds({...creds, sign: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-12 rounded-xl" 
                         placeholder="Paste Sign Credential"
                       />
                    </div>
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Reference (UAT Header)</Label>
                       <Input 
                         type="password"
                         value={creds.reference} 
                         onChange={e => setCreds({...creds, reference: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-12 rounded-xl" 
                         placeholder="Paste Reference Credential"
                       />
                    </div>
                 </div>
                 <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-[#6E7495] italic">Credentials are held in memory for this session only and processed via secure Server Actions.</p>
                    <Button onClick={() => setCreds({...creds, showGate: false})} className="bg-[#E8A33D] text-[#0F1428] font-bold h-12 px-10 rounded-full shadow-lg">
                      Confirm & Initialize
                    </Button>
                 </div>
              </Card>
            )}

            {/* SEARCH COMPONENT */}
            <Card className="bg-[#171D3A] border-white/10 p-1 rounded-[40px] shadow-3xl overflow-hidden">
              <form onSubmit={handleSearch} className="bg-[#1E2650] p-10 rounded-[38px] grid grid-cols-1 md:grid-cols-4 gap-8 items-end text-left">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Destination Category</Label>
                  <select 
                    disabled={!isSessionActive}
                    value={searchParams.categoryId}
                    onChange={e => setSearchParams({...searchParams, categoryId: e.target.value})}
                    className={cn(
                      "w-full h-14 px-4 bg-[#0F1428] border border-white/10 rounded-2xl outline-none transition-all text-sm font-medium",
                      !isSessionActive ? "opacity-50 cursor-not-allowed" : "focus:ring-2 focus:ring-[#E8A33D]"
                    )}
                  >
                    {!isSessionActive ? (
                      <option>Connect UAT to load...</option>
                    ) : isConnecting ? (
                      <option>Fetching regions...</option>
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
                    className="h-14 bg-[#0F1428] border-white/10 rounded-2xl font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Trip Duration (Days)</Label>
                  <Input 
                    type="number" 
                    value={searchParams.duration}
                    onChange={e => setSearchParams({...searchParams, duration: e.target.value})}
                    className="h-14 bg-[#0F1428] border-white/10 rounded-2xl font-bold"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading || !isSessionActive} 
                  className="h-14 bg-[#E8A33D] text-[#0F1428] font-bold rounded-2xl shadow-xl hover:bg-white transition-all active:scale-95 disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Search className="w-4 h-4 mr-2" /> Search Plans</>}
                </Button>
              </form>
            </Card>

            {/* RESULTS VIEW */}
            <div className="space-y-12">
               {isLoading && (
                 <div className="py-24 text-center space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-[#E8A33D] mx-auto opacity-40" />
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-[#6E7495]">Querrying Dolphin UAT Catalogue...</p>
                 </div>
               )}

               {!isLoading && plans.length > 0 && (
                 <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="flex justify-between items-baseline border-b border-white/5 pb-4 text-left">
                       <h2 className="text-3xl font-headline font-bold">Insurance Catalogue</h2>
                       <p className="text-sm text-[#9AA1C0] font-medium">Found {plans.length} matching UAT products</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {plans.map((plan) => {
                         const detail = plan.sellingPlanDetailsList?.[0];
                         const isSelected = selectedPlan?.detailId === detail?.detailId;

                         return (
                           <Card 
                             key={plan.planId} 
                             className={cn(
                               "bg-[#171D3A] border-white/10 rounded-[32px] overflow-hidden transition-all duration-300 text-left flex flex-col h-full",
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
                                 <div className="p-6 bg-white/5 rounded-2xl space-y-3">
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
                                       <span>Limit: {detail?.sumInsured || 'Standard Coverage'}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-[#9AA1C0]">
                                       <Clock className="w-4 h-4 text-[#E8A33D]" />
                                       <span>{detail?.minDays}-{detail?.maxDays} Days Duration</span>
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
                                     "w-full h-14 font-bold uppercase tracking-[0.2em] text-[10px] rounded-2xl",
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
                 <div className="py-32 text-center space-y-8 border-2 border-dashed border-white/5 rounded-[48px] bg-white/[0.01]">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                       <Globe className="w-10 h-10 text-[#6E7495] opacity-20" />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-2xl font-headline font-bold text-[#6E7495]">No plans discovered yet.</h3>
                       <p className="text-[#6E7495] max-w-sm mx-auto font-medium">Enter your trip details and connect your UAT session to explore the insurance catalogue.</p>
                    </div>
                    <Button onClick={() => setCreds({...creds, showGate: true})} variant="outline" className="font-bold border-white/10 h-12 px-8 rounded-full">
                      {isSessionActive ? "Reset UAT Session" : "Connect UAT Session"}
                    </Button>
                 </div>
               )}
            </div>

            {/* SELECTION SUMMARY FLOATER */}
            {selectedPlan && (
              <div className="p-8 bg-[#4FD1C5]/10 border border-[#4FD1C5]/30 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 animate-in slide-in-from-bottom-12 duration-700 shadow-3xl">
                 <div className="flex items-center gap-8 text-left">
                    <div className="w-20 h-20 bg-[#4FD1C5]/20 rounded-3xl flex items-center justify-center text-[#4FD1C5] shadow-inner">
                       <Plane className="w-10 h-10" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4FD1C5]">Ready for validation</p>
                       <h4 className="text-2xl font-bold font-headline">{selectedPlan.name}</h4>
                       <div className="flex items-center gap-4 pt-1">
                          <span className="font-mono text-[10px] text-[#6E7495] uppercase tracking-widest font-bold">ID: {selectedPlan.planId}</span>
                          <div className="w-1 h-1 rounded-full bg-white/10"></div>
                          <span className="font-mono text-[10px] text-[#6E7495] uppercase tracking-widest font-bold">Total: ₹{selectedPlan.total}</span>
                       </div>
                    </div>
                 </div>
                 <Button onClick={openChat} className="bg-white text-[#0F1428] hover:bg-[#F4F1E8] font-bold h-14 px-12 rounded-full uppercase tracking-widest text-xs shadow-2xl transition-all hover:scale-105">
                    Verify & Continue <ChevronRight className="w-4 h-4 ml-2" />
                 </Button>
              </div>
            )}

            {/* VALUE PROPOSITION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <Card className="bg-[#171D3A] border-white/10 p-12 rounded-[40px] space-y-10 text-left">
                  <div className="space-y-6">
                     <div className="w-16 h-16 bg-[#E8A33D]/10 rounded-2xl flex items-center justify-center text-[#E8A33D]">
                        <Landmark className="w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-headline font-bold">Source Awareness</h3>
                     <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                        We don't just calculate risk. We reconcile it against official government notices, regional observances, and institutional schedules.
                     </p>
                  </div>
               </Card>

               <Card className="bg-[#171D3A] border-white/10 p-12 rounded-[40px] space-y-10 text-left">
                  <div className="space-y-6">
                     <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center text-[#4FD1C5]">
                        <ShieldCheck className="w-8 h-8" />
                     </div>
                     <h3 className="text-3xl font-headline font-bold">Verified Coverage</h3>
                     <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                        UAT-verified integration ensures that your policy aligns with your actual travel dates and local jurisdictional rules.
                     </p>
                  </div>
               </Card>
            </div>

            {/* FOOTER DISCLOSURE */}
            <div className="pt-12 border-t border-white/10 space-y-6 text-left">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6E7495] font-bold">
                Regulatory Disclosure
              </span>
              <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12">
                <div className="space-y-4 text-[11px] text-[#6E7495] leading-relaxed font-medium">
                  <p>Assistance services are facilitated by Asego Global Assistance Private Limited. Insurance is underwritten by an IRDAI authorised underwriter and is a subject matter of solicitation.</p>
                  <p>The content expressed in this platform is for information purposes only. Insurance underwritten by ICICI Lombard General Insurance Company Ltd or International Medical Group Inc. (IMG).</p>
                </div>
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-between gap-4">
                   <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        isSessionActive ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
                      )}></div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                        {isSessionActive ? "UAT Discovery Session active" : "UAT Connection Pending"}
                      </span>
                   </div>
                   <button onClick={() => setCreds({...creds, showGate: true})} className="text-[10px] font-bold text-[#E8A33D] uppercase tracking-widest hover:underline text-left">
                      {isSessionActive ? "Update UAT Credentials →" : "Enter UAT Credentials →"}
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
