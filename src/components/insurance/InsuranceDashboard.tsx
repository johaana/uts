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
  CheckCircle2,
  Package,
  XCircle,
  AlertCircle
} from "lucide-react";
import { 
  getAsegoCategories, 
  getAsegoPlans, 
  validateAsegoPolicy,
  createAsegoPolicy,
  cancelAsegoPolicy,
  AsegoCredentials,
  NormalizedPlan 
} from '@/app/international-insurance/actions';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { parseISO, differenceInDays, differenceInYears } from 'date-fns';
import Image from 'next/image';

type Step = 'search' | 'selection' | 'form' | 'success';

export function InsuranceDashboard({ isDebug }: { isDebug: boolean }) {
  const { toast } = useToast();
  
  const [step, setStep] = useState<Step>('search');
  const [isIssuing, setIsIssuing] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  
  const [creds, setCreds] = useState<AsegoCredentials>({
    partnerId: '',
    sign: '',
    reference: '',
    secretKey: '',
    vectorBytes: ''
  });
  
  const [showGate, setShowGate] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);

  // B7: Idempotent Order ID
  const orderId = useMemo(() => `UTS-${Date.now()}-${Math.random().toString(36).substring(7)}`, []);

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
  const [issuedPolicy, setIssuedPolicy] = useState<any>(null);
  
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
  const [showTrace, setShowTrace] = useState(isDebug);

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

  const handleSelectPlan = (plan: NormalizedPlan) => {
    setSelectedPlan(plan);
    setStep('form');
    setIsValidated(false);
    toast({ title: "Plan Selected", description: plan.name });
  };

  const handleValidate = async () => {
    if (!selectedPlan || isValidating) return;
    setIsValidating(true);
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
        partnerId: creds.partnerId,
        orderId
    };
    const res = await validateAsegoPolicy(payload, creds);
    setLastTrace(res);
    if (res.success && res.diagnostics?.responseShape === 'EMPTY_ARRAY') {
      setIsValidated(true);
      toast({ title: "Validation Passed" });
    } else {
      setIsValidated(false);
      toast({ title: "Validation Failed", variant: "destructive" });
    }
    setIsValidating(false);
  };

  const handleIssue = async () => {
    if (!selectedPlan || isIssuing) return;
    setIsIssuing(true);
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
        partnerId: creds.partnerId,
        orderId
    };
    const res = await createAsegoPolicy(payload, creds);
    setLastTrace(res);
    if (res.success) {
      setIssuedPolicy(Array.isArray(res.data) ? res.data[0] : res.data);
      setStep('success');
      toast({ title: "Policy Issued Successfully" });
    } else {
      toast({ title: "Issuance Failed", variant: "destructive", description: res.diagnostics?.asegoMsg || res.error });
    }
    setIsIssuing(false);
  };

  const handleCancel = async () => {
    const pNo = issuedPolicy?.policyNumber;
    if (!pNo || isCancelling) return;
    setIsCancelling(true);
    const res = await cancelAsegoPolicy(pNo, creds);
    setLastTrace(res);
    if (res.success) {
      toast({ title: "Policy Voided" });
      setIssuedPolicy(null);
      setStep('search');
    }
    setIsCancelling(false);
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
          <div className="text-left space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                {isDebug && (
                  <div className="px-3 py-1 bg-[#E8A33D]/10 border border-[#E8A33D]/20 rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] animate-pulse"></div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#E8A33D]">UAT Audit Mode Active</span>
                  </div>
                )}
                <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Transaction Lifecycle Check</p>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium tracking-tighter leading-[1.05] text-white">
                  Global Travel<br/>
                  <span className="italic text-[#9AA1C0]">Assistance Platform</span>
              </h1>
          </div>
          
          <div className="flex gap-3">
              {isDebug && (
                <Button variant="ghost" size="sm" onClick={() => setShowTrace(!showTrace)} className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", showTrace && "bg-white text-black")}>
                  <Terminal className="w-3 h-3 mr-2" /> Trace
                </Button>
              )}
              {isDebug && (
                <Button variant="ghost" size="sm" onClick={() => setShowGate(!showGate)} className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", isSessionActive ? "text-green-500 border-green-500/20" : "text-[#E8A33D] border-[#E8A33D]/20")}>
                  <Lock className="w-3 h-3 mr-2" /> Config
                </Button>
              )}
          </div>
      </div>

      {isDebug && showTrace && lastTrace && (
        <Card className="bg-[#0B0F22] border-[#DED9D0]/40 p-8 rounded-none font-mono text-[11px] animate-in fade-in slide-in-from-top-4 text-left relative z-20 shadow-2xl overflow-hidden">
           <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
              <div className="flex flex-col gap-1">
                 <span className="text-[12px] font-bold uppercase text-white tracking-widest">========== ASEGO AUDIT TRACE v5.8 ==========</span>
                 <span className="text-[9px] text-[#6E7495]">TIMESTAMP: {new Date().toISOString()}</span>
              </div>
              <Badge variant="outline" className={cn("text-[9px] uppercase px-4", lastTrace.success ? "border-[#4FD1C5] text-[#4FD1C5]" : "border-red-500 text-red-500")}>
                {lastTrace.status} {lastTrace.success ? 'OK' : 'ERROR'}
              </Badge>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              <div className="space-y-4">
                 <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E8A33D]">1. IDENTITY</p>
                 <div className="bg-white/[0.02] p-4 border border-white/5 space-y-2">
                    <div><p className="text-[7px] text-[#6E7495] uppercase">Class</p><p className="text-white font-bold">{lastTrace.diagnostics?.requestClass || "GET"}</p></div>
                    <div><p className="text-[7px] text-[#6E7495] uppercase">Match</p><p className={cn("font-bold", lastTrace.diagnostics?.pathPayloadMatch ? "text-green-500" : "text-red-500")}>{lastTrace.diagnostics?.pathPayloadMatch ? "YES" : "NO"}</p></div>
                 </div>
              </div>
              <div className="space-y-4">
                 <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E8A33D]">2. RESPONSE</p>
                 <div className="bg-white/[0.02] p-4 border border-white/5 space-y-2">
                    <div><p className="text-[7px] text-[#6E7495] uppercase">Shape</p><p className="text-white font-bold">{lastTrace.diagnostics?.responseShape || "UNKNOWN"}</p></div>
                    <div><p className="text-[7px] text-[#6E7495] uppercase">Code</p><p className={cn("font-bold", lastTrace.diagnostics?.asegoCode ? "text-red-500" : "text-green-500")}>{lastTrace.diagnostics?.asegoCode ?? "NULL"}</p></div>
                 </div>
              </div>
              <div className="space-y-4">
                 <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#E8A33D]">3. REDACTION</p>
                 <div className="bg-white/[0.02] p-4 border border-white/5 space-y-2">
                    <div><p className="text-[7px] text-[#6E7495] uppercase">PII Guard</p><p className="text-green-500 font-bold">ACTIVE</p></div>
                    <div><p className="text-[7px] text-[#6E7495] uppercase">Status</p><p className="text-white">Redacted from logs.</p></div>
                 </div>
              </div>
           </div>

           <div className="space-y-2">
              <p className="text-[9px] font-bold uppercase text-[#6E7495] tracking-[0.2em]">RAW RESPONSE BODY:</p>
              <pre className={cn("overflow-auto max-h-[300px] bg-white/[0.01] p-6 border border-white/5 text-[9px]", lastTrace.diagnostics?.asegoCode ? "text-red-400" : "text-[#4FD1C5]")}>
                {typeof (lastTrace.raw || lastTrace.data) === 'string' ? (lastTrace.raw || lastTrace.data) : JSON.stringify(lastTrace.raw || lastTrace.data, null, 2)}
              </pre>
           </div>
        </Card>
      )}

      {isDebug && showGate && (
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
          {step === 'search' && (
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
                                <option value="">{categories.length > 0 ? "Select Region" : "Select Region..."}</option>
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

          {step === 'selection' && (
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

          {step === 'form' && selectedPlan && (
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
                              disabled={isValidating || isIssuing} 
                              className={cn(
                                "w-full h-14 font-bold uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all",
                                isValidated ? "bg-green-600/20 text-green-500 border border-green-500/20" : "bg-white text-[#0F1428] hover:bg-[#E8A33D]"
                              )}
                            >
                               {isValidating ? <Loader2 className="w-4 h-4 animate-spin" /> : isValidated ? "SCHEMA VALIDATED" : "VALIDATE SCHEMA"}
                            </Button>
                            
                            <Button 
                              onClick={handleIssue} 
                              disabled={!isValidated || isIssuing} 
                              className="w-full h-16 bg-[#F15A24] text-white hover:bg-white hover:text-black font-bold uppercase text-lg tracking-[0.1em] rounded-2xl shadow-2xl transition-all active:scale-[0.98]"
                            >
                               {isIssuing ? <Loader2 className="w-6 h-6 animate-spin" /> : "ISSUE POLICY"}
                            </Button>
                         </div>
                      </Card>
                  </div>
               </div>
            </div>
          )}

          {step === 'success' && (
            <div className="max-w-4xl mx-auto space-y-8 animate-in zoom-in-95 duration-500 text-center py-20 relative z-10">
               <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-green-500/10">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
               </div>
               <div className="space-y-3">
                  <h2 className="text-4xl md:text-6xl font-headline font-bold text-white">Policy Issued</h2>
                  <p className="text-xl text-[#9AA1C0]">Your travel protection for {selectedPlan?.name} is active.</p>
               </div>
               
               <Card className="bg-white/5 border-white/10 p-10 rounded-[32px] max-w-2xl mx-auto space-y-8 text-left">
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Policy Number</p>
                        <p className="text-2xl font-bold text-[#4FD1C5] font-mono">{issuedPolicy?.policyNumber || "UAT-SUCCESS"}</p>
                     </div>
                     <div className="text-right">
                        <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Reference ID</p>
                        <p className="text-sm font-bold text-white font-mono">{issuedPolicy?.orderId || orderId}</p>
                     </div>
                  </div>
                  <div className="pt-8 border-t border-white/10">
                      <div className="flex items-center gap-3 text-xs text-[#9AA1C0] font-medium leading-relaxed">
                         <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                         <span>Asego Global Assistance has been notified. A confirmation has been sent to {formData.email}.</span>
                      </div>
                  </div>
               </Card>

               <div className="flex flex-col items-center gap-4 pt-12">
                  <Button onClick={handleCancel} disabled={isCancelling} variant="outline" className="text-red-400 border-red-500/30 hover:bg-red-500/10 h-12 px-10 rounded-full font-bold uppercase text-[10px] tracking-widest">
                    {isCancelling ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <XCircle className="w-4 h-4 mr-2" />} 
                    VOID POLICY (UAT TEST)
                  </Button>
                  <Button onClick={() => setStep('search')} variant="ghost" className="text-[#6E7495] hover:text-white uppercase text-[10px] font-bold tracking-[0.2em]">
                    New Transaction
                  </Button>
               </div>
            </div>
          )}
      </div>
    </div>
  );
}

