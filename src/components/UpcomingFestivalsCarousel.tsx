
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
import { parse, isFuture, isToday, startOfDay } from 'date-fns';
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
    const [festivals, setFestivals] = useState<Festival[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const now = startOfDay(new Date());
            
            const eventsWithParsedDates = allEvents
                .map(event => ({ ...event, parsedDate: parseFestivalDate(event.date) }))
                .filter(event => event.parsedDate && event.image && event.link);
            
            eventsWithParsedDates.sort((a, b) => a.parsedDate!.getTime() - b.parsedDate!.getTime());

            // Find the index of the first upcoming event
            let startIndex = eventsWithParsedDates.findIndex(event => isFuture(event.parsedDate!) || isToday(event.parsedDate!));
            if (startIndex === -1) { // If no upcoming events in the current cycle, start from the beginning
                startIndex = 0;
            }

            // Create a rearranged array that starts with the upcoming events and loops around
            const rearrangedEvents = [
                ...eventsWithParsedDates.slice(startIndex),
                ...eventsWithParsedDates.slice(0, startIndex)
            ];

            const formattedFestivals = rearrangedEvents.map(event => ({
                name: event.name,
                date: event.parsedDate!.toISOString(),
                link: event.link!,
                image: event.image!,
                hint: event.hint!,
            }));

            setFestivals(formattedFestivals);
        }
    }, [isClient]);

    if (!isClient || festivals.length === 0) {
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
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className="-ml-2 md:-ml-4">
                {festivals.map((festival, index) => (
                    <CarouselItem key={`${festival.name}-${index}`} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <UpcomingFestivalCard festival={festival} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
    );
}
