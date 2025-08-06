
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

export function UpcomingFestivalCard({ festival }: { festival: Festival }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [isFestivalToday, setIsFestivalToday] = useState(false);
    const [displayDate, setDisplayDate] = useState(festival.date);

    useEffect(() => {
        const calculateTimeLeft = () => {
            try {
                const festivalDate = parse(festival.date, 'MMMM d, yyyy', new Date());
                const now = new Date();

                if (isNaN(festivalDate.getTime())) {
                    setTimeLeft(null);
                    return;
                }

                setDisplayDate(format(festivalDate, 'MMMM d, yyyy'));

                if (isToday(festivalDate)) {
                    setIsFestivalToday(true);
                    setTimeLeft(null);
                    return;
                }
                
                setIsFestivalToday(false);

                if (isFuture(festivalDate)) {
                    const totalSeconds = differenceInSeconds(festivalDate, now);
                    if (totalSeconds <= 0) {
                        setTimeLeft(null);
                    } else {
                        setTimeLeft({
                            days: Math.floor(totalSeconds / (3600 * 24)),
                            hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
                            minutes: Math.floor((totalSeconds % 3600) / 60),
                            seconds: Math.floor(totalSeconds % 60),
                        });
                    }
                } else {
                    setTimeLeft(null);
                }
            } catch (error) {
                console.error("Error calculating time left:", error);
                setTimeLeft(null);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [festival.date]);
    
    return (
        <div className="p-1 h-full">
          <Card className="overflow-hidden h-full flex flex-col group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 w-full overflow-hidden bg-secondary">
               <Image src={festival.image} alt={festival.name} layout="fill" objectFit="cover" className="transition-transform duration-500 ease-in-out group-hover:scale-105" data-ai-hint={festival.hint}/>
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline text-2xl font-bold flex-grow h-14 text-primary">{festival.name}</h3>
                <div className="text-sm text-muted-foreground mb-4">
                    <p>{displayDate}</p>
                    <div className="flex items-center gap-2 mt-2 text-accent font-bold h-5">
                       {isFestivalToday ? (
                            <>
                                <Calendar className="w-4 h-4" />
                                <span>It's Today!</span>
                            </>
                       ) : timeLeft ? (
                             <div className="flex items-baseline space-x-1 font-mono">
                                <div><span className="text-lg">{timeLeft.days}</span><span className="text-xs">d</span></div>
                                <div><span className="text-lg">{String(timeLeft.hours).padStart(2,'0')}</span><span className="text-xs">h</span></div>
                                <div><span className="text-lg">{String(timeLeft.minutes).padStart(2, '0')}</span><span className="text-xs">m</span></div>
                                <div><span className="text-lg">{String(timeLeft.seconds).padStart(2, '0')}</span><span className="text-xs">s</span></div>
                            </div>
                       ) : null}
                    </div>
                </div>
                <Link href={festival.link}>
                  <Button variant="link" className="p-0 mt-auto text-accent hover:text-accent/90 font-bold">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
            </CardContent>
          </Card>
        </div>
    );
}
