

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, Sailboat, Trophy } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TheyyamPageContent } from "../theyyam/TheyyamPageContent";
import { SnakeBoatRacePageContent } from "./SnakeBoatRacePageContent";

const relatedContent: RelatedItem[] = [
    {
        slug: "snake-boat-race-festival-kerala",
        title: "Deep Dive: The Spirit of Vallam Kali",
        image: "https://i.postimg.cc/W3B4g40T/vallam-kali-2.jpg",
        type: "Blog",
        link: "/blog/snake-boat-race-festival-kerala",
        hint: "kerala boat race"
    },
    {
        slug: "onam",
        title: "Onam Festival Guide",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Festival",
        link: "/festivals/onam",
        hint: "onam feast"
    },
    {
        slug: "thrissur-pooram",
        title: "Thrissur Pooram",
        image: "https://i.postimg.cc/j28kQ9WT/thrissur-puram-festival-2.jpg",
        type: "Blog",
        link: "/blog/thrissur-pooram-keralas-grandest-festival",
        hint: "kerala temple festival"
    }
];

export default function SnakeBoatRacePage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-600/10">
                 <Image src="https://i.postimg.cc/W3B4g40T/vallam-kali-2.jpg" alt="Snake Boat Race" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-20" data-ai-hint="kerala boat race" />
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Snake Boat Race (Vallam Kali)</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">The Thunder on the Backwaters</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3">
                                <div className="sticky top-24">
                                     <SnakeBoatRacePageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <ShareButtons title="Snake Boat Race (Vallam Kali)" />
                               <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
