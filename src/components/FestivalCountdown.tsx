
'use client';

import { useEffect, useState } from 'react';
import { parseISO, differenceInSeconds } from 'date-fns';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

interface FestivalCountdownProps {
    targetDate: string;
    festivalName: string;
    festivalLink: string;
}

export function FestivalCountdown({ targetDate, festivalName, festivalLink }: FestivalCountdownProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const calculateTimeLeft = () => {
        try {
            const target = parseISO(targetDate);
            const now = new Date();
            const seconds = differenceInSeconds(target, now);

            if (seconds <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
            }

            return {
                days: Math.floor(seconds / 86400),
                hours: Math.floor((seconds % 86400) / 3600),
                minutes: Math.floor((seconds % 3600) / 60),
                seconds: seconds % 60,
                isFinished: false
            };
        } catch (e) {
             return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        if (timeLeft.isFinished) {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isClient, targetDate, timeLeft.isFinished]);

    if (!isClient) {
        return <div className="h-20 w-full"></div>; // Placeholder for SSR
    }

    if (timeLeft.isFinished) {
        const simpleFestivalName = festivalName.split(' (')[0];
        return (
            <div className="text-center flex flex-col items-center gap-3 py-3 px-4 rounded-lg bg-accent/10 w-full">
                <p className="font-bold text-lg text-accent">Happy {simpleFestivalName}!</p>
                <Link href={festivalLink}>
                    <Button>
                        Explore <ArrowRight className="w-4 h-4 ml-2"/>
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex justify-center gap-2">
            <CountdownBox value={timeLeft.days} label="Days" />
            <CountdownBox value={timeLeft.hours} label="Hours" />
            <CountdownBox value={timeLeft.minutes} label="Mins" />
            <CountdownBox value={timeLeft.seconds} label="Secs" />
        </div>
    );
}
