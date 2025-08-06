
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const regions = [
  { name: 'North', href: '/festivals?region=North', image: 'https://i.postimg.cc/ncg3FqB3/kumbh-mela-2.jpg', hint: 'kumbh mela' },
  { name: 'Northeast', href: '/festivals?region=Northeast', image: 'https://i.postimg.cc/tJnB8vjD/Hornbill-Festival.jpg', hint: 'naga festival dancers' },
  { name: 'East', href: '/festivals?region=East', image: 'https://i.postimg.cc/GmnJ5kP3/nilendrajyoti-halder-v32-Ac-NJ4-Q-Q-unsplash.jpg', hint: 'durga idol' },
  { name: 'West', href: '/festivals?region=West', image: 'https://i.postimg.cc/N0qYH9q4/tarnetar-mela.jpg', hint: 'gujarat fair' },
  { name: 'Central', href: '/festivals?region=Central', image: 'https://i.postimg.cc/rmVJnj2w/Pushkar-Camel-Fair.avif', hint: 'pushkar camel fair' },
  { name: 'South', href: '/festivals?region=South', image: 'https://i.postimg.cc/j28kQ9WT/thrissur-puram-festival-2.jpg', hint: 'kerala temple festival' },
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
                    objectFit="contain" 
                    className="p-4" 
                    data-ai-hint={region.hint}
                 />
              </div>
              <div className="p-6">
                <h3 className="font-headline text-2xl font-bold text-primary flex justify-between items-center">
                  {region.name}
                  <ArrowRight className="h-6 w-6 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </h3>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
