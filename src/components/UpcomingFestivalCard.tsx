
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { parseISO, differenceInSeconds, format } from 'date-fns';
import { useEffect, useState } from 'react';

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

function CountdownBox({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center justify-center bg-primary/10 p-3 rounded-lg w-20 h-20">
            <span className="text-3xl font-bold text-primary tabular-nums">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs text-muted-foreground mt-1">{label}</span>
        </div>
    );
}

export function UpcomingFestivalCard({ festival }: { festival: Festival }) {
    const [isClient, setIsClient] = useState(false);
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const calculateTimeLeft = () => {
            try {
                const target = parseISO(festival.date);
                const now = new Date();
                const seconds = differenceInSeconds(target, now);

                if (seconds <= 0) {
                    return null;
                }

                return {
                    days: Math.floor(seconds / 86400),
                    hours: Math.floor((seconds % 86400) / 3600),
                    minutes: Math.floor((seconds % 3600) / 60),
                    seconds: seconds % 60,
                };
            } catch (error) {
                console.error("Error parsing date:", festival.date, error);
                return null;
            }
        };

        // Set initial value
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);


        return () => clearInterval(timer);
    }, [isClient, festival.date]);
    
    if (!festival) {
        return null;
    }

    const formattedDate = format(parseISO(festival.date), 'EEEE, MMMM dd, yyyy');

    return (
        <Card className="h-full overflow-hidden group flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 w-full overflow-hidden">
                <Link href={festival.link}>
                    <Image
                        src={festival.image}
                        alt={festival.name}
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
                     {isClient && timeLeft ? (
                        <div className="flex justify-center gap-2">
                            <CountdownBox value={timeLeft.days} label="Days" />
                            <CountdownBox value={timeLeft.hours} label="Hours" />
                            <CountdownBox value={timeLeft.minutes} label="Mins" />
                            <CountdownBox value={timeLeft.seconds} label="Secs" />
                        </div>
                    ) : (
                         <div className="text-center font-bold text-accent py-3 px-4 rounded-lg bg-accent/10 w-full">
                            Happy Festival!
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
