
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
import { parse, parseISO, isFuture, isToday } from 'date-fns';
import { allEvents } from '@/lib/festival-data';

interface Festival {
    name: string;
    date: string;
    link: string;
    image: string;
    hint: string;
}

const festivalImages: Record<string, {image: string, hint: string}> = {
  "Raksha Bandhan": { image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg", hint: "rakhi thread" },
  "Ganesh Chaturthi": { image: "https://i.postimg.cc/VNWGcb3N/ganesh-chaturthi-festival.jpg", hint: "ganesha idol" },
  "Onam": { image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
  "Navratri": { image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg", hint: "garba dance" },
  "Diwali (Lakshmi Puja) (Day 3)": { image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali celebration" },
  "Diwali": { image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali celebration" },
  "Guru Nanak Jayanti": { image: "https://i.postimg.cc/zXgfBv19/karah-prasad.jpg", hint: "sikh prayer" },
  "Christmas": { image: "https://i.postimg.cc/ncKMYdWy/christmas-2.jpg", hint: "christmas decor" },
  "Lohri": { image: "https://i.postimg.cc/kGQ9w7QS/north-india-festivals.webp", hint: "lohri bonfire" },
  "Pongal": { image: "https://i.postimg.cc/tJ3RkTB3/Onam.png", hint: "pongal dish" },
  "Makar Sankranti / Pongal": { image: "https://i.postimg.cc/tJ3RkTB3/Onam.png", hint: "pongal dish" },
  "Holi": { image: "https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg", hint: "holi celebration" },
  "Eid-al-Fitr": { image: "https://i.postimg.cc/sQC9PHmM/sheer-khurma.jpg", hint: "eid food" },
};


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
                .filter(event => event.parsedDate && (isFuture(event.parsedDate) || isToday(event.parsedDate)))
                .sort((a, b) => a.parsedDate!.getTime() - b.parsedDate!.getTime())
                .map(event => {
                    const imageData = festivalImages[event.name] || { image: "https://placehold.co/600x400.png", hint: "festival celebration" };
                    return {
                        name: event.name,
                        date: event.parsedDate!.toISOString(),
                        link: event.link,
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
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
        </Carousel>
    );
}
