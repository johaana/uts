
'use client';

import type { Metadata } from 'next';
import { DussehraPageContent } from './DussehraPageContent';
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from 'next/image';

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
             <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                    <Image src="https://i.postimg.cc/wMVZW9fk/dussehra.jpg" alt="Dussehra" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="dussehra celebration" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Dussehra (Vijayadashami)</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">The Grand Victory of Good Over Evil</p>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                            <aside className="hidden md:block md:col-span-4 lg:col-span-3 -ml-2">
                                <div className="sticky top-24">
                                     <DussehraPageContent isSideNav={true} />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <div className="md:hidden sticky top-20 z-20 bg-background/95 backdrop-blur-sm py-2 -mx-6 px-6 mb-8 border-b">
                                    <h3 className="font-headline text-lg font-bold mb-2">In This Article</h3>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                                        {pageSections.map(section => (
                                            <a key={section.id} href={`#${section.id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                                                <section.icon className="w-4 h-4 text-accent" />
                                                {section.title}
                                            </a>
                                        ))}
                                    </div>
                                 </div>
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
