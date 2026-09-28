
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
        // De-duplicate festivals first to create a clean directory
        const uniqueMap = new Map();
        allEvents.forEach(event => {
            const baseSlug = event.slug.split('-202')[0];
            if (!uniqueMap.has(baseSlug)) {
                uniqueMap.set(baseSlug, event);
            }
        });
        
        let list = Array.from(uniqueMap.values());

        list = list.filter(festival => {
            const nameMatch = festival.name.toLowerCase().includes(searchTerm.toLowerCase());
            const regionMatch = selectedRegion === 'all' || (festival.region && festival.region.toLowerCase().includes(selectedRegion.toLowerCase())) || festival.region === 'Nationwide';
            return nameMatch && regionMatch;
        });

        if (sortOrder === "Name (A-Z)") {
            list.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === "Name (Z-A)") {
            list.sort((a, b) => b.name.localeCompare(a.name));
        }

        return list;
    }, [searchTerm, selectedRegion, sortOrder]);


    return (
        <div className="bg-[#F4F1E8] text-[#17151A] min-h-screen font-sans pb-24">
            <Header />
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-4xl mx-auto mb-16 text-center space-y-6">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#E94368]">THE LIBRARY INDEX</span>
                        <div className="h-px w-20 bg-[#17151A]/10"></div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#6D6870]">INDEX STATUS: 92 COUNTRIES RECONCILED</span>
                    </div>
                    <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter leading-none">Discover Festivals</h1>
                    <p className="text-xl text-[#6D6870] font-medium leading-relaxed max-w-2xl mx-auto">
                        The definitive guide to the world's most vibrant cultural events. 
                        Understand the stories, the rituals, and the impact.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Horizontal Filter Bar */}
                    <div className="bg-white/50 border border-[#17151A]/10 rounded-sm p-4 flex flex-col md:flex-row gap-4 items-center shadow-sm">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6D6870]" />
                            <Input 
                                placeholder="Search library..." 
                                className="pl-10 bg-transparent border-none focus-visible:ring-0 h-11 text-base"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="h-8 w-px bg-[#17151A]/10 hidden md:block"></div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                                <SelectTrigger className="w-full md:w-48 bg-transparent border-none focus:ring-0 font-bold uppercase tracking-widest text-[10px]">
                                    <SelectValue placeholder="All Regions" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Regions</SelectItem>
                                    {regions.map(region => (
                                        <SelectItem key={region} value={region}>{region}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button variant="ghost" onClick={resetFilters} className="text-[#6D6870] hover:text-[#17151A]" size="icon">
                                <RotateCcw className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Directory List */}
                    <div className="space-y-4">
                        {filteredAndSortedFestivals.length > 0 ? filteredAndSortedFestivals.map((festival) => (
                            <Link href={festival.link!} key={festival.slug} className="block group">
                                <div className="bg-white border border-[#17151A]/5 rounded-sm p-4 md:p-6 flex flex-col md:flex-row gap-6 md:items-center hover:border-[#17151A]/20 hover:shadow-md transition-all">
                                    <div className="relative w-full md:w-40 aspect-[4/3] rounded-sm overflow-hidden shrink-0 bg-[#17151A]/5">
                                        <Image src={festival.image!} alt={festival.name} layout="fill" objectFit="cover" data-ai-hint={festival.hint} className="group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="flex-1 space-y-2 text-left py-1">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[9px] font-mono font-bold text-[#E94368] uppercase tracking-[0.2em]">{festival.region}</span>
                                            <div className="w-1 h-1 rounded-full bg-[#17151A]/10"></div>
                                            <span className="text-[9px] font-mono font-bold text-[#6D6870] uppercase tracking-widest">{festival.type}</span>
                                        </div>
                                        <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-[#17151A] group-hover:text-[#E94368] transition-colors">{festival.name.split(' (')[0]}</h2>
                                        <p className="text-sm text-[#6D6870] line-clamp-2 leading-relaxed max-w-2xl font-medium">{festival.description}</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <Button variant="ghost" size="icon" className="text-[#17151A]/20 group-hover:text-[#E94368] group-hover:translate-x-1 transition-all">
                                            <ArrowRight className="h-6 w-6" />
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        )) : (
                            <div className="py-24 text-center border-2 border-dashed border-[#17151A]/10 rounded-sm">
                                <p className="text-[#6D6870] italic font-medium">No matching records found in the library index.</p>
                            </div>
                        )}
                    </div>

                    <div className="pt-12 text-center">
                         <Link href="/international-festivals">
                            <Button variant="outline" className="border-[#17151A]/10 text-[#17151A] hover:bg-[#17151A] hover:text-white font-bold h-12 px-10 rounded-sm uppercase tracking-widest text-[10px]">
                                <Globe className="mr-2 h-4 w-4" /> View International Map
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default function FestivalsPage() {
    return (
        <Suspense fallback={<div>Loading Library Index...</div>}>
            <FestivalsPageContent />
        </Suspense>
    );
}
