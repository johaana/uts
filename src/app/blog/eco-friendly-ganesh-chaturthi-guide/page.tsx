
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const post = { 
    title: "Your Ultimate Guide to an Eco-Friendly Ganesh Chaturthi", 
    image: "https://i.postimg.cc/PqjW2Gmm/eco-friendly-ganesha.jpg",
    excerpt: "Celebrate the birth of Lord Ganesha with reverence for both tradition and nature. Discover beautiful, water-soluble idols, DIY clay kits, and sustainable decoration ideas for a joyous and conscious festival."
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
        slug: "ganesh-chaturthi",
        title: "Ganesh Chaturthi Festival Guide",
        image: "https://i.postimg.cc/SNGxJ8VJ/ganesh-chaturthi-festival.jpg",
        type: "Festival",
        link: "/festivals/ganesh-chaturthi",
        hint: "ganesha idol"
    },
    {
        slug: "celebrate-with-conscience-eco-friendly-festivals",
        title: "Guide to Eco-Friendly Festivals",
        image: "https://i.postimg.cc/XNyGGLXt/eco-friendly.jpg",
        type: "Blog",
        link: "/blog/celebrate-with-conscience-eco-friendly-festivals",
        hint: "eco-friendly decor"
    },
    {
        slug: "modak",
        title: "Modak Recipe",
        image: "https://i.postimg.cc/ZYv7DzmT/ukadiche-modak-recipe.jpg",
        type: "Recipe",
        link: "/recipes/modak",
        hint: "steamed dumplings"
    }
];

export default function SingleBlogPage() {
    const ecoFriendlyGanesha = products.ecoFriendlyGanesha;

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="eco-friendly ganesha" className="rounded-lg"/>
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

                        <p>Ganesh Chaturthi is a festival of immense joy and devotion. As we welcome the beloved Lord Ganesha into our homes, it's also a perfect opportunity to honor Mother Nature, who he represents. Traditionally, idols were made from river clay and returned to the earth, a beautiful symbol of life's cycle. Today, with the rise of Plaster of Paris (PoP) idols, our water bodies face pollution. But a wonderful movement is bringing us back to our roots. Let's explore how to celebrate a vibrant, joyous, and eco-friendly Ganesh Chaturthi.</p>
                        
                        <h3 id="idols">Choosing the Heart of the Festival: The Eco-Friendly Murti</h3>
                        <p>The single most impactful choice you can make is selecting a water-soluble idol. These idols are designed to dissolve gracefully, returning to the elements without harming aquatic life.</p>
                        
                        <div className="my-8">
                            {ecoFriendlyGanesha && <ProductCard product={ecoFriendlyGanesha} />}
                        </div>

                        <h4>DIY Ganesha: The Ultimate Personal Touch</h4>
                        <p>For a truly personal and family-bonding experience, consider making your own Ganesha idol. It's a wonderful activity to do with children, teaching them the importance of the festival and sustainability from a young age.</p>

                        <h3>Sustainable Decorations and Practices</h3>
                        <ul>
                            <li><strong>Use Natural Flowers & Leaves:</strong> Decorate your mandap with fresh flowers, mango leaves, and banana leaves instead of plastic and thermocol.</li>
                            <li><strong>Symbolic Immersion:</strong> Immerse your clay idol at home in a bucket or drum. You can then pour the water into your garden, a beautiful way to complete the cycle of life.</li>
                            <li><strong>Serve Prasad on Leaf Plates:</strong> Reduce waste by using traditional 'pattals' (leaf plates) or reusable steel utensils for serving prasad.</li>
                        </ul>
                        
                        <blockquote>
                            <p>An eco-friendly celebration is the greatest offering we can make—one that honors both our beloved deity and the planet he represents.</p>
                        </blockquote>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
