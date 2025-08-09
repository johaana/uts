import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

const post = { 
    title: "Gramam: Step Into the Heart of Kerala's Culture", 
    image: "https://i.postimg.cc/FKgpVqq6/gramam-kerala.jpg",
    excerpt: "Experience the authentic culture of Kerala at the Gramam village fair. A celebration of traditional arts, crafts, and food near Kovalam."
};

export const metadata: Metadata = {
  title: post.title,
  description: post.excerpt,
  openGraph: {
    title: post.title,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
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
                <Image src={post.image} alt="Kerala Village Fair" layout="fill" objectFit="cover" data-ai-hint="kerala village fair" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on May 24, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <h2>An Authentic Glimpse of Rural Kerala</h2>
                        <p>The Kerala Village Fair, or 'Gramam', is a unique cultural festival held every year in mid-January, offering travelers an authentic glimpse into the traditional life of God's Own Country. The festival, usually set up near the scenic beaches of Kovalam, involves the recreation of a classic Keralian village, allowing visitors to step back in time and experience the region's rich heritage firsthand.</p>
                        
                        <h2>What is Gramam?</h2>
                        <p>At the heart of the fair is the recreation of a traditional village scene. You'll find a 'Nalukettu', the traditional quadrangular mansion of Kerala, along with the 'Chayakkada' (local tea shop) and other elements of a bygone era. This carefully curated environment serves as the stage for a ten-day-long celebration of Kerala's vibrant arts and culture.</p>

                        <h3>Experience the Best of Kerala's Traditions:</h3>
                        <ul>
                            <li><strong>Folk Arts:</strong> Witness mesmerizing performances of subdued folk dances and music, bringing ancient traditions to life.</li>
                            <li><strong>Artisan Craftsmanship:</strong> Watch skilled artisans at work, demonstrating traditional crafts like handloom weaving and pottery on spinning wheels.</li>
                            <li><strong>Authentic Cuisine:</strong> The fair is a paradise for food lovers. Don't miss the opportunity to taste authentic Keralian dishes like 'Kappa' (tapioca) and 'Meen' (fish curry).</li>
                            <li><strong>Cultural Performances:</strong> The evenings are filled with performances of classical art forms like Kathakali and Mohiniyattam.</li>
                        </ul>

                        <p>The Kerala Village Fair is more than just a festival; it's an immersive cultural experience that offers a deep and meaningful connection to the heritage of Kerala. It's a perfect destination for travelers seeking authenticity and a deeper understanding of regional Indian life.</p>
                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}
