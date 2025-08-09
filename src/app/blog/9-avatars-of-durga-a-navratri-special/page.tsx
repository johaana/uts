
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

const post = {
    title: "The 9 Avatars of Durga: A Navratri Special",
    image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg",
    excerpt: "Explore the nine powerful forms of Goddess Durga worshipped during the nine nights of Navratri. Each avatar has a unique story and significance, representing a different aspect of the divine feminine."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
  },
  twitter: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [post.image],
  },
};

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="garba dance" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on July 01, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Explore the nine powerful forms of Goddess Durga worshipped during the nine nights of Navratri. Each avatar has a unique story and significance, representing a different aspect of the divine feminine.</p>

                        <ul>
                            <li><strong>Day 1: Shailaputri</strong> - Daughter of the Mountains, representing nature and purity.</li>
                            <li><strong>Day 2: Brahmacharini</strong> - The ascetic, representing devotion and penance.</li>
                            <li><strong>Day 3: Chandraghanta</strong> - Bearer of the half-moon, representing beauty and bravery.</li>
                            <li><strong>Day 4: Kushmanda</strong> - The creator of the universe, representing cosmic energy.</li>
                            <li><strong>Day 5: Skandamata</strong> - Mother of Skanda (Kartikeya), representing maternal love.</li>
                            <li><strong>Day 6: Katyayani</strong> - Daughter of sage Katyayana, representing fierce power.</li>
                            <li><strong>Day 7: Kalaratri</strong> - The dark night, representing the destruction of evil.</li>
                            <li><strong>Day 8: Mahagauri</strong> - The extremely beautiful, representing peace and purity.</li>
                            <li><strong>Day 9: Siddhidatri</strong> - The bestower of supernatural powers, representing perfection.</li>
                        </ul>
                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}
