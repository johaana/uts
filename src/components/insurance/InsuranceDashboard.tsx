'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
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
  RotateCcw,
  Check,
  Zap,
  Trash2,
  Clock,
  Activity,
  ArrowRight
} from "lucide-react";
import { 
  getAsegoCategories, 
  getAsegoPlans, 
  cancelAsegoPolicy,
  AsegoCredentials,
  NormalizedPlan 
} from '@/app/international-insurance/actions';
import { orchestrateIssuance } from '@/app/international-insurance/orchestrator';
import { useToast } from '@/hooks/use-toast';
import { parseISO, differenceInDays, differenceInYears } from 'date-fns';
import Image from 'next/image';
import { useUser } from '@/firebase';

type Step = 'search' | 'selection' | 'form' | 'success';

export function InsuranceDashboard({ isDebug }: { isDebug: boolean }) {
  const { toast } = useToast();
  const { user } = useUser();
  
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
  const [manualPolicyNumber, setManualPolicyNumber] = useState('');

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

  const [traceHistory, setTraceHistory] = useState<any[]>([]);
  const [showTrace, setShowTrace] = useState(isDebug);

  const addTrace = (res: any) => {
    setTraceHistory(prev => [res, ...prev].slice(0, 5));
  };

  const fetchCategories = async () => {
    setIsConnecting(true);
    try {
      const res = await getAsegoCategories(creds);
      addTrace(res);
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
      addTrace(res);
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
  };

  const handleIssue = async () => {
    if (!selectedPlan || isIssuing || !user) return;
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
          endDate: portalForm.endDate
      };

      // AUTHENTICATED ORCHESTRATION (THE GHOST SALE FIX)
      const res = await orchestrateIssuance(payload, user.uid);
      
      if (res.success) {
        setIssuedPolicy({
            policyNumber: res.policyNumber,
            transactionId: res.transactionId
        });
        setStep('success');
        toast({ title: "Policy Issued Successfully" });
      } else {
         toast({ title: "Issuance Error", description: res.error, variant: "destructive" });
      }
    } catch (e: any) {
      toast({ title: "Critical Error", description: e.message, variant: "destructive" });
    } finally {
      setIsIssuing(false);
    }
  };

  const handleCancel = async (policyNo?: string) => {
    const pNo = policyNo || issuedPolicy?.policyNumber;
    if (!pNo || isCancelling) return;
    setIsCancelling(true);
    try {
      const res = await cancelAsegoPolicy(pNo, creds);
      addTrace(res);
      if (res.success) {
        toast({ title: "Policy Voided" });
        if (!policyNo) {
            setStep('search');
            setSelectedPlan(null);
            setIssuedPolicy(null);
        }
      } else if (res.data?.msg) {
         toast({ title: "Asego Error", description: res.data.msg, variant: "destructive" });
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
                <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Insurance Distribution</p>
                {isDebug && <Badge variant="outline" className="text-[8px] border-[#4FD1C5] text-[#4FD1C5]">FORENSIC_AUDIT_V6.5_ACTIVE</Badge>}
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium tracking-tighter leading-[1.05] text-white">
                  Global Travel<br/>
                  <span className="italic text-[#9AA1C0]">Assistance Platform</span>
              </h1>
          </div>
          
          <div className="flex gap-3">
              {isDebug && (
                <>
                  <Button variant="ghost" size="sm" onClick={() => setShowTrace(!showTrace)} className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", showTrace && "bg-white text-black")}>
                    <Terminal className="w-3 h-3 mr-2" /> Trace ({traceHistory.length})
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setShowGate(!showGate)} className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", showGate && "bg-[#E8A33D] text-black border-transparent")}>
                    <Lock className="w-3 h-3 mr-2" /> Session
                  </Button>
                </>
              )}
          </div>
      </div>

      {showTrace && traceHistory.length > 0 && (
        <Card className="bg-[#0B0F22] border-white/10 p-0 rounded-none font-mono text-[11px] animate-in fade-in slide-in-from-top-4 text-left relative z-20 shadow-2xl overflow-hidden">
           <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.02]">
              <span className="text-[12px] font-bold uppercase text-white tracking-widest flex items-center gap-3">
                <Activity className="w-4 h-4 text-[#4FD1C5]" /> 
                Forensic Trace
              </span>
           </div>
           <div className="divide-y divide-white/5 max-h-[400px] overflow-auto custom-scrollbar">
              {traceHistory.map((trace, i) => (
                <div key={trace.timestamp} className="p-6 opacity-60 hover:opacity-100 transition-opacity">
                   <div className="flex justify-between mb-4">
                      <Badge variant="outline" className="border-[#E8A33D] text-[#E8A33D] uppercase text-[9px]">{trace.actionLabel}</Badge>
                      <span className="text-[9px] text-[#6E7495]">{new Date(trace.timestamp).toLocaleTimeString()}</span>
                   </div>
                   <pre className="bg-[#050711] p-4 text-[9px] text-[#4FD1C5] overflow-auto">
                     {JSON.stringify(trace.data, null, 2)}
                   </pre>
                </div>
              ))}
           </div>
        </Card>
      )}

      {showGate && (
        <Card className="bg-[#171D3A] border border-[#E8A33D]/40 p-8 rounded-none shadow-2xl text-left relative z-30 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { k: 'partnerId', l: 'Partner ID' },
                  { k: 'sign', l: 'Sign' },
                  { k: 'reference', l: 'Reference' }
                ].map(f => (
                  <div key={f.k} className="space-y-1.5">
                    <Label className="text-[8px] font-bold uppercase tracking-widest text-[#6E7495]">{f.l}</Label>
                    <Input type={showSecrets ? "text" : "password"} value={(creds as any)[f.k]} onChange={e => setCreds({...creds, [f.k]: e.target.value})} className="bg-[#0F1428] border-white/10 h-11 text-xs rounded-none text-white" />
                  </div>
                ))}
            </div>
            <div className="flex gap-4">
                <Button onClick={fetchCategories} disabled={isConnecting} className="bg-white text-black font-bold rounded-none uppercase text-[10px] tracking-widest h-12 px-8">
                  {isConnecting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Init Session"}
                </Button>
                <Button variant="ghost" onClick={() => setShowSecrets(!showSecrets)} className="text-white text-[9px] font-bold uppercase tracking-widest">
                  {showSecrets ? <EyeOff className="w-3 h-3 mr-2" /> : <Eye className="w-3 h-3 mr-2" />} Secrets
                </Button>
            </div>
        </Card>
      )}

      <div className="relative min-h-[600px]">
          {step === 'search' && (
            <div className="relative min-h-[600px] flex items-center justify-center animate-in fade-in duration-700">
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
                        <h4 className="text-lg font-bold text-white flex items-center gap-3 border-b border-white/5 pb-4"><User className="w-5 h-5 text-[#4FD1C5]" /> Personal Details</h4>
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
                  </div>

                  <div className="space-y-6">
                      <Card className="sticky top-28 p-8 bg-[#171D3A] border-white/10 rounded-[32px] space-y-10 shadow-2xl text-left">
                         <div className="space-y-4">
                            <div className="space-y-1">
                               <p className="text-[10px] font-bold text-[#6E7495] uppercase">Selected Coverage</p>
                               <p className="text-xl font-bold text-white">{selectedPlan.name}</p>
                            </div>
                            <div className="space-y-1">
                               <p className="text-[10px] font-bold text-[#6E7495] uppercase">Total Amount</p>
                               <p className="text-5xl font-bold text-white">₹{selectedPlan.premium}</p>
                            </div>
                         </div>
                         <Button 
                            onClick={handleIssue} 
                            disabled={isIssuing || !user} 
                            className="w-full h-16 bg-[#F15A24] text-white hover:bg-white hover:text-black font-bold uppercase text-lg rounded-2xl shadow-2xl transition-all active:scale-[0.98]"
                          >
                             {isIssuing ? <Loader2 className="w-6 h-6 animate-spin" /> : "ISSUE POLICY"}
                          </Button>
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
                  <p className="text-xl text-[#9AA1C0]">The internal transaction record has been established.</p>
               </div>
               
               <div className="flex flex-col items-center gap-4 pt-12">
                  <Button onClick={() => { setStep('search'); setSelectedPlan(null); setIssuedPolicy(null); }} variant="outline" className="h-12 px-10 rounded-full font-bold uppercase text-[10px] text-white border-white/10">
                    <RotateCcw className="w-3 h-3 mr-2" /> New Application
                  </Button>
               </div>
            </div>
          )}
      </div>
    </div>
  );
}
