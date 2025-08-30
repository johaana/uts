
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "The God Who Lives in Exile: Why Jagannath Leaves His Temple for a Week Every Year", 
    image: "https://i.postimg.cc/CxxzZ0Nb/jagannath.webp",
    excerpt: "Every year, the Lord of the Universe leaves his magnificent, mystery-filled temple to travel on a wooden chariot. This is the story of the Rath Yatra, a divine journey of exile and reunion."
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
        slug: "rath-yatra",
        title: "Rath Yatra Festival Guide",
        image: "https://i.postimg.cc/kXC7f44W/rath-yatra.jpg",
        type: "Festival",
        link: "/festivals/rath-yatra",
        hint: "chariot festival"
    },
    {
        slug: "famous-prasads-and-their-stories",
        title: "The Stories Behind India's Most Famous Temple Foods",
        image: "https://i.postimg.cc/K858TgLJ/tirupati-laddu.jpg",
        type: "Blog",
        link: "/blog/famous-prasads-and-their-stories",
        hint: "temple food"
    },
    {
        slug: "dussehra",
        title: "Dussehra",
        image: "https://i.postimg.cc/wMVZW9fk/dussehra.jpg",
        type: "Festival",
        link: "/festivals/dussehra",
        hint: "dussehra celebration"
    }
];

export default function TheGodWhoLivesInExilePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="jagannath idol" className="rounded-lg"/>
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

                        <p>The Jagannath Temple in Puri is a place that sits at the very edge of human understanding. It is a structure that seems to gently bend the laws of physics. The flag atop its 65-metre spire inexplicably flutters in the opposite direction of the wind. The colossal Sudarshan Chakra at its peak appears to face you, no matter where you stand in the city. The main dome casts no shadow at any time of day. Birds do not fly over it. And the roar of the nearby Bay of Bengal, just steps away, falls silent the moment you step inside the Lion Gate. In its kitchen—the largest in the world—the amount of food cooked in earthen pots has, for centuries, perfectly matched the number of devotees, never wasting a single grain.</p>
                        
                        <p>This is a place of profound, living mystery. A house built for a god who defies logic. Which raises an even more profound question: why would this god, the Lord of the Universe, choose to leave such a magnificent home every single year?</p>
                        
                        <p>This is the story of the Rath Yatra, the Festival of Chariots. It is not just a procession; it is the story of a divine exile, a celestial journey undertaken by Lord Jagannath, his brother Balabhadra, and sister Subhadra. Every year, they leave their enigmatic temple to travel on colossal, newly built wooden chariots to the Gundicha Temple, considered their maternal aunt's home. For nine days, the deities live among the people, away from the grandeur of their own home.</p>

                        <blockquote>
                            <p>The Rath Yatra is a powerful statement: that God is not a distant, static entity confined to a sanctum, but a dynamic, compassionate being who will traverse any distance to be with his devotees.</p>
                        </blockquote>

                        <h3>The Journey of Humility</h3>
                        <p>The festival's origins are rooted in the idea of equality. Not everyone is permitted inside the main temple complex. The Rath Yatra is the one time of year when the deities come out for all to see, breaking down all barriers of caste, creed, and religion. It is believed that even a single touch of the chariot ropes is an act of immense piety, capable of cleansing lifetimes of sin. Millions converge on Puri for this very purpose—to pull their gods with their own hands, to serve them, and to be in their presence.</p>
                        
                        <h3>The Secret of Nabakalebara</h3>
                        <p>The mysterious nature of the deities themselves adds another layer to the story. Unlike most Hindu idols, the figures of Jagannath, Balabhadra, and Subhadra are carved from sacred neem wood. Every 8 to 19 years, an ancient and secret ritual called 'Nabakalebara' takes place. The old idols are buried, and new ones are carved in a process shrouded in mystery. The most sacred part, the 'Brahma Padartha' or divine life-force, is transferred from the old idols to the new by blindfolded priests in the dead of night. No one knows what this object is, only that it is the very soul of the deities.</p>
                        
                        <p>Perhaps, then, the annual journey of the Rath Yatra is a reminder of this cyclical nature. The gods, too, must undergo change, renewal, and even a form of exile. Their journey to their aunt's home is a divine holiday, a return to a simpler, more rustic existence before their grand return to the temple. It teaches a profound lesson that no matter how powerful or divine, the journey itself—the act of moving, changing, and connecting with the world—is an essential part of existence.</p>
                        
                        <p>The Rath Yatra is more than a festival. It is a complex theological drama played out on the streets of Puri, a story of a mysterious god who resides in a miraculous temple but chooses, once a year, to become one with the masses, pulled not by celestial power, but by the raw, unyielding force of human devotion.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
