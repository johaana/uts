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
        title: "Indian Festivals",
        label: "INDIA",
        desc: "The 28 states and 8 union territories.",
        icon: Flag,
        link: "/festivals/directory",
        color: "text-orange-600",
        bg: "bg-orange-600/10"
    },
    {
        title: "World Festivals",
        label: "INTERNATIONAL",
        desc: "Major world-impact events and festivals.",
        icon: Globe,
        link: "/international-festivals",
        color: "text-blue-600",
        bg: "bg-blue-600/10"
    },
    {
        title: "Stories & Blogs",
        label: "CULTURAL STORIES",
        desc: "The 'Why' behind the 'When'.",
        icon: BookOpen,
        link: "/blog",
        color: "text-purple-600",
        bg: "bg-purple-600/10"
    },
    {
        title: "Festive Recipes",
        label: "SACRED RECIPES",
        desc: "The authentic flavors of celebration.",
        icon: Utensils,
        link: "/recipes",
        color: "text-green-600",
        bg: "bg-green-600/10"
    }
];

export default function FestivalsHubPage() {
    return (
        <div className="bg-[#F4F1E8] text-[#17151A] min-h-screen font-sans">
            <Header />
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="max-w-4xl mx-auto mb-10 text-center space-y-3">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-[#E94368]">THE UTSAVS LIBRARY</span>
                    </div>
                    <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none text-center">Discover Traditions</h1>
                    <p className="text-base text-[#6D6870] font-medium leading-relaxed max-w-2xl mx-auto text-center">
                        The definitive guide to global cultural events and sacred recipes.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {hubCategories.map((cat) => (
                        <Link href={cat.link} key={cat.title} className="group">
                            <Card className="h-full bg-white border-[#17151A]/5 hover:border-[#17151A]/20 hover:shadow-lg transition-all duration-500 overflow-hidden rounded-sm">
                                <CardContent className="p-6 md:p-8 flex flex-col h-full items-start text-left">
                                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-transform group-hover:scale-110", cat.bg)}>
                                        <cat.icon className={cn("w-5 h-5", cat.color)} />
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <span className="text-[8px] font-mono font-bold uppercase tracking-[0.3em] text-[#6D6870]">{cat.label}</span>
                                        <h2 className="font-headline text-xl md:text-2xl font-bold tracking-tight text-[#17151A] leading-tight">{cat.title}</h2>
                                        <p className="text-xs text-[#6D6870] leading-relaxed font-medium">
                                            {cat.desc}
                                        </p>
                                    </div>
                                    <div className="pt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#E94368]">
                                        Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
