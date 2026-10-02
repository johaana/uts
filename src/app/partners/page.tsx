"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  ShieldCheck, 
  Globe, 
  Layout, 
  MessageSquare, 
  TrendingUp, 
  ArrowRight,
  Code,
  Smartphone,
  CheckCircle2
} from "lucide-react";
import { DateIntelWidget } from "@/components/widgets/DateIntelWidget";
import { InsuranceExpressWidget } from "@/components/widgets/InsuranceExpressWidget";
import { cn } from "@/lib/utils";

export default function PartnersPage() {
  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
    }
  };

  const benefits = [
    {
      title: "Date Intelligence",
      desc: "Exclusive access to our verified temporal engine. Show your clients the 'Why' behind every date.",
      icon: Globe,
      color: "text-[#4FD1C5]"
    },
    {
      title: "Instant Insurance",
      desc: "Issue global travel protection in seconds. Managed engine with real-time PDF generation.",
      icon: ShieldCheck,
      color: "text-[#E8A33D]"
    },
    {
      title: "Distribution Widgets",
      desc: "No developers needed. Embed our high-converting tools directly on your website.",
      icon: Layout,
      color: "text-purple-400"
    },
    {
      title: "Expert Support",
      desc: "White-labeled technology support. We handle the complex plumbing; you handle the clients.",
      icon: MessageSquare,
      color: "text-blue-400"
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main>
        {/* HERO */}
        <section className="py-20 md:py-32 border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F4F1E8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="container mx-auto px-6 text-left">
            <div className="max-w-4xl space-y-8">
              <div className="flex items-center gap-3 text-[#E8A33D]">
                <Zap className="w-5 h-5 fill-current" />
                <span className="text-[12px] font-mono font-bold uppercase tracking-[0.4em]">Ecosystem Expansion</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-headline font-medium tracking-tighter leading-[0.95] text-white">
                Power your agency with <br />Utsavs Intelligence.
              </h1>
              <p className="text-xl text-[#9AA1C0] leading-relaxed max-w-2xl font-medium">
                Join our network of elite travel partners. Integrate verified holiday data and instant insurance into your workflow to drive ancillary revenue and trust.
              </p>
              <div className="pt-6">
                <Button onClick={openChat} className="bg-[#E8A33D] text-[#0F1428] hover:bg-white font-bold h-16 px-10 rounded-full shadow-2xl text-base transition-all group">
                  Become a Partner <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS GRID */}
        <section className="py-24 bg-white/[0.01]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="space-y-6 group">
                  <div className={cn("w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110", b.color)}>
                    <b.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-3 text-left">
                    <h3 className="text-2xl font-headline font-bold text-white">{b.title}</h3>
                    <p className="text-sm text-[#9AA1C0] leading-relaxed font-medium">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WIDGET PREVIEW SECTION */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10 text-left">
                 <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-headline font-medium tracking-tight">The "No-Code" Advantage.</h2>
                    <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                      Deploy our verified engine on your own site in under 5 minutes. No development costs. Full branding control.
                    </p>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] mt-1" />
                       <p className="text-sm text-[#F4F1E8] font-medium"><span className="font-bold">Instant Deployment:</span> Copy-paste a single React snippet or Iframe.</p>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] mt-1" />
                       <p className="text-sm text-[#F4F1E8] font-medium"><span className="font-bold">Conversion Optimized:</span> Minimalist design that builds trust and drives action.</p>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="w-5 h-5 text-[#4FD1C5] mt-1" />
                       <p className="text-sm text-[#F4F1E8] font-medium"><span className="font-bold">Live Tracking:</span> Every widget sale appears instantly in your partner portal.</p>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                 <div className="absolute -inset-10 bg-[#E8A33D]/5 blur-[80px] rounded-full"></div>
                 <div className="relative z-10 space-y-4">
                    <p className="text-[10px] font-mono font-bold text-[#E8A33D] uppercase tracking-widest text-center">Date Intelligence</p>
                    <DateIntelWidget className="w-full" />
                 </div>
                 <div className="relative z-10 space-y-4 pt-12 md:pt-24">
                    <p className="text-[10px] font-mono font-bold text-[#4FD1C5] uppercase tracking-widest text-center">Insurance Express</p>
                    <InsuranceExpressWidget className="w-full" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTAL PREVIEW */}
        <section className="py-24 bg-[#171D3A] border-y border-white/5 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               <div className="flex-1 w-full order-2 lg:order-1">
                  <Card className="bg-[#0B0F22] border-white/10 rounded-[32px] overflow-hidden shadow-2xl scale-110 md:scale-100 origin-left">
                     <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                        <div className="flex gap-1.5">
                           <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>
                        <span className="text-[9px] font-mono font-bold text-[#6E7495] uppercase tracking-widest">partner_dashboard_v2.1</span>
                     </div>
                     <div className="p-10 space-y-12">
                        <div className="grid grid-cols-2 gap-8">
                           <div className="space-y-1 text-left">
                              <p className="text-[10px] text-[#6E7495] uppercase font-bold tracking-widest">This Month's Sales</p>
                              <p className="text-3xl font-bold font-serif text-white">₹4,82,500</p>
                           </div>
                           <div className="space-y-1 text-right">
                              <p className="text-[10px] text-[#6E7495] uppercase font-bold tracking-widest">My Commission</p>
                              <p className="text-3xl font-bold font-serif text-[#E8A33D]">₹57,900</p>
                           </div>
                        </div>
                        <div className="h-px bg-white/5 w-full"></div>
                        <div className="space-y-4">
                           <div className="flex items-center justify-between text-[11px] font-bold text-[#6E7495] uppercase tracking-widest">
                              <span>Latest Policies</span>
                              <span className="text-[#4FD1C5]">Live Feed</span>
                           </div>
                           {[1,2,3].map(i => (
                             <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="text-left"><p className="font-bold text-xs">P00249{i}</p><p className="text-[10px] text-[#9AA1C0]">Traveler: Sarah J.</p></div>
                                <div className="text-right"><p className="font-bold text-xs text-green-500">ISSUED</p><p className="text-[10px] text-[#9AA1C0]">₹14,200</p></div>
                             </div>
                           ))}
                        </div>
                     </div>
                  </Card>
               </div>
               <div className="flex-1 text-left space-y-8 order-1 lg:order-2">
                  <div className="space-y-4">
                     <h2 className="text-3xl md:text-5xl font-headline font-medium tracking-tight">One Dashboard. <br/>Complete Control.</h2>
                     <p className="text-lg text-[#9AA1C0] leading-relaxed font-medium">
                        Every partner gets a secure, private portal. Track your earnings, manage your distribution, and get instant tech support through our integrated channels.
                     </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <TrendingUp className="w-6 h-6 text-[#E8A33D]" />
                        <h4 className="font-bold">Real-time Accounting</h4>
                        <p className="text-xs text-[#9AA1C0]">See exactly what you earned the moment a policy is issued.</p>
                     </div>
                     <div className="space-y-2">
                        <Smartphone className="w-6 h-6 text-[#4FD1C5]" />
                        <h4 className="font-bold">Mobile First</h4>
                        <p className="text-xs text-[#9AA1C0]">Manage your entire distribution network from any device.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-32 text-center">
           <div className="container mx-auto px-6 max-w-4xl space-y-12">
              <h2 className="text-4xl md:text-7xl font-headline font-medium tracking-tight">Ready to join the network?</h2>
              <p className="text-xl text-[#9AA1C0] leading-relaxed font-medium">
                 Speak with our principal team about commission tiers and regional distribution rights.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                 <Button onClick={openChat} className="bg-[#E8A33D] text-[#0F1428] font-bold h-16 px-12 rounded-full shadow-2xl text-lg hover:scale-105 transition-all">
                    Start Partner Chat
                 </Button>
                 <Button variant="ghost" asChild className="text-[#9AA1C0] hover:text-white uppercase font-bold tracking-[0.2em] text-[10px]">
                    <Link href="/api">Explore the API Documents →</Link>
                 </Button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
