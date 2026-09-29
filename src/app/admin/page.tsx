"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Lock, 
  Activity, 
  Database, 
  AlertCircle, 
  Clock, 
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { getFirestore } from "@/firebase";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { CanonicalRule } from "@/lib/operational/types";
import { COUNTRY_LABELS } from "@/lib/calendar-intelligence";

export default function AdminGatePage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [drafts, setDrafts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    canonical: 416,
    deterministic: 1091,
    confidence: "98.4%"
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Johaana@2319") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchDrafts();
    }
  }, [isAuthenticated]);

  const fetchDrafts = async () => {
    setLoading(true);
    try {
      const db = getFirestore();
      if (db) {
        const q = query(collection(db, "intelligence_records"), where("status", "==", "draft"));
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
        setDrafts(docs);
      }
    } catch (e) {
      console.error("Error fetching drafts:", e);
    } finally {
      setLoading(false);
    }
  };

  const publishRecord = async (firestoreId: string) => {
    const db = getFirestore();
    if (!db) return;
    try {
      const docRef = doc(db, "intelligence_records", firestoreId);
      await updateDoc(docRef, { status: "published" });
      fetchDrafts(); // Refresh
    } catch (e) {
      console.error("Error publishing:", e);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans flex flex-col">
        <Header />
        <main className="flex-1 py-12 md:py-24 text-left">
          <div className="container mx-auto px-6 space-y-12">
            
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#4FD1C5]">Operational Status: Active</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold">Utsavs Control Room</h1>
              <p className="text-xl text-[#9AA1C0] leading-relaxed max-w-2xl">
                Review and approve deterministic rule changes across 92 jurisdictions. 
                Records stay in Draft until you publish them to the live API.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
               {[
                 { label: "Canonical Rules", value: stats.canonical, icon: Database },
                 { label: "Deterministic Instances", value: stats.deterministic, icon: Activity },
                 { label: "Confidence Score", value: stats.confidence, icon: ShieldCheck }
               ].map((stat) => (
                 <Card key={stat.label} className="bg-[#171D3A] border-white/10 rounded-2xl">
                    <CardContent className="p-8 space-y-4">
                       <stat.icon className="w-6 h-6 text-[#E8A33D]" />
                       <div>
                          <p className="text-3xl font-bold font-serif">{stat.value}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">{stat.label}</p>
                       </div>
                    </CardContent>
                 </Card>
               ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                   <h3 className="text-xl font-bold font-serif flex items-center gap-2">
                     <Clock className="w-5 h-5 text-[#F0C888]" /> Pending Review
                   </h3>
                   <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#9AA1C0]">
                     {drafts.length} items
                   </span>
                </div>

                {loading ? (
                   <div className="py-20 text-center">
                      <Activity className="w-8 h-8 animate-spin mx-auto text-[#E8A33D] opacity-40" />
                   </div>
                ) : drafts.length > 0 ? (
                   <div className="space-y-4">
                      {drafts.map((record) => (
                        <div key={record.firestoreId} className="bg-[#171D3A] border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between gap-6 hover:border-[#4FD1C5]/40 transition-colors">
                           <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                 <span className="font-mono text-[10px] text-[#4FD1C5] font-bold uppercase tracking-widest">{record.date || 'Standing Policy'}</span>
                                 <div className="w-1 h-1 rounded-full bg-white/20"></div>
                                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">{COUNTRY_LABELS[record.jurisdiction?.country_code] || 'Global'}</span>
                              </div>
                              <h4 className="text-xl font-bold font-serif">{record.name}</h4>
                              <p className="text-sm text-[#9AA1C0] italic leading-relaxed">"{record.consequences?.implication}"</p>
                           </div>
                           <div className="flex items-center gap-3 shrink-0">
                              <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest border border-white/10 hover:bg-white/5 rounded-lg">Details</Button>
                              <Button 
                                onClick={() => publishRecord(record.firestoreId)}
                                className="bg-[#4FD1C5] text-[#0F1428] hover:bg-[#F4F1E8] font-bold text-xs uppercase tracking-widest h-10 px-6 rounded-lg shadow-lg"
                              >
                                Publish →
                              </Button>
                           </div>
                        </div>
                      ))}
                   </div>
                ) : (
                  <div className="p-20 border-2 border-dashed border-white/10 rounded-[32px] text-center space-y-6 bg-white/5">
                      <CheckCircle2 className="w-12 h-12 text-[#9AA1C0] mx-auto opacity-40" />
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold font-serif">No pending data changes.</h3>
                        <p className="text-[#9AA1C0] max-w-sm mx-auto">The production dataset is currently synchronized with the authoritative source registry.</p>
                      </div>
                      <Button variant="ghost" onClick={fetchDrafts} className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Refresh Registry</Button>
                  </div>
                )}
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
            <CardTitle className="text-2xl font-serif font-bold">Admin Control Room</CardTitle>
            <p className="text-sm text-[#9AA1C0] mt-2">Restricted data governance access.</p>
          </CardHeader>
          <CardContent className="p-8 space-y-6 text-left">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Enter Authorization Password</label>
                <Input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#0F1428] border-white/10 h-12 text-center text-xl tracking-[0.2em] focus:ring-[#E8A33D]"
                  placeholder="••••••••"
                  autoFocus
                />
              </div>
              {error && (
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold justify-center animate-shake">
                   <AlertCircle className="w-3 h-3" /> Invalid Authorization
                </div>
              )}
              <Button type="submit" className="w-full h-12 font-bold bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] rounded-full uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
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
