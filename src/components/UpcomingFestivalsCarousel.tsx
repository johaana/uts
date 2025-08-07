
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
import { parseISO, isFuture, isToday } from 'date-fns';

// This data is now self-contained within the client component.
const allFestivalsData = [
  { name: "Raksha Bandhan", date: "2024-08-19T00:00:00", link: "/festivals/raksha-bandhan", image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg", hint: "rakhi festival" },
  { name: "Ganesh Chaturthi", date: "2024-09-07T00:00:00", link: "/festivals/ganesh-chaturthi", image: "https://i.postimg.cc/VNWGcb3N/ganesh-chaturthi-festival.jpg", hint: "ganesha idol" },
  { name: "Onam", date: "2024-09-15T00:00:00", link: "/festivals/onam", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
  { name: "Navratri", date: "2024-10-03T00:00:00", link: "/festivals/navratri", image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg", hint: "garba dance" },
  { name: "Durga Puja", date: "2024-10-09T00:00:00", link: "/festivals/durga-puja", image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp", hint: "durga idol" },
  { name: "Diwali", date: "2024-11-01T00:00:00", link: "/festivals/diwali", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali celebration" },
  { name: "Lohri", date: "2025-01-13T00:00:00", link: "/festivals/lohri", image: "https://i.postimg.cc/kGQ9w7QS/north-india-festivals.webp", hint: "lohri bonfire" },
  { name: "Holi", date: "2025-03-14T00:00:00", link: "/festivals/holi", image: "https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg", hint: "holi celebration" }
];


interface Festival {
    name: string;
    date: string;
    link: string;
    image: string;
    hint: string;
}

export function UpcomingFestivalsCarousel() {
    const [upcomingFestivals, setUpcomingFestivals] = useState<Festival[]>([]);

    useEffect(() => {
        // This logic now runs only on the client, after hydration.
        const now = new Date();
        now.setHours(0, 0, 0, 0); 
        const filtered = allFestivalsData.filter(festival => {
            try {
                const festivalDate = parseISO(festival.date);
                return isFuture(festivalDate) || isToday(festivalDate);
            } catch (e) {
                return false;
            }
        });
        setUpcomingFestivals(filtered);
    }, []);

    if (upcomingFestivals.length === 0) {
        return (
            <div className="text-center text-foreground/80 py-10">
                <p>Stay tuned for more upcoming festivals!</p>
            </div>
        );
    }

    return (
        <Carousel
            opts={{
                align: "start",
                loop: upcomingFestivals.length > 1,
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
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
        </Carousel>
    );
}
