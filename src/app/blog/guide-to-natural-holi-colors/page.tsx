
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = {
    title: "DIY Holi: Make Safe, Skin-Loving Colors in Your Own Kitchen",
    image: "https://i.postimg.cc/gkXKTrQ8/organic-holi-colours.webp",
    excerpt: "Before chemical colors became popular, Holi was played with fragrant, skin-friendly colors made from flowers and herbs. Learn how to make your own natural gulal and celebrate a safe, eco-friendly Holi."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-05-15').toISOString(),
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
        slug: "holi",
        title: "Holi Festival Guide",
        image: "https://i.postimg.cc/0276MjRN/Holi.jpg",
        type: "Festival",
        link: "/festivals/holi",
        hint: "holi celebration"
    },
    {
        slug: "thandai",
        title: "Thandai Recipe",
        image: "https://i.postimg.cc/Y04CQqLL/Thandai.webp",
        type: "Recipe",
        link: "/recipes/thandai",
        hint: "holi drink"
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

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="holi colors" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on May 15, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <h2>The Problem with Chemical Colors</h2>
                        <p>Before chemical colors became popular, Holi was played with fragrant, skin-friendly colors made from flowers and herbs. Modern Holi colors often contain harmful chemicals like lead oxide, mercury sulphite, and copper sulphate, which can cause skin allergies, eye irritation, and other health problems. Making a switch to natural, homemade colors is not only safer but also connects us back to the traditional, eco-friendly roots of the festival.</p>

                        <h2>DIY Natural Colors</h2>
                        <h3>Yellow (Peela)</h3>
                        <p>Mix turmeric powder (haldi) with gram flour (besan) in equal proportions for a vibrant and skin-nourishing yellow powder. You can also boil marigold flowers in water for a natural yellow liquid color.</p>

                        <h3>Red (Laal)</h3>
                        <p>Use red sandalwood powder (Raktachandan) for a beautiful red gulal. You can also dry hibiscus flowers or pomegranate peels and grind them into a fine powder. Soaking beetroot slices in water will give you a lovely magenta liquid.</p>

                        <h3>Green (Hara)</h3>
                        <p>For a natural green, use pure henna (mehendi) powder mixed with flour. You can also make a paste of spinach or mint leaves for a wet green color.</p>
                        
                        <h3>Magenta</h3>
                        <p>Grate or slice a beetroot and soak it in water overnight. The next morning, you will have a beautiful, deep pinkish-red water that is completely safe and natural. For a dry powder, you can dry and grind beetroot slices.</p>
                        
                        <h3>Blue</h3>
                        <p>The Jacaranda flower, which blooms in spring, can be dried and ground to create a lovely blue powder. Blue hibiscus is another source for natural blue color.</p>

                        <blockquote>
                            <p>Celebrating with natural colors is not a compromise; it's an enhancement. It makes the festival safer, more fragrant, and more connected to the spirit of spring.</p>
                        </blockquote>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
