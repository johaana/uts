
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Palette, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const post = { 
    title: "Ganesh Chaturthi 2025: Best Murti Designs, Decoration Ideas & Visarjan Dates", 
    image: "https://i.postimg.cc/SNGxJ8VJ/ganesh-chaturthi-festival.jpg",
    excerpt: "Your complete guide to celebrating Ganesh Chaturthi 2025! Discover stunning murti designs, creative home decoration ideas, and the all-important visarjan dates."
};

const relatedContent: RelatedItem[] = [
    {
        slug: "ganesh-chaturthi",
        title: "Ganesh Chaturthi Festival Guide",
        image: "https://i.postimg.cc/SNGxJ8VJ/ganesh-chaturthi-festival.jpg",
        type: "Festival",
        link: "/festivals/ganesh-chaturthi",
        hint: "ganesha idol"
    },
    {
        slug: "modak",
        title: "Modak Recipe",
        image: "https://i.postimg.cc/ZYv7DzmT/ukadiche-modak-recipe.jpg",
        type: "Recipe",
        link: "/recipes/modak",
        hint: "steamed dumplings"
    },
    {
        slug: "eco-friendly-ganesh-chaturthi-guide",
        title: "Guide to Eco-Friendly Ganesh Chaturthi",
        image: "https://i.postimg.cc/YqXk9YD2/eco-ganesh-1.jpg",
        type: "Blog",
        link: "/blog/eco-friendly-ganesh-chaturthi-guide",
        hint: "eco-friendly ganesha"
    }
];

export default function GaneshChaturthi2025GuidePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="ganesha idol" className="rounded-lg"/>
            </div>
            <Card className="overflow-hidden md:-mt-16 relative z-10 md:rounded-t-2xl">
                <CardContent className="p-6 md:p-10">
                    <div className="mb-8">
                        <Link href="/blog">
                            <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Button>
                        </Link>
                    </div>

                    <article className="prose max-w-none text-foreground/80">
                         <div className="text-center mb-8">
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Ganesh Chaturthi is a time of immense joy, devotion, and creativity. As we prepare to welcome Lord Ganesha in 2025, planning the perfect celebration is key. This guide covers everything from choosing the right murti to beautiful decoration ideas and the all-important visarjan dates.</p>

                        <h2 className="font-headline text-3xl text-primary">Best Murti Designs for 2025</h2>
                        <p>The heart of the celebration is the Ganesha idol. This year, the trend is moving towards devotion combined with artistry and sustainability.</p>
                        
                        <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <ProductCard product={products.ecoFriendlyGanesha} />
                            <ProductCard product={products.tiedRibbonsGanesha} />
                            <ProductCard product={products.saudeepMittiGanesh} />
                        </div>
                        
                        <ul className="list-none p-0 space-y-4">
                          <li className="flex items-start gap-4"><Palette className="w-6 h-6 text-accent shrink-0"/><div><span className="font-bold">Eco-Friendly Seed Ganesha:</span> Idols made of clay with seeds inside, which can be grown into a plant after immersion. A beautiful way to symbolize rebirth.</div></li>
                          <li className="flex items-start gap-4"><Palette className="w-6 h-6 text-accent shrink-0"/><div><span className="font-bold">Artistic Clay Murtis:</span> Handcrafted idols with intricate details and non-toxic paints are gaining popularity for their beauty and eco-consciousness.</div></li>
                          <li className="flex items-start gap-4"><Palette className="w-6 h-6 text-accent shrink-0"/><div><span className="font-bold">DIY Clay Ganesha:</span> For a personal touch, making your own Ganesha with a DIY kit can be a wonderful family activity.</div></li>
                        </ul>

                        <h2 className="font-headline text-3xl text-primary mt-12">Creative Home Decoration Ideas</h2>
                        <p>Create a divine atmosphere with these simple yet elegant decoration ideas.</p>
                         <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <ProductCard product={products.ganpatiDecorStand} />
                            <ProductCard product={products.rajasthanKraftToran} />
                             <ProductCard product={products.divyakoshLotusHanging} />
                        </div>
                        <ul className="list-none p-0 space-y-4">
                          <li className="flex items-start gap-4"><Sparkles className="w-6 h-6 text-accent shrink-0"/><div><span className="font-bold">Flower Power:</span> Use fresh marigold, hibiscus, and mango leaves to create a traditional and fragrant backdrop.</div></li>
                          <li className="flex items-start gap-4"><Sparkles className="w-6 h-6 text-accent shrink-0"/><div><span className="font-bold">Light and Shadow:</span> Use string lights behind a white curtain or a jaali backdrop to create a divine, glowing effect for your mandap.</div></li>
                        </ul>


                        <h2 className="font-headline text-3xl text-primary mt-12">Ganesh Visarjan 2025 Dates</h2>
                        <p>The immersion of the Ganesha idol can take place after 1.5, 3, 5, 7, or 10 days. Here are the key dates:</p>
                        
                         <Card className="my-8 bg-primary/10 border-primary/20">
                            <CardHeader>
                                <CardTitle className="text-primary">Anant Chaturdashi (10th Day Visarjan)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p><strong>The final and grandest day for visarjan is Anant Chaturdashi on September 6, 2025.</strong></p>
                            </CardContent>
                        </Card>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
