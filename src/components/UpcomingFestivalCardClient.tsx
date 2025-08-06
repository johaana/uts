
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import React, { useState, useEffect } from 'react';
import { differenceInSeconds, parseISO } from 'date-fns';

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

function CountdownBox({ value, label }: { value: number, label: string }) {
    return (
        <div className="flex flex-col items-center justify-center bg-primary/10 p-3 rounded-lg w-20 h-20">
            <span className="text-3xl font-bold text-primary">{String(value).padStart(2, '0')}</span>
            <span className="text-xs text-muted-foreground mt-1">{label}</span>
        </div>
    );
}

function FestivalDateDisplay({ dateString }: { dateString: string }) {
    try {
        const date = parseISO(dateString);
        return <p className="text-sm text-muted-foreground mb-4">{new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date)}</p>;
    } catch (e) {
        return <p className="text-sm text-muted-foreground mb-4">Invalid Date</p>;
    }
}


export function UpcomingFestivalCardClient({ festival }: { festival: Festival }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const festivalDate = parseISO(festival.date);

        const timer = setInterval(() => {
            const now = new Date();
            const diff = differenceInSeconds(festivalDate, now);

            if (diff <= 0) {
                setTimeLeft(null);
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (60 * 60 * 24)),
                hours: Math.floor((diff / (60 * 60)) % 24),
                minutes: Math.floor((diff / 60) % 60),
                seconds: Math.floor(diff % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [festival.date, isClient]);


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
                    <FestivalDateDisplay dateString={festival.date} />
                </div>
                
                <div className="h-[92px] flex items-center justify-center">
                    {timeLeft && isClient ? (
                        <div className="flex justify-center gap-2">
                            <CountdownBox value={timeLeft.days} label="Days" />
                            <CountdownBox value={timeLeft.hours} label="Hours" />
                            <CountdownBox value={timeLeft.minutes} label="Mins" />
                            <CountdownBox value={timeLeft.seconds} label="Secs" />
                        </div>
                    ) : (
                         <div className="text-center font-bold text-accent py-3 px-4 rounded-lg bg-accent/10">
                            Happy Festival!
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
