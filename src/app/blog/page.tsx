import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
    { title: "The Significance of Diyas in Diwali", image: "https://i.postimg.cc/Wt73N3rN/Diwali2.jpg", hint: "diya lamp", excerpt: "Discover the deep cultural and spiritual meaning behind lighting diyas during the festival of lights. From symbolizing the victory of good over evil to welcoming the goddess Lakshmi, the humble diya holds a universe of meaning.", author: "Priya Sharma", date: "October 20, 2025" },
    { title: "A Guide to Natural Holi Colors", image: "https://i.postimg.cc/18Vsq5gN/holi2.jpg", hint: "holi colors", excerpt: "Before chemical colors became popular, Holi was played with fragrant, skin-friendly colors made from flowers and herbs. Learn how to make your own natural gulal and celebrate a safe, eco-friendly Holi.", author: "Raj Patel", date: "March 10, 2026" },
    { title: "Top 5 Rangoli Designs for Beginners", image: "https://i.postimg.cc/0zh5WJgf/Diwali1.png", hint: "rangoli floor", excerpt: "Get inspired with these easy-to-make yet beautiful rangoli patterns. From simple floral designs to geometric wonders, we provide step-by-step guides to adorn your home for any festive occasion.", author: "Anjali Mehta", date: "October 18, 2025" },
    { title: "The 9 Avatars of Durga: A Navratri Special", image: "https://images.unsplash.com/photo-1544275932-c64057a6e5b8?q=80&w=400&h=300&fit=crop", hint: "durga goddess", excerpt: "Explore the nine powerful forms of Goddess Durga worshipped during the nine nights of Navratri. Each avatar has a unique story and significance, representing a different aspect of the divine feminine.", author: "Vikram Singh", date: "September 25, 2025" },
    { title: "Onam Sadya: A Feast for the Senses", image: "https://i.postimg.cc/1VzZ59hX/Onam.png", hint: "banana leaf", excerpt: "The Onam Sadya is more than just a meal; it's a grand vegetarian feast that is the centerpiece of Onam celebrations. We take you through the 26+ dishes that make up this incredible culinary experience.", author: "Lakshmi Nair", date: "September 07, 2025" },
    { title: "Festive Fashion: A Guide to Traditional Indian Attire", image: "https://images.unsplash.com/photo-1594909122845-11baa439b78f?q=80&w=400&h=300&fit=crop", hint: "ethnic wear", excerpt: "From vibrant sarees and lehengas to elegant kurtas and sherwanis, find inspiration for your festive wardrobe. We explore the significance of different colors and fabrics in Indian festive wear.", author: "Riya Desai", date: "August 25, 2025" },
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Utsavs Blog</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Dive deeper into the culture, stories, and traditions that make Indian festivals so special. Your definitive source for festive knowledge.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Card key={post.title} className="overflow-hidden group flex flex-col">
                        <Image src={post.image} alt={post.title} width={400} height={300} className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={post.hint} />
                        <CardHeader>
                            <CardTitle className="font-headline text-xl h-16">{post.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">By {post.author} on {post.date}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-foreground/80">{post.excerpt}</p>
                        </CardContent>
                        <CardContent>
                            <Button variant="link" className="p-0 text-accent hover:text-accent/90">
                                Read More <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
