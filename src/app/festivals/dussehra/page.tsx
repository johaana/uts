
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { DussehraPageContent } from "./DussehraPageContent";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dussehra 2025: Date, Ravan Dahan & Vijayadashami Story 🔥",
  description: "Find the Dussehra 2025 date and explore the traditions of Ramlila and Ravan Dahan. Discover the story of Vijayadashami and why it's an auspicious day.",
};


const relatedContent: RelatedItem[] = [
    {
        slug: "durga-puja",
        title: "Durga Puja",
        image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp",
        type: "Festival",
        link: "/festivals/durga-puja",
        hint: "durga idol"
    },
    {
        slug: "navratri",
        title: "Navratri Festival Guide",
        image: "https://i.postimg.cc/J4JFtVYT/navratri1.jpg",
        type: "Festival",
        link: "/festivals/navratri",
        hint: "garba dance"
    },
    {
        slug: "ram-navami",
        title: "Ram Navami",
        image: "https://i.postimg.cc/Vvqmzy7S/ram-navami.webp",
        type: "Festival",
        link: "/festivals/ram-navami",
        hint: "lord rama"
    }
];

const pageSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "traditions", title: "Celebrations", icon: Sparkles },
    { id: "significance", title: "Significance", icon: MessageSquareQuote },
];


export default function DussehraPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary shadow-lg">Dussehra (Vijayadashami)</h1>
                    <p className="text-lg md:text-xl mt-4 text-primary/90 shadow-md">The Grand Victory of Good Over Evil</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                            <aside className="hidden md:block md:col-span-4 lg:col-span-3">
                                <div className="sticky top-24">
                                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                                        <h2 className="font-headline text-2xl font-bold mb-4">In This Article</h2>
                                        <ul className="space-y-2">
                                            {pageSections.map(section => (
                                                <li key={section.id}>
                                                    <a href={`#${section.id}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                                                        <section.icon className="w-5 h-5 text-accent" />
                                                        <span className="font-semibold">{section.title}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <article>
                                    <DussehraPageContent />
                               </article>
                               <ShareButtons title="Dussehra" />
                               <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
