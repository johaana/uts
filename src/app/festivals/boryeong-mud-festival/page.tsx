
'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { BoryeongMudFestivalPageContent } from "./BoryeongMudFestivalPageContent";
import type { Metadata } from 'next';

const relatedContent: RelatedItem[] = [
    { slug: "la-tomatina", title: "La Tomatina", image: "https://i.postimg.cc/GhwH7wCz/la-tomatina1.jpg", type: "Festival", link: "/festivals/la-tomatina", hint: "tomato fight" },
    { slug: "holi", title: "Holi", image: "https://i.postimg.cc/0276MjRN/Holi.jpg", type: "Festival", link: "/festivals/holi", hint: "holi celebration" },
    { slug: "songkran", title: "Songkran", image: "https://i.postimg.cc/RhHJcbgG/songkran.avif", type: "Festival", link: "/festivals/songkran", hint: "water festival" }
];

export default function BoryeongMudFestivalPage() {
    const metadata: Metadata = {
        title: "Boryeong Mud Festival | South Korea's Messiest Party | Utsavs",
        description: "Get ready to get muddy! Discover the story, traditions, and pure, unadulterated fun of the Boryeong Mud Festival in South Korea.",
        openGraph: {
            title: "Boryeong Mud Festival | South Korea's Messiest Party | Utsavs",
            description: "Get ready to get muddy! Discover the story, traditions, and pure, unadulterated fun of the Boryeong Mud Festival in South Korea.",
            images: [{ url: "https://i.postimg.cc/N0MM9Q6G/boryeong.avif", width: 1200, height: 630, alt: "People covered in mud at the Boryeong Mud Festival" }],
        },
    };

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-800/10">
                 <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/N0MM9Q6G/boryeong.avif" alt="Boryeong Mud Festival" layout="fill" objectFit="cover" data-ai-hint="mud festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">The World's Messiest Party</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">The Story of the Boryeong Mud Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <BoryeongMudFestivalPageContent />
                        <ShareButtons title="Boryeong Mud Festival" />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
