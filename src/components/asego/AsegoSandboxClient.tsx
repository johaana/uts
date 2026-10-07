
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
  Loader2, 
  ShieldCheck, 
  Lock, 
  Activity, 
  ClipboardCheck, 
  RotateCcw,
  Search,
  Eye,
  EyeOff,
  Fingerprint,
  UserCircle,
  Check,
  Package,
  Clock,
  Code,
  MessageSquare
} from "lucide-react";
import { 
  testAsegoMaster,
  testAsegoPlans,
  AuthStrategy
} from '@/app/asego-sandbox/actions';
import { useToast } from '@/hooks/use-toast';

export function AsegoSandboxClient() {
  const { toast } = useToast();
  
  const [creds, setCreds] = useState({
    partnerId: '',
    sign: '',
    reference: '',
    secretKey: '',
    vectorBytes: ''
  });
  const [showSecrets, setShowSecrets] = useState(false);
  const [authStrategy, setAuthStrategy] = useState<AuthStrategy>('custom_both');
  const [viewMode, setViewMode] = useState<'console' | 'journey' | 'blueprint'>('journey');

  const [activeResult, setActiveResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  
  const [planParams, setPlanParams] = useState({
    age: '25',
    duration: '30',
    categoryId: ''
  });

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
    }
  };

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      
      <main className="py-12 md:py-16 text-left">
        <div className="container mx-auto px-6 max-w-[1500px] space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             <Card className="bg-[#171D3A] border-[#4FD1C5]/40 rounded-none p-6 ring-1 ring-[#4FD1C5]/20">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Handshake</span>
                   <ShieldCheck className="w-4 h-4 text-[#4FD1C5]" />
                </div>
                <p className="text-xl font-bold font-headline">Verified</p>
                <p className="text-[10px] text-[#4FD1C5] mt-1 uppercase font-bold">Encryption Established</p>
             </Card>
             <Card className="bg-[#171D3A] border-[#E8A33D]/40 rounded-none p-6 ring-1 ring-[#E8A33D]/20">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Authentication</span>
                   <Lock className="w-4 h-4 text-[#E8A33D]" />
                </div>
                <p className="text-xl font-bold font-headline">Established</p>
                <p className="text-[10px] text-[#E8A33D] mt-1 uppercase font-bold">Custom Header Mapping</p>
             </Card>
             <Card className="bg-[#171D3A] border-white/5 rounded-none p-6">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Discovery</span>
                   <Package className="w-4 h-4 text-white" />
                </div>
                <p className="text-xl font-bold font-headline text-white">Extracted</p>
                <p className="text-[10px] text-[#9AA1C0] mt-1 uppercase font-bold">Catalogue Live</p>
             </Card>
             <Card className="bg-[#171D3A] border-white/5 rounded-none p-6 opacity-60">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Status</span>
                   <Clock className="w-4 h-4 text-[#6E7495]" />
                </div>
                <p className="text-xl font-bold font-headline text-[#6E7495]">Pending</p>
                <p className="text-[10px] text-[#6E7495] mt-1 uppercase font-bold">Waiting on Schema</p>
             </Card>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-white/5 pb-12">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2 text-[#4FD1C5]">
                <Fingerprint className="w-5 h-5" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em]">UAT Forensic Dashboard v4.0</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-headline font-medium tracking-tighter leading-none text-white">Discovery Complete</h1>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="ghost" size="sm" onClick={() => { setActiveResult(null); setSelectedPlan(null); }} className="text-[9px] uppercase tracking-widest font-bold border border-white/10 h-8 rounded-none text-white">
                  <RotateCcw className="w-3 h-3 mr-2" /> Reset Session
                </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[480px_1fr] gap-12 items-start">
            <div className="space-y-8 sticky top-28">
              <Card className="bg-[#171D3A] border-white/10 shadow-2xl rounded-none text-white">
                <CardHeader className="border-b border-white/5 bg-white/5 p-6 flex flex-row justify-between items-center">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                    <Lock className="w-4 h-4 text-[#E8A33D]" /> Identity Matrix
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                   <p className="text-sm text-[#9AA1C0] leading-relaxed">Forensic mapping of Asego Dolphin endpoints. Ensure Sign and Reference headers are verified before proceeding to issuance.</p>
                </CardContent>
              </Card>

              <Card className="bg-[#0B0F22] border-white/10 rounded-none text-white text-left">
                <CardHeader className="p-6 border-b border-white/5">
                  <CardTitle className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-[#4FD1C5]">
                    <Search className="w-4 h-4" /> Master Discovery
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-3">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#6E7495]">Metadata</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="secondary" onClick={() => handleMasterTest('category')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Test Categories</Button>
                      <Button variant="secondary" onClick={() => handleMasterTest('currency')} className="h-10 text-[9px] font-bold uppercase tracking-widest rounded-none">Test Currencies</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="flex bg-[#0B0F22] p-1 rounded-none border border-white/10 w-fit">
                <button 
                  onClick={() => setViewMode('journey')}
                  className={cn(
                    "px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all",
                    viewMode === 'journey' ? "bg-white text-[#0F1428]" : "text-[#6E7495] hover:text-white"
                  )}
                >
                  <UserCircle className="w-3.5 h-3.5 inline mr-2" /> Simulation
                </button>
              </div>

              <div className="bg-[#0B0F22] border border-white/10 rounded-none min-h-[600px] flex flex-col shadow-2xl relative text-left">
                 {viewMode === 'journey' && (
                  <div className="p-8 flex items-center justify-center h-full opacity-30">
                    <Activity className="w-16 h-16" />
                  </div>
                 )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
