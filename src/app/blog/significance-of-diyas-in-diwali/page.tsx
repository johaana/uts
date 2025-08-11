
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";


const post = {
    title: "The Significance of Diyas in Diwali",
    image: "https://i.postimg.cc/brM9vjDZ/Diya-diwali.webp",
    excerpt: "Discover the deep cultural and spiritual meaning behind lighting diyas during the festival of lights. From symbolizing the victory of good over evil to welcoming the goddess Lakshmi, the humble diya holds a universe of meaning."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-06-20').toISOString(),
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
        slug: "diwali",
        title: "Diwali Guide",
        image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg",
        type: "Festival",
        link: "/festivals/diwali",
        hint: "diwali celebration"
    },
    {
        slug: "ladoo",
        title: "Besan Ladoo Recipe",
        image: "https://i.postimg.cc/9MkWX5gm/Besan-Laddoo.webp",
        type: "Recipe",
        link: "/recipes/ladoo",
        hint: "gram flour ladoo"
    },
    {
        slug: "celebrate-with-conscience-eco-friendly-festivals",
        title: "Guide to Eco-Friendly Festivals",
        image: "https://i.postimg.cc/XNyGGLXt/eco-friendly.jpg",
        type: "Blog",
        link: "/blog/celebrate-with-conscience-eco-friendly-festivals",
        hint: "eco-friendly decor"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="diwali lamps" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on June 20, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <h2>The Symbolism of Light</h2>
                        <p>Discover the deep cultural and spiritual meaning behind lighting diyas during the festival of lights. The simple earthen lamp, or 'diya', is more than just a decorative item; it's a profound symbol in Hinduism, representing the triumph of light over darkness, good over evil, and knowledge over ignorance. Lighting a diya is an act of reverence and a prayer to dispel the darkness from our lives and minds.</p>

                        <h2>Welcoming Goddess Lakshmi</h2>
                        <p>Diwali is intrinsically linked with the worship of Goddess Lakshmi, the bestower of wealth and prosperity. It is believed that on the night of Diwali, the goddess visits the homes of her devotees. A clean, well-lit home is essential to welcome her. Rows of diyas are placed at the entrance, windows, and throughout the house not only to illuminate the path for the goddess but also to symbolize the inner light that one must kindle to receive her blessings. A brightly lit home is seen as a beacon for prosperity and auspiciousness.</p>

                        <h2>A Story from the Ramayana</h2>
                        <p>The tradition of lighting diyas is also tied to the epic Ramayana. Diwali celebrates the return of Lord Rama, his wife Sita, and his brother Lakshmana to their kingdom of Ayodhya after 14 years of exile and defeating the demon king Ravana. The people of Ayodhya, overjoyed by the return of their rightful king, illuminated the entire city with rows of earthen lamps. This grand celebration of homecoming is recreated every year, making the lighting of diyas a central part of the Diwali festivities.</p>
                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
