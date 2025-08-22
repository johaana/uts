

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

        // De-duplicate festivals that might appear multiple times due to different dates
        const uniqueFestivals = Array.from(new Map(festivals.map(item => [item.slug, item])).values());


        return uniqueFestivals;
    }, [searchTerm, selectedRegion, sortOrder]);


    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-3xl md:text-5xl font-bold">Discover Indian Festivals</h1>
                <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
                    From the snow-capped Himalayas to the sun-drenched coasts, explore the diverse and colorful festivals that form the heartbeat of India. An essential guide to dates, rituals, and stories.
                </p>
            </div>

            <Card className="p-4 md:p-6 mb-12">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                    <div className="relative w-full col-span-2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input 
                            placeholder="Search for a festival (e.g., Diwali, Holi...)" 
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by Region" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Regions</SelectItem>
                            {regions.map(region => (
                                <SelectItem key={region} value={region}>{region}</SelectItem>
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
                    <div className="col-span-full flex flex-wrap items-center justify-end mt-2 gap-2">
                         <Link href="/international-festivals">
                            <Button className="bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                <Globe className="mr-2 h-4 w-4" />
                                Explore International Festivals
                            </Button>
                        </Link>
                         <Button variant="ghost" onClick={resetFilters}>
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset Filters
                        </Button>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {filteredAndSortedFestivals.length > 0 ? filteredAndSortedFestivals.map((festival) => (
                    <Card key={festival.slug} className="overflow-hidden group flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
                         <Link href={festival.link!} className="block">
                            <div className="relative aspect-[4/3] w-full bg-black/5">
                            <Image src={festival.image!} alt={festival.name} layout="fill" objectFit="cover" data-ai-hint={festival.hint}/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                             <div className="absolute bottom-3 left-3 right-3">
                                <h2 className="font-headline text-lg md:text-2xl font-bold text-white drop-shadow-md leading-tight">{festival.name.split(' (')[0]}</h2>
                             </div>
                            </div>
                        </Link>
                        <CardContent className="p-3 md:p-4 flex flex-col flex-grow">
                             <p className="text-xs text-primary font-semibold mb-2">{festival.region}</p>
                            <p className="text-sm text-foreground/70 mb-3 flex-grow">{festival.description}</p>
                            <Link href={festival.link!}>
                                <Button variant="link" className="p-0 text-accent hover:text-accent/90 font-bold text-sm mt-auto">
                                    Explore <ArrowRight className="ml-1 h-3 w-3" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                )) : (
                    <p className="text-center col-span-full">No festivals found matching your criteria.</p>
                )}
            </div>
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
