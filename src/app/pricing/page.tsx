'use client';

import React from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MessageSquare } from "lucide-react";
import Link from 'next/link';

export default function PricingPage() {
  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
    }
  };

  const plans = [
    {
      name: "Standard",
      price: "Free",
      desc: "For individual travelers and students exploring global dates.",
      features: [
        "Search 92+ Jurisdictions",
        "Trip Impact Checker",
        "Cultural Deep Dives",
        "Sacred Recipe Access"
      ],
      cta: "Explore Now",
      link: "/"
    },
    {
      name: "Professional",
      price: "Contact Us",
      desc: "For travel agencies and HR teams requiring structured operational data.",
      features: [
        "Advanced Origin-Destination Comparison",
        "Detailed Institutional Rules",
        "Long Weekend Bridge Alerts",
        "Custom Location Sets"
      ],
      cta: "Inquire Now",
      isChat: true
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      desc: "High-volume API access and white-label integration support.",
      features: [
        "Full Intelligence API Access",
        "Deterministic Data Exports",
        "SLA-backed Reliability",
        "Technical Integration Support"
      ],
      cta: "Chat with Sales",
      isChat: true,
      primary: true
    }
  ];

  return (
    <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-6 space-y-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="text-[12.5px] font-mono text-[#E8A33D] tracking-[0.3em] uppercase">Access Intelligence</div>
            <h1 className="text-4xl md:text-6xl font-headline font-medium tracking-tight">Structured Data for Every Scale.</h1>
            <p className="text-xl text-[#9AA1C0] leading-relaxed">
              Whether you're planning a single trip or managing a global workforce, 
              Utsavs provides the precision you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative flex flex-col justify-between border-white/10 bg-[#171D3A] overflow-hidden ${plan.primary ? 'ring-2 ring-[#E8A33D] border-transparent' : ''}`}>
                {plan.primary && (
                  <div className="absolute top-0 right-0 bg-[#E8A33D] text-[#0F1428] px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="p-8">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E8A33D]">{plan.name}</span>
                  <CardTitle className="text-3xl mt-4 font-headline">{plan.price}</CardTitle>
                  <p className="text-sm text-[#9AA1C0] mt-4 leading-relaxed">{plan.desc}</p>
                </CardHeader>
                <CardContent className="p-8 pt-0 flex-1">
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                        <Check className="w-4 h-4 text-[#4FD1C5] shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.isChat ? (
                    <Button 
                      onClick={openChat}
                      variant={plan.primary ? 'default' : 'outline'} 
                      className={`w-full font-bold h-12 rounded-full ${plan.primary ? 'bg-[#E8A33D] text-[#0F1428] hover:bg-[#F0C888]' : 'border-white/10 hover:bg-white/5'}`}
                    >
                      {plan.cta}
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full font-bold h-12 rounded-full border-white/10 hover:bg-white/5">
                      <Link href={plan.link!}>{plan.cta}</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="p-12 md:p-16 rounded-[48px] border-2 border-dashed border-white/10 bg-white/5 text-center space-y-8 max-w-4xl mx-auto">
             <h3 className="text-3xl font-headline font-medium">Custom Solutions & Data Feeds</h3>
             <p className="text-lg text-[#9AA1C0] leading-relaxed">
               Need specific jurisdictional sets or integration for a high-volume platform? 
               We provide custom deterministic data feeds and white-label assistance solutions.
             </p>
             <button onClick={openChat} className="inline-flex items-center gap-2 text-[#E8A33D] font-bold hover:underline uppercase tracking-[0.2em] text-sm">
               <MessageSquare className="w-5 h-5" /> Speak with our Team
             </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
