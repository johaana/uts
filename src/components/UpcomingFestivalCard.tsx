
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { parseISO, differenceInSeconds } from 'date-fns';
import React, { useEffect, useState } from 'react';

interface Festival {
    name: string;
    date: string;
    link: string;
    image: string;
    hint: string;
}

function CountdownBox({ value, label }: { value: number, label: string }) {
    return (
        <div className="flex flex-col items-center justify-center bg-primary/10 p-3 rounded-lg w-20 h-20">
            <span className="text-3xl font-bold text-primary tabular-nums">
                 {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs text-muted-foreground mt-1">{label}</span>
        </div>
    );
}

function FestivalDateDisplay({ dateString }: { dateString: string }) {
    const date = parseISO(dateString);
    return <p className="text-sm text-muted-foreground mb-4">{new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date)}</p>;
}

export function UpcomingFestivalCard({ festival }: { festival: Festival }) {
    const [isClient, setIsClient] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const targetDate = parseISO(festival.date);
        
        const timer = setInterval(() => {
            const now = new Date();
            const secondsLeft = differenceInSeconds(targetDate, now);

            if (secondsLeft < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(secondsLeft / 86400),
                hours: Math.floor((secondsLeft % 86400) / 3600),
                minutes: Math.floor((secondsLeft % 3600) / 60),
                seconds: secondsLeft % 60,
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isClient, festival.date]);

    const isFinished = isClient && differenceInSeconds(parseISO(festival.date), new Date()) < 0;

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
                    {isClient && <FestivalDateDisplay dateString={festival.date} />}
                </div>
                
                <div className="h-[92px] flex items-center justify-center">
                    {isClient && !isFinished ? (
                        <div className="flex justify-center gap-2">
                            <CountdownBox value={timeLeft.days} label="Days" />
                            <CountdownBox value={timeLeft.hours} label="Hours" />
                            <CountdownBox value={timeLeft.minutes} label="Mins" />
                            <CountdownBox value={timeLeft.seconds} label="Secs" />
                        </div>
                    ) : isClient && isFinished ? (
                         <div className="text-center font-bold text-accent py-3 px-4 rounded-lg bg-accent/10">
                            Happy Festival!
                        </div>
                    ) : (
                        <div className="h-[92px] w-full bg-muted/50 animate-pulse rounded-lg flex items-center justify-center">
                            <p className="text-muted-foreground">Loading Countdown...</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
