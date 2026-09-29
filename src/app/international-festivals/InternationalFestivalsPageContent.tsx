'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { internationalEvents } from "@/lib/festival-data";
import { FestivalCalendar } from '@/components/FestivalCalendar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function InternationalFestivalsPageContent() {
    const uniqueFestivals = Array.from(new Map(internationalEvents.map(item => [item.name.split(' (')[0], item])).values());

    return (
        <div className="bg-[#F4F1E8] text-[#17151A] min-h-screen font-sans">
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-4xl mx-auto mb-20 text-center space-y-6">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#E94368]">GLOBAL INDEX</span>
                        <div className="h-px w-20 bg-[#17151A]/10"></div>
                    </div>
                    <h1 className="font-headline text-4xl md:text-8xl font-bold tracking-tighter leading-none">World Festivals</h1>
                    <p className="text-xl md:text-2xl text-[#6D6870] font-medium leading-relaxed max-w-2xl mx-auto">
                        Your passport to the world's most vibrant cultural events. Traceable, evidence-backed intelligence for global traditions.
                    </p>
                </div>

                <div className="space-y-24">
                    <section id="calendar">
                        <FestivalCalendar 
                            events={internationalEvents}
                            availableRegions={["Global", "Asia", "Europe", "North America", "South America", "Africa", "Australia"]}
                            availableEventTypes={["Cultural", "Religious", "Holiday", "New Year", "Seasonal"]}
                            title="Global Planning Agenda"
                            description="Monitor major cultural impacts across international jurisdictions."
                            showLongWeekendInfo={false}
                        />
                    </section>

                    <section id="library" className="space-y-12">
                        <div className="text-left border-b border-[#17151A]/10 pb-6">
                            <h2 className="font-headline text-3xl md:text-5xl font-bold text-[#17151A]">Global Library</h2>
                            <p className="mt-3 text-lg text-[#6D6870] font-medium">Detailed guides to the world's most fascinating celebrations.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {uniqueFestivals.map((festival) => (
                                <Link href={festival.link!} key={festival.slug} className="group">
                                    <Card className="h-full bg-white border-[#17151A]/5 hover:border-[#17151A]/20 hover:shadow-lg transition-all duration-500 rounded-sm">
                                        <CardContent className="p-10 flex flex-col items-start text-left h-full">
                                            <div className="w-12 h-12 rounded-xl bg-[#F7F4EE] flex items-center justify-center mb-8 group-hover:bg-[#E94368]/10 transition-colors">
                                                <Globe className="w-6 h-6 text-[#17151A] group-hover:text-[#E94368] transition-colors" />
                                            </div>
                                            <div className="space-y-3 flex-1">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[9px] font-mono font-bold text-[#E94368] uppercase tracking-[0.2em]">{festival.region}</span>
                                                    <div className="w-1 h-1 rounded-full bg-[#17151A]/10"></div>
                                                    <span className="text-[9px] font-mono font-bold text-[#6D6870] uppercase tracking-widest">{festival.type}</span>
                                                </div>
                                                <h3 className="font-headline text-2xl font-bold tracking-tight text-[#17151A] group-hover:text-[#E94368] transition-colors">
                                                    {festival.name.split(' (')[0]}
                                                </h3>
                                                <p className="text-sm text-[#6D6870] leading-relaxed line-clamp-3 font-medium">
                                                    {festival.description}
                                                </p>
                                            </div>
                                            <div className="pt-8 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#E94368]">
                                                Explore Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
