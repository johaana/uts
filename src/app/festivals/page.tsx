
'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Globe, Utensils, Flag } from "lucide-react";
import Link from "next/link";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

const hubCategories = [
    {
        title: "National Index",
        label: "INDIA",
        desc: "Deep dive into the 28 states and 8 union territories of the subcontinent.",
        icon: Flag,
        link: "/festivals/directory",
        color: "text-orange-600",
        bg: "bg-orange-600/5"
    },
    {
        title: "The Global Map",
        label: "INTERNATIONAL",
        desc: "Major world-impact events from Rio Carnival to Tokyo's Hanami.",
        icon: Globe,
        link: "/international-festivals",
        color: "text-blue-600",
        bg: "bg-blue-600/5"
    },
    {
        title: "The Journal",
        label: "CULTURAL STORIES",
        desc: "Long-form narratives exploring the 'Why' behind the 'When'.",
        icon: BookOpen,
        link: "/blog",
        color: "text-purple-600",
        bg: "bg-purple-600/5"
    },
    {
        title: "The Kitchen",
        label: "SACRED RECIPES",
        desc: "The flavors of celebration. Authentic recipes and culinary meditations.",
        icon: Utensils,
        link: "/recipes",
        color: "text-green-600",
        bg: "bg-green-600/5"
    }
];

export default function FestivalsHubPage() {
    return (
        <div className="bg-[#F4F1E8] text-[#17151A] min-h-screen font-sans">
            <Header />
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="max-w-4xl mx-auto mb-12 text-center space-y-4">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#E94368]">THE UTSAVS LIBRARY</span>
                        <div className="h-px w-12 bg-[#17151A]/10"></div>
                    </div>
                    <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-none text-center">Discover Traditions</h1>
                    <p className="text-lg text-[#6D6870] font-medium leading-relaxed max-w-2xl mx-auto text-center">
                        The definitive guide to the world's most vibrant cultural events. 
                        Explore our categorized indices, stories, and sacred recipes.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
                    {hubCategories.map((cat) => (
                        <Link href={cat.link} key={cat.title} className="group">
                            <Card className="h-full bg-white border-[#17151A]/5 hover:border-[#17151A]/20 hover:shadow-xl transition-all duration-500 overflow-hidden rounded-sm">
                                <CardContent className="p-8 md:p-10 flex flex-col h-full">
                                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-6 transition-colors", cat.bg)}>
                                        <cat.icon className={cn("w-5 h-5", cat.color)} />
                                    </div>
                                    <div className="space-y-3 flex-1 text-left">
                                        <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#6D6870]">{cat.label}</span>
                                        <h2 className="font-headline text-3xl font-bold tracking-tight text-[#17151A]">{cat.title}</h2>
                                        <p className="text-base text-[#6D6870] leading-relaxed font-medium">
                                            {cat.desc}
                                        </p>
                                    </div>
                                    <div className="pt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E94368]">
                                        Explore Section <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
