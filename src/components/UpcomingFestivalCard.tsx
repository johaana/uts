
'use client';

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { parse } from 'date-fns';
import { UpcomingFestivalCardClient } from "./UpcomingFestivalCardClient";

interface Festival {
    name: string;
    date: string;
    link: string;
    image: string;
    hint: string;
}

export function UpcomingFestivalCard({ festival }: { festival: Festival }) {
    const festivalDate = parse(festival.date, 'MMMM d, yyyy', new Date());

    return (
        <div className="p-1 h-full">
          <Card className="overflow-hidden h-full flex flex-col group shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative h-64 w-full overflow-hidden bg-secondary">
               <Image src={festival.image} alt={festival.name} layout="fill" objectFit="cover" className="transition-transform duration-500 ease-in-out group-hover:scale-105" data-ai-hint={festival.hint}/>
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline text-2xl font-bold text-primary">{festival.name}</h3>
                
                <UpcomingFestivalCardClient festival={festival} />

                <div className="mt-auto pt-4">
                    <Link href={festival.link}>
                      <Button variant="link" className="p-0 text-accent hover:text-accent/90 font-bold">
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                </div>
            </CardContent>
          </Card>
        </div>
    );
}
