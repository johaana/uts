
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Thrissur Pooram: Kerala's Spectacle of Elephants and Percussion", 
    image: "https://i.postimg.cc/j28kQ9WT/thrissur-puram-festival-2.jpg",
    excerpt: "Experience the magic of Thrissur Pooram, a grand temple festival in Kerala featuring caparisoned elephants, traditional music, and a dazzling fireworks display."
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
        slug: "onam",
        title: "Onam Festival Guide",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Festival",
        link: "/festivals/onam",
        hint: "onam feast"
    },
    {
        slug: "vishu",
        title: "Vishu",
        image: "https://i.postimg.cc/7PdPNkMT/vishu-celebration.png",
        type: "Festival",
        link: "/festivals/vishu",
        hint: "vishu kani"
    },
    {
        slug: "thaipusam",
        title: "Thaipusam",
        image: "https://i.postimg.cc/4y7fTLZd/thaipusam.webp",
        type: "Festival",
        link: "/festivals/thaipusam",
        hint: "kavadi"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt="Thrissur Pooram" layout="fill" objectFit="cover" data-ai-hint="kerala temple festival" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on June 15, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <h2>The Mother of all Poorams</h2>
                        <p>Thrissur Pooram is the most spectacular and grandest of all temple festivals in Kerala. Held annually at the Vadakkunnathan Temple in Thrissur, this festival is a vibrant explosion of sight and sound, attracting a massive audience of locals and tourists. It's a day-long event that showcases the rich cultural and spiritual essence of Kerala in all its glory.</p>

                        <h2>A Friendly Rivalry</h2>
                        <p>The festival is essentially a friendly competition between two major temples in Thrissur – Paramekkavu and Thiruvambadi. Both temples compete to put on the most elaborate and impressive display, which is what makes the festival so magnificent.</p>

                        <h3>Key Highlights of Thrissur Pooram:</h3>
                        <ul>
                            <li><strong>Caparisoned Elephants:</strong> The most iconic image of the festival is the procession of majestic, richly caparisoned elephants. Each temple presents a row of 15 elephants, all adorned with golden head-dresses ('nettipattam'), decorative bells, and ornaments.</li>
                            <li><strong>Kudamattom:</strong> A highlight of the festival is the 'Kudamattom' ceremony, a rhythmic and colourful changing of sequined umbrellas held atop the elephants.</li>
                            <li><strong>Panchavadyam:</strong> The air is filled with the powerful and soul-stirring rhythm of the 'Panchavadyam', a traditional orchestra of five instruments. The 'Ilanjithara Melam', a performance by over 250 artists, is another major musical attraction.</li>
                            <li><strong>Fireworks Display:</strong> The festival culminates in a spectacular and dazzling fireworks display that lights up the night sky.</li>
                        </ul>
                        
                        <p>Thrissur Pooram is an unforgettable, magical experience that offers a fascinating glimpse into the rich cultural heritage of India. It's a must-see for anyone wanting to experience the grandeur of a traditional Indian festival.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
