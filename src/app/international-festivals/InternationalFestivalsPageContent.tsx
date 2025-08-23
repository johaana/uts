

'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from 'next/image';
import { internationalEvents } from "@/lib/festival-data";
import { FestivalCalendar } from '@/components/FestivalCalendar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function InternationalFestivalsPageContent() {
    return (
        <div className="space-y-16">
            <FestivalCalendar 
                events={internationalEvents}
                availableRegions={["Global", "Asia", "Europe", "North America", "South America", "Africa", "Australia"]}
                availableEventTypes={["Cultural", "Religious", "Holiday", "New Year", "Seasonal"]}
                title="International Festival Calendar"
                description="Plan your global adventures around these vibrant cultural celebrations."
                showLongWeekendInfo={false}
            />

            <div>
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary">Explore Global Celebrations</h2>
                    <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                        Click on any festival to discover its unique story, traditions, and significance.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {internationalEvents.map((festival) => (
                        <Card key={festival.slug} className="overflow-hidden group flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
                            <Link href={festival.link!} className="block">
                                <div className="relative aspect-[4/3] w-full bg-black/5">
                                <Image src={festival.image!} alt={festival.name} layout="fill" objectFit="cover" data-ai-hint={festival.hint}/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-3 left-3 right-3">
                                    <h2 className="font-headline text-lg md:text-2xl font-bold text-white drop-shadow-md leading-tight">{festival.name.split(' (')[0]}</h2>
                                </div>
                                </div>
                            </Link>
                            <CardContent className="p-3 md:p-4 flex flex-col flex-grow">
                                <p className="text-xs text-primary font-semibold mb-2">{festival.region}</p>
                                <p className="text-sm text-foreground/70 mb-3 flex-grow">{festival.description}</p>
                                <Link href={festival.link!}>
                                    <Button variant="link" className="p-0 text-accent hover:text-accent/90 font-bold text-sm mt-auto">
                                        Explore <ArrowRight className="ml-1 h-3 w-3" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
