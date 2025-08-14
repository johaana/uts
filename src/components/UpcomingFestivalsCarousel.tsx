
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
import { allEvents, allFestivals } from '@/lib/festival-data';

interface Festival {
    name: string;
    date: string;
    link: string;
    image: string;
    hint: string;
}

// Create a mapping from festival name to its image and hint for quick lookup
const festivalImageMap = new Map(
  allFestivals.map(f => [f.name.toLowerCase(), { image: f.image, hint: f.hint, link: f.link }])
);


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

const findImageData = (eventName: string) => {
    const eventNameLower = eventName.toLowerCase();
    
    // Try direct match first
    if (festivalImageMap.has(eventNameLower)) {
        return festivalImageMap.get(eventNameLower);
    }

    // Try matching the part before parenthesis, e.g., "Dhanteras (Diwali Day 1)" -> "Dhanteras"
    const baseNameMatch = eventName.match(/^(.*?)\s*\(/);
    if (baseNameMatch) {
        const baseName = baseNameMatch[1].trim().toLowerCase();
        if (festivalImageMap.has(baseName)) {
            return festivalImageMap.get(baseName);
        }
    }
    
    // Try splitting by '/' and matching the first part, e.g., "Makar Sankranti / Pongal" -> "Makar Sankranti"
    const slashParts = eventName.split('/');
    if (slashParts.length > 1) {
        const firstPart = slashParts[0].trim().toLowerCase();
        if (festivalImageMap.has(firstPart)) {
            return festivalImageMap.get(firstPart);
        }
    }

    // Fallback for Diwali-related events
    if (eventName.toLowerCase().includes('diwali')) {
        return festivalImageMap.get('diwali');
    }
     // Fallback for Parsi New Year
    if (eventName.toLowerCase().includes('parsi new year')) {
        return festivalImageMap.get('parsi new year');
    }

    return null;
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
                .filter(event => event.parsedDate && (isFuture(event.parsedDate) || isToday(event.parsedDate)))
                .sort((a, b) => a.parsedDate!.getTime() - b.parsedDate!.getTime())
                .map(event => {
                    let imageData = findImageData(event.name);
                    
                    if (!imageData) {
                        imageData = { image: "https://placehold.co/600x400.png", hint: "festival celebration", link: event.link || '#' };
                    }
                    
                    return {
                        name: event.name,
                        date: event.parsedDate!.toISOString(),
                        link: imageData.link || event.link,
                        image: imageData.image,
                        hint: imageData.hint,
                    };
                });
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
