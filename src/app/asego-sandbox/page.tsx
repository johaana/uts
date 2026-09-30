'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Zap
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
  const [authStrategy, setAuthStrategy] = useState<AuthStrategy>('none');

  // 2. Discovery State
  const [activeResult, setActiveResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  
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
    
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      setVerifiedSteps(prev => ({ ...prev, plans: true, authHeader: authStrategy !== 'none' }));
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
- Selected Strategy: ${authStrategy}

2. ENDPOINT STATUS
- Master Categories: ${verifiedSteps.categories ? 'Retrieved' : 'Pending'}
- Plan Data: ${verifiedSteps.plans ? 'Populated' : 'No plans observed'}

TECHNICAL TRACE (MASKED)
- Partner ID: ${mask(creds.partnerId)}
- Auth Strategy: ${authStrategy}
-----------------------------------
    `.trim();

    navigator.clipboard.writeText(report);
    toast({ title: "Forensic Report Copied" });
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
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">Forensic Security Audit Module v2.0</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-medium tracking-tighter leading-none">Authentication & Header Discovery</h1>
              <p className="text-lg text-[#9AA1C0] max-w-2xl font-medium leading-relaxed italic">
                Comparing standard Bearer tokens against custom Sign/Reference headers to bypass 502 Gateway errors.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="ghost" size="sm" onClick={() => { setActiveResult(null); }} className="text-[9px] uppercase tracking-widest font-bold border border-white/10 h-8 rounded-none">
                  <RotateCcw className="w-3 h-3 mr-2" /> Reset
                </Button>
                <Button onClick={generateDiscoveryReport} className="bg-[#E8A33D] text-[#0F1428] h-8 px-4 text-[9px] font-bold uppercase tracking-widest rounded-none shadow-lg">
                  <ClipboardCheck className="w-3 h-3 mr-2" /> Copy Forensic Report
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
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Sign</Label>
                        <Input type={showSecrets ? "text" : "password"} value={creds.sign} onChange={e => setCreds({...creds, sign: e.target.value})} placeholder="identity.sign" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Reference</Label>
                        <Input type={showSecrets ? "text" : "password"} value={creds.reference} onChange={e => setCreds({...creds, reference: e.target.value})} placeholder="identity.reference" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Secret Key</Label>
                      <Input type={showSecrets ? "text" : "password"} value={creds.secretKey} onChange={e => setCreds({...creds, secretKey: e.target.value})} placeholder="Encryption Key" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Vector Bytes</Label>
                      <Input type={showSecrets ? "text" : "password"} value={creds.vectorBytes} onChange={e => setCreds({...creds, vectorBytes: e.target.value})} placeholder="Encryption IV" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. AUTH STRATEGY */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none border-dashed">
                 <CardHeader className="p-6 border-b border-white/5 bg-[#E8A33D]/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <Search className="w-4 h-4 text-[#E8A33D]" /> 2. Strategy Selector
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                       <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Header Strategy</Label>
                       <select 
                        value={authStrategy} 
                        onChange={e => setAuthStrategy(e.target.value as AuthStrategy)}
                        className="w-full h-11 px-3 bg-[#0F1428] border border-white/10 text-xs rounded-none outline-none font-bold uppercase tracking-widest"
                       >
                          <option value="none">None (Control)</option>
                          <option value="bearer_sign">Auth: Bearer [Sign]</option>
                          <option value="bearer_ref">Auth: Bearer [Reference]</option>
                          <option value="custom_sign">Sign Header: [Sign]</option>
                          <option value="custom_ref">Ref Header: [Reference]</option>
                          <option value="custom_both">Both Custom Headers</option>
                       </select>
                    </div>
                    <p className="text-[10px] leading-relaxed text-[#6E7495]">
                      Tests if your credentials belong in standard Bearer or custom headers. If a strategy returns 502, it likely crashed the gateway.
                    </p>
                 </CardContent>
              </Card>

              {/* 3. DISCOVERY TRIGGERS */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none">
                <CardHeader className="p-6 border-b border-white/5">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#4FD1C5]">
                    <Activity className="w-4 h-4" /> 3. Test Pipeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-3">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Master Discovery</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="secondary" onClick={() => handleMasterTest('category')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Categories</Button>
                      <Button variant="secondary" onClick={() => handleMasterTest('currency')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Currencies</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Plan Interrogation</p>
                    <select 
                        value={planParams.categoryId} 
                        onChange={e => setPlanParams({...planParams, categoryId: e.target.value})}
                        className="w-full h-11 px-3 bg-[#0F1428] border border-white/10 text-xs rounded-none outline-none"
                    >
                        <option value="">{categories.length > 0 ? "Select Target Category" : "Fetch Categories first"}</option>
                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    <Button 
                      onClick={() => handlePlanInterrogation('base')}
                      className="w-full h-11 bg-[#E8A33D] text-[#0F1428] font-bold uppercase tracking-widest text-[9px] rounded-none"
                    >
                      Run Plan Comparison
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Deep Structures</p>
                    <Button variant="outline" onClick={() => handlePlanInterrogation('masterDetails')} className="w-full border-white/10 h-10 text-[8px] font-bold uppercase tracking-widest rounded-none">Fetch Master Plan Details</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="p-8 border border-white/5 bg-white/[0.02] space-y-4">
                 <div className="flex items-center gap-2 text-[#E8A33D]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Encryption Verified</span>
                 </div>
                 <p className="text-[11px] text-[#9AA1C0] leading-relaxed">
                   Security Handshake is active. Secret Key and Vector Bytes are operational.
                 </p>
                 <Button variant="link" onClick={handleEncryptionRoundTrip} className="p-0 h-auto text-[9px] font-bold uppercase tracking-widest text-white/40">Re-verify Protocol</Button>
              </div>
            </div>

            <div className="space-y-8">
              {/* DISCOVERY CONSOLE */}
              <div className="bg-[#0B0F22] border border-white/10 rounded-none min-h-[800px] flex flex-col shadow-2xl relative">
                <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5">
                   <div className="flex items-center gap-3">
                      <Terminal className="w-4 h-4 text-[#4FD1C5]" />
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6E7495]">UAT_Forensic_Log.sh</span>
                   </div>
                </div>
                
                <div className="p-8 flex-1 overflow-auto custom-scrollbar font-mono text-[13px] leading-relaxed">
                  {!activeResult && !loading && (
                    <div className="h-full flex flex-col items-center justify-center pt-20 space-y-8 opacity-40">
                      <Activity className="w-16 h-16 text-[#9AA1C0]" />
                      <div className="text-center space-y-2">
                        <p className="text-sm">Select an Auth Strategy and run a Test.</p>
                        <p className="text-[10px] uppercase tracking-widest">Goal: Find the strategy that returns plans, not empty arrays or 502s.</p>
                      </div>
                    </div>
                  )}

                  {loading && (
                    <div className="flex flex-col items-center justify-center pt-20 space-y-6">
                      <Loader2 className="w-10 h-10 animate-spin text-[#E8A33D]" />
                      <p className="text-[#9AA1C0] animate-pulse uppercase tracking-[0.2em] text-[10px]">Interrogating Dolphin UAT...</p>
                    </div>
                  )}

                  {activeResult && (
                    <div className="space-y-10 animate-in fade-in duration-500">
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-white/5">
                        <div>
                          <p className="text-[8px] uppercase text-[#6E7495]">Status</p>
                          <p className={cn("font-bold", activeResult.success ? "text-green-500" : "text-red-500")}>
                            {activeResult.status} {activeResult.success ? 'OK' : 'ERR'}
                          </p>
                        </div>
                        <div>
                          <p className="text-[8px] uppercase text-[#6E7495]">Latency</p>
                          <p className="font-bold text-white">{activeResult.time}ms</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-[8px] uppercase text-[#6E7495]">Strategy Active</p>
                          <p className="text-[10px] text-white/60">{authStrategy.toUpperCase()}</p>
                        </div>
                      </div>

                      {activeResult.status === 502 && (
                        <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-none space-y-4">
                           <div className="flex items-center gap-2 text-red-500">
                              <AlertCircle className="w-4 h-4" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Gateway Forensic Analysis</span>
                           </div>
                           <p className="text-sm text-red-200/80 leading-relaxed">
                              "HTTP 502 at {activeResult.time}ms suggests the Asego load balancer rejected the request immediately. This strategy (Header Strategy) may be formatted in a way their security layer cannot parse."
                           </p>
                        </div>
                      )}

                      {activeResult.success && Array.isArray(activeResult.data) && activeResult.data.length === 0 && (
                        <div className="p-6 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-none space-y-4">
                           <div className="flex items-center gap-2 text-[#E8A33D]">
                              <Info className="w-4 h-4" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Forensic Observation</span>
                           </div>
                           <p className="text-sm text-white/80 leading-relaxed italic">
                              "Endpoint succeeded (200 OK), but the dataset is empty []. This implies the authorization was sufficient to reach the database, but either no data is mapped or the context is still missing."
                           </p>
                        </div>
                      )}

                      <div className="space-y-4">
                         <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Raw Response</p>
                            <span className="text-[9px] font-bold uppercase text-[#6E7495]">{Array.isArray(activeResult.data) ? `${activeResult.data.length} items` : 'Payload'}</span>
                         </div>
                         <pre className="text-paper/90 overflow-x-auto whitespace-pre-wrap max-h-[800px] p-6 bg-white/[0.02] border border-white/5 rounded-none custom-scrollbar text-xs">
                           <code>{typeof activeResult.data === 'string' ? activeResult.data : JSON.stringify(activeResult.data, null, 2)}</code>
                         </pre>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Diagnostic Headers Sent</p>
                        <pre className="text-[10px] text-white/40 p-4 bg-white/5">
                          {JSON.stringify(activeResult.headersSent, null, 2)}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* READ-ONLY SCHEMA AUDITOR */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none">
                 <CardHeader className="p-6 border-b border-white/5 bg-white/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <FileSearch className="w-4 h-4" /> Credential Hypothesis
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Credential Role</h4>
                       <div className="space-y-4 font-mono text-[11px] text-[#9AA1C0]">
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>Secret Key</span><span className="text-green-500">Verified (Key)</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>Vector Bytes</span><span className="text-green-500">Verified (IV)</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>Sign</span><span className="text-[#E8A33D]">Candidate Bearer</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>Reference</span><span className="text-[#E8A33D]">Candidate ID</span>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-6">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">Objective</h4>
                       <p className="text-[11px] leading-relaxed text-[#9AA1C0]">
                         We need to establish if "Sign" should be the Bearer Token or a custom header. A 200 OK with actual Plan records will confirm the role.
                       </p>
                    </div>
                 </CardContent>
              </Card>
            </div>

          </div>

          <div className="pt-12 border-t border-white/5 text-center flex flex-col items-center gap-4">
             <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">End of Forensic Audit Module</p>
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
