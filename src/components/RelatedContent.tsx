
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export interface RelatedItem {
  slug: string;
  title: string;
  image: string;
  type: 'Festival' | 'Recipe' | 'Blog';
  link: string;
  hint: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
}

export function RelatedContent({ items, title = "You Might Also Like" }: RelatedContentProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-dashed">
      <h2 className="font-headline text-3xl font-bold mb-6 text-primary">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link href={item.link} key={item.slug} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={item.hint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-4">
                <p className="text-xs font-semibold uppercase text-accent tracking-wider">{item.type}</p>
                <h3 className="font-headline text-xl font-bold mt-1 group-hover:text-primary transition-colors">{item.title}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
