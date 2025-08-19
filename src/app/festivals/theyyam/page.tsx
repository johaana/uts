
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { TheyyamPageContent } from "./TheyyamPageContent";
import Image from "next/image";


const relatedContent: RelatedItem[] = [
    {
        slug: "extreme-festivals-of-the-world",
        title: "Gods, Guts, and Glory: The World's Most Extreme Festivals",
        image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
        type: "Blog",
        link: "/blog/extreme-festivals-of-the-world",
        hint: "fire walking"
    },
    {
        slug: "thaipusam",
        title: "The Burden of Faith: Unpacking Thaipusam",
        image: "https://i.postimg.cc/cJbJfPhR/thaipusam.webp",
        type: "Festival",
        link: "/festivals/thaipusam",
        hint: "kavadi"
    },
     {
        slug: "onam",
        title: "Onam",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Festival",
        link: "/festivals/onam",
        hint: "onam feast"
    }
];


export default function TheyyamPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/HW7r9WfV/Theyyam.jpg" alt="Theyyam festival" layout="fill" objectFit="cover" data-ai-hint="theyyam dancer" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-red-900 drop-shadow-lg">Theyyam</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-red-800/90 drop-shadow-md">When Gods Walk the Earth in Kerala</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <TheyyamPageContent />
                        <ShareButtons title="Theyyam: When Gods Walk the Earth in Kerala" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
