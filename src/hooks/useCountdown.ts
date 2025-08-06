
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
        // Ensure this code only runs on the client
        const targetDate = new Date(targetDateString);
        if (isNaN(targetDate.getTime())) {
            setTimeLeft(null);
            return;
        }

        // Function to calculate time left
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return null;
        };
        
        // Set initial value
        setTimeLeft(calculateTimeLeft());

        // Set up interval to update every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
        
    }, [targetDateString]); // Rerun effect if targetDateString changes

    return timeLeft;
};
