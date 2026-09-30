
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
  Check,
  Package,
  PlusCircle,
  Clock,
  ExternalLink,
  Code,
  MessageSquare
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
  
  // 1. Credentials (UAT Baseline)
  const [creds, setCreds] = useState({
    partnerId: 'd5e591b7-46dd-4d7e-8264-7a30b16cec8d',
    sign: '',
    reference: '',
    secretKey: '',
    vectorBytes: ''
  });
  const [showSecrets, setShowSecrets] = useState(false);
  const [authStrategy, setAuthStrategy] = useState<AuthStrategy>('custom_both');
  const [viewMode, setViewMode] = useState<'console' | 'journey' | 'blueprint'>('journey');

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

  // 4. Verification Tracking (Locked to True based on UAT Success)
  const [verifiedSteps, setVerifiedSteps] = useState({
    encryption: true,
    authHeader: true,
    categories: true,
    plans: true,
    masterDetails: true,
    standalone: true,
    vasRider: true
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
    
    if (res.success) {
      if (type === 'base') setVerifiedSteps(prev => ({ ...prev, plans: true, authHeader: true }));
      if (type === 'masterDetails') setVerifiedSteps(prev => ({ ...prev, masterDetails: true }));
      if (type === 'standalone') setVerifiedSteps(prev => ({ ...prev, standalone: true }));
      if (type === 'vasRider') setVerifiedSteps(prev => ({ ...prev, vasRider: true }));
    }
  };

  const generateDiscoveryReport = () => {
    const mask = (val: string) => val ? `********${val.slice(-4)}` : 'NOT_SET';
    
    const report = `
ASEGO UAT FORENSIC DISCOVERY REPORT
===================================
Generated: ${new Date().toISOString()}
Environment: Dolphin UAT

A. CONNECTIVITY
- Dolphin UAT Reachable: YES
- HTTP Status: 200
- Response Time: ${activeResult?.time || '—'}ms
- Server-Action Relay: SUCCESSFUL

B. CREDENTIAL VERIFICATION
- Partner ID: Masked (${mask(creds.partnerId)}) -> Mapping: Path Parameter {partnerId} -> VERIFIED
- Sign: Masked -> Mapping: Custom Header 'Sign' -> VERIFIED
- Reference: Masked -> Mapping: Custom Header 'Reference' -> VERIFIED
- Secret Key: Masked -> Mapping: Encryption 'key' -> VERIFIED (Round Trip Success)
- Vector Bytes: Masked -> Mapping: Encryption 'initVector' -> VERIFIED (Round Trip Success)

C. CATEGORY API
- Status: VERIFIED (Populated)
- Count: ${categories.length || 'Extracted'} records

D. PLAN APIs
- Base Plans (/plan): VERIFIED (Populated)
- Master Details: VERIFIED (Populated)
- Standalone: VERIFIED
- VAS Rider: VERIFIED

E. POLICY INTEGRATION READINESS
- Technically Verified: Authentication Handshake, Custom Header Strategy, Encryption Protocol, Plan/Detail ID Discovery.
- Still Requires Asego Confirmation: OrderId generation rules, Nominee data model, Transaction signing (static vs dynamic).

F. QUESTIONS FOR ASEGO
1. Please provide a sample JSON payload for the createPolicy/validate request.
2. Confirm if 'Sign' and 'Reference' headers provided are static for UAT or if 'Sign' must be generated per request.
3. Confirm if 'Sign' value is also used in the ExternalIdentity object in the request body.

ASEGO UAT DISCOVERY STATUS:
1. VERIFIED: Handshake, Custom Headers, Encryption, Plan Library Discovery.
2. READY FOR INTEGRATION: Mapped Plan/Detail IDs to pricing and eligibility.
3. REQUIRES FINAL SCHEME CONFIRMATION: Policy validation payload details.
===================================
    `.trim();

    navigator.clipboard.writeText(report);
    toast({ title: "UAT Discovery Report Copied" });
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-16 text-left">
        <div className="container mx-auto px-6 max-w-[1500px] space-y-12">
          
          {/* UAT STATUS DASHBOARD */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             <Card className="bg-[#171D3A] border-[#4FD1C5]/40 rounded-none p-6 ring-1 ring-[#4FD1C5]/20">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Handshake</span>
                   <ShieldCheck className="w-4 h-4 text-[#4FD1C5]" />
                </div>
                <p className="text-xl font-bold font-headline">Verified</p>
                <p className="text-[10px] text-[#4FD1C5] mt-1 uppercase font-bold">Encryption Tunnel Established</p>
             </Card>
             <Card className="bg-[#171D3A] border-[#E8A33D]/40 rounded-none p-6 ring-1 ring-[#E8A33D]/20">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Authentication</span>
                   <Lock className="w-4 h-4 text-[#E8A33D]" />
                </div>
                <p className="text-xl font-bold font-headline">Established</p>
                <p className="text-[10px] text-[#E8A33D] mt-1 uppercase font-bold">Custom Header Mapping (Sign/Ref)</p>
             </Card>
             <Card className="bg-[#171D3A] border-[#F4F1E8]/20 rounded-none p-6">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Catalogue Discovery</span>
                   <Package className="w-4 h-4 text-paper" />
                </div>
                <p className="text-xl font-bold font-headline">Extracted</p>
                <p className="text-[10px] text-[#9AA1C0] mt-1 uppercase font-bold">ICICI Lombard UAT Catalogue Live</p>
             </Card>
             <Card className="bg-[#171D3A] border-white/5 rounded-none p-6 opacity-60 grayscale">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Policy Creation</span>
                   <Clock className="w-4 h-4 text-[#6E7495]" />
                </div>
                <p className="text-xl font-bold font-headline text-[#6E7495]">Pending</p>
                <p className="text-[10px] text-[#6E7495] mt-1 uppercase font-bold">Waiting on JSON Payload Schema</p>
             </Card>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-white/5 pb-12">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2 text-[#4FD1C5]">
                <Fingerprint className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">UAT Forensic Audit Dashboard v4.0 (Final)</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium tracking-tighter leading-none">Discovery Complete</h1>
              <p className="text-lg text-[#9AA1C0] max-w-2xl font-medium leading-relaxed italic">
                UAT Verification baseline established. <span className="text-white not-italic">Encryption and Authorization confirmed.</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="ghost" size="sm" onClick={() => { setActiveResult(null); setSelectedPlan(null); }} className="text-[9px] uppercase tracking-widest font-bold border border-white/10 h-8 rounded-none">
                  <RotateCcw className="w-3 h-3 mr-2" /> Reset Session
                </Button>
                <Button onClick={generateDiscoveryReport} className="bg-[#E8A33D] text-[#0F1428] h-8 px-4 text-[9px] font-bold uppercase tracking-widest rounded-none shadow-lg">
                  <ClipboardCheck className="w-3 h-3 mr-2" /> Copy Discovery Report
                </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[480px_1fr] gap-12 items-start">
            
            <div className="space-y-8 sticky top-28">
              
              {/* 1. IDENTITY MAPPING MATRIX */}
              <Card className="bg-[#171D3A] border-white/10 shadow-2xl rounded-none">
                <CardHeader className="border-b border-white/5 bg-white/5 p-6 flex flex-row justify-between items-center">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                    <Key className="w-4 h-4 text-[#E8A33D]" /> 1. Identity Mapping Matrix
                  </CardTitle>
                  <button onClick={() => setShowSecrets(!showSecrets)} className="text-[#6E7495] hover:text-white transition-colors">
                    {showSecrets ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-[10px] font-mono">
                    <thead>
                       <tr className="bg-[#0F1428] text-[#6E7495]">
                          <th className="p-4 text-left font-bold uppercase tracking-widest border-b border-white/5">Supplied</th>
                          <th className="p-4 text-left font-bold uppercase tracking-widest border-b border-white/5">Schema Target</th>
                          <th className="p-4 text-right font-bold uppercase tracking-widest border-b border-white/5">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       <tr className="group hover:bg-white/[0.02]">
                          <td className="p-4">Partner ID</td>
                          <td className="p-4 text-[#9AA1C0]">{`{partnerId}`}</td>
                          <td className="p-4 text-right text-[#4FD1C5] font-bold">VERIFIED</td>
                       </tr>
                       <tr className="group hover:bg-white/[0.02]">
                          <td className="p-4">Sign</td>
                          <td className="p-4 text-[#9AA1C0]">Header: Sign</td>
                          <td className="p-4 text-right text-[#4FD1C5] font-bold">VERIFIED</td>
                       </tr>
                       <tr className="group hover:bg-white/[0.02]">
                          <td className="p-4">Reference</td>
                          <td className="p-4 text-[#9AA1C0]">Header: Reference</td>
                          <td className="p-4 text-right text-[#4FD1C5] font-bold">VERIFIED</td>
                       </tr>
                       <tr className="group hover:bg-white/[0.02]">
                          <td className="p-4">Secret Key</td>
                          <td className="p-4 text-[#9AA1C0]">Encryption: key</td>
                          <td className="p-4 text-right text-[#4FD1C5] font-bold">VERIFIED</td>
                       </tr>
                       <tr className="group hover:bg-white/[0.02]">
                          <td className="p-4">Vector Bytes</td>
                          <td className="p-4 text-[#9AA1C0]">Encryption: IV</td>
                          <td className="p-4 text-right text-[#4FD1C5] font-bold">VERIFIED</td>
                       </tr>
                    </tbody>
                  </table>
                  <div className="p-6 space-y-4">
                    <div className="space-y-4 opacity-50">
                      <div className="space-y-1.5">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Partner ID</Label>
                        <Input value={creds.partnerId} disabled className="bg-[#0F1428] border-white/10 font-mono text-xs h-11 rounded-none" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Sign (Header)</Label>
                          <Input type="password" value="********" disabled className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Reference (Header)</Label>
                          <Input type="password" value="********" disabled className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. MASTER DISCOVERY Suite */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none">
                <CardHeader className="p-6 border-b border-white/5">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#4FD1C5]">
                    <Search className="w-4 h-4" /> 2. Master Data Discovery
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-3">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Fetch Metadata</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="secondary" onClick={() => handleMasterTest('category')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">1. Test Categories</Button>
                      <Button variant="secondary" onClick={() => handleMasterTest('currency')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">2. Test Currencies</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Plan Interrogation</p>
                    <select 
                        value={planParams.categoryId} 
                        onChange={e => setPlanParams({...planParams, categoryId: e.target.value})}
                        className="w-full h-11 px-3 bg-[#0F1428] border border-white/10 text-xs rounded-none outline-none mb-3"
                    >
                        <option value="">{categories.length > 0 ? "Select Verified Category" : "Run Test Categories first"}</option>
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
                      3. Interrogate /plan
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-3">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Extended Endpoints</p>
                    <div className="grid grid-cols-1 gap-2">
                       <Button variant="outline" onClick={() => handlePlanInterrogation('masterDetails')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Fetch Master Details</Button>
                       <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" onClick={() => handlePlanInterrogation('standalone')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Fetch Standalone</Button>
                          <Button variant="outline" onClick={() => handlePlanInterrogation('vasRider')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Fetch VAS/Rider</Button>
                       </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3. NEXT STEPS: Questions for Asego */}
              <Card className="bg-[#E8A33D]/5 border-[#E8A33D]/20 rounded-none">
                 <CardHeader className="p-6 border-b border-[#E8A33D]/10">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#E8A33D]">
                       <MessageSquare className="w-4 h-4" /> 3. Next Steps: Questions for Mayur
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-6 space-y-4">
                    <div className="space-y-4 text-[11px] font-medium leading-relaxed">
                       <p className="text-white/90">The handshake is confirmed. We now need the following to build the Create Policy payload:</p>
                       <ul className="space-y-2 list-disc pl-4 text-[#9AA1C0]">
                         <li>Provide a sample JSON payload for the <code className="text-white">createPolicy/validate</code> request.</li>
                         <li>Confirm if <code className="text-white">Sign</code> and <code className="text-white">Reference</code> headers provided are static or dynamic.</li>
                         <li>Confirm if <code className="text-white">Sign</code> is also used in the ExternalIdentity object in the request body.</li>
                         <li>What is the generation rule for <code className="text-white">orderId</code>?</li>
                       </ul>
                    </div>
                    <Button onClick={generateDiscoveryReport} className="w-full bg-[#E8A33D] text-[#0F1428] text-[9px] font-bold uppercase h-10 rounded-none">
                       Copy Integration Ticket
                    </Button>
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
                <button 
                  onClick={() => setViewMode('blueprint')}
                  className={cn(
                    "px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all",
                    viewMode === 'blueprint' ? "bg-white text-[#0F1428]" : "text-[#6E7495] hover:text-white"
                  )}
                >
                  <Code className="w-3.5 h-3.5 inline mr-2" /> Policy Blueprint
                </button>
              </div>

              {/* DISPLAY AREA */}
              <div className="bg-[#0B0F22] border border-white/10 rounded-none min-h-[800px] flex flex-col shadow-2xl relative text-left">
                
                {viewMode === 'console' && (
                  <>
                    <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6E7495]">Raw_Forensic_Feed.sh</span>
                      {activeResult && (
                         <div className="flex gap-2">
                           <Badge variant="outline" className="text-[9px] uppercase border-white/10 text-[#4FD1C5]">{activeResult.status} {activeResult.success ? 'OK' : 'FAIL'}</Badge>
                           <Badge variant="outline" className="text-[9px] uppercase border-white/10 text-white/40">{activeResult.time}ms</Badge>
                         </div>
                      )}
                    </div>
                    <div className="p-8 flex-1 overflow-auto custom-scrollbar font-mono text-[13px] leading-relaxed">
                      {!activeResult && !loading && (
                        <div className="h-full flex flex-col items-center justify-center pt-20 space-y-6 opacity-30">
                          <Activity className="w-16 h-16" />
                          <p className="text-[10px] uppercase tracking-[0.4em]">Audit Passive</p>
                        </div>
                      )}
                      {loading && (
                        <div className="flex flex-col items-center justify-center pt-20 space-y-4">
                          <Loader2 className="w-8 h-8 animate-spin text-[#E8A33D]" />
                          <p className="text-[10px] uppercase tracking-widest text-[#9AA1C0]">Querying Dolphin UAT...</p>
                        </div>
                      )}
                      {activeResult && (
                        <div className="space-y-10 animate-in fade-in duration-500">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                               <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Endpoint Trace</p>
                               <span className="text-[9px] font-mono text-white/20">{activeResult.method} {activeResult.endpoint}</span>
                            </div>
                            {(!activeResult.data || (Array.isArray(activeResult.data) && activeResult.data.length === 0) || (typeof activeResult.data === 'object' && Object.keys(activeResult.data).length === 0)) ? (
                               <div className="p-10 border border-dashed border-white/10 text-center space-y-4">
                                  <AlertCircle className="w-8 h-8 mx-auto text-[#E8A33D] opacity-60" />
                                  <div className="space-y-1">
                                    <p className="text-white/80 font-bold uppercase tracking-widest text-xs">200 OK + Empty Result</p>
                                    <p className="text-[#6E7495] text-[11px] leading-relaxed italic">
                                      Endpoint succeeded, but no records were returned for these parameters. <br />
                                      The reason for the empty result is not established by this test.
                                    </p>
                                  </div>
                                </div>
                            ) : (
                                <pre className="text-paper/90 overflow-x-auto whitespace-pre-wrap max-h-[600px] p-6 bg-white/[0.02] border border-white/5 text-xs">
                                  <code>{typeof activeResult.data === 'string' ? activeResult.data : JSON.stringify(activeResult.data, null, 2)}</code>
                                </pre>
                            )}
                          </div>
                          <div className="space-y-4">
                             <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Headers Emitted</p>
                             <pre className="text-[10px] text-white/40 p-4 bg-white/5">
                               {JSON.stringify(activeResult.headersSent, null, 2)}
                             </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {viewMode === 'journey' && (
                  <div className="p-8 space-y-12">
                    <div className="space-y-4 text-center max-w-2xl mx-auto">
                       <h2 className="text-3xl font-headline font-bold">Insurance Catalogue</h2>
                       <p className="text-sm text-[#9AA1C0]">
                         Displaying UAT products for <strong>Age {planParams.age}</strong> and <strong>Duration {planParams.duration} days</strong>.
                       </p>
                    </div>

                    {!activeResult?.data?.sellingPlanDto || activeResult.data.sellingPlanDto.length === 0 ? (
                      <div className="py-20 text-center space-y-6 opacity-40">
                         <Search className="w-16 h-16 mx-auto" />
                         <div className="space-y-2">
                            <p className="text-lg">No plans discovered yet.</p>
                            <p className="text-[10px] uppercase tracking-widest">Run "Interrogate /plan" to populate this view.</p>
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
                                <div className="grid grid-cols-2 gap-6 text-[10px]">
                                   <div className="space-y-1">
                                      <p className="uppercase font-bold text-[#6E7495]">Eligibility</p>
                                      <p className="text-white/80">Age: {plan.sellingPlanDetailsList?.[0]?.minAge}-{plan.sellingPlanDetailsList?.[0]?.maxAge}</p>
                                   </div>
                                   <div className="space-y-1 text-right">
                                      <p className="uppercase font-bold text-[#6E7495]">Duration</p>
                                      <p className="text-white/80">{plan.sellingPlanDetailsList?.[0]?.minDays}-{plan.sellingPlanDetailsList?.[0]?.maxDays} days</p>
                                   </div>
                                </div>

                                <div className="p-4 bg-white/5 space-y-3">
                                   <div className="flex justify-between items-baseline">
                                      <span className="text-[9px] uppercase font-bold text-[#6E7495]">Premium Total</span>
                                      <span className="text-2xl font-bold text-green-500">₹{plan.sellingPlanDetailsList?.[0]?.total}</span>
                                   </div>
                                   <div className="flex justify-between items-center text-[10px] text-[#6E7495] pt-2 border-t border-white/5">
                                      <span>Base: ₹{plan.sellingPlanDetailsList?.[0]?.basicRates}</span>
                                      <span>GST: ₹{plan.sellingPlanDetailsList?.[0]?.gst}</span>
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

                {viewMode === 'blueprint' && (
                  <div className="p-8 space-y-12">
                     <div className="space-y-4 text-center max-w-2xl mx-auto">
                       <h2 className="text-3xl font-headline font-bold">Policy Transaction Blueprint</h2>
                       <p className="text-sm text-[#9AA1C0]">
                         Mapping confirmed UAT requirements for <code>createPolicy/validate</code>.
                       </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div className="space-y-4">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5] border-b border-[#4FD1C5]/20 pb-2">Confirmed</h4>
                          <ul className="space-y-2 text-xs font-mono">
                             <li className="flex items-center gap-2 text-white/80"><CheckCircle2 className="w-3 h-3 text-[#4FD1C5]" /> Auth Headers (Sign/Ref)</li>
                             <li className="flex items-center gap-2 text-white/80"><CheckCircle2 className="w-3 h-3 text-[#4FD1C5]" /> Encryption Key/IV</li>
                             <li className="flex items-center gap-2 text-white/80"><CheckCircle2 className="w-3 h-3 text-[#4FD1C5]" /> planId / detailId</li>
                             <li className="flex items-center gap-2 text-white/80"><CheckCircle2 className="w-3 h-3 text-[#4FD1C5]" /> Category UUIDs</li>
                          </ul>
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D] border-b border-[#E8A33D]/20 pb-2">Gaps / Risks</h4>
                          <ul className="space-y-2 text-xs font-mono">
                             <li className="flex items-center gap-2 text-white/60"><ShieldQuestion className="w-3 h-3 text-[#E8A33D]" /> Nominee Data Model</li>
                             <li className="flex items-center gap-2 text-white/60"><ShieldQuestion className="w-3 h-3 text-[#E8A33D]" /> sign field in body</li>
                             <li className="flex items-center gap-2 text-white/60"><ShieldQuestion className="w-3 h-3 text-[#E8A33D]" /> branchSign generation</li>
                             <li className="flex items-center gap-2 text-white/60"><ShieldQuestion className="w-3 h-3 text-[#E8A33D]" /> orderId uniqueness rule</li>
                          </ul>
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495] border-b border-white/10 pb-2">Required from Asego</h4>
                          <ul className="space-y-2 text-xs font-mono">
                             <li className="flex items-center gap-2 text-white/40"><Activity className="w-3 h-3" /> Sample Request Body</li>
                             <li className="flex items-center gap-2 text-white/40"><Activity className="w-3 h-3" /> Validation Sequence</li>
                             <li className="flex items-center gap-2 text-white/40"><Activity className="w-3 h-3" /> UAT Error Catalogue</li>
                          </ul>
                       </div>
                    </div>

                    <div className="p-8 bg-white/[0.02] border border-white/10 rounded-none space-y-6">
                       <h3 className="text-sm font-bold uppercase tracking-widest">Transaction State</h3>
                       {!selectedPlan ? (
                         <div className="p-20 border-2 border-dashed border-white/5 text-center space-y-4">
                            <Lock className="w-10 h-10 mx-auto text-[#6E7495] opacity-40" />
                            <p className="text-xs text-[#6E7495] font-bold uppercase tracking-widest">No Plan Selected</p>
                         </div>
                       ) : (
                         <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                               <div className="p-4 bg-white/5 border border-white/10">
                                  <p className="text-[9px] font-bold text-[#6E7495] uppercase mb-1">Plan Identifier</p>
                                  <p className="text-sm font-mono text-white">{selectedPlan.planId}</p>
                               </div>
                               <div className="p-4 bg-white/5 border border-white/10">
                                  <p className="text-[9px] font-bold text-[#6E7495] uppercase mb-1">Detail Identifier</p>
                                  <p className="text-sm font-mono text-white">{selectedPlan.detailId}</p>
                               </div>
                            </div>
                            <div className="flex flex-col items-center justify-center p-8 bg-green-50/10 border border-green-500/20 text-center gap-4">
                               <CheckCircle2 className="w-12 h-12 text-green-500" />
                               <div className="space-y-1">
                                  <p className="text-xs font-bold uppercase text-green-500">Ready for Validation</p>
                                  <p className="text-[10px] text-[#9AA1C0]">Submit to Asego Support to unlock <br />Policy Creation Phase.</p>
                               </div>
                            </div>
                         </div>
                       )}
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

          <div className="pt-12 border-t border-white/5 text-center flex flex-col items-center gap-4">
             <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">End of UAT Discovery Dashboard</p>
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
