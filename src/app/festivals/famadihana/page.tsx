'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { FamadihanaPageContent } from "./FamadihanaPageContent";

const relatedContent: RelatedItem[] = [
    {
        slug: "honoring-the-ancestors",
        title: "How the World Honors Its Ancestors",
        image: "https://i.postimg.cc/mgTh4YhH/nyepi-2.jpg",
        type: "Blog",
        link: "/blog/honoring-the-ancestors",
        hint: "ogoh-ogoh statue"
    },
    {
        slug: "extreme-festivals-of-the-world",
        title: "Gods, Guts, and Glory: The World's Most Extreme Festivals",
        image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
        type: "Blog",
        link: "/blog/extreme-festivals-of-the-world",
        hint: "fire walking"
    },
    {
        slug: "dia-de-los-muertos",
        title: "Día de los Muertos",
        image: "https://i.postimg.cc/05F4GWkS/Dia-de-los-Muertos-Day-of-the-Dead-3.avif",
        type: "Festival",
        link: "/festivals/dia-de-los-muertos",
        hint: "day of the dead"
    }
];

export default function FamadihanaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-700/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/jq39drXs/Famadihana.jpg" alt="Famadihana" layout="fill" objectFit="cover" data-ai-hint="turning of bones" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 drop-shadow-lg">Famadihana</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-800/90 drop-shadow-md">The Turning of the Bones</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                            <main className="md:col-span-12">
                               <article>
                                    <FamadihanaPageContent />
                               </article>
                               <ShareButtons title="Famadihana: The Turning of the Bones" />
                               <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
