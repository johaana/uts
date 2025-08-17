
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";

const post = { 
    title: "Bail Pola: A Heartfelt Tribute to the Farmer's Closest Ally", 
    image: "https://i.postimg.cc/BQsQGMnk/bail-pola3.webp",
    excerpt: "Discover Bail Pola, the unique festival where farmers in Maharashtra and Chhattisgarh honor their bulls with decorations, worship, and a day of rest to express gratitude."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-08-23').toISOString(),
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
        slug: "maad-festival-himachal-pradesh",
        title: "Maad Festival: Celebrating Livestock",
        image: "https://i.postimg.cc/VsJkRdHZ/animal-festival-maad.jpg",
        type: "Blog",
        link: "/blog/maad-festival-himachal-pradesh",
        hint: "himachal festival"
    },
    {
        slug: "puran-poli",
        title: "Puran Poli Recipe",
        image: "https://i.postimg.cc/jj8gBsCj/puranpoli.jpg",
        type: "Recipe",
        link: "/recipes/puran-poli",
        hint: "sweet flatbread"
    },
    {
        slug: "makar-sankranti",
        title: "Makar Sankranti",
        image: "https://i.postimg.cc/gJrdvSxD/makar-sankranti.jpg",
        type: "Festival",
        link: "/festivals/makar-sankranti",
        hint: "kites festival"
    }
];

export default function BailPolaPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="bull worship" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on August 23, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>In the agricultural heartlands of India, particularly in states like Maharashtra, Chhattisgarh, and Madhya Pradesh, the bond between a farmer and their bull is sacred. The Bail Pola festival is a beautiful and heartfelt expression of this bond—a day dedicated to honoring and thanking the bulls for their tireless labor in the fields. Celebrated on the new moon day (Amavasya) of the Bhadrapada month, this festival is a vital part of the cultural and agricultural calendar, reflecting deep-rooted gratitude and respect for these indispensable animal partners.</p>

                        <h3>The Rituals of Reverence</h3>
                        <p>The preparations for Bail Pola begin a day in advance. The bulls, who are the backbone of the farm, are given a complete day of rest. Their ropes are untied, and they are given a special massage with turmeric, ubtan (a traditional paste), and oil. On the day of the festival, the bulls are bathed and meticulously decorated. Their horns are painted, and they are adorned with colorful clothes, flower garlands, and jingling bells. This transformation turns the hardworking animals into revered deities for a day.</p>
                        
                        <p>Once decorated, the farmers perform a puja, worshipping the bulls with the same devotion as they would a god. An aarti is performed, and they are fed special festive food, including classics like Puran Poli and other sweets. In many villages, a joyful procession of the decorated bulls is taken out, and friendly bull decoration competitions are organized, making it a true community celebration.</p>
                        
                        <div className="my-8 flex justify-center">
                            <Image src="https://i.postimg.cc/T34wL1S4/Bail-Pola-Festival-4.jpg" width={600} height={400} alt="Decorated bull for Bail Pola" className="rounded-lg shadow-lg" data-ai-hint="decorated bull"/>
                        </div>

                        <h3>A Mythological Connection</h3>
                        <p>According to mythology, the festival is also linked to an event in Lord Krishna's life. It is said that when Krishna was young, his evil uncle, King Kansa, sent a demon named Polasur in the guise of a bull to kill him. Krishna, recognizing the demon, promptly defeated him. The day was named Pola in honor of this event, solidifying its place in the cultural and spiritual landscape.</p>

                        <blockquote>
                            <p>Bail Pola is more than just a festival; it is a tribute to the invaluable contribution of bulls in agriculture, reinforcing the principles of gratitude, community unity, and cultural pride.</p>
                        </blockquote>

                        <h3>A Celebration of Harmony</h3>
                        <p>While modern technology is changing agricultural practices, festivals like Bail Pola serve as a powerful reminder of the traditional Indian ethos of living in harmony with nature and respecting all forms of life. It’s a day when the farmer celebrates his most trusted partner, acknowledging the labor and loyalty that helps sustain his family and community. The festival beautifully intertwines social harmony, family unity, and a deep, abiding respect for the animals that have served humanity for centuries.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
