
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Gods, Guts, and Glory: A Journey into the World's Most Extreme Festivals", 
    image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
    excerpt: "From walking on fire to being pelted with fireworks, some festivals push the boundaries of human endurance. We explore the world's most extreme rituals and the profound faith that fuels them."
};

export const metadata: Metadata = {
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

const relatedContent: RelatedItem[] = [
    {
        slug: "thaipusam",
        title: "The Burden of Faith: Unpacking Thaipusam",
        image: "https://i.postimg.cc/cJbJfPhR/thaipusam.webp",
        type: "Festival",
        link: "/festivals/thaipusam",
        hint: "kavadi"
    },
    {
        slug: "theemithi",
        title: "A Walk Through Fire: The Story of Theemithi",
        image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
        type: "Festival",
        link: "/festivals/theemithi",
        hint: "fire walking"
    },
    {
        slug: "kumbh-mela-a-dip-in-immortality",
        title: "Kumbh Mela: A Spiritual Gathering",
        image: "https://i.postimg.cc/ncg3FqB3/kumbh-mela-2.jpg",
        type: "Blog",
        link: "/blog/kumbh-mela-a-dip-in-immortality",
        hint: "kumbh mela pilgrimage"
    }
];

export default function ExtremeFestivalsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="fire walking" className="rounded-lg"/>
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

                        <p>Around the world, faith is not always a quiet, contemplative affair. Sometimes, it is a raw, visceral, and breathtaking display of human endurance. Some cultural and religious festivals push the boundaries of the body and mind, involving rituals that seem impossible to the outside observer. From walking on fire to enduring physical pain, these extreme festivals are not about self-harm; they are profound expressions of devotion, penance, and a belief system so powerful it transcends physical limitations. Let's journey into some of the world's most intense celebrations.</p>

                        <h3><Link href="/festivals/thaipusam" className="text-accent">Thaipusam:</Link> The Burden of Devotion</h3>
                        <p>In a stunning display of faith, Tamil Hindu devotees during Thaipusam offer their bodies as a canvas of penance to Lord Murugan. The iconic 'Kavadi Aattam' (Burden Dance) involves carrying elaborate structures, often pierced directly into the skin with hooks and skewers. Devotees enter a trance-like state, believing that their faith will shield them from pain. It's a powerful and visceral act of surrendering the physical self to the divine.</p>

                        <h3><Link href="/festivals/theemithi" className="text-accent">Theemithi:</Link> A Walk Through Fire</h3>
                        <p>To honor the goddess Draupadi, devotees in South India and Singapore walk barefoot across a long pit of burning embers. This is Theemithi, the fire-walking festival. It reenacts the moment from the Mahabharata where Draupadi proved her purity by walking through fire, emerging unharmed. For modern devotees, it is an ultimate test of faith—a belief that their own purity and devotion will protect them from the flames.</p>
                        
                        <div className="my-8 flex justify-center">
                             <Image src="https://i.postimg.cc/5yrkPw0H/Krampusnacht.avif" alt="Krampusnacht" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="krampus"/>
                        </div>
                        <h3><Link href="/festivals/krampusnacht" className="text-accent">Krampusnacht:</Link> The Night of the Demon</h3>
                        <p>In Austria and parts of Germany, the festive cheer of Christmas is preceded by a night of terror. On Krampusnacht, men dress as Krampus, a horned, demonic creature from Alpine folklore who is said to punish naughty children. They roam the streets with chains and bells, creating a genuinely frightening spectacle. It's a folk tradition that represents the darker, pre-Christian roots of winter celebrations, a way to confront and ward off the darkness of the long winter nights.</p>
                        
                         <div className="my-8 flex justify-center">
                            <Image src="https://i.postimg.cc/j5Z1fVY4/Hadaka-Matsuri.jpg" alt="Hadaka Matsuri" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="naked festival"/>
                        </div>
                        <h3><Link href="/festivals/hadaka-matsuri" className="text-accent">Hadaka Matsuri:</Link> The Naked Festival</h3>
                        <p>In Japan, thousands of men, wearing only traditional loincloths, brave freezing temperatures to participate in Hadaka Matsuri. They jostle and fight to touch a "spirit man" or catch sacred wooden sticks thrown by priests. The belief is that by doing so, they can transfer all their bad luck and gain a year of happiness. It's a chaotic, intense, and deeply communal ritual of purification.</p>

                        <blockquote>
                            <p>These festivals, while shocking to some, are a testament to the incredible power of belief. They show that for many, faith is not just something to be felt, but something to be experienced with every fiber of one's being.</p>
                        </blockquote>

                        <p>These rituals challenge our modern sensibilities, but they also offer a profound glimpse into a world where the spiritual and physical are deeply intertwined, and where surrendering to a higher power can lead to a powerful sense of liberation and glory.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
