
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { TheyyamPageContent } from "./TheyyamPageContent";
import Image from "next/image";
import type { Metadata } from 'next';

const post = { 
    title: "Theyyam: When Gods Walk the Earth", 
    excerpt: "Explore the ancient ritual of Theyyam, where men transform into gods in a stunning display of devotion, art, and tradition that bridges the gap between the human and the divine."
};

export const metadata: Metadata = {
  title: "Theyyam: When Gods Walk the Earth in Kerala's Divine Dance | Utsavs",
  description: "Explore the ancient ritual of Theyyam, where men transform into gods in a stunning display of devotion, art, and tradition that bridges the gap between the human and the divine.",
  openGraph: {
    title: "Theyyam: When Gods Walk the Earth in Kerala's Divine Dance | Utsavs",
    description: "Explore the ancient ritual of Theyyam, where men transform into gods in a stunning display of devotion, art, and tradition that bridges the gap between the human and the divine.",
    images: [{ url: "https://i.postimg.cc/HW7r9WfV/Theyyam.jpg", width: 1200, height: 630, alt: "A Theyyam performer in full costume" }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Theyyam: When Gods Walk the Earth in Kerala's Divine Dance | Utsavs",
    description: "Explore the ancient ritual of Theyyam, where men transform into gods in a stunning display of devotion, art, and tradition that bridges the gap between the human and the divine.",
    images: ["https://i.postimg.cc/HW7r9WfV/Theyyam.jpg"],
  },
};

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
             <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                    <Image src="https://i.postimg.cc/HW7r9WfV/Theyyam.jpg" alt="Theyyam festival" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="theyyam dancer" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">{post.title}</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">The Divine Dance of Kerala</p>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                         <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3 -ml-2 hidden md:block">
                                <div className="sticky top-24">
                                     <TheyyamPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <article>
                                    <TheyyamPageContent isContent={true} />
                               </article>
                               <ShareButtons title={post.title} />
                               <RelatedContent items={relatedContent} />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
