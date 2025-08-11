
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

const post = { 
    title: "Losar Festival: Celebrating the Tibetan New Year in the Himalayas", 
    image: "https://i.postimg.cc/mDBXxRCR/losar-2.jpg",
    excerpt: "Discover the Losar festival, a vibrant celebration marking the Tibetan New Year with colorful rituals, music, and dance in Sikkim and Ladakh."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-06-10').toISOString(),
    authors: ['Utsavs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [post.image],
  },
};

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt="Losar Festival" layout="fill" objectFit="cover" data-ai-hint="ladakh festival" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on June 10, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <h2>Welcoming a New Beginning</h2>
                        <p>The Losar Festival is the most important celebration for Tibetan Buddhists in India, marking the beginning of their New Year. Celebrated with great fervor in regions like Ladakh, Sikkim, and Arunachal Pradesh, Losar is a vibrant 15-day festival that combines sacred rituals, traditional performances, and joyous family gatherings. The dates of the festival are determined by the lunar calendar, and it is a time for cleansing, renewal, and ushering in good fortune for the year ahead.</p>

                        <h2>Preparing for Prosperity</h2>
                        <p>Preparations for Losar begin weeks in advance. Homes are thoroughly cleaned and decorated with auspicious symbols to ward off evil spirits and welcome the new year. Old and unused items are discarded, symbolizing the letting go of the past. Lavish offerings, known as 'Lama Losar', are made at monasteries and home altars.</p>

                        <h3>The Rituals and Celebrations:</h3>
                        <ul>
                            <li><strong>Cham Dance:</strong> The festival's main attraction is the sacred masked dance, or 'Cham', performed by monks in monasteries. These dances narrate stories of the victory of good over evil and are accompanied by the powerful sounds of traditional instruments.</li>
                            <li><strong>Religious Offerings:</strong> The festival begins with prayers and religious offerings at monasteries, often led by senior lamas. Special prayers are offered to deities like Goddess Palden Lhamo, the supreme protector of Dharma.</li>
                            <li><strong>Community Feasting:</strong> Losar is a time for family and community. People visit each other, exchange greetings of "Tashi Delek", and share special festive foods like 'Guthuk' (a noodle soup) and 'Kapse' (fried pastries).</li>
                        </ul>
                        
                        <p>Experiencing the Losar festival is a unique opportunity to witness the rich cultural and spiritual traditions of the Himalayan region. It's a celebration that beautifully blends solemn ritual with exuberant joy, offering a memorable experience for any traveler.</p>
                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}
