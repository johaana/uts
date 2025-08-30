
'use client';

import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, RotateCcw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import { Badge } from '@/components/ui/badge';

const categories = [...new Set(blogPosts.map(p => p.category))].sort();
const sortOptions = ["Newest First", "Oldest First", "Title (A-Z)"];

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState(sortOptions[0]);

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedCategory('all');
        setSortOrder(sortOptions[0]);
    };

    const filteredAndSortedPosts = useMemo(() => {
        let posts = blogPosts.filter(post => {
            const nameMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
            return nameMatch && categoryMatch;
        });

        if (sortOrder === "Newest First") {
            posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else if (sortOrder === "Oldest First") {
            posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        } else if (sortOrder === "Title (A-Z)") {
            posts.sort((a, b) => a.title.localeCompare(b.title));
        }
        
        return posts;
    }, [searchTerm, selectedCategory, sortOrder]);


    const getCategoryBadgeClass = (category: string) => {
        switch(category) {
            case 'Cultural Deep Dive': return 'bg-sky-600/80 text-white';
            case 'How-To Guide': return 'bg-green-600/80 text-white';
            case 'Travel Ideas': return 'bg-purple-600/80 text-white';
            case 'Lesser-Known Festivals': return 'bg-yellow-500/80 text-white';
            case 'Food & Recipes': return 'bg-orange-500/80 text-white';
            default: return 'bg-secondary text-secondary-foreground';
        }
    };


    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="text-center mb-12">
                <h1 className="font-headline text-3xl md:text-5xl font-bold">Utsavs Blog</h1>
                <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                    Dive deeper into the culture, stories, and traditions that make festivals so special. Your definitive source for festive knowledge and inspiration.
                </p>
            </div>
            
            <Card className="p-4 md:p-6 mb-12">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                    <div className="relative w-full col-span-2 md:col-span-2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            placeholder="Search stories..." 
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                     <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {categories.map(category => (
                                <SelectItem key={category} value={category}>{category}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                     <Select value={sortOrder} onValueChange={setSortOrder}>
                        <SelectTrigger>
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            {sortOptions.map(option => (
                                <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className="col-span-full flex justify-end">
                         <Button variant="ghost" onClick={resetFilters}>
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset Filters
                        </Button>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                 {filteredAndSortedPosts.length > 0 ? filteredAndSortedPosts.map((post) => (
                    <Card key={post.slug} className="overflow-hidden group flex flex-col transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
                         <Link href={`/blog/${post.slug}`} className="block">
                            <div className="relative h-48 w-full bg-black/5">
                               <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.hint}/>
                               <div className="absolute top-3 right-3">
                                <Badge className={getCategoryBadgeClass(post.category)}>{post.category}</Badge>
                               </div>
                            </div>
                        </Link>
                        <CardHeader className="p-4 md:p-6 flex-grow">
                            <Link href={`/blog/${post.slug}`} className="block">
                                <CardTitle className="font-headline text-xl md:text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                            </Link>
                            <p className="text-xs text-muted-foreground pt-1">By {post.author} on {post.date}</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
                            <p className="text-sm text-foreground/80 line-clamp-3">{post.excerpt}</p>
                        </CardContent>
                    </Card>
                )) : (
                    <p className="text-center col-span-full text-muted-foreground">No blog posts found matching your criteria.</p>
                )}
            </div>
        </div>
    );
}
