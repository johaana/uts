
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const regions = [
  { 
    name: 'North', 
    href: '/festivals?region=North', 
    image: 'https://i.postimg.cc/kGQ9w7QS/north-india-festivals.webp', 
    hint: 'north india festivals',
    description: "Home to vibrant festivals like Holi, Diwali, Lohri, and Baisakhi." 
  },
  { 
    name: 'Northeast', 
    href: '/festivals?region=Northeast', 
    image: 'https://i.postimg.cc/52MbHQMm/North-East-festivals.jpg', 
    hint: 'naga festival dancers',
    description: "Experience unique cultural celebrations like Hornbill, Yaoshang, and Chapchar Kut."
  },
  { 
    name: 'East', 
    href: '/festivals?region=East', 
    image: 'https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp', 
    hint: 'durga idol',
    description: "Celebrate grand festivals like Durga Puja, Chhath Puja, and Rath Yatra."
  },
  { 
    name: 'West', 
    href: '/festivals?region=West', 
    image: 'https://i.postimg.cc/jjxTcV2w/Western-India-festivals-1.jpg', 
    hint: 'gujarat fair',
    description: "Immerse yourself in Ganesh Chaturthi, Navratri Garba, and Gudi Padwa."
  },
  { 
    name: 'Central', 
    href: '/festivals?region=Central', 
    image: 'https://i.postimg.cc/rmVJnj2w/Pushkar-Camel-Fair.avif', 
    hint: 'pushkar camel fair',
    description: "Discover the tribal heritage with Bastar Dussehra, Madai Festival, and Hareli."
  },
  { 
    name: 'South', 
    href: '/festivals?region=South', 
    image: 'https://i.postimg.cc/j5CbVzzR/south-indian-festivals.jpg', 
    hint: 'kerala temple festival',
    description: "Witness the grandeur of Onam, Pongal, Ugadi, and Karthigai Deepam."
  },
];

export function RegionShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {regions.map((region) => (
        <Link href={region.href} key={region.name} className="group">
          <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="relative h-64 w-full bg-secondary/30">
                 <Image 
                    src={region.image} 
                    alt={region.name} 
                    layout="fill" 
                    objectFit="cover"
                    data-ai-hint={region.hint}
                 />
              </div>
              <div className="p-6">
                <h3 className="font-headline text-2xl font-bold text-primary flex justify-between items-center">
                  {region.name}
                  <ArrowRight className="h-6 w-6 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </h3>
                <p className="text-foreground/80 mt-2">{region.description}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
