"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BarChart3, 
  FileText, 
  Settings, 
  ShieldCheck, 
  Plus, 
  ArrowUpRight,
  ChevronRight,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ManagementPortalPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'agencies' | 'ledger' | 'widgets'>('overview');

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans flex flex-col">
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
              <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">Utsavs Partner Network</h1>
              <p className="text-[#9AA1C0] max-w-xl font-medium">Manage agency onboarding, track cross-network sales, and deploy distribution widgets.</p>
            </div>
            <div className="flex gap-3">
               <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold rounded-full px-6">
                 <Plus className="w-4 h-4 mr-2" /> Onboard Agency
               </Button>
            </div>
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
                     "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left",
                     activeTab === item.id 
                       ? "bg-white/10 text-white font-bold" 
                       : "text-[#9AA1C0] hover:bg-white/5"
                   )}
                 >
                   <item.icon className={cn("w-4 h-4", activeTab === item.id ? "text-[#E8A33D]" : "text-[#6E7495]")} />
                   <span className="text-sm">{item.label}</span>
                 </button>
               ))}
            </aside>

            {/* Main Content Area */}
            <div className="space-y-8 text-left">
              
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Total Network Revenue</CardTitle>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold font-serif">₹0.00</span>
                      <span className="text-xs text-green-500 font-bold">↑ 0%</span>
                    </div>
                  </Card>
                  <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Active Agencies</CardTitle>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold font-serif">0</span>
                      <span className="text-xs text-[#9AA1C0]">Current</span>
                    </div>
                  </Card>
                  <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-4">
                    <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">Policies Issued (MTD)</CardTitle>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold font-serif">0</span>
                      <span className="text-xs text-[#9AA1C0]">This month</span>
                    </div>
                  </Card>

                  <Card className="md:col-span-3 bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center border-dashed">
                    <div className="text-center space-y-4 opacity-40">
                      <BarChart3 className="w-12 h-12 mx-auto" />
                      <p className="text-sm font-medium">No sales data recorded in the shadow ledger yet.</p>
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === 'agencies' && (
                 <Card className="bg-[#171D3A] border-white/10 rounded-3xl animate-in fade-in duration-500">
                   <div className="p-10 text-center space-y-6">
                      <Users className="w-12 h-12 mx-auto text-[#6E7495] opacity-40" />
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold font-serif">No Partner Agencies</h3>
                        <p className="text-[#9AA1C0] max-w-sm mx-auto">Start by onboarding your first agency to generate unique tracking IDs and widgets.</p>
                      </div>
                      <Button className="bg-white text-[#0F1428] font-bold h-11 px-8 rounded-full">Onboard Your First Partner</Button>
                   </div>
                 </Card>
              )}

              {activeTab === 'ledger' && (
                <Card className="bg-[#171D3A] border-white/10 rounded-3xl overflow-hidden animate-in fade-in duration-500">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[#6E7495]">
                        <tr>
                          <th className="px-8 py-4">Policy #</th>
                          <th className="px-8 py-4">Agency</th>
                          <th className="px-8 py-4">Traveler</th>
                          <th className="px-8 py-4">Premium</th>
                          <th className="px-8 py-4">Status</th>
                          <th className="px-8 py-4">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         <tr className="opacity-40">
                           <td colSpan={6} className="px-8 py-20 text-center font-medium italic">Shadow ledger is empty.</td>
                         </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              )}

              {activeTab === 'widgets' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                   <div className="grid md:grid-cols-2 gap-8 text-left">
                      <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-6">
                         <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                            <Activity className="w-5 h-5" />
                         </div>
                         <div className="space-y-2">
                            <h3 className="text-xl font-bold">Date Intelligence Widget</h3>
                            <p className="text-sm text-[#9AA1C0] leading-relaxed">Embed our verified temporal engine on partner sites to drive high-trust travel planning.</p>
                         </div>
                         <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-full font-bold">Preview Widget →</Button>
                      </Card>
                      <Card className="bg-[#171D3A] border-white/10 p-8 rounded-3xl space-y-6">
                         <div className="w-10 h-10 bg-[#4FD1C5]/10 rounded-xl flex items-center justify-center text-[#4FD1C5]">
                            <ShieldCheck className="w-5 h-5" />
                         </div>
                         <div className="space-y-2">
                            <h3 className="text-xl font-bold">Insurance Express Widget</h3>
                            <p className="text-sm text-[#9AA1C0] leading-relaxed">A lightweight checkout for partners to sell policies directly without complex API integration.</p>
                         </div>
                         <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-full font-bold">Preview Widget →</Button>
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
