
'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Landmark, 
  ShieldAlert,
  MessageSquare,
  School,
  Activity,
  HeartPulse
} from "lucide-react";

export default function TravelInsurancePage() {
  const WHATSAPP_LINK = "https://wa.me/919860997711";

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans selection:bg-[#E8A33D] selection:text-[#0F1428]">
      <Header />
      
      <main className="py-4 md:py-10">
        <div className="container mx-auto px-6 text-left">
          <div className="max-w-5xl mx-auto space-y-20">
            
            {/* HERO */}
            <div className="space-y-6 text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-headline font-medium leading-tight tracking-tight">
                Plan for what you can predict. <br/>
                <span className="italic text-[#9AA1C0]">Protect against what you can't.</span>
              </h1>
              <p className="text-lg text-[#9AA1C0] leading-relaxed max-w-3xl mx-auto font-medium">
                Comprehensive international travel insurance tailored for students, corporate teams, and global explorers. 
                Move with certainty across 1.4 million providers worldwide.
              </p>
            </div>

            {/* PRODUCT OFFERINGS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* 01. STUDENT JOURNEY */}
               <Card className="bg-[#1E2650] border-white/10 p-10 rounded-[32px] space-y-8 relative overflow-hidden group hover:border-[#E8A33D]/40 transition-all">
                  <div className="space-y-4 relative z-10">
                     <div className="w-14 h-14 bg-[#E8A33D]/10 rounded-2xl flex items-center justify-center text-[#E8A33D]">
                        <School className="w-7 h-7" />
                     </div>
                     <h3 className="text-3xl font-headline font-bold">Student Journey Plans</h3>
                     <p className="text-[#9AA1C0] leading-relaxed font-medium">
                        Specialized coverage meeting leading university and visa requirements for F1, J1, and M1 students. 
                        Includes 67,000+ pharmacies and 24/7 campus-aligned assistance.
                     </p>
                  </div>
                  <ul className="space-y-3 relative z-10">
                     {["Compliant with US/UK/AU University Rules", "Mental Health & Wellness Support", "Inter-collegiate Sports Cover"].map(item => (
                       <li key={item} className="flex items-center gap-3 text-sm font-bold text-paper/90">
                          <ShieldCheck className="w-4 h-4 text-[#4FD1C5]" /> {item}
                       </li>
                     ))}
                  </ul>
               </Card>

               {/* 02. CORPORATE RISK */}
               <Card className="bg-[#171D3A] border-white/10 p-10 rounded-[32px] space-y-8 group hover:border-[#4FD1C5]/40 transition-all">
                  <div className="space-y-4">
                     <div className="w-14 h-14 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center text-[#4FD1C5]">
                        <Landmark className="w-7 h-7" />
                     </div>
                     <h3 className="text-3xl font-headline font-bold">Corporate Risk Cover</h3>
                     <p className="text-[#9AA1C0] leading-relaxed font-medium">
                        Enterprise-grade protection for global workforces. Manage group enrollments and organizational liability 
                        with deterministic regional holiday intelligence integration.
                     </p>
                  </div>
                  <ul className="space-y-3">
                     {["Group Enrollment for Teams", "B2B Partnership Enquiries", "Institutional Liability Support"].map(item => (
                       <li key={item} className="flex items-center gap-3 text-sm font-bold text-paper/90">
                          <ShieldCheck className="w-4 h-4 text-[#E8A33D]" /> {item}
                       </li>
                     ))}
                  </ul>
               </Card>

               {/* 03. INTERNATIONAL MEDICAL */}
               <Card className="bg-[#171D3A] border-white/10 p-10 rounded-[32px] space-y-8 group hover:border-[#4FD1C5]/40 transition-all">
                  <div className="space-y-4">
                     <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-400">
                        <HeartPulse className="w-7 h-7" />
                     </div>
                     <h3 className="text-3xl font-headline font-bold">International Medical</h3>
                     <p className="text-[#9AA1C0] leading-relaxed font-medium">
                        Anywhere-to-Anywhere medical assistance. From emergency evacuation to bill review, 
                        our network ensures high-stakes health safety in foreign jurisdictions.
                     </p>
                  </div>
                  <ul className="space-y-3">
                     {["Limits up to $1 Million USD", "Global Emergency Evacuation", "Medical Bill Discrepancy Review"].map(item => (
                       <li key={item} className="flex items-center gap-3 text-sm font-bold text-paper/90">
                          <ShieldCheck className="w-4 h-4 text-[#4FD1C5]" /> {item}
                       </li>
                     ))}
                  </ul>
               </Card>

               {/* 04. SPECIALTY ADD-ONS */}
               <Card className="bg-[#1E2650] border-white/10 p-10 rounded-[32px] space-y-8 group hover:border-[#E8A33D]/40 transition-all">
                  <div className="space-y-4">
                     <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center text-teal">
                        <Activity className="w-7 h-7" />
                     </div>
                     <h3 className="text-3xl font-headline font-bold">Specialty Add-ons</h3>
                     <p className="text-[#9AA1C0] leading-relaxed font-medium">
                        Layered protection for modern lifestyle risks. Secure your high-value gadgets, 
                        mitigate study interruption losses, and protect against credit card fraud.
                     </p>
                  </div>
                  <ul className="space-y-3">
                     {["Global Gadget & Laptop Cover", "Study Interruption Protection", "Mugging & Credit Card Fraud Shield"].map(item => (
                       <li key={item} className="flex items-center gap-3 text-sm font-bold text-paper/90">
                          <ShieldCheck className="w-4 h-4 text-teal" /> {item}
                       </li>
                     ))}
                  </ul>
               </Card>
            </div>

            {/* Decision CTA: Get Your Custom Quote */}
            <section className="py-16 text-center space-y-8 bg-[#E8A33D]/5 rounded-[40px] border border-[#E8A33D]/20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
               <h2 className="text-3xl md:text-5xl font-headline font-bold">Get Your Custom Quote</h2>
               <p className="text-lg text-[#9AA1C0] max-w-2xl mx-auto font-medium">
                  Ready to secure your journey? Speak with our experts for a plan tailored to your specific travel, study, or business requirements.
               </p>
               <div className="pt-4">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888] font-bold px-12 h-16 rounded-full shadow-2xl transition-transform hover:scale-105 uppercase tracking-widest text-xs">
                      <MessageSquare className="w-5 h-5 mr-2" /> Message for Quote
                    </Button>
                  </a>
               </div>
            </section>

            {/* B2B / PARTNERSHIPS */}
            <div className="p-10 md:p-16 bg-[#171D3A] border border-white/5 rounded-[40px] text-center space-y-8">
               <h3 className="text-3xl font-headline font-medium">Group Bookings & Partnerships</h3>
               <p className="text-lg text-[#9AA1C0] max-w-2xl mx-auto font-medium">
                  Integrate verified calendar intelligence and travel protection directly into your platform. 
                  We support university blocks, corporate accounts, and API-led ancillary revenue streams.
               </p>
               <div className="pt-4">
                 <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                   <Button variant="outline" className="border-white/20 hover:bg-white/5 font-bold rounded-full h-14 px-10 uppercase tracking-widest text-xs">
                     Enquire about Partnership
                   </Button>
                 </a>
               </div>
            </div>

            {/* REGULATORY DISCLOSURE */}
            <div className="p-10 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 space-y-8 text-left">
              <h2 className="font-headline text-2xl font-medium flex items-center gap-3 text-paper tracking-tight">
                <ShieldAlert className="w-6 h-6 text-[#E8A33D]" />
                Regulatory Disclosure
              </h2>
              <div className="space-y-4 text-[10px] text-[#9AA1C0] leading-relaxed font-medium uppercase tracking-wider">
                <div className="space-y-1">
                  <p>Assistance services are facilitated by Asego Global Assistance Private Limited.</p>
                  <p>Insurance is underwritten by an IRDAI authorised underwriter and is a subject matter of solicitation.</p>
                </div>
                <p>The content expressed in this platform is for information purposes only and it does not accept any liability of any sort unless confirmed by an authorized representative. All Insurance policies are sold under the Corporate Agency of Asego Global Assistance Private Limited bearing IRDAI registration no. Ca0776.</p>
                <div className="h-px bg-white/10 w-full" />
                <p className="italic text-[#6E7495] normal-case tracking-normal">Note: Assistance provided by Asego Travel LLP. Student Journey plans meet leading U.S. university and visa requirements for F1, J1, and M1 students. Insurance underwritten by an IRDAI authorised underwriter – ICICI Lombard General Insurance Company Ltd or International Medical Group Inc. (IMG).</p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
