
'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { parse, differenceInDays } from 'date-fns';

interface Festival {
    name: string;
    date: string;
    link: string;
    image: string;
    hint: string;
}

export function UpcomingFestivalCard({ festival }: { festival: Festival }) {
    const [daysLeft, setDaysLeft] = useState<number | null>(null);

    useEffect(() => {
        const calculateDaysLeft = () => {
            try {
                const now = new Date();
                // Set hours to 0 to compare dates only
                now.setHours(0, 0, 0, 0);

                let festivalDate = parse(festival.date, 'MMMM d, yyyy', new Date());

                // If parsing fails, it might be because no year is specified in some date strings
                // This is a robust way to handle it, but the current data seems to include the year.
                if (isNaN(festivalDate.getTime())) {
                     // Fallback for dates without year, assume current year
                    festivalDate = parse(festival.date, 'MMMM d', new Date());
                    festivalDate.setFullYear(now.getFullYear());
                }

                // If the festival date for the current year has already passed, set it to next year
                if (festivalDate < now) {
                    festivalDate.setFullYear(now.getFullYear() + 1);
                }

                const diff = differenceInDays(festivalDate, now);
                setDaysLeft(diff);

            } catch (error) {
                console.error("Error parsing date:", festival.date, error);
                setDaysLeft(null);
            }
        };

        calculateDaysLeft();
        // Update once a day
        const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60 * 24); 
        return () => clearInterval(interval);
    }, [festival.date]);
    
    return (
        <div className="p-1 h-full">
          <Card className="overflow-hidden h-full flex flex-col group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 w-full overflow-hidden bg-secondary">
               <Image src={festival.image} alt={festival.name} layout="fill" objectFit="cover" className="transition-transform duration-500 ease-in-out group-hover:scale-105" data-ai-hint={festival.hint}/>
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline text-2xl font-bold flex-grow h-14 text-primary">{festival.name}</h3>
                <div className="text-sm text-muted-foreground mb-4">
                    <p>{festival.date}</p>
                    {daysLeft !== null && (
                         <div className="flex items-center gap-2 mt-2 text-accent font-bold">
                            <Calendar className="w-4 h-4" />
                            <span>
                                {daysLeft === 0 ? "Today!" : daysLeft > 0 ? `In ${daysLeft} ${daysLeft === 1 ? "day" : "days"}!` : ''}
                            </span>
                        </div>
                    )}
                </div>
                <Link href={festival.link}>
                  <Button variant="link" className="p-0 mt-auto text-accent hover:text-accent/90 font-bold">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
            </CardContent>
          </Card>
        </div>
    );
}
