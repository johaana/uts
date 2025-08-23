
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { internationalEvents } from '@/lib/festival-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


export function InternationalFestivalsShowcase() {
  return (
    <Carousel
        opts={{
            align: "start",
            loop: true,
        }}
        plugins={[
            Autoplay({
              delay: 4000,
            }),
        ]}
        className="w-full"
    >
        <CarouselContent className="-ml-2 md:-ml-4">
            {internationalEvents.map((festival, index) => (
                <CarouselItem key={festival.slug} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                    <div className="p-1 h-full">
                         <Link href={festival.link!} className="group">
                            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <CardContent className="p-0">
                                <div className="relative aspect-[4/3] w-full bg-secondary/30">
                                <Image 
                                    src={festival.image!} 
                                    alt={festival.name} 
                                    layout="fill" 
                                    objectFit="cover"
                                    data-ai-hint={festival.hint}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                <h3 className="absolute bottom-3 left-3 font-headline text-xl md:text-2xl font-bold text-white drop-shadow-md">
                                    {festival.name}
                                </h3>
                                </div>
                            </CardContent>
                            </Card>
                        </Link>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="hidden lg:flex absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
}

    