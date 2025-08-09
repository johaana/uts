
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const images = [
  { src: 'https://i.postimg.cc/rmVJnj2w/Pushkar-Camel-Fair.avif', alt: 'Pushkar Camel Fair', hint: 'pushkar camel fair' },
  { src: 'https://i.postimg.cc/4xZYzGsQ/Goa-Carnival.jpg', alt: 'Goa Carnival', hint: 'carnival parade float' },
  { src: 'https://i.postimg.cc/SNGxJ8VJ/ganesh-chaturthi-festival.jpg', alt: 'Ganesh Chaturthi', hint: 'ganesha idol' },
  { src: 'https://i.postimg.cc/1tMsX8bp/eid-al-fitr.avif', alt: 'Eid al-Fitr', hint: 'eid family' },
  { src: 'https://i.postimg.cc/6pL9wGsd/Hornbill-Festival.webp', alt: 'Hornbill Festival', hint: 'naga festival' },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-[4/3] md:aspect-[16/7] lg:aspect-[21/9] relative overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          data-ai-hint={image.hint}
          priority
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          )}
        />
      ))}
    </div>
  );
}
