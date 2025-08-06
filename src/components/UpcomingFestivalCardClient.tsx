'use client';

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { parse, differenceInSeconds, isFuture, format, isToday, isSameDay } from 'date-fns';

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
    <div className="flex flex-col items-center p-2 bg-secondary/50 rounded-lg w-16">
        <span className="text-2xl font-bold font-mono text-accent tracking-tighter">{String(value).padStart(2, '0')}</span>
        <span className="text-xs text-muted-foreground">{label}</span>
    </div>
);

const calculateTimeLeft = (festivalDate: Date): TimeLeft | null => {
    const now = new Date();
    if (isFuture(festivalDate) || isSameDay(festivalDate, now)) {
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
    return null;
};

export function UpcomingFestivalCardClient({ festival }: { festival: Festival }) {
    const festivalDate = parse(festival.date, 'MMMM d, yyyy', new Date());
    
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        // Run initial calculation
        setTimeLeft(calculateTimeLeft(festivalDate));

        // Set up the timer
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(festivalDate);
            setTimeLeft(newTimeLeft);
            if (!newTimeLeft) {
                clearInterval(timer);
            }
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, [festival.date]);


    return (
        <>
            <p className="text-sm text-muted-foreground mb-4">{format(festivalDate, 'MMMM d, yyyy')}</p>
            <div className="h-20 flex items-center justify-center my-2">
                {isToday(festivalDate) ? (
                    <div className="flex items-center gap-2 text-xl text-accent font-bold text-center">
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
                ) : (
                    <div className="text-muted-foreground">This festival has passed.</div>
                )}
            </div>
        </>
    );
}
