
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Astrology of Festivals: How Planetary Alignments Dictate Hindu Holy Days", 
    image: "https://i.postimg.cc/6QW6958g/astrology-festivals.jpg",
    excerpt: "Why is Diwali tied to the new moon, while Holi is on a full moon? This deep dive explores the fascinating logic of the Hindu lunisolar calendar and how cosmic events shape the spiritual calendar."
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
        slug: "makar-sankranti",
        title: "Makar Sankranti",
        image: "https://i.postimg.cc/gJrdvSxD/makar-sankranti.jpg",
        type: "Festival",
        link: "/festivals/makar-sankranti",
        hint: "kites festival"
    },
    {
        slug: "diwali",
        title: "Diwali",
        image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg",
        type: "Festival",
        link: "/festivals/diwali",
        hint: "diwali celebration"
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

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="zodiac calendar" className="rounded-lg"/>
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

                        <p>Have you ever wondered why Hindu festival dates seem to shift every year in the Western Gregorian calendar? Why is Diwali always on a new moon night, while Holi is celebrated under the full moon? This isn't random; it's a beautifully precise system. The Hindu festival calendar is a masterpiece of ancient science, a sophisticated 'Panchang' (almanac) based on a lunisolar system that intricately weaves together the movements of the sun and the moon. This is not just timekeeping; it's a way of aligning human life and spiritual practice with the grand rhythms of the cosmos.</p>

                        <h3>Solar vs. Lunar: The Two Great Rhythms</h3>
                        <p>To understand the festival calendar, one must first understand its two main components:</p>
                        <ul>
                            <li><strong>The Solar Calendar:</strong> This is based on the sun's journey through the zodiac signs. When the sun enters a new zodiac sign (a 'Rashi'), it's called a 'Sankranti'. The most famous of these is <Link href="/festivals/makar-sankranti" className="text-accent hover:underline">Makar Sankranti</Link>, which marks the sun's entry into Capricorn. Because it's purely solar, it falls on a relatively fixed date in the Gregorian calendar (January 14th or 15th).</li>
                            <li><strong>The Lunar Calendar:</strong> This is based on the phases of the moon. A lunar month is the time it takes for the moon to orbit the earth (about 29.5 days). Each month is divided into two fortnights: the 'Shukla Paksha' (waxing moon, from new moon to full moon) and the 'Krishna Paksha' (waning moon, from full moon back to new moon). Most Hindu festivals are timed according to the lunar 'tithi' (day).</li>
                        </ul>
                        <p>The Hindu calendar brilliantly reconciles these two by adding an extra month ('Adhik Maas') every 2.5 to 3 years, ensuring that festivals stay anchored to their appropriate seasons.</p>

                        <h3>Cosmic Timings: Why Festivals Happen When They Do</h3>
                        
                        <h4><Link href="/festivals/diwali" className="text-accent hover:underline">Diwali</Link>: The Darkest Night for the Brightest Light</h4>
                        <p>Diwali falls on the 'Amavasya' (new moon) of the month of Kartik. This is the darkest night of the month. The spiritual symbolism is profound: it is on this darkest night that millions of diyas are lit, symbolizing the power of light to overcome spiritual darkness and ignorance. It's a collective act of illuminating the world when it is cosmically at its darkest, signifying the triumph of good over evil.</p>
                        
                        <h4><Link href="/festivals/holi" className="text-accent hover:underline">Holi</Link>: The Full Moon of Joy and Release</h4>
                        <p>In contrast, Holi is celebrated on the 'Purnima' (full moon) of the month of Phalguna. The full moon is traditionally associated with heightened emotions, celebration, and culmination. Holi, being a festival of catharsis and joyous release, is perfectly timed to this lunar peak. The bonfire of Holika Dahan on the eve of Holi also gains significance under the bright light of the full moon.</p>

                        <blockquote>
                            <p>The Hindu calendar is not just about marking time; it's about marking sacred time, aligning human consciousness with the celestial energies of the sun, moon, and planets.</p>
                        </blockquote>

                        <h4>Kumbh Mela: A Rare Planetary Alignment</h4>
                        <p>The timing of the <Link href="/blog/kumbh-mela-a-dip-in-immortality" className="text-accent hover:underline">Kumbh Mela</Link>, the largest spiritual gathering on Earth, is determined by a much rarer and more complex set of astrological calculations. It depends on the specific positions of Jupiter, the Sun, and the Moon in different zodiac signs. For example, the Maha Kumbh Mela at Prayagraj occurs when Jupiter is in Aries or Taurus and the Sun and Moon are in Capricorn. This precise alignment, happening only once every 12 years, is believed to energize the waters of the sacred rivers, creating an exceptionally auspicious time for a spiritual dip.</p>

                        <p>This cosmic connection shows that Hindu festivals are not just arbitrary dates on a calendar. They are a living tradition, a sophisticated system designed by ancient sages to connect human life with the rhythms of the universe, turning celestial events into moments of profound spiritual significance.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
