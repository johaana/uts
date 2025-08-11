
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from 'next/image';
import { internationalFestivals } from '@/lib/festival-data';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function InternationalFestivalsPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="text-center mb-12">
                <h1 className="font-headline text-3xl md:text-5xl font-bold">Unique International Festivals</h1>
                <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                    Venture beyond borders and explore unique cultural celebrations from around the globe. Discover new traditions, vibrant colors, and profound stories.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
                {internationalFestivals.map((festival) => (
                    <Card key={festival.name} className="overflow-hidden group flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
                         <Link href={festival.link} className="block">
                            <div className="relative h-40 md:h-56 w-full bg-black/5">
                            <Image src={festival.image} alt={festival.name} layout="fill" objectFit="cover" data-ai-hint={festival.hint}/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                             <div className="absolute bottom-2 left-3 right-3 md:bottom-4 md:left-6 md:right-6">
                                <p className="text-xs font-semibold text-white/80 mb-1">{festival.region}</p>
                                <h2 className="font-headline text-lg md:text-2xl font-bold text-white drop-shadow-md leading-tight">{festival.name}</h2>
                             </div>
                            </div>
                        </Link>
                        <CardContent className="p-3 md:p-6 flex flex-col flex-grow">
                            <p className="text-sm text-foreground/70 mb-3 flex-grow">{festival.description}</p>
                            <Link href={festival.link}>
                                <Button variant="link" className="p-0 text-accent hover:text-accent/90 font-bold text-sm">
                                    Explore <ArrowRight className="ml-1 h-3 w-3" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

    