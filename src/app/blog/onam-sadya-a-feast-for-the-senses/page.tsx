
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

const post = {
    title: "Onam Sadya: A Feast for the Senses",
    image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg",
    excerpt: "The Onam Sadya is more than just a meal; it's a grand vegetarian feast that is the centerpiece of Onam celebrations. We take you through the 26+ dishes that make up this incredible culinary experience."
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
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="onam feast" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on July 07, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>The Onam Sadya is more than just a meal; it's a grand vegetarian feast that is the centerpiece of Onam celebrations. We take you through the 26+ dishes that make up this incredible culinary experience.</p>

                        <h2>Key Dishes of the Sadya</h2>
                        <p>Served on a banana leaf, the Sadya is a multi-course meal that balances all flavors. Some key components include:</p>
                        <ul>
                            <li><strong>Rice:</strong> The staple base of the meal.</li>
                            <li><strong>Parippu:</strong> A simple lentil curry, the first dish to be served.</li>
                            <li><strong>Sambar:</strong> A flavorful lentil and vegetable stew.</li>
                            <li><strong>Avial:</strong> A thick mixture of various vegetables in a coconut and yogurt gravy.</li>
                            <li><strong>Pachadi and Kichadi:</strong> Yogurt-based dishes, one sweet and one savory.</li>
                            <li><strong>Payasam:</strong> The delicious dessert, a sweet pudding made with milk, rice, or lentils.</li>
                        </ul>
                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}
