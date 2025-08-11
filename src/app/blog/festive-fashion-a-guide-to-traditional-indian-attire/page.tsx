
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
    type: 'article',
    publishedTime: new Date('2025-07-05').toISOString(),
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
                        
                        <p>Indian festivals are a feast for the senses, and dressing up in traditional attire is an integral part of the celebration. The vibrant colors, rich fabrics, and intricate designs are not just about aesthetics; they are a reflection of our rich cultural heritage. Whether it's the elegance of a saree or the regal charm of a sherwani, festive wear is about expressing joy and reverence. Here’s a guide to help you navigate the beautiful world of Indian festive fashion.</p>

                        <h2>For Women: Grace and Elegance</h2>
                        <ul>
                            <li><strong>The Saree:</strong> An timeless choice, the saree is the epitome of Indian grace. Different regions boast unique weaves, each with its own story. For grand occasions like Diwali or weddings, a lustrous Banarasi or a rich Kanjeevaram silk saree is perfect. For more understated celebrations, a lighter Chanderi or a vibrant Bandhani saree works beautifully.</li>
                            <li><strong>The Lehenga-Choli:</strong> This three-piece outfit, consisting of a skirt, a blouse, and a dupatta, is a popular choice for festivals like Navratri and weddings. The swirling skirts are perfect for Garba and Dandiya nights.</li>
                            <li><strong>The Salwar Kameez & Anarkali:</strong> For comfort without compromising on style, the Salwar Kameez is a versatile option. The Anarkali suit, with its long, frock-style top, offers a more regal and formal look, perfect for Eid or family gatherings.</li>
                        </ul>

                        <h2>For Men: Royalty and Sophistication</h2>
                         <ul>
                            <li><strong>The Kurta-Pajama:</strong> This is the classic, go-to outfit for men during any festival. It's comfortable, elegant, and can be dressed up or down. A simple cotton kurta is great for a daytime puja, while a silk or brocade kurta is ideal for evening celebrations.</li>
                            <li><strong>The Sherwani & Bandhgala:</strong> For more formal occasions like a wedding or a grand Diwali party, a Sherwani or a Bandhgala jacket adds a touch of royalty. These are often made from luxurious fabrics and feature intricate embroidery.</li>
                            <li><strong>The Nehru Jacket:</strong> A versatile addition to any wardrobe, the Nehru jacket can be worn over a simple kurta to instantly elevate the look, adding a layer of sophistication.</li>
                        </ul>


                        <h2>The Language of Colors</h2>
                        <p>Colors play a hugely significant role in festive attire. Choosing the right color can add a deeper layer of meaning to your celebration.</p>
                        <ul>
                            <li><strong>Red:</strong> The color of choice for brides and many auspicious occasions, red symbolizes purity, love, and celebration.</li>
                            <li><strong>Yellow:</strong> Associated with Lord Vishnu and turmeric, yellow represents auspiciousness, happiness, and knowledge. It's a popular color for spring festivals like Vasant Panchami.</li>
                            <li><strong>Green:</strong> The color of new beginnings, nature, and harvest. Green is often worn during harvest festivals and Teej.</li>
                            <li><strong>Saffron/Orange:</strong> A sacred color representing fire and sacrifice, it is associated with purity and spiritual enlightenment.</li>
                        </ul>
                        <blockquote>
                            <p>Your festive attire is a canvas to express your joy and connect with the spirit of the celebration.</p>
                        </blockquote>
                        <p>Ultimately, festive fashion is about celebrating your heritage and feeling good. So, embrace the colors, the fabrics, and the traditions, and let your attire reflect the joy in your heart.</p>
                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}
