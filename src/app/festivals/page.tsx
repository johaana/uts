
'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search, RotateCcw } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const allFestivals = [
    { name: "Diwali", region: "Nationwide", description: "The festival of lights, symbolizing the victory of light over darkness and good over evil.", link: "/festivals/diwali", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali celebration" },
    { name: "Holi", region: "Nationwide", description: "The vibrant festival of colors, celebrating the arrival of spring, love, and the triumph of good.", link: "/festivals/holi", image: "https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg", hint: "holi celebration" },
    { name: "Eid-al-Fitr", region: "Nationwide", description: "Marking the end of Ramadan, this festival is a joyous celebration of feasting, prayer, and charity.", link: "/festivals/eid-al-fitr", image: "https://i.postimg.cc/sQC9PHmM/sheer-khurma.jpg", hint: "eid food" },
    { name: "Navratri", region: "Nationwide", description: "A nine-night festival dedicated to worshipping the nine forms of the goddess Durga, famous for its energetic Garba dances.", link: "/festivals/navratri", image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg", hint: "garba dance" },
    { name: "Durga Puja", region: "East", description: "A grand ten-day festival in Bengal celebrating the goddess Durga's victory over the demon Mahishasur.", link: "/festivals/durga-puja", image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp", hint: "durga idol" },
    { name: "Ganesh Chaturthi", region: "West & South", description: "A spectacular festival celebrating the birth of Lord Ganesha, the god of new beginnings and wisdom.", link: "/festivals/ganesh-chaturthi", image: "https://i.postimg.cc/VNWGcb3N/ganesh-chaturthi-festival.jpg", hint: "ganesha idol" },
    { name: "Christmas", region: "Nationwide", description: "Celebrating the birth of Jesus Christ, marked by carols, feasts, and the spirit of giving.", link: "/festivals/christmas", image: "https://i.postimg.cc/rpDTKRn2/Christmas.webp", hint: "christmas decor" },
    { name: "Pongal", region: "South", description: "A four-day harvest festival in Tamil Nadu to thank the Sun God, Surya, for a bountiful harvest.", link: "/festivals/pongal", image: "https://i.postimg.cc/tJ3RkTB3/Onam.png", hint: "pongal dish" },
    { name: "Onam", region: "South", description: "Kerala's most important harvest festival, celebrating the homecoming of the mythical King Mahabali.", link: "/festivals/onam", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
    { name: "Bihu", region: "Northeast", description: "A set of three Assamese festivals celebrating different phases of the farming calendar with folk dance and music.", link: "/festivals/bihu", image: "https://i.postimg.cc/k5GJKp5Z/vaisakhi.webp", hint: "bihu dance" },
    { name: "Makar Sankranti", region: "Nationwide", description: "A festival marking the sun's transit into Capricorn, celebrated with kite flying, bonfires, and feasts.", link: "/festivals/makar-sankranti", image: "https://i.postimg.cc/tJ3RkTB3/Onam.png", hint: "pongal dish" },
    { name: "Guru Nanak Jayanti", region: "Nationwide", description: "Celebrating the birth of the first Sikh Guru, Guru Nanak Dev Ji, with prayers and hymns.", link: "/festivals/guru-nanak-jayanti", image: "https://i.postimg.cc/029q7BWf/guru-nanak-jayanti.webp", hint: "sikh prayer" },
    { name: "Raksha Bandhan", region: "Nationwide", description: "A festival that celebrates the cherished bond between brothers and sisters, marked by the tying of a sacred thread.", link: "/festivals/raksha-bandhan", image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg", hint: "rakhi thread" },
    { name: "Chhath Puja", region: "North & East", description: "An ancient Hindu festival dedicated to the Sun God, Surya, thanking him for sustaining life on earth.", link: "/festivals/chhath-puja", image: "https://i.postimg.cc/KYmDZCCg/chath-puja-festival1.webp", hint: "chhath puja" },
    { name: "Rath Yatra", region: "East", description: "The spectacular chariot festival of Lord Jagannath celebrated in Puri and other cities.", link: "/festivals/rath-yatra", image: "https://i.postimg.cc/kXC7f44W/rath-yatra.jpg", hint: "chariot festival" },
    { name: "Gudi Padwa", region: "West", description: "The Maharashtrian New Year, celebrated with the hoisting of a 'Gudi' and festive foods.", link: "/festivals/gudi-padwa", image: "https://i.postimg.cc/DwjFvPcc/gudi-padwa.webp", hint: "gudi flag" },
    { name: "Lohri", region: "North", description: "A popular Punjabi folk festival, celebrating the winter solstice and the harvest of rabi crops.", link: "/festivals/lohri", image: "https://i.postimg.cc/MGgSRZNM/lohri-1.webp", hint: "lohri bonfire" },
    { name: "Vasant Panchami", region: "Nationwide", description: "A festival that marks the preparation for the arrival of spring, dedicated to the goddess Saraswati.", link: "/festivals/vasant-panchami", image: "https://i.postimg.cc/15KsTQn2/Vasant-Panchami.webp", hint: "saraswati puja" },
    { name: "Muharram", region: "Nationwide", description: "A solemn period of remembrance and mourning for Shia Muslims, commemorating the martyrdom of Imam Hussein.", link: "/festivals/muharram", image: "https://i.postimg.cc/j5JRknP4/Muharram.webp", hint: "muharram procession" },
    { name: "Akshaya Tritiya", region: "Nationwide", description: "An auspicious day of eternal prosperity, believed to bring good fortune and success.", link: "/festivals/akshaya-tritiya", image: "https://i.postimg.cc/Rh92QWRF/dhanteras1.webp", hint: "gold coins" },
    { name: "Nag Panchami", region: "Nationwide", description: "A traditional day of serpent worship, observed by offering milk and prayers to snake deities.", link: "/festivals/nag-panchami", image: "https://i.postimg.cc/SRFm0QGF/nag-panchami.webp", hint: "snake worship" },
    { name: "Hornbill Festival", region: "Northeast", description: "A vibrant festival in Nagaland showcasing the rich culture and traditions of the Naga tribes.", link: "/festivals/hornbill-festival", image: "https://i.postimg.cc/52MbHQMm/North-East-festivals.jpg", hint: "naga festival" },
    { name: "Thaipusam", region: "South", description: "A powerful Tamil festival of faith, endurance, and penance dedicated to Lord Murugan.", link: "/festivals/thaipusam", image: "https://i.postimg.cc/j5CbVzzR/south-indian-festivals.jpg", hint: "kavadi" },
    { name: "Hemis Tsechu", region: "North", description: "A colorful Buddhist festival in Ladakh with masked dances celebrating the birth of Guru Padmasambhava.", link: "/festivals/hemis-tsechu", image: "https://i.postimg.cc/mDBXxRCR/losar-2.jpg", hint: "ladakh festival" },
    { name: "Goa Carnival", region: "West", description: "A vibrant and energetic carnival in Goa with Portuguese roots, featuring parades, music, and dance.", link: "/festivals/goa-carnival", image: "https://i.postimg.cc/jjxTcV2w/Western-India-festivals-1.jpg", hint: "goa carnival" },
    { name: "Republic Day", region: "Nationwide", description: "Celebrating the adoption of the Indian Constitution with a grand parade in the capital.", link: "/festivals/republic-day", image: "https://i.postimg.cc/W4kyBGYz/independence-day.avif", hint: "indian army parade" },
    { name: "Independence Day", region: "Nationwide", description: "Commemorating India's freedom from British rule, marked by flag-hoisting ceremonies.", link: "/festivals/independence-day", image: "https://i.postimg.cc/W4kyBGYz/independence-day.avif", hint: "indian flag" },
    { name: "Gandhi Jayanti", region: "Nationwide", description: "Marking the birth anniversary of Mahatma Gandhi, the 'Father of the Nation'.", link: "/festivals/gandhi-jayanti", image: "https://i.postimg.cc/bJ1Ktx1W/gandhi-jayanti.webp", hint: "mahatma gandhi" },
    { name: "Good Friday", region: "Nationwide", description: "A Christian holiday commemorating the crucifixion of Jesus Christ.", link: "/festivals/good-friday", image: "https://i.postimg.cc/ncKMYdWy/christmas-2.jpg", hint: "church cross" },
    { name: "Bastar Dussehra", region: "Central", description: "A unique 75-day long Dussehra celebration in Chhattisgarh's Bastar region, focused on nature and local deities.", link: "/festivals/bastar-dussehra", image: "https://i.postimg.cc/wMVZW9fk/dussehra.jpg", hint: "dussehra celebration" },
    { name: "Hareli Festival", region: "Central", description: "A harvest festival in Chhattisgarh marking the beginning of the Shravan month with worship of farm equipment and cattle.", link: "/festivals/hareli-festival", image: "https://i.postimg.cc/1tQKkPvr/central-india-fest-maha-kumbh.avif", hint: "tribal festival" },
    { name: "Madai Festival", region: "Central", description: "A prominent tribal festival of the Gond tribe in Chhattisgarh, involving rituals and folk dances.", link: "/festivals/madai-festival", image: "https://i.postimg.cc/1tQKkPvr/central-india-fest-maha-kumbh.avif", hint: "tribal fair" },
    { name: "Teej", region: "North", description: "A monsoon festival celebrating the union of Shiva and Parvati, observed by women with fasting and prayers.", link: "/festivals/teej", image: "https://i.postimg.cc/kGQ9w7QS/north-india-festivals.webp", hint: "teej swings" },
    { name: "Karva Chauth", region: "North", description: "A traditional Hindu festival where married women fast for the longevity and well-being of their husbands.", link: "/festivals/karva-chauth", image: "https://i.postimg.cc/k500G1RW/karva-chauth.webp", hint: "karva chauth puja" },
    { name: "Ugadi", region: "South", description: "The New Year's Day for the people of Andhra Pradesh, Telangana, and Karnataka.", link: "/festivals/ugadi", image: "https://i.postimg.cc/jj8gBsCj/puranpoli.jpg", hint: "ugadi pachadi" },
    { name: "Vishu", region: "South", description: "The astronomical new year festival celebrated in Kerala, marking the first day of Medam.", link: "/festivals/vishu", image: "https://i.postimg.cc/Y26HGH30/karthigai-deepam.jpg", hint: "vishu kani" },
    { name: "Karthigai Deepam", region: "South", description: "A festival of lights celebrated by Tamil Hindus, where homes are decorated with oil lamps.", link: "/festivals/karthigai-deepam", image: "https://i.postimg.cc/Y26HGH30/karthigai-deepam.jpg", hint: "diya lamps" },
    { name: "Yaoshang", region: "Northeast", description: "Manipur's biggest festival, celebrated for five days, combining Hindu and indigenous traditions.", link: "/festivals/yaoshang", image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp", hint: "manipur festival" },
    { name: "Chapchar Kut", region: "Northeast", description: "A spring festival of Mizoram celebrated after the completion of their most arduous task of jhum cultivation.", link: "/festivals/chapchar-kut", image: "https://i.postimg.cc/52MbHQMm/North-East-festivals.jpg", hint: "mizo dance" },
    { name: "Mopin", region: "Northeast", description: "A vibrant harvest festival of the Galo tribe in Arunachal Pradesh to drive away evil spirits.", link: "/festivals/mopin", image: "https://i.postimg.cc/52MbHQMm/North-East-festivals.jpg", hint: "galo tribe" },
    { name: "Wangala", region: "Northeast", description: "A harvest festival of the Garo tribe in Meghalaya, also known as the 100 Drums festival.", link: "/festivals/wangala", image: "https://i.postimg.cc/50vMmdWP/Wangala.webp", hint: "garo dance" },
    { name: "Nuakhai", region: "East", description: "An agricultural festival in Odisha to welcome the new rice of the season.", link: "/festivals/nuakhai", image: "https://i.postimg.cc/zGMM2tj4/nuakhai.avif", hint: "odisha festival" },
    { name: "Maha Shivaratri", region: "Nationwide", description: "A major festival dedicated to the worship of Lord Shiva, the god of destruction.", link: "/festivals/maha-shivaratri", image: "https://i.postimg.cc/52NbWR80/mahashivratri.jpg", hint: "shiva statue" },
    { name: "Ram Navami", region: "Nationwide", description: "Celebrating the birth of Lord Rama, the seventh avatar of Vishnu.", link: "/festivals/ram-navami", image: "https://i.postimg.cc/Vvqmzy7S/ram-navami.webp", hint: "lord rama" },
    { name: "Anant Chaturdashi", region: "West & South", description: "The final day of the Ganesh Chaturthi festival, marking the immersion of Ganesha idols.", link: "/festivals/anant-chaturdashi", image: "https://i.postimg.cc/RVSjWnhp/anant-chaturdashi.jpg", hint: "ganesh visarjan" },
    { name: "Eid-al-Adha", region: "Nationwide", description: "The 'Festival of Sacrifice', one of the two main Islamic holidays.", link: "/festivals/eid-al-adha", image: "https://i.postimg.cc/KYWZNDkY/eid-al-adha.webp", hint: "eid prayer" },
    { name: "Janmashtami", region: "Nationwide", description: "Celebrating the birth of Lord Krishna, the eighth avatar of Vishnu.", link: "/festivals/janmashtami", image: "https://i.postimg.cc/02VhD2Jk/janmashtami.jpg", hint: "krishna idol" },
];


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
                        <div className="relative h-64 w-full bg-black/5 overflow-hidden">
                          <Image src={festival.image} alt={festival.name} layout="fill" objectFit="cover" data-ai-hint={festival.hint} className="transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                        </div>
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

    