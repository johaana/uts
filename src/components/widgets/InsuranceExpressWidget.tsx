"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Loader2, Plane, ArrowRight, CheckCircle2, User } from "lucide-react";
import { getAsegoPlans } from "@/app/international-insurance/actions";
import { cn } from "@/lib/utils";

interface InsuranceExpressWidgetProps {
  agencyId?: string;
  className?: string;
}

/**
 * @fileOverview Insurance Express Widget
 * A compact, embeddable checkout flow for partner websites.
 */
export function InsuranceExpressWidget({ agencyId = "DEMO", className }: InsuranceExpressWidgetProps) {
  const [step, setStep] = useState<'search' | 'quote' | 'success'>('search');
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState<any[]>([]);

  const [form, setForm] = useState({
    categoryId: '296a9c2f-3071-4395-a416-31d60fdf0d4d', // Default Worldwide
    startDate: '',
    endDate: '',
    age: '28'
  });

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Simulation of plan fetching for the express widget
      const res = await getAsegoPlans({
        age: form.age,
        duration: "30",
        categoryId: form.categoryId
      }, { partnerId: '', sign: '', reference: '' }); // Uses server-side env defaults
      
      if (res.success) {
        setPlans(res.data.slice(0, 2)); // Show only top 2 for express
        setStep('quote');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={cn("overflow-hidden rounded-2xl shadow-xl bg-[#171D3A] border-white/10 text-left w-full max-w-sm", className)}>
      <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-serif font-bold text-white leading-tight">Travel Protection</span>
          <span className="text-[7px] font-mono font-bold text-[#4FD1C5] uppercase tracking-[0.2em]">Verified by Utsavs</span>
        </div>
        <ShieldCheck className="w-5 h-5 text-[#E8A33D] opacity-60" />
      </div>

      <CardContent className="p-5">
        {step === 'search' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Region</Label>
              <select className="w-full h-10 px-3 bg-[#0F1428] border border-white/10 rounded-lg text-xs text-white">
                <option>Worldwide (Inc. USA/Canada)</option>
                <option>Schengen / Europe</option>
                <option>Asia Pacific</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Depature</Label>
                <Input type="date" className="h-10 bg-[#0F1428] border-white/10 text-xs" />
              </div>
              <div className="space-y-2">
                <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Return</Label>
                <Input type="date" className="h-10 bg-[#0F1428] border-white/10 text-xs" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[9px] font-bold uppercase text-[#6E7495]">Traveler Age</Label>
              <Input type="number" placeholder="28" className="h-10 bg-[#0F1428] border-white/10 text-xs" />
            </div>
            <Button onClick={handleSearch} disabled={loading} className="w-full h-11 bg-[#F15A24] hover:bg-white hover:text-black font-bold uppercase text-[10px] tracking-widest rounded-xl mt-2">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "See Options"}
            </Button>
          </div>
        )}

        {step === 'quote' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
             <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] font-bold text-[#6E7495] uppercase">Select Coverage</span>
                <button onClick={() => setStep('search')} className="text-[9px] font-bold text-[#4FD1C5] uppercase">Edit Search</button>
             </div>
             {plans.map((p, i) => (
               <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between group hover:border-[#E8A33D]/40 transition-all cursor-pointer">
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-bold text-white">{p.name}</p>
                    <p className="text-[8px] font-bold text-[#4FD1C5] uppercase tracking-wider">{p.insurer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">₹{p.premium}</p>
                    <p className="text-[7px] font-bold text-[#6E7495] uppercase">Per Traveler</p>
                  </div>
               </div>
             ))}
             <Button onClick={() => setStep('success')} className="w-full h-12 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-xl mt-4">
                Continue to Checkout
             </Button>
          </div>
        )}

        {step === 'success' && (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95">
             <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
             </div>
             <p className="text-sm font-bold text-white">Application Ready</p>
             <p className="text-[10px] text-[#9AA1C0] leading-relaxed">The checkout has been redirected to the secure Utsavs platform for your partner: {agencyId}.</p>
             <Button variant="outline" onClick={() => setStep('search')} className="text-[9px] border-white/10 uppercase font-bold text-white rounded-lg">Return</Button>
          </div>
        )}

        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
           <div className="flex items-center gap-1.5 opacity-40">
              <Plane className="w-3 h-3 text-white" />
              <span className="text-[8px] font-bold uppercase tracking-widest text-[#6E7495]">Assistance Global</span>
           </div>
           <span className="text-[8px] font-bold text-[#6E7495] uppercase">ID: {agencyId}</span>
        </div>
      </CardContent>
    </Card>
  );
}
