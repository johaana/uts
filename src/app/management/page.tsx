
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
  Copy, 
  CheckCircle2, 
  Link as LinkIcon, 
  ExternalLink, 
  Trash2, 
  Loader2,
  Mail,
  LogOut,
  Lock,
  ArrowRight,
  TrendingUp,
  CreditCard
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { getFirestore, useCollection, useUser, getAuth } from "@/firebase";
import { collection, doc, setDoc, updateDoc, getDoc, query, where } from "firebase/firestore";
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, signOut } from "firebase/auth";
import { cancelAsegoPolicy } from "@/app/international-insurance/actions";

export default function ManagementPortalPage() {
  const { toast } = useToast();
  const { user, loading: authLoading } = useUser();
  const auth = getAuth();
  const db = getFirestore();

  // State Management
  const [activeTab, setActiveTab] = useState<'overview' | 'agencies' | 'ledger' | 'widgets'>('overview');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [onboardState, setOnboardState] = useState<'form' | 'success'>('form');
  const [isVoiding, setIsVoiding] = useState<string | null>(null);
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

  // 1. Handle Finish Sign-in from Email Link
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

  // 2. Fetch User Profile & Role
  useEffect(() => {
    if (user && db) {
      const userRef = doc(db, "users", user.uid);
      getDoc(userRef).then(snap => {
        if (snap.exists()) {
          const data = snap.data();
          setPortalRole(data.role);
          setAssignedAgencyId(data.agencyId);
        } else {
          // If no user doc exists, default to unauthorized or prompt admin to set up
          setPortalRole(null);
        }
      });
    }
  }, [user, db]);

  // 3. Data Queries (Adaptive based on Role)
  const ledgerQuery = useMemo(() => {
    if (!db || !user || !portalRole) return null;
    if (portalRole === 'admin') return collection(db, "policy_ledger");
    // If agency staff, filter only their sales
    return query(collection(db, "policy_ledger"), where("agencyId", "==", assignedAgencyId || "MASTER"));
  }, [db, user, portalRole, assignedAgencyId]);

  const agenciesQuery = useMemo(() => {
    if (!db || portalRole !== 'admin') return null;
    return collection(db, "agencies");
  }, [db, portalRole]);
  
  const { data: realPolicies, loading: ledgerLoading } = useCollection(ledgerQuery);
  const { data: realAgencies, loading: agenciesLoading } = useCollection(agenciesQuery);

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
      toast({ title: "Check your email", description: "We sent a secure login link to your inbox." });
    } catch (error: any) {
      toast({ title: "Auth Error", description: error.message, variant: "destructive" });
    } finally {
      setIsSendingLink(false);
    }
  };

  const handleOnboardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) return;
    try {
      const agencyRef = doc(collection(db, "agencies"));
      await setDoc(agencyRef, {
        id: agencyRef.id,
        name: newAgency.name,
        contactEmail: newAgency.email,
        commissionTier: newAgency.tier === 'gold' ? 15 : newAgency.tier === 'silver' ? 12 : 10,
        status: "Active",
        policies: 0,
        revenue: "₹0",
        onboardedAt: new Date().toISOString()
      });
      setOnboardState('success');
    } catch (error) {
      toast({ title: "Onboarding Failed", variant: "destructive" });
    }
  };

  const handleVoidPolicy = async (policyNo: string) => {
    if (!confirm(`Are you sure you want to void policy ${policyNo}?`)) return;
    setIsVoiding(policyNo);
    try {
      const res = await cancelAsegoPolicy(policyNo, { partnerId: '', sign: '', reference: '' });
      if (res.success) {
        if (db) {
          const docRef = doc(db, "policy_ledger", policyNo);
          await updateDoc(docRef, { status: "voided" });
        }
        toast({ title: "Policy voided successfully" });
      } else {
        toast({ title: "Asego Error", description: res.data?.msg || "Void failed", variant: "destructive" });
      }
    } catch (e: any) {
      toast({ title: "Error", description: e.message, variant: "destructive" });
    } finally {
      setIsVoiding(null);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: `${label} copied` });
  };

  // --- RENDERING ---

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0F1428] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#E8A33D]" />
      </div>
    );
  }

  // LOGIN SCREEN
  if (!user) {
    return (
      <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
           <Card className="w-full max-w-md bg-[#171D3A] border-white/10 shadow-2xl rounded-[32px] overflow-hidden">
              <div className="p-10 space-y-8">
                 <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10">
                       <Lock className="w-8 h-8 text-[#E8A33D]" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold">Partner Access</h2>
                    <p className="text-sm text-[#9AA1C0] px-4">Authorized access for Utsavs partners and distribution staff.</p>
                 </div>

                 {linkSent ? (
                    <div className="text-center py-6 animate-in zoom-in-95 duration-300 space-y-6">
                       <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                       </div>
                       <div className="space-y-2">
                          <p className="font-bold">Link Dispatched</p>
                          <p className="text-sm text-[#9AA1C0]">We've sent a secure login link to <b>{loginEmail}</b>. Click the link in your email to enter the portal.</p>
                       </div>
                       <Button variant="ghost" onClick={() => setIsLinkSent(false)} className="text-[10px] uppercase font-bold text-[#6E7495]">Use a different email</Button>
                    </div>
                 ) : (
                    <form onSubmit={handleLogin} className="space-y-6">
                       <div className="space-y-2">
                          <Label className="text-[10px] uppercase font-bold tracking-widest text-[#6E7495]">Professional Email</Label>
                          <div className="relative">
                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E7495]" />
                             <Input 
                                type="email" 
                                placeholder="name@agency.com" 
                                required
                                value={loginEmail}
                                onChange={e => setLoginEmail(e.target.value)}
                                className="h-14 pl-12 bg-[#0F1428] border-white/10 rounded-xl focus:ring-[#E8A33D]" 
                             />
                          </div>
                       </div>
                       <Button type="submit" disabled={isSendingLink} className="w-full h-14 bg-[#E8A33D] text-[#0F1428] hover:bg-white font-bold rounded-xl text-sm transition-all shadow-xl group">
                          {isSendingLink ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Request Secure Access <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></>}
                       </Button>
                    </form>
                 )}
              </div>
              <div className="p-6 bg-white/5 border-t border-white/5 text-center">
                 <p className="text-[10px] font-bold text-[#6E7495] uppercase tracking-widest">Global Data Operations</p>
              </div>
           </Card>
        </main>
        <Footer />
      </div>
    );
  }

  // AUTHENTICATED DASHBOARD
  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans flex flex-col selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6 max-w-7xl space-y-10">
          
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#4FD1C5]">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                   {portalRole === 'admin' ? "Principal Dashboard" : "Partner Portal"}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">
                 {portalRole === 'admin' ? "Utsavs Network" : "My Agency Dashboard"}
              </h1>
              <p className="text-[#9AA1C0] font-medium max-w-xl">
                 Logged in as <span className="text-white">{user.email}</span>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {portalRole === 'admin' && (
                <Dialog open={isDialogOpen} onOpenChange={(open) => {
                  setIsDialogOpen(open);
                  if (!open) setTimeout(() => setOnboardState('form'), 300);
                }}>
                  <DialogTrigger asChild>
                    <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-white font-bold rounded-full px-6 shadow-xl transition-all">
                      <Plus className="w-4 h-4 mr-2" /> Onboard Agency
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#171D3A] border-white/10 text-white rounded-3xl max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif">Agency Onboarding</DialogTitle>
                      <DialogDescription className="text-[#9AA1C0]">Create a new partner profile and generate access credentials.</DialogDescription>
                    </DialogHeader>

                    {onboardState === 'form' ? (
                      <form onSubmit={handleOnboardSubmit} className="space-y-6 pt-4 text-left">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Agency Name</Label>
                            <Input placeholder="e.g. Travel Express" required value={newAgency.name} onChange={e => setNewAgency({...newAgency, name: e.target.value})} className="bg-[#0F1428] border-white/10 h-12 text-white" />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Primary Email</Label>
                            <Input type="email" placeholder="contact@agency.com" required value={newAgency.email} onChange={e => setNewAgency({...newAgency, email: e.target.value})} className="bg-[#0F1428] border-white/10 h-12 text-white" />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Commission Tier</Label>
                            <Select value={newAgency.tier} onValueChange={v => setNewAgency({...newAgency, tier: v})}>
                              <SelectTrigger className="bg-[#0F1428] border-white/10 h-12 text-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-[#171D3A] border-white/10 text-white">
                                <SelectItem value="standard">Standard (10%)</SelectItem>
                                <SelectItem value="silver">Silver (12%)</SelectItem>
                                <SelectItem value="gold">Gold (15%)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <DialogFooter className="pt-4">
                          <Button type="submit" className="w-full bg-[#E8A33D] text-black font-bold h-12 rounded-xl">Generate Partner Access</Button>
                        </DialogFooter>
                      </form>
                    ) : (
                      <div className="py-10 text-center space-y-6 animate-in zoom-in-95 duration-300">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto ring-8 ring-green-500/5">
                          <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold">Partner Ready</h3>
                          <p className="text-sm text-[#9AA1C0]">Profile active. Use the keys below to provide access.</p>
                        </div>
                        <Button onClick={() => setIsDialogOpen(false)} className="w-full h-12 bg-white text-black font-bold rounded-xl mt-6">Return to Dashboard</Button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              )}
              <Button variant="ghost" onClick={() => signOut(auth)} className="text-[#6E7495] hover:text-white uppercase font-bold text-[10px] tracking-widest">
                 <LogOut className="w-3.5 h-3.5 mr-2" /> Sign Out
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-12">
            
            {/* Sidebar Navigation */}
            <aside className="space-y-1">
               {[
                 { id: 'overview', label: 'Overview', icon: Activity },
                 { id: 'agencies', label: 'Agencies', icon: Users, hidden: portalRole !== 'admin' },
                 { id: 'ledger', label: 'Shadow Ledger', icon: FileText },
                 { id: 'widgets', label: 'Distribution', icon: BarChart3, hidden: portalRole !== 'admin' },
               ].filter(i => !i.hidden).map((item) => (
                 <button
                   key={item.id}
                   onClick={() => setActiveTab(item.id as any)}
                   className={cn(
                     "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left group",
                     activeTab === item.id 
                       ? "bg-white/10 text-white font-bold" 
                       : "text-[#9AA1C0] hover:bg-white/5"
                   )}
                 >
                   <item.icon className={cn("w-4 h-4 transition-colors", activeTab === item.id ? "text-[#E8A33D]" : "text-[#6E7495] group-hover:text-[#9AA1C0]")} />
                   <span className="text-sm">{item.label}</span>
                 </button>
               ))}
            </aside>

            {/* Main Content Area */}
            <div className="space-y-8 text-left">
              
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4 shadow-lg">
                      <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495] flex items-center gap-2">
                        <TrendingUp className="w-3 h-3 text-[#E8A33D]" /> {portalRole === 'admin' ? "Network Revenue" : "My Earnings"}
                      </CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold font-serif">₹{realPolicies?.reduce((acc, p: any) => acc + (p.premiumAmount || 0), 0).toLocaleString() || 0}</span>
                      </div>
                    </Card>
                    <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4 shadow-lg">
                      <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495] flex items-center gap-2">
                        <CreditCard className="w-3 h-3 text-[#4FD1C5]" /> Policies Issued
                      </CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold font-serif">{realPolicies?.length || 0}</span>
                      </div>
                    </Card>
                    <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4 shadow-lg">
                       <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Assigned Tier</CardTitle>
                       <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold font-serif uppercase tracking-tight">{portalRole === 'admin' ? 'Principal' : 'Standard Partner'}</span>
                      </div>
                    </Card>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     <Card className="bg-[#171D3A] border-white/10 rounded-3xl p-8 space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-white/5 pb-4">Recent Activity</h3>
                        <div className="space-y-6 max-h-[300px] overflow-auto pr-2 custom-scrollbar">
                           {realPolicies?.slice(0, 5).map((p: any) => (
                             <div key={p.id} className="flex items-center justify-between">
                                <div className="space-y-1">
                                   <p className="text-sm font-bold text-white">{p.travelerName}</p>
                                   <p className="text-[10px] text-[#6E7495] font-mono uppercase">{p.policyNumber} · {p.status}</p>
                                </div>
                                <p className="text-sm font-bold text-[#4FD1C5]">₹{p.premiumAmount}</p>
                             </div>
                           ))}
                           {(!realPolicies || realPolicies.length === 0) && <p className="text-xs text-[#6E7495] italic py-8">No recent transactions found.</p>}
                        </div>
                     </Card>
                     <Card className="bg-[#171D3A] border-white/10 rounded-3xl p-8 space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-white/5 pb-4">System Alerts</h3>
                        <div className="space-y-4">
                           <div className="flex gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] mt-1.5 shrink-0" />
                              <p className="text-xs text-[#9AA1C0] leading-relaxed">System healthy. Asego UAT engine connected and authenticated.</p>
                           </div>
                           <div className="flex gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] mt-1.5 shrink-0" />
                              <p className="text-xs text-[#9AA1C0] leading-relaxed">Shadow Ledger is capturing real-time sales for accounts reconciliation.</p>
                           </div>
                        </div>
                     </Card>
                  </div>
                </div>
              )}

              {activeTab === 'agencies' && portalRole === 'admin' && (
                 <div className="space-y-6 animate-in fade-in duration-500">
                    <Card className="bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-white">
                          <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">
                            <tr>
                              <th className="px-8 py-5">Agency Profile</th>
                              <th className="px-8 py-5">Tier</th>
                              <th className="px-8 py-5">Status</th>
                              <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {realAgencies?.map((ag: any) => (
                              <tr key={ag.id} className="hover:bg-white/[0.02] group">
                                <td className="px-8 py-6">
                                  <div className="space-y-1">
                                    <p className="font-bold">{ag.name}</p>
                                    <p className="text-[11px] text-[#6E7495]">{ag.contactEmail}</p>
                                  </div>
                                </td>
                                <td className="px-8 py-6">
                                  <Badge variant="outline" className="text-[9px] uppercase border-white/10 text-[#E8A33D]">{ag.commissionTier}% Share</Badge>
                                </td>
                                <td className="px-8 py-6">
                                  <span className="text-[9px] font-bold uppercase text-green-500">{ag.status}</span>
                                </td>
                                <td className="px-8 py-6 text-right">
                                  <Button variant="ghost" size="sm" className="text-[9px] font-bold uppercase hover:text-[#E8A33D]">Settings</Button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                 </div>
              )}

              {activeTab === 'ledger' && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="flex justify-between items-center bg-[#171D3A] border border-white/10 p-6 rounded-2xl">
                     <p className="text-[11px] font-bold text-[#6E7495] uppercase tracking-[0.2em]">Transaction Registry</p>
                     <Button variant="outline" className="border-white/10 rounded-full text-[10px] font-bold uppercase text-white">Export CSV</Button>
                  </div>
                  <Card className="bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">
                          <tr>
                            <th className="px-8 py-5">Policy #</th>
                            <th className="px-8 py-5">Traveler</th>
                            <th className="px-8 py-5">Amount</th>
                            <th className="px-8 py-5">Status</th>
                            <th className="px-8 py-5 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           {realPolicies?.map((p: any) => (
                             <tr key={p.id} className="hover:bg-white/[0.02]">
                                <td className="px-8 py-6 font-mono text-xs text-[#4FD1C5]">{p.policyNumber}</td>
                                <td className="px-8 py-6">
                                   <div className="space-y-1">
                                      <p className="font-bold">{p.travelerName}</p>
                                      {portalRole === 'admin' && <p className="text-[9px] text-[#6E7495] uppercase font-bold">{p.agencyId}</p>}
                                   </div>
                                </td>
                                <td className="px-8 py-6 font-bold">₹{p.premiumAmount}</td>
                                <td className="px-8 py-6">
                                  <Badge variant="outline" className={cn(
                                    "text-[9px] uppercase font-bold",
                                    p.status === 'voided' ? "bg-red-500/10 text-red-500 border-red-500/20" : "bg-green-500/10 text-green-500 border-green-500/20"
                                  )}>{p.status}</Badge>
                                </td>
                                <td className="px-8 py-6 text-right flex justify-end gap-2">
                                  {p.documentUrl && (
                                    <a href={p.documentUrl} target="_blank" rel="noopener noreferrer">
                                      <Button variant="ghost" size="icon" className="text-[#4FD1C5]"><ExternalLink className="w-4 h-4" /></Button>
                                    </a>
                                  )}
                                  {p.status !== 'voided' && (
                                    <Button 
                                      variant="ghost" 
                                      size="icon" 
                                      onClick={() => handleVoidPolicy(p.policyNumber)}
                                      disabled={isVoiding === p.policyNumber}
                                      className="text-red-400 hover:text-red-500 hover:bg-red-500/10"
                                    >
                                      {isVoiding === p.policyNumber ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                    </Button>
                                  )}
                                </td>
                             </tr>
                           ))}
                           {(!realPolicies || realPolicies.length === 0) && (
                             <tr>
                               <td colSpan={5} className="px-8 py-20 text-center text-[#6E7495] italic">No transaction records found.</td>
                             </tr>
                           )}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === 'widgets' && portalRole === 'admin' && (
                <div className="space-y-12 animate-in fade-in duration-500">
                   <div className="max-w-2xl space-y-4">
                      <h2 className="text-3xl font-serif font-bold text-white">Widget Center</h2>
                      <p className="text-[#9AA1C0]">Generate and manage distribution snippets for your partner network.</p>
                   </div>

                   <div className="grid md:grid-cols-2 gap-8 text-left">
                      <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-8 shadow-xl group hover:border-[#E8A33D]/40 transition-all">
                         <div className="flex items-start justify-between">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary transition-all group-hover:text-black">
                               <Activity className="w-6 h-6" />
                            </div>
                         </div>
                         <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-white">Date Intelligence</h3>
                            <p className="text-sm text-[#9AA1C0] leading-relaxed">Embed our verified temporal engine to display real-time travel signals.</p>
                         </div>
                         <div className="p-4 bg-[#0F1428] rounded-xl font-mono text-[10px] text-[#4FD1C5] border border-white/5 overflow-hidden">
                             <code>{`<DateIntelWidget countryCode="IN" />`}</code>
                         </div>
                      </Card>

                      <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-8 shadow-xl group hover:border-[#4FD1C5]/40 transition-all">
                         <div className="flex items-start justify-between">
                            <div className="w-12 h-12 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center text-[#4FD1C5] group-hover:bg-[#4FD1C5] transition-all group-hover:text-black">
                               <ShieldCheck className="w-6 h-6" />
                            </div>
                         </div>
                         <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-white">Insurance Express</h3>
                            <p className="text-sm text-[#9AA1C0] leading-relaxed">Lightweight checkout flow that allows agencies to sell policies instantly.</p>
                         </div>
                         <div className="p-4 bg-[#0F1428] rounded-xl font-mono text-[10px] text-[#4FD1C5] border border-white/5 overflow-hidden">
                             <code>{`<InsuranceExpressWidget agencyId="MASTER" />`}</code>
                         </div>
                      </Card>
                   </div>
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
