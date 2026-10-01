'use client';

import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  Loader2, 
  Lock,
  Terminal,
  User,
  MapPin,
  Search,
  Activity,
  UserCircle,
  Code,
  CheckCircle2,
  Eye,
  EyeOff,
  Check,
  Package
} from "lucide-react";
import { 
  getAsegoCategories, 
  getAsegoPlans, 
  validateAsegoPolicy,
  AsegoCredentials,
  NormalizedPlan 
} from '@/app/international-insurance/actions';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { parseISO, differenceInDays, differenceInYears } from 'date-fns';
import Image from 'next/image';

type Step = 'search' | 'selection' | 'form' | 'success';
type ViewMode = 'journey' | 'blueprint';

export function InsuranceDashboard({ isDebug }: { isDebug: boolean }) {
  const { toast } = useToast();
  
  const [step, setStep] = useState<Step>('search');
  const [viewMode, setViewMode] = useState<ViewMode>('journey');
  
  // Forensic Fix: Credential state starts empty, no Plan ID pollution.
  const [creds, setCreds] = useState<AsegoCredentials>({
    partnerId: '',
    sign: '',
    reference: '',
    secretKey: '',
    vectorBytes: ''
  });
  
  const [showGate, setShowGate] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);

  const [portalForm, setPortalForm] = useState({
    categoryId: '',
    startDate: '',
    endDate: '',
    travelers: [{ dob: '1997-01-01' }]
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
    if (!portalForm.travelers[0]?.dob) return 27;
    try {
      return differenceInYears(new Date(), parseISO(portalForm.travelers[0].dob));
    } catch (e) { return 27; }
  }, [portalForm.travelers]);

  const [categories, setCategories] = useState<any[]>([]);
  const [plans, setPlans] = useState<NormalizedPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  
  const [selectedPlan, setSelectedPlan] = useState<NormalizedPlan | null>(null);
  
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-01",
    gender: "Male",
    passport: "P1234567",
    email: "test@utsavs.com",
    mobileNo: "9999999999",
    address: "123 Test Street",
    city: "Mumbai",
    district: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    country: "India",
    nomineeName: "Jane Doe",
    nomineeRelation: "Spouse",
  });

  const [isValidating, setIsValidating] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [lastTrace, setLastTrace] = useState<any>(null);
  const [showTrace, setShowTrace] = useState(false);

  const isSessionActive = !!(creds.partnerId.trim() && creds.sign.trim() && creds.reference.trim());

  const fetchCategories = async () => {
    setIsConnecting(true);
    const res = await getAsegoCategories(creds);
    setLastTrace(res);
    if (res.success && Array.isArray(res.data)) {
      setCategories(res.data);
      toast({ title: "Session Initialized" });
    }
    setIsConnecting(false);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!portalForm.categoryId) return toast({ title: "Select a region", variant: "destructive" });
    setIsLoading(true);
    const res = await getAsegoPlans({
      age: primaryAge.toString(),
      duration: calculatedDays.toString() || '30',
      categoryId: portalForm.categoryId
    }, creds);
    setLastTrace(res);
    if (res.success) {
      setPlans(res.data);
      setStep('selection');
    }
    setIsLoading(false);
  };

  // Forensic Fix: Consume the NormalizedPlan contract directly.
  const handleSelectPlan = (plan: NormalizedPlan) => {
    setSelectedPlan(plan);
    setStep('form');
    toast({ title: "Plan Selected", description: plan.name });
  };

  const handleValidate = async () => {
    if (!selectedPlan) return;
    setIsValidating(true);
    const orderId = `UTS-VAL-${Math.floor(Date.now() / 1000)}`;
    const payload = { 
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        planId: selectedPlan.planId, 
        insurerId: selectedPlan.insurerId,
        premium: selectedPlan.premium,
        age: primaryAge,
        duration: calculatedDays,
        categoryId: portalForm.categoryId,
        startDate: portalForm.startDate,
        endDate: portalForm.endDate,
        orderId
    };

    const res = await validateAsegoPolicy(payload, creds);
    setLastTrace(res);
    if (res.success) {
      setIsValidated(true);
      toast({ title: "Validation Successful" });
    } else {
      setIsValidated(false);
      toast({ title: "Validation Failed", variant: "destructive" });
    }
    setIsValidating(false);
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
          <div className="text-left space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-[#4FD1C5]/10 border border-[#4FD1C5]/20 rounded-full flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></div>
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#4FD1C5]">Forensic Hub v5.2</span>
                </div>
                <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Real-Flow Data Trace</p>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium tracking-tighter leading-[1.05] text-white">
                  Global Travel<br/>
                  <span className="italic text-[#9AA1C0]">Assistance Data</span>
              </h1>
          </div>
          
          <div className="flex gap-3">
              <Button variant="ghost" size="sm" onClick={() => setShowTrace(!showTrace)} className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", showTrace && "bg-white text-black")}>
                <Terminal className="w-3 h-3 mr-2" /> Trace
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowGate(!showGate)} className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", isSessionActive ? "text-green-500 border-green-500/20" : "text-[#E8A33D] border-[#E8A33D]/20")}>
                <Lock className="w-3 h-3 mr-2" /> Config
              </Button>
          </div>
      </div>

      {showTrace && lastTrace && (
        <Card className="bg-[#0B0F22] border-[#4FD1C5]/40 p-8 rounded-none font-mono text-[11px] animate-in fade-in slide-in-from-top-4 text-left relative z-20 shadow-2xl">
           <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-bold uppercase text-[#4FD1C5]">Forensic_Report_v5.2.log</span>
                 <Badge variant="outline" className="text-[9px] border-white/10 uppercase py-0">{lastTrace.status} {lastTrace.success ? 'OK' : 'ERROR'}</Badge>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="space-y-6">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">1. Request Context</p>
                 <div className="grid grid-cols-2 gap-4 bg-white/[0.02] p-4 border border-white/5">
                    <div><p className="text-[8px] text-[#6E7495] uppercase">Endpoint</p><p className="truncate">{lastTrace.diagnostics?.endpoint || lastTrace.endpoint}</p></div>
                    <div><p className="text-[8px] text-[#6E7495] uppercase">Class</p><p className="text-[#4FD1C5]">{lastTrace.diagnostics?.requestClass || 'PLAN_SEARCH'}</p></div>
                    <div><p className="text-[8px] text-[#6E7495] uppercase">Data Check</p><p className={cn(lastTrace.diagnostics?.dataCheck === 'PASS' ? 'text-green-500' : 'text-red-500')}>{lastTrace.diagnostics?.dataCheck || 'N/A'}</p></div>
                    <div><p className="text-[8px] text-[#6E7495] uppercase">Partner ID</p><p className="text-white/60">{lastTrace.diagnostics?.partnerId || 'Sourced'}</p></div>
                 </div>
              </div>
              <div className="space-y-6">
                 <p className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">2. Payload Identifiers</p>
                 <div className="grid grid-cols-2 gap-4 bg-white/[0.02] p-4 border border-white/5">
                    <div><p className="text-[8px] text-[#6E7495] uppercase">Plan ID</p><p className="truncate text-white">{lastTrace.diagnostics?.planId || 'N/A'}</p></div>
                    <div><p className="text-[8px] text-[#6E7495] uppercase">Premium</p><p className="text-white">₹{lastTrace.diagnostics?.premium || '0'}</p></div>
                    <div><p className="text-[8px] text-[#6E7495] uppercase">Response Shape</p><p className="text-white/40">{lastTrace.diagnostics?.responseShape || 'UNKNOWN'}</p></div>
                    <div><p className="text-[8px] text-[#6E7495] uppercase">Contains Plans</p><p className="text-white/40">{lastTrace.diagnostics?.containsPlans ? 'YES' : 'NO'}</p></div>
                 </div>
              </div>
           </div>

           {lastTrace.plaintext && (
             <div className="mb-6 space-y-2">
                <p className="text-[9px] font-bold uppercase text-[#6E7495] tracking-widest">Plaintext Payload Builder:</p>
                <pre className="text-white/40 overflow-auto max-h-[300px] bg-white/[0.02] p-6 border border-white/5 text-[10px]">
                  {JSON.stringify(lastTrace.plaintext, null, 2)}
                </pre>
             </div>
           )}

           <div className="space-y-2">
              <p className="text-[9px] font-bold uppercase text-[#6E7495] tracking-widest">Raw Network Output:</p>
              <pre className="text-[#4FD1C5] overflow-auto max-h-[400px] bg-white/[0.02] p-6 border border-white/5 text-[10px]">
                {typeof (lastTrace.raw || lastTrace.data) === 'string' ? (lastTrace.raw || lastTrace.data) : JSON.stringify(lastTrace.raw || lastTrace.data, null, 2)}
              </pre>
           </div>
        </Card>
      )}

      {showGate && (
        <Card className="bg-[#171D3A] border border-[#E8A33D]/40 p-8 rounded-none shadow-2xl text-left relative z-30">
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
                    <Input type={showSecrets ? "text" : "password"} value={(creds as any)[f.k]} onChange={e => setCreds({...creds, [f.k]: e.target.value})} className="bg-[#0F1428] border-white/10 h-11 text-xs rounded-none text-white" />
                  </div>
                ))}
            </div>
            <div className="flex gap-4">
               <Button onClick={fetchCategories} disabled={isConnecting} className="bg-white/10 text-white font-bold rounded-none uppercase text-[10px] tracking-widest h-12 px-8">
                  {isConnecting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Initialize Session"}
               </Button>
               <Button onClick={() => setShowSecrets(!showSecrets)} variant="ghost" className="text-white text-[9px] font-bold uppercase tracking-widest">
                 {showSecrets ? "Hide" : "Show"} Credentials
               </Button>
            </div>
        </Card>
      )}

      <div className="relative min-h-[800px]">
          {viewMode === 'journey' && step === 'search' && (
            <div className="relative min-h-[700px] flex items-center justify-center py-12 animate-in fade-in duration-700">
               <div className="absolute inset-0 z-0 rounded-[40px] overflow-hidden grayscale-[30%] opacity-60">
                 <Image src="https://i.postimg.cc/xqLH4nQz/Accessories-for-Airport-Travel.jpg" layout="fill" objectFit="cover" alt="Travel Background" />
                 <div className="absolute inset-0 bg-gradient-to-br from-[#0F1428]/95 via-[#0F1428]/40 to-[#0F1428]/10" />
               </div>

               <Card className="relative z-10 w-full max-w-5xl bg-[#171D3A]/80 backdrop-blur-2xl border-white/10 rounded-[32px] overflow-hidden shadow-2xl text-left">
                  <CardContent className="p-8 md:p-12 space-y-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                           <div className="space-y-3">
                              <Label className="text-[11px] font-bold uppercase tracking-widest text-[#9AA1C0]">Travel Region</Label>
                              <select value={portalForm.categoryId} onChange={e => setPortalForm({...portalForm, categoryId: e.target.value})} className="w-full h-14 px-4 bg-[#0F1428]/60 border border-white/10 rounded-xl text-white font-medium outline-none">
                                <option value="">{categories.length > 0 ? "Select Region" : "Initialize Session first"}</option>
                                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                              </select>
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">Start Date</Label>
                                 <Input type="date" value={portalForm.startDate} onChange={e => setPortalForm({...portalForm, startDate: e.target.value})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white font-bold" />
                              </div>
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">End Date</Label>
                                 <Input type="date" value={portalForm.endDate} onChange={e => setPortalForm({...portalForm, endDate: e.target.value})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white font-bold" />
                              </div>
                           </div>
                        </div>
                        <div className="space-y-8">
                           <div className="space-y-3">
                              <Label className="text-[11px] font-bold uppercase tracking-widest text-[#9AA1C0]">Traveller DOB</Label>
                              <Input type="date" value={portalForm.travelers[0].dob} onChange={e => setPortalForm({...portalForm, travelers: [{dob: e.target.value}]})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white font-bold" />
                           </div>
                           <div className="pt-4 flex justify-between items-center text-[#9AA1C0]">
                              <div className="space-y-1">
                                 <p className="text-[10px] uppercase font-bold tracking-widest">Duration</p>
                                 <p className="text-xl font-bold text-white">{calculatedDays} Days</p>
                              </div>
                              <div className="space-y-1 text-right">
                                 <p className="text-[10px] uppercase font-bold tracking-widest">Primary Age</p>
                                 <p className="text-xl font-bold text-white">{primaryAge} Yrs</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <Button onClick={handleSearch} disabled={isLoading} className="w-full h-16 bg-[#F15A24] text-white hover:bg-white hover:text-black font-bold uppercase text-lg tracking-[0.1em] rounded-2xl shadow-2xl transition-all active:scale-[0.98]">
                        {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "GET QUOTE"}
                     </Button>
                  </CardContent>
               </Card>
            </div>
          )}

          {viewMode === 'journey' && step === 'selection' && (
            <div className="space-y-10 animate-in fade-in duration-500 text-left relative z-10">
               <div className="flex items-center gap-4 mb-8">
                  <Button variant="ghost" onClick={() => setStep('search')} className="text-white hover:text-white hover:bg-white/5">← Back to Search</Button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {plans.map((plan, i) => (
                    <Card key={i} className="bg-[#171D3A]/60 backdrop-blur-xl border-white/10 rounded-3xl flex flex-col hover:border-[#E8A33D]/40 transition-all shadow-2xl overflow-hidden group">
                       <div className="p-8 border-b border-white/5 bg-white/5">
                          <h3 className="font-bold text-xl text-white leading-tight group-hover:text-[#E8A33D] transition-colors">{plan.name}</h3>
                          <p className="text-[10px] font-bold uppercase text-[#4FD1C5] mt-1">{plan.insurer}</p>
                       </div>
                       <div className="p-8 flex-grow space-y-8">
                          <div className="flex justify-between items-baseline">
                             <p className="text-[10px] font-bold text-[#6E7495] uppercase">Premium Total</p>
                             <p className="text-4xl font-bold text-white">₹{plan.premium}</p>
                          </div>
                          <div className="space-y-4">
                             <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                                <span className="text-[#6E7495]">Target Age</span>
                                <span className="text-white font-bold">{primaryAge} Yrs</span>
                             </div>
                             <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                                <span className="text-[#6E7495]">Max Duration</span>
                                <span className="text-white font-bold">{plan.maxDays} Days</span>
                             </div>
                          </div>
                          <Button 
                            onClick={() => handleSelectPlan(plan)}
                            className="w-full h-14 bg-[#E8A33D] text-[#0F1428] font-bold uppercase text-[11px] tracking-[0.2em] rounded-2xl shadow-lg group-hover:bg-white transition-all"
                          >
                              CHOOSE PLAN
                          </Button>
                       </div>
                    </Card>
                  ))}
               </div>
            </div>
          )}

          {viewMode === 'journey' && step === 'form' && selectedPlan && (
            <div className="space-y-10 animate-in fade-in duration-700 text-left relative z-10">
               <div className="flex items-center justify-between mb-4">
                  <Button variant="ghost" onClick={() => setStep('selection')} className="text-white hover:text-white hover:bg-white/5">← Back to Selection</Button>
               </div>

               <div className="grid lg:grid-cols-[1fr_380px] gap-12">
                  <div className="space-y-8">
                     <section className="p-8 bg-[#171D3A]/40 border border-white/10 rounded-[32px] space-y-6 shadow-xl">
                        <h4 className="text-lg font-bold text-white flex items-center gap-3 border-b border-white/5 pb-4"><User className="w-5 h-5 text-[#4FD1C5]" /> 01. Personal Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">First Name</Label><Input value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Last Name</Label><Input value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Passport No</Label><Input value={formData.passport} onChange={e => setFormData({...formData, passport: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Mobile No</Label><Input value={formData.mobileNo} onChange={e => setFormData({...formData, mobileNo: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Gender</Label><Input value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        </div>
                        <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Email Address</Label><Input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                     </section>

                     <section className="p-8 bg-[#171D3A]/40 border border-white/10 rounded-[32px] space-y-6 shadow-xl">
                        <h4 className="text-lg font-bold text-white flex items-center gap-3 border-b border-white/5 pb-4"><MapPin className="w-5 h-5 text-[#4FD1C5]" /> 02. Address & Nominee</h4>
                        <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Full Address</Label><Input value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">City</Label><Input value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">District</Label><Input value={formData.district} onChange={e => setFormData({...formData, district: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">State</Label><Input value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Country</Label><Input value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Nominee Name</Label><Input value={formData.nomineeName} onChange={e => setFormData({...formData, nomineeName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Nominee Relation</Label><Input value={formData.nomineeRelation} onChange={e => setFormData({...formData, nomineeRelation: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        </div>
                     </section>
                  </div>

                  <div className="space-y-6">
                      <Card className="sticky top-28 p-8 bg-[#171D3A] border-white/10 rounded-[32px] space-y-10 shadow-2xl text-left">
                         <div className="space-y-4">
                            <div className="space-y-1">
                               <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Selected Product</p>
                               <p className="text-xl font-bold text-white">{selectedPlan.name}</p>
                            </div>
                            <div className="space-y-1">
                               <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Net Premium</p>
                               <p className="text-5xl font-bold text-white">₹{selectedPlan.premium}</p>
                            </div>
                         </div>
                         
                         <div className="space-y-3 pt-6 border-t border-white/5">
                            <Button 
                              onClick={handleValidate} 
                              disabled={isValidating} 
                              className={cn(
                                "w-full h-14 font-bold uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all",
                                isValidated ? "bg-green-600 text-white" : "bg-white text-[#0F1428] hover:bg-[#E8A33D]"
                              )}
                            >
                               {isValidating ? <Loader2 className="w-4 h-4 animate-spin" /> : isValidated ? <><CheckCircle2 className="w-4 h-4 mr-2" /> Validated</> : "VALIDATE SCHEMA"}
                            </Button>
                         </div>
                      </Card>
                  </div>
               </div>
            </div>
          )}
      </div>
    </div>
  );
}
