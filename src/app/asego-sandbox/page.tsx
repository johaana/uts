'use client';

import React, { useState, useEffect } from 'react';
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
  ShieldAlert, 
  Database, 
  Lock, 
  Activity, 
  ClipboardCheck, 
  History,
  Info,
  FlaskConical,
  Zap,
  RotateCcw
} from "lucide-react";
import { 
  testAsegoEndpoint, 
  runPlanTest, 
  runMasterPlanTest, 
  runEncryptionTest,
  runStandalonePlanTest,
  runVasRiderPlanTest
} from './actions';
import { useToast } from '@/hooks/use-toast';

export default function AsegoSandboxPage() {
  const { toast } = useToast();
  
  // Results & History
  const [activeResult, setActiveResult] = useState<any>(null);
  const [testHistory, setTestHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  // Inputs
  const [partnerId, setPartnerId] = useState('');
  const [age, setAge] = useState('20');
  const [duration, setDuration] = useState('30');
  const [category, setCategory] = useState('');

  // Encryption Inputs
  const [encKey, setEncKey] = useState('');
  const [encIV, setEncIV] = useState('');
  const [encValue, setEncValue] = useState('');

  const addToHistory = (result: any) => {
    const entry = {
      timestamp: new Date().toLocaleTimeString(),
      endpoint: result.endpoint,
      status: result.status,
      success: result.success,
      time: result.time,
      id: Math.random().toString(36).substr(2, 9)
    };
    setTestHistory(prev => [entry, ...prev].slice(0, 10));
  };

  const handleMasterTest = async (path: string, label: string) => {
    setLoading(true);
    const res = await testAsegoEndpoint(path);
    setActiveResult(res);
    addToHistory(res);
    setLoading(false);
    
    if (path === '/ext/b2b/v1/category' && res.success) {
      setCategories(res.data);
    }

    toast({ 
      title: `${label} Completed`, 
      variant: res.success ? "default" : "destructive" 
    });
  };

  const handlePlanLookup = async () => {
    if (!partnerId) return toast({ title: "Partner ID required", variant: "destructive" });
    setLoading(true);
    const res = await runPlanTest({ partnerId, age, duration, category });
    setActiveResult(res);
    addToHistory(res);
    setLoading(false);
  };

  const handleMasterPlanLookup = async () => {
    if (!partnerId) return toast({ title: "Partner ID required", variant: "destructive" });
    setLoading(true);
    const res = await runMasterPlanTest(partnerId);
    setActiveResult(res);
    addToHistory(res);
    setLoading(false);
  };

  const handleStandaloneLookup = async () => {
    if (!partnerId) return toast({ title: "Partner ID required", variant: "destructive" });
    setLoading(true);
    const res = await runStandalonePlanTest(partnerId);
    setActiveResult(res);
    addToHistory(res);
    setLoading(false);
  };

  const handleVasRiderLookup = async () => {
    if (!partnerId) return toast({ title: "Partner ID required", variant: "destructive" });
    setLoading(true);
    const res = await runVasRiderPlanTest(partnerId);
    setActiveResult(res);
    addToHistory(res);
    setLoading(false);
  };

  const handleEncryption = async (type: 'encrypt' | 'decrypt') => {
    if (!encKey || !encIV || !encValue) return toast({ title: "Key, IV, and Value required", variant: "destructive" });
    setLoading(true);
    const res = await runEncryptionTest(type, { key: encKey, initVector: encIV, value: encValue });
    setActiveResult(res);
    addToHistory(res);
    setLoading(false);
  };

  const copyDiagnostic = () => {
    if (!activeResult) return;
    
    const maskedPartnerId = partnerId ? partnerId.slice(0, -4).replace(/./g, '*') + partnerId.slice(-4) : 'NOT_PROVIDED';
    
    const report = `
ASEGO DOLPHIN UAT DIAGNOSTIC REPORT
-----------------------------------
Timestamp: ${new Date().toISOString()}
Endpoint: ${activeResult.endpoint}
Method: ${activeResult.method}
HTTP Status: ${activeResult.status}
Response Time: ${activeResult.time}ms
Partner ID: ${maskedPartnerId}
Parameters: age=${age}, duration=${duration}, category=${category}
-----------------------------------
RESPONSE BODY:
${JSON.stringify(activeResult.data, null, 2)}
-----------------------------------
    `.trim();

    navigator.clipboard.writeText(report);
    toast({ title: "Diagnostic Report Copied" });
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-[1400px] space-y-12">
          
          {/* Header Diagnostics */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-white/5 pb-12 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#E8A33D]">
                <FlaskConical className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">API Diagnostic Console v4.2</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-medium tracking-tighter leading-none">Dolphin UAT Lab</h1>
              <p className="text-lg text-[#9AA1C0] max-w-2xl font-medium leading-relaxed">
                A secure environment for interrogating the Asego B2B logic layer. 
                Phase 1-4: Master Data & selling plan discovery.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="ghost" size="sm" onClick={() => { setActiveResult(null); setTestHistory([]); }} className="text-[9px] uppercase tracking-widest font-bold border border-white/10 h-8">
                  <RotateCcw className="w-3 h-3 mr-2" /> Reset Session
                </Button>
                <Badge variant="outline" className="border-white/10 text-[#6E7495] font-mono">DOLPHIN_UAT</Badge>
                <Badge variant="outline" className="border-green-500/20 text-green-500 font-mono flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> API_ONLINE
                </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-[450px_1fr] gap-12 items-start">
            
            {/* LEFT COLUMN: CONTROL PANELS */}
            <div className="space-y-8 sticky top-28">
              
              {/* Credentials & Plan Test */}
              <Card className="bg-[#171D3A] border-white/10 shadow-2xl rounded-sm overflow-hidden">
                <CardHeader className="border-b border-white/5 bg-white/5 p-6">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                    <Database className="w-4 h-4 text-[#E8A33D]" /> Plan Interrogation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6 text-left">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Partner ID (Path Param)</Label>
                      <Input 
                        value={partnerId}
                        onChange={(e) => setPartnerId(e.target.value)}
                        className="bg-[#0F1428] border-white/10 text-white h-11 font-mono text-xs focus:ring-1 focus:ring-[#E8A33D]"
                        placeholder="Enter UAT Partner ID"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Age</Label>
                        <Input value={age} onChange={e => setAge(e.target.value)} className="bg-[#0F1428] border-white/10 h-11 text-sm" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Duration (Days)</Label>
                        <Input value={duration} onChange={e => setDuration(e.target.value)} className="bg-[#0F1428] border-white/10 h-11 text-sm" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Category (Select from Master)</Label>
                      <select 
                        value={category} 
                        onChange={e => setCategory(e.target.value)}
                        className="w-full h-11 px-3 bg-[#0F1428] border border-white/10 rounded-sm text-sm text-white focus:ring-1 focus:ring-[#E8A33D] outline-none"
                      >
                        <option value="">{categories.length > 0 ? "Choose Category" : "Run 'Test Categories' first"}</option>
                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 pt-4">
                    <Button 
                      onClick={handlePlanLookup}
                      disabled={loading}
                      className="w-full h-12 bg-[#E8A33D] text-[#0F1428] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#F0C888] rounded-none shadow-lg"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                      Run Plan Test
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline"
                        onClick={handleStandaloneLookup}
                        disabled={loading}
                        className="h-10 border-white/10 hover:bg-white/5 font-bold uppercase tracking-[0.2em] text-[8px] rounded-none"
                      >
                        Standalone
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={handleVasRiderLookup}
                        disabled={loading}
                        className="h-10 border-white/10 hover:bg-white/5 font-bold uppercase tracking-[0.2em] text-[8px] rounded-none"
                      >
                        VAS Rider
                      </Button>
                    </div>
                    <Button 
                      variant="outline"
                      onClick={handleMasterPlanLookup}
                      disabled={loading}
                      className="w-full h-11 border-white/10 hover:bg-white/5 font-bold uppercase tracking-[0.2em] text-[9px] rounded-none"
                    >
                      Run Master Plan Details
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Master Data Suite */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-sm">
                <CardHeader className="p-6 border-b border-white/5">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#4FD1C5]">
                    <Zap className="w-4 h-4" /> 1. Master Data Tests
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 grid grid-cols-1 gap-3">
                  <Button variant="secondary" onClick={() => handleMasterTest('/ext/b2b/v1/category', 'Categories')} className="justify-start h-10 text-[9px] uppercase tracking-widest font-bold">1. Test Categories</Button>
                  <Button variant="secondary" onClick={() => handleMasterTest('/ext/b2b/v1/currency', 'Currencies')} className="justify-start h-10 text-[9px] uppercase tracking-widest font-bold">2. Test Currencies</Button>
                  <Button variant="secondary" onClick={() => handleMasterTest('/ext/b2b/v1/reasons/CANCELLATION', 'Reasons')} className="justify-start h-10 text-[9px] uppercase tracking-widest font-bold">3. Test Reasons (Cancel)</Button>
                </CardContent>
              </Card>

              {/* Encryption Lab */}
              <Card className="bg-[#0B0F22] border-dashed border-white/10 rounded-sm">
                 <CardHeader className="p-6 border-b border-white/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-white/40">
                       <Lock className="w-4 h-4" /> Encryption Lab — Phased Test
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-6 space-y-4 text-left">
                    <div className="p-4 bg-white/5 border-l-2 border-[#E8A33D] rounded-r-sm mb-4">
                      <p className="text-[9px] leading-relaxed text-[#9AA1C0]">
                        <b>Note:</b> Encryption protocol details not specified in the Swagger. Requires confirmation from Asego.
                      </p>
                    </div>
                    <div className="space-y-4">
                       <div className="space-y-1">
                          <Label className="text-[8px] uppercase text-[#6E7495]">Test Plaintext</Label>
                          <Input value={encValue} onChange={e => setEncValue(e.target.value)} placeholder="Value to encrypt" className="h-10 bg-white/5 border-white/10 text-xs font-mono" />
                       </div>
                       <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <Label className="text-[8px] uppercase text-[#6E7495]">Encryption Key</Label>
                            <Input value={encKey} onChange={e => setEncKey(e.target.value)} type="password" placeholder="Key" className="h-10 bg-white/5 border-white/10 text-xs" />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-[8px] uppercase text-[#6E7495]">Init Vector (IV)</Label>
                            <Input value={encIV} onChange={e => setEncIV(e.target.value)} placeholder="IV" className="h-10 bg-white/5 border-white/10 text-xs" />
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-2 pt-2">
                          <Button onClick={() => handleEncryption('encrypt')} variant="ghost" disabled={loading} className="border border-white/10 text-[9px] font-bold uppercase tracking-widest h-10 hover:bg-[#4FD1C5]/10 rounded-none">Encrypt</Button>
                          <Button onClick={() => handleEncryption('decrypt')} variant="ghost" disabled={loading} className="border border-white/10 text-[9px] font-bold uppercase tracking-widest h-10 hover:bg-[#E8A33D]/10 rounded-none">Decrypt</Button>
                       </div>
                    </div>
                 </CardContent>
              </Card>

              {/* Validation & Creation Gate */}
              <Card className="bg-[#0B0F22] border-white/10 opacity-60">
                 <CardHeader className="p-6 border-b border-white/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <ShieldAlert className="w-4 h-4" /> Policy Creation Gate
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-6 space-y-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                      <p className="text-[10px] leading-relaxed text-[#9AA1C0] text-left">
                        Create Policy testing is intentionally blocked until the UAT request structure has been confirmed. Requires valid plan IDs and verified sign/hash logic.
                      </p>
                    </div>
                    <Button disabled className="w-full text-[9px] font-bold uppercase tracking-[0.2em] rounded-none bg-white/5">Validation Not Enabled</Button>
                 </CardContent>
              </Card>
            </div>

            {/* RIGHT COLUMN: CONSOLE OUTPUT */}
            <div className="space-y-8">
              
              {/* ACTIVE CONSOLE */}
              <div className="bg-[#0B0F22] border border-white/10 rounded-sm min-h-[600px] flex flex-col shadow-2xl relative">
                <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5">
                   <div className="flex items-center gap-3">
                      <Terminal className="w-4 h-4 text-[#4FD1C5]" />
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6E7495]">Response_Stream.log</span>
                   </div>
                   <div className="flex items-center gap-4">
                      {activeResult && (
                        <button onClick={copyDiagnostic} className="text-[10px] font-bold text-[#E8A33D] hover:text-white flex items-center gap-2 transition-colors">
                          <ClipboardCheck className="w-3.5 h-3.5" /> Copy Diagnostic Report
                        </button>
                      )}
                      <span className="font-mono text-[9px] text-[#6E7495] uppercase tracking-widest">Dolphin v2.0</span>
                   </div>
                </div>
                
                <div className="p-8 flex-1 overflow-auto custom-scrollbar font-mono text-[13px] leading-relaxed text-left">
                  {!activeResult && !loading && (
                    <div className="h-full flex flex-col items-center justify-center pt-20 space-y-4 opacity-40">
                      <Activity className="w-12 h-12 text-[#9AA1C0]" />
                      <p className="text-sm">Awaiting API instruction...</p>
                    </div>
                  )}

                  {loading && (
                    <div className="flex flex-col items-center justify-center pt-20 space-y-6">
                      <Loader2 className="w-10 h-10 animate-spin text-[#E8A33D]" />
                      <p className="text-[#9AA1C0] animate-pulse">Requesting Dolphin UAT...</p>
                    </div>
                  )}

                  {activeResult && (
                    <div className="space-y-10 animate-in fade-in duration-500">
                      
                      {/* Trace Metadata */}
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
                          <p className="text-[8px] uppercase text-[#6E7495]">Endpoint</p>
                          <p className="text-[10px] text-white/60 truncate">{activeResult.endpoint}</p>
                        </div>
                      </div>

                      {/* Explicit Empty Result Logic */}
                      {activeResult.success && Array.isArray(activeResult.data) && activeResult.data.length === 0 && (
                        <div className="p-6 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-sm space-y-4">
                           <div className="flex items-center gap-3 text-[#E8A33D]">
                              <Info className="w-5 h-5" />
                              <h4 className="font-bold uppercase tracking-widest text-xs">Empty Result Notification</h4>
                           </div>
                           <p className="text-sm text-[#9AA1C0] leading-relaxed">
                              UAT endpoint returned successfully, but no plan records were returned for these parameters. The reason is not established.
                           </p>
                           <p className="text-[10px] text-[#6E7495] font-mono">
                             Params: age={age}, duration={duration}, category={category}
                           </p>
                        </div>
                      )}

                      {/* Raw Data Output */}
                      <div className="space-y-4">
                         <div className="flex items-center justify-between">
                            <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Raw Data Payload</p>
                            <button onClick={() => {
                              navigator.clipboard.writeText(JSON.stringify(activeResult.data, null, 2));
                              toast({ title: "JSON Copied" });
                            }} className="text-[10px] font-bold text-[#4FD1C5] hover:underline">Copy JSON</button>
                         </div>
                         <pre className="text-paper/90 overflow-x-auto whitespace-pre-wrap max-h-[800px] p-6 bg-white/[0.02] border border-white/5 rounded-sm custom-scrollbar">
                           <code>{JSON.stringify(activeResult.data, null, 2)}</code>
                         </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* TEST HISTORY (SESSION ONLY) */}
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <History className="w-4 h-4 text-[#6E7495]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Session Log (Last 10)</span>
                </div>
                <div className="bg-[#171D3A] border border-white/10 rounded-sm overflow-hidden">
                   {testHistory.length > 0 ? (
                     <div className="divide-y divide-white/5">
                        {testHistory.map(entry => (
                          <div key={entry.id} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                            <div className="flex items-center gap-4">
                              <span className="text-[9px] font-mono text-[#6E7495]">{entry.timestamp}</span>
                              <Badge variant="outline" className={cn("text-[8px] font-mono", entry.success ? "text-green-500 border-green-500/20" : "text-red-500 border-red-500/20")}>
                                {entry.status}
                              </Badge>
                              <span className="text-[10px] font-mono text-white/60 truncate max-w-[300px]">{entry.endpoint}</span>
                            </div>
                            <span className="text-[9px] font-mono text-[#6E7495]">{entry.time}ms</span>
                          </div>
                        ))}
                     </div>
                   ) : (
                     <div className="p-8 text-center text-[#6E7495] text-[11px] italic">No activity recorded this session.</div>
                   )}
                </div>
              </div>
            </div>

          </div>

          <div className="pt-12 border-t border-white/5 text-center">
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
