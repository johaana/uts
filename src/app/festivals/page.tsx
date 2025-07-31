import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const festivals = [
    { name: "Diwali", region: "Nationwide", image: "https://placehold.co/600x400.png", hint: "lights diyas", description: "The festival of lights, symbolizing the victory of light over darkness." },
    { name: "Holi", region: "Nationwide", image: "https://placehold.co/600x400.png", hint: "colors powder", description: "The festival of colors, celebrating the arrival of spring and love." },
    { name: "Navratri", region: "West", image: "https://placehold.co/600x400.png", hint: "garba dance", description: "A nine-night festival dedicated to the goddess Durga." },
    { name: "Durga Puja", region: "East", image: "https://placehold.co/600x400.png", hint: "goddess durga", description: "A major festival in Bengal celebrating the goddess Durga's victory." },
    { name: "Ganesh Chaturthi", region: "West", image: "https://placehold.co/600x400.png", hint: "ganesha idol", description: "Celebrates the birth of Lord Ganesha, the god of new beginnings." },
    { name: "Pongal", region: "South", image: "https://placehold.co/600x400.png", hint: "harvest festival", description: "A harvest festival celebrated in Tamil Nadu to thank the Sun God." },
    { name: "Onam", region: "South", image: "https://placehold.co/600x400.png", hint: "flower carpet", description: "A harvest festival of Kerala that celebrates the homecoming of King Mahabali." },
    { name: "Bihu", region: "Northeast", image: "https://placehold.co/600x400.png", hint: "assamese dance", description: "A set of three important Assamese festivals celebrating different phases of the farming calendar." },
];

export default function FestivalsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Discover Indian Festivals</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    From the snow-capped Himalayas to the sun-drenched coasts, explore the diverse and colorful festivals of India.
                </p>
            </div>

            <Card className="p-6 mb-12">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative w-full flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Search for a festival..." className="pl-10"/>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <Select>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Filter by Region" />
                            </SelectTrigger>
                            <SelectContent>
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
                            <Link href={`/festivals/${festival.name.toLowerCase().replace(' ', '-')}`}>
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
