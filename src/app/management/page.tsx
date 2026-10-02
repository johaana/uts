
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Users, 
  FileText, 
  ShieldCheck, 
  Plus, 
  Activity, 
  CheckCircle2, 
  Loader2,
  Lock,
  ArrowRight,
  LogOut,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { getFirestore, useCollection, useUser, getAuth } from "@/firebase";
import { collection, doc, getDoc, query, where, orderBy, limit } from "firebase/firestore";
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, signOut } from "firebase/auth";
import { requestAgencyOnboarding } from "./actions";

export default function ManagementPortalPage() {
  const { toast } = useToast();
  const { user, loading: authLoading } = useUser();
  const auth = getAuth();
  const db = getFirestore();

  const [activeTab, setActiveTab] = useState<'overview' | 'agencies' | 'ledger'>('overview');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [onboardState, setOnboardState] = useState<'form' | 'success'>('form');
  const [portalRole, setPortalRole] = useState<'admin' | 'agency_staff' | null>(null);
  const [assignedAgencyId, setAssignedAgencyId] = useState<string | null>(null);
  
  const [loginEmail, setLoginEmail] = useState("");
  const [isSendingLink, setIsSendingLink] = useState(false);
  const [linkSent, setIsLinkSent] = useState(false);

  const [newAgency, setNewAgency] = useState({ name: "", email: "" });

  useEffect(() => {
    if (typeof window !== 'undefined' && isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) email = window.prompt('Confirm email:');
      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then(() => {
            window.localStorage.removeItem('emailForSignIn');
            toast({ title: "Welcome back" });
          })
          .catch((e) => toast({ title: "Auth Error", description: e.message, variant: "destructive" }));
      }
    }
  }, [auth, toast]);

  useEffect(() => {
    if (user && db) {
      const userRef = doc(db, "users", user.uid);
      getDoc(userRef).then(snap => {
        if (snap.exists()) {
          const data = snap.data();
          setPortalRole(data.role);
          setAssignedAgencyId(data.agencyId);
        }
      });
    }
  }, [user, db]);

  const ledgerQuery = useMemo(() => {
    if (!db || !user || !portalRole) return null;
    const base = collection(db, "policy_ledger");
    if (portalRole === 'admin') return query(base, orderBy("createdAt", "desc"), limit(50));
    return query(base, where("agencyId", "==", assignedAgencyId), orderBy("createdAt", "desc"), limit(50));
  }, [db, user, portalRole, assignedAgencyId]);

  const { data: realPolicies } = useCollection(ledgerQuery);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingLink(true);
    try {
      await sendSignInLinkToEmail(auth, loginEmail, { url: window.location.href, handleCodeInApp: true });
      window.localStorage.setItem('emailForSignIn', loginEmail);
      setIsLinkSent(true);
      toast({ title: "Check your email" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setIsSendingLink(false);
    }
  };

  const handleOnboardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const token = await user.getIdToken();
    const res = await requestAgencyOnboarding(token, newAgency);
    if (res.success) setOnboardState('success');
    else toast({ title: "Failed", description: res.error, variant: "destructive" });
  };

  if (authLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-[#E8A33D]" /></div>;

  if (!user) {
    return (
      <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
           <Card className="w-full max-w-md bg-[#171D3A] border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
              <div className="p-10 space-y-8">
                 <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10"><Lock className="w-8 h-8 text-[#E8A33D]" /></div>
                    <h2 className="text-3xl font-serif font-bold">Partner Access</h2>
                    <p className="text-sm text-[#9AA1C0]">Secure login for Utsavs distribution partners.</p>
                 </div>
                 {linkSent ? (
                    <div className="text-center py-6 space-y-6">
                       <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
                       <p className="text-sm text-[#9AA1C0]">A secure link has been sent to <b>{loginEmail}</b>.</p>
                       <Button variant="ghost" onClick={() => setIsLinkSent(false)} className="text-[10px] uppercase font-bold text-[#6E7495]">Try another</Button>
                    </div>
                 ) : (
                    <form onSubmit={handleLogin} className="space-y-6">
                       <div className="space-y-2 text-left">
                          <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Professional Email</Label>
                          <Input type="email" placeholder="name@agency.com" required value={loginEmail} onChange={e => setLoginEmail(e.target.value)} className="h-14 bg-[#0F1428] border-white/10" />
                       </div>
                       <Button type="submit" disabled={isSendingLink} className="w-full h-14 bg-[#E8A33D] text-black font-bold">
                          {isSendingLink ? <Loader2 className="animate-spin" /> : "Request Access"}
                       </Button>
                    </form>
                 )}
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
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6 max-w-7xl space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#4FD1C5]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]">{portalRole === 'admin' ? "Principal" : "Agency"} Dashboard</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase">{portalRole === 'admin' ? "Network" : "Portfolio"}</h1>
              <p className="text-[#9AA1C0] font-medium">{user.email}</p>
            </div>
            <Button variant="ghost" onClick={() => signOut(auth)} className="text-[#6E7495] uppercase font-bold text-[10px] tracking-widest"><LogOut className="mr-2 h-3.5 w-3.5" /> Sign Out</Button>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-12">
            <aside className="space-y-1">
               {[
                 { id: 'overview', label: 'Overview', icon: Activity },
                 { id: 'ledger', label: 'Shadow Ledger', icon: FileText },
               ].map((item) => (
                 <button key={item.id} onClick={() => setActiveTab(item.id as any)} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left", activeTab === item.id ? "bg-white/10 text-white font-bold" : "text-[#9AA1C0] hover:bg-white/5")}>
                   <item.icon className={cn("w-4 h-4", activeTab === item.id ? "text-[#E8A33D]" : "text-[#6E7495]")} />
                   <span className="text-sm">{item.label}</span>
                 </button>
               ))}
            </aside>

            <div className="space-y-8 text-left">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4 shadow-xl">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Volume</CardTitle>
                    <span className="text-4xl font-bold font-serif text-white">₹{realPolicies?.reduce((acc, p: any) => acc + (p.premiumAmount || 0), 0).toLocaleString() || 0}</span>
                  </Card>
                  <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4 shadow-xl">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Policies</CardTitle>
                    <span className="text-4xl font-bold font-serif text-white">{realPolicies?.length || 0}</span>
                  </Card>
                </div>
              )}

              {activeTab === 'ledger' && (
                <Card className="bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">
                        <tr>
                          <th className="px-8 py-5">Transaction</th>
                          <th className="px-8 py-5">Status</th>
                          <th className="px-8 py-5">Premium</th>
                          <th className="px-8 py-5">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {realPolicies?.map((p: any) => (
                           <tr key={p.id} className="hover:bg-white/[0.02]">
                              <td className="px-8 py-6">
                                <p className="font-bold">{p.travelerName}</p>
                                <p className="font-mono text-[10px] text-[#4FD1C5]">{p.policyNumber || p.transactionId}</p>
                              </td>
                              <td className="px-8 py-6">
                                <Badge variant="outline" className={cn(
                                  "text-[9px] uppercase",
                                  p.status === 'issued' ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                                )}>{p.status}</Badge>
                              </td>
                              <td className="px-8 py-6 font-bold">₹{p.premiumAmount}</td>
                              <td className="px-8 py-6 text-[#6E7495]">{p.createdAt?.toDate().toLocaleDateString() || '—'}</td>
                           </tr>
                         ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
