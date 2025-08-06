
'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const useCountdown = (targetDateString: string): TimeLeft | null => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        const targetDate = new Date(targetDateString);

        if (isNaN(targetDate.getTime())) {
            // Invalid date string provided
            setTimeLeft(null);
            return;
        }

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft(null);
                clearInterval(timer);
            }
        }, 1000);

        // Initial calculation
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();
        if (difference <= 0) {
            setTimeLeft(null);
        }


        return () => clearInterval(timer);
    }, [targetDateString]);

    return timeLeft;
};
