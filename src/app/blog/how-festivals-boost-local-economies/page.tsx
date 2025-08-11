
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "The Festive Economy: How Cultural Celebrations Boost Local Livelihoods", 
    image: "https://i.postimg.cc/Gpm0Ykgv/sula-fest-1.jpg",
    excerpt: "Explore how major festivals like Durga Puja and the Pushkar Camel Fair create a vibrant micro-economy, supporting artisans, local businesses, and sustaining traditional crafts."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
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
        slug: "durga-puja",
        title: "Durga Puja",
        image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp",
        type: "Festival",
        link: "/festivals/durga-puja",
        hint: "durga idol"
    },
    {
        slug: "pushkar-camel-fair-an-unforgettable-experience",
        title: "Pushkar Camel Fair",
        image: "https://i.postimg.cc/rmVJnj2w/Pushkar-Camel-Fair.avif",
        type: "Blog",
        link: "/blog/pushkar-camel-fair-an-unforgettable-experience",
        hint: "pushkar camel fair"
    },
    {
        slug: "celebrate-with-conscience-eco-friendly-festivals",
        title: "Guide to Eco-Friendly Festivals",
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
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="local market" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on September 01, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Festivals in India are much more than just religious or cultural events; they are powerful engines of economic activity. For a few weeks or even months, these celebrations create a vibrant, temporary economy that supports millions of livelihoods, from rural artisans to urban service providers. This "festive economy" is a fascinating intersection of tradition, creativity, and commerce. Let's explore how some of India's major festivals provide a significant economic boost to local communities.</p>

                        <h3>Durga Puja: The Creative Economy of Kolkata</h3>
                        <p>Durga Puja in West Bengal, particularly in Kolkata, is the most shining example of a festival-driven economy. The United Nations has even recognized it as an 'Intangible Cultural Heritage of Humanity.' The scale of the economic activity is staggering. Months before the festival, thousands of artisans in places like Kumartuli, the potters' quarter of Kolkata, begin crafting the magnificent clay idols of Goddess Durga. This is a year-round profession for many, passed down through generations.</p>
                        <p>Beyond the idols, the construction of the 'pandals' (temporary temples) involves a massive workforce of designers, artists, electricians, and laborers. The thematic and artistic pandals are a huge draw, and their creation fuels a creative industry worth millions. Add to this the boom in the retail sector (people buy new clothes), the food and beverage industry (street food vendors and restaurants), and tourism (hotels and transport), and you have a festival that essentially underpins the state's economy for a significant part of the year.</p>

                        <h3>The Pushkar Camel Fair: A Rural Trade Hub</h3>
                        <p>The Pushkar Camel Fair in Rajasthan is another great example. At its core, it is a massive livestock market, one of the largest in the world. Thousands of camel and cattle traders from across the region converge for a few days of intense trading, which is a crucial part of the rural economy. However, the fair has also evolved into a major international tourist attraction. This influx of tourists creates a secondary economy that benefits local hotels, guesthouses, restaurants, and transport providers. Furthermore, the fair is a massive market for local artisans selling handicrafts, textiles, and jewelry, providing them with a vital platform to sell their goods directly to a global audience.</p>

                        <h3>Ganesh Chaturthi: From Idols to Sweets</h3>
                        <p>Similar to Durga Puja, Ganesh Chaturthi in Maharashtra drives a huge demand for idol makers. But the economic impact goes further. There's a massive market for puja items—flowers, incense, fruits, and decorations. Sweet shops ('mithaiwalas') do brisk business, with 'modaks' being sold in huge quantities. The public pandals also hire decorators, sound system providers, and security personnel, creating numerous temporary jobs. The final immersion processions also involve musicians and transporters, adding another layer to the economic activity.</p>
                        
                        <blockquote>
                            <p>These festivals are not just about preserving culture; they are about sustaining communities. By celebrating, we are also supporting a vast network of artisans and small businesses whose skills are an invaluable part of India's heritage.</p>
                        </blockquote>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
