
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Palette, Drama } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const post = { 
    title: "Navratri & Dussehra 2026: A 10-Day Guide to Garba, Gods, and Victory", 
    image: "https://i.postimg.cc/Zn3Rzsz8/navratri1.jpg",
    excerpt: "Your essential guide to the 10 days of celebration! Find Navratri 2026 dates, the significance of the 9 colors, and the story behind Dussehra's Ravan Dahan."
};

const relatedContent: RelatedItem[] = [
    {
        slug: "dussehra",
        title: "Dussehra Festival Guide",
        image: "https://i.postimg.cc/wMVZW9fk/dussehra.jpg",
        type: "Festival",
        link: "/festivals/dussehra",
        hint: "dussehra celebration"
    },
    {
        slug: "navratri",
        title: "Navratri Festival Guide",
        image: "https://i.postimg.cc/Zn3Rzsz8/navratri1.jpg",
        type: "Festival",
        link: "/festivals/navratri",
        hint: "garba dance"
    },
    {
        slug: "9-avatars-of-durga-a-navratri-special",
        title: "Navratri's Nine Nights: A Day-by-Day Guide to the 9 Forms of Durga",
        image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg",
        type: "Blog",
        link: "/blog/9-avatars-of-durga-a-navratri-special",
        hint: "garba dance"
    }
];

export default function NavratriDussehra2026GuidePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="garba dance" className="rounded-lg"/>
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

                        <p>The ten days from Navratri to Dussehra are among the most vibrant in the Hindu calendar. It's a period of fasting, feasting, dance, and devotion, celebrating the ultimate victory of good over evil. Here’s your guide to navigating the celebrations of 2026.</p>

                        <h2 className="font-headline text-3xl text-primary">Navratri 2026: Nine Nights of Color & Dance</h2>
                        <p>Navratri, from **October 1st to October 9th, 2026**, is dedicated to the nine forms of Goddess Durga. A key tradition is wearing a specific color each day to honor the goddess.</p>
                        
                        <Card className="my-8 bg-primary/10 border-primary/20">
                            <CardHeader>
                                <CardTitle className="text-primary flex items-center gap-2"><Palette />The 9 Colors of Navratri 2026</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc space-y-1 pl-5">
                                    <li><strong>Day 1 (Ghatasthapana) - Grey:</strong> Power to destroy evil.</li>
                                    <li><strong>Day 2 - Orange:</strong> Energy and warmth.</li>
                                    <li><strong>Day 3 - White:</strong> Purity and peace.</li>
                                    <li><strong>Day 4 - Red:</strong> Passion and fearlessness.</li>
                                    <li><strong>Day 5 - Royal Blue:</strong> Health and wealth.</li>
                                    <li><strong>Day 6 - Yellow:</strong> Happiness and brightness.</li>
                                    <li><strong>Day 7 - Green:</strong> New beginnings and growth.</li>
                                    <li><strong>Day 8 (Ashtami) - Peacock Green:</strong> Wisdom and fulfillment.</li>
                                    <li><strong>Day 9 (Navami) - Purple:</strong> Intellect and ambition.</li>
                                </ul>
                                <p className="text-sm text-muted-foreground mt-4">Note: Colors are based on the day of the week and can vary. This is a typical sequence.</p>
                            </CardContent>
                        </Card>
                        
                        <div className="not-prose my-10 bg-secondary/30 p-6 rounded-lg">
                            <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Kanya Pujan & Garba Night Essentials</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <ProductCard product={products.mpkStationerySet} />
                                <ProductCard product={products.baalWaterBottleSet} />
                            </div>
                        </div>

                        <h2 className="font-headline text-3xl text-primary mt-12">Dussehra 2026: The Tenth Day of Victory</h2>
                        <p>Dussehra, or Vijayadashami, falls on **October 10th, 2026**. It celebrates Lord Rama's victory over the ten-headed demon king Ravana.</p>
                        
                        <Card className="my-8">
                            <CardHeader>
                                 <CardTitle className="flex items-center gap-2"><Drama />Ravan Dahan: The Fiery Spectacle</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>The festival culminates in 'Ravan Dahan', where giant effigies of Ravana, his brother Kumbhakarna, and son Meghanada are burnt in massive public gatherings. This symbolizes the destruction of evil and is followed by spectacular fireworks. It's a powerful reminder that good always triumphs.</p>
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
