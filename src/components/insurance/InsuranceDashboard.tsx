
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
  User, 
  CheckCircle2, 
  RotateCcw,
  ArrowRight
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
    }
    setIsLoading(false);
  };

  const handleIssue = async () => {
    if (!selectedPlan || isIssuing || !user) return;
    setIsIssuing(true);
    try {
      const token = await user.getIdToken();
      const idempotencyKey = `IDEM-${Date.now()}`;
      
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
          endDate: portalForm.endDate
      };

      const res = await orchestrateIssuance(payload, token, idempotencyKey);
      if (res.success) {
        setIssuedPolicy({ policyNumber: res.policyNumber });
        setStep('success');
      } else {
        toast({ title: "Error", description: res.error, variant: "destructive" });
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
             <Image src="https://i.postimg.cc/xqLH4nQz/Accessories-for-Airport-Travel.jpg" layout="fill" objectFit="cover" alt="Travel" />
             <div className="absolute inset-0 bg-gradient-to-br from-[#0F1428]/95 via-[#0F1428]/40 to-transparent" />
           </div>
           <Card className="relative z-10 w-full max-w-5xl bg-[#171D3A]/80 backdrop-blur-2xl border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
              <CardContent className="p-8 md:p-12 space-y-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-8">
                       <div className="space-y-3">
                          <Label className="text-[11px] font-bold uppercase tracking-widest text-[#9AA1C0]">Region</Label>
                          <select value={portalForm.categoryId} onChange={e => setPortalForm({...portalForm, categoryId: e.target.value})} className="w-full h-14 px-4 bg-[#0F1428]/60 border border-white/10 rounded-xl text-white outline-none">
                            <option value="">Select Region</option>
                            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                          </select>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                             <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">Start</Label>
                             <Input type="date" value={portalForm.startDate} onChange={e => setPortalForm({...portalForm, startDate: e.target.value})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white" />
                          </div>
                          <div className="space-y-2">
                             <Label className="text-[10px] font-bold uppercase text-[#9AA1C0]">End</Label>
                             <Input type="date" value={portalForm.endDate} onChange={e => setPortalForm({...portalForm, endDate: e.target.value})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white" />
                          </div>
                       </div>
                    </div>
                    <div className="space-y-8">
                       <div className="space-y-3">
                          <Label className="text-[11px] font-bold uppercase tracking-widest text-[#9AA1C0]">Date of Birth</Label>
                          <Input type="date" value={portalForm.travelers[0].dob} onChange={e => setPortalForm({...portalForm, travelers: [{dob: e.target.value}]})} className="h-14 bg-[#0F1428]/60 border-white/10 rounded-xl text-white" />
                       </div>
                    </div>
                 </div>
                 <Button onClick={handleSearch} disabled={isLoading} className="w-full h-16 bg-[#F15A24] font-bold uppercase text-lg rounded-2xl">
                    {isLoading ? <Loader2 className="animate-spin" /> : "SEARCH PLANS"}
                 </Button>
              </CardContent>
           </Card>
        </div>
      )}

      {step === 'selection' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in text-left">
           {plans.map((plan, i) => (
             <Card key={i} className="bg-[#171D3A]/60 backdrop-blur-xl border-white/10 rounded-3xl p-8 space-y-6">
                <h3 className="font-bold text-xl text-white">{plan.name}</h3>
                <p className="text-4xl font-bold text-white">₹{plan.premium}</p>
                <Button onClick={() => handleSelectPlan(plan)} className="w-full h-12 bg-[#E8A33D] text-black font-bold uppercase text-xs">SELECT</Button>
             </Card>
           ))}
        </div>
      )}

      {step === 'form' && (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in text-left">
           <section className="p-8 bg-[#171D3A]/40 border border-white/10 rounded-[32px] space-y-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-3"><User className="w-5 h-5 text-[#4FD1C5]" /> Traveller Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">First Name</Label><Input value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-12" /></div>
                 <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Passport</Label><Input value={formData.passport} onChange={e => setFormData({...formData, passport: e.target.value})} className="bg-[#0F1428]/40 border-white/10 h-12" /></div>
              </div>
              <Button onClick={handleIssue} disabled={isIssuing || !user} className="w-full h-16 bg-[#F15A24] font-bold text-lg rounded-2xl">
                 {isIssuing ? <Loader2 className="animate-spin" /> : "ISSUE POLICY"}
              </Button>
           </section>
        </div>
      )}

      {step === 'success' && (
        <div className="text-center py-20 space-y-8 animate-in zoom-in-95">
           <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto"><CheckCircle2 className="w-10 h-10 text-green-500" /></div>
           <h2 className="text-4xl font-serif font-bold">Policy Issued</h2>
           <p className="text-[#9AA1C0]">Policy Number: <b>{issuedPolicy?.policyNumber}</b></p>
           <Button onClick={() => setStep('search')} variant="outline" className="h-12 px-10 rounded-full">New Search</Button>
        </div>
      )}
    </div>
  );
}
