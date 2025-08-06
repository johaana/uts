
'use client';

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { format, differenceInSeconds, isFuture, isToday } from 'date-fns';

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

const calculateTimeLeft = (targetDate: Date): TimeLeft | null => {
    const now = new Date();
    if (isFuture(targetDate)) {
        const totalSeconds = differenceInSeconds(targetDate, now);
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

export function UpcomingFestivalCardClient({ festivalDate, festivalName }: { festivalDate: Date, festivalName: string }) {
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(festivalDate));

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft(festivalDate);
            setTimeLeft(newTimeLeft);
            if (!newTimeLeft) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [festivalDate]);

    return (
        <>
            <p className="text-sm text-muted-foreground mb-4">{format(festivalDate, 'MMMM d, yyyy')}</p>
            <div className="h-20 flex items-center justify-center my-2">
                {isToday(festivalDate) ? (
                    <div className="flex items-center gap-2 text-xl text-accent font-bold text-center">
                        <Calendar className="w-6 h-6" />
                        <span>It's Today! Happy {festivalName}!</span>
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
