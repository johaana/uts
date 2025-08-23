
'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';


function DesktopShowcase() {
    const uniqueFestivals = Array.from(new Map(internationalEvents.map(item => [item.name.split(' (')[0], item])).values());
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent className="-ml-2 md:-ml-4">
                {uniqueFestivals.map((festival, index) => (
                    <CarouselItem key={festival.slug} className="pl-2 md:pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
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
                                    <div className="p-4">
                                        <p className="text-sm text-foreground/80 line-clamp-3">{festival.description}</p>
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
    )
}

function MobileShowcase() {
  const uniqueFestivals = Array.from(new Map(internationalEvents.map(item => [item.name.split(' (')[0], item])).values());
  
  return (
    <div className="relative">
      <Carousel
         opts={{ loop: true }}
         plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
        ]}
      >
        <CarouselContent>
          {uniqueFestivals.map((festival, index) => (
            <CarouselItem key={index}>
              <Link href={festival.link!}>
                <Card className="overflow-hidden">
                    <div className="relative w-full aspect-[4/3.2] overflow-hidden">
                        <Image
                            src={festival.image!}
                            alt={festival.name}
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint={festival.hint}
                            className='transition-transform duration-500 ease-in-out group-hover:scale-105'
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="font-headline text-2xl font-bold text-white drop-shadow-md">
                                {festival.name}
                            </h3>
                             <p className="text-white/90 text-sm mt-1 line-clamp-2">{festival.description}</p>
                        </div>
                    </div>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white border-none hover:bg-black/50 h-8 w-8" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white border-none hover:bg-black/50 h-8 w-8" />
      </Carousel>
    </div>
  )
}


export function InternationalFestivalsShowcase() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
      return <DesktopShowcase />;
  }

  return <MobileShowcase />;
}
