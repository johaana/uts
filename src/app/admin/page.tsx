"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, Activity, Database, AlertCircle } from "lucide-react";

export default function AdminGatePage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Johaana@2319") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
        <Header />
        <main className="py-12 md:py-24">
          <div className="container mx-auto px-6 space-y-12">
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#4FD1C5]">Operational Status: Active</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-headline font-bold">Utsavs Intelligence Control Room</h1>
              <p className="text-xl text-[#9AA1C0] leading-relaxed">
                Review and approve deterministic rule changes across 92 jurisdictions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
               {[
                 { label: "Canonical Rules", value: "416", icon: Database },
                 { label: "Deterministic Instances", value: "1,091", icon: Activity },
                 { label: "Confidence Score", value: "98.4%", icon: ShieldCheck }
               ].map((stat) => (
                 <Card key={stat.label} className="bg-[#171D3A] border-white/10">
                    <CardContent className="p-8 space-y-4">
                       <stat.icon className="w-6 h-6 text-[#E8A33D]" />
                       <div>
                          <p className="text-3xl font-bold font-headline">{stat.value}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">{stat.label}</p>
                       </div>
                    </CardContent>
                 </Card>
               ))}
            </div>

            <div className="max-w-4xl mx-auto p-12 border-2 border-dashed border-white/10 rounded-[32px] text-center space-y-6 bg-white/5">
                <Database className="w-12 h-12 text-[#9AA1C0] mx-auto opacity-40" />
                <h3 className="text-2xl font-bold font-headline">No pending data changes.</h3>
                <p className="text-[#9AA1C0]">The production dataset is currently synchronized with the authoritative source registry.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md bg-[#171D3A] border-white/10 shadow-2xl overflow-hidden rounded-[24px]">
          <CardHeader className="bg-white/5 p-8 text-center border-b border-white/5">
            <Lock className="w-10 h-10 text-[#E8A33D] mx-auto mb-4" />
            <CardTitle className="text-2xl font-headline font-bold">Admin Control Room</CardTitle>
            <p className="text-sm text-[#9AA1C0] mt-2">Restricted data governance access.</p>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Enter Authorization Password</label>
                <Input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#0F1428] border-white/10 h-12 text-center text-xl tracking-[0.2em]"
                  placeholder="••••••••"
                  autoFocus
                />
              </div>
              {error && (
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold justify-center animate-shake">
                   <AlertCircle className="w-3 h-3" /> Invalid Authorization
                </div>
              )}
              <Button type="submit" className="w-full h-12 font-bold bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] rounded-full uppercase tracking-widest text-xs">
                Unlock Control Room
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
