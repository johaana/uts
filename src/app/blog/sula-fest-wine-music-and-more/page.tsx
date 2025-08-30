
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Sula Fest: A Guide to India's Premier Vineyard Music Festival", 
    image: "https://i.postimg.cc/Gpm0Ykgv/sula-fest-1.jpg",
    excerpt: "Discover Sula Fest, a unique blend of live music, gourmet food, and fine wine in the picturesque vineyards of Nashik."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-06-02').toISOString(),
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
        slug: "goa-carnival",
        title: "Goa Carnival",
        image: "https://i.postimg.cc/4xZYzGsQ/Goa-Carnival.jpg",
        type: "Festival",
        link: "/festivals/goa-carnival",
        hint: "carnival parade float"
    },
    {
        slug: "oktoberfest",
        title: "Oktoberfest",
        image: "https://i.postimg.cc/g0q0PLJz/Oktoberfest-Munich.jpg",
        type: "Festival",
        link: "/festivals/oktoberfest",
        hint: "beer festival"
    },
    {
        slug: "zomaland",
        title: "Zomaland",
        image: "https://i.postimg.cc/y8Yj3p5m/zomaland.avif",
        type: "Festival",
        link: "/festivals/zomaland",
        hint: "food festival"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt="Sula Fest" layout="fill" objectFit="cover" data-ai-hint="sula vineyards" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on June 02, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <h2>Where Wine, Music, and Culture Converge</h2>
                        <p>Sula Fest is one of India's coolest and most popular modern festivals, offering a unique blend of music, wine, food, and fashion. Held annually at the scenic Sula Vineyards near Nashik, India's leading winery, this festival has become a must-visit event for music lovers and culture enthusiasts. Since its inception in 2007, Sula Fest has grown into a multi-genre music festival that attracts top Indian and international artists.</p>

                        <h2>A Multi-Sensory Experience</h2>
                        <p>The festival is more than just a music concert; it's a complete weekend experience set against the beautiful backdrop of rolling vineyards. It offers a perfect getaway for those looking to unwind and indulge in a variety of activities.</p>

                        <h3>What to Enjoy at Sula Fest:</h3>
                        <ul>
                            <li><strong>Live Music:</strong> The festival boasts an impressive lineup of artists across genres like rock, folk, blues, electronic, and reggae, performing on multiple stages.</li>
                            <li><strong>Wine Tasting:</strong> As the festival is hosted by Sula, attendees have the opportunity to taste a wide variety of wines, including new launches.</li>
                            <li><strong>Grape Stomping:</strong> A fun and iconic activity, grape stomping is a highlight for many visitors.</li>
                            <li><strong>Gourmet Food:</strong> A dedicated food village offers a wide range of culinary delights, from gourmet food stalls to local delicacies.</li>
                            <li><strong>Fashion and Shopping:</strong> A bustling market area features pop-up shops selling clothes, accessories, and unique handicrafts.</li>
                        </ul>
                        
                        <p>Sula Fest provides a relaxed, vibrant, and sophisticated atmosphere, making it a unique and sought-after event in India's festival calendar. It's a celebration of the good life, combining great music with the pleasures of food and wine.</p>
                    </article>
                    <ShareButtons title={post.title} />
                     <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
