
'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  Loader2, 
  User as UserIcon, 
  CheckCircle2, 
  RotateCcw,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { 
  getAsegoCategories, 
  getAsegoPlans, 
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
  const [categories, setCategories] = useState<any[]>([]);
  const [plans, setPlans] = useState<NormalizedPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<NormalizedPlan | null>(null);
  const [issuedPolicy, setIssuedPolicy] = useState<any>(null);

  // Generate Idempotency Key once per form session
  const [sessionKey, setSessionKey] = useState("");
  const regenerateKey = useCallback(() => {
    setSessionKey(`IDEM-${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
  }, []);

  useEffect(() => {
    if (step === 'search') regenerateKey();
  }, [step, regenerateKey]);

  const [portalForm, setPortalForm] = useState({
    categoryId: '',
    startDate: '',
    endDate: '',
    travelers: [{ dob: '1997-01-01' }]
  });

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
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

  useEffect(() => {
    const creds = { partnerId: '', sign: '', reference: '' };
    getAsegoCategories(creds).then(res => {
      if (res.success) setCategories(res.data);
    });
  }, []);

  const calculatedDays = useMemo(() => {
    if (!portalForm.startDate || !portalForm.endDate) return 0;
    const start = parseISO(portalForm.startDate);
    const end = parseISO(portalForm.endDate);
    return Math.max(0, differenceInDays(end, start));
  }, [portalForm.startDate, portalForm.endDate]);

  const primaryAge = useMemo(() => {
    if (!portalForm.travelers[0]?.dob) return 27;
    return differenceInYears(new Date(), parseISO(portalForm.travelers[0].dob));
  }, [portalForm.travelers]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await getAsegoPlans({
      age: primaryAge.toString(),
      duration: calculatedDays.toString(),
      categoryId: portalForm.categoryId
    }, { partnerId: '', sign: '', reference: '' });
    if (res.success) {
      setPlans(res.data);
      setStep('selection');
    } else {
      toast({ title: "Search Failed", description: res.error, variant: "destructive" });
    }
    setIsLoading(false);
  };

  const handleSelectPlan = (plan: NormalizedPlan) => {
    setSelectedPlan(plan);
    setStep('form');
  };

  const handleIssue = async () => {
    if (!selectedPlan || isIssuing || !user) return;
    setIsIssuing(true);
    try {
      const token = await user.getIdToken();
      
      const payload = { 
          ...formData,
          name: `${formData.firstName} ${formData.lastName}`,
          planId: selectedPlan.planId, 
          insurerId: selectedPlan.insurerId,
          premium: selectedPlan.premium,
          age: primaryAge,
          duration: calculatedDays,
          categoryId: portalForm.categoryId,
          startDate: portalForm.startDate,
          endDate: portalForm.endDate,
          dob: portalForm.travelers[0].dob
      };

      const res = await orchestrateIssuance(payload, token, sessionKey);
      if (res.success) {
        setIssuedPolicy({ policyNumber: res.policyNumber });
        setStep('success');
      } else {
        // Critical: Do not regenerate key on PROVIDER_STATUS_UNKNOWN
        if (res.error !== 'PROVIDER_STATUS_UNKNOWN') regenerateKey();
        
        toast({ 
            title: res.error === 'PROVIDER_STATUS_UNKNOWN' ? "Status Unknown" : "Issuance Failed", 
            description: res.error === 'PROVIDER_STATUS_UNKNOWN' 
                ? "Transaction reference recorded. Do NOT retry. Contact support." 
                : res.msg || res.error, 
            variant: "destructive" 
        });
      }
    } finally {
      setIsIssuing(false);
    }
  };

  return (
    <div className="space-y-12">
      {step === 'search' && (
        <div className="relative min-h-[600px] flex items-center justify-center animate-in fade-in duration-700">
           <div className="absolute inset-0 z-0 rounded-[40px] overflow-hidden grayscale-[30%] opacity-60">
             <Image src="https://i.postimg.cc/xqLH4nQz/Accessories-for-Airport-Travel.jpg" fill style={{ objectFit: 'cover' }} alt="Travel" />
             <div className="absolute inset-0 bg-gradient-to-br from-[#0F1428]/95 via-[#0F1428]/40 to-transparent" />
           </div>
           <Card className="relative z-10 w-full max-w-5xl bg-[#171D3A]/80 backdrop-blur-2xl border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
              <CardContent className="p-8 md:p-12 space-y-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-8">
                       <div className="space-y-3">
                          <Label className="text-[11px] font-bold uppercase tracking-widest text-[#9AA1C0]">Destination Region</Label>
                          <select value={portalForm.categoryId} onChange={e => setPortalForm({...portalForm, categoryId: e.target.value})} className="w-full h-14 px-4 bg-[#0F1428]/60 border border-white/10 rounded-xl text-white outline-none">
                            <option value="">Select Region</option>
                            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                          </select>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                             <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">Travel Start</Label>
                             <Input type="date" value={portalForm.startDate} onChange={e => setPortalForm({...portalForm, startDate: e.target.value})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white" />
                          </div>
                          <div className="space-y-2">
                             <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">Travel End</Label>
                             <Input type="date" value={portalForm.endDate} onChange={e => setPortalForm({...portalForm, endDate: e.target.value})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white" />
                          </div>
                       </div>
                    </div>
                    <div className="space-y-8">
                       <div className="space-y-3">
                          <Label className="text-[11px] font-bold uppercase tracking-widest text-[#9AA1C0]">Primary Traveler DOB</Label>
                          <Input type="date" value={portalForm.travelers[0].dob} onChange={e => setPortalForm({...portalForm, travelers: [{dob: e.target.value}]})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white" />
                       </div>
                    </div>
                 </div>
                 <Button onClick={handleSearch} disabled={isLoading} className="w-full h-16 bg-[#F15A24] font-bold uppercase text-lg rounded-2xl shadow-xl hover:scale-[1.01] transition-all">
                    {isLoading ? <Loader2 className="animate-spin" /> : "SEARCH PLANS"}
                 </Button>
              </CardContent>
           </Card>
        </div>
      )}

      {step === 'selection' && (
        <div className="space-y-8 animate-in fade-in text-left">
           <div className="flex items-center justify-between">
              <h2 className="text-3xl font-headline font-bold">Select Plan</h2>
              <Button variant="ghost" onClick={() => setStep('search')} className="text-muted-dim uppercase font-bold text-[10px] tracking-widest"><RotateCcw className="mr-2 h-3.5 w-3.5" /> Back to search</Button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <Card key={i} className="bg-[#171D3A]/60 backdrop-blur-xl border-white/10 rounded-3xl p-8 space-y-6 flex flex-col justify-between group hover:border-[#E8A33D] transition-all">
                   <div className="space-y-2">
                      <h3 className="font-bold text-xl text-white">{plan.name}</h3>
                      <Badge variant="outline" className="text-[9px] uppercase tracking-widest border-white/10 text-[#4FD1C5]">{plan.insurer}</Badge>
                   </div>
                   <div className="space-y-4">
                      <p className="text-4xl font-bold text-white">₹{plan.premium}</p>
                      <Button onClick={() => handleSelectPlan(plan)} className="w-full h-12 bg-white text-black font-bold uppercase text-xs group-hover:bg-[#E8A33D]">SELECT</Button>
                   </div>
                </Card>
              ))}
           </div>
        </div>
      )}

      {step === 'form' && (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in text-left">
           <div className="flex items-center justify-between">
              <h2 className="text-3xl font-headline font-bold">Traveler Information</h2>
              <Button variant="ghost" onClick={() => setStep('selection')} className="text-muted-dim uppercase font-bold text-[10px] tracking-widest"><RotateCcw className="mr-2 h-3.5 w-3.5" /> Back to plans</Button>
           </div>
           <section className="p-8 bg-[#171D3A]/40 border border-white/10 rounded-[32px] space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                 <UserIcon className="w-5 h-5 text-[#4FD1C5]" />
                 <h4 className="text-lg font-bold text-white">Identity & Contact</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <Label className="text-[9px] uppercase font-bold text-[#6E7495]">First Name (as per Passport)</Label>
                    <Input value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14" />
                 </div>
                 <div className="space-y-2">
                    <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Last Name</Label>
                    <Input value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14" />
                 </div>
                 <div className="space-y-2">
                    <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Passport Number</Label>
                    <Input value={formData.passport} onChange={e => setFormData({...formData, passport: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14" />
                 </div>
                 <div className="space-y-2">
                    <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Email Address</Label>
                    <Input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14" />
                 </div>
              </div>
              
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 pt-4">
                 <ShieldCheck className="w-5 h-5 text-[#E8A33D]" />
                 <h4 className="text-lg font-bold text-white">Nominee Details</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Nominee Full Name</Label>
                    <Input value={formData.nomineeName} onChange={e => setFormData({...formData, nomineeName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14" />
                 </div>
                 <div className="space-y-2">
                    <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Relationship</Label>
                    <Input value={formData.nomineeRelation} onChange={e => setFormData({...formData, nomineeRelation: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-14" />
                 </div>
              </div>

              <div className="pt-6">
                 <Button onClick={handleIssue} disabled={isIssuing || !user} className="w-full h-16 bg-[#F15A24] font-bold text-lg rounded-2xl shadow-2xl hover:scale-[1.01] transition-all">
                    {isIssuing ? <Loader2 className="animate-spin" /> : "FINALIZE & ISSUE POLICY"}
                 </Button>
                 {!user && <p className="text-center text-xs text-red-400 mt-4 font-bold uppercase tracking-widest">Authentication Required to Issue</p>}
              </div>
           </section>
        </div>
      )}

      {step === 'success' && (
        <div className="text-center py-20 space-y-10 animate-in zoom-in-95">
           <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(34,197,94,0.2)]">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
           </div>
           <div className="space-y-4">
              <h2 className="text-5xl font-serif font-bold">Policy Issued</h2>
              <p className="text-xl text-[#9AA1C0] max-w-md mx-auto">Your international travel protection is now active.</p>
           </div>
           <div className="p-8 bg-[#171D3A]/40 border border-white/10 rounded-[32px] max-w-lg mx-auto space-y-4">
              <div className="flex justify-between items-center text-sm">
                 <span className="text-[#6E7495] font-bold uppercase tracking-widest">Policy No</span>
                 <span className="font-mono text-white font-bold">{issuedPolicy?.policyNumber}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                 <span className="text-[#6E7495] font-bold uppercase tracking-widest">Status</span>
                 <Badge className="bg-green-500 text-black font-bold">ACTIVE</Badge>
              </div>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button onClick={() => setStep('search')} variant="outline" className="h-14 px-10 rounded-full border-white/10 text-white font-bold uppercase tracking-widest text-xs">New Search</Button>
              <Button asChild className="h-14 px-10 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs">
                 <Link href="/management">View in Ledger <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
           </div>
        </div>
      )}
    </div>
  );
}
