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
  XCircle,
  Info,
  Key,
  AlertTriangle,
  Code,
  Copy,
  Layers,
  Lock,
  MessageSquare,
  ClipboardCheck
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
    }
  };

  const handleFetchCategories = async () => {
    setCatLoading(true);
    const data = await fetchAsegoCategories();
    setCategories(data);
    setCatLoading(false);
    toast({
      title: "Master Categories Fetched",
      description: "Successfully retrieved data from /v1/category"
    });
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
  };

  const copySupportSnippet = () => {
    const snippet = `
Hi Asego Team,

We are testing our B2B integration via Partner ID: ${result?.endpoint?.split('/plan/')[1]?.split('?')[0] || 'd5e591b7-46dd-4d7e-8264-7a30b16cec8d'}
The connection is verified (HTTP 200 OK), but the plans array is returning empty [].

Endpoint Called: ${result?.endpoint}
User-Agent: External API/1.0
Timestamp: ${new Date().toISOString()}

Could you please map the active plans to our ID for Category ${result?.endpoint?.split('category=')[1] || '1'}?
    `.trim();
    navigator.clipboard.writeText(snippet);
    toast({ title: "Snippet Copied", description: "You can now paste this into an email to Asego Support." });
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl space-y-16">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2 text-[#E8A33D]">
                <ShieldAlert className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">B2B Connectivity Hub v3.0</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium tracking-tighter leading-none">Asego Dolphin Lab</h1>
              <p className="text-xl text-[#9AA1C0] max-w-2xl font-medium leading-relaxed">
                A sandbox for validating Partner IDs, testing encryption, and hunting for active plan mappings in the UAT environment.
              </p>
            </div>
            <div className="flex gap-4">
               <Button 
                variant="outline" 
                onClick={handleFetchCategories} 
                disabled={catLoading}
                className="border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-[10px] h-12 px-6"
              >
                {catLoading ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : <Layers className="w-3 h-3 mr-2" />}
                Fetch Categories
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
            
            {/* Control Panel */}
            <div className="space-y-8 sticky top-28">
              <Card className="bg-[#171D3A] border-white/10 shadow-3xl overflow-hidden">
                <CardHeader className="border-b border-white/5 bg-white/5 p-6">
                  <CardTitle className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3">
                    <Key className="w-4 h-4 text-[#E8A33D]" /> Plan Lookup
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-6">
                      <div className="space-y-2 text-left">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Partner ID</Label>
                        <Input 
                          name="partnerId" 
                          placeholder="partner-uuid-here" 
                          className="bg-[#0F1428] border-white/10 text-white h-12 font-mono text-sm"
                          required
                          defaultValue="d5e591b7-46dd-4d7e-8264-7a30b16cec8d"
                        />
                      </div>

                      <div className="space-y-2 text-left">
                        <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Plan Category</Label>
                        <select name="category" className="w-full h-12 px-4 bg-[#0F1428] border border-white/10 rounded-md text-sm text-white outline-none focus:border-[#E8A33D] transition-colors font-medium">
                          <option value="1">1 — Leisure (International)</option>
                          <option value="2">2 — Student Journey</option>
                          <option value="3">3 — Inbound (To India)</option>
                          <option value="4">4 — Domestic (India)</option>
                          <option value="5">5 — Corporate</option>
                          <option value="6">6 — Schengen Specific</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-left">
                          <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Duration</Label>
                          <Input name="duration" type="number" defaultValue="30" className="bg-[#0F1428] border-white/10 text-white h-12" />
                        </div>
                        <div className="space-y-2 text-left">
                          <Label className="text-[9px] uppercase font-bold text-[#6E7495] tracking-widest">Age</Label>
                          <Input name="age" type="number" defaultValue="20" className="bg-[#0F1428] border-white/10 text-white h-12" />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="w-full h-14 bg-[#E8A33D] text-[#0F1428] font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-[#F0C888] shadow-xl active:scale-95 transition-all"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                      Run Handshake
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Encryption Lab */}
              <Card className="bg-[#0B0F22] border-dashed border-white/10 opacity-80 hover:opacity-100 transition-opacity">
                 <CardHeader className="p-6 border-b border-white/5">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#4FD1C5]">
                       <Lock className="w-3.5 h-3.5" /> Encryption Lab
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-6">
                    <form onSubmit={handleEncryptionTest} className="space-y-4">
                       <Input name="plainText" placeholder="Plain text to encrypt" className="h-10 bg-white/5 border-white/10 text-xs" defaultValue='{"orderId": "TST-001"}' />
                       <div className="grid grid-cols-2 gap-2">
                          <Input name="secretKey" placeholder="Secret Key" className="h-10 bg-white/5 border-white/10 text-xs" />
                          <Input name="iv" placeholder="IV" className="h-10 bg-white/5 border-white/10 text-xs" />
                       </div>
                       <Button type="submit" variant="ghost" disabled={encLoading} className="w-full border border-white/10 text-[9px] font-bold uppercase tracking-widest h-10">
                          {encLoading ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : "Test AES Logic"}
                       </Button>
                    </form>
                    {encryptionResult && (
                       <div className="mt-4 p-3 bg-white/5 rounded font-mono text-[9px] text-[#4FD1C5] break-all leading-relaxed">
                          {encryptionResult.encrypted}
                       </div>
                    )}
                 </CardContent>
              </Card>
            </div>

            {/* Console Output */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6E7495]">UA_Response_Stream.log</span>
                </div>
                {result?.success && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase border bg-green-500/10 text-green-500 border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <CheckCircle2 className="w-3 h-3" /> Handshake OK
                  </div>
                )}
              </div>

              <div className="bg-[#0B0F22] border border-white/10 rounded-2xl min-h-[600px] flex flex-col shadow-2xl relative">
                <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-b border-white/5 rounded-t-2xl">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                   </div>
                   <div className="flex items-center gap-4">
                      {result?.isEmpty && (
                        <button onClick={copySupportSnippet} className="text-[10px] font-bold text-[#E8A33D] hover:text-white flex items-center gap-2 transition-colors">
                          <MessageSquare className="w-3 h-3" /> Generate Support Ticket
                        </button>
                      )}
                      <span className="font-mono text-[9px] text-[#6E7495] uppercase tracking-widest">Dolphin UAT v2.1</span>
                   </div>
                </div>
                
                <div className="p-8 flex-1 overflow-auto custom-scrollbar font-mono text-[13px] leading-relaxed">
                  {!result && !categories && !loading && (
                    <div className="h-full flex flex-col items-center justify-center pt-20 space-y-4 opacity-40">
                      <Terminal className="w-12 h-12 text-[#9AA1C0]" />
                      <p className="text-sm">Awaiting test execution...</p>
                    </div>
                  )}

                  {loading && (
                    <div className="flex flex-col items-center justify-center pt-20 space-y-6">
                      <Loader2 className="w-10 h-10 animate-spin text-[#E8A33D]" />
                      <p className="text-[#9AA1C0] animate-pulse">Requesting from dolphin.asego.in...</p>
                    </div>
                  )}

                  {categories && !loading && (
                    <div className="mb-10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500 text-left">
                       <p className="text-[10px] font-bold text-[#4FD1C5] uppercase tracking-widest flex items-center gap-2">
                          <Layers className="w-3 h-3" /> Master Metadata [Authorized]
                       </p>
                       <pre className="text-[#4FD1C5] p-6 bg-[#4FD1C5]/5 border border-[#4FD1C5]/10 rounded-lg overflow-x-auto">
                         <code>{JSON.stringify(categories, null, 2)}</code>
                       </pre>
                    </div>
                  )}

                  {result && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                      
                      <div className="space-y-3">
                         <p className="text-[10px] font-bold text-[#4FD1C5] uppercase tracking-widest flex items-center gap-2">
                           <Code className="w-3.5 h-3.5" /> Request Trace
                         </p>
                         <div className="bg-[#0F1428] p-5 rounded-xl border border-white/5 space-y-3">
                            <div className="flex gap-4 text-[11px]">
                               <span className="text-[#E8A33D] font-bold">GET</span>
                               <span className="text-white/60 break-all">{result.endpoint}</span>
                            </div>
                            <div className="h-px bg-white/5" />
                            <div className="flex gap-4 text-[11px]">
                               <span className="text-green-500 font-bold">ACCEPT</span>
                               <span className="text-white/40">application/json</span>
                            </div>
                         </div>
                      </div>

                      {result.isEmpty && (
                        <div className="p-8 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-2xl space-y-4 shadow-xl">
                           <div className="flex items-center gap-3 text-[#E8A33D]">
                              <AlertTriangle className="w-6 h-6" />
                              <h4 className="text-lg font-bold font-headline">Status: Authorized, but Empty</h4>
                           </div>
                           <p className="text-[#9AA1C0] leading-relaxed font-medium">
                              Your **Partner ID is working correctly**. You received a successful 200 OK response. The empty array `[]` means Asego has not yet "mapped" any insurance products to your ID in this category.
                           </p>
                           <div className="pt-2">
                              <Button onClick={copySupportSnippet} className="bg-white text-[#0F1428] hover:bg-[#F4F1E8] font-bold text-[10px] uppercase tracking-widest h-10 px-6 rounded-sm shadow-lg">
                                <ClipboardCheck className="w-3.5 h-3.5 mr-2" /> Copy Request for Asego Support
                              </Button>
                           </div>
                        </div>
                      )}
                      
                      <div className="space-y-4">
                         <div className="flex items-center justify-between">
                            <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Raw Response Body</p>
                            <span className="text-[10px] font-mono text-[#E8A33D]">{result.status} OK</span>
                         </div>
                         <pre className="text-paper/90 overflow-x-auto whitespace-pre-wrap max-h-[800px] p-6 bg-white/[0.01] border border-white/5 rounded-xl custom-scrollbar">
                           <code>{JSON.stringify(result.data || result, null, 2)}</code>
                         </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 bg-[#1E2650] border border-white/10 rounded-2xl flex items-start gap-4 text-left group hover:border-[#4FD1C5]/40 transition-colors">
                  <div className="w-10 h-10 bg-[#4FD1C5]/10 rounded-xl flex items-center justify-center text-[#4FD1C5] shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold uppercase tracking-widest text-white">Identity Verified</p>
                    <p className="text-xs text-[#9AA1C0] leading-relaxed font-medium">
                      HTTP 200 confirms your Partner ID is active in the Dolphin UAT security registry. No additional authorization headers are needed for GET calls.
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-[#171D3A] border border-white/10 rounded-2xl flex items-start gap-4 text-left group hover:border-[#E8A33D]/40 transition-colors">
                  <div className="w-10 h-10 bg-[#E8A33D]/10 rounded-xl flex items-center justify-center text-[#E8A33D] shrink-0 group-hover:scale-110 transition-transform">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold uppercase tracking-widest text-white">Next: POST & Encryption</p>
                    <p className="text-xs text-[#9AA1C0] leading-relaxed font-medium">
                      Transactional endpoints like `/createPolicy` require an encrypted body using AES-256-CBC. Test your key in the lab on the left.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-12 border-t border-white/10 text-center">
             <Button variant="ghost" onClick={() => window.location.reload()} className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495] hover:text-white transition-colors">
               Reset Sandbox Session
             </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
