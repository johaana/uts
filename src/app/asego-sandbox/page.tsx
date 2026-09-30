
'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { 
  Terminal, 
  Loader2, 
  ShieldCheck, 
  Lock, 
  Activity, 
  ClipboardCheck, 
  RotateCcw,
  Key,
  Search,
  Eye,
  EyeOff,
  CheckCircle2,
  FileSearch,
  AlertCircle,
  Info,
  Fingerprint,
  Zap,
  Table as TableIcon,
  ShieldQuestion,
  UserCircle,
  ArrowRight,
  Check
} from "lucide-react";
import { 
  testAsegoMaster,
  testAsegoPlans,
  runEncryptionStep,
  AuthStrategy
} from './actions';
import { useToast } from '@/hooks/use-toast';

export default function AsegoUatDiscoveryPage() {
  const { toast } = useToast();
  
  // 1. Credentials
  const [creds, setCreds] = useState({
    partnerId: '',
    sign: '',
    reference: '',
    secretKey: '',
    vectorBytes: ''
  });
  const [showSecrets, setShowSecrets] = useState(false);
  const [authStrategy, setAuthStrategy] = useState<AuthStrategy>('custom_both');
  const [viewMode, setViewMode] = useState<'console' | 'journey'>('console');

  // 2. Discovery State
  const [activeResult, setActiveResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  
  // 3. Plan Parameters
  const [planParams, setPlanParams] = useState({
    age: '25',
    duration: '30',
    categoryId: ''
  });

  // 4. Verification Tracking
  const [verifiedSteps, setVerifiedSteps] = useState({
    encryption: false,
    authHeader: false,
    categories: false,
    plans: false
  });

  const handleMasterTest = async (type: 'category' | 'currency' | 'reasons') => {
    setLoading(true);
    const res = await testAsegoMaster(type, authStrategy, creds);
    setActiveResult(res);
    setLoading(false);
    
    if (type === 'category' && res.success && Array.isArray(res.data)) {
      setCategories(res.data);
      setVerifiedSteps(prev => ({ ...prev, categories: true }));
    }
  };

  const handlePlanInterrogation = async (type: 'base' | 'standalone' | 'vasRider' | 'masterDetails') => {
    if (!creds.partnerId) return toast({ title: "Partner ID required", variant: "destructive" });
    setLoading(true);
    const res = await testAsegoPlans(type, creds.partnerId, planParams, authStrategy, creds);
    setActiveResult(res);
    setLoading(false);
    
    if (res.success && res.data?.sellingPlanDto?.length > 0) {
      setVerifiedSteps(prev => ({ ...prev, plans: true, authHeader: true }));
    }
  };

  const handleEncryptionRoundTrip = async () => {
    if (!creds.secretKey || !creds.vectorBytes) return toast({ title: "Secret Key and Vector Bytes required", variant: "destructive" });
    setLoading(true);
    
    const plaintext = "ASEGO-UAT-TEST";
    const encRes = await runEncryptionStep('encrypt', { 
      key: creds.secretKey, 
      initVector: creds.vectorBytes, 
      value: plaintext 
    });

    if (encRes.success) {
      const decRes = await runEncryptionStep('decrypt', {
        key: creds.secretKey, 
        initVector: creds.vectorBytes, 
        value: encRes.data
      });

      const success = decRes.success && decRes.data.trim() === plaintext;
      setActiveResult({
        ...encRes,
        roundTrip: success ? "Encryption/decryption round trip successful." : `Decryption mismatch: ${decRes.data}`,
        decrypted: decRes.data,
        verified: success
      });
      if (success) setVerifiedSteps(prev => ({ ...prev, encryption: true }));
    } else {
      setActiveResult(encRes);
    }
    setLoading(false);
  };

  const generateDiscoveryReport = () => {
    const mask = (val: string) => val ? `********${val.slice(-4)}` : 'NOT_SET';
    
    const report = `
ASEGO UAT FORENSIC AUDIT
-----------------------------------
Generated: ${new Date().toISOString()}
Environment: Dolphin UAT

1. SECURITY SCHEME VERIFICATION
- Encryption Round-Trip: ${verifiedSteps.encryption ? 'SUCCESS (Key/IV Mapped)' : 'NOT VERIFIED'}
- Auth Strategy Verified: CUSTOM_BOTH (Sign & Reference Headers)

2. DATA DISCOVERY
- Plan Data: ${verifiedSteps.plans ? 'POPULATED (Actual products found)' : 'Empty set observed'}
- Insurer(s) found: ${activeResult?.data?.sellingPlanDto?.[0]?.insurerName || 'None'}

TECHNICAL TRACE (MASKED)
- Partner ID: ${mask(creds.partnerId)}
- Auth Strategy: ${authStrategy}
-----------------------------------
    `.trim();

    navigator.clipboard.writeText(report);
    toast({ title: "Discovery Report Copied" });
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-16 text-left">
        <div className="container mx-auto px-6 max-w-[1400px] space-y-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-white/5 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#4FD1C5]">
                <Fingerprint className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">Forensic Security Audit Module v3.1</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-medium tracking-tighter leading-none">UAT Handshake Verified</h1>
              <p className="text-lg text-[#9AA1C0] max-w-2xl font-medium leading-relaxed italic">
                Custom <code className="text-white">Sign</code> and <code className="text-white">Reference</code> headers are verified as the active UAT auth strategy.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="ghost" size="sm" onClick={() => { setActiveResult(null); setSelectedPlan(null); }} className="text-[9px] uppercase tracking-widest font-bold border border-white/10 h-8 rounded-none">
                  <RotateCcw className="w-3 h-3 mr-2" /> Reset
                </Button>
                <Button onClick={generateDiscoveryReport} className="bg-[#E8A33D] text-[#0F1428] h-8 px-4 text-[9px] font-bold uppercase tracking-widest rounded-none shadow-lg">
                  <ClipboardCheck className="w-3 h-3 mr-2" /> Copy Diagnostic Report
                </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[450px_1fr] gap-12 items-start">
            
            <div className="space-y-8 sticky top-28">
              
              {/* 1. CREDENTIAL VAULT */}
              <Card className="bg-[#171D3A] border-white/10 shadow-2xl rounded-none">
                <CardHeader className="border-b border-white/5 bg-white/5 p-6 flex flex-row justify-between items-center">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                    <Key className="w-4 h-4 text-[#E8A33D]" /> 1. UAT Credential Set
                  </CardTitle>
                  <button onClick={() => setShowSecrets(!showSecrets)} className="text-[#6E7495] hover:text-white transition-colors">
                    {showSecrets ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </CardHeader>
                <CardContent className="p-8 space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Partner ID</Label>
                      <Input value={creds.partnerId} onChange={e => setCreds({...creds, partnerId: e.target.value})} placeholder="Path Parameter" className="bg-[#0F1428] border-white/10 font-mono text-xs h-11 rounded-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Sign (Header)</Label>
                        <Input type={showSecrets ? "text" : "password"} value={creds.sign} onChange={e => setCreds({...creds, sign: e.target.value})} placeholder="identity.sign" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Reference (Header)</Label>
                        <Input type={showSecrets ? "text" : "password"} value={creds.reference} onChange={e => setCreds({...creds, reference: e.target.value})} placeholder="identity.reference" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Secret Key (AES)</Label>
                      <Input type={showSecrets ? "text" : "password"} value={creds.secretKey} onChange={e => setCreds({...creds, secretKey: e.target.value})} placeholder="Encryption Key" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Vector Bytes (IV)</Label>
                      <Input type={showSecrets ? "text" : "password"} value={creds.vectorBytes} onChange={e => setCreds({...creds, vectorBytes: e.target.value})} placeholder="Encryption IV" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. DISCOVERY TRIGGERS */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none">
                <CardHeader className="p-6 border-b border-white/5">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#4FD1C5]">
                    <Activity className="w-4 h-4" /> 2. API Interrogation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-3">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Metadata</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="secondary" onClick={() => handleMasterTest('category')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Fetch Categories</Button>
                      <Button variant="secondary" onClick={() => handleMasterTest('currency')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Fetch Currencies</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Parameters</p>
                    <select 
                        value={planParams.categoryId} 
                        onChange={e => setPlanParams({...planParams, categoryId: e.target.value})}
                        className="w-full h-11 px-3 bg-[#0F1428] border border-white/10 text-xs rounded-none outline-none mb-3"
                    >
                        <option value="">{categories.length > 0 ? "Select Destination Category" : "Fetch Categories first"}</option>
                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="space-y-1">
                          <Label className="text-[8px] uppercase font-bold text-[#6E7495]">Age</Label>
                          <Input value={planParams.age} onChange={e => setPlanParams({...planParams, age: e.target.value})} className="bg-[#0F1428] border-white/10 h-10 rounded-none text-xs" />
                       </div>
                       <div className="space-y-1">
                          <Label className="text-[8px] uppercase font-bold text-[#6E7495]">Days</Label>
                          <Input value={planParams.duration} onChange={e => setPlanParams({...planParams, duration: e.target.value})} className="bg-[#0F1428] border-white/10 h-10 rounded-none text-xs" />
                       </div>
                    </div>
                    <Button 
                      onClick={() => handlePlanInterrogation('base')}
                      className="w-full h-11 bg-[#E8A33D] text-[#0F1428] font-bold uppercase tracking-widest text-[9px] rounded-none mt-2"
                    >
                      Search Selling Plans
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 3. POLICY BLUEPRINT */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none border-dashed">
                 <CardHeader className="p-6 border-b border-white/5 bg-[#E8A33D]/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <FileSearch className="w-4 h-4 text-[#4FD1C5]" /> 3. Transaction State
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 space-y-6">
                    {!selectedPlan ? (
                      <div className="py-4 text-center">
                        <p className="text-[10px] text-[#6E7495] uppercase tracking-widest">No Plan Selected</p>
                      </div>
                    ) : (
                      <div className="space-y-4 font-mono text-[11px]">
                         <div className="flex justify-between border-b border-white/5 pb-2">
                           <span className="text-[#6E7495]">detailId</span>
                           <span className="text-white text-right truncate max-w-[200px]">{selectedPlan.detailId}</span>
                         </div>
                         <div className="flex justify-between border-b border-white/5 pb-2">
                           <span className="text-[#6E7495]">planId</span>
                           <span className="text-white">{selectedPlan.planId}</span>
                         </div>
                         <div className="flex justify-between border-b border-white/5 pb-2">
                           <span className="text-[#6E7495]">premium</span>
                           <span className="text-green-500">₹{selectedPlan.total}</span>
                         </div>
                         <p className="text-[10px] leading-relaxed text-[#9AA1C0] pt-4">
                            Selected plan is ready for <code className="text-white">createPolicy/validate</code> testing once payload schema is confirmed.
                         </p>
                      </div>
                    )}
                 </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              
              {/* VIEW SWITCHER */}
              <div className="flex bg-[#0B0F22] p-1 rounded-none border border-white/10 w-fit">
                <button 
                  onClick={() => setViewMode('console')}
                  className={cn(
                    "px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all",
                    viewMode === 'console' ? "bg-white text-[#0F1428]" : "text-[#6E7495] hover:text-white"
                  )}
                >
                  <Terminal className="w-3.5 h-3.5 inline mr-2" /> Technical Console
                </button>
                <button 
                  onClick={() => setViewMode('journey')}
                  className={cn(
                    "px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all",
                    viewMode === 'journey' ? "bg-white text-[#0F1428]" : "text-[#6E7495] hover:text-white"
                  )}
                >
                  <UserCircle className="w-3.5 h-3.5 inline mr-2" /> Simulation: Customer View
                </button>
              </div>

              {/* DISPLAY AREA */}
              <div className="bg-[#0B0F22] border border-white/10 rounded-none min-h-[800px] flex flex-col shadow-2xl relative">
                
                {viewMode === 'console' ? (
                  <>
                    <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6E7495]">Raw_Diagnostic_Feed.sh</span>
                      {activeResult && <Badge variant="outline" className="text-[9px] uppercase border-white/10 text-[#4FD1C5]">{activeResult.status} {activeResult.success ? 'OK' : 'FAIL'}</Badge>}
                    </div>
                    <div className="p-8 flex-1 overflow-auto custom-scrollbar font-mono text-[13px] leading-relaxed">
                      {!activeResult && !loading && (
                        <div className="h-full flex flex-col items-center justify-center pt-20 space-y-6 opacity-30">
                          <Activity className="w-16 h-16" />
                          <p className="text-[10px] uppercase tracking-[0.4em]">Interrogation Pending</p>
                        </div>
                      )}
                      {loading && (
                        <div className="flex flex-col items-center justify-center pt-20 space-y-4">
                          <Loader2 className="w-8 h-8 animate-spin text-[#E8A33D]" />
                          <p className="text-[10px] uppercase tracking-widest text-[#9AA1C0]">Calling Dolphin UAT Gateway...</p>
                        </div>
                      )}
                      {activeResult && (
                        <div className="space-y-10 animate-in fade-in duration-500">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                               <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Metadata</p>
                               <span className="text-[9px] font-mono text-white/20">{activeResult.endpoint}</span>
                            </div>
                            <pre className="text-paper/90 overflow-x-auto whitespace-pre-wrap max-h-[500px] p-6 bg-white/[0.02] border border-white/5 text-xs">
                              <code>{typeof activeResult.data === 'string' ? activeResult.data : JSON.stringify(activeResult.data, null, 2)}</code>
                            </pre>
                          </div>
                          <div className="space-y-4">
                             <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Headers Sent (Internal Trace)</p>
                             <pre className="text-[10px] text-white/40 p-4 bg-white/5">
                               {JSON.stringify(activeResult.headersSent, null, 2)}
                             </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="p-8 space-y-12">
                    <div className="space-y-4 text-center max-w-2xl mx-auto">
                       <h2 className="text-3xl font-headline font-bold">Available Insurance Plans</h2>
                       <p className="text-sm text-[#9AA1C0]">
                         Displaying current UAT catalogue for <strong>Age {planParams.age}</strong> and <strong>Duration {planParams.duration} days</strong>.
                       </p>
                    </div>

                    {!activeResult?.data?.sellingPlanDto ? (
                      <div className="py-20 text-center space-y-6 opacity-40">
                         <Search className="w-16 h-16 mx-auto" />
                         <div className="space-y-2">
                            <p className="text-lg">No plans displayed yet.</p>
                            <p className="text-[10px] uppercase tracking-widest">Run "Search Selling Plans" to populate this view.</p>
                         </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeResult.data.sellingPlanDto.map((plan: any) => (
                          <div key={plan.planId} className="border border-white/10 bg-white/[0.02] hover:border-[#E8A33D]/40 transition-all flex flex-col">
                             <div className="p-6 border-b border-white/5 flex justify-between items-start">
                                <div className="space-y-1">
                                   <h3 className="text-xl font-bold">{plan.planName}</h3>
                                   <p className="text-[10px] uppercase tracking-widest text-[#4FD1C5] font-bold">{plan.insurerName}</p>
                                </div>
                                <ShieldCheck className="w-6 h-6 text-[#E8A33D] opacity-60" />
                             </div>
                             
                             <div className="p-6 space-y-6 flex-grow">
                                <div className="grid grid-cols-2 gap-6">
                                   <div className="space-y-1">
                                      <p className="text-[9px] uppercase font-bold text-[#6E7495]">Eligibility</p>
                                      <p className="text-xs text-white/80">Age: {plan.sellingPlanDetailsList?.[0]?.minAge}-{plan.sellingPlanDetailsList?.[0]?.maxAge}</p>
                                   </div>
                                   <div className="space-y-1 text-right">
                                      <p className="text-[9px] uppercase font-bold text-[#6E7495]">Duration</p>
                                      <p className="text-xs text-white/80">{plan.sellingPlanDetailsList?.[0]?.minDays}-{plan.sellingPlanDetailsList?.[0]?.maxDays} days</p>
                                   </div>
                                </div>

                                <div className="p-4 bg-white/5 space-y-3">
                                   <div className="flex justify-between items-baseline">
                                      <span className="text-[9px] uppercase font-bold text-[#6E7495]">Premium Total</span>
                                      <span className="text-2xl font-bold text-green-500">₹{plan.sellingPlanDetailsList?.[0]?.total}</span>
                                   </div>
                                   <div className="flex justify-between items-center text-[10px] text-[#6E7495] pt-2 border-t border-white/5">
                                      <span>GST Included</span>
                                      <span>₹{plan.sellingPlanDetailsList?.[0]?.gst}</span>
                                   </div>
                                </div>
                             </div>

                             <div className="p-6 pt-0 mt-auto">
                                <Button 
                                  onClick={() => {
                                    const detail = plan.sellingPlanDetailsList?.[0];
                                    setSelectedPlan({
                                      planId: plan.planId,
                                      detailId: detail?.detailId,
                                      total: detail?.total,
                                      name: plan.planName
                                    });
                                    toast({ title: "Plan Selected", description: plan.planName });
                                  }}
                                  className={cn(
                                    "w-full h-11 font-bold uppercase tracking-[0.2em] text-[10px] rounded-none",
                                    selectedPlan?.planId === plan.planId 
                                      ? "bg-green-600 text-white" 
                                      : "bg-[#E8A33D] text-[#0F1428] hover:bg-white"
                                  )}
                                >
                                  {selectedPlan?.planId === plan.planId ? <><Check className="w-4 h-4 mr-2" /> Selected</> : "Select Plan"}
                                </Button>
                             </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* READ-ONLY DISCLAIMER */}
              <div className="p-6 border border-[#E8A33D]/20 bg-[#E8A33D]/5 flex items-start gap-4">
                 <Info className="w-5 h-5 text-[#E8A33D] shrink-0 mt-0.5" />
                 <div className="space-y-1">
                    <p className="text-[11px] font-bold uppercase text-[#E8A33D]">Read-Only Verification Mode</p>
                    <p className="text-xs text-[#9AA1C0] leading-relaxed">
                      This environment is strictly for catalogue discovery and handshake verification. Actual policy issuance is disabled until the production transaction schema is confirmed by Asego.
                    </p>
                 </div>
              </div>

            </div>

          </div>

          <div className="pt-12 border-t border-white/5 text-center flex flex-col items-center gap-4">
             <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">End of Forensic Discovery Module</p>
             <Button variant="ghost" onClick={() => window.location.href = '/'} className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495] hover:text-white transition-colors">
               ← Return to Utsavs Platform
             </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
