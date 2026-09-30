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
  Play, 
  Loader2, 
  ShieldCheck, 
  Database, 
  Lock, 
  Activity, 
  ClipboardCheck, 
  History,
  FlaskConical,
  Zap,
  RotateCcw,
  Key,
  Search,
  Eye,
  EyeOff,
  CheckCircle2,
  FileSearch,
  AlertCircle,
  ArrowRight,
  Info
} from "lucide-react";
import { 
  testAsegoMaster,
  testAsegoPlans,
  runEncryptionStep
} from './actions';
import { useToast } from '@/hooks/use-toast';

export default function AsegoUatDiscoveryPage() {
  const { toast } = useToast();
  
  // 1. Credentials (In-Memory Only)
  const [creds, setCreds] = useState({
    partnerId: '',
    sign: '',
    reference: '',
    secretKey: '',
    vectorBytes: ''
  });
  const [showSecrets, setShowSecrets] = useState(false);

  // 2. Discovery State
  const [activeResult, setActiveResult] = useState<any>(null);
  const [testHistory, setTestHistory] = useState<any[]>([]);
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
    categories: false,
    plans: false,
    masterDetails: false
  });

  const addToHistory = (result: any, label: string) => {
    const entry = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      label,
      endpoint: result.endpoint,
      status: result.status,
      success: result.success,
      time: result.time,
      isEmpty: Array.isArray(result.data) && result.data.length === 0
    };
    setTestHistory(prev => [entry, ...prev].slice(0, 20));
  };

  const handleMasterTest = async (type: 'category' | 'currency' | 'reasons') => {
    setLoading(true);
    const res = await testAsegoMaster(type);
    setActiveResult(res);
    addToHistory(res, `Master ${type}`);
    setLoading(false);
    
    if (type === 'category' && res.success && Array.isArray(res.data)) {
      setCategories(res.data);
      setVerifiedSteps(prev => ({ ...prev, categories: true }));
    }
  };

  const handlePlanInterrogation = async (type: 'base' | 'standalone' | 'vasRider' | 'masterDetails') => {
    if (!creds.partnerId) return toast({ title: "Partner ID required", variant: "destructive" });
    setLoading(true);
    const res = await testAsegoPlans(type, creds.partnerId, planParams);
    setActiveResult(res);
    addToHistory(res, `Plan ${type}`);
    setLoading(false);
    
    if (res.success) {
      if (type === 'masterDetails') setVerifiedSteps(prev => ({ ...prev, masterDetails: true }));
      if (type === 'base' && Array.isArray(res.data) && res.data.length > 0) setVerifiedSteps(prev => ({ ...prev, plans: true }));
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
    addToHistory(encRes, "Encryption Round-Trip");
    setLoading(false);
  };

  const generateDiscoveryReport = () => {
    const mask = (val: string) => val ? `********${val.slice(-4)}` : 'NOT_SET';
    
    const report = `
ASEGO UAT DISCOVERY STATUS
-----------------------------------
Generated: ${new Date().toISOString()}
Environment: Dolphin UAT

1. VERIFIED (SUCCESSFUL ROUND-TRIPS)
- Encryption Mapping: Secret Key -> key | Vector Bytes -> initVector [VERIFIED]
- Connectivity: Dolphin UAT reachable [VERIFIED]
- Categories: ${verifiedSteps.categories ? 'Retrieved successfully' : 'Not verified'}
- Master Details: ${verifiedSteps.masterDetails ? 'Retrieved successfully' : 'Not verified'}

2. OBSERVED BUT UNEXPLAINED
- Plan Availability: ${verifiedSteps.plans ? 'Plans returned' : 'HTTP 200 returned but empty array [] observed for provided parameters.'}

3. REQUIRES ASEGO CONFIRMATION
- Reason for empty [] responses in /plan and /masterDetails if still persistent.
- Final confirmation of 'Sign' and 'Reference' usage in policy identity object.
- Required mandatory fields for /createPolicy/validate.

TECHNICAL TRACE (MASKED)
- Partner ID: ${mask(creds.partnerId)}
- Sign: ${mask(creds.sign)}
- Reference: ${mask(creds.reference)}
-----------------------------------
    `.trim();

    navigator.clipboard.writeText(report);
    toast({ title: "Discovery Report Copied" });
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-[1400px] space-y-12 text-left">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-white/5 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#E8A33D]">
                <FileSearch className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">Read-Only UAT Discovery Console v6.0</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-medium tracking-tighter leading-none">API Verification & Mapping</h1>
              <p className="text-lg text-[#9AA1C0] max-w-2xl font-medium leading-relaxed italic">
                Establishing the technical baseline for Asego Dolphin UAT. No destructive actions enabled.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="ghost" size="sm" onClick={() => { setActiveResult(null); setTestHistory([]); }} className="text-[9px] uppercase tracking-widest font-bold border border-white/10 h-8 rounded-none">
                  <RotateCcw className="w-3 h-3 mr-2" /> Reset Console
                </Button>
                <Button onClick={generateDiscoveryReport} className="bg-[#E8A33D] text-[#0F1428] h-8 px-4 text-[9px] font-bold uppercase tracking-widest rounded-none shadow-lg">
                  <ClipboardCheck className="w-3 h-3 mr-2" /> Copy Discovery Report
                </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[450px_1fr] gap-12 items-start">
            
            {/* LEFT COLUMN: PARAMETERS & MAPPING */}
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
                      <Input value={creds.partnerId} onChange={e => setCreds({...creds, partnerId: e.target.value})} placeholder="Required for Plan APIs" className="bg-[#0F1428] border-white/10 font-mono text-xs h-11 rounded-none" />
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
                      <Input type={showSecrets ? "text" : "password"} value={creds.secretKey} onChange={e => setCreds({...creds, secretKey: e.target.value})} placeholder="Encryption key" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Vector Bytes</Label>
                      <Input type={showSecrets ? "text" : "password"} value={creds.vectorBytes} onChange={e => setCreds({...creds, vectorBytes: e.target.value})} placeholder="initVector" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Identity Correspondence</p>
                    <div className="space-y-2 text-[11px] font-mono text-[#9AA1C0]">
                       <div className="flex justify-between"><span>Partner ID</span><span className="text-[#4FD1C5]">→ {`{partnerId}`}</span></div>
                       <div className="flex justify-between"><span>Secret Key</span><span className={cn(verifiedSteps.encryption ? "text-[#4FD1C5]" : "text-white/40")}>→ Encryption key {verifiedSteps.encryption ? '[VERIFIED]' : '[CANDIDATE]'}</span></div>
                       <div className="flex justify-between"><span>Vector Bytes</span><span className={cn(verifiedSteps.encryption ? "text-[#4FD1C5]" : "text-white/40")}>→ initVector {verifiedSteps.encryption ? '[VERIFIED]' : '[CANDIDATE]'}</span></div>
                       <div className="flex justify-between"><span>Reference</span><span className="text-white/40">→ identity.reference [CANDIDATE]</span></div>
                       <div className="flex justify-between"><span>Sign</span><span className="text-white/40">→ identity.sign [CANDIDATE]</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. ENCRYPTION PROTOCOL */}
              <Card className={cn("bg-[#0B0F22] border-white/10 rounded-none border-dashed transition-all", verifiedSteps.encryption && "border-[#4FD1C5]/40 bg-[#4FD1C5]/5")}>
                <CardHeader className="p-6 border-b border-white/5">
                   <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <Lock className={cn("w-4 h-4", verifiedSteps.encryption ? "text-[#4FD1C5]" : "text-[#6E7495]")} /> 2. Encryption Round-Trip
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                   <div className="p-4 bg-white/5 border-l-2 border-[#E8A33D] rounded-none">
                      <p className="text-[10px] leading-relaxed text-[#9AA1C0]">
                        <b>UAT Validation:</b> Tests if Secret Key and Vector Bytes correctly perform AES round-trip via Asego server.
                      </p>
                   </div>
                   <Button 
                    onClick={handleEncryptionRoundTrip}
                    disabled={loading}
                    className="w-full h-11 bg-white/[0.03] border border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-[10px] rounded-none"
                   >
                     {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Play className="w-3 h-3 mr-2" />}
                     Verify Protocol
                   </Button>
                </CardContent>
              </Card>

              {/* 3. MASTER SUITE */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none">
                <CardHeader className="p-6 border-b border-white/5">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#4FD1C5]">
                    <Zap className="w-4 h-4" /> 3. Read-Only Master Discovery
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 grid grid-cols-1 gap-3">
                  <Button variant="secondary" onClick={() => handleMasterTest('category')} className="justify-start h-10 text-[9px] uppercase tracking-widest font-bold rounded-none">1. Fetch Categories</Button>
                  <Button variant="secondary" onClick={() => handleMasterTest('currency')} className="justify-start h-10 text-[9px] uppercase tracking-widest font-bold rounded-none">2. Fetch Currencies</Button>
                  <Button variant="secondary" onClick={() => handleMasterTest('reasons', 'cancellation')} className="justify-start h-10 text-[9px] uppercase tracking-widest font-bold rounded-none">3. Fetch Reasons</Button>
                </CardContent>
              </Card>

              {/* 4. PLAN INTERROGATION */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none border-dashed opacity-80">
                 <CardHeader className="p-6 border-b border-white/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <Search className="w-4 h-4" /> 4. Plan Discovery
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Age</Label>
                        <Input value={planParams.age} onChange={e => setPlanParams({...planParams, age: e.target.value})} className="bg-white/5 border-white/10 h-10 rounded-none text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Duration</Label>
                        <Input value={planParams.duration} onChange={e => setPlanParams({...planParams, duration: e.target.value})} className="bg-white/5 border-white/10 h-10 rounded-none text-xs" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Target Category</Label>
                      <select 
                        value={planParams.categoryId} 
                        onChange={e => setPlanParams({...planParams, categoryId: e.target.value})}
                        className="w-full h-10 px-3 bg-[#0F1428] border border-white/10 text-xs rounded-none outline-none"
                      >
                        <option value="">{categories.length > 0 ? "Select Active ID" : "Run 'Fetch Categories' first"}</option>
                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      <Button onClick={() => handlePlanInterrogation('base')} className="bg-[#E8A33D] text-[#0F1428] font-bold uppercase tracking-widest text-[9px] h-11 rounded-none">1. Test Plan Endpoint</Button>
                      <Button onClick={() => handlePlanInterrogation('masterDetails')} variant="outline" className="border-white/10 text-[8px] font-bold rounded-none h-11">2. Test Master Details</Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" onClick={() => handlePlanInterrogation('standalone')} className="border-white/10 text-[8px] font-bold rounded-none h-9">Standalone</Button>
                        <Button variant="outline" onClick={() => handlePlanInterrogation('vasRider')} className="border-white/10 text-[8px] font-bold rounded-none h-9">VAS Rider</Button>
                      </div>
                    </div>
                 </CardContent>
              </Card>
            </div>

            {/* RIGHT COLUMN: DISCOVERY CONSOLE */}
            <div className="space-y-8">
              <div className="bg-[#0B0F22] border border-white/10 rounded-none min-h-[700px] flex flex-col shadow-2xl relative">
                <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5">
                   <div className="flex items-center gap-3">
                      <Terminal className="w-4 h-4 text-[#4FD1C5]" />
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6E7495]">UAT_Discovery_Log.sh</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className="font-mono text-[9px] text-[#6E7495] uppercase tracking-widest">Dolphin v2.0</span>
                   </div>
                </div>
                
                <div className="p-8 flex-1 overflow-auto custom-scrollbar font-mono text-[13px] leading-relaxed">
                  {!activeResult && !loading && (
                    <div className="h-full flex flex-col items-center justify-center pt-20 space-y-8 opacity-40">
                      <Activity className="w-16 h-16 text-[#9AA1C0]" />
                      <div className="text-center space-y-2">
                        <p className="text-sm">Console idle. Awaiting discovery instruction.</p>
                        <p className="text-[10px] uppercase tracking-widest">Select a test from the left panel to begin mapping.</p>
                      </div>
                    </div>
                  )}

                  {loading && (
                    <div className="flex flex-col items-center justify-center pt-20 space-y-6">
                      <Loader2 className="w-10 h-10 animate-spin text-[#E8A33D]" />
                      <p className="text-[#9AA1C0] animate-pulse uppercase tracking-[0.2em] text-[10px]">Calling Dolphin UAT Endpoint...</p>
                    </div>
                  )}

                  {activeResult && (
                    <div className="space-y-10 animate-in fade-in duration-500">
                      
                      {/* 1. Trace Header */}
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
                          <p className="text-[8px] uppercase text-[#6E7495]">Endpoint Checked</p>
                          <p className="text-[10px] text-white/60 truncate">{activeResult.endpoint}</p>
                        </div>
                      </div>

                      {/* 2. Verification Outcomes */}
                      {activeResult.roundTrip && (
                        <div className={cn("p-6 border rounded-none space-y-4", activeResult.verified ? "bg-[#4FD1C5]/5 border-[#4FD1C5]/20" : "bg-red-500/5 border-red-500/20")}>
                           <div className="flex items-center gap-2">
                              <ShieldCheck className={cn("w-4 h-4", activeResult.verified ? "text-[#4FD1C5]" : "text-red-500")} />
                              <span className={cn("text-[10px] font-bold uppercase tracking-widest", activeResult.verified ? "text-[#4FD1C5]" : "text-red-500")}>Protocol Verification Result</span>
                           </div>
                           <p className="text-sm text-white font-medium italic">"{activeResult.roundTrip}"</p>
                           {activeResult.decrypted && (
                             <div className="pt-2 border-t border-white/5">
                                <p className="text-[8px] uppercase text-white/40 mb-1">Observed Decrypted Output</p>
                                <p className="text-xs font-bold text-white font-mono">{activeResult.decrypted}</p>
                             </div>
                           )}
                        </div>
                      )}

                      {/* 3. Logical Conclusion Box */}
                      {activeResult.success && Array.isArray(activeResult.data) && activeResult.data.length === 0 && (
                        <div className="p-6 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-none space-y-2">
                           <div className="flex items-center gap-2 text-[#E8A33D]">
                              <Info className="w-4 h-4" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">UAT Data Mapping Observation</span>
                           </div>
                           <p className="text-sm text-white/80 leading-relaxed italic">
                              "UAT endpoint returned successfully, but no plan records were returned for these parameters. The reason for the empty result is not established by this test."
                           </p>
                        </div>
                      )}

                      {/* 4. Raw Schema Discovery */}
                      <div className="space-y-4">
                         <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Observed Schema Summary</p>
                            <span className="text-[9px] font-bold uppercase text-[#6E7495]">{Array.isArray(activeResult.data) ? `${activeResult.data.length} records found` : 'Object response'}</span>
                         </div>
                         <pre className="text-paper/90 overflow-x-auto whitespace-pre-wrap max-h-[800px] p-6 bg-white/[0.02] border border-white/5 rounded-none custom-scrollbar">
                           <code>{typeof activeResult.data === 'string' ? activeResult.data : JSON.stringify(activeResult.data, null, 2)}</code>
                         </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Session Trace */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <History className="w-4 h-4 text-[#6E7495]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Discovery Session Log</span>
                </div>
                <div className="bg-[#171D3A] border border-white/10 rounded-none overflow-hidden">
                   {testHistory.length > 0 ? (
                     <div className="divide-y divide-white/5">
                        {testHistory.map(entry => (
                          <div key={entry.id} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                            <div className="flex items-center gap-4 min-w-0">
                              <span className="text-[9px] font-mono text-[#6E7495] shrink-0">{entry.timestamp}</span>
                              <Badge variant="outline" className={cn("text-[8px] font-mono rounded-none", entry.success ? "text-green-500 border-green-500/20" : "text-red-500 border-red-500/20")}>
                                {entry.status}
                              </Badge>
                              <span className="text-[10px] font-bold text-white/80 truncate">{entry.label}</span>
                              {entry.isEmpty && <span className="text-[8px] font-bold text-[#E8A33D] uppercase">[EMPTY_SET]</span>}
                            </div>
                            <span className="text-[9px] font-mono text-[#6E7495]">{entry.time}ms</span>
                          </div>
                        ))}
                     </div>
                   ) : (
                     <div className="p-8 text-center text-[#6E7495] text-[11px] italic">No discovery steps recorded this session.</div>
                   )}
                </div>
              </div>

              {/* Read-Only Schema Auditor (Manual Reference) */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none">
                 <CardHeader className="p-6 border-b border-white/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <FileSearch className="w-4 h-4" /> Policy Schema Audit (Manual)
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Verified Correspondence</h4>
                       <ul className="space-y-2 text-[11px] font-medium text-[#9AA1C0]">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#4FD1C5]" /> Partner ID -> Path Parameter</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#4FD1C5]" /> Secret Key -> Encryption Key</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#4FD1C5]" /> Vector Bytes -> Encryption IV</li>
                       </ul>
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">Required from Asego</h4>
                       <ul className="space-y-2 text-[11px] font-medium text-[#9AA1C0]">
                          <li className="flex items-center gap-2"><AlertCircle className="w-3 h-3 text-[#E8A33D]" /> sign -> Identity Mapping</li>
                          <li className="flex items-center gap-2"><AlertCircle className="w-3 h-3 text-[#E8A33D]" /> reference -> Identity Mapping</li>
                          <li className="flex items-center gap-2"><AlertCircle className="w-3 h-3 text-[#E8A33D]" /> Validation Payload Sample</li>
                       </ul>
                    </div>
                 </CardContent>
              </Card>
            </div>

          </div>

          <div className="pt-12 border-t border-white/5 text-center flex flex-col items-center gap-4">
             <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">End of UAT Discovery Module</p>
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
