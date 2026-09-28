'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search, RotateCcw, Globe } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { allEvents } from '@/lib/festival-data';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const regions = ["Nationwide", "North", "South", "East", "West", "Central", "Northeast"];
const sortOptions = ["Name (A-Z)", "Name (Z-A)"];

function FestivalsPageContent() {
    const searchParams = useSearchParams();
    const initialRegion = searchParams.get('region') || 'all';

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState(initialRegion);
    const [sortOrder, setSortOrder] = useState(sortOptions[0]);

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedRegion('all');
        setSortOrder(sortOptions[0]);
    };
    
    const filteredAndSortedFestivals = useMemo(() => {
        let festivals = allEvents.filter(festival => {
            const nameMatch = festival.name.toLowerCase().includes(searchTerm.toLowerCase());
            const regionMatch = selectedRegion === 'all' || (festival.region && festival.region.toLowerCase().includes(selectedRegion.toLowerCase())) || festival.region === 'Nationwide';
            return nameMatch && regionMatch;
        });

        if (sortOrder === "Name (A-Z)") {
            festivals.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === "Name (Z-A)") {
            festivals.sort((a, b) => b.name.localeCompare(a.name));
        }

        // De-duplicate festivals for the canonical list
        const uniqueFestivals = Array.from(new Map(festivals.map(item => [item.slug.split('-202')[0], item])).values());

        return uniqueFestivals;
    }, [searchTerm, selectedRegion, sortOrder]);


    return (
        <div className="bg-[#F4F1E8] text-[#17151A] min-h-screen font-sans pb-24">
            <Header />
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-4xl mb-16 text-left space-y-6">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#E94368]">THE LIBRARY</span>
                        <div className="h-px flex-1 bg-[#17151A]/10"></div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#6D6870]">INDEX: 92 COUNTRIES TRACKED</span>
                    </div>
                    <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter leading-none">Discover Festivals</h1>
                    <p className="text-xl text-[#6D6870] font-medium leading-relaxed max-w-2xl">
                        The definitive guide to the world's most vibrant cultural events. 
                        Understand the stories, the rituals, and the impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-[1fr_2.5fr] gap-12">
                    {/* Filter Sidebar */}
                    <aside className="space-y-8 h-fit sticky top-32">
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#6D6870]">Search</label>
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
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#6D6870]">Region</label>
                            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                                <SelectTrigger className="bg-white/50 border-[#17151A]/10 h-11">
                                    <SelectValue placeholder="All Regions" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Regions</SelectItem>
                                    {regions.map(region => (
                                        <SelectItem key={region} value={region}>{region}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="pt-6 border-t border-[#17151A]/10 flex flex-col gap-3">
                             <Link href="/international-festivals">
                                <Button className="w-full bg-[#17151A] text-white hover:bg-black font-bold h-11 rounded-sm shadow-sm">
                                    <Globe className="mr-2 h-4 w-4" /> Global View
                                </Button>
                            </Link>
                             <Button variant="ghost" onClick={resetFilters} className="text-[#6D6870] hover:text-[#17151A] text-xs font-bold uppercase tracking-widest">
                                <RotateCcw className="mr-2 h-3.3 w-3" /> Reset
                            </Button>
                        </div>
                    </aside>

                    {/* Festival List */}
                    <main className="space-y-4">
                        {filteredAndSortedFestivals.length > 0 ? filteredAndSortedFestivals.map((festival) => (
                            <Link href={festival.link!} key={festival.slug} className="block group">
                                <div className="bg-white border border-[#17151A]/5 rounded-sm p-4 flex gap-6 hover:border-[#17151A]/20 hover:shadow-md transition-all">
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-sm overflow-hidden shrink-0 bg-[#17151A]/5">
                                        <Image src={festival.image!} alt={festival.name} layout="fill" objectFit="cover" data-ai-hint={festival.hint} className="group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="flex flex-col justify-center text-left py-1">
                                        <span className="text-[9px] font-mono font-bold text-[#E94368] uppercase tracking-[0.2em] mb-1">{festival.region}</span>
                                        <h2 className="font-headline text-xl md:text-3xl font-bold tracking-tight text-[#17151A] mb-2">{festival.name.split(' (')[0]}</h2>
                                        <p className="text-sm text-[#6D6870] line-clamp-2 leading-relaxed max-w-xl">{festival.description}</p>
                                    </div>
                                </div>
                            </Link>
                        )) : (
                            <div className="py-24 text-center border-2 border-dashed border-[#17151A]/10 rounded-lg">
                                <p className="text-[#6D6870] italic">No matching records found in the library.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default function FestivalsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FestivalsPageContent />
        </Suspense>
    );
}
