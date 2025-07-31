import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const festivals = [
    { name: "Diwali", region: "Nationwide", image: "https://images.unsplash.com/photo-1574322499484-85a8a7c08186?q=80&w=600&h=400&fit=crop", hint: "lights diyas", description: "The festival of lights, symbolizing the victory of light over darkness and good over evil.", link: "/festivals/diwali" },
    { name: "Holi", region: "Nationwide", image: "https://images.unsplash.com/photo-1519624090336-6b21b8575953?q=80&w=600&h=400&fit=crop", hint: "colors powder", description: "The vibrant festival of colors, celebrating the arrival of spring, love, and the triumph of good.", link: "/festivals/holi" },
    { name: "Eid-al-Fitr", region: "Nationwide", image: "https://images.unsplash.com/photo-1588081693449-cde6d2a7638d?q=80&w=600&h=400&fit=crop", hint: "eid prayer celebration", description: "Marking the end of Ramadan, this festival is a joyous celebration of feasting, prayer, and charity.", link: "/festivals/eid-al-fitr" },
    { name: "Navratri", region: "West & North", image: "https://images.unsplash.com/photo-1589498202028-2a2b72183c58?q=80&w=600&h=400&fit=crop", hint: "garba dance", description: "A nine-night festival dedicated to worshipping the nine forms of the goddess Durga, famous for its energetic Garba dances.", link: "/festivals/navratri" },
    { name: "Durga Puja", region: "East", image: "https://images.unsplash.com/photo-1544275932-c64057a6e5b8?q=80&w=600&h=400&fit=crop", hint: "goddess durga", description: "A grand ten-day festival in Bengal celebrating the goddess Durga's victory over the demon Mahishasur.", link: "/festivals/durga-puja" },
    { name: "Ganesh Chaturthi", region: "West & South", image: "https://images.unsplash.com/photo-1596791834185-a7c3315a4523?q=80&w=600&h=400&fit=crop", hint: "ganesha idol", description: "A spectacular festival celebrating the birth of Lord Ganesha, the god of new beginnings and wisdom.", link: "/festivals/ganesh-chaturthi" },
    { name: "Christmas", region: "Nationwide", image: "https://images.unsplash.com/photo-1576483510933-27a597a7a584?q=80&w=600&h=400&fit=crop", hint: "christmas tree", description: "Celebrating the birth of Jesus Christ, marked by carols, feasts, and the spirit of giving.", link: "/festivals/christmas" },
    { name: "Pongal", region: "South", image: "https://images.unsplash.com/photo-1608622834734-74a0f81b5abb?q=80&w=600&h=400&fit=crop", hint: "harvest festival", description: "A four-day harvest festival in Tamil Nadu to thank the Sun God, Surya, for a bountiful harvest.", link: "/festivals/pongal" },
    { name: "Onam", region: "South", image: "https://images.unsplash.com/photo-1630951165476-89680327391b?q=80&w=600&h=400&fit=crop", hint: "flower carpet", description: "Kerala's most important harvest festival, celebrating the homecoming of the mythical King Mahabali.", link: "/festivals/onam" },
    { name: "Bihu", region: "Northeast", image: "https://images.unsplash.com/photo-1588123199420-547867f520f2?q=80&w=600&h=400&fit=crop", hint: "assamese dance", description: "A set of three Assamese festivals celebrating different phases of the farming calendar with folk dance and music.", link: "/festivals/bihu" },
    { name: "Makar Sankranti", region: "Nationwide", image: "https://images.unsplash.com/photo-1548983961-21bf2f163e5e?q=80&w=600&h=400&fit=crop", hint: "kite festival", description: "A festival marking the sun's transit into Capricorn, celebrated with kite flying, bonfires, and feasts.", link: "/festivals/makar-sankranti" },
    { name: "Guru Nanak Jayanti", region: "Nationwide", image: "https://images.unsplash.com/photo-1588970014102-53d7153a0604?q=80&w=600&h=400&fit=crop", hint: "golden temple", description: "Celebrating the birth of the first Sikh Guru, Guru Nanak Dev Ji, with prayers and hymns.", link: "/festivals/guru-nanak-jayanti" },
    { name: "Raksha Bandhan", region: "Nationwide", image: "https://images.unsplash.com/photo-1628045350380-4d5162a04944?q=80&w=600&h=400&fit=crop", hint: "sacred thread", description: "A festival that celebrates the cherished bond between brothers and sisters, marked by the tying of a sacred thread.", link: "/festivals/raksha-bandhan" },
    { name: "Chhath Puja", region: "North & East", image: "https://images.unsplash.com/photo-1604435924739-429948033575?q=80&w=600&h=400&fit=crop", hint: "sun worship", description: "An ancient Hindu festival dedicated to the Sun God, Surya, thanking him for sustaining life on earth.", link: "/festivals/chhath-puja" },
    { name: "Rath Yatra", region: "East", image: "https://images.unsplash.com/photo-1596783794104-a690f0b4f3b7?q=80&w=600&h=400&fit=crop", hint: "chariot festival", description: "The spectacular chariot festival of Lord Jagannath celebrated in Puri and other cities.", link: "/festivals/rath-yatra" },
    { name: "Gudi Padwa", region: "West", image: "https://images.unsplash.com/photo-1587807316663-4972b2297ed1?q=80&w=600&h=400&fit=crop", hint: "gudi flag", description: "The Maharashtrian New Year, celebrated with the hoisting of a 'Gudi' and festive foods.", link: "/festivals/gudi-padwa" },
];

export default function FestivalsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Discover Indian Festivals</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    From the snow-capped Himalayas to the sun-drenched coasts, explore the diverse and colorful festivals that form the heartbeat of India.
                </p>
            </div>

            <Card className="p-6 mb-12">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative w-full flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Search for a festival (e.g., Diwali, Holi...)" className="pl-10"/>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <Select>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Filter by Region" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="nationwide">Nationwide</SelectItem>
                                <SelectItem value="north">North</SelectItem>
                                <SelectItem value="south">South</SelectItem>
                                <SelectItem value="east">East</SelectItem>
                                <SelectItem value="west">West</SelectItem>
                                <SelectItem value="central">Central</SelectItem>
                                <SelectItem value="northeast">Northeast</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Filter</Button>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {festivals.map((festival) => (
                    <Card key={festival.name} className="overflow-hidden group flex flex-col">
                        <Image src={festival.image} alt={festival.name} width={600} height={400} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={festival.hint} />
                        <CardContent className="p-6 flex flex-col flex-grow">
                            <p className="text-sm text-primary font-semibold mb-1">{festival.region}</p>
                            <h2 className="font-headline text-2xl font-bold mb-2">{festival.name}</h2>
                            <p className="text-foreground/70 mb-4 flex-grow">{festival.description}</p>
                            <Link href={festival.link}>
                                <Button variant="link" className="p-0 text-accent hover:text-accent/90">
                                    Explore Festival <ArrowRight className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
