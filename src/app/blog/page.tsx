'use client';

import { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, RotateCcw } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from "@/lib/utils";

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
        <div className="bg-[#F4F1E8] text-[#17151A] min-h-screen font-sans">
            <Header />
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-4xl mb-16 text-left space-y-6">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#E94368]">THE JOURNAL</span>
                        <div className="h-px flex-1 bg-[#17151A]/10"></div>
                    </div>
                    <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter leading-none">Utsavs Blog</h1>
                    <p className="text-xl text-[#6D6870] font-medium leading-relaxed max-w-2xl">
                        Deep dives into the culture, stories, and traditions that define global celebrations.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-[1fr_2.5fr] gap-12">
                    <aside className="space-y-8 h-fit sticky top-32">
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#6D6870]">Search stories</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6D6870]" />
                                <Input 
                                    placeholder="Search library..." 
                                    className="pl-10 bg-white/50 border-[#17151A]/10 focus:border-[#E94368] h-11"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                         <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#6D6870]">Category</label>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="bg-white/50 border-[#17151A]/10 h-11">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    {categories.map(category => (
                                        <SelectItem key={category} value={category}>{category}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button variant="ghost" onClick={resetFilters} className="w-full text-[#6D6870] hover:text-[#17151A] text-xs font-bold uppercase tracking-widest pt-4 border-t border-[#17151A]/10">
                            <RotateCcw className="mr-2 h-3 w-3" /> Reset Filters
                        </Button>
                    </aside>

                    <main className="space-y-4">
                        {filteredAndSortedPosts.length > 0 ? filteredAndSortedPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                                <div className="bg-white border border-[#17151A]/5 rounded-sm p-6 md:p-10 hover:border-[#17151A]/20 hover:shadow-xl transition-all duration-500 text-left">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            <Badge className={cn("w-fit text-[9px] font-bold uppercase tracking-widest", getCategoryBadgeClass(post.category))}>
                                                {post.category}
                                            </Badge>
                                            <p className="text-[10px] font-mono font-bold text-[#6D6870]/60 uppercase tracking-widest">{post.date}</p>
                                        </div>
                                        <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight text-[#17151A] group-hover:text-[#E94368] transition-colors">{post.title}</h2>
                                        <p className="text-sm text-[#6D6870] font-medium leading-relaxed line-clamp-3">{post.excerpt}</p>
                                        <div className="flex items-center gap-2 pt-2 border-t border-[#17151A]/5">
                                            <span className="text-[10px] font-bold text-[#17151A] uppercase tracking-widest">Read Story →</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )) : (
                            <div className="py-24 text-center border-2 border-dashed border-[#17151A]/10 rounded-lg">
                                <p className="text-[#6D6870] italic">No matching stories found in the journal.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}
