
import type { Metadata } from 'next';
import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import Image from "next/image";
import Link from 'next/link';

const post = { 
    title: "A Walk Through Fire: How an Ancient Queen's Trial by Fire Became a Modern Festival", 
    image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
    excerpt: "To honor the goddess Draupadi, devotees walk barefoot across burning embers. The story of how her trial by fire became a modern festival is astounding."
};

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

const relatedContent: RelatedItem[] = [
    {
        slug: "extreme-festivals-of-the-world",
        title: "Gods, Guts, and Glory: A Journey into the World's Most Extreme Festivals",
        image: "https://i.postimg.cc/Hx8kz3vf/theemithi.jpg",
        type: "Blog",
        link: "/blog/extreme-festivals-of-the-world",
        hint: "fire walking"
    },
    {
        slug: "thaipusam",
        title: "The Burden of Faith: Unpacking Thaipusam's Intense Rituals",
        image: "https://i.postimg.cc/cJbJfPhR/thaipusam.webp",
        type: "Festival",
        link: "/festivals/thaipusam",
        hint: "kavadi"
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

export default function TheemithiPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="overflow-hidden shadow-xl">
                    <div className="relative h-64 md:h-[50vh] w-full">
                        <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="fire walking" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 p-6 md:p-10">
                            <h1 className="font-headline text-4xl md:text-6xl text-white font-bold drop-shadow-lg">{post.title}</h1>
                        </div>
                    </div>
                    <CardContent className="p-6 md:p-10">
                        <article className="prose max-w-none text-foreground/80">
                            <p>The Theemithi, or Fire-Walking Festival, is a dramatic and awe-inspiring Hindu festival originating from Tamil Nadu, India, and celebrated with immense fervor in Singapore, Sri Lanka, and other countries with large Tamil populations. The festival is held in honor of the goddess Draupadi, the powerful heroine of the epic Mahabharata and the wife of the five Pandava brothers. It reenacts a pivotal moment from the epic, where Draupadi, to prove her purity and innocence after the devastating Kurukshetra war, walks barefoot across a bed of burning embers and emerges completely unscathed. This miraculous act is seen as the ultimate testament to her virtue and the protective power of unwavering faith.</p>
                            
                            <p>Her story is one of immense resilience. The Theemithi festival celebrates her power, purity, and the idea that true devotion can overcome even the most daunting trials. You can read more about other such intense displays of faith in our <Link href="/blog/extreme-festivals-of-the-world" className="text-accent hover:underline">guide to extreme festivals</Link>.</p>
                            
                            <h3>A Path of Embers: The Ritual</h3>
                            <p>Theemithi is the culmination of weeks of fasting, prayer, and purification for the devotees who have made a vow to participate. The main event involves the creation of a large fire pit, several meters long, filled with burning charcoal. The chief priest is the first to walk across this fiery path, carrying a sacred pot on his head. He is followed by dozens, sometimes hundreds, of male devotees. They walk calmly and deliberately across the embers, their faces showing intense concentration and faith, before stepping into a pool of milk to cool their feet. It is a powerful and visceral performance of devotion, a belief that their purity and faith will protect them from the flames, just as it protected Draupadi.</p>
                        </article>
                        <ShareButtons title={post.title} />
                        <RelatedContent items={relatedContent} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
