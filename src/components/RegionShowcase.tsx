
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';

const regions = [
  { name: 'North', href: '/festivals?region=North', image: 'https://i.postimg.cc/mDBXxRCR/losar-2.jpg', hint: 'himalayan monastery' },
  { name: 'Northeast', href: '/festivals?region=Northeast', image: 'https://i.postimg.cc/tJnB8vjD/Hornbill-Festival.jpg', hint: 'naga festival dancers' },
  { name: 'East', href: '/festivals?region=East', image: 'https://i.postimg.cc/GmnJ5kP3/nilendrajyoti-halder-v32-Ac-NJ4-Q-Q-unsplash.jpg', hint: 'durga idol' },
  { name: 'West', href: '/festivals?region=West', image: 'https://i.postimg.cc/N0qYH9q4/tarnetar-mela.jpg', hint: 'gujarat fair' },
  { name: 'Central', href: '/festivals?region=Central', image: 'https://i.postimg.cc/ncg3FqB3/kumbh-mela-2.jpg', hint: 'kumbh mela' },
  { name: 'South', href: '/festivals?region=South', image: 'https://i.postimg.cc/j28kQ9WT/thrissur-puram-festival-2.jpg', hint: 'kerala temple festival' },
];

export function RegionShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {regions.map((region, index) => (
        <Link href={region.href} key={region.name} className={cn(
            "group relative block overflow-hidden rounded-lg",
            index === 0 && "md:col-span-2", // North
            index === 3 && "md:col-span-2", // West
            index === 5 && "col-span-2 md:col-span-1", // South
          )}>
          <Card className="h-48 md:h-64 w-full overflow-hidden">
             <Image 
                src={region.image} 
                alt={region.name} 
                layout="fill" 
                objectFit="cover" 
                className="transition-transform duration-500 ease-in-out group-hover:scale-110" 
                data-ai-hint={region.hint}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-white shadow-lg">{region.name}</h3>
             </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
