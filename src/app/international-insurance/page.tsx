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
  MessageSquare,
  School,
  Activity,
  HeartPulse,
  Search,
  Loader2,
  Check,
  Plane,
  ChevronRight,
  Lock,
  Key,
  Info
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
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  // 3. INITIALIZATION
  useEffect(() => {
    if (creds.partnerId && creds.sign && creds.reference) {
      fetchCategories();
    }
  }, [creds.partnerId]);

  const fetchCategories = async () => {
    try {
      const data = await getAsegoCategories(creds);
      setCategories(Array.isArray(data) ? data : []);
    } catch (e) {
      toast({ title: "Connection Failed", description: "Check UAT credentials.", variant: "destructive" });
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!creds.partnerId) {
      setCreds(prev => ({ ...prev, showGate: true }));
      return;
    }
    if (!searchParams.categoryId) {
        return toast({ title: "Selection Required", description: "Please select a destination category." });
    }

    setIsLoading(true);
    try {
      const res = await getAsegoPlans(creds, searchParams);
      setPlans(res?.sellingPlanDto || []);
      if (!res?.sellingPlanDto?.length) {
        toast({ title: "No Plans Found", description: "Try adjusting age or duration." });
      }
    } catch (e) {
      toast({ title: "Search Error", description: "Unable to retrieve UAT plans.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
    }
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-8 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
            
            {/* HERO */}
            <div className="text-center space-y-4 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full mb-4">
                 <ShieldCheck className="w-3 h-3 text-[#4FD1C5]" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Verified UAT Environment</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-medium leading-[1.1] tracking-tight">
                Plan for what you can predict. <br/>
                <span className="italic text-[#9AA1C0]">Protect against what you can't.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#F4F1E8]/90 leading-relaxed font-medium">
                Real-time international coverage powered by Asego Dolphin UAT.
              </p>
            </div>

            {/* UAT CREDENTIAL GATE (Phase 4 Utility) */}
            {creds.showGate && (
              <Card className="bg-[#171D3A] border-dashed border-[#E8A33D]/40 p-8 rounded-3xl animate-in fade-in zoom-in-95 text-left">
                 <div className="flex items-center gap-3 mb-6">
                    <Lock className="w-5 h-5 text-[#E8A33D]" />
                    <h3 className="text-xl font-bold font-headline">UAT Session Activation</h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Partner ID</Label>
                       <Input 
                         value={creds.partnerId} 
                         onChange={e => setCreds({...creds, partnerId: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-11" 
                         placeholder="Paste Partner ID"
                       />
                    </div>
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Sign Header</Label>
                       <Input 
                         type="password"
                         value={creds.sign} 
                         onChange={e => setCreds({...creds, sign: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-11" 
                         placeholder="Paste Sign"
                       />
                    </div>
                    <div className="space-y-1.5">
                       <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Reference Header</Label>
                       <Input 
                         type="password"
                         value={creds.reference} 
                         onChange={e => setCreds({...creds, reference: e.target.value})}
                         className="bg-[#0F1428] border-white/10 h-11" 
                         placeholder="Paste Reference"
                       />
                    </div>
                 </div>
                 <Button onClick={() => setCreds({...creds, showGate: false})} className="bg-[#E8A33D] text-[#0F1428] font-bold h-11 px-8 rounded-xl">
                   Connect Session
                 </Button>
              </Card>
            )}

            {/* SEARCH FORM */}
            <Card className="bg-[#171D3A] border-white/10 p-1 rounded-[32px] overflow-hidden shadow-2xl">
              <form onSubmit={handleSearch} className="bg-[#1E2650] p-8 md:p-10 rounded-[28px] grid grid-cols-1 md:grid-cols-4 gap-6 items-end text-left">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Where are you going?</Label>
                  <select 
                    value={searchParams.categoryId}
                    onChange={e => setSearchParams({...searchParams, categoryId: e.target.value})}
                    className="w-full h-12 px-4 bg-[#0F1428] border border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-[#E8A33D] transition-all"
                  >
                    <option value="">{categories.length ? "Select Region" : "Connect UAT to Load"}</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Traveler Age</Label>
                  <Input 
                    type="number" 
                    value={searchParams.age}
                    onChange={e => setSearchParams({...searchParams, age: e.target.value})}
                    className="h-12 bg-[#0F1428] border-white/10 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Duration (Days)</Label>
                  <Input 
                    type="number" 
                    value={searchParams.duration}
                    onChange={e => setSearchParams({...searchParams, duration: e.target.value})}
                    className="h-12 bg-[#0F1428] border-white/10 rounded-xl"
                  />
                </div>
                <Button type="submit" disabled={isLoading} className="h-12 bg-[#E8A33D] text-[#0F1428] font-bold rounded-xl shadow-xl hover:bg-white transition-all">
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Search className="w-4 h-4 mr-2" /> Find Plans</>}
                </Button>
              </form>
            </Card>

            {/* RESULTS SECTION */}
            {plans.length > 0 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex justify-between items-baseline border-b border-white/5 pb-4 text-left">
                  <h2 className="text-2xl font-headline font-bold">Available Plans</h2>
                  <p className="text-sm text-[#9AA1C0]">Showing {plans.length} results for Age {searchParams.age}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {plans.map((plan) => {
                    const detail = plan.sellingPlanDetailsList?.[0];
                    const isSelected = selectedPlan?.detailId === detail?.detailId;
                    
                    return (
                      <Card 
                        key={plan.planId} 
                        className={cn(
                          "bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden transition-all text-left",
                          isSelected ? "ring-2 ring-[#4FD1C5] border-transparent shadow-[0_0_30px_rgba(79,209,197,0.15)]" : "hover:border-white/20"
                        )}
                      >
                        <div className="p-6 border-b border-white/5 flex justify-between items-start">
                           <div className="space-y-1">
                              <h3 className="font-bold text-lg leading-tight">{plan.planName}</h3>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">{plan.insurerName}</p>
                           </div>
                           {isSelected && <div className="w-6 h-6 bg-[#4FD1C5] rounded-full flex items-center justify-center"><Check className="w-4 h-4 text-[#0F1428]" /></div>}
                        </div>
                        <div className="p-6 space-y-6">
                           <div className="p-5 bg-white/5 rounded-2xl space-y-2">
                              <div className="flex justify-between items-baseline">
                                 <span className="text-[10px] font-bold uppercase text-[#6E7495]">Premium Total</span>
                                 <span className="text-2xl font-bold text-white">₹{detail?.total}</span>
                              </div>
                              <div className="flex justify-between text-[9px] text-[#6E7495] uppercase font-bold">
                                 <span>Base: ₹{detail?.basicRates}</span>
                                 <span>GST: ₹{detail?.gst}</span>
                              </div>
                           </div>
                           <div className="space-y-3">
                              <div className="flex items-center gap-2 text-xs font-medium text-[#9AA1C0]">
                                 <Activity className="w-3.5 h-3.5 text-[#E8A33D]" />
                                 <span>Coverage Limit: {detail?.sumInsured || 'Standard'}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs font-medium text-[#9AA1C0]">
                                 <Activity className="w-3.5 h-3.5 text-[#E8A33D]" />
                                 <span>Duration: {detail?.minDays}-{detail?.maxDays} Days</span>
                              </div>
                           </div>
                           <Button 
                             onClick={() => {
                               setSelectedPlan({ planId: plan.planId, detailId: detail?.detailId, name: plan.planName });
                               toast({ title: "Plan Selected", description: plan.planName });
                             }}
                             className={cn(
                               "w-full h-11 font-bold uppercase tracking-widest text-[10px] rounded-xl",
                               isSelected ? "bg-[#4FD1C5] text-[#0F1428]" : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                             )}
                           >
                             {isSelected ? "Selected" : "Select Plan"}
                           </Button>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SELECTION SUMMARY */}
            {selectedPlan && (
              <div className="p-8 bg-[#4FD1C5]/5 border border-[#4FD1C5]/20 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-8 animate-in slide-in-from-bottom-8">
                 <div className="flex items-center gap-6 text-left">
                    <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center text-[#4FD1C5]">
                       <Plane className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Ready for validation</p>
                       <h4 className="text-xl font-bold">{selectedPlan.name}</h4>
                       <p className="font-mono text-[10px] text-[#6E7495]">ID: {selectedPlan.planId} · REF: {selectedPlan.detailId}</p>
                    </div>
                 </div>
                 <Button onClick={openChat} className="bg-white text-[#0F1428] hover:bg-[#F4F1E8] font-bold h-12 px-10 rounded-full uppercase tracking-widest text-xs">
                    Confirm & Next <ChevronRight className="w-4 h-4 ml-2" />
                 </Button>
              </div>
            )}

            {/* PRODUCT CATEGORIES (Static Reference) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <Card className="bg-[#171D3A] border-white/10 p-10 rounded-[32px] space-y-8 text-left">
                  <div className="space-y-4">
                     <div className="w-14 h-14 bg-[#E8A33D]/10 rounded-2xl flex items-center justify-center text-[#E8A33D]">
                        <School className="w-7 h-7" />
                     </div>
                     <h3 className="text-3xl font-headline font-bold">Student Journey</h3>
                     <p className="text-[#9AA1C0] leading-relaxed font-medium">
                        Specialized coverage meeting leading university and visa requirements for F1, J1, and M1 students. 
                     </p>
                  </div>
               </Card>

               <Card className="bg-[#171D3A] border-white/10 p-10 rounded-[32px] space-y-8 text-left">
                  <div className="space-y-4">
                     <div className="w-14 h-14 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center text-[#4FD1C5]">
                        <Landmark className="w-7 h-7" />
                     </div>
                     <h3 className="text-3xl font-headline font-bold">Corporate Risk</h3>
                     <p className="text-[#9AA1C0] leading-relaxed font-medium">
                        Enterprise-grade protection for global workforces with deterministic holiday intelligence.
                     </p>
                  </div>
               </Card>
            </div>

            {/* REGULATORY DISCLOSURE */}
            <div className="pt-8 border-t border-white/10 space-y-4 text-left">
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6E7495]">
                Regulatory Disclosure
              </span>
              <div className="space-y-4 text-[10px] text-[#9AA1C0] leading-relaxed normal-case tracking-normal">
                <div className="space-y-1">
                  <p>Assistance services are facilitated by Asego Global Assistance Private Limited.</p>
                  <p>Insurance is underwritten by an IRDAI authorised underwriter and is a subject matter of solicitation.</p>
                </div>
                <p>The content expressed in this platform is for information purposes only. Assistance provided by Asego Travel LLP. Insurance underwritten by ICICI Lombard General Insurance Company Ltd or International Medical Group Inc. (IMG).</p>
                <div className="h-px bg-white/10 w-full" />
                <div className="flex justify-between items-center">
                   <p className="italic text-[#6E7495]">Session Mode: UAT Discovery</p>
                   {!creds.partnerId && (
                     <Button variant="ghost" onClick={() => setCreds({...creds, showGate: true})} className="text-[9px] uppercase font-bold h-6 text-[#E8A33D] hover:text-white">
                        Enter UAT Credentials
                     </Button>
                   )}
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
