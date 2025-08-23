
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="text-center mb-12">
                <h1 className="font-headline text-3xl md:text-5xl font-bold">Utsavs Blog</h1>
                <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                    Dive deeper into the culture, stories, and traditions that make Indian festivals so special. Your definitive source for festive knowledge.
                </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {blogPosts.map((post) => (
                    <Card key={post.slug} className="overflow-hidden group flex flex-col transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl">
                        <div className="relative h-40 md:h-56 w-full bg-black/5">
                           <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.hint}/>
                        </div>
                        <CardHeader className="p-3 md:p-4 flex-grow">
                            <CardTitle className="font-headline text-lg md:text-xl">{post.title}</CardTitle>
                             <p className="text-xs text-muted-foreground pt-1">By {post.author} on {post.date}</p>
                        </CardHeader>
                        <CardContent className="p-3 pt-0 md:p-4 md:pt-0 flex flex-col">
                            <p className="text-xs md:text-sm text-foreground/80 mb-4 flex-grow">{post.excerpt}</p>
                            <Link href={`/blog/${post.slug}`} className="mt-auto">
                                <Button variant="link" className="p-0 text-accent hover:text-accent/90">
                                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
