
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const post = {
    title: "From a Single Dot to a Divine Masterpiece: The Ancient Art of Rangoli",
    image: "https://i.postimg.cc/fRYfMpwb/Rangoli.jpg",
    excerpt: "Get inspired with these beautiful and diverse rangoli patterns. From simple floral designs to intricate traditional art, find the perfect design to adorn your home for any festive occasion."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-06-18').toISOString(),
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
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="rangoli design" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on June 18, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>
                        
                        <p>Rangoli is a timeless art form, a vibrant expression of joy and welcome that adorns the entrances of homes during festivals. Whether you're a beginner or an experienced artist, here are 12 beautiful designs to inspire your next creation.</p>
                        
                        <div className="not-prose my-10 bg-secondary/30 p-6 rounded-lg">
                            <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Get Started with Rangoli (Shop on Amazon)</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                                <ProductCard product={products.rangoliMat} />
                                <ProductCard product={products.rangoliPowder} />
                            </div>
                        </div>

                        <h3>1. Simple Flower Rangoli</h3>
                        <div className="my-4 flex justify-center">
                            <Image src="https://i.postimg.cc/KjmJJ0xv/Marigold-Flower-Rangoli.jpg" alt="Marigold Flower Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="marigold rangoli" />
                        </div>
                        <p>This is the easiest design for beginners. Start with a central circle and draw petals around it to form a flower. You can use different colored powders for each petal. Add details like leaves and stems to make it more elaborate.</p>

                        <h3>2. Geometric Pattern Rangoli</h3>
                        <div className="my-4 flex justify-center">
                            <Image src="https://i.postimg.cc/gkkghtgg/Geometric-Patterns-rangoli.jpg" alt="Geometric Patterns Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="geometric rangoli" />
                        </div>
                        <p>Geometric rangolis look complex but are easy to create with a grid of dots. Connect the dots to form squares, triangles, and other shapes. Fill in the shapes with different colors to create a stunning pattern.</p>

                        <h3>3. Traditional Peacock Rangoli</h3>
                        <div className="my-4 flex justify-center">
                           <Image src="https://i.postimg.cc/GtMJzrXq/Traditional-Peacock-Rangoli.jpg" alt="Traditional Peacock Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="peacock rangoli" />
                        </div>
                        <p>The peacock is a symbol of beauty and grace in Indian culture. Draw the outline of a peacock and fill it with vibrant blues, greens, and gold. Use a darker color for the outline to make the design pop.</p>

                        <h3>4. Diya Rangoli</h3>
                        <div className="my-4 flex justify-center">
                            <Image src="https://i.postimg.cc/k4vy6WKr/Diya-and-Floral-rangoli.jpg" alt="Diya and Floral Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="diya rangoli" />
                        </div>
                        <p>A diya rangoli is perfect for Diwali. Draw a large diya in the center and decorate it with smaller diyas and floral patterns around it. Use bright colors to represent light and celebration.</p>

                        <h3>5. Auspicious Swastika Rangoli</h3>
                        <div className="my-4 flex justify-center">
                           <Image src="https://i.postimg.cc/1XRrp4r8/rangoli-design1.jpg" alt="Auspicious Rangoli Design" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="auspicious rangoli" />
                        </div>
                        <p>The swastika is an ancient symbol of good fortune. Create a swastika in the center and surround it with a circular border of intricate patterns. This design is both auspicious and beautiful.</p>
                        
                        <h3>6. Ganesha Rangoli</h3>
                        <div className="my-4 flex justify-center">
                           <Image src="https://i.postimg.cc/26DwS0qF/Ganesha-Rangoli.jpg" alt="Ganesha Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="ganesha rangoli" />
                        </div>
                        <p>Welcome the remover of obstacles into your home with a beautiful Ganesha-themed rangoli. This design is perfect for Ganesh Chaturthi and brings a divine touch to your entrance.</p>

                        <h3>7. Peacock Feather Rangoli</h3>
                        <div className="my-4 flex justify-center">
                           <Image src="https://i.postimg.cc/VkvZxZMJ/Peacock-Feather-Rangoli.jpg" alt="Peacock Feather Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="peacock feather rangoli" />
                        </div>
                        <p>A variation of the peacock theme, focusing on the intricate beauty of a single feather. The vibrant blues and greens make for a stunning and elegant design.</p>
                        
                        <h3>8. Elegant Border Rangoli</h3>
                        <div className="my-4 flex justify-center">
                           <Image src="https://i.postimg.cc/D0cYTtBX/Elegant-Border-Rangoli.jpg" alt="Elegant Border Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="border rangoli" />
                        </div>
                        <p>If you prefer a more minimalist approach, a border rangoli is a perfect choice. This design elegantly frames your doorway and can be as simple or as intricate as you like.</p>

                        <h3>9. Warli Art Rangoli</h3>
                        <div className="my-4 flex justify-center">
                           <Image src="https://i.postimg.cc/yNSQdJLB/Warli-Art-Rangoli.jpg" alt="Warli Art Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="warli art rangoli" />
                        </div>
                        <p>Incorporate traditional folk art into your rangoli with a Warli-inspired design. Characterized by its simple, stick-figure motifs, it tells a story of village life and community.</p>

                        <h3>10. Sanskar Bharti Rangoli</h3>
                        <div className="my-4 flex justify-center">
                           <Image src="https://i.postimg.cc/4yGFjJbG/Three-dimensional-Rangoli.jpg" alt="Sanskar Bharti Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="sanskar bharti rangoli" />
                        </div>
                        <p>Known for its large, intricate, and multi-dimensional patterns, Sanskar Bharti rangoli often uses three or five fingers to create its unique, flowing lines. It's a true test of artistry.</p>

                        <h3>11. Sunflower Rangoli</h3>
                        <div className="my-4 flex justify-center">
                           <Image src="https://i.postimg.cc/6pPbtVLY/Sunflower-Rangoli.jpg" alt="Sunflower Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="sunflower rangoli" />
                        </div>
                        <p>Bring the brightness of the sun to your doorstep with a cheerful sunflower design. The vibrant yellows and browns create a warm and welcoming atmosphere.</p>
                        
                        <h3>12. Starburst Rangoli</h3>
                        <div className="my-4 flex justify-center">
                           <Image src="https://i.postimg.cc/nhXTRjb7/Starburst-Rangoli.jpg" alt="Starburst Rangoli" width={500} height={500} className="rounded-lg shadow-lg" data-ai-hint="starburst rangoli" />
                        </div>
                        <p>A modern and dynamic design, the starburst pattern radiates energy and celebration. Use a spectrum of colors to create a stunning, explosive effect.</p>

                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}
