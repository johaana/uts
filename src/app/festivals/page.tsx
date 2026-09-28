'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Globe, Utensils, Flag } from "lucide-react";
import Link from "next/link";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const hubCategories = [
    {
        title: "National Index",
        label: "INDIA",
        desc: "Deep dive into the 28 states and 8 union territories of India. From Maharashtra's Ganesh Chaturthi to Bengal's Durga Puja.",
        icon: Flag,
        link: "/festivals/directory",
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    {
        title: "The Global Map",
        label: "INTERNATIONAL",
        desc: "Major world-impact events. Explore La Tomatina, Rio Carnival, Venice Masked Balls and Japan's Hanami.",
        icon: Globe,
        link: "/international-festivals",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        title: "The Journal",
        label: "CULTURAL STORIES",
        desc: "Long-form narratives exploring the 'Why' behind the 'When'. History, mythology and cultural deep dives.",
        icon: BookOpen,
        link: "/blog",
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        title: "The Kitchen",
        label: "AUTHENTIC RECIPES",
        desc: "The flavors of celebration. Authentic recipes from Gujiya to Onam Sadya meditations.",
        icon: Utensils,
        link: "/recipes",
        color: "text-green-600",
        bg: "bg-green-50"
    }
];

export default function FestivalsHubPage() {
    return (
        <div className="bg-[#F4F1E8] text-[#17151A] min-h-screen font-sans">
            <Header />
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-4xl mx-auto mb-16 text-center space-y-6">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#E94368]">THE UTSAVS LIBRARY</span>
                        <div className="h-px w-20 bg-[#17151A]/10"></div>
                    </div>
                    <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter leading-none text-center">Discover Traditions</h1>
                    <p className="text-xl text-[#6D6870] font-medium leading-relaxed max-w-2xl mx-auto text-center">
                        The definitive guide to the world's most vibrant cultural events. 
                        Explore our categorized indices, stories, and sacred recipes.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    {hubCategories.map((cat) => (
                        <Link href={cat.link} key={cat.title} className="group">
                            <Card className="h-full bg-white border-[#17151A]/5 hover:border-[#17151A]/20 hover:shadow-xl transition-all duration-500 overflow-hidden">
                                <CardContent className="p-8 md:p-12 flex flex-col h-full">
                                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-colors", cat.bg)}>
                                        <cat.icon className={cn("w-6 h-6", cat.color)} />
                                    </div>
                                    <div className="space-y-4 flex-1 text-left">
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#6D6870]">{cat.label}</span>
                                        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-[#17151A]">{cat.title}</h2>
                                        <p className="text-lg text-[#6D6870] leading-relaxed font-medium">
                                            {cat.desc}
                                        </p>
                                    </div>
                                    <div className="pt-10 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E94368]">
                                        Open Section <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
