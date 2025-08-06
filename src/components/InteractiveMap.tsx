
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

const regions = [
  { name: 'North', href: '/festivals?region=North', className: 'top-[10%] left-[50%] -translate-x-1/2' },
  { name: 'Northeast', href: '/festivals?region=Northeast', className: 'top-[28%] left-[88%] -translate-x-1/2' },
  { name: 'East', href: '/festivals?region=East', className: 'top-[45%] left-[72%] -translate-x-1/2' },
  { name: 'West', href: '/festivals?region=West', className: 'top-[45%] left-[28%] -translate-x-1/2' },
  { name: 'Central', href: '/festivals?region=Central', className: 'top-[50%] left-[50%] -translate-x-1/2' },
  { name: 'South', href: '/festivals?region=South', className: 'top-[80%] left-[50%] -translate-x-1/2' },
];

export function InteractiveMap() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square rounded-lg bg-gradient-to-br from-secondary/30 to-background p-4">
      <div className="relative w-full h-full">
        {regions.map((region) => (
          <Link href={region.href} key={region.name}>
            <div
              className={cn(
                'absolute transform transition-all duration-300 ease-in-out hover:scale-110',
                region.className
              )}
            >
              <div className="relative p-3">
                <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl"></div>
                <div className="relative rounded-full bg-background px-6 py-3 text-center shadow-lg ring-1 ring-border">
                  <p className="font-headline text-lg font-bold text-primary">{region.name}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
