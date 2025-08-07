
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

const allFestivalsData = [
  { name: "Raksha Bandhan", date: "2025-08-09T00:00:00", link: "/festivals/raksha-bandhan", image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg", hint: "rakhi thread" },
  { name: "Ganesh Chaturthi", date: "2025-08-27T00:00:00", link: "/festivals/ganesh-chaturthi", image: "https://i.postimg.cc/VNWGcb3N/ganesh-chaturthi-festival.jpg", hint: "ganesha idol" },
  { name: "Onam", date: "2025-09-05T00:00:00", link: "/festivals/onam", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
  { name: "Navratri", date: "2025-09-22T00:00:00", link: "/festivals/navratri", image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg", hint: "garba dance" },
  { name: "Diwali", date: "2025-10-20T00:00:00", link: "/festivals/diwali", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali celebration" },
  { name: "Guru Nanak Jayanti", date: "2025-11-05T00:00:00", link: "/festivals/guru-nanak-jayanti", image: "https://i.postimg.cc/zXgfBv19/karah-prasad.jpg", hint: "sikh prayer" },
  { name: "Christmas", date: "2025-12-25T00:00:00", link: "/festivals/christmas", image: "https://i.postimg.cc/ncKMYdWy/christmas-2.jpg", hint: "christmas decor" },
  
  // 2026
  { name: "Lohri", date: "2026-01-13T00:00:00", link: "/festivals/lohri", image: "https://i.postimg.cc/kGQ9w7QS/north-india-festivals.webp", hint: "lohri bonfire" },
  { name: "Pongal / Makar Sankranti", date: "2026-01-14T00:00:00", link: "/festivals/pongal", image: "https://i.postimg.cc/tJ3RkTB3/Onam.png", hint: "pongal dish" },
  { name: "Holi", date: "2026-03-04T00:00:00", link: "/festivals/holi", image: "https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg", hint: "holi celebration" },
  { name: "Eid-al-Fitr", date: "2026-03-20T00:00:00", link: "/festivals/eid-al-fitr", image: "https://i.postimg.cc/sQC9PHmM/sheer-khurma.jpg", hint: "eid food" },
  { name: "Raksha Bandhan", date: "2026-08-28T00:00:00", link: "/festivals/raksha-bandhan", image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg", hint: "rakhi thread" },
  { name: "Ganesh Chaturthi", date: "2026-09-15T00:00:00", link: "/festivals/ganesh-chaturthi", image: "https://i.postimg.cc/VNWGcb3N/ganesh-chaturthi-festival.jpg", hint: "ganesha idol" },
  { name: "Onam", date: "2026-09-26T00:00:00", link: "/festivals/onam", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
  { name: "Navratri", date: "2026-10-12T00:00:00", link: "/festivals/navratri", image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg", hint: "garba dance" },
  { name: "Diwali", date: "2026-11-08T00:00:00", link: "/festivals/diwali", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali lamps" },
  { name: "Guru Nanak Jayanti", date: "2026-11-24T00:00:00", link: "/festivals/guru-nanak-jayanti", image: "https://i.postimg.cc/zXgfBv19/karah-prasad.jpg", hint: "sikh prayer" },
  { name: "Christmas", date: "2026-12-25T00:00:00", link: "/festivals/christmas", image: "https://i.postimg.cc/ncKMYdWy/christmas-2.jpg", hint: "christmas decor" },

  // 2027
  { name: "Lohri", date: "2027-01-13T00:00:00", link: "/festivals/lohri", image: "https://i.postimg.cc/kGQ9w7QS/north-india-festivals.webp", hint: "lohri bonfire" },
  { name: "Pongal / Makar Sankranti", date: "2027-01-14T00:00:00", link: "/festivals/pongal", image: "https://i.postimg.cc/tJ3RkTB3/Onam.png", hint: "pongal dish" },
  { name: "Holi", date: "2027-03-23T00:00:00", link: "/festivals/holi", image: "https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg", hint: "holi colors" },
  { name: "Raksha Bandhan", date: "2027-08-18T00:00:00", link: "/festivals/raksha-bandhan", image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg", hint: "rakhi thread" },
  { name: "Ganesh Chaturthi", date: "2027-09-04T00:00:00", link: "/festivals/ganesh-chaturthi", image: "https://i.postimg.cc/VNWGcb3N/ganesh-chaturthi-festival.jpg", hint: "ganesha idol" },
  { name: "Onam", date: "2027-09-15T00:00:00", link: "/festivals/onam", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
  { name: "Navratri", date: "2027-10-01T00:00:00", link: "/festivals/navratri", image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg", hint: "garba dance" },
  { name: "Diwali", date: "2027-10-29T00:00:00", link: "/festivals/diwali", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali lamps" },
  { name: "Guru Nanak Jayanti", date: "2027-11-13T00:00:00", link: "/festivals/guru-nanak-jayanti", image: "https://i.postimg.cc/zXgfBv19/karah-prasad.jpg", hint: "sikh prayer" },
  { name: "Christmas", date: "2027-12-25T00:00:00", link: "/festivals/christmas", image: "https://i.postimg.cc/ncKMYdWy/christmas-2.jpg", hint: "christmas decor" }
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
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const now = new Date();
            now.setHours(0, 0, 0, 0); 
            const filtered = allFestivalsData
                .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime())
                .filter(festival => {
                    try {
                        const festivalDate = parseISO(festival.date);
                        return isFuture(festivalDate) || isToday(festivalDate);
                    } catch (e) {
                        return false;
                    }
                });
            setUpcomingFestivals(filtered);
        }
    }, [isClient]);

    if (!isClient || upcomingFestivals.length === 0) {
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
