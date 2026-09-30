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
  FlaskConical,
  Zap,
  RotateCcw,
  Key,
  ShieldCheck,
  Search,
  Eye,
  EyeOff,
  CheckCircle2
} from "lucide-react";
import { 
  testAsegoEndpoint, 
  runPlanTest, 
  runEncryptionTest
} from './actions';
import { useToast } from '@/hooks/use-toast';

export default function AsegoSandboxPage() {
  const { toast } = useToast();
  
  // Credentials (UAT ONLY)
  const [partnerId, setPartnerId] = useState('');
  const [sign, setSign] = useState('');
  const [reference, setReference] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [vectorBytes, setVectorBytes] = useState('');
  const [showSecrets, setShowSecrets] = useState(false);

  // Discovery Results
  const [activeResult, setActiveResult] = useState<any>(null);
  const [testHistory, setTestHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  // Plan Inputs
  const [age, setAge] = useState('20');
  const [duration, setDuration] = useState('30');
  const [selectedCategory, setSelectedCategory] = useState('');

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

  const handlePlanLookup = async (path: string) => {
    if (!partnerId) return toast({ title: "Partner ID required", variant: "destructive" });
    setLoading(true);
    
    let res;
    if (path === '/ext/b2b/v1/plan/') {
      res = await runPlanTest({ partnerId, age, duration, category: selectedCategory });
    } else {
      res = await testAsegoEndpoint(`${path}${partnerId}${path.endsWith('/') ? '' : '/'}`);
    }
    
    setActiveResult(res);
    addToHistory(res);
    setLoading(false);
  };

  const handleEncryptionRoundTrip = async () => {
    if (!secretKey || !vectorBytes) return toast({ title: "Secret Key and Vector Bytes required", variant: "destructive" });
    setLoading(true);
    
    const plaintext = "ASEGO-UAT-TEST";
    const encryptRes = await runEncryptionTest('encrypt', { 
      key: secretKey, 
      initVector: vectorBytes, 
      value: plaintext 
    });

    if (encryptRes.success) {
      const ciphertext = encryptRes.data;
      const decryptRes = await runEncryptionTest('decrypt', {
        key: secretKey, 
        initVector: vectorBytes, 
        value: ciphertext 
      });

      const roundTripSuccess = decryptRes.success && decryptRes.data.trim() === plaintext;
      
      setActiveResult({
        ...encryptRes,
        roundTrip: roundTripSuccess ? "Encryption/decryption round trip successful." : `Decryption returned: ${decryptRes.data}`,
        decryptedValue: decryptRes.data,
        ciphertext: ciphertext
      });
    } else {
      setActiveResult(encryptRes);
    }
    
    addToHistory(encryptRes);
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
-----------------------------------
RESPONSE BODY:
${typeof activeResult.data === 'string' ? activeResult.data : JSON.stringify(activeResult.data, null, 2)}
-----------------------------------
    `.trim();

    navigator.clipboard.writeText(report);
    toast({ title: "Diagnostic Report Copied" });
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
                <FlaskConical className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">API Discovery Lab v5.1</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-medium tracking-tighter leading-none">Credential Mapping & UAT</h1>
              <p className="text-lg text-[#9AA1C0] max-w-2xl font-medium leading-relaxed">
                Establish exact correspondence between UAT credentials and the Swagger specification.
                Status: <span className="text-[#4FD1C5]">Encryption Protocol Verified.</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="ghost" size="sm" onClick={() => { setActiveResult(null); setTestHistory([]); }} className="text-[9px] uppercase tracking-widest font-bold border border-white/10 h-8 rounded-none">
                  <RotateCcw className="w-3 h-3 mr-2" /> Reset Session
                </Button>
                <Badge variant="outline" className="border-white/10 text-[#6E7495] font-mono rounded-none">DOLPHIN_UAT</Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-[450px_1fr] gap-12 items-start">
            
            {/* LEFT COLUMN: CONTROLS */}
            <div className="space-y-8 sticky top-28">
              
              {/* 1. CREDENTIALS */}
              <Card className="bg-[#171D3A] border-white/10 shadow-2xl rounded-none">
                <CardHeader className="border-b border-white/5 bg-white/5 p-6 flex flex-row justify-between items-center">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                    <Key className="w-4 h-4 text-[#E8A33D]" /> 1. UAT Credential Vault
                  </CardTitle>
                  <button onClick={() => setShowSecrets(!showSecrets)} className="text-[#6E7495] hover:text-white transition-colors">
                    {showSecrets ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </CardHeader>
                <CardContent className="p-8 space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Partner ID</Label>
                      <Input value={partnerId} onChange={e => setPartnerId(e.target.value)} placeholder="Path & Identity param" className="bg-[#0F1428] border-white/10 font-mono text-xs h-11 rounded-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Sign</Label>
                        <Input type={showSecrets ? "text" : "password"} value={sign} onChange={e => setSign(e.target.value)} placeholder="Identity.sign" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Reference</Label>
                        <Input type={showSecrets ? "text" : "password"} value={reference} onChange={e => setReference(e.target.value)} placeholder="Identity.reference" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Secret Key</Label>
                      <Input type={showSecrets ? "text" : "password"} value={secretKey} onChange={e => setSecretKey(e.target.value)} placeholder="Encryption Candidate" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Vector Bytes</Label>
                      <Input type={showSecrets ? "text" : "password"} value={vectorBytes} onChange={e => setVectorBytes(e.target.value)} placeholder="initVector Candidate" className="bg-[#0F1428] border-white/10 h-11 rounded-none" />
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Diagnostic Mapping</p>
                    <div className="space-y-2 text-[11px] font-mono text-[#9AA1C0]">
                       <div className="flex justify-between"><span>Partner ID</span><span className="text-[#4FD1C5]">→ {`{partnerId}`}</span></div>
                       <div className="flex justify-between"><span>Reference</span><span className="text-white/40">→ identity.reference</span></div>
                       <div className="flex justify-between"><span>Sign</span><span className="text-white/40">→ identity.sign</span></div>
                       <div className="flex justify-between"><span>Secret Key</span><span className="text-[#4FD1C5]">→ encryption key [VERIFIED]</span></div>
                       <div className="flex justify-between"><span>Vector Bytes</span><span className="text-[#4FD1C5]">→ initVector [VERIFIED]</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 2. ENCRYPTION */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none border-dashed">
                <CardHeader className="p-6 border-b border-white/5">
                   <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-white/40">
                      <Lock className="w-4 h-4" /> 2. Encryption Round-Trip
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                   <div className="p-4 bg-white/5 border-l-2 border-[#E8A33D] rounded-none">
                      <p className="text-[10px] leading-relaxed text-[#9AA1C0]">
                        <b>Test Parameters:</b> Value = <code className="text-white">ASEGO-UAT-TEST</code>. Key = Secret Key. IV = Vector Bytes. No transformations applied.
                      </p>
                   </div>
                   <Button 
                    onClick={handleEncryptionRoundTrip}
                    disabled={loading}
                    className="w-full h-11 bg-white/[0.03] border border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-[10px] rounded-none"
                   >
                     {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Play className="w-3 h-3 mr-2" />}
                     Run Round-Trip Test
                   </Button>
                </CardContent>
              </Card>

              {/* 3. MASTER DATA */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none">
                <CardHeader className="p-6 border-b border-white/5">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#4FD1C5]">
                    <Zap className="w-4 h-4" /> 3. Master Data Suite
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 grid grid-cols-1 gap-3">
                  <Button variant="secondary" onClick={() => handleMasterTest('/ext/b2b/v1/category', 'Categories')} className="justify-start h-10 text-[9px] uppercase tracking-widest font-bold rounded-none">1. Test Categories</Button>
                  <Button variant="secondary" onClick={() => handleMasterTest('/ext/b2b/v1/currency', 'Currencies')} className="justify-start h-10 text-[9px] uppercase tracking-widest font-bold rounded-none">2. Test Currencies</Button>
                </CardContent>
              </Card>

              {/* 4. PLAN DISCOVERY */}
              <Card className="bg-[#0B0F22] border-white/10 rounded-none border-dashed opacity-80">
                 <CardHeader className="p-6 border-b border-white/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <Search className="w-4 h-4" /> 4. Plan Interrogation
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Age</Label>
                        <Input value={age} onChange={e => setAge(e.target.value)} className="bg-white/5 border-white/10 h-10 rounded-none text-xs" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Duration</Label>
                        <Input value={duration} onChange={e => setDuration(e.target.value)} className="bg-white/5 border-white/10 h-10 rounded-none text-xs" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Category (from Master)</Label>
                      <select 
                        value={selectedCategory} 
                        onChange={e => setSelectedCategory(e.target.value)}
                        className="w-full h-10 px-3 bg-[#0F1428] border border-white/10 text-xs rounded-none outline-none"
                      >
                        <option value="">{categories.length > 0 ? "Select Category" : "Run 'Test Categories' first"}</option>
                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      <Button onClick={() => handlePlanLookup('/ext/b2b/v1/plan/')} className="bg-[#E8A33D] text-[#0F1428] font-bold uppercase tracking-widest text-[9px] h-11 rounded-none">Get Plans List</Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" onClick={() => handlePlanLookup('/ext/b2b/v1/plan/standalone/')} className="border-white/10 text-[8px] font-bold rounded-none h-9">Standalone</Button>
                        <Button variant="outline" onClick={() => handlePlanLookup('/ext/b2b/v1/plan/vasRider/')} className="border-white/10 text-[8px] font-bold rounded-none h-9">VAS Rider</Button>
                      </div>
                      <Button variant="outline" onClick={() => handlePlanLookup('/ext/b2b/v1/plan/masterDetails/')} className="border-white/10 text-[8px] font-bold rounded-none h-9">Master Plan Details</Button>
                    </div>
                 </CardContent>
              </Card>
            </div>

            {/* RIGHT COLUMN: CONSOLE */}
            <div className="space-y-8">
              <div className="bg-[#0B0F22] border border-white/10 rounded-none min-h-[600px] flex flex-col shadow-2xl relative">
                <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5">
                   <div className="flex items-center gap-3">
                      <Terminal className="w-4 h-4 text-[#4FD1C5]" />
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6E7495]">Response_Stream.log</span>
                   </div>
                   <div className="flex items-center gap-4">
                      {activeResult && (
                        <button onClick={copyDiagnostic} className="text-[10px] font-bold text-[#E8A33D] hover:text-white flex items-center gap-2 transition-colors">
                          <ClipboardCheck className="w-3.5 h-3.5" /> Copy Diagnostic
                        </button>
                      )}
                      <span className="font-mono text-[9px] text-[#6E7495] uppercase tracking-widest">Dolphin v2.0</span>
                   </div>
                </div>
                
                <div className="p-8 flex-1 overflow-auto custom-scrollbar font-mono text-[13px] leading-relaxed">
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
                      
                      {/* Trace */}
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

                      {/* Explicit Results */}
                      {activeResult.roundTrip && (
                        <div className="p-6 bg-[#4FD1C5]/5 border border-[#4FD1C5]/20 rounded-none space-y-4">
                           <div className="flex items-center gap-2 text-[#4FD1C5]">
                              <ShieldCheck className="w-4 h-4" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Verification Result</span>
                           </div>
                           <p className="text-sm text-white font-medium italic">"{activeResult.roundTrip}"</p>
                           <div className="pt-2 border-t border-[#4FD1C5]/10">
                              <p className="text-[8px] uppercase text-[#4FD1C5] mb-1">Final Decrypted String</p>
                              <p className="text-xs font-bold text-white font-mono">{activeResult.decryptedValue || 'NULL'}</p>
                           </div>
                        </div>
                      )}

                      {/* Empty Result Message */}
                      {activeResult.success && Array.isArray(activeResult.data) && activeResult.data.length === 0 && (
                        <div className="p-6 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-none space-y-4">
                           <p className="text-sm text-[#9AA1C0] leading-relaxed">
                              UAT endpoint returned successfully, but no plan records were returned for these parameters. The reason is not established.
                           </p>
                        </div>
                      )}

                      {/* Raw Payload */}
                      <div className="space-y-4">
                         <div className="flex items-center justify-between">
                            <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Raw Data Payload</p>
                         </div>
                         <pre className="text-paper/90 overflow-x-auto whitespace-pre-wrap max-h-[800px] p-6 bg-white/[0.02] border border-white/5 rounded-none custom-scrollbar">
                           <code>{typeof activeResult.data === 'string' ? activeResult.data : JSON.stringify(activeResult.data, null, 2)}</code>
                         </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* History */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <History className="w-4 h-4 text-[#6E7495]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Session Log (Last 10)</span>
                </div>
                <div className="bg-[#171D3A] border border-white/10 rounded-none overflow-hidden">
                   {testHistory.length > 0 ? (
                     <div className="divide-y divide-white/5">
                        {testHistory.map(entry => (
                          <div key={entry.id} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                            <div className="flex items-center gap-4">
                              <span className="text-[9px] font-mono text-[#6E7495]">{entry.timestamp}</span>
                              <Badge variant="outline" className={cn("text-[8px] font-mono rounded-none", entry.success ? "text-green-500 border-green-500/20" : "text-red-500 border-red-500/20")}>
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
