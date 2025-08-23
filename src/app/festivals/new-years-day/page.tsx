
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import Link from "next/link";
import { internationalEvents } from "@/lib/festival-data";
import React from 'react';
import { InternationalFestivalsPageContent } from "@/app/international-festivals/InternationalFestivalsPageContent";


export default function NewYearsDayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-500/10">
                 <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/nzHVdBx9/new-year-s-day.png" alt="New Year's Day" layout="fill" objectFit="cover" data-ai-hint="fireworks celebration" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">New Year's Day</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">A Global Celebration of Fresh Starts</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <article className="prose max-w-none text-foreground/80">
                            <h2 className="font-headline text-3xl font-bold mb-4">A Universal Beginning</h2>
                            <p>New Year's Day, celebrated on January 1st according to the Gregorian calendar, is one of the most widely observed public holidays in the world. It marks the beginning of a new year, a time for fresh starts, renewed hope, and setting new goals. While the celebrations often kick off with lively parties and fireworks on New Year's Eve, New Year's Day itself is typically a more relaxed occasion, spent with family and friends.</p>
                            <p>It's a day to reflect on the year that has passed and to look forward to the opportunities of the year to come. Many cultures have their own unique traditions and foods associated with the day, all aimed at bringing good luck and prosperity. The underlying theme is universal: a celebration of renewal and the endless possibilities that a new chapter brings.</p>
                        </article>
                        <ShareButtons title="New Year's Day" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

