
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
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
  AlertTriangle,
  Plus,
  Calendar as CalendarIcon,
  Check,
  Search,
  Activity,
  ClipboardCheck,
  MessageSquare,
  Code,
  UserCircle,
  ArrowRight,
  ShieldQuestion,
  Info
} from "lucide-react";
import { 
  getAsegoCategories, 
  getAsegoPlans, 
  getAsegoPlanDetails, 
  validateAsegoPolicy,
  createAsegoPolicy,
  cancelAsegoPolicy,
  interrogateAsegoEndpoint,
  AsegoCredentials,
  NormalizedPlan 
} from '@/app/international-insurance/actions';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { format, differenceInDays, parseISO, differenceInYears } from 'date-fns';
import Image from 'next/image';

interface InsuranceDashboardProps {
  isDebug: boolean;
}

type Step = 'search' | 'selection' | 'form' | 'success';
type ViewMode = 'journey' | 'console' | 'blueprint';

export function InsuranceDashboard({ isDebug }: InsuranceDashboardProps) {
  const { toast } = useToast();
  
  // 1. SESSION & NAVIGATION
  const [step, setStep] = useState<Step>('search');
  const [viewMode, setViewMode] = useState<ViewMode>('journey');
  const [creds, setCreds] = useState<AsegoCredentials>({
    partnerId: '',
    sign: '',
    reference: '',
    secretKey: '',
    vectorBytes: ''
  });
  const [showGate, setShowGate] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);

  // 2. PORTAL FORM STATE
  const [portalForm, setPortalForm] = useState({
    tripType: 'single trip', 
    categoryId: '',     
    destinations: [],   
    postDepart: false,
    durationTier: '180', 
    startDate: '',
    endDate: '',
    travelers: [{ dob: '' }]
  });

  const calculatedDays = useMemo(() => {
    if (!portalForm.startDate || !portalForm.endDate) return 0;
    try {
      const start = parseISO(portalForm.startDate);
      const end = parseISO(portalForm.endDate);
      return Math.max(0, differenceInDays(end, start));
    } catch (e) { return 0; }
  }, [portalForm.startDate, portalForm.endDate]);

  const primaryAge = useMemo(() => {
    if (!portalForm.travelers[0]?.dob) return 25;
    try {
      return differenceInYears(new Date(), parseISO(portalForm.travelers[0].dob));
    } catch (e) { return 25; }
  }, [portalForm.travelers]);

  const [categories, setCategories] = useState<any[]>([]);
  const [plans, setPlans] = useState<NormalizedPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [hydratingPlanId, setHydratingPlanId] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<NormalizedPlan | null>(null);
  
  // 3. POLICY FORM STATE
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
  });

  // 4. TRANSACTION STATE
  const [isIssuing, setIsIssuing] = useState(false);
  const [issuedPolicy, setIssuedPolicy] = useState<any>(null);
  const [lastTrace, setLastTrace] = useState<any>(null);
  const [showTrace, setShowTrace] = useState(false);

  const isSessionActive = !!(creds.partnerId.trim() && creds.sign.trim() && creds.reference.trim());

  const fetchCategories = async () => {
    setIsConnecting(true);
    try {
      const res = await getAsegoCategories(creds);
      setLastTrace(res);
      if (res.success && Array.isArray(res.data)) {
        setCategories(res.data);
        toast({ title: "Connection Successful", description: `Loaded regions from Asego.` });
      } else {
        toast({ title: "Connection Failed", variant: "destructive" });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!portalForm.categoryId) {
        toast({ title: "Please select a region", variant: "destructive" });
        return;
    }

    setIsLoading(true);
    try {
      const res = await getAsegoPlans({
        age: primaryAge.toString(),
        duration: calculatedDays.toString() || '30',
        categoryId: portalForm.categoryId
      }, creds);
      
      setLastTrace(res);
      if (res.success && Array.isArray(res.data) && res.data.length > 0) {
        setPlans(res.data);
        setStep('selection');
      } else {
        setPlans([]);
        setStep('selection');
        toast({ title: "Empty Result", description: "Query succeeded but no plans match these filters." });
      }
    } catch (e) {
      toast({ title: "Search Error", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const simulateWorkingPlan = () => {
    const mockPlan: NormalizedPlan = {
      planId: "UAT-SIM-PLAN-001",
      name: "Dolphin UAT Test Plan",
      insurer: "ICICI Lombard",
      premium: 2450,
      currency: "INR",
      minAge: 1,
      maxAge: 99,
      minDays: 1,
      maxDays: 365,
      detailId: "UAT-SIM-DETAIL-001",
      benefits: ["Emergency Medical", "Baggage Protection", "Accident Cover"]
    };
    setPlans([mockPlan]);
    toast({ title: "Simulation Active", description: "Injected mock plan for journey testing." });
  };

  const handleInterrogate = async (type: 'standalone' | 'vasRider' | 'masterDetails') => {
    setIsConnecting(true);
    try {
      const res = await interrogateAsegoEndpoint(type, creds);
      setLastTrace(res);
      toast({ title: `Discovery: ${type}`, description: res.success ? "Received data from Asego." : "Endpoint failed." });
    } catch (e) {
      toast({ title: "Interrogation Error", variant: "destructive" });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSelectPlan = async (plan: NormalizedPlan) => {
    setHydratingPlanId(plan.planId);
    try {
      const res = await getAsegoPlanDetails(plan.planId, primaryAge.toString(), creds);
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
    const payload = { 
        ...formData, 
        planId: selectedPlan?.planId, 
        detailId: selectedPlan?.detailId, 
        orderId,
        departureDate: portalForm.startDate,
        returnDate: portalForm.endDate
    };

    try {
      const res = await createAsegoPolicy(payload, creds);
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

  const handleRunLifecycleTest = async () => {
    setIsConnecting(true);
    const orderId = `UTS-LIFE-${Math.floor(Date.now() / 1000)}`;
    const testData = { ...formData, planId: "UAT-TEST-PLAN", detailId: "UAT-DETAIL", orderId };
    
    try {
      const enc = await validateAsegoPolicy(testData, creds);
      setLastTrace(enc);
      toast({ title: "Lifecycle Step 1", description: "Encryption & Validation complete." });
    } catch (e) {
      toast({ title: "Lifecycle Error", variant: "destructive" });
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="space-y-12">
      
      {/* HEADER & UTILS */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
          <div className="text-left space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></div>
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#4FD1C5]">Dolphin UAT</span>
                </div>
                <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Global Travel Protection</p>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium tracking-tighter leading-[1.05] text-white">
                  Plan the occasion.<br/>
                  <span className="italic text-[#9AA1C0]">Protect the impact.</span>
              </h1>
          </div>
          
          <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowTrace(!showTrace)} 
                className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none transition-all", showTrace ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]" : "text-white/40 border-white/10 hover:border-[#4FD1C5]/40")}
              >
                <Terminal className="w-3 h-3 mr-2" /> Trace
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowGate(!showGate)} 
                className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none transition-all", isSessionActive ? "text-green-500 border-green-500/20" : "text-[#E8A33D] border-[#E8A33D]/20")}
              >
                <Lock className="w-3 h-3 mr-2" /> Config
              </Button>
          </div>
      </div>

      {/* VIEW SWITCHER (Simulated for Journey Control) */}
      <div className="flex bg-[#0B0F22] p-1 rounded-none border border-white/10 w-fit relative z-10">
        <button 
          onClick={() => setViewMode('journey')}
          className={cn(
            "px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all",
            viewMode === 'journey' ? "bg-white text-[#0F1428]" : "text-[#6E7495] hover:text-white"
          )}
        >
          <UserCircle className="w-3.5 h-3.5 inline mr-2" /> Simulation: Customer View
        </button>
        <button 
          onClick={() => setViewMode('blueprint')}
          className={cn(
            "px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all",
            viewMode === 'blueprint' ? "bg-white text-[#0F1428]" : "text-[#6E7495] hover:text-white"
          )}
        >
          <Code className="w-3.5 h-3.5 inline mr-2" /> Policy Blueprint
        </button>
      </div>

      {/* VERBATIM TRACE PANEL */}
      {showTrace && lastTrace && (
        <Card className="bg-[#0B0F22] border-[#4FD1C5]/40 p-8 rounded-none font-mono text-[11px] animate-in fade-in slide-in-from-top-4 text-left relative z-20 shadow-2xl">
           <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <div className="flex items-center gap-3">
                 <span className="text-[9px] font-bold uppercase text-[#4FD1C5]">Forensic_Trace_v4.8.log</span>
                 <Badge variant="outline" className="text-[9px] border-white/10 uppercase py-0">{lastTrace.status} {lastTrace.success ? 'OK' : 'ERROR'}</Badge>
              </div>
              <span className="text-white/20">{lastTrace.method} {lastTrace.endpoint}</span>
           </div>
           <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[#6E7495] font-bold uppercase text-[9px]">Verbatim Response Body:</p>
                  <Button variant="ghost" size="sm" onClick={() => { navigator.clipboard.writeText(JSON.stringify(lastTrace.raw || lastTrace.data, null, 2)); toast({ title: "JSON Copied" }); }} className="h-6 text-[8px] uppercase font-bold text-[#4FD1C5] hover:bg-[#4FD1C5]/10">Copy JSON</Button>
                </div>
                <pre className="text-[#4FD1C5] overflow-auto max-h-[400px] leading-relaxed custom-scrollbar bg-white/[0.02] p-6 border border-white/5 shadow-inner">
                  {JSON.stringify(lastTrace.raw || lastTrace.data, null, 2)}
                </pre>
              </div>
           </div>
        </Card>
      )}

      {/* CONFIGURATION GATE */}
      {showGate && (
        <Card className="bg-[#171D3A] border border-[#E8A33D]/40 p-8 rounded-none shadow-2xl text-left animate-in slide-in-from-right-4 relative z-30">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold font-headline flex items-center gap-3 text-white">
                  <Lock className="w-5 h-5 text-[#E8A33D]" /> Asego Session Activation
                </h3>
                <div className="flex gap-4">
                  <button onClick={() => setShowSecrets(!showSecrets)} className="text-xs font-bold text-[#6E7495] hover:text-white transition-colors flex items-center gap-2">
                    {showSecrets ? <><EyeOff className="w-3.5 h-3.5" /> Hide Keys</> : <><Eye className="w-3.5 h-3.5" /> Reveal Keys</>}
                  </button>
                  <Button variant="ghost" size="sm" onClick={() => setShowGate(false)} className="h-6 text-[9px] uppercase font-bold text-[#6E7495] hover:text-white">Close</Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
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
                      className="bg-[#0F1428] border-white/10 h-11 text-xs rounded-none font-mono text-white focus:border-[#E8A33D] transition-colors"
                    />
                  </div>
                ))}
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E7495] border-b border-white/5 pb-2">1. Initialization</p>
                <div className="flex gap-4">
                   <Button onClick={fetchCategories} disabled={isConnecting} className="bg-white/10 hover:bg-white/20 text-white font-bold rounded-none uppercase text-[10px] tracking-widest h-12 px-8 transition-all">
                      {isConnecting ? <Loader2 className="w-4 h-4 animate-spin" /> : <><RefreshCw className="w-3.5 h-3.5 mr-2" /> Test Connection & Load Regions</>}
                   </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E7495]">2. Interrogation & Discovery</p>
                </div>
                <div className="flex flex-wrap gap-4">
                   <Button variant="outline" onClick={() => handleInterrogate('masterDetails')} disabled={isConnecting} className="border-white/10 text-white font-bold rounded-none uppercase text-[9px] tracking-widest h-10 px-6 hover:border-[#4FD1C5]/40 hover:bg-[#4FD1C5]/5 transition-all">Interrogate Master Details</Button>
                   <Button variant="outline" onClick={() => handleInterrogate('standalone')} disabled={isConnecting} className="border-white/10 text-white font-bold rounded-none uppercase text-[9px] tracking-widest h-10 px-6 hover:border-[#4FD1C5]/40 hover:bg-[#4FD1C5]/5 transition-all">Interrogate Standalone</Button>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8A33D] border-b border-[#E8A33D]/20 pb-2">3. Simulation Tools</p>
                <Button onClick={simulateWorkingPlan} className="bg-white/5 border border-white/10 text-white font-bold rounded-none uppercase text-[10px] tracking-widest h-12 px-10 hover:bg-white hover:text-black transition-all">
                   Force Search Success (Mock Plan)
                </Button>
              </div>
            </div>
        </Card>
      )}

      {/* MAIN PORTAL JOURNEY */}
      <div className="relative min-h-[800px]">
        
          {viewMode === 'journey' && step === 'search' && (
            <div className="relative min-h-[700px] flex items-center justify-center py-12 animate-in fade-in duration-700">
               {/* Portal Background */}
               <div className="absolute inset-0 z-0 rounded-[40px] overflow-hidden grayscale-[30%] opacity-60">
                 <Image 
                    src="https://i.postimg.cc/xqLH4nQz/Accessories-for-Airport-Travel.jpg" 
                    layout="fill" 
                    objectFit="cover" 
                    alt="Travel Background" 
                    data-ai-hint="travel background"
                 />
                 <div className="absolute inset-0 bg-gradient-to-br from-[#0F1428]/95 via-[#0F1428]/40 to-[#0F1428]/10" />
               </div>

               <Card className="relative z-10 w-full max-w-5xl bg-[#171D3A]/80 backdrop-blur-2xl border-white/10 rounded-[32px] overflow-hidden shadow-[0_64px_128px_-32px_rgba(0,0,0,0.8)] text-left">
                  <CardContent className="p-8 md:p-12 space-y-10">
                     <div className="space-y-1">
                        <h2 className="text-3xl font-headline font-medium text-white">Secure this trip...</h2>
                        <div className="h-0.5 w-12 bg-[#E8A33D]" />
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                           <div className="space-y-3">
                              <Label className="text-[11px] font-bold uppercase tracking-widest text-[#9AA1C0]">Travel Region</Label>
                              <select 
                                value={portalForm.categoryId} 
                                onChange={e => setPortalForm({...portalForm, categoryId: e.target.value})}
                                className="w-full h-14 px-4 bg-[#0F1428]/60 border border-white/10 rounded-xl outline-none text-white font-medium focus:border-[#E8A33D] transition-colors"
                              >
                                <option value="">{isConnecting ? "Loading..." : categories.length > 0 ? "Select Region" : "Handshake required..."}</option>
                                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                              </select>
                           </div>
                           <div className="space-y-3">
                              <Label className="text-[11px] font-bold uppercase tracking-widest text-[#9AA1C0]">Destination</Label>
                              <div className="w-full h-14 px-4 bg-[#0F1428]/60 border border-white/10 rounded-xl flex items-center text-[#6E7495] text-sm italic">
                                 Select Countries
                              </div>
                           </div>
                        </div>

                        <div className="space-y-8">
                           <div className="grid grid-cols-[1.5fr_1.5fr_0.8fr] gap-4">
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">Start Date</Label>
                                 <Input 
                                    type="date" 
                                    value={portalForm.startDate} 
                                    onChange={e => setPortalForm({...portalForm, startDate: e.target.value})}
                                    className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white font-bold" 
                                 />
                              </div>
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">End Date</Label>
                                 <Input 
                                    type="date" 
                                    value={portalForm.endDate} 
                                    onChange={e => setPortalForm({...portalForm, endDate: e.target.value})}
                                    className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white font-bold" 
                                 />
                              </div>
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">Days</Label>
                                 <div className="h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-bold text-white">
                                    {calculatedDays}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="pt-6 border-t border-white/5">
                        <Button 
                          onClick={handleSearch}
                          disabled={isLoading}
                          className="w-full h-16 bg-[#F15A24] text-white hover:bg-white hover:text-black font-bold uppercase text-lg tracking-[0.1em] rounded-2xl shadow-2xl transition-all active:scale-95"
                        >
                           {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Search className="w-5 h-5 mr-3" /> GET QUOTE</>}
                        </Button>
                     </div>
                  </CardContent>
               </Card>
            </div>
          )}

          {viewMode === 'journey' && step === 'selection' && (
            <div className="space-y-10 animate-in fade-in duration-500 text-left relative z-10">
               <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="space-y-1">
                    <h2 className="text-3xl font-headline font-bold text-white">Compare Plans</h2>
                    <p className="text-sm text-[#9AA1C0]">Displaying products for <strong>Age {primaryAge}</strong> and <strong>Duration {calculatedDays} days</strong>.</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setStep('search')} className="text-[10px] uppercase font-bold text-[#6E7495]">← Modify Search</Button>
               </div>

               {plans.length === 0 ? (
                 <div className="py-32 text-center space-y-8 bg-[#171D3A]/40 border border-dashed border-white/10 rounded-[32px]">
                    <Activity className="w-16 h-16 mx-auto text-[#E8A33D] opacity-40" />
                    <div className="space-y-2">
                       <h3 className="text-2xl font-headline text-white">No plans discovered for these criteria.</h3>
                       <p className="text-[#9AA1C0] max-sm mx-auto">This usually means the combination of region, age, and duration has no matches in the UAT database.</p>
                    </div>
                    <div className="p-8 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-2xl max-w-xl mx-auto space-y-6">
                       <div className="flex items-center gap-3 text-[#E8A33D]">
                          <Search className="w-5 h-5" />
                          <h4 className="font-bold uppercase text-[11px] tracking-widest">Testing Bypass:</h4>
                       </div>
                       <p className="text-xs text-[#9AA1C0] leading-relaxed">
                          The UAT environment can have empty sets for certain dates. Click below to inject a mock plan to test the rest of the issuance journey.
                       </p>
                       <Button onClick={simulateWorkingPlan} className="w-full bg-[#E8A33D] text-[#0F1428] rounded-xl font-bold uppercase text-[10px] tracking-widest h-11">Simulate a working plan for testing</Button>
                    </div>
                 </div>
               ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                      <Card key={i} className="bg-[#171D3A]/60 backdrop-blur-xl border-white/10 rounded-3xl flex flex-col hover:border-[#E8A33D]/40 transition-all group overflow-hidden shadow-2xl">
                         <div className="p-8 border-b border-white/5 bg-white/5">
                            <div className="flex justify-between items-start mb-2">
                               <h3 className="font-bold text-xl text-white leading-tight">{plan.name}</h3>
                               <ShieldCheck className="w-6 h-6 text-[#E8A33D] opacity-40" />
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">{plan.insurer}</p>
                         </div>
                         <div className="p-8 space-y-8 flex-grow flex flex-col justify-between">
                            <div className="space-y-4">
                               <div className="flex justify-between items-baseline">
                                  <p className="text-[10px] font-bold text-[#6E7495] uppercase">Total Premium</p>
                                  <p className="text-4xl font-bold font-headline text-white">₹{plan.premium}</p>
                               </div>
                               <div className="h-px bg-white/5 w-full" />
                               <ul className="space-y-2">
                                  {['Emergency Medical', 'Trip Cancellation', 'Lost Baggage'].map(b => (
                                    <li key={b} className="flex items-center gap-2 text-xs text-[#9AA1C0]">
                                      <div className="w-1 h-1 rounded-full bg-[#E8A33D]" /> {b}
                                    </li>
                                  ))}
                               </ul>
                            </div>
                            <Button 
                              onClick={() => handleSelectPlan(plan)}
                              disabled={!!hydratingPlanId || plan.ineligible}
                              className={cn(
                                "w-full h-14 font-bold uppercase text-[11px] tracking-[0.2em] rounded-2xl transition-all shadow-xl",
                                plan.ineligible ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-[#E8A33D] text-[#0F1428] hover:bg-white"
                              )}
                            >
                               {hydratingPlanId === plan.planId ? <Loader2 className="w-4 h-4 animate-spin" /> : plan.ineligible ? "Not Available" : "Choose Plan"}
                            </Button>
                         </div>
                      </Card>
                    ))}
                 </div>
               )}
            </div>
          )}

          {viewMode === 'journey' && step === 'form' && selectedPlan && (
            <div className="space-y-10 animate-in fade-in duration-700 text-left relative z-10">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#171D3A]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[32px] shadow-3xl">
                  <div className="flex items-center gap-8">
                     <div className="w-20 h-20 bg-[#E8A33D]/10 flex items-center justify-center border border-[#E8A33D]/20 rounded-2xl">
                        <Plane className="w-10 h-10 text-[#E8A33D]" />
                     </div>
                     <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#6E7495] mb-1">Selected Product</p>
                        <h3 className="text-3xl font-bold font-headline text-white">{selectedPlan.name}</h3>
                        <div className="flex gap-4 mt-2">
                           <span className="text-[10px] text-[#4FD1C5] font-mono border border-[#4FD1C5]/20 px-2 py-0.5 rounded uppercase">ID: {selectedPlan.planId}</span>
                           <span className="text-[10px] text-[#4FD1C5] font-mono border border-[#4FD1C5]/20 px-2 py-0.5 rounded uppercase">Age: {primaryAge}</span>
                        </div>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-[11px] font-bold text-[#6E7495] uppercase mb-1">Total Premium</p>
                     <p className="text-5xl font-bold font-headline text-white">₹{selectedPlan.premium}</p>
                  </div>
               </div>

               <div className="grid lg:grid-cols-[1fr_420px] gap-12">
                  <div className="space-y-10">
                     <section className="p-10 bg-[#171D3A]/40 border border-white/10 rounded-[32px] space-y-8 shadow-xl">
                        <div className="flex items-center justify-between">
                           <h4 className="text-lg font-bold uppercase tracking-widest flex items-center gap-4 text-white">
                              <div className="w-8 h-8 rounded-lg bg-[#4FD1C5]/10 flex items-center justify-center"><User className="w-5 h-5 text-[#4FD1C5]" /></div>
                              1. Identity & Passport
                           </h4>
                           <Button variant="ghost" size="sm" onClick={() => setFormData({...formData, firstName: 'Aditi', lastName: 'Test', passportNo: 'UAT-999'})} className="text-[9px] uppercase font-bold text-[#4FD1C5] hover:bg-[#4FD1C5]/10">Fill with Test Data</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <Label className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">First Name</Label>
                              <Input value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14 rounded-xl text-white font-bold" />
                           </div>
                           <div className="space-y-2">
                              <Label className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Last Name</Label>
                              <Input value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14 rounded-xl text-white font-bold" />
                           </div>
                           <div className="space-y-2">
                              <Label className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Passport Number</Label>
                              <Input value={formData.passportNo} onChange={e => setFormData({...formData, passportNo: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14 rounded-xl text-white font-bold font-mono" />
                           </div>
                        </div>
                     </section>

                     <section className="p-10 bg-[#171D3A]/40 border border-white/10 rounded-[32px] space-y-8 shadow-xl">
                        <h4 className="text-lg font-bold uppercase tracking-widest flex items-center gap-4 text-white">
                           <div className="w-8 h-8 rounded-lg bg-[#4FD1C5]/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-[#4FD1C5]" /></div>
                           2. Contact & Nominee
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <Label className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Email Address</Label>
                              <Input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14 rounded-xl text-white font-bold" />
                           </div>
                           <div className="space-y-2">
                              <Label className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Nominee Name</Label>
                              <Input value={formData.nomineeName} onChange={e => setFormData({...formData, nomineeName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14 rounded-xl text-white font-bold" />
                           </div>
                        </div>
                     </section>
                  </div>

                  <div className="space-y-6 sticky top-28 h-fit">
                      <Card className="p-8 bg-[#171D3A] border-white/10 rounded-[32px] space-y-10 shadow-3xl">
                         <div className="space-y-4">
                            <Button 
                              onClick={handleIssuePolicy}
                              disabled={isIssuing}
                              className="w-full h-16 bg-[#4FD1C5] text-[#0F1428] hover:bg-white font-bold uppercase text-[11px] tracking-[0.2em] rounded-2xl shadow-xl transition-all active:scale-95"
                            >
                               {isIssuing ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Zap className="w-4 h-4 mr-2" /> Complete Issuance</>}
                            </Button>
                         </div>
                      </Card>
                  </div>
               </div>
            </div>
          )}

          {viewMode === 'journey' && step === 'success' && issuedPolicy && (
            <div className="max-w-2xl mx-auto py-12 animate-in zoom-in-95 duration-500 relative z-10">
               <div className="bg-[#171D3A]/80 backdrop-blur-2xl border border-[#4FD1C5]/40 p-12 rounded-[40px] text-center space-y-8 shadow-3xl">
                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                     <ShieldCheck className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-4xl font-bold font-headline text-white">Issuance Successful</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden text-left">
                     <div className="bg-white/5 p-8 space-y-1">
                        <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Policy Number</p>
                        <p className="text-2xl font-bold font-mono text-white">{issuedPolicy.policyNumber}</p>
                     </div>
                     <div className="bg-white/5 p-8 space-y-1">
                        <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Transaction ID</p>
                        <p className="text-2xl font-bold font-mono text-white">{issuedPolicy.orderId}</p>
                     </div>
                  </div>
                  <div className="pt-6">
                     <Button variant="ghost" onClick={() => setStep('search')} className="text-[11px] font-bold uppercase tracking-widest text-[#6E7495] hover:text-white">Plan Another Journey</Button>
                  </div>
               </div>
            </div>
          )}

          {viewMode === 'blueprint' && (
            <div className="p-8 space-y-12 animate-in fade-in duration-500 text-left relative z-10 bg-[#0B0F22] border border-white/10 rounded-3xl min-h-[800px]">
               <div className="space-y-4 text-center max-w-2xl mx-auto">
                 <h2 className="text-3xl font-headline font-bold text-white">Policy Transaction Blueprint</h2>
                 <p className="text-sm text-[#9AA1C0]">Mapping confirmed UAT requirements for <code>createPolicy/validate</code>.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="p-6 bg-white/5 rounded-2xl space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5] border-b border-[#4FD1C5]/20 pb-2">Confirmed</h4>
                    <ul className="space-y-3 text-xs font-mono">
                       <li className="flex items-center gap-2 text-white/80"><Check className="w-3 h-3 text-[#4FD1C5]" /> Auth Headers (Sign/Ref)</li>
                       <li className="flex items-center gap-2 text-white/80"><Check className="w-3 h-3 text-[#4FD1C5]" /> Encryption Key/IV</li>
                       <li className="flex items-center gap-2 text-white/80"><Check className="w-3 h-3 text-[#4FD1C5]" /> Partner ID Integration</li>
                    </ul>
                 </div>
                 <div className="p-6 bg-white/5 rounded-2xl space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D] border-b border-[#E8A33D]/20 pb-2">Gaps / Risks</h4>
                    <ul className="space-y-3 text-xs font-mono">
                       <li className="flex items-center gap-2 text-white/60"><ShieldQuestion className="w-3 h-3 text-[#E8A33D]" /> Nominee Data Model</li>
                       <li className="flex items-center gap-2 text-white/60"><ShieldQuestion className="w-3 h-3 text-[#E8A33D]" /> orderId uniqueness</li>
                    </ul>
                 </div>
                 <div className="p-6 bg-[#E8A33D]/5 rounded-2xl space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">Inquiry</h4>
                    <p className="text-xs text-[#9AA1C0] leading-relaxed italic">"Handshake is verified. We now need exact JSON sample for the creation payload to finalise the 1:1 mapping."</p>
                 </div>
              </div>

              <div className="p-10 border-2 border-dashed border-white/5 rounded-3xl text-center space-y-6">
                 <Terminal className="w-12 h-12 mx-auto text-[#6E7495] opacity-30" />
                 <div className="space-y-2">
                    <p className="text-lg font-bold text-white">Internal Relay Diagnostics</p>
                    <p className="text-sm text-[#6E7495] max-w-md mx-auto leading-relaxed">The TRACE panel provides a verbatim dump of every interaction with Asego's UAT gateway.</p>
                 </div>
                 <Button variant="outline" onClick={() => setShowTrace(true)} className="border-white/10 text-white font-bold uppercase text-[10px] tracking-widest h-10 px-8">Open Log Viewer</Button>
              </div>
            </div>
          )}
      </div>

    </div>
  );
}
