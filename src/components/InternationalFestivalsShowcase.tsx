
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { internationalEvents } from '@/lib/festival-data';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function InternationalFestivalsShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      {internationalEvents.slice(0,6).map((festival) => (
        <Link href={festival.link!} key={festival.name} className="group">
          <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="relative h-64 w-full bg-secondary/30">
                 <Image 
                    src={festival.image!} 
                    alt={festival.name} 
                    layout="fill" 
                    objectFit="cover"
                    data-ai-hint={festival.hint}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-4 font-headline text-2xl md:text-3xl font-bold text-white">
                  {festival.name}
                </h3>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
      <div className="col-span-2 md:col-span-3 flex justify-center mt-8">
        <Link href="/international-festivals">
            <Button variant="outline" size="lg">
                Explore All International Festivals <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </Link>
      </div>
    </div>
  );
}
