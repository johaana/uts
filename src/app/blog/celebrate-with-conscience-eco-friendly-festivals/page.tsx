
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

const post = { 
    title: "Celebrate with Conscience: Your Guide to Vibrant and Eco-Friendly Indian Festivals", 
    image: "https://i.postimg.cc/XNyGGLXt/eco-friendly.jpg",
    excerpt: "Discover how to blend rich cultural traditions with sustainable practices. Our guide explores the importance of eco-friendly festivals and offers creative, conscious ways to celebrate with joy."
};

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  openGraph: {
    title: post.title,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: "Eco-friendly festival decorations" }],
  },
  twitter: {
    title: post.title,
    description: post.excerpt,
    images: [post.image],
  },
};

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt="Eco-friendly festival decorations" layout="fill" objectFit="cover" data-ai-hint="eco-friendly decor" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on August 12, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Indian festivals are a breathtaking explosion of color, devotion, community, and joy. They are the threads that weave our cultural fabric, connecting us to our roots and to each other. But as our celebrations have grown in scale, so has their environmental footprint. From the plastic waste left after a community feast to the air and noise pollution from firecrackers, the aftermath of our festivities often stands in stark contrast to the reverence for nature that is so deeply embedded in our traditions. The good news? We can change this. Embracing eco-friendly celebrations isn't about diminishing the joy; it's about amplifying it by aligning our actions with the very values our festivals teach us: respect, harmony, and gratitude.</p>
                        
                        <h3>Why Conscious Celebration Matters</h3>
                        <p>The essence of nearly every Indian festival is a celebration of nature's bounty and the divine forces that govern it. We worship rivers, honor the sun, and celebrate harvests. By choosing sustainable practices, we are not adopting a new trend; we are returning to the roots of these celebrations. An eco-friendly festival is an act of devotion in itself—a gesture of thanks to the Earth that sustains us. It reduces our collective carbon footprint, protects our ecosystems, and ensures that the beauty of our planet can be enjoyed by generations to come.</p>

                        <h3>How to Adapt: Simple Steps for a Big Impact</h3>
                        
                        <h4>1. The Beauty of Natural Decorations</h4>
                        <p>Instead of plastic streamers and synthetic decorations, adorn your home with natural, biodegradable materials. Use fresh flowers like marigolds, mango leaves for door hangings ('torans'), and create stunning 'rangoli' not with chemical powders, but with rice flour, turmeric, coffee powder, and flower petals. These not only look beautiful and authentic but also return to the earth without causing harm.</p>

                        <h4>2. The Eco-Friendly Idol</h4>
                        <p>For festivals like Ganesh Chaturthi and Durga Puja, opt for idols made from natural, unbaked clay (shadu mati) instead of Plaster of Paris (PoP). PoP idols contain harmful chemicals that pollute our rivers and harm aquatic life. A clay idol dissolves gracefully in water. Better yet, consider a symbolic immersion at home in a bucket, using the dissolved clay to nurture your garden—a beautiful symbol of life's cyclical nature.</p>
                        
                        <h4>3. A Greener Diwali: The Festival of Lights, Not Noise</h4>
                        <p>Diwali is perhaps the festival with the most significant environmental impact. Here's how to improve it:</p>
                        <ul>
                            <li><strong>Choose Earthen Lamps:</strong> Embrace the timeless charm of traditional clay 'diyas'. They are biodegradable, support local artisans, and create a more serene and authentic glow than electric lights.</li>
                            <li><strong>Say No to Crackers:</strong> Firecrackers cause immense air and noise pollution, harming children, the elderly, and animals. Let's reclaim Diwali's essence by celebrating with light and community, not with deafening noise.</li>
                        </ul>

                        <h4>4. A Skin-Friendly Holi: The Joy of Natural Colors</h4>
                        <p>Holi, the festival of colors, is inherently joyful. Let's make it safe too. Chemical-laden colors can cause severe skin and eye issues. Rediscover the tradition of making your own colors from kitchen ingredients: turmeric mixed with gram flour for a vibrant yellow, dried hibiscus flowers for red, and henna for a rich green. It's fun, safe, and connects us to the festival's fragrant, herbal roots.</p>
                        
                        <h4>5. Feasting with a Conscience</h4>
                        <p>Community feasts are the heart of many festivals. You can make them greener by avoiding single-use plastics. Serve 'prasad' and food on traditional leaf plates ('pattals') or reusable steel utensils. This simple switch drastically reduces the mountain of plastic waste our celebrations generate.</p>
                        
                        <blockquote>
                            <p>An eco-friendly choice is not a sacrifice; it is a deeper form of celebration, one that honors our traditions, our planet, and our future.</p>
                        </blockquote>

                        <p>Adapting to eco-friendly practices is a journey, not a destination. Every small step matters. By making conscious choices, we can ensure that our festivals remain a source of pure joy and a true reflection of our rich, respectful culture for centuries to come.</p>
                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}

