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
  XCircle,
  Eye,
  EyeOff,
  RotateCcw
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

  // Generate orderId once per attempt
  const orderId = useMemo(() => `UTS-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`, [step]);

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
    try {
      const res = await getAsegoCategories(creds);
      setLastTrace(res);
      if (res.success && Array.isArray(res.data)) {
        setCategories(res.data);
        toast({ title: "Session Initialized" });
      }
    } catch (e: any) {
      toast({ title: "Connection Failed", description: e.message, variant: "destructive" });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!portalForm.categoryId) return toast({ title: "Select a region", variant: "destructive" });
    setIsLoading(true);
    try {
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
    } catch (e: any) {
      toast({ title: "Search Error", description: e.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectPlan = (plan: NormalizedPlan) => {
    setSelectedPlan(plan);
    setStep('form');
    setIsValidated(false);
  };

  const handleValidate = async () => {
    if (!selectedPlan || isValidating) return;
    setIsValidating(true);
    try {
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
      // Empty array is Asego's "Success / No Errors" signal
      if (res.success && Array.isArray(res.data) && res.data.length === 0) {
        setIsValidated(true);
        toast({ title: "Validation Passed" });
      }
    } catch (e: any) {
      toast({ title: "Validation Error", description: e.message, variant: "destructive" });
    } finally {
      setIsValidating(false);
    }
  };

  const handleIssue = async () => {
    if (!selectedPlan || isIssuing) return;
    setIsIssuing(true);
    try {
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
      const res = await createAsegoPolicy(payload, creds);
      setLastTrace(res);
      if (res.success) {
        const policyData = Array.isArray(res.data) ? res.data[0] : res.data;
        setIssuedPolicy(policyData);
        setStep('success');
        toast({ title: "Policy Issued Successfully" });
      }
    } catch (e: any) {
      toast({ title: "Issuance Error", description: e.message, variant: "destructive" });
    } finally {
      setIsIssuing(false);
    }
  };

  const handleCancel = async () => {
    const pNo = issuedPolicy?.policyNumber;
    if (!pNo || isCancelling) return;
    setIsCancelling(true);
    try {
      const res = await cancelAsegoPolicy(pNo, creds);
      setLastTrace(res);
      if (res.success) {
        toast({ title: "Policy Voided" });
        setStep('search');
        setSelectedPlan(null);
        setIssuedPolicy(null);
      }
    } catch (e: any) {
      toast({ title: "Cancellation Error", description: e.message, variant: "destructive" });
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
          <div className="text-left space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Transaction Lifecycle</p>
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
              <Button variant="ghost" size="sm" onClick={() => setShowGate(!showGate)} className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", isSessionActive ? "text-green-500 border-green-500/20" : "text-[#E8A33D] border-[#E8A33D]/20")}>
                <Lock className="w-3 h-3 mr-2" /> Config
              </Button>
          </div>
      </div>

      {showTrace && lastTrace && (
        <Card className="bg-[#0B0F22] border-white/10 p-8 rounded-none font-mono text-[11px] animate-in fade-in slide-in-from-top-4 text-left relative z-20 shadow-2xl">
           <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <span className="text-[12px] font-bold uppercase text-white tracking-widest">Verbatim HTTP Trace</span>
              <Badge variant="outline" className={cn("text-[9px] uppercase px-4", lastTrace.success ? "border-green-500 text-green-500" : "border-red-500 text-red-500")}>
                {lastTrace.status} {lastTrace.method}
              </Badge>
           </div>
           
           <div className="space-y-4">
              <div>
                <p className="text-[7px] text-[#6E7495] uppercase mb-1">Request URL</p>
                <p className="text-blue-400 break-all">{lastTrace.fullUrl}</p>
              </div>
              <div>
                <p className="text-[7px] text-[#6E7495] uppercase mb-1">Raw Response Data</p>
                <pre className="overflow-auto max-h-[300px] bg-white/[0.01] p-6 border border-white/5 text-[9px] text-[#4FD1C5]">
                  {JSON.stringify(lastTrace.data, null, 2)}
                </pre>
              </div>
           </div>
        </Card>
      )}

      {showGate && (
        <Card className="bg-[#171D3A] border border-[#E8A33D]/40 p-8 rounded-none shadow-2xl text-left relative z-30">
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
                    <Input type={showSecrets ? "text" : "password"} value={(creds as any)[f.k]} onChange={e => setCreds({...creds, [f.k]: e.target.value})} className="bg-[#0F1428] border-white/10 h-11 text-xs rounded-none text-white" />
                  </div>
                ))}
            </div>
            <div className="flex gap-4">
               <Button onClick={fetchCategories} disabled={isConnecting} className="bg-white text-black font-bold rounded-none uppercase text-[10px] tracking-widest h-12 px-8">
                  {isConnecting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Initialize Session"}
               </Button>
               <Button variant="ghost" onClick={() => setShowSecrets(!showSecrets)} className="text-white text-[9px] font-bold">
                 {showSecrets ? <EyeOff className="w-3 h-3 mr-2" /> : <Eye className="w-3 h-3 mr-2" />} {showSecrets ? "Hide" : "Show"} Secrets
               </Button>
            </div>
        </Card>
      )}

      <div className="relative min-h-[700px]">
          {step === 'search' && (
            <div className="relative min-h-[700px] flex items-center justify-center animate-in fade-in duration-700">
               <div className="absolute inset-0 z-0 rounded-[40px] overflow-hidden grayscale-[30%] opacity-60">
                 <Image src="https://i.postimg.cc/xqLH4nQz/Accessories-for-Airport-Travel.jpg" layout="fill" objectFit="cover" alt="Travel" />
                 <div className="absolute inset-0 bg-gradient-to-br from-[#0F1428]/95 via-[#0F1428]/40 to-transparent" />
               </div>

               <Card className="relative z-10 w-full max-w-5xl bg-[#171D3A]/80 backdrop-blur-2xl border-white/10 rounded-[32px] overflow-hidden shadow-2xl text-left">
                  <CardContent className="p-8 md:p-12 space-y-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                           <div className="space-y-3">
                              <Label className="text-[11px] font-bold uppercase tracking-widest text-[#9AA1C0]">Travel Region</Label>
                              <select value={portalForm.categoryId} onChange={e => setPortalForm({...portalForm, categoryId: e.target.value})} className="w-full h-14 px-4 bg-[#0F1428]/60 border border-white/10 rounded-xl text-white font-medium outline-none">
                                <option value="">Select Region</option>
                                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                              </select>
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">Start Date</Label>
                                 <Input type="date" value={portalForm.startDate} onChange={e => setPortalForm({...portalForm, startDate: e.target.value})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white" />
                              </div>
                              <div className="space-y-2">
                                 <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">End Date</Label>
                                 <Input type="date" value={portalForm.endDate} onChange={e => setPortalForm({...portalForm, endDate: e.target.value})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white" />
                              </div>
                           </div>
                        </div>
                        <div className="space-y-8">
                           <div className="space-y-3">
                              <Label className="text-[11px] font-bold uppercase tracking-widest text-[#9AA1C0]">Traveller DOB</Label>
                              <Input type="date" value={portalForm.travelers[0].dob} onChange={e => setPortalForm({...portalForm, travelers: [{dob: e.target.value}]})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white" />
                           </div>
                           <div className="pt-4 flex justify-between items-center text-[#9AA1C0]">
                              <div className="space-y-1">
                                 <p className="text-[10px] uppercase font-bold tracking-widest">Duration</p>
                                 <p className="text-xl font-bold text-white">{calculatedDays} Days</p>
                              </div>
                              <div className="space-y-1 text-right">
                                 <p className="text-[10px] uppercase font-bold tracking-widest">Age</p>
                                 <p className="text-xl font-bold text-white">{primaryAge} Yrs</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <Button onClick={handleSearch} disabled={isLoading} className="w-full h-16 bg-[#F15A24] text-white hover:bg-white hover:text-black font-bold uppercase text-lg rounded-2xl shadow-2xl">
                        {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "GET QUOTE"}
                     </Button>
                  </CardContent>
               </Card>
            </div>
          )}

          {step === 'selection' && (
            <div className="space-y-10 animate-in fade-in duration-500 text-left relative z-10">
               <div className="flex items-center gap-4 mb-8">
                  <Button variant="ghost" onClick={() => setStep('search')} className="text-white">← Back</Button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {plans.map((plan, i) => (
                    <Card key={i} className="bg-[#171D3A]/60 backdrop-blur-xl border-white/10 rounded-3xl flex flex-col hover:border-[#E8A33D]/40 transition-all shadow-2xl overflow-hidden group">
                       <div className="p-8 border-b border-white/5">
                          <h3 className="font-bold text-xl text-white group-hover:text-[#E8A33D]">{plan.name}</h3>
                          <p className="text-[10px] font-bold uppercase text-[#4FD1C5] mt-1">{plan.insurer}</p>
                       </div>
                       <div className="p-8 flex-grow space-y-8">
                          <div className="flex justify-between items-baseline">
                             <p className="text-[10px] font-bold text-[#6E7495] uppercase">Premium</p>
                             <p className="text-4xl font-bold text-white">₹{plan.premium}</p>
                          </div>
                          <Button 
                            onClick={() => handleSelectPlan(plan)}
                            className="w-full h-14 bg-[#E8A33D] text-[#0F1428] font-bold uppercase text-[11px] rounded-2xl group-hover:bg-white"
                          >
                              SELECT PLAN
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
                  <Button variant="ghost" onClick={() => setStep('selection')} className="text-white">← Back</Button>
               </div>

               <div className="grid lg:grid-cols-[1fr_380px] gap-12">
                  <div className="space-y-8">
                     <section className="p-8 bg-[#171D3A]/40 border border-white/10 rounded-[32px] space-y-6 shadow-xl">
                        <h4 className="text-lg font-bold text-white flex items-center gap-3 border-b border-white/5 pb-4"><User className="w-5 h-5 text-[#4FD1C5]" /> 01. Personal Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">First Name</Label><Input value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Last Name</Label><Input value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Passport No</Label><Input value={formData.passport} onChange={e => setFormData({...formData, passport: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Mobile No</Label><Input value={formData.mobileNo} onChange={e => setFormData({...formData, mobileNo: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Gender</Label><Input value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        </div>
                        <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Email Address</Label><Input value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                     </section>

                     <section className="p-8 bg-[#171D3A]/40 border border-white/10 rounded-[32px] space-y-6 shadow-xl">
                        <h4 className="text-lg font-bold text-white flex items-center gap-3 border-b border-white/5 pb-4"><MapPin className="w-5 h-5 text-[#4FD1C5]" /> 02. Address & Nominee</h4>
                        <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Full Address</Label><Input value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">City</Label><Input value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">District</Label><Input value={formData.district} onChange={e => setFormData({...formData, district: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">State</Label><Input value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Pincode</Label><Input value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Nominee Name</Label><Input value={formData.nomineeName} onChange={e => setFormData({...formData, nomineeName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Relation</Label><Input value={formData.nomineeRelation} onChange={e => setFormData({...formData, nomineeRelation: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl h-12 text-white" /></div>
                        </div>
                     </section>
                  </div>

                  <div className="space-y-6">
                      <Card className="sticky top-28 p-8 bg-[#171D3A] border-white/10 rounded-[32px] space-y-10 shadow-2xl text-left">
                         <div className="space-y-4">
                            <div className="space-y-1">
                               <p className="text-[10px] font-bold text-[#6E7495] uppercase">Plan</p>
                               <p className="text-xl font-bold text-white">{selectedPlan.name}</p>
                            </div>
                            <div className="space-y-1">
                               <p className="text-[10px] font-bold text-[#6E7495] uppercase">Premium</p>
                               <p className="text-5xl font-bold text-white">₹{selectedPlan.premium}</p>
                            </div>
                         </div>
                         
                         <div className="space-y-3 pt-6 border-t border-white/5">
                            <Button 
                              onClick={handleValidate} 
                              disabled={isValidating || isIssuing} 
                              className={cn(
                                "w-full h-14 font-bold uppercase text-[10px] tracking-widest rounded-2xl",
                                isValidated ? "bg-green-600/20 text-green-500 border border-green-500/20" : "bg-white text-black hover:bg-[#E8A33D]"
                              )}
                            >
                               {isValidating ? <Loader2 className="w-4 h-4 animate-spin" /> : isValidated ? "SCHEMA VALIDATED" : "VALIDATE SCHEMA"}
                            </Button>
                            
                            <Button 
                              onClick={handleIssue} 
                              disabled={!isValidated || isIssuing} 
                              className="w-full h-16 bg-[#F15A24] text-white hover:bg-white hover:text-black font-bold uppercase text-lg rounded-2xl shadow-2xl"
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
                  <p className="text-xl text-[#9AA1C0]">Your travel protection is active.</p>
               </div>
               
               <Card className="bg-white/5 border-white/10 p-10 rounded-[32px] max-w-2xl mx-auto space-y-8 text-left">
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-[10px] font-bold text-[#6E7495] uppercase">Policy Number</p>
                        <p className="text-2xl font-bold text-[#4FD1C5] font-mono">{issuedPolicy?.policyNumber || "UAT-SUCCESS"}</p>
                     </div>
                     <div className="text-right">
                        <p className="text-[10px] font-bold text-[#6E7495] uppercase">Reference</p>
                        <p className="text-sm font-bold text-white font-mono">{orderId}</p>
                     </div>
                  </div>
                  <div className="pt-8 border-t border-white/10 flex items-center gap-3 text-xs text-[#9AA1C0]">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      <span>Coverage details have been sent to {formData.email}.</span>
                  </div>
               </Card>

               <div className="flex flex-col items-center gap-4 pt-12">
                  <Button onClick={handleCancel} disabled={isCancelling} variant="outline" className="text-red-400 border-red-500/30 hover:bg-red-500/10 h-12 px-10 rounded-full font-bold uppercase text-[10px]">
                    {isCancelling ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <XCircle className="w-4 h-4 mr-2" />} 
                    VOID POLICY (UAT TEST)
                  </Button>
                  <Button onClick={() => { setStep('search'); setSelectedPlan(null); setIssuedPolicy(null); }} variant="ghost" className="text-[#6E7495] hover:text-white uppercase text-[10px] font-bold">
                    <RotateCcw className="w-3 h-3 mr-2" /> New Search
                  </Button>
               </div>
            </div>
          )}
      </div>
    </div>
  );
}
