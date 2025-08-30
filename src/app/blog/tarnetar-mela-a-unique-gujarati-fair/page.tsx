
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
    title: "The Swayamvara of the 21st Century: Inside Gujarat's Tarnetar Matchmaking Fair", 
    image: "https://i.postimg.cc/N0qYH9q4/tarnetar-mela.jpg",
    excerpt: "Explore the Tarnetar Mela, a colorful fair where tribal youth find life partners amidst folk dance, music, and the echo of an ancient matchmaking tradition."
};

const relatedContent: RelatedItem[] = [
    {
        slug: "navratri",
        title: "Navratri",
        image: "https://i.postimg.cc/Zn3Rzsz8/navratri1.jpg",
        type: "Festival",
        link: "/festivals/navratri",
        hint: "garba dance"
    },
    {
        slug: "janmashtami",
        title: "Janmashtami",
        image: "https://i.postimg.cc/02VhD2Jk/janmashtami.jpg",
        type: "Festival",
        link: "/festivals/janmashtami",
        hint: "krishna idol"
    },
    {
        slug: "holi",
        title: "Holi",
        image: "https://i.postimg.cc/0276MjRN/Holi.jpg",
        type: "Festival",
        link: "/festivals/holi",
        hint: "holi celebration"
    }
];

export default function SingleBlogPage() {
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
                <Image src={post.image} alt="Tarnetar Mela" layout="fill" objectFit="cover" data-ai-hint="gujarat fair" className="rounded-lg"/>
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

                        <p>In an age of dating apps and matrimonial websites, there exists a corner of India where romance still follows the rhythm of ancient tradition. Welcome to the Tarnetar Mela, one of Gujarat's most vibrant and colorful fairs. On the surface, it’s a celebration of folk music, dance, and culture. But at its heart, it is a grand matchmaking event for the region's tribal youth, a living, breathing 'swayamvara' where life partners are chosen amidst joyous celebration.</p>

                        <h3>The Language of the Umbrellas</h3>
                        <p>The fair is a sensory explosion, but its most unique feature is the language of courtship. The young men from pastoral tribes like the Bharwads and Rabaris come dressed in their finest traditional attire—colorful dhotis, embroidered jackets, and elaborate turbans. But their most important accessory is the umbrella. These are not ordinary umbrellas; they are masterpieces of embroidery and mirror work, each a unique testament to the artisan's skill. The men spend the year crafting these beautiful umbrellas, which they carry with flair at the fair. The umbrella is a bachelor's billboard, a vibrant signal of his eligibility and a tool to attract the attention of prospective brides.</p>
                        
                        <p>The women, in their stunningly embroidered ghagras, also have a silent language. A red skirt often signifies that she is available for marriage, while a black one means she is already married. The fair becomes a space where glances are exchanged, and interest is expressed through these subtle, artistic cues. If a woman shows interest, she will approach the man, initiating a conversation that could lead to a lifetime together. The tradition gives women significant agency in choosing their partners, a progressive custom rooted in ancient practice.</p>

                        <h3>More than Matchmaking</h3>
                        <p>While the matchmaking is central, the Tarnetar Mela is a grand cultural event. The air thrums with the incessant beat of drums as people perform the energetic Garba and the circular Raas dance. There are rural sports, cattle shows, and bustling stalls selling local handicrafts. The fair is also linked to the Trinetreshwar Temple, believed to be the site where the epic hero Arjuna won Draupadi's hand in a swayamvara by performing an incredible feat of archery. The festival beautifully intertwines mythology, romance, and community, making it one of India's most fascinating cultural experiences.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
