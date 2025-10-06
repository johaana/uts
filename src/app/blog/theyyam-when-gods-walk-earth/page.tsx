
import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { BookOpen, MessageSquareQuote, Drama } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

const post = { 
    title: "When Gods Walk the Earth: The Ancient Ritual of Theyyam", 
    image: "https://i.postimg.cc/HW7r9WfV/Theyyam.jpg",
    excerpt: "Explore the ancient ritual of Theyyam, where men transform into gods in a stunning display of devotion, art, and tradition that bridges the gap between the human and the divine."
};

const relatedContent: RelatedItem[] = [
    {
        slug: "extreme-festivals-of-the-world",
        title: "Gods, Guts, and Glory: The World's Most Extreme Festivals",
        image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
        type: "Blog",
        link: "/blog/extreme-festivals-of-the-world",
        hint: "fire walking"
    },
    {
        slug: "thaipusam",
        title: "The Burden of Faith: Unpacking Thaipusam",
        image: "https://i.postimg.cc/cJbJfPhR/thaipusam.webp",
        type: "Festival",
        link: "/festivals/thaipusam",
        hint: "kavadi"
    },
     {
        slug: "onam",
        title: "Onam",
        image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
        type: "Festival",
        link: "/festivals/onam",
        hint: "onam feast"
    }
];

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [post.image],
  },
};

export default function TheyyamBlogPage() {

    return (
        <div className="bg-background">
             <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                    <Image src={post.image} alt="Theyyam festival" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="theyyam dancer" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">{post.title}</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">The Divine Dance of Kerala</p>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                       <article className="prose max-w-none text-foreground/80">
                            <p>In the vibrant, lush landscapes of Northern Kerala, a sacred drama unfolds that defies the boundaries between the mortal and the divine. This is Theyyam, an ancient and powerful ritual where for a few intense hours, a man ceases to be human. Adorned in spectacular costumes and otherworldly makeup, he becomes a living vessel for a god, his body a conduit for cosmic energy. The community gathers not to watch a performance, but to witness a divine visitation, to speak to their gods, seek blessings, and find justice.</p>
                            <p>With a pantheon of over 450 distinct Theyyams—from fierce goddesses and epic heroes to ancestral spirits and animal deities—this 'dance of the gods' is the pulsating heart of Malabar's village life. Celebrated annually between December and April, it's a raw, visceral form of worship that offers a rare and profound glimpse into a world where the sacred is made manifest. For more such stories, see our guide to the <Link href="/blog/extreme-festivals-of-the-world" className="text-accent hover:underline">world's most extreme festivals</Link>.</p>
                            
                            <h3>The Divine Transformation</h3>
                            <p>The transformation of the performer is a meticulous and sacred process. The artist, who invariably belongs to a specific lower-caste community, undergoes weeks of intense spiritual and physical preparation. This includes strict fasting, prayer, and a deep meditation on the deity he is to embody. The makeup and costume are incredibly elaborate and symbolic. The face becomes a canvas for intricate designs drawn with natural pigments, erasing the human features beneath. The headgear ('mudi') can be toweringly large, a complex structure of bamboo and cloth that seems to touch the heavens.</p>
                            <p>As the ritual begins, to the hypnotic and thunderous rhythm of the 'chenda' (drum) and other traditional instruments, the dancer enters the sacred space. The dance starts slowly, a gradual shedding of the mortal coil, building in intensity until he enters a trance-like state—the divine possession. At this sacred moment, he is no longer a man; he *is* the god. He moves with divine authority, speaks with a divine voice, offering prophecies, arbitrating disputes, and giving comfort to the devotees who approach with awe and reverence. Some Theyyams perform astonishing acts, like walking on fire, as a testament to the divine power they now channel.</p>

                            <h3>A Social and Spiritual Bridge</h3>
                            <p>Theyyam is not just a spiritual event; it is a powerful socio-political act. The fact that the performers are from marginalized communities gives them a temporary but absolute spiritual authority. For a few days, a man considered 'low-caste' becomes the mouthpiece of a god, worshipped and revered by all, including those from the highest castes. This ritualistic inversion of the social hierarchy is a form of social justice, a powerful and visceral reminder that divinity resides in all people, regardless of birth or status. It is a living, breathing tradition that continues to be a vital cultural and spiritual force in Kerala.</p>
                       </article>
                       <ShareButtons title={post.title} />
                       <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
