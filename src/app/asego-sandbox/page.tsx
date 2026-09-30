'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ShieldAlert, 
  Terminal, 
  Play, 
  Loader2, 
  CheckCircle2, 
  XCircle,
  Info,
  Key
} from "lucide-react";
import { testAsegoConnection } from './actions';

export default function AsegoSandboxPage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const response = await testAsegoConnection(formData);
    
    setResult(response);
    setLoading(false);
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl space-y-12">
          
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2 text-[#E8A33D]">
              <ShieldAlert className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em]">B2B API Sandbox</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium tracking-tight">Connectivity Test</h1>
            <p className="text-xl text-[#9AA1C0] max-w-2xl font-medium">
              Validate your Asego UAT credentials and view live plan data. 
              This environment is isolated from the production site.
            </p>
          </div>

          <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
            
            {/* Control Panel */}
            <Card className="bg-[#171D3A] border-white/10 shadow-2xl">
              <CardHeader className="border-b border-white/5 bg-white/5">
                <CardTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <Key className="w-4 h-4 text-[#E8A33D]" /> Test Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2 text-left">
                      <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Partner ID (Required)</Label>
                      <Input 
                        name="partnerId" 
                        placeholder="Enter your partnerId" 
                        className="bg-[#0F1428] border-white/10 text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Secret Key (Optional for GET)</Label>
                      <Input 
                        name="secretKey" 
                        type="password" 
                        placeholder="••••••••" 
                        className="bg-[#0F1428] border-white/10 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 text-left">
                        <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Trip Duration</Label>
                        <Input 
                          name="duration" 
                          type="number" 
                          defaultValue="10" 
                          className="bg-[#0F1428] border-white/10 text-white"
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Traveler Age</Label>
                        <Input 
                          name="age" 
                          type="number" 
                          defaultValue="30" 
                          className="bg-[#0F1428] border-white/10 text-white"
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
              </CardContent>
            </Card>

            {/* Response Console */}
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-[#4FD1C5]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6E7495]">Console Output</span>
                </div>
                {result && (
                  <div className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase border",
                    result.success ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-red-500/10 text-red-500 border-red-500/20"
                  )}>
                    {result.success ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                    {result.success ? 'Connected' : 'Failed'}
                  </div>
                )}
              </div>

              <div className="bg-[#0B0F22] border border-white/10 rounded-2xl min-h-[400px] p-8 relative overflow-hidden group">
                {/* Visual grid background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F4F1E8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                
                <div className="relative z-10">
                  {!result && !loading && (
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

                  {result && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <div className="flex items-center justify-between border-b border-white/5 pb-4">
                         <span className="font-mono text-[10px] text-[#4FD1C5]">UAT_RESPONSE_LOG</span>
                         <span className="font-mono text-[10px] text-gray-500">{new Date().toLocaleTimeString()}</span>
                      </div>
                      
                      <pre className="text-left font-mono text-[13px] leading-relaxed text-[#F4F1E8] overflow-x-auto whitespace-pre-wrap max-h-[600px] custom-scrollbar">
                        <code>{JSON.stringify(result.data || result, null, 2)}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 bg-[#E8A33D]/5 border border-[#E8A33D]/20 rounded-2xl flex items-start gap-4 text-left">
                <Info className="w-5 h-5 text-[#E8A33D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#F0C888]">Developer Note</p>
                  <p className="text-xs text-[#9AA1C0] leading-relaxed font-medium">
                    This test calls the <code className="text-white">/v1/plan</code> endpoint. A successful response (200 OK) will return an array of available insurance plans. If you receive an error, double-check your Partner ID and ensure your IP is whitelisted if Asego requires it for UAT.
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
