"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Lock, 
  Activity, 
  Database, 
  Clock, 
  CheckCircle2,
  RefreshCw,
  Zap
} from "lucide-react";
import { useUser } from "@/firebase";
import { listDrafts, publishRecord as publishAction, syncCanonical } from "./actions";
import { COUNTRY_LABELS } from "@/lib/calendar-intelligence";
import Link from "next/link";

export default function AdminGatePage() {
  const { user } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [drafts, setDrafts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [syncLoading, setSyncLoading] = useState(false);
  const [stats] = useState({
    canonical: 416,
    deterministic: 1091,
    confidence: "98.4%"
  });

  useEffect(() => {
    if (!user) {
      setIsAuthenticated(false);
      return;
    }
    // Verify admin claim on the client for routing; server actions re-verify on every call
    user.getIdTokenResult(true).then(r => {
      setIsAuthenticated(r.claims.role === 'admin');
    });
  }, [user]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchDrafts();
    }
  }, [isAuthenticated]);

  const fetchDrafts = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const token = await user.getIdToken();
      const data = await listDrafts(token);
      setDrafts(data);
    } catch (e) {
      console.error("Error fetching drafts");
    } finally {
      setLoading(false);
    }
  };

  const publishRecord = async (firestoreId: string) => {
    if (!user) return;
    try {
      const token = await user.getIdToken();
      await publishAction(token, firestoreId);
      fetchDrafts(); 
    } catch (e) {
      console.error("Error publishing:", e);
    }
  };

  const syncCanonicalData = async () => {
    if (!user) return;
    setSyncLoading(true);
    try {
      const token = await user.getIdToken();
      const r = await syncCanonical(token);
      alert(`Data sync successful. ${r.count} canonical rules are now live.`);
      fetchDrafts();
    } catch (e) {
      alert("Synchronization failed.");
    } finally {
      setSyncLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md bg-[#171D3A] border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
            <div className="p-10 space-y-8 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                <Lock className="w-8 h-8 text-[#E8A33D]" />
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl font-serif font-bold">Access Restricted</h2>
                <p className="text-sm text-[#9AA1C0]">Principal admin authentication required.</p>
              </div>
              <div className="pt-4">
                <Button asChild className="w-full h-14 bg-[#E8A33D] text-black font-bold">
                  <Link href="/management">Sign in via Partner Portal</Link>
                </Button>
              </div>
            </div>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

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
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Utsavs Control Room</h1>
            <p className="text-xl text-[#9AA1C0] leading-relaxed max-w-2xl">
              Governance for 92 jurisdictions. Managed via server-authoritative actions.
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

          <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-12">
              <div className="space-y-6">
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
                          <p className="text-[#9AA1C0] max-sm mx-auto">The production dataset is currently synchronized with the authoritative source registry.</p>
                        </div>
                        <Button variant="ghost" onClick={fetchDrafts} className="text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5]">Refresh Registry</Button>
                    </div>
                  )}
              </div>

              <div className="pt-12 border-t border-white/10 space-y-6">
                  <h3 className="text-xl font-bold font-serif flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#E8A33D]" /> System Utilities
                  </h3>
                  <Card className="bg-[#171D3A] border-dashed border-white/10">
                      <CardContent className="p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                          <div className="space-y-2 text-left">
                              <h4 className="font-bold text-lg">Sync Canonical Base</h4>
                              <p className="text-sm text-[#9AA1C0] max-w-md">
                                  Pushes the verified code patterns into Firestore as published records. 
                                  Requires authoritative token resolution.
                              </p>
                          </div>
                          <Button 
                              onClick={syncCanonicalData}
                              disabled={syncLoading}
                              className="bg-white text-[#0F1428] hover:bg-[#F4F1E8] font-bold h-12 px-10 rounded-full uppercase tracking-widest text-xs min-w-[200px]"
                          >
                              {syncLoading ? (
                                  <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                              ) : (
                                  <Database className="w-4 h-4 mr-2" />
                              )}
                              {syncLoading ? "Syncing..." : "Sync to Cloud"}
                          </Button>
                      </CardContent>
                  </Card>
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
