"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { 
  Users, 
  BarChart3, 
  FileText, 
  ShieldCheck, 
  Plus, 
  Activity, 
  CheckCircle2, 
  ExternalLink, 
  Trash2, 
  Loader2,
  Mail,
  LogOut,
  Lock,
  ArrowRight,
  TrendingUp,
  CreditCard,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { getFirestore, useCollection, useUser, getAuth } from "@/firebase";
import { collection, doc, getDoc, query, where, orderBy, limit } from "firebase/firestore";
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, signOut } from "firebase/auth";
import { onboardAgency } from "./actions";

export default function ManagementPortalPage() {
  const { toast } = useToast();
  const { user, loading: authLoading } = useUser();
  const auth = getAuth();
  const db = getFirestore();

  // State Management
  const [activeTab, setActiveTab] = useState<'overview' | 'agencies' | 'ledger' | 'widgets'>('overview');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [onboardState, setOnboardState] = useState<'form' | 'success'>('form');
  const [portalRole, setPortalRole] = useState<'admin' | 'agency_staff' | null>(null);
  const [assignedAgencyId, setAssignedAgencyId] = useState<string | null>(null);
  
  // Login State
  const [loginEmail, setLoginEmail] = useState("");
  const [isSendingLink, setIsSendingLink] = useState(false);
  const [linkSent, setIsLinkSent] = useState(false);

  // New Agency Form State
  const [newAgency, setNewAgency] = useState({
    name: "",
    email: "",
    tier: "standard"
  });

  // Handle Finish Sign-in from Email Link
  useEffect(() => {
    if (typeof window !== 'undefined' && isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then(() => {
            window.localStorage.removeItem('emailForSignIn');
            toast({ title: "Successfully Signed In" });
          })
          .catch((error) => {
            toast({ title: "Sign-in Error", description: error.message, variant: "destructive" });
          });
      }
    }
  }, [auth, toast]);

  // Authoritative User Profile Fetch
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

  // Secure Ledger Query (Scoped by Firestore Rules, Filtered here for efficiency)
  const ledgerQuery = useMemo(() => {
    if (!db || !user || !portalRole) return null;
    const base = collection(db, "policy_ledger");
    if (portalRole === 'admin') return query(base, orderBy("createdAt", "desc"), limit(50));
    return query(base, where("agencyId", "==", assignedAgencyId), orderBy("createdAt", "desc"), limit(50));
  }, [db, user, portalRole, assignedAgencyId]);

  const agenciesQuery = useMemo(() => {
    if (!db || portalRole !== 'admin') return null;
    return query(collection(db, "agencies"), orderBy("onboardedAt", "desc"));
  }, [db, portalRole]);
  
  const { data: realPolicies } = useCollection(ledgerQuery);
  const { data: realAgencies } = useCollection(agenciesQuery);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingLink(true);
    try {
      const actionCodeSettings = {
        url: window.location.href,
        handleCodeInApp: true,
      };
      await sendSignInLinkToEmail(auth, loginEmail, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', loginEmail);
      setIsLinkSent(true);
      toast({ title: "Check your email" });
    } catch (error: any) {
      toast({ title: "Auth Error", description: error.message, variant: "destructive" });
    } finally {
      setIsSendingLink(false);
    }
  };

  const handleOnboardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    try {
      const res = await onboardAgency(user.uid, newAgency);
      if (res.success) {
        setOnboardState('success');
      } else {
        toast({ title: "Onboarding Failed", description: res.error, variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", variant: "destructive" });
    }
  };

  if (authLoading) return <div className="min-h-screen bg-[#0F1428] flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-[#E8A33D]" /></div>;

  if (!user) {
    return (
      <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans flex flex-col">
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
                       <Button variant="ghost" onClick={() => setIsLinkSent(false)} className="text-[10px] uppercase font-bold text-[#6E7495]">Use another email</Button>
                    </div>
                 ) : (
                    <form onSubmit={handleLogin} className="space-y-6">
                       <div className="space-y-2">
                          <Label className="text-[10px] uppercase font-bold text-[#6E7495]">Professional Email</Label>
                          <Input type="email" placeholder="name@agency.com" required value={loginEmail} onChange={e => setLoginEmail(e.target.value)} className="h-14 bg-[#0F1428] border-white/10 rounded-xl" />
                       </div>
                       <Button type="submit" disabled={isSendingLink} className="w-full h-14 bg-[#E8A33D] text-[#0F1428] font-bold rounded-xl text-sm transition-all group">
                          {isSendingLink ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Request Access <ArrowRight className="w-4 h-4 ml-2" /></>}
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

  // Dashboard View
  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans flex flex-col selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6 max-w-7xl space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#4FD1C5]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]">{portalRole === 'admin' ? "Principal Dashboard" : "Partner Dashboard"}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">{portalRole === 'admin' ? "Utsavs Network" : "My Agency Overview"}</h1>
              <p className="text-[#9AA1C0] font-medium">Logged in as <span className="text-white">{user.email}</span></p>
            </div>
            <div className="flex items-center gap-3">
              {portalRole === 'admin' && (
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild><Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-white font-bold rounded-full px-6 shadow-xl"><Plus className="w-4 h-4 mr-2" /> Onboard Agency</Button></DialogTrigger>
                  <DialogContent className="bg-[#171D3A] border-white/10 text-white rounded-3xl max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif">Agency Onboarding</DialogTitle>
                      <DialogDescription className="text-[#9AA1C0]">Establish a server-authoritative partner record.</DialogDescription>
                    </DialogHeader>
                    {onboardState === 'form' ? (
                      <form onSubmit={handleOnboardSubmit} className="space-y-6 pt-4 text-left">
                        <div className="space-y-4">
                          <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Agency Name</Label><Input placeholder="Legal Entity Name" required value={newAgency.name} onChange={e => setNewAgency({...newAgency, name: e.target.value})} className="bg-[#0F1428] border-white/10 h-12" /></div>
                          <div className="space-y-1.5"><Label className="text-[9px] uppercase font-bold text-[#6E7495]">Primary Email</Label><Input type="email" placeholder="contact@agency.com" required value={newAgency.email} onChange={e => setNewAgency({...newAgency, email: e.target.value})} className="bg-[#0F1428] border-white/10 h-12" /></div>
                          <div className="space-y-1.5">
                            <Label className="text-[9px] uppercase font-bold text-[#6E7495]">Tier</Label>
                            <Select value={newAgency.tier} onValueChange={v => setNewAgency({...newAgency, tier: v})}>
                              <SelectTrigger className="bg-[#0F1428] border-white/10 h-12"><SelectValue /></SelectTrigger>
                              <SelectContent className="bg-[#171D3A] border-white/10 text-white">
                                <SelectItem value="standard">Standard (10%)</SelectItem>
                                <SelectItem value="silver">Silver (12%)</SelectItem>
                                <SelectItem value="gold">Gold (15%)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button type="submit" className="w-full bg-[#E8A33D] text-black font-bold h-12 rounded-xl">Create Partner Record</Button>
                      </form>
                    ) : (
                      <div className="py-10 text-center space-y-6">
                        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                        <h3 className="text-xl font-bold">Partner Onboarded</h3>
                        <Button onClick={() => { setIsDialogOpen(false); setOnboardState('form'); }} className="w-full h-12 bg-white text-black font-bold rounded-xl">Done</Button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              )}
              <Button variant="ghost" onClick={() => signOut(auth)} className="text-[#6E7495] hover:text-white uppercase font-bold text-[10px] tracking-widest"><LogOut className="w-3.5 h-3.5 mr-2" /> Sign Out</Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-12">
            <aside className="space-y-1">
               {[
                 { id: 'overview', label: 'Overview', icon: Activity },
                 { id: 'agencies', label: 'Agencies', icon: Users, hidden: portalRole !== 'admin' },
                 { id: 'ledger', label: 'Shadow Ledger', icon: FileText },
               ].filter(i => !i.hidden).map((item) => (
                 <button key={item.id} onClick={() => setActiveTab(item.id as any)} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left", activeTab === item.id ? "bg-white/10 text-white font-bold" : "text-[#9AA1C0] hover:bg-white/5")}>
                   <item.icon className={cn("w-4 h-4", activeTab === item.id ? "text-[#E8A33D]" : "text-[#6E7495]")} />
                   <span className="text-sm">{item.label}</span>
                 </button>
               ))}
            </aside>

            <div className="space-y-8 text-left">
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4">
                      <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495] flex items-center gap-2"><TrendingUp className="w-3 h-3 text-[#E8A33D]" /> Network Volume</CardTitle>
                      <span className="text-4xl font-bold font-serif text-white">₹{realPolicies?.reduce((acc, p: any) => acc + (p.premiumAmount || 0), 0).toLocaleString() || 0}</span>
                    </Card>
                    <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4">
                      <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495] flex items-center gap-2"><CreditCard className="w-3 h-3 text-[#4FD1C5]" /> Policies</CardTitle>
                      <span className="text-4xl font-bold font-serif text-white">{realPolicies?.length || 0}</span>
                    </Card>
                    <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4">
                       <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Authority</CardTitle>
                       <span className="text-2xl font-bold font-serif text-white uppercase">{portalRole || 'Unknown'}</span>
                    </Card>
                  </div>
                  <div className="p-10 border-2 border-dashed border-white/5 rounded-[40px] text-center space-y-4 bg-white/[0.01]">
                     <Activity className="w-10 h-10 mx-auto text-[#6E7495] opacity-40" />
                     <p className="text-[#9AA1C0] max-w-sm mx-auto font-medium">Real-time distribution pulse is active. Secure tenant isolation is enforced by server-side rules.</p>
                  </div>
                </div>
              )}

              {activeTab === 'agencies' && portalRole === 'admin' && (
                 <Card className="bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in duration-500">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-white">
                        <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">
                          <tr>
                            <th className="px-8 py-5">Agency</th>
                            <th className="px-8 py-5">Commission</th>
                            <th className="px-8 py-5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {realAgencies?.map((ag: any) => (
                            <tr key={ag.id} className="hover:bg-white/[0.02]">
                              <td className="px-8 py-6">
                                <p className="font-bold">{ag.name}</p>
                                <p className="text-[11px] text-[#6E7495]">{ag.contactEmail}</p>
                              </td>
                              <td className="px-8 py-6"><Badge variant="outline" className="border-[#E8A33D] text-[#E8A33D]">{Math.round((ag.commissionRate || 0) * 100)}% Share</Badge></td>
                              <td className="px-8 py-6"><span className="text-[9px] font-bold uppercase text-green-500">{ag.status}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                 </Card>
              )}

              {activeTab === 'ledger' && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <Card className="bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">
                          <tr>
                            <th className="px-8 py-5">Transaction ID</th>
                            <th className="px-8 py-5">Traveler</th>
                            <th className="px-8 py-5">Premium</th>
                            <th className="px-8 py-5">Utsavs Share</th>
                            <th className="px-8 py-5">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           {realPolicies?.map((p: any) => (
                             <tr key={p.id} className="hover:bg-white/[0.02]">
                                <td className="px-8 py-6 font-mono text-[11px] text-[#4FD1C5]">{p.transactionId}</td>
                                <td className="px-8 py-6 font-bold">{p.travelerName}</td>
                                <td className="px-8 py-6 font-bold">₹{p.premiumAmount}</td>
                                <td className="px-8 py-6 text-green-500 font-bold">₹{p.utsavsShareAmount || 0}</td>
                                <td className="px-8 py-6">
                                  <Badge variant="outline" className={cn(
                                    "text-[9px] uppercase font-bold",
                                    p.status === 'issued' ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                                  )}>{p.status}</Badge>
                                </td>
                             </tr>
                           ))}
                           {(!realPolicies || realPolicies.length === 0) && (
                             <tr><td colSpan={5} className="px-8 py-20 text-center text-[#6E7495] italic">No ledger records found.</td></tr>
                           )}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
