
'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { parse, differenceInSeconds, isFuture, format, isToday } from 'date-fns';

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

const CountdownUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
        <span className="text-2xl font-bold font-mono text-accent tracking-tighter">{String(value).padStart(2, '0')}</span>
        <span className="text-xs text-muted-foreground">{label}</span>
    </div>
);

export function UpcomingFestivalCard({ festival }: { festival: Festival }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [isPast, setIsPast] = useState(false);

    const festivalDate = parse(festival.date, 'MMMM d, yyyy', new Date());

    useEffect(() => {
        if (isNaN(festivalDate.getTime())) return;

        const timer = setInterval(() => {
            if (isFuture(festivalDate)) {
                const totalSeconds = differenceInSeconds(festivalDate, new Date());
                 if (totalSeconds > 0) {
                    setTimeLeft({
                        days: Math.floor(totalSeconds / (3600 * 24)),
                        hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
                        minutes: Math.floor((totalSeconds % 3600) / 60),
                        seconds: Math.floor(totalSeconds % 60),
                    });
                } else {
                    setTimeLeft(null);
                    setIsPast(true);
                }
            } else {
                setTimeLeft(null);
                setIsPast(true);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [festival.date, festivalDate]);
    
    return (
        <div className="p-1 h-full">
          <Card className="overflow-hidden h-full flex flex-col group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 w-full overflow-hidden bg-secondary">
               <Image src={festival.image} alt={festival.name} layout="fill" objectFit="cover" className="transition-transform duration-500 ease-in-out group-hover:scale-105" data-ai-hint={festival.hint}/>
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline text-2xl font-bold text-primary">{festival.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{format(festivalDate, 'MMMM d, yyyy')}</p>
                
                <div className="h-16 flex items-center justify-center my-2">
                    {isToday(festivalDate) ? (
                        <div className="flex items-center gap-2 text-2xl text-accent font-bold">
                            <Calendar className="w-6 h-6" />
                            <span>It's Today! Happy {festival.name}!</span>
                        </div>
                    ) : timeLeft ? (
                        <div className="grid grid-cols-4 gap-2 text-center w-full max-w-xs">
                           <CountdownUnit value={timeLeft.days} label="Days" />
                           <CountdownUnit value={timeLeft.hours} label="Hours" />
                           <CountdownUnit value={timeLeft.minutes} label="Mins" />
                           <CountdownUnit value={timeLeft.seconds} label="Secs" />
                        </div>
                   ) : isPast ? (
                        <div className="text-muted-foreground">This festival has passed.</div>
                   ): (
                        <div className="text-muted-foreground">Calculating...</div>
                   ) }
                </div>

                <div className="mt-auto pt-4">
                    <Link href={festival.link}>
                      <Button variant="link" className="p-0 text-accent hover:text-accent/90 font-bold">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                </div>
            </CardContent>
          </Card>
        </div>
    );
}
