
'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { UpcomingFestivalCard } from "./UpcomingFestivalCard";

interface Festival {
    name: string;
    date: string;
    link: string;
    image: string;
    hint: string;
}

interface UpcomingFestivalsCarouselProps {
    festivals: Festival[];
}

export function UpcomingFestivalsCarousel({ festivals }: UpcomingFestivalsCarouselProps) {
    if (!festivals || festivals.length === 0) {
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
                loop: festivals.length > 1,
            }}
            className="w-full"
        >
            <CarouselContent>
                {festivals.map((festival, index) => (
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
