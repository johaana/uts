
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { parseISO, format } from 'date-fns';
import { FestivalCountdown } from './FestivalCountdown';

interface Festival {
    name: string;
    date: string;
    link: string;
    image: string;
    hint: string;
}

export function UpcomingFestivalCard({ festival }: { festival: Festival }) {
    if (!festival) {
        return null;
    }

    let formattedDate = "";
    try {
        const date = parseISO(festival.date);
        if(!isNaN(date.getTime())) {
            formattedDate = format(date, 'EEEE, MMMM dd, yyyy');
        }
    } catch (e) {
        // console.error("Could not parse date", festival.date);
    }

    return (
        <Card className="h-full overflow-hidden group flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 w-full overflow-hidden">
                <Link href={festival.link}>
                    <Image
                        src={festival.image}
                        alt={festival.name || "Festival image"}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={festival.hint}
                        className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </Link>
            </div>
            <CardContent className="p-6 flex flex-col flex-grow items-center text-center">
                <div className="flex-grow">
                    <h3 className="font-headline text-2xl font-bold mb-2">
                        <Link href={festival.link} className="hover:text-primary transition-colors">
                            {festival.name}
                        </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{formattedDate}</p>
                </div>

                <div className="w-full flex items-center justify-center">
                    <FestivalCountdown 
                        targetDate={festival.date} 
                        festivalName={festival.name}
                        festivalLink={festival.link}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
