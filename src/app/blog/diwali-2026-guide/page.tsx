
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Gift, Lightbulb, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const post = { 
    title: "Diwali 2026: Your Guide to Lakshmi Puja Muhurat, Rituals, and Decor", 
    image: "https://i.postimg.cc/TYs5B2K4/lakshmi_puja.webp",
    excerpt: "Your ultimate guide to Diwali 2026! Find the auspicious Lakshmi Puja timings, step-by-step puja vidhi, and stunning decoration ideas to make your celebration shine."
};

const relatedContent: RelatedItem[] = [
    {
        slug: "diwali",
        title: "Diwali Festival Guide",
        image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg",
        type: "Festival",
        link: "/festivals/diwali",
        hint: "diwali celebration"
    },
    {
        slug: "significance-of-diyas-in-diwali",
        title: "More Than a Lamp: The Deep Symbolism of the Diwali Diya",
        image: "https://i.postimg.cc/brM9vjDZ/Diya-diwali.webp",
        type: "Blog",
        link: "/blog/significance-of-diyas-in-diwali",
        hint: "diwali lamps"
    },
    {
        slug: "celebrate-with-conscience-eco-friendly-festivals",
        title: "Love Festivals, Hate Waste? Your Ultimate Guide to a Green Celebration",
        image: "https://i.postimg.cc/XNyGGLXt/eco-friendly.jpg",
        type: "Blog",
        link: "/blog/celebrate-with-conscience-eco-friendly-festivals",
        hint: "eco-friendly decor"
    }
];

export default function Diwali2026GuidePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="lakshmi ganesh puja" className="rounded-lg"/>
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

                        <p>Diwali, the festival of lights, is the most anticipated celebration in the Hindu calendar. As 2026 approaches, it's time to prepare for the most important ritual: Lakshmi Puja. This guide provides the auspicious timings and a step-by-step vidhi to ensure you welcome the Goddess of Wealth with perfect devotion.</p>

                        <h2 className="font-headline text-3xl text-primary">Lakshmi Puja 2026: Shubh Muhurat & Vidhi</h2>
                        <p>The heart of Diwali lies in the Lakshmi Puja performed on the Amavasya (new moon) night. It is crucial to perform the puja during the 'Pradosh Kaal', which starts after sunset.</p>
                        
                        <Card className="my-8 bg-primary/10 border-primary/20">
                            <CardHeader>
                                <CardTitle className="text-primary flex items-center gap-2"><Sparkles />Diwali Lakshmi Puja Muhurat 2026</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p><strong>Date:</strong> October 29, 2026 (Thursday)</p>
                                <p><strong>Amavasya Tithi Begins:</strong> 08:20 AM on Oct 29, 2026</p>
                                <p><strong>Amavasya Tithi Ends:</strong> 10:29 AM on Oct 30, 2026</p>
                                <p><strong>Pradosh Kaal:</strong> 05:38 PM to 08:11 PM</p>
                                <p className="font-bold text-lg text-primary">Lakshmi Puja Muhurat: 05:38 PM to 07:34 PM (Duration: 1 Hour 56 Mins)</p>
                            </CardContent>
                        </Card>

                        <h3 className="font-headline text-2xl">Step-by-Step Puja Vidhi</h3>
                        <ol className="list-decimal space-y-2 pl-5">
                            <li><strong>Sthapana (Setup):</strong> Place a red cloth on a raised platform (chowki). Create a lotus with rice grains. Place idols of Goddess Lakshmi and Lord Ganesha on it.</li>
                            <li><strong>Kalash Sthapana:</strong> Place a kalash filled with water, a betel nut, flower, coin, and rice grains. Arrange five mango leaves on the kalash and place a coconut on top.</li>
                            <li><strong>Puja:</strong> Begin by worshipping Lord Ganesha. Then, invoke Goddess Lakshmi. Offer flowers, fruits, and sweets. Recite the Lakshmi Chalisa or other mantras.</li>
                            <li><strong>Aarti:</strong> Conclude the puja with the Lakshmi Aarti, ringing bells and showering flowers.</li>
                        </ol>

                        <h2 className="font-headline text-3xl text-primary mt-12">Stunning Decoration Ideas for 2026</h2>
                        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                            <Card>
                                <CardContent className="p-4">
                                    <Lightbulb className="w-8 h-8 text-accent mb-2"/>
                                    <h4 className="font-bold">Eco-Friendly Diyas & Lights</h4>
                                    <p className="text-sm">Embrace traditional clay diyas. For electric lights, choose energy-saving LEDs. Create beautiful patterns on your balcony and entrance.</p>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardContent className="p-4">
                                    <Gift className="w-8 h-8 text-accent mb-2"/>
                                    <h4 className="font-bold">Floating Rangoli</h4>
                                    <p className="text-sm">Create a centerpiece by floating flowers and diyas in a large bowl of water (urli). It's simple, elegant, and looks stunning in your living room.</p>
                                </CardContent>
                            </Card>
                        </div>
                         <div className="not-prose my-10 bg-secondary/30 p-6 rounded-lg">
                            <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Diwali Gifting Ideas on Amazon</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <ProductCard product={products.omayFoodsWonderful} />
                                <ProductCard product={products.indianArtVillaCopperSet} />
                            </div>
                        </div>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
