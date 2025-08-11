
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Cracking the Code: Why Do We Break Coconuts in Hindu Rituals?", 
    image: "https://i.postimg.cc/dVF0D97h/coconut.webp",
    excerpt: "Uncover the deep spiritual symbolism behind the common practice of breaking a coconut. From shattering the ego to its representation as the 'fruit of the gods,' explore the meaning of this sacred act."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-08-11').toISOString(),
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
        slug: "ganesh-chaturthi",
        title: "Ganesh Chaturthi",
        image: "https://i.postimg.cc/SNGxJ8VJ/ganesh-chaturthi-festival.jpg",
        type: "Festival",
        link: "/festivals/ganesh-chaturthi",
        hint: "ganesha idol"
    },
    {
        slug: "home-puja-guide-for-beginners",
        title: "A Beginner's Guide to Home Puja",
        image: "https://i.postimg.cc/brM9vjDZ/Diya-diwali.webp",
        type: "Blog",
        link: "/blog/home-puja-guide-for-beginners",
        hint: "home altar"
    },
    {
        slug: "narali-purnima",
        title: "Narali Purnima",
        image: "https://i.postimg.cc/4xz5DrcR/Narali-purnima.avif",
        type: "Festival",
        link: "/festivals/narali-purnima",
        hint: "coconut offering sea"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="coconut ritual" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on August 11, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>From inaugurating a new business to starting a journey or celebrating a festival, the act of breaking a coconut is a familiar and integral part of many Hindu rituals. But have you ever wondered about the meaning behind this powerful practice? Smashing a coconut is not a random superstition; it is a profound symbolic act, deeply rooted in Hindu philosophy and tradition. Let's delve into the layers of meaning behind this sacred ritual.</p>

                        <h3>The Symbol of the Ego</h3>
                        <p>The most important philosophical interpretation of breaking a coconut is its representation of shattering the human ego. In Hindu thought, the ego ('ahamkara') is seen as the primary obstacle to self-realization and connecting with the divine. The hard, outer shell of the coconut represents this rigid ego, our false identification with our body, our achievements, and our material possessions.</p>
                        <p>By smashing the coconut before a deity, a devotee is symbolically offering up their ego at the feet of the divine. It is an act of complete surrender, a powerful prayer that says, "I break my false self and my ignorance, so that the purity within me may be revealed." The breaking of the coconut signifies the destruction of one's ego and the humble submission to a higher power.</p>

                        <h3>The Three Eyes and Inner Purity</h3>
                        <p>The coconut itself is seen as a symbol of our being. The hard shell represents the physical body, the white flesh (copra) inside symbolizes the mind and inner purity, and the water held within represents our innate spiritual consciousness or soul. The three marks on the coconut are often likened to the three eyes of Lord Shiva, representing the inner eye of wisdom or intuition.</p>
                        <p>When the coconut is broken, the sweet, pure water is released, symbolizing the devotee's pure intentions and the divine blessings that flow from a surrendered ego. The white flesh is then often distributed as prasad, representing the sharing of these divine blessings with the community.</p>

                        <h3>The "Fruit of the Gods" and a Pure Offering</h3>
                        <p>Historically, ancient Hindu traditions sometimes involved animal sacrifice. It is widely believed that the great sage Adi Shankaracharya, a social reformer, advocated for the practice of offering a coconut to the deities as a humane and symbolic alternative. The coconut, being a 'fruit' and not a living creature, was seen as a pure or 'sattvic' offering.</p>
                        <p>Unlike other fruits, a coconut's water is sealed away from the outside world, considered pure and untouched. This makes it a worthy offering for the gods, symbolizing a pure and unblemished heart offered by the devotee. It also represents the human head, with the husk as hair, the hard shell as the skull, and the water as blood. Offering a coconut thus became a symbolic offering of oneself without actual sacrifice.</p>
                        
                        <blockquote>
                            <p>The next time you witness a coconut being broken in a puja, you'll know it's more than just a tradition. It is a powerful, physical prayer—an act of humility, surrender, and the quest for inner purity.</p>
                        </blockquote>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
