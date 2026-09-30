'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ShieldCheck, 
  Search, 
  Loader2, 
  Plane, 
  Lock,
  Terminal,
  Eye,
  EyeOff,
  Zap,
  User,
  MapPin,
  Heart,
  Download,
  RefreshCw,
  AlertTriangle
} from "lucide-react";
import { 
  getAsegoCategories, 
  getAsegoPlans, 
  getAsegoPlanDetails, 
  validateAsegoPolicy,
  createAsegoPolicy,
  cancelAsegoPolicy,
  AsegoCredentials,
  NormalizedPlan 
} from '@/app/international-insurance/actions';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface InsuranceDashboardProps {
  isDebug: boolean;
}

type Step = 'search' | 'selection' | 'form' | 'success';

export function InsuranceDashboard({ isDebug }: InsuranceDashboardProps) {
  const { toast } = useToast();
  
  // 1. SESSION & NAVIGATION
  const [step, setStep] = useState<Step>('search');
  const [creds, setCreds] = useState<AsegoCredentials>({
    partnerId: '',
    sign: '',
    reference: '',
    secretKey: '',
    vectorBytes: ''
  });
  const [showGate, setShowGate] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);

  // 2. DATA STATE
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
  const [selectedPlan, setSelectedPlan] = useState<NormalizedPlan | null>(null);
  
  // 3. FORM STATE (For Whole Journey Testing)
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-01",
    gender: "Male",
    passportNo: "P1234567",
    email: "test@utsavs.com",
    mobile: "9999999999",
    address: "123 Test Street",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    nomineeName: "Jane Doe",
    nomineeRelation: "Spouse",
    departureDate: "2026-10-25",
    returnDate: "2026-11-24"
  });

  // 4. TRANSACTION STATE
  const [isValidating, setIsValidating] = useState(false);
  const [isIssuing, setIsIssuing] = useState(false);
  const [issuedPolicy, setIssuedPolicy] = useState<any>(null);
  const [lastTrace, setLastTrace] = useState<any>(null);
  const [showTrace, setShowTrace] = useState(false);
  const [isTestingLifecycle, setIsTestingLifecycle] = useState(false);

  const isSessionActive = !!(creds.partnerId.trim() && creds.sign.trim() && creds.reference.trim());

  const fetchCategories = async () => {
    if (!isSessionActive && isDebug) {
      toast({ title: "Configuration Required", description: "Please enter your 5 Asego credentials in the Config panel first.", variant: "destructive" });
      return;
    }
    setIsConnecting(true);
    try {
      const res = await getAsegoCategories(isDebug ? creds : undefined);
      setLastTrace(res);
      if (res.success && Array.isArray(res.data)) {
        setCategories(res.data);
        toast({ title: "Connection Successful", description: `Loaded ${res.data.length} regions from Asego.` });
      } else {
        toast({ title: "Connection Failed", description: res.error || "Check your credentials in the Config panel.", variant: "destructive" });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isDebug && !isSessionActive) {
      setShowGate(true);
      return;
    }

    setIsLoading(true);
    try {
      const res = await getAsegoPlans(searchParams, isDebug ? creds : undefined);
      setLastTrace(res);
      if (res.success && Array.isArray(res.data)) {
        setPlans(res.data);
        setStep('selection');
      } else {
        toast({ title: "Search Failed", description: res.error || "No plans returned for these parameters.", variant: "destructive" });
      }
    } catch (e) {
      toast({ title: "Internal Error", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const runLifecycleTest = async () => {
    if (!isSessionActive) return setShowGate(true);
    setIsTestingLifecycle(true);
    
    try {
      // 1. Create
      const orderId = `UTS-TEST-${Math.floor(Date.now() / 1000)}`;
      const payload = { ...formData, planId: "d5e591b7-46dd-4d7e-8264-7a30b16cec8d", detailId: "test-detail-id", orderId };
      
      const createRes = await createAsegoPolicy(payload, creds);
      setLastTrace(createRes);
      
      if (!createRes.success) {
        toast({ title: "Creation Failed", description: createRes.error, variant: "destructive" });
        return;
      }

      const policyNo = createRes.data.policyNumber;
      toast({ title: "Created", description: `Policy ${policyNo} generated.` });

      // 2. Cancel
      const cancelRes = await cancelAsegoPolicy(policyNo, "UAT Forensic Test Cleanup", creds);
      setLastTrace(cancelRes);
      
      if (cancelRes.success) {
        toast({ title: "Test Complete", description: "Policy created and successfully cancelled in UAT." });
      }
    } catch (e) {
      toast({ title: "Lifecycle Error", variant: "destructive" });
    } finally {
      setIsTestingLifecycle(false);
    }
  };

  const handleSelectPlan = async (plan: NormalizedPlan) => {
    setHydratingPlanId(plan.planId);
    try {
      const res = await getAsegoPlanDetails(plan.planId, searchParams.age, isDebug ? creds : undefined);
      setLastTrace(res);
      if (res.success && res.data) {
        setSelectedPlan({ ...plan, ...res.data });
        setStep('form');
      } else {
        setSelectedPlan(plan);
        setStep('form');
      }
    } catch (e) {
      toast({ title: "Selection Error", variant: "destructive" });
    } finally {
      setHydratingPlanId(null);
    }
  };

  const handleIssuePolicy = async () => {
    setIsIssuing(true);
    const orderId = `UTS-ISS-${Math.floor(Date.now() / 1000)}`;
    const payload = { ...formData, planId: selectedPlan?.planId, detailId: selectedPlan?.detailId, orderId };

    try {
      const res = await createAsegoPolicy(payload, isDebug ? creds : undefined);
      setLastTrace(res);
      if (res.success) {
        setIssuedPolicy(res.data);
        setStep('success');
      } else {
        toast({ title: "Issuance Failed", description: res.error, variant: "destructive" });
      }
    } catch (e) {
      toast({ title: "Internal Error", variant: "destructive" });
    } finally {
      setIsIssuing(false);
    }
  };

  return (
    <div className="space-y-12">
      
      {/* 1. HEADER & FORENSIC UTILS */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="text-left space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></div>
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#4FD1C5]">UAT ACTIVE</span>
                </div>
                <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Asego Dolphin Integration</p>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium tracking-tighter leading-[1.05]">
                  Plan the occasion.<br/>
                  <span className="italic text-[#9AA1C0]">Protect the impact.</span>
              </h1>
          </div>
          
          <div className="flex gap-3">
             <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowTrace(!showTrace)} 
                className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", showTrace ? "bg-white text-black" : "text-white/40 border-white/10")}
             >
                <Terminal className="w-3 h-3 mr-2" /> Trace
             </Button>
             <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowGate(!showGate)} 
                className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", isSessionActive ? "text-green-500 border-green-500/20" : "text-[#E8A33D] border-[#E8A33D]/20")}
             >
                <Lock className="w-3 h-3 mr-2" /> Config
             </Button>
          </div>
      </div>

      {/* 2. FORENSIC TRACE TERMINAL */}
      {showTrace && lastTrace && (
        <Card className="bg-[#0B0F22] border-[#4FD1C5]/40 p-8 rounded-none font-mono text-[11px] animate-in fade-in slide-in-from-top-4 text-left">
           <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <span className="text-[9px] font-bold uppercase text-[#4FD1C5]">Forensic_Trace_v4.5.log</span>
              <span className="text-white/20">{lastTrace.method} {lastTrace.endpoint}</span>
           </div>
           <div className="space-y-4">
              <div>
                <p className="text-[#6E7495] mb-1 font-bold uppercase text-[9px]">Verbatim Response Body:</p>
                <pre className="text-[#4FD1C5] overflow-auto max-h-[300px] leading-relaxed custom-scrollbar bg-white/[0.02] p-4">
                  {JSON.stringify(lastTrace.raw || lastTrace.data, null, 2)}
                </pre>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-[#6E7495] mb-1 font-bold uppercase text-[9px]">Status: {lastTrace.status} {lastTrace.success ? 'OK' : 'ERROR'}</p>
              </div>
           </div>
        </Card>
      )}

      {/* 3. CONFIGURATION GATE */}
      {showGate && (
        <Card className="bg-[#171D3A] border border-[#E8A33D]/40 p-8 rounded-none shadow-2xl text-left animate-in slide-in-from-right-4">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                  <Lock className="w-5 h-5 text-[#E8A33D]" /> Asego Session Activation
                </h3>
                <button onClick={() => setShowSecrets(!showSecrets)} className="text-xs font-bold text-[#6E7495] hover:text-white transition-colors">
                   {showSecrets ? "Hide Keys" : "Reveal Keys"}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {[
                  { k: 'partnerId', l: 'Partner ID' },
                  { k: 'sign', l: 'Sign' },
                  { k: 'reference', l: 'Reference' },
                  { k: 'secretKey', l: 'Secret Key' },
                  { k: 'vectorBytes', l: 'Vector Bytes' }
                ].map(f => (
                  <div key={f.k} className="space-y-1.5">
                    <Label className="text-[8px] font-bold uppercase tracking-widest text-[#6E7495]">{f.l}</Label>
                    <Input 
                      type={showSecrets ? "text" : "password"} 
                      value={(creds as any)[f.k]} 
                      onChange={e => setCreds({...creds, [f.k]: e.target.value})}
                      className="bg-[#0F1428] border-white/10 h-11 text-xs rounded-none font-mono"
                    />
                  </div>
                ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={fetchCategories} disabled={isConnecting} className="flex-1 h-12 bg-white/10 hover:bg-white/20 text-white font-bold rounded-none uppercase text-[10px] tracking-widest">
                  {isConnecting ? <Loader2 className="w-4 h-4 animate-spin" /> : <><RefreshCw className="w-3.5 h-3.5 mr-2" /> Test Connection</>}
              </Button>
              <Button onClick={runLifecycleTest} disabled={isTestingLifecycle} className="flex-1 h-12 bg-[#E8A33D] text-[#0F1428] font-bold rounded-none uppercase text-[10px] tracking-widest">
                  {isTestingLifecycle ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Zap className="w-3.5 h-3.5 mr-2" /> Run Lifecycle Test</>}
              </Button>
              <Button onClick={() => setShowGate(false)} className="px-8 h-12 border border-white/10 text-white font-bold rounded-none uppercase text-[10px] tracking-widest">
                  Close
              </Button>
            </div>
        </Card>
      )}

      {/* 4. JOURNEY STEPS */}
      <div className="space-y-12">
          
          {step === 'search' && (
            <Card className="bg-[#171D3A] border-white/10 p-1 rounded-none shadow-3xl">
              <div className="bg-[#1E2650] p-10 rounded-none">
                {categories.length === 0 && !isConnecting && (
                  <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs flex items-center gap-3">
                    <AlertTriangle className="w-4 h-4" />
                    <span>No regions loaded. Click the <strong>Config</strong> button (Lock icon) and <strong>Test Connection</strong> to initialize.</span>
                  </div>
                )}
                <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end text-left">
                    <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Destination</Label>
                        <select 
                            value={searchParams.categoryId} 
                            onChange={e => setSearchParams({...searchParams, categoryId: e.target.value})}
                            className="w-full h-14 px-4 bg-[#0F1428] border border-white/10 rounded-none outline-none text-sm font-medium disabled:opacity-50"
                            disabled={categories.length === 0}
                        >
                            <option value="">{isConnecting ? "Loading..." : categories.length > 0 ? "Select Region" : "Configure to load..."}</option>
                            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Traveler Age</Label>
                        <Input type="number" value={searchParams.age} onChange={e => setSearchParams({...searchParams, age: e.target.value})} className="h-14 bg-[#0F1428] border-white/10 rounded-none font-bold text-center" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">Duration (Days)</Label>
                        <Input type="number" value={searchParams.duration} onChange={e => setSearchParams({...searchParams, duration: e.target.value})} className="h-14 bg-[#0F1428] border-white/10 rounded-none font-bold text-center" />
                    </div>
                    <Button type="submit" disabled={isLoading || categories.length === 0} className="h-14 bg-[#E8A33D] text-[#0F1428] font-bold rounded-none shadow-xl hover:bg-white transition-all">
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Search Plans"}
                    </Button>
                </form>
              </div>
            </Card>
          )}

          {step === 'selection' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
               <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <h2 className="text-2xl font-headline font-bold">Available Plans</h2>
                  <Button variant="ghost" size="sm" onClick={() => setStep('search')} className="text-[10px] uppercase font-bold text-[#6E7495]">← Back to search</Button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {plans.map((plan, i) => (
                    <Card key={i} className="bg-[#171D3A] border-white/10 rounded-none flex flex-col hover:border-white/20 transition-all group">
                       <div className="p-8 border-b border-white/5">
                          <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">{plan.insurer}</p>
                       </div>
                       <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                          <div className="p-4 bg-white/5 space-y-1">
                             <p className="text-[9px] font-bold text-[#6E7495] uppercase">Premium Total</p>
                             <p className="text-3xl font-bold font-headline">₹{plan.premium}</p>
                          </div>
                          <Button 
                            onClick={() => handleSelectPlan(plan)}
                            disabled={!!hydratingPlanId}
                            className="w-full h-14 bg-white/5 text-white hover:bg-[#E8A33D] hover:text-[#0F1428] font-bold uppercase text-[10px] tracking-[0.2em] rounded-none transition-all"
                          >
                             {hydratingPlanId === plan.planId ? <Loader2 className="w-4 h-4 animate-spin" /> : "Select Plan"}
                          </Button>
                       </div>
                    </Card>
                  ))}
               </div>
            </div>
          )}

          {step === 'form' && selectedPlan && (
            <div className="space-y-10 animate-in fade-in duration-700 text-left">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/[0.02] border border-white/10 p-8">
                  <div className="flex items-center gap-6">
                     <div className="w-16 h-16 bg-[#E8A33D]/10 flex items-center justify-center border border-[#E8A33D]/20">
                        <Plane className="w-8 h-8 text-[#E8A33D]" />
                     </div>
                     <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Selected Product</p>
                        <h3 className="text-2xl font-bold font-headline">{selectedPlan.name}</h3>
                        <p className="text-xs text-[#9AA1C0] mt-1 font-mono uppercase">ID: {selectedPlan.planId} · Detail: {selectedPlan.detailId || 'PENDING'}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] font-bold text-[#6E7495] uppercase mb-1">Total Payable</p>
                     <p className="text-4xl font-bold font-headline">₹{selectedPlan.premium}</p>
                  </div>
               </div>

               <div className="grid lg:grid-cols-[1fr_400px] gap-12">
                  <div className="space-y-10">
                     <section className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-3 border-b border-white/5 pb-2">
                           <User className="w-4 h-4 text-[#4FD1C5]" /> 1. Identity & Passport
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="space-y-1.5">
                              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">First Name</Label>
                              <Input value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="bg-white/5 border-white/10 h-11 rounded-none" />
                           </div>
                           <div className="space-y-1.5">
                              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Last Name</Label>
                              <Input value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="bg-white/5 border-white/10 h-11 rounded-none" />
                           </div>
                           <div className="space-y-1.5">
                              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Passport Number</Label>
                              <Input value={formData.passportNo} onChange={e => setFormData({...formData, passportNo: e.target.value})} className="bg-white/5 border-white/10 h-11 rounded-none font-mono" />
                           </div>
                           <div className="space-y-1.5">
                              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Gender</Label>
                              <select value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} className="w-full h-11 bg-white/5 border border-white/10 px-3 rounded-none text-sm outline-none">
                                 <option value="Male">Male</option>
                                 <option value="Female">Female</option>
                                 <option value="Other">Other</option>
                              </select>
                           </div>
                        </div>
                     </section>

                     <section className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-3 border-b border-white/5 pb-2">
                           <MapPin className="w-4 h-4 text-[#4FD1C5]" /> 2. Contact & Residence
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="space-y-1.5">
                              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Email Address</Label>
                              <Input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-white/5 border-white/10 h-11 rounded-none" />
                           </div>
                           <div className="space-y-1.5">
                              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Mobile Number</Label>
                              <Input value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} className="bg-white/5 border-white/10 h-11 rounded-none" />
                           </div>
                           <div className="md:col-span-2 space-y-1.5">
                              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Street Address</Label>
                              <Input value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="bg-white/5 border-white/10 h-11 rounded-none" />
                           </div>
                        </div>
                     </section>

                     <section className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest flex items-center gap-3 border-b border-white/5 pb-2">
                           <Heart className="w-4 h-4 text-[#4FD1C5]" /> 3. Nominee Details
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="space-y-1.5">
                              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Full Name</Label>
                              <Input value={formData.nomineeName} onChange={e => setFormData({...formData, nomineeName: e.target.value})} className="bg-white/5 border-white/10 h-11 rounded-none" />
                           </div>
                           <div className="space-y-1.5">
                              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Relationship</Label>
                              <select value={formData.nomineeRelation} onChange={e => setFormData({...formData, nomineeRelation: e.target.value})} className="w-full h-11 bg-white/5 border border-white/10 px-3 rounded-none text-sm outline-none">
                                 <option value="Spouse">Spouse</option>
                                 <option value="Parent">Parent</option>
                                 <option value="Child">Child</option>
                                 <option value="Other">Other</option>
                              </select>
                           </div>
                        </div>
                     </section>
                  </div>

                  <div className="space-y-6 sticky top-28 h-fit">
                      <div className="p-8 bg-[#171D3A] border border-white/10 rounded-none space-y-8">
                         <div className="space-y-4">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-white/5 pb-2">Issuance Summary</h4>
                            <div className="space-y-3">
                               <div className="flex justify-between text-xs">
                                  <span className="text-[#6E7495]">Premium</span>
                                  <span className="font-bold">₹{selectedPlan.premium}</span>
                               </div>
                               <div className="flex justify-between text-xs">
                                  <span className="text-[#6E7495]">Traveler</span>
                                  <span className="font-bold">{formData.firstName} {formData.lastName}</span>
                               </div>
                            </div>
                         </div>

                         <div className="space-y-3">
                            <Button 
                              onClick={handleIssuePolicy}
                              disabled={isIssuing || !selectedPlan.detailId}
                              className="w-full h-12 bg-[#4FD1C5] text-[#0F1428] hover:bg-white font-bold uppercase text-[9px] tracking-[0.2em] rounded-none shadow-xl"
                            >
                               {isIssuing ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Zap className="w-3.5 h-3.5 mr-2" /> Complete Issuance</>}
                            </Button>
                         </div>
                      </div>

                      <button onClick={() => setStep('search')} className="w-full text-[9px] font-bold uppercase tracking-widest text-[#6E7495] hover:text-white transition-colors">
                         Discard & Start Over
                      </button>
                  </div>
               </div>
            </div>
          )}

          {step === 'success' && issuedPolicy && (
            <div className="max-w-2xl mx-auto py-12 animate-in zoom-in-95 duration-500">
               <div className="bg-[#171D3A] border border-[#4FD1C5]/40 p-12 rounded-none text-center space-y-8 shadow-3xl">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                     <ShieldCheck className="w-10 h-10 text-green-500" />
                  </div>
                  <div className="space-y-2">
                     <h2 className="text-3xl font-bold font-headline text-white">Policy Issued Successfully</h2>
                     <p className="text-[#9AA1C0] font-medium">UAT transaction complete. Your test document is ready.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                     <div className="bg-white/5 p-6 space-y-1">
                        <p className="text-[9px] font-bold text-[#6E7495] uppercase tracking-widest">Policy Number</p>
                        <p className="text-xl font-bold font-mono text-white">{issuedPolicy.policyNumber}</p>
                     </div>
                     <div className="bg-white/5 p-6 space-y-1">
                        <p className="text-[9px] font-bold text-[#6E7495] uppercase tracking-widest">Order ID</p>
                        <p className="text-xl font-bold font-mono text-white">{issuedPolicy.orderId}</p>
                     </div>
                  </div>

                  <div className="pt-6 space-y-4">
                     <a href={issuedPolicy.policyFilePath} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full h-14 bg-white text-black hover:bg-[#4FD1C5] font-bold uppercase tracking-[0.2em] text-[10px] rounded-none shadow-xl">
                           <Download className="w-4 h-4 mr-2" /> Download Certificate
                        </Button>
                     </a>
                     <Button variant="ghost" onClick={() => setStep('search')} className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495] hover:text-white">
                        Issue Another
                     </Button>
                  </div>
               </div>
            </div>
          )}
      </div>

    </div>
  );
}
