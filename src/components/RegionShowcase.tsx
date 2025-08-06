
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const regions = [
  { 
    name: 'North', 
    href: '/festivals?region=North', 
    image: 'https://i.postimg.cc/kGQ9w7QS/north-india-festivals.webp', 
    hint: 'north india festivals',
    description: "The heartland of vibrant festivals like Holi's color, Diwali's light, and Lohri's warmth."
  },
  { 
    name: 'Northeast', 
    href: '/festivals?region=Northeast', 
    image: 'https://i.postimg.cc/52MbHQMm/North-East-festivals.jpg', 
    hint: 'naga festival dancers',
    description: "A cultural mosaic celebrating unique traditions like Hornbill, Bihu, and Chapchar Kut."
  },
  { 
    name: 'East', 
    href: '/festivals?region=East', 
    image: 'https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp', 
    hint: 'durga idol',
    description: "Experience devotion and artistry in grand festivals like Durga Puja, Chhath Puja, and Rath Yatra."
  },
  { 
    name: 'West', 
    href: '/festivals?region=West', 
    image: 'https://i.postimg.cc/jjxTcV2w/Western-India-festivals-1.jpg', 
    hint: 'gujarat fair',
    description: "Immerse yourself in the energy of Ganesh Chaturthi, Navratri Garba, and the Goa Carnival."
  },
  { 
    name: 'Central', 
    href: '/festivals?region=Central', 
    image: 'https://i.postimg.cc/j5G0WqQ2/bastar-dussehra.webp', 
    hint: 'bastar dussehra',
    description: "Discover ancient tribal heritage with Bastar Dussehra, Madai Festival, and Hareli."
  },
  { 
    name: 'South', 
    href: '/festivals?region=South', 
    image: 'https://i.postimg.cc/j5CbVzzR/south-indian-festivals.jpg', 
    hint: 'kerala temple festival',
    description: "Witness the traditional grandeur of Onam, Pongal, Ugadi, and Thrissur Pooram."
  },
];

export function RegionShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {regions.map((region) => (
        <Link href={region.href} key={region.name} className="group">
          <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="relative h-64 w-full bg-secondary/30">
                 <Image 
                    src={region.image} 
                    alt={region.name} 
                    layout="fill" 
                    objectFit="cover"
                    data-ai-hint={region.hint}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-4 font-headline text-3xl font-bold text-white">
                  {region.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-foreground/80">{region.description}</p>
                 <Button variant="link" className="p-0 mt-4 text-accent font-bold">
                    Explore {region.name} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
