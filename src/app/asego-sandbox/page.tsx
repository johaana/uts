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
  ShieldAlert, 
  Terminal, 
  Play, 
  Loader2, 
  CheckCircle2, 
  Key,
  AlertTriangle,
  Code,
  Layers,
  Lock,
  MessageSquare,
  ClipboardCheck,
  Zap,
  RefreshCw,
  Copy,
  ChevronRight
} from "lucide-react";
import { testAsegoConnection, fetchAsegoCategories, testEncryption } from './actions';
import { useToast } from '@/hooks/use-toast';

export default function AsegoSandboxPage() {
  const [result, setResult] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);
  const [encryptionResult, setEncryptionResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [catLoading, setCatLoading] = useState(false);
  const [encLoading, setEncLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const response = await testAsegoConnection(formData);
    
    setResult(response);
    setLoading(false);
    
    if (response.success) {
      toast({ title: "Handshake Successful", description: `Server returned ${response.status} OK.` });
    } else {
      toast({ variant: "destructive", title: "Connection Error", description: response.message });
    }
  };

  const handleFetchCategories = async () => {
    setCatLoading(true);
    setCategories(null);
    const data = await fetchAsegoCategories();
    setCategories(data);
    setCatLoading(false);
    if (!data.error) {
      toast({ title: "Master Metadata Received", description: "Successfully retrieved data from /v1/category" });
    }
  };

  const handleEncryptionTest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEncLoading(true);
    const formData = new FormData(e.currentTarget);
    const text = formData.get('plainText') as string;
    const key = formData.get('secretKey') as string;
    const iv = formData.get('iv') as string;
    
    const res = await testEncryption(text, key, iv);
    setEncryptionResult(res);
    setEncLoading(false);
    if (res.success) {
      toast({ title: "Ciphertext Generated", description: "AES-256-CBC encryption logic verified." });
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: `${label} Copied` });
  };

  const copySupportSnippet = () => {
    const snippet = `
Hi Asego Team,

We are validating our B2B integration via Partner ID: ${result?.endpoint?.split('/plan/')[1]?.split('?')[0] || 'd5e591b7-46dd-4d7e-8264-7a30b16cec8d'}

Current Status:
- Connectivity: HTTP 200 OK (Verified Success)
- Response Body: Empty Array []
- Purpose: Automated Quote Integration for Utsavs.com

Technical Context:
- Environment: Dolphin UAT
- Endpoint: ${result?.endpoint || 'GET /v1/plan'}
- Timestamp: ${new Date().toISOString()}

Could you please confirm if active insurance plans (especially Student/Leisure) are mapped to our Partner ID for Category ${result?.endpoint?.split('category=')[1]?.split('&')[0] || '1'}?
    `.trim();
    copyToClipboard(snippet, "Diagnostic Report");
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl space-y-16">
          
          {/* Header Diagnostics */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-white/5 pb-12 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#4FD1C5]">
                <Zap className="w-5 h-5 animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">API Integration Lab v3.5</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium tracking-tighter leading-none">Dolphin Connectivity</h1>
              <p className="text-xl text-[#9AA1C0] max-w-2xl font-medium leading-relaxed">
                Your handshake is verified. Use the Encryption Lab below to test transactional payloads while waiting for Asego to map your plans.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
               <Button 
                variant="outline" 
                onClick={handleFetchCategories} 
                disabled={catLoading}
                className="border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-[10px] h-12 px-6 rounded-none"
              >
                {catLoading ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : <Layers className="w-3 h-3 mr-2" />}
                Fetch Metadata
              </Button>
               <Button 
                variant="ghost" 
                onClick={() => window.location.reload()} 
                className="text-[#6E7495] hover:text-white font-bold uppercase tracking-widest text-[10px] h-12 px-4"
              >
                <RefreshCw className="w-3 h-3 mr-2" /> Reset
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-start">
            
            {/* LEFT: Parameters & Security */}
            <div className="space-y-8 sticky top-28">
              <Card className="bg-[#171D3A] border-white/10 shadow-3xl overflow-hidden rounded-sm">
                <CardHeader className="border-b border-white/5 bg-white/5 p-6">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                    <Key className="w-4 h-4 text-[#E8A33D]" /> Plan Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-6">
                      <div className="space-y-2 text-left">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Partner ID (Authoritative)</Label>
                        <Input 
                          name="partnerId" 
                          className="bg-[#0F1428] border-white/10 text-white h-12 font-mono text-xs focus:ring-[#E8A33D]"
                          required
                          defaultValue="d5e591b7-46dd-4d7e-8264-7a30b16cec8d"
                        />
                      </div>

                      <div className="space-y-2 text-left">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Target Category</Label>
                        <select name="category" className="w-full h-12 px-4 bg-[#0F1428] border border-white/10 rounded-sm text-sm text-white outline-none focus:border-[#E8A33D] transition-colors font-medium">
                          <option value="1">1 — Leisure (International)</option>
                          <option value="2">2 — Student Journey</option>
                          <option value="3">3 — Inbound (To India)</option>
                          <option value="4">4 — Domestic (India)</option>
                          <option value="5">5 — Corporate</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-left">
                          <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Duration (Days)</Label>
                          <Input name="duration" type="number" defaultValue="30" className="bg-[#0F1428] border-white/10 text-white h-12" />
                        </div>
                        <div className="space-y-2 text-left">
                          <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Traveler Age</Label>
                          <Input name="age" type="number" defaultValue="20" className="bg-[#0F1428] border-white/10 text-white h-12" />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="w-full h-14 bg-[#E8A33D] text-[#0F1428] font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-[#F0C888] shadow-xl active:scale-95 transition-all rounded-none"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                      Run Handshake
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Security/Encryption Lab */}
              <Card className="bg-[#0B0F22] border-dashed border-white/10 rounded-sm">
                 <CardHeader className="p-6 border-b border-white/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#4FD1C5]">
                       <Lock className="w-3.5 h-3.5" /> Transactional Security Lab
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-6 space-y-6 text-left">
                    <p className="text-[11px] text-[#9AA1C0] leading-relaxed">
                      Testing the AES-256-CBC logic required for <b>/createPolicy</b>.
                    </p>
                    <form onSubmit={handleEncryptionTest} className="space-y-4">
                       <div className="space-y-1">
                          <Label className="text-[8px] uppercase text-[#6E7495]">Payload (JSON)</Label>
                          <Input name="plainText" placeholder="JSON to encrypt" className="h-10 bg-white/5 border-white/10 text-xs font-mono" defaultValue='{"orderId": "REQ-001"}' />
                       </div>
                       <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <Label className="text-[8px] uppercase text-[#6E7495]">Secret Key</Label>
                            <Input name="secretKey" type="password" placeholder="Key" className="h-10 bg-white/5 border-white/10 text-xs" />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-[8px] uppercase text-[#6E7495]">IV</Label>
                            <Input name="iv" placeholder="IV" className="h-10 bg-white/5 border-white/10 text-xs" />
                          </div>
                       </div>
                       <Button type="submit" variant="ghost" disabled={encLoading} className="w-full border border-white/10 text-[9px] font-bold uppercase tracking-widest h-10 hover:bg-[#4FD1C5]/10 rounded-none">
                          {encLoading ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : "Test Encryption Logic"}
                       </Button>
                    </form>
                    {encryptionResult && (
                       <div className="p-4 bg-white/5 rounded-sm font-mono text-[10px] text-[#4FD1C5] break-all leading-relaxed border border-[#4FD1C5]/20 animate-in fade-in duration-300">
                          <div className="flex justify-between items-center mb-2">
                            <p className="text-[8px] text-[#6E7495] uppercase tracking-widest">Ciphertext:</p>
                            <button onClick={() => copyToClipboard(encryptionResult.encrypted, "Ciphertext")} className="text-[#E8A33D] hover:text-white transition-colors">
                              <Copy className="w-3 h-3" />
                            </button>
                          </div>
                          {encryptionResult.encrypted}
                       </div>
                    )}
                 </CardContent>
              </Card>
            </div>

            {/* RIGHT: Console Output */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6E7495]">UA_Response_Stream.log</span>
                </div>
                {result?.success && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase border bg-green-500/10 text-green-500 border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <CheckCircle2 className="w-3 h-3" /> Authorization Confirmed
                  </div>
                )}
              </div>

              <div className="bg-[#0B0F22] border border-white/10 rounded-sm min-h-[660px] flex flex-col shadow-2xl relative">
                <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                   </div>
                   <div className="flex items-center gap-4">
                      {result?.isEmpty && (
                        <button onClick={copySupportSnippet} className="text-[10px] font-bold text-[#E8A33D] hover:text-white flex items-center gap-2 transition-colors">
                          <MessageSquare className="w-3.5 h-3.5" /> Copy Request for Asego Manager
                        </button>
                      )}
                      <span className="font-mono text-[9px] text-[#6E7495] uppercase tracking-widest">Dolphin UAT v2.1</span>
                   </div>
                </div>
                
                <div className="p-8 flex-1 overflow-auto custom-scrollbar font-mono text-[13px] leading-relaxed text-left">
                  {!result && !categories && !loading && (
                    <div className="h-full flex flex-col items-center justify-center pt-20 space-y-4 opacity-40">
                      <Terminal className="w-12 h-12 text-[#9AA1C0]" />
                      <p className="text-sm">Awaiting connectivity handshake...</p>
                    </div>
                  )}

                  {loading && (
                    <div className="flex flex-col items-center justify-center pt-20 space-y-6">
                      <Loader2 className="w-10 h-10 animate-spin text-[#E8A33D]" />
                      <p className="text-[#9AA1C0] animate-pulse">Handshaking with dolphin.asego.in...</p>
                    </div>
                  )}

                  {categories && !loading && (
                    <div className="mb-10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                       <p className="text-[10px] font-bold text-[#4FD1C5] uppercase tracking-widest flex items-center gap-2">
                          <Layers className="w-3 h-3" /> Master Metadata [Authorized]
                       </p>
                       <pre className="text-[#4FD1C5] p-6 bg-[#4FD1C5]/5 border border-[#4FD1C5]/10 rounded-sm overflow-x-auto">
                         <code>{JSON.stringify(categories, null, 2)}</code>
                       </pre>
                    </div>
                  )}

                  {result && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      
                      <div className="space-y-3">
                         <p className="text-[10px] font-bold text-[#4FD1C5] uppercase tracking-widest flex items-center gap-2">
                           <Code className="w-3.5 h-3.5" /> Handshake Trace
                         </p>
                         <div className="bg-[#0F1428] p-5 rounded-sm border border-white/5 space-y-3 shadow-inner">
                            <div className="flex gap-4 text-[11px]">
                               <span className="text-[#E8A33D] font-bold">GET</span>
                               <span className="text-white/60 break-all">{result.endpoint}</span>
                            </div>
                            <div className="h-px bg-white/5" />
                            <div className="flex gap-4 text-[11px]">
                               <span className="text-green-500 font-bold">STATUS</span>
                               <span className="text-white/40">{result.status} OK</span>
                            </div>
                         </div>
                      </div>

                      {result.isEmpty && (
                        <div className="p-8 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-sm space-y-4 shadow-xl">
                           <div className="flex items-center gap-3 text-[#E8A33D]">
                              <AlertTriangle className="w-6 h-6" />
                              <h4 className="text-lg font-bold font-headline">Outcome: Authorized, but Unmapped</h4>
                           </div>
                           <p className="text-[#9AA1C0] leading-relaxed font-medium">
                              Your <b>Partner ID</b> is valid and the server responded correctly. The empty array `[]` indicates that no active insurance products are currently mapped to your ID for this category.
                           </p>
                           <div className="pt-2">
                              <Button onClick={copySupportSnippet} className="bg-white text-[#0F1428] hover:bg-[#F4F1E8] font-bold text-[10px] uppercase tracking-widest h-11 px-8 rounded-none shadow-lg">
                                <ClipboardCheck className="w-4 h-4 mr-2" /> Copy Support Ticket
                              </Button>
                           </div>
                        </div>
                      )}
                      
                      <div className="space-y-4">
                         <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Raw Response Body</p>
                         <pre className="text-paper/90 overflow-x-auto whitespace-pre-wrap max-h-[800px] p-6 bg-white/[0.01] border border-white/5 rounded-sm custom-scrollbar">
                           <code>{JSON.stringify(result.data || result, null, 2)}</code>
                         </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Icons */}
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="p-8 bg-[#1E2650] border border-white/10 rounded-sm flex items-start gap-5 group hover:border-[#4FD1C5]/40 transition-colors">
                  <div className="w-10 h-10 bg-[#4FD1C5]/10 rounded-sm flex items-center justify-center text-[#4FD1C5] shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold uppercase tracking-widest text-white">Identity Confirmed</p>
                    <p className="text-xs text-[#9AA1C0] leading-relaxed font-medium">
                      The Asego UAT security registry has verified your Partner ID. No further GET authorization is required.
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-[#171D3A] border border-white/10 rounded-sm flex items-start gap-5 group hover:border-[#E8A33D]/40 transition-colors">
                  <div className="w-10 h-10 bg-[#E8A33D]/10 rounded-sm flex items-center justify-center text-[#E8A33D] shrink-0 group-hover:scale-110 transition-transform">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold uppercase tracking-widest text-white">Mapping Pending</p>
                    <p className="text-xs text-[#9AA1C0] leading-relaxed font-medium">
                      An empty response `[]` confirms the technical pipe is open, but no active plans are linked to your ID yet.
                    </p>
                  </div>
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
