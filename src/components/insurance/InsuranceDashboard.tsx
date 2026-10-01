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
  Plane, 
  Lock,
  Terminal,
  Eye,
  EyeOff,
  Zap,
  User,
  MapPin,
  RefreshCw,
  Search,
  Activity,
  UserCircle,
  Code,
  ShieldQuestion,
  ExternalLink
} from "lucide-react";
import { 
  getAsegoCategories, 
  getAsegoPlans, 
  getAsegoPlanDetails, 
  validateAsegoPolicy,
  createAsegoPolicy,
  interrogateAsegoEndpoint,
  AsegoCredentials,
  NormalizedPlan 
} from '@/app/international-insurance/actions';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { parseISO, differenceInDays, differenceInYears } from 'date-fns';
import Image from 'next/image';

type Step = 'search' | 'selection' | 'form' | 'success';
type ViewMode = 'journey' | 'console' | 'blueprint';

export function InsuranceDashboard({ isDebug }: { isDebug: boolean }) {
  const { toast } = useToast();
  
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

  const [portalForm, setPortalForm] = useState({
    categoryId: '',
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
    district: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    country: "India",
    nomineeName: "Jane Doe",
    nomineeRelation: "Spouse",
  });

  const [isValidating, setIsValidating] = useState(false);
  const [issuedPolicy, setIssuedPolicy] = useState<any>(null);
  const [lastTrace, setLastTrace] = useState<any>(null);
  const [showTrace, setShowTrace] = useState(false);

  const isSessionActive = !!(creds.partnerId.trim() && creds.sign.trim() && creds.reference.trim());

  const fetchCategories = async () => {
    setIsConnecting(true);
    const res = await getAsegoCategories(creds);
    setLastTrace(res);
    if (res.success && Array.isArray(res.data)) {
      setCategories(res.data);
      toast({ title: "Connection Successful" });
    }
    setIsConnecting(false);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
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
      detailId: "UAT-SIM-DETAIL-001"
    };
    setPlans([mockPlan]);
    setStep('selection');
  };

  const handleValidate = async () => {
    setIsValidating(true);
    const orderId = `UTS-VAL-${Math.floor(Date.now() / 1000)}`;
    const payload = { 
        ...formData, 
        planId: selectedPlan?.planId, 
        detailId: selectedPlan?.detailId, 
        totalPremium: selectedPlan?.premium,
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
      toast({ title: "Validation Success", description: "Payload matches Asego schema." });
    } else {
      toast({ title: "Validation Error", variant: "destructive" });
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
              <Button variant="ghost" size="sm" onClick={() => setShowTrace(!showTrace)} className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", showTrace && "bg-white text-black")}>
                <Terminal className="w-3 h-3 mr-2" /> Trace
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowGate(!showGate)} className={cn("text-[9px] uppercase tracking-widest font-bold border h-8 rounded-none", isSessionActive ? "text-green-500 border-green-500/20" : "text-[#E8A33D] border-[#E8A33D]/20")}>
                <Lock className="w-3 h-3 mr-2" /> Config
              </Button>
          </div>
      </div>

      <div className="flex bg-[#0B0F22] p-1 rounded-none border border-white/10 w-fit relative z-10">
        <button onClick={() => setViewMode('journey')} className={cn("px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all", viewMode === 'journey' ? "bg-white text-[#0F1428]" : "text-[#6E7495] hover:text-white")}>
          <UserCircle className="w-3.5 h-3.5 inline mr-2" /> Simulation: Customer View
        </button>
        <button onClick={() => setViewMode('blueprint')} className={cn("px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all", viewMode === 'blueprint' ? "bg-white text-[#0F1428]" : "text-[#6E7495] hover:text-white")}>
          <Code className="w-3.5 h-3.5 inline mr-2" /> Policy Blueprint
        </button>
      </div>

      {showTrace && lastTrace && (
        <Card className="bg-[#0B0F22] border-[#4FD1C5]/40 p-8 rounded-none font-mono text-[11px] animate-in fade-in slide-in-from-top-4 text-left relative z-20 shadow-2xl">
           <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <div className="flex items-center gap-3">
                 <span className="text-[9px] font-bold uppercase text-[#4FD1C5]">Forensic_Trace_v4.8.log</span>
                 <Badge variant="outline" className="text-[9px] border-white/10 uppercase py-0">{lastTrace.status} {lastTrace.success ? 'OK' : 'ERROR'}</Badge>
              </div>
           </div>
           <pre className="text-[#4FD1C5] overflow-auto max-h-[400px] bg-white/[0.02] p-6 border border-white/5">
             {typeof (lastTrace.raw || lastTrace.data) === 'string' ? (lastTrace.raw || lastTrace.data) : JSON.stringify(lastTrace.raw || lastTrace.data, null, 2)}
           </pre>
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
               <Button onClick={simulateWorkingPlan} className="bg-white/5 border border-white/10 text-white font-bold rounded-none uppercase text-[10px] tracking-widest h-12 px-8">
                  Simulate Mock Plan
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
                                <option value="">{categories.length > 0 ? "Select Region" : "Handshake required..."}</option>
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
                        </div>
                     </div>
                     <Button onClick={handleSearch} disabled={isLoading} className="w-full h-16 bg-[#F15A24] text-white hover:bg-white hover:text-black font-bold uppercase text-lg tracking-[0.1em] rounded-2xl shadow-2xl">
                        {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "GET QUOTE"}
                     </Button>
                  </CardContent>
               </Card>
            </div>
          )}

          {viewMode === 'journey' && step === 'selection' && (
            <div className="space-y-10 animate-in fade-in duration-500 text-left relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {plans.map((plan, i) => (
                    <Card key={i} className="bg-[#171D3A]/60 backdrop-blur-xl border-white/10 rounded-3xl flex flex-col hover:border-[#E8A33D]/40 transition-all shadow-2xl overflow-hidden">
                       <div className="p-8 border-b border-white/5 bg-white/5">
                          <h3 className="font-bold text-xl text-white leading-tight">{plan.name}</h3>
                          <p className="text-[10px] font-bold uppercase text-[#4FD1C5] mt-1">{plan.insurer}</p>
                       </div>
                       <div className="p-8 flex-grow space-y-6">
                          <div className="flex justify-between items-baseline">
                             <p className="text-[10px] font-bold text-[#6E7495] uppercase">Premium</p>
                             <p className="text-4xl font-bold text-white">₹{plan.premium}</p>
                          </div>
                          <Button onClick={() => { setSelectedPlan(plan); setStep('form'); }} className="w-full h-14 bg-[#E8A33D] text-[#0F1428] font-bold uppercase text-[11px] tracking-[0.2em] rounded-2xl">Choose Plan</Button>
                       </div>
                    </Card>
                  ))}
               </div>
            </div>
          )}

          {viewMode === 'journey' && step === 'form' && selectedPlan && (
            <div className="space-y-10 animate-in fade-in duration-700 text-left relative z-10">
               <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                     <section className="p-8 bg-[#171D3A]/40 border border-white/10 rounded-[32px] space-y-6 shadow-xl">
                        <h4 className="text-lg font-bold text-white flex items-center gap-3"><User className="w-5 h-5 text-[#4FD1C5]" /> Personal Details</h4>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase text-[#6E7495]">First Name</Label><Input value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase text-[#6E7495]">Last Name</Label><Input value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl" /></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase text-[#6E7495]">Passport</Label><Input value={formData.passportNo} onChange={e => setFormData({...formData, passportNo: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase text-[#6E7495]">Gender</Label><Input value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl" /></div>
                        </div>
                     </section>
                     <section className="p-8 bg-[#171D3A]/40 border border-white/10 rounded-[32px] space-y-6 shadow-xl">
                        <h4 className="text-lg font-bold text-white flex items-center gap-3"><MapPin className="w-5 h-5 text-[#4FD1C5]" /> Address & Nominee</h4>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase text-[#6E7495]">District</Label><Input value={formData.district} onChange={e => setFormData({...formData, district: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl" /></div>
                           <div className="space-y-1.5"><Label className="text-[9px] uppercase text-[#6E7495]">Country</Label><Input value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} className="bg-[#0F1428]/40 border-white/10 rounded-xl" /></div>
                        </div>
                     </section>
                  </div>
                  <div className="space-y-6">
                      <Card className="p-8 bg-[#171D3A] border-white/10 rounded-[32px] space-y-8">
                         <div className="space-y-1">
                            <p className="text-[10px] font-bold text-[#6E7495] uppercase">Total Premium</p>
                            <p className="text-5xl font-bold text-white">₹{selectedPlan.premium}</p>
                         </div>
                         <div className="space-y-3">
                            <Button onClick={handleValidate} disabled={isValidating} className="w-full h-14 bg-white text-[#0F1428] font-bold uppercase text-[10px] tracking-widest rounded-2xl">
                               {isValidating ? <Loader2 className="w-4 h-4 animate-spin" /> : "Validate Schema"}
                            </Button>
                            <p className="text-[10px] text-center text-[#6E7495] uppercase font-bold tracking-widest">Perform validation before issuance</p>
                         </div>
                      </Card>
                  </div>
               </div>
            </div>
          )}

          {viewMode === 'blueprint' && (
            <div className="p-8 space-y-12 animate-in fade-in duration-500 text-left relative z-10 bg-[#0B0F22] border border-white/10 rounded-3xl min-h-[800px]">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="p-6 bg-white/5 rounded-2xl space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5] border-b border-[#4FD1C5]/20 pb-2">Schema Strategy</h4>
                    <ul className="space-y-3 text-xs font-mono text-white/80">
                       <li className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-[#4FD1C5]" /> Array-wrapped Payload</li>
                       <li className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-[#4FD1C5]" /> Embedded Identity Obj</li>
                       <li className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-[#4FD1C5]" /> Quotation Nested Dates</li>
                    </ul>
                 </div>
                 <div className="p-6 bg-white/5 rounded-2xl space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D] border-b border-[#E8A33D]/20 pb-2">Required Fields</h4>
                    <ul className="space-y-3 text-xs font-mono text-white/60">
                       <li>District & Country (Traveler)</li>
                       <li>FinalPremium (Traveler)</li>
                       <li>InsurerId (Plan)</li>
                    </ul>
                 </div>
                 <div className="p-6 bg-[#E8A33D]/5 rounded-2xl space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]"><Info className="w-4 h-4 inline mr-2" /> Forensic Log</h4>
                    <p className="text-xs text-[#9AA1C0] leading-relaxed italic">"Check server logs for the PLAINTEXT_PAYLOAD_BEFORE_ENCRYPTION dump to verify 1:1 Swagger mapping."</p>
                 </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
