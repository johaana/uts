
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Step Back in Time: 3 Royal Festivals You Can Still Experience Today", 
    image: "https://i.postimg.cc/s26f6dTW/royal-festivals.webp",
    excerpt: "Step back in time and witness the grandeur of royal festivals that continue to thrive. Explore the history and modern-day spectacle of celebrations like the Mysore Dasara and Jaipur's Holi."
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
        slug: "dussehra",
        title: "Dussehra",
        image: "https://i.postimg.cc/wMVZW9fk/dussehra.jpg",
        type: "Festival",
        link: "/festivals/dussehra",
        hint: "dussehra celebration"
    },
    {
        slug: "holi",
        title: "Holi",
        image: "https://i.postimg.cc/0276MjRN/Holi.jpg",
        type: "Festival",
        link: "/festivals/holi",
        hint: "holi celebration"
    },
    {
        slug: "bastar-dussehra",
        title: "Bastar Dussehra",
        image: "https://i.postimg.cc/wMVZW9fk/dussehra.jpg",
        type: "Festival",
        link: "/festivals/bastar-dussehra",
        hint: "dussehra celebration"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="royal festival" className="rounded-lg"/>
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

                        <p>India's history is rich with the stories of maharajas, sultans, and emperors. While the era of princely states has passed, many of their magnificent traditions and grand celebrations continue to this day, offering a mesmerizing glimpse into a world of regal splendor. These festivals, still patronized by the former royal families, preserve ancient rituals and showcase a level of pageantry that is truly breathtaking. Here are some of the most spectacular royal celebrations that you can still witness in modern India.</p>

                        <h3>1. Mysore Dasara, Karnataka</h3>
                        <p>The Dasara festival in Mysore is arguably the most magnificent royal celebration in India. With a history spanning over 400 years, this 10-day festival was started by the Wadiyar kings in the 17th century after they took over the Srirangapatna fort. While <Link href="/festivals/dussehra" className="text-accent">Dasara</Link> is celebrated across India, the Mysuru Dasara is a state festival ('Nadahabba') of Karnataka and retains its royal essence. The entire Mysore Palace is illuminated with nearly 100,000 light bulbs, creating a breathtaking sight. The highlight is the 'Jumboo Savari', a grand procession on Vijayadashami (the 10th day) featuring decorated elephants, camels, horses, and cultural troupes. The lead elephant carries a golden howdah weighing over 750 kg with the idol of the Goddess Chamundeshwari. The current scion of the Wadiyar dynasty still performs private rituals within the palace, maintaining the continuity of this royal tradition.</p>

                        <h3>2. Holi at the City Palace, Jaipur, Rajasthan</h3>
                        <p>The Holi celebrations hosted by the erstwhile royal family of Jaipur offer a truly regal experience. While the public celebrations in Jaipur are vibrant and famous, the royal family holds a special, traditional celebration at the City Palace. A day before <Link href="/festivals/holi" className="text-accent">Holi</Link>, they participate in the 'Holika Dahan' ritual, lighting a sacred bonfire in the palace courtyard. The event is attended by dignitaries and guests, and it's a beautiful blend of religious ritual and royal pageantry. This event helps preserve the age-old customs of the Kachwaha dynasty and offers a more serene and elegant counterpoint to the boisterous public celebrations.</p>

                        <h3>3. <Link href="/festivals/bastar-dussehra" className="text-accent">Bastar Dussehra, Chhattisgarh</Link></h3>
                        <p>Unique and fascinating, Bastar Dussehra is the world's longest festival, spanning an incredible 75 days. Unlike Dasara in other parts of India, it is not about celebrating Lord Rama's victory over Ravana. Instead, this tribal festival is dedicated to Goddess Danteshwari, the presiding deity of the Bastar region. The festival was started in the 15th century by the Kakatiya ruler King Purushottam Deo. The erstwhile royal family of Bastar continues to be the main patron of the festival. The rituals are a fascinating blend of tribal and Hindu customs, with the highlight being a massive, double-decked chariot pulled by hundreds of people, on which the titular king sits, signifying his role as the chief servitor of the goddess.</p>
                        
                        <h3>4. Teej Festival Procession, Jaipur, Rajasthan</h3>
                        <p>The <Link href="/festivals/teej" className="text-accent">Teej</Link> festival, celebrating the monsoon and marital bliss, is marked by a spectacular procession in Jaipur that has royal origins. The festival is dedicated to Goddess Teej Mata (Parvati). During the procession, a beautifully decorated idol of the goddess is taken from the City Palace through the streets of the old city. The procession includes caparisoned elephants, bullock carts, and chariots, with folk dancers and musicians adding to the festive fervor. The royal family of Jaipur has been the patron of this procession for centuries, and it continues to be one of the city's most cherished cultural events.</p>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
