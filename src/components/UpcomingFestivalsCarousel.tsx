'use client';

import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { parse, startOfDay } from 'date-fns';
import { allEvents } from '@/lib/festival-data';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { ArrowRight, Calendar } from 'lucide-react';

const parseFestivalDate = (dateStr: string): Date | null => {
    const startDateStr = dateStr.split(' - ')[0];
    try {
        const parsedDate = parse(startDateStr, 'MMM dd, yyyy', new Date());
        return isNaN(parsedDate.getTime()) ? null : parsedDate;
    } catch (e) {
        return null;
    }
};

export function UpcomingFestivalsCarousel() {
    const [festivals, setFestivals] = useState<any[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const now = startOfDay(new Date('2026-09-29'));
        const eventsWithParsedDates = allEvents
            .map(event => ({ ...event, parsedDate: parseFestivalDate(event.date) }))
            .filter(event => event.parsedDate && event.link);
        
        eventsWithParsedDates.sort((a, b) => a.parsedDate!.getTime() - b.parsedDate!.getTime());
        let startIndex = eventsWithParsedDates.findIndex(event => event.parsedDate! >= now);
        if (startIndex === -1) startIndex = 0;

        const rearrangedEvents = [
            ...eventsWithParsedDates.slice(startIndex),
            ...eventsWithParsedDates.slice(0, startIndex)
        ].slice(0, 6);

        setFestivals(rearrangedEvents);
    }, []);

    if (!isClient || festivals.length === 0) return null;

    return (
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
                {festivals.map((festival, index) => (
                    <CarouselItem key={`${festival.name}-${index}`} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <Link href={festival.link!} className="group">
                            <Card className="h-full bg-white border-[#17151A]/5 group-hover:border-[#17151A]/20 transition-all rounded-sm overflow-hidden">
                                <CardContent className="p-8 flex flex-col items-start text-left space-y-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#F7F4EE] flex items-center justify-center text-[#17151A] group-hover:bg-[#E94368]/10 group-hover:text-[#E94368] transition-colors">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-mono font-bold text-[#E94368] uppercase tracking-widest">{festival.date}</p>
                                        <h3 className="font-headline text-xl font-bold text-[#17151A] leading-tight">{festival.name}</h3>
                                    </div>
                                    <p className="text-sm text-[#6D6870] font-medium line-clamp-2">{festival.description}</p>
                                    <div className="pt-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#E94368]">
                                        View Detail <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
        </Carousel>
    );
}
