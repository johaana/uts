
'use client';

import { useParams, useRouter } from 'next/navigation';
import { allEvents, internationalEvents } from '@/lib/festival-data';
import { useMemo } from 'react';
import { parse } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const monthData: { [key: string]: { image: string; hint: string; tagline: string; next: string; prev: string } } = {
    january: { image: 'https://i.postimg.cc/gJrdvSxD/makar-sankranti.jpg', hint: 'kites festival', tagline: "The year's hopeful dawn, crisp with tradition and new harvests.", next: 'february', prev: 'december' },
    february: { image: 'https://i.postimg.cc/QCVN56qC/Venice-Carnival-Italy.jpg', hint: 'venetian masks', tagline: "A world of masks, mystique, and blossoming love.", next: 'march', prev: 'january' },
    march: { image: 'https://i.postimg.cc/0276MjRN/Holi.jpg', hint: 'holi celebration', tagline: "When the world dissolves into a riot of color and joyous release.", next: 'april', prev: 'february' },
    april: { image: 'https://i.postimg.cc/htb3BK98/cherry-blossom-festival.jpg', hint: 'cherry blossoms', tagline: "A celebration of renewal, faith, and nature's gentle rebirth.", next: 'may', prev: 'march' },
    may: { image: 'https://i.postimg.cc/L438TyHZ/buddha-purnima.webp', hint: 'buddha statue', tagline: "A time of serene reflection and spiritual enlightenment.", next: 'june', prev: 'april' },
    june: { image: 'https://i.postimg.cc/kXC7f44W/rath-yatra.jpg', hint: 'chariot festival', tagline: "When gods journey among mortals under the summer sun.", next: 'july', prev: 'may' },
    july: { image: 'https://i.postimg.cc/N0MM9Q6G/boryeong.avif', hint: 'mud festival', tagline: "A season of pure, unadulterated, messy fun.", next: 'august', prev: 'june' },
    august: { image: 'https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg', hint: 'onam feast', tagline: "The homecoming of kings and the bounty of harvest feasts.", next: 'september', prev: 'july' },
    september: { image: 'https://i.postimg.cc/Zn3Rzsz8/navratri1.jpg', hint: 'garba dance', tagline: "Nine nights of divine feminine energy and electrifying dance.", next: 'october', prev: 'august' },
    october: { image: 'https://i.postimg.cc/TYs5B2K4/lakshmi_puja.webp', hint: 'lakshmi ganesh puja', tagline: "When a million lamps light up the darkest night of the year.", next: 'november', prev: 'september' },
    november: { image: 'https://i.postimg.cc/XJs7rMdt/Yi-Peng-Lantern-Festival-Thailand.webp', hint: 'sky lanterns', tagline: "A sky full of wishes, floating towards the heavens.", next: 'december', prev: 'october' },
    december: { image: 'https://i.postimg.cc/XvpjNQWp/hola-mohalla3.jpg', hint: 'sikh warriors', tagline: "A month of bonfires, valor, and cozy, festive cheer.", next: 'january', prev: 'november' },
};


export default function MonthPage() {
    const router = useRouter();
    const params = useParams();
    const monthName = Array.isArray(params.month) ? params.month[0] : params.month;

    const monthIndex = new Date(Date.parse(monthName +" 1, 2025")).getMonth();

    const currentMonthData = monthData[monthName.toLowerCase()];
    
    const allGlobalEvents = [...allEvents, ...internationalEvents];

    const festivals = useMemo(() => {
        if (monthIndex === -1) return [];
        return allGlobalEvents.filter(event => {
            const dateStr = event.date.split(' - ')[0];
            const eventDate = parse(dateStr, 'MMM dd, yyyy', new Date());
            return eventDate.getMonth() === monthIndex;
        }).sort((a, b) => {
            const dateA = parse(a.date.split(' - ')[0], 'MMM dd, yyyy', new Date()).getDate();
            const dateB = parse(b.date.split(' - ')[0], 'MMM dd, yyyy', new Date()).getDate();
            return dateA - dateB;
        });
    }, [monthIndex]);

    if (!currentMonthData) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Invalid month. Please return to the calendar.</p>
                <Link href="/calendar">
                    <Button variant="link">Back to Calendar</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="relative min-h-screen w-full">
            <div className="fixed inset-0 z-0">
                <Image 
                    src={currentMonthData.image} 
                    alt={`${monthName} festivals`} 
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={currentMonthData.hint}
                    className="opacity-20"
                />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
                 <div className="text-center mb-12">
                    <h1 className="font-headline text-5xl md:text-8xl font-bold text-primary capitalize">{monthName}</h1>
                    <p className="mt-4 text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto italic">{currentMonthData.tagline}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {festivals.map(festival => (
                         <Card key={festival.slug || festival.name} className="bg-background/70 hover:bg-background transition-shadow duration-300 shadow-md hover:shadow-xl">
                            <CardContent className="p-6">
                                <h3 className="font-headline text-2xl font-bold text-primary mb-2">{festival.name.split(' (')[0]}</h3>
                                <p className="text-sm text-muted-foreground mb-3">{festival.region}</p>
                                <p className="text-foreground/80 mb-4 text-sm">{festival.description}</p>
                                <Link href={festival.link || '#'} passHref>
                                    <Button variant="link" className="p-0 text-accent">
                                        Explore Festival <ArrowRight className="w-4 h-4 ml-2"/>
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-16">
                     <Link href={`/calendar/${currentMonthData.prev}`} passHref>
                        <Button variant="outline">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Previous Month
                        </Button>
                    </Link>
                     <Link href="/calendar" passHref>
                        <Button>Back to Yearly Calendar</Button>
                    </Link>
                     <Link href={`/calendar/${currentMonthData.next}`} passHref>
                        <Button variant="outline">
                           Next Month
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
