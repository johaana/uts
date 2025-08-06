'use client';

import { useState, useEffect } from 'react';
import { differenceInSeconds, isFuture, parseISO } from 'date-fns';
import { Card, CardContent } from './ui/card';
import Link from 'next/link';
import Image from 'next/image';

interface Festival {
    name: string;
    date: string;
    link: string;
    image: string;
    hint: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft = (festivalDate: Date): TimeLeft | null => {
    const now = new Date();
    if (isFuture(festivalDate)) {
        const totalSeconds = differenceInSeconds(festivalDate, now);
        if (totalSeconds > 0) {
            return {
                days: Math.floor(totalSeconds / (3600 * 24)),
                hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
                minutes: Math.floor((totalSeconds % 3600) / 60),
                seconds: Math.floor(totalSeconds % 60),
            };
        }
    }
    return null; // Festival is today or has passed
};

function CountdownBox({ value, label }: { value: number, label: string }) {
    return (
        <div className="flex flex-col items-center justify-center bg-primary/10 p-3 rounded-lg w-20 h-20">
            <span className="text-3xl font-bold text-primary">{String(value).padStart(2, '0')}</span>
            <span className="text-xs text-muted-foreground mt-1">{label}</span>
        </div>
    );
}

export function UpcomingFestivalCardClient({ festival }: { festival: Festival }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [festivalDate, setFestivalDate] = useState<Date | null>(null);
    
    useEffect(() => {
        // This effect runs only on the client after hydration
        const parsedDate = parseISO(festival.date);
        setFestivalDate(parsedDate);
        setTimeLeft(calculateTimeLeft(parsedDate));

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(parsedDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [festival.date]);

    return (
        <Card className="h-full overflow-hidden group flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={festival.image}
                    alt={festival.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={festival.hint}
                    className="transition-transform duration-500 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <CardContent className="p-6 flex flex-col flex-grow items-center text-center">
                 <div className="flex-grow">
                    <h3 className="font-headline text-2xl font-bold mb-2">
                        <Link href={festival.link} className="hover:text-primary transition-colors">
                            {festival.name}
                        </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        {festivalDate ? new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(festivalDate) : 'Loading...'}
                    </p>
                </div>
                
                {timeLeft ? (
                    <div className="flex justify-center gap-2 mt-4">
                        <CountdownBox value={timeLeft.days} label="Days" />
                        <CountdownBox value={timeLeft.hours} label="Hours" />
                        <CountdownBox value={timeLeft.minutes} label="Mins" />
                        <CountdownBox value={timeLeft.seconds} label="Secs" />
                    </div>
                ) : (
                    <div className="mt-4 text-center font-bold text-accent py-3 px-4 rounded-lg bg-accent/10 h-[92px] flex items-center justify-center">
                        {festivalDate && new Date() > festivalDate ? "Festival has passed!" : "Happy Festival!"}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
