
'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from 'next/image';
import { internationalEvents } from "@/lib/festival-data";
import { FestivalCalendar } from '@/components/FestivalCalendar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { InternationalHeroCarousel } from '@/components/InternationalHeroCarousel';

export function InternationalFestivalsPageContent() {

    const uniqueFestivals = Array.from(new Map(internationalEvents.map(item => [item.name.split(' (')[0], item])).values());

    return (
        <div className="space-y-16">

            <InternationalHeroCarousel />

            <div className="text-center">
                 <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
                    A Journey Through Global Celebrations. Explore the world, one festival at a time. Our calendar is your passport to the most vibrant cultural events across the globe, from the lantern-lit skies of Thailand to the fiery traditions of Scotland.
                </p>
            </div>

            <FestivalCalendar 
                events={internationalEvents}
                availableRegions={["Global", "Asia", "Europe", "North America", "South America", "Africa", "Australia"]}
                availableEventTypes={["Cultural", "Religious", "Holiday", "New Year", "Seasonal"]}
                title="International Festival Calendar"
                description="Plan your global adventures around these vibrant cultural celebrations."
                showLongWeekendInfo={false}
                displayLimit={100}
            />
        </div>
    );
}
