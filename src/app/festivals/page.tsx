'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search, RotateCcw } from "lucide-react";
import Link from "next/link";

const allFestivals = [
    { name: "Diwali", region: "Nationwide", description: "The festival of lights, symbolizing the victory of light over darkness and good over evil.", link: "/festivals/diwali" },
    { name: "Holi", region: "Nationwide", description: "The vibrant festival of colors, celebrating the arrival of spring, love, and the triumph of good.", link: "/festivals/holi" },
    { name: "Eid-al-Fitr", region: "Nationwide", description: "Marking the end of Ramadan, this festival is a joyous celebration of feasting, prayer, and charity.", link: "/festivals/eid-al-fitr" },
    { name: "Navratri", region: "West & North", description: "A nine-night festival dedicated to worshipping the nine forms of the goddess Durga, famous for its energetic Garba dances.", link: "/festivals/navratri" },
    { name: "Durga Puja", region: "East", description: "A grand ten-day festival in Bengal celebrating the goddess Durga's victory over the demon Mahishasur.", link: "/festivals/durga-puja" },
    { name: "Ganesh Chaturthi", region: "West & South", description: "A spectacular festival celebrating the birth of Lord Ganesha, the god of new beginnings and wisdom.", link: "/festivals/ganesh-chaturthi" },
    { name: "Christmas", region: "Nationwide", description: "Celebrating the birth of Jesus Christ, marked by carols, feasts, and the spirit of giving.", link: "/festivals/christmas" },
    { name: "Pongal", region: "South", description: "A four-day harvest festival in Tamil Nadu to thank the Sun God, Surya, for a bountiful harvest.", link: "/festivals/pongal" },
    { name: "Onam", region: "South", description: "Kerala's most important harvest festival, celebrating the homecoming of the mythical King Mahabali.", link: "/festivals/onam" },
    { name: "Bihu", region: "Northeast", description: "A set of three Assamese festivals celebrating different phases of the farming calendar with folk dance and music.", link: "/festivals/bihu" },
    { name: "Makar Sankranti", region: "Nationwide", description: "A festival marking the sun's transit into Capricorn, celebrated with kite flying, bonfires, and feasts.", link: "/festivals/makar-sankranti" },
    { name: "Guru Nanak Jayanti", region: "Nationwide", description: "Celebrating the birth of the first Sikh Guru, Guru Nanak Dev Ji, with prayers and hymns.", link: "/festivals/guru-nanak-jayanti" },
    { name: "Raksha Bandhan", region: "Nationwide", description: "A festival that celebrates the cherished bond between brothers and sisters, marked by the tying of a sacred thread.", link: "/festivals/raksha-bandhan" },
    { name: "Chhath Puja", region: "North & East", description: "An ancient Hindu festival dedicated to the Sun God, Surya, thanking him for sustaining life on earth.", link: "/festivals/chhath-puja" },
    { name: "Rath Yatra", region: "East", description: "The spectacular chariot festival of Lord Jagannath celebrated in Puri and other cities.", link: "/festivals/rath-yatra" },
    { name: "Gudi Padwa", region: "West", description: "The Maharashtrian New Year, celebrated with the hoisting of a 'Gudi' and festive foods.", link: "/festivals/gudi-padwa" },
    { name: "Lohri", region: "North", description: "A popular Punjabi folk festival, celebrating the winter solstice and the harvest of rabi crops.", link: "/festivals/lohri" },
    { name: "Vasant Panchami", region: "Nationwide", description: "A festival that marks the preparation for the arrival of spring, dedicated to the goddess Saraswati.", link: "/festivals/vasant-panchami" },
    { name: "Muharram", region: "Nationwide", description: "A solemn period of remembrance and mourning for Shia Muslims, commemorating the martyrdom of Imam Hussein.", link: "/festivals/muharram" },
    { name: "Akshaya Tritiya", region: "Nationwide", description: "An auspicious day of eternal prosperity, believed to bring good fortune and success.", link: "/festivals/akshaya-tritiya" },
    { name: "Nag Panchami", region: "Nationwide", description: "A traditional day of serpent worship, observed by offering milk and prayers to snake deities.", link: "/festivals/nag-panchami" },
    { name: "Hornbill Festival", region: "Northeast", description: "A vibrant festival in Nagaland showcasing the rich culture and traditions of the Naga tribes.", link: "/festivals/hornbill-festival" },
    { name: "Thaipusam", region: "South", description: "A powerful Tamil festival of faith, endurance, and penance dedicated to Lord Murugan.", link: "/festivals/thaipusam" },
    { name: "Hemis Tsechu", region: "North", description: "A colorful Buddhist festival in Ladakh with masked dances celebrating the birth of Guru Padmasambhava.", link: "/festivals/hemis-tsechu" },
    { name: "Goa Carnival", region: "West", description: "A vibrant and energetic carnival in Goa with Portuguese roots, featuring parades, music, and dance.", link: "/festivals/goa-carnival" },
];

const regions = ["Nationwide", "North", "South", "East", "West", "Central", "Northeast"];
const sortOptions = ["Name (A-Z)", "Name (Z-A)"];

function FestivalsPageContent() {
    const searchParams = useSearchParams();
    const initialRegion = searchParams.get('region') || 'all';

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState(initialRegion);
    const [sortOrder, setSortOrder] = useState(sortOptions[0]);

    useEffect(() => {
        setSelectedRegion(initialRegion);
    }, [initialRegion]);
    
    const resetFilters = () => {
        setSearchTerm('');
        setSelectedRegion('all');
        setSortOrder(sortOptions[0]);
    };

    const filteredAndSortedFestivals = useMemo(() => {
        let festivals = allFestivals.filter(festival => {
            const nameMatch = festival.name.toLowerCase().includes(searchTerm.toLowerCase());
            const regionMatch = selectedRegion === 'all' || festival.region.toLowerCase().includes(selectedRegion.toLowerCase());
            return nameMatch && regionMatch;
        });

        if (sortOrder === "Name (A-Z)") {
            festivals.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === "Name (Z-A)") {
            festivals.sort((a, b) => b.name.localeCompare(a.name));
        }

        return festivals;
    }, [searchTerm, selectedRegion, sortOrder]);


    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Discover Indian Festivals</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    From the snow-capped Himalayas to the sun-drenched coasts, explore the diverse and colorful festivals that form the heartbeat of India. An essential guide to dates, rituals, and stories.
                </p>
            </div>

            <Card className="p-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                    <div className="relative w-full lg:col-span-2">
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
                    <div className="md:col-span-full flex justify-end">
                         <Button variant="ghost" onClick={resetFilters}>
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset Filters
                        </Button>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedFestivals.length > 0 ? filteredAndSortedFestivals.map((festival) => (
                    <Card key={festival.name} className="overflow-hidden group flex flex-col">
                        <CardContent className="p-6 flex flex-col flex-grow">
                            <p className="text-sm text-primary font-semibold mb-1">{festival.region}</p>
                            <h2 className="font-headline text-2xl font-bold mb-2 h-14">{festival.name}</h2>
                            <p className="text-foreground/70 mb-4 flex-grow">{festival.description}</p>
                            <Link href={festival.link}>
                                <Button variant="link" className="p-0 text-accent hover:text-accent/90">
                                    Explore Festival <ArrowRight className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                )) : (
                    <p className="text-center md:col-span-3">No festivals found matching your criteria.</p>
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
