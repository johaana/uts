
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = {
    title: "The Golden King's Promise: The Story Behind the 26-Dish Onam Feast",
    image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
    excerpt: "The Onam Sadya is more than a meal; it's a culinary spectacle honoring a mythical king's promise. We explore the legend and the 26+ dishes that make up this incredible feast."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-07-07').toISOString(),
    authors: ['Utsavs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [post.image],
  },
};

const relatedContent: RelatedItem[] = [
    {
        slug: "onam",
        title: "Onam Festival Guide",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Festival",
        link: "/festivals/onam",
        hint: "onam feast"
    },
    {
        slug: "avial",
        title: "Avial Recipe",
        image: "https://i.postimg.cc/MpJpjw6X/Aviyal.webp",
        type: "Recipe",
        link: "/recipes/avial",
        hint: "vegetable stew"
    },
    {
        slug: "payasam",
        title: "Payasam Recipe",
        image: "https://i.postimg.cc/59n9d7My/payasam.jpg",
        type: "Recipe",
        link: "/recipes/payasam",
        hint: "rice pudding"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="onam feast" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on July 07, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>The Onam Sadya is more than just a meal; it's a grand, multi-course vegetarian feast that is the heart and soul of Kerala's Onam celebrations. Served on a fresh banana leaf, this culinary masterpiece features a spectacular array of over 26 different dishes, each with its unique flavor and texture. The Sadya is a testament to the rich agricultural bounty of Kerala and a beautiful expression of community and togetherness. The process of preparing and serving the Sadya is a ritual in itself, representing a philosophy of balance and harmony.</p>

                        <h2>The Art of the Sadya</h2>
                        <p>The feast is served on a 'thonnila' (banana leaf), which is laid with its tapered end to the left. There is a specific order and location for each dish on the leaf, a system designed to ensure a perfect balance of flavors. The meal typically starts with savory items and ends with dessert, with each course designed to aid digestion and provide a complete sensory experience. The Sadya beautifully balances all six tastes—sweet, sour, salty, pungent, bitter, and astringent—all in a single meal.</p>
                        
                        <h2>Key Dishes of the Sadya</h2>
                        <p>While the exact number of dishes can vary, some of the quintessential components of a grand Onam Sadya include:</p>
                        <ul>
                            <li><strong>Rice:</strong> The centerpiece of the meal, usually Kerala's own matta rice.</li>
                            <li><strong>Parippu:</strong> A simple, comforting curry made from lentils, topped with a generous spoonful of ghee.</li>
                            <li><strong>Sambar:</strong> A flavorful and tangy stew made with lentils, tamarind, and a variety of vegetables like drumsticks, pumpkin, and carrots.</li>
                            <li><strong>Avial:</strong> A thick, creamy mixture of various seasonal vegetables cooked in a coconut and yogurt gravy.</li>
                            <li><strong>Pachadi and Kichadi:</strong> Yogurt-based dishes that provide a cooling contrast. Pachadi is typically sweet (like pineapple pachadi), while Kichadi is savory (like cucumber kichadi).</li>
                            <li><strong>Thoran:</strong> A dry vegetable dish made with finely chopped vegetables like cabbage or beans, stir-fried with grated coconut.</li>
                            <li><strong>Upperi:</strong> Crispy banana chips, an essential snack.</li>
                            <li><strong>Pickles:</strong> A variety of pickles, like mango and lime, to add a tangy kick.</li>
                            <li><strong>Payasam:</strong> The grand finale. The Sadya is incomplete without at least one, if not more, types of Payasam—a delicious milk-based pudding. Popular varieties include Semiya (vermicelli) Payasam and Ada Pradhaman (rice flake payasam).</li>
                        </ul>
                         <blockquote>
                            <p>To eat a Sadya is to experience the very essence of Kerala's culture on a single banana leaf.</p>
                        </blockquote>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
