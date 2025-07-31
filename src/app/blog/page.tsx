import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
    { title: "The Significance of Diyas in Diwali", image: "https://placehold.co/400x300.png", hint: "diya lamp", excerpt: "Discover the deep cultural and spiritual meaning behind lighting diyas during the festival of lights.", author: "Priya Sharma", date: "October 15, 2024" },
    { title: "A Guide to Traditional Holi Colors", image: "https://placehold.co/400x300.png", hint: "holi colors", excerpt: "Learn about the natural ingredients used in traditional Holi colors and their significance.", author: "Raj Patel", date: "March 01, 2025" },
    { title: "Top 5 Rangoli Designs for Beginners", image: "https://placehold.co/400x300.png", hint: "rangoli floor", excerpt: "Get inspired with these easy-to-make yet beautiful rangoli patterns for any occasion.", author: "Anjali Mehta", date: "October 12, 2024" },
    { title: "The 9 Avatars of Durga in Navratri", image: "https://placehold.co/400x300.png", hint: "durga goddess", excerpt: "Explore the nine forms of Goddess Durga worshipped during the nine nights of Navratri.", author: "Vikram Singh", date: "September 28, 2024" },
    { title: "Onam Sadya: A Feast for the Senses", image: "https://placehold.co/400x300.png", hint: "banana leaf", excerpt: "A detailed guide to the grand vegetarian feast that is the centerpiece of Onam celebrations.", author: "Lakshmi Nair", date: "September 01, 2024" },
    { title: "Fashion for Festivals: What to Wear", image: "https://placehold.co/400x300.png", hint: "ethnic wear", excerpt: "From vibrant sarees to elegant kurtas, find inspiration for your festive wardrobe.", author: "Riya Desai", date: "August 20, 2024" },
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Utsavs Blog</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Dive deeper into the culture, stories, and traditions that make Indian festivals so special.
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
