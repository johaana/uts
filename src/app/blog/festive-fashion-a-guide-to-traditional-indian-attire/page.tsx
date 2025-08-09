
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

const post = {
    title: "Festive Fashion: A Guide to Traditional Indian Attire",
    image: "https://i.postimg.cc/Kj45FYzX/festive-Indian-attire.png",
    excerpt: "From vibrant sarees and lehengas to elegant kurtas and sherwanis, find inspiration for your festive wardrobe. We explore the significance of different colors and fabrics in Indian festive wear."
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
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="indian fashion" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on July 05, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>
                        
                        <p>From vibrant sarees and lehengas to elegant kurtas and sherwanis, find inspiration for your festive wardrobe. We explore the significance of different colors and fabrics in Indian festive wear.</p>

                        <h2>For Women</h2>
                        <p>The Saree remains an timeless choice, with different regions boasting unique weaves like Banarasi, Kanjeevaram, and Chanderi. The Lehenga-Choli is a popular choice for festivals like Navratri and weddings. The Salwar Kameez offers a comfortable yet elegant option.</p>

                        <h2>For Men</h2>
                        <p>The Kurta-Pajama is a classic and versatile choice. For more formal occasions, a Sherwani or a Bandhgala jacket adds a touch of royalty. The fabric and embroidery often signify the grandeur of the festival.</p>

                        <h2>Color Symbolism</h2>
                        <p>Colors play a huge role in festive attire. Red symbolizes purity and celebration, yellow represents auspiciousness, and green signifies new beginnings. Understanding these nuances can add another layer of meaning to your festive dressing.</p>
                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}
