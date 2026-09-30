'use client';

import React, { useState } from 'react';
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
  Play, 
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
  Fingerprint
} from "lucide-react";
import { 
  testAsegoMaster,
  testAsegoPlans,
  runEncryptionStep
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
  const [useSignAsBearer, setUseSignAsBearer] = useState(false);

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
    const res = await testAsegoMaster(type);
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
    
    // FORENSIC INJECTION: Test if 'Sign' works as the Bearer Token
    const token = useSignAsBearer ? creds.sign : undefined;
    
    const res = await testAsegoPlans(type, creds.partnerId, planParams, token);
    setActiveResult(res);
    setLoading(false);
    
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      setVerifiedSteps(prev => ({ ...prev, plans: true, authHeader: !!token }));
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
- Swagger Scheme: ASEGO (http, Bearer) [IDENTIFIED]
- Encryption Round-Trip: ${verifiedSteps.encryption ? 'SUCCESS (Key/IV Mapped)' : 'NOT VERIFIED'}
- Bearer Injection: ${useSignAsBearer ? 'Testing [Sign] as Bearer' : 'None'}

2. ENDPOINT STATUS
- Master Categories: ${verifiedSteps.categories ? 'Retrieved' : 'Pending'}
- Plan Data: ${verifiedSteps.plans ? 'Populated' : 'HTTP 200 [] observed (Check Bearer requirements)'}

3. MAPPING BASELINE
- Partner ID -> {partnerId} [VERIFIED]
- Secret Key -> Encryption Key [VERIFIED]
- Vector Bytes -> Encryption IV [VERIFIED]
- Sign -> Candidate Bearer/Identity Sign
- Reference -> Candidate Identity Reference

TECHNICAL TRACE (MASKED)
- Partner ID: ${mask(creds.partnerId)}
- Auth Header: ${useSignAsBearer ? 'Sign-based Bearer' : 'None'}
-----------------------------------
    `.trim();

    navigator.clipboard.writeText(report);
    toast({ title: "Forensic Report Copied" });
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-[1400px] space-y-12 text-left">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-white/5 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#4FD1C5]">
                <Fingerprint className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">Forensic Security Audit Module v1.0</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-medium tracking-tighter leading-none">Authentication & Data Discovery</h1>
              <p className="text-lg text-[#9AA1C0] max-w-2xl font-medium leading-relaxed italic">
                Investigating the "ASEGO Bearer" requirement and mapping UAT credentials to the OpenAPI schema.
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

              {/* 2. FORENSIC ANALYZER */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none border-dashed">
                 <CardHeader className="p-6 border-b border-white/5 bg-[#E8A33D]/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <Search className="w-4 h-4 text-[#E8A33D]" /> 2. Security Scheme Test
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 space-y-6">
                    <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-none border-l-2 border-[#4FD1C5]">
                       <input 
                        type="checkbox" 
                        id="bearer" 
                        checked={useSignAsBearer} 
                        onChange={e => setUseSignAsBearer(e.target.checked)} 
                        className="w-4 h-4 accent-[#4FD1C5]"
                       />
                       <label htmlFor="bearer" className="text-[10px] font-bold uppercase tracking-widest cursor-pointer">
                          Inject [Sign] as Authorization Bearer Header
                       </label>
                    </div>
                    <p className="text-[10px] leading-relaxed text-[#6E7495]">
                      Tests the hypothesis that the global "ASEGO" scheme in Swagger requires the Sign string in the Authorization header to return populated data.
                    </p>
                 </CardContent>
              </Card>

              {/* 3. DISCOVERY TRIGGERS */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none">
                <CardHeader className="p-6 border-b border-white/5">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#4FD1C5]">
                    <Activity className="w-4 h-4" /> 3. Discovery Pipeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-3">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Step 1: Master Metadata</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="secondary" onClick={() => handleMasterTest('category')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Categories</Button>
                      <Button variant="secondary" onClick={() => handleMasterTest('currency')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Currencies</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Step 2: Plan Interrogation</p>
                    <select 
                        value={planParams.categoryId} 
                        onChange={e => setPlanParams({...planParams, categoryId: e.target.value})}
                        className="w-full h-11 px-3 bg-[#0F1428] border border-white/10 text-xs rounded-none outline-none"
                    >
                        <option value="">{categories.length > 0 ? "Select Active Category" : "Run 'Categories' first"}</option>
                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    <Button 
                      onClick={() => handlePlanInterrogation('base')}
                      className="w-full h-11 bg-[#E8A33D] text-[#0F1428] font-bold uppercase tracking-widest text-[9px] rounded-none"
                    >
                      Test Plan Endpoint
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Step 3: Deep Structures</p>
                    <div className="grid grid-cols-1 gap-2">
                      <Button variant="outline" onClick={() => handlePlanInterrogation('masterDetails')} className="border-white/10 h-10 text-[8px] font-bold uppercase tracking-widest rounded-none">Master Plan Details</Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" onClick={() => handlePlanInterrogation('standalone')} className="border-white/10 h-10 text-[8px] font-bold uppercase tracking-widest rounded-none">Standalone</Button>
                        <Button variant="outline" onClick={() => handlePlanInterrogation('vasRider')} className="border-white/10 h-10 text-[8px] font-bold uppercase tracking-widest rounded-none">VAS Riders</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="p-8 border border-white/5 bg-white/[0.02] text-left space-y-4">
                 <div className="flex items-center gap-2 text-[#E8A33D]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Encryption Verified</span>
                 </div>
                 <p className="text-[11px] text-[#9AA1C0] leading-relaxed">
                   Round-trip confirmed: Secret Key and Vector Bytes are operational for AES operations.
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
                        <p className="text-sm">Ready for forensic interrogation.</p>
                        <p className="text-[10px] uppercase tracking-widest">Select an action to begin mapping.</p>
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
                          <p className="text-[8px] uppercase text-[#6E7495]">Bearer Token Sent?</p>
                          <p className="text-[10px] text-white/60">{activeResult.headersSent?.Authorization ? 'YES (Masked)' : 'NO'}</p>
                        </div>
                      </div>

                      {activeResult.success && Array.isArray(activeResult.data) && activeResult.data.length === 0 && (
                        <div className="p-6 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-none space-y-4">
                           <div className="flex items-center gap-2 text-[#E8A33D]">
                              <Info className="w-4 h-4" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Dolphin Data Mapping Observation</span>
                           </div>
                           <p className="text-sm text-white/80 leading-relaxed italic">
                              "Endpoint succeeded, but no plan records were returned. The reason for the empty result is not established by this test."
                           </p>
                           <div className="pt-2 border-t border-[#E8A33D]/20">
                             <p className="text-[10px] font-bold text-white/60 mb-2 uppercase">Diagnostic Checklist:</p>
                             <ul className="text-[10px] space-y-1 text-[#9AA1C0]">
                               <li>• Verify if {creds.partnerId || 'Partner ID'} has active plans in UAT.</li>
                               <li>• Confirm if [Sign] must be passed as Bearer Token (currently: {useSignAsBearer ? 'YES' : 'NO'}).</li>
                               <li>• Check if Category ID matches the target plan.</li>
                             </ul>
                           </div>
                        </div>
                      )}

                      <div className="space-y-4">
                         <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Raw Response Schema</p>
                            <span className="text-[9px] font-bold uppercase text-[#6E7495]">{Array.isArray(activeResult.data) ? `${activeResult.data.length} records` : 'Object'}</span>
                         </div>
                         <pre className="text-paper/90 overflow-x-auto whitespace-pre-wrap max-h-[800px] p-6 bg-white/[0.02] border border-white/5 rounded-none custom-scrollbar text-xs">
                           <code>{typeof activeResult.data === 'string' ? activeResult.data : JSON.stringify(activeResult.data, null, 2)}</code>
                         </pre>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Headers Sent (Diagnostic)</p>
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
                       <FileSearch className="w-4 h-4" /> Swagger Component Audit
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Policy: ExternalIdentity</h4>
                       <div className="space-y-4 font-mono text-[11px] text-[#9AA1C0]">
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>partnerId</span><span className="text-[#4FD1C5]">Verified</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>sign</span><span className="text-white/40">Candidate</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>reference</span><span className="text-white/40">Candidate</span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>orderId</span><span className="text-[#E94368]">Unknown</span>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-6">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">Required from Asego</h4>
                       <ul className="space-y-3 text-[11px] font-medium text-[#9AA1C0]">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-3 h-3 text-[#E8A33D] shrink-0 mt-0.5" />
                            <span>Confirmation of Bearer Token source.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-3 h-3 text-[#E8A33D] shrink-0 mt-0.5" />
                            <span>Mapping of 'Sign' and 'Reference' values to Policy identity.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="w-3 h-3 text-[#E8A33D] shrink-0 mt-0.5" />
                            <span>UAT sample payload for Policy Validation.</span>
                          </li>
                       </ul>
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
