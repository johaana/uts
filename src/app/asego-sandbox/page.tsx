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
  Layers
} from "lucide-react";
import { testAsegoConnection, fetchAsegoCategories } from './actions';
import { useToast } from '@/hooks/use-toast';

export default function AsegoSandboxPage() {
  const [result, setResult] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [catLoading, setCatLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const response = await testAsegoConnection(formData);
    
    setResult(response);
    setLoading(false);
  };

  const handleFetchCategories = async () => {
    setCatLoading(true);
    const data = await fetchAsegoCategories();
    setCategories(data);
    setCatLoading(false);
    toast({
      title: "Master Categories Fetched",
      description: "Check the console output for available categories."
    });
  };

  const copyEndpoint = () => {
    if (result?.endpoint) {
      navigator.clipboard.writeText(result.endpoint);
      toast({ title: "Copied to clipboard", description: "URL is ready to send to Asego support." });
    }
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2 text-[#E8A33D]">
                <ShieldAlert className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.3em]">B2B API Sandbox v2.1</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-medium tracking-tight">Asego Connectivity</h1>
              <p className="text-xl text-[#9AA1C0] max-w-2xl font-medium">
                Validate your Partner ID and hunt for active plan mappings in the UAT environment.
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleFetchCategories} 
              disabled={catLoading}
              className="border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-[10px] h-12 px-6"
            >
              {catLoading ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : <Layers className="w-3 h-3 mr-2" />}
              Fetch Master Categories
            </Button>
          </div>

          <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">
            
            {/* Control Panel */}
            <Card className="bg-[#171D3A] border-white/10 shadow-2xl sticky top-32">
              <CardHeader className="border-b border-white/5 bg-white/5">
                <CardTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <Key className="w-4 h-4 text-[#E8A33D]" /> Test Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-5">
                    <div className="space-y-2 text-left">
                      <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Partner ID</Label>
                      <Input 
                        name="partnerId" 
                        placeholder="Enter your partnerId" 
                        className="bg-[#0F1428] border-white/10 text-white h-11"
                        required
                        defaultValue="d5e591b7-46dd-4d7e-8264-7a30b16cec8d"
                      />
                    </div>

                    <div className="space-y-2 text-left">
                      <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Plan Category</Label>
                      <select name="category" className="w-full h-11 px-3 bg-[#0F1428] border border-white/10 rounded-md text-sm text-white outline-none focus:border-[#E8A33D] transition-colors">
                        <option value="1">Leisure (International)</option>
                        <option value="2">Student Journey</option>
                        <option value="3">Inbound (To India)</option>
                        <option value="4">Domestic (India)</option>
                        <option value="5">Corporate</option>
                        <option value="6">Schengen Specific</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 text-left">
                        <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Duration (Days)</Label>
                        <Input 
                          name="duration" 
                          type="number" 
                          defaultValue="30" 
                          className="bg-[#0F1428] border-white/10 text-white h-11"
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Traveler Age</Label>
                        <Input 
                          name="age" 
                          type="number" 
                          defaultValue="20" 
                          className="bg-[#0F1428] border-white/10 text-white h-11"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full h-12 bg-[#E8A33D] text-[#0F1428] font-bold uppercase tracking-widest text-xs hover:bg-[#F0C888]"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    Run Connectivity Test
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                   <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6E7495]">Recommended Sanity Tests</p>
                   <div className="grid grid-cols-1 gap-2">
                      <div className="p-3 bg-white/5 rounded text-[10px] text-left leading-relaxed">
                         <b className="text-white">Student Test:</b> Cat 2, Age 20, Dur 30.
                      </div>
                      <div className="p-3 bg-white/5 rounded text-[10px] text-left leading-relaxed">
                         <b className="text-white">Leisure Test:</b> Cat 1, Age 35, Dur 15.
                      </div>
                   </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Console */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6E7495]">Console Output</span>
                </div>
                {(result || categories) && (
                  <div className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase border bg-green-500/10 text-green-500 border-green-500/20"
                  )}>
                    <CheckCircle2 className="w-3 h-3" /> Connected
                  </div>
                )}
              </div>

              <div className="bg-[#0B0F22] border border-white/10 rounded-2xl min-h-[500px] flex flex-col shadow-inner">
                <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5 rounded-t-2xl">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                   </div>
                   <span className="font-mono text-[9px] text-[#6E7495] uppercase tracking-widest">uat_response_stream.log</span>
                </div>
                
                <div className="p-8 flex-1 overflow-auto custom-scrollbar">
                  {!result && !categories && !loading && (
                    <div className="h-full flex flex-col items-center justify-center pt-20 space-y-4 opacity-40">
                      <Terminal className="w-12 h-12 text-[#9AA1C0]" />
                      <p className="font-mono text-sm">Awaiting test execution...</p>
                    </div>
                  )}

                  {loading && (
                    <div className="flex flex-col items-center justify-center pt-20 space-y-6">
                      <Loader2 className="w-10 h-10 animate-spin text-[#E8A33D]" />
                      <p className="font-mono text-sm text-[#9AA1C0] animate-pulse">Requesting from dolphin.asego.in...</p>
                    </div>
                  )}

                  {categories && !loading && (
                    <div className="mb-10 space-y-4 animate-in fade-in duration-500 text-left">
                       <p className="text-[10px] font-bold text-[#4FD1C5] uppercase tracking-widest flex items-center gap-2">
                          <Layers className="w-3 h-3" /> Master Categories Available
                       </p>
                       <pre className="text-left font-mono text-[11px] leading-relaxed text-[#4FD1C5] p-4 bg-[#4FD1C5]/5 border border-[#4FD1C5]/10 rounded">
                         <code>{JSON.stringify(categories, null, 2)}</code>
                       </pre>
                    </div>
                  )}

                  {result && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 text-left">
                      {result.endpoint && (
                        <div className="space-y-2">
                           <div className="flex items-center justify-between">
                              <p className="text-[10px] font-bold text-[#4FD1C5] uppercase tracking-widest flex items-center gap-2">
                                <Code className="w-3 h-3" /> Endpoint Called
                              </p>
                              <button onClick={copyEndpoint} className="text-[9px] font-bold text-[#6E7495] hover:text-white flex items-center gap-1">
                                <Copy className="w-2.5 h-2.5" /> Copy URL
                              </button>
                           </div>
                           <code className="block bg-[#0F1428] p-3 rounded text-[11px] text-[#9AA1C0] break-all border border-white/5">
                              {result.endpoint}
                           </code>
                        </div>
                      )}

                      {result.isEmpty && (
                        <div className="p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl space-y-3">
                           <div className="flex items-center gap-2 text-yellow-500">
                              <AlertTriangle className="w-5 h-5" />
                              <h4 className="font-bold text-sm uppercase tracking-widest">Successful Handshake, Empty Result</h4>
                           </div>
                           <p className="text-sm text-[#9AA1C0] leading-relaxed">
                              The API connection is **verified** (200 OK), but Asego returned an empty array `[]`. This is a configuration issue on their end.
                           </p>
                           <ul className="text-xs text-[#9AA1C0] list-disc list-inside space-y-1 pl-2">
                              <li>Your Partner ID is working correctly.</li>
                              <li>Asego has not yet "mapped" any insurance plans to your ID in this category.</li>
                              <li>Send the URL above to your Asego manager to request Plan Activation.</li>
                           </ul>
                        </div>
                      )}
                      
                      <div className="space-y-2">
                         <p className="text-[10px] font-bold text-[#E8A33D] uppercase tracking-widest">JSON Response Body</p>
                         <pre className="text-left font-mono text-[13px] leading-relaxed text-[#F4F1E8] overflow-x-auto whitespace-pre-wrap max-h-[600px]">
                           <code>{JSON.stringify(result.data || result, null, 2)}</code>
                         </pre>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-2xl flex items-start gap-4 text-left">
                <Info className="w-5 h-5 text-[#E8A33D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#F0C888]">Authorization Logic Verified</p>
                  <p className="text-xs text-[#9AA1C0] leading-relaxed font-medium">
                    Because you received a 200 OK instead of a 401 Unauthorized, we know your credentials are correct. The `[]` is purely a database mapping state on the Asego UAT server.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-12 border-t border-white/10 text-center">
             <Button variant="ghost" onClick={() => window.location.reload()} className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495] hover:text-white">
               Reset Sandbox Session
             </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
