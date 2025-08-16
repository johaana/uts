
'use client';

import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { UpcomingFestivalCard } from "./UpcomingFestivalCard";
import { parse, isFuture, isToday } from 'date-fns';
import { allEvents } from '@/lib/festival-data';

interface Festival {
    name: string;
    date: string;
    link: string;
    image: string;
    hint: string;
}

const parseFestivalDate = (dateStr: string): Date | null => {
    // Handles "MMM dd, yyyy" and "MMM dd - MMM dd, yyyy"
    const startDateStr = dateStr.split(' - ')[0];
    try {
        const parsedDate = parse(startDateStr, 'MMM dd, yyyy', new Date());
        if (isNaN(parsedDate.getTime())) {
            return null;
        }
        return parsedDate;
    } catch (e) {
        return null;
    }
};

export function UpcomingFestivalsCarousel() {
    const [upcomingFestivals, setUpcomingFestivals] = useState<Festival[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const now = new Date();
            now.setHours(0, 0, 0, 0); 
            const filtered = allEvents
                .map(event => {
                    const parsedDate = parseFestivalDate(event.date);
                    return { ...event, parsedDate };
                })
                .filter(event => event.parsedDate && (isFuture(event.parsedDate) || isToday(event.parsedDate)) && event.image)
                .sort((a, b) => a.parsedDate!.getTime() - b.parsedDate!.getTime())
                .map(event => ({
                    name: event.name,
                    date: event.parsedDate!.toISOString(),
                    link: event.link!,
                    image: event.image!,
                    hint: event.hint!,
                }));
            setUpcomingFestivals(filtered);
        }
    }, [isClient]);

    if (!isClient || upcomingFestivals.length === 0) {
        return (
            <div className="text-center text-foreground/80 py-10">
                <p>Loading upcoming festivals...</p>
            </div>
        );
    }

    return (
        <Carousel
            opts={{
                align: "start",
                loop: upcomingFestivals.length > 2,
            }}
            className="w-full"
        >
            <CarouselContent>
                {upcomingFestivals.map((festival, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <UpcomingFestivalCard festival={festival} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4" />
            <CarouselNext className="absolute -right-4" />
        </Carousel>
    );
}

    