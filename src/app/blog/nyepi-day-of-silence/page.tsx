
'use client';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "The Island That Goes Silent: The Mystery of Nyepi, Bali's Day of Absolute Stillness", 
    image: "https://i.postimg.cc/T3Q13KWH/nyepi.webp",
    excerpt: "On one day every year, an entire island deliberately vanishes. This is the story of Nyepi, Bali's Day of Silence, a unique ritual to trick evil spirits into leaving the island in peace."
};

const relatedContent: RelatedItem[] = [
    {
        slug: "honoring-the-ancestors",
        title: "How the World Honors Its Ancestors",
        image: "https://i.postimg.cc/05F4GWkS/Dia-de-los-Muertos-Day-of-the-Dead-3.avif",
        type: "Blog",
        link: "/blog/honoring-the-ancestors",
        hint: "day of the dead"
    },
    {
        slug: "obon-festival",
        title: "Obon Festival",
        image: "https://i.postimg.cc/jdW1Dkgy/obon1.jpg",
        type: "Festival",
        link: "/festivals/obon-festival",
        hint: "japanese lanterns"
    },
    {
        slug: "buddha-purnima",
        title: "Buddha Purnima",
        image: "https://i.postimg.cc/L438TyHZ/buddha-purnima.webp",
        type: "Festival",
        link: "/festivals/buddha-purnima",
        hint: "buddha statue"
    }
];

export default function NyepiPage() {
    const metadata: Metadata = {
        title: `${post.title} | Utsavs`,
        description: post.excerpt,
        openGraph: {
          title: `${post.title} | Utsavs`,
          description: post.excerpt,
          images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
          type: 'article',
          publishedTime: new Date().toISOString(),
          authors: ['Utsavs'],
        },
        twitter: {
          card: 'summary_large_image',
          title: `${post.title} | Utsavs`,
          description: post.excerpt,
          images: [post.image],
        },
    };
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="ogoh-ogoh statue" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Imagine an island so quiet you can hear the rustle of leaves from a mile away. An island where, for 24 hours, all lights are extinguished, all traffic ceases, the international airport shuts down, and six million people retreat into their homes in absolute silence. This is not a dystopian fantasy; it is Nyepi, the Balinese "Day of Silence," one of the most unique and profound festivals on Earth.</p>
                        
                        <h3>The Chaos Before the Calm</h3>
                        <p>The day before Nyepi is anything but silent. Known as 'Ngrupuk', this is a day of exorcism. In the evening, villages across Bali erupt in the Ogoh-ogoh parade. These are massive, demonic effigies, handcrafted for months from bamboo and paper-mâché, representing the evil spirits ('bhuta kala') of the past year. With loud gamelan music and fiery torches, these terrifying figures are paraded through the streets in a chaotic, energetic procession before being ceremonially burned in a cemetery. This act is a cathartic cleansing, a noisy and spectacular purging of all negativity.</p>
                        
                        <div className="my-8 flex justify-center">
                            <Image src="https://i.postimg.cc/mgTh4YhH/nyepi-2.jpg" alt="Ogoh-ogoh parade" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="ogoh-ogoh statue"/>
                        </div>

                        <h3>A Day of Spiritual Stealth</h3>
                        <p>And then, at 6 a.m. the next morning, the silence descends. The purpose of this island-wide shutdown is rooted in a fascinating piece of spiritual stealth. It is believed that after being roused by the noise of the Ogoh-ogoh parade, the evil spirits, now looking for people to torment, will fly over Bali. Seeing the island completely dark, silent, and seemingly deserted, they will be tricked into thinking that it is uninhabited and will leave it in peace for another year.</p>

                        <blockquote>
                            <p>Nyepi is a collective act of hiding in plain sight, a spiritual strategy on a national scale.</p>
                        </blockquote>

                        <p>For the Balinese people, Nyepi is a day for deep introspection, meditation, and fasting. It is a time to reflect on one's values and to start the new year with a clean slate. The silence is governed by four rules: no fire or light (Amati Geni), no working (Amati Karya), no traveling (Amati Lelunganan), and no entertainment or revelry (Amati Lelanguan). The result is a day of profound peace, where the only sounds are those of nature, and the sky, free from light pollution, reveals a breathtaking canopy of stars. It is a powerful reminder that sometimes, the most profound spiritual statements are made not with grand celebrations, but with absolute stillness.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
