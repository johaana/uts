"use client";

import React, { useState } from "react";
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
  ChevronRight,
  Activity,
  Copy,
  CheckCircle2,
  Mail,
  Percent,
  Link as LinkIcon,
  Globe,
  Code
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

// MOCK DATA for visualization
const MOCK_AGENCIES = [
  { id: "AG-101", name: "Skyline Travel Solutions", email: "ops@skylinetravel.com", tier: "Gold", commission: 15, status: "Active", policies: 142, revenue: "₹245,600" },
  { id: "AG-102", name: "Global Nomads Hub", email: "partner@globalnomads.in", tier: "Silver", commission: 12, status: "Active", policies: 89, revenue: "₹156,200" },
  { id: "AG-103", name: "Zenith Study Abroad", email: "admin@zenithstudy.org", tier: "Standard", commission: 10, status: "Pending", policies: 0, revenue: "₹0" },
];

export default function ManagementPortalPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'overview' | 'agencies' | 'ledger' | 'widgets'>('overview');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [onboardState, setOnboardState] = useState<'form' | 'success'>('form');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: `${label} copied` });
  };

  const handleOnboardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOnboardState('success');
  };

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
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Principal Dashboard</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">Utsavs Partner Network</h1>
              <p className="text-[#9AA1C0] max-w-xl font-medium">Manage agency onboarding, track cross-network sales, and deploy distribution widgets.</p>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={(open) => {
              setIsDialogOpen(open);
              if (!open) setTimeout(() => setOnboardState('form'), 300);
            }}>
              <DialogTrigger asChild>
                <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-white font-bold rounded-full px-6 shadow-xl transition-all active:scale-95">
                  <Plus className="w-4 h-4 mr-2" /> Onboard Agency
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#171D3A] border-white/10 text-white rounded-3xl max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif">Agency Onboarding</DialogTitle>
                  <DialogDescription className="text-[#9AA1C0]">
                    Create a new partner profile and generate access credentials.
                  </DialogDescription>
                </DialogHeader>

                {onboardState === 'form' ? (
                  <form onSubmit={handleOnboardSubmit} className="space-y-6 pt-4 text-left">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Agency Name</Label>
                        <Input placeholder="e.g. Travel Express" required className="bg-[#0F1428] border-white/10 h-12 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Primary Email</Label>
                        <Input type="email" placeholder="contact@agency.com" required className="bg-[#0F1428] border-white/10 h-12 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] uppercase font-bold text-[#6E7495] tracking-widest">Commission Tier</Label>
                        <Select defaultValue="standard">
                          <SelectTrigger className="bg-[#0F1428] border-white/10 h-12 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-[#171D3A] border-white/10 text-white">
                            <SelectItem value="standard">Standard (10%)</SelectItem>
                            <SelectItem value="silver">Silver (12%)</SelectItem>
                            <SelectItem value="gold">Gold (15%)</SelectItem>
                            <SelectItem value="custom">Custom Override</SelectItem>
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
                      <p className="text-sm text-[#9AA1C0]">The agency profile is active. Use the keys below to provide access.</p>
                    </div>
                    <div className="space-y-3 pt-4">
                       <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between group cursor-pointer" onClick={() => copyToClipboard('https://utsavs.com/invite/ag-7721', 'Invite Link')}>
                          <div className="text-left">
                            <p className="text-[8px] font-bold text-[#6E7495] uppercase">Portal Invite Link</p>
                            <p className="text-xs font-mono text-white/80">utsavs.com/invite/ag-7721</p>
                          </div>
                          <Copy className="w-3 h-3 text-[#6E7495] group-hover:text-white" />
                       </div>
                       <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between group cursor-pointer" onClick={() => copyToClipboard('UTS-KEY-AG7721-SEC', 'Widget Key')}>
                          <div className="text-left">
                            <p className="text-[8px] font-bold text-[#6E7495] uppercase">Secure Widget Key</p>
                            <p className="text-xs font-mono text-white/80">UTS-KEY-AG7721-SEC</p>
                          </div>
                          <Copy className="w-3 h-3 text-[#6E7495] group-hover:text-white" />
                       </div>
                    </div>
                    <Button onClick={() => setIsDialogOpen(false)} className="w-full h-12 bg-white text-black font-bold rounded-xl mt-6">Return to Dashboard</Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-12">
            
            {/* Sidebar Navigation */}
            <aside className="space-y-1">
               {[
                 { id: 'overview', label: 'Overview', icon: Activity },
                 { id: 'agencies', label: 'Agencies', icon: Users },
                 { id: 'ledger', label: 'Shadow Ledger', icon: FileText },
                 { id: 'widgets', label: 'Distribution', icon: BarChart3 },
               ].map((item) => (
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
                    <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4 shadow-lg hover:border-white/20 transition-all">
                      <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Total Network Revenue</CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold font-serif">₹401,800</span>
                        <span className="text-xs text-green-500 font-bold">↑ 12%</span>
                      </div>
                    </Card>
                    <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4 shadow-lg hover:border-white/20 transition-all">
                      <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Active Agencies</CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold font-serif">2</span>
                        <span className="text-xs text-[#9AA1C0]">/ 3 Onboarded</span>
                      </div>
                    </Card>
                    <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4 shadow-lg hover:border-white/20 transition-all">
                      <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Policies Issued (MTD)</CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold font-serif">231</span>
                        <span className="text-xs text-[#9AA1C0]">This month</span>
                      </div>
                    </Card>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     <Card className="bg-[#171D3A] border-white/10 rounded-3xl p-8 space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-white/5 pb-4">Top Performing Agencies</h3>
                        <div className="space-y-6">
                           {MOCK_AGENCIES.slice(0, 2).map(ag => (
                             <div key={ag.id} className="flex items-center justify-between">
                                <div className="space-y-1">
                                   <p className="text-sm font-bold text-white">{ag.name}</p>
                                   <p className="text-[10px] text-[#6E7495] font-mono uppercase">{ag.policies} policies</p>
                                </div>
                                <p className="text-sm font-bold text-[#4FD1C5]">{ag.revenue}</p>
                             </div>
                           ))}
                        </div>
                     </Card>
                     <Card className="bg-[#171D3A] border-white/10 rounded-3xl p-8 space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-white/5 pb-4">Recent Alerts</h3>
                        <div className="space-y-4">
                           <div className="flex gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] mt-1.5 shrink-0" />
                              <p className="text-xs text-[#9AA1C0] leading-relaxed">New agency <strong>Zenith Study Abroad</strong> is awaiting verification of their domain whitelist.</p>
                           </div>
                           <div className="flex gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] mt-1.5 shrink-0" />
                              <p className="text-xs text-[#9AA1C0] leading-relaxed">Network volume surge detected for <strong>Japan (October)</strong> travel dates.</p>
                           </div>
                        </div>
                     </Card>
                  </div>
                </div>
              )}

              {activeTab === 'agencies' && (
                 <div className="space-y-6 animate-in fade-in duration-500">
                    <Card className="bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">
                            <tr>
                              <th className="px-8 py-5">Agency Profile</th>
                              <th className="px-8 py-5">Tier</th>
                              <th className="px-8 py-5">Commission</th>
                              <th className="px-8 py-5">Activity</th>
                              <th className="px-8 py-5">Status</th>
                              <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {MOCK_AGENCIES.map((ag) => (
                              <tr key={ag.id} className="hover:bg-white/[0.02] transition-colors group">
                                <td className="px-8 py-6">
                                  <div className="space-y-1">
                                    <p className="font-bold text-white group-hover:text-[#E8A33D] transition-colors">{ag.name}</p>
                                    <p className="text-[11px] text-[#6E7495]">{ag.email}</p>
                                  </div>
                                </td>
                                <td className="px-8 py-6">
                                  <Badge variant="outline" className="text-[9px] uppercase border-white/10 text-white/60">{ag.tier}</Badge>
                                </td>
                                <td className="px-8 py-6 font-mono text-xs text-[#4FD1C5]">
                                  {ag.commission}%
                                </td>
                                <td className="px-8 py-6">
                                  <div className="space-y-1">
                                     <p className="text-xs font-bold text-white">{ag.policies}</p>
                                     <p className="text-[10px] text-[#6E7495]">Policies</p>
                                  </div>
                                </td>
                                <td className="px-8 py-6">
                                  <span className={cn("text-[9px] font-bold uppercase tracking-widest", ag.status === 'Active' ? "text-green-500" : "text-yellow-500")}>
                                    {ag.status}
                                  </span>
                                </td>
                                <td className="px-8 py-6 text-right">
                                  <Button variant="ghost" size="sm" className="text-[9px] uppercase font-bold tracking-widest hover:text-[#E8A33D]">Edit</Button>
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
                     <p className="text-[11px] font-bold text-[#6E7495] uppercase tracking-[0.2em]">Showing Last 24 Hours</p>
                     <Button variant="outline" className="border-white/10 rounded-full text-[10px] font-bold uppercase text-white">Export CSV</Button>
                  </div>
                  <Card className="bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">
                          <tr>
                            <th className="px-8 py-5">Policy #</th>
                            <th className="px-8 py-5">Agency</th>
                            <th className="px-8 py-5">Traveler</th>
                            <th className="px-8 py-5">Premium</th>
                            <th className="px-8 py-5">Status</th>
                            <th className="px-8 py-5 text-right">Void</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           <tr className="hover:bg-white/[0.02]">
                              <td className="px-8 py-6 font-mono text-xs text-[#4FD1C5]">IC33610</td>
                              <td className="px-8 py-6 font-bold">Skyline Travel</td>
                              <td className="px-8 py-6 text-xs text-[#9AA1C0]">John Doe</td>
                              <td className="px-8 py-6 font-bold">₹1,850</td>
                              <td className="px-8 py-6">
                                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-[9px] uppercase font-bold">Issued</Badge>
                              </td>
                              <td className="px-8 py-6 text-right">
                                <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-500 hover:bg-red-500/10"><ChevronRight className="w-4 h-4" /></Button>
                              </td>
                           </tr>
                           <tr className="hover:bg-white/[0.02]">
                              <td className="px-8 py-6 font-mono text-xs text-[#4FD1C5]">IC33609</td>
                              <td className="px-8 py-6 font-bold">Global Nomads</td>
                              <td className="px-8 py-6 text-xs text-[#9AA1C0]">Sarah Smith</td>
                              <td className="px-8 py-6 font-bold">₹2,400</td>
                              <td className="px-8 py-6">
                                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-[9px] uppercase font-bold">Issued</Badge>
                              </td>
                              <td className="px-8 py-6 text-right">
                                <Button variant="ghost" size="icon" className="text-red-400 hover:text-red-500 hover:bg-red-500/10"><ChevronRight className="w-4 h-4" /></Button>
                              </td>
                           </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === 'widgets' && (
                <div className="space-y-12 animate-in fade-in duration-500">
                   <div className="max-w-2xl space-y-4">
                      <h2 className="text-3xl font-serif font-bold text-white">Distribution Strategy</h2>
                      <p className="text-[#9AA1C0]">Enable your partners to drive high-trust travel planning with embeddable Utsavs intelligence modules.</p>
                   </div>

                   <div className="grid md:grid-cols-2 gap-8 text-left">
                      <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-8 shadow-xl group hover:border-[#E8A33D]/40 transition-all">
                         <div className="flex items-start justify-between">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary transition-all group-hover:text-black">
                               <Activity className="w-6 h-6" />
                            </div>
                            <Badge variant="outline" className="border-white/10 text-[9px] uppercase tracking-widest text-[#6E7495]">Intelligence</Badge>
                         </div>
                         <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-white">Date Intelligence Widget</h3>
                            <p className="text-sm text-[#9AA1C0] leading-relaxed">Embed our verified temporal engine on partner sites to display real-time travel signals for any country.</p>
                         </div>
                         <div className="pt-4 flex flex-col gap-3">
                            <div className="p-4 bg-[#0F1428] rounded-xl font-mono text-[11px] text-[#4FD1C5] border border-white/5 relative group/code overflow-hidden">
                               <code className="block leading-relaxed">
                                  {`<iframe src="https://utsavs.com/w/di?ag=AG-101" />`}
                               </code>
                               <button className="absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity bg-white/10 p-1.5 rounded-lg">
                                  <Copy className="w-3 h-3 text-white" onClick={() => copyToClipboard('<iframe src="https://utsavs.com/w/di?ag=AG-101" />', 'Iframe Snippet')} />
                               </button>
                            </div>
                            <div className="p-4 bg-[#0F1428] rounded-xl font-mono text-[11px] text-[#E8A33D] border border-white/5 relative group/code overflow-hidden">
                               <code className="block leading-relaxed">
                                  {`<DateIntelWidget agencyId="AG-101" />`}
                               </code>
                               <button className="absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity bg-white/10 p-1.5 rounded-lg">
                                  <Copy className="w-3 h-3 text-white" onClick={() => copyToClipboard('<DateIntelWidget agencyId="AG-101" />', 'React Snippet')} />
                               </button>
                            </div>
                            <Button variant="ghost" className="self-start text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white px-0">Preview Configuration →</Button>
                         </div>
                      </Card>

                      <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-8 shadow-xl group hover:border-[#4FD1C5]/40 transition-all">
                         <div className="flex items-start justify-between">
                            <div className="w-12 h-12 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center text-[#4FD1C5] group-hover:bg-[#4FD1C5] transition-all group-hover:text-black">
                               <ShieldCheck className="w-6 h-6" />
                            </div>
                            <Badge variant="outline" className="border-white/10 text-[9px] uppercase tracking-widest text-[#6E7495]">Transactional</Badge>
                         </div>
                         <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-white">Insurance Express Widget</h3>
                            <p className="text-sm text-[#9AA1C0] leading-relaxed">A lightweight, low-friction checkout that allows agencies to sell policies directly on their own domain.</p>
                         </div>
                         <div className="pt-4 flex flex-col gap-3">
                            <div className="p-4 bg-[#0F1428] rounded-xl font-mono text-[11px] text-[#4FD1C5] border border-white/5 relative group/code overflow-hidden">
                               <code className="block leading-relaxed">
                                  {`<iframe src="https://utsavs.com/w/ins?ag=AG-101" />`}
                               </code>
                               <button className="absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity bg-white/10 p-1.5 rounded-lg">
                                  <Copy className="w-3 h-3 text-white" onClick={() => copyToClipboard('<iframe src="https://utsavs.com/w/ins?ag=AG-101" />', 'Iframe Snippet')} />
                               </button>
                            </div>
                            <div className="p-4 bg-[#0F1428] rounded-xl font-mono text-[11px] text-[#E8A33D] border border-white/5 relative group/code overflow-hidden">
                               <code className="block leading-relaxed">
                                  {`<InsuranceExpressWidget agencyId="AG-101" />`}
                               </code>
                               <button className="absolute right-3 top-3 opacity-0 group-hover/code:opacity-100 transition-opacity bg-white/10 p-1.5 rounded-lg">
                                  <Copy className="w-3 h-3 text-white" onClick={() => copyToClipboard('<InsuranceExpressWidget agencyId="AG-101" />', 'React Snippet')} />
                               </button>
                            </div>
                            <Button variant="ghost" className="self-start text-[10px] font-bold uppercase tracking-widest text-[#4FD1C5] hover:text-white px-0">White-label Settings →</Button>
                         </div>
                      </Card>
                   </div>

                   <Card className="bg-[#1E2650]/40 border-2 border-dashed border-white/10 rounded-[32px] p-12 text-center space-y-6">
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-2">
                         <LinkIcon className="w-6 h-6 text-[#9AA1C0]" />
                      </div>
                      <div className="space-y-2 max-w-sm mx-auto">
                        <h3 className="text-xl font-bold text-white">Domain Whitelisting</h3>
                        <p className="text-xs text-[#9AA1C0] leading-relaxed">For security, widgets will only load on verified domains. Add domains in each agency's profile settings.</p>
                      </div>
                      <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-full font-bold uppercase text-[10px] px-8 text-white">Manage Whitelist</Button>
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
