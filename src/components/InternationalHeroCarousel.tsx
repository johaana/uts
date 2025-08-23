
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { internationalEvents } from '@/lib/festival-data';

// A curated list of visually appealing and diverse festivals for the carousel
const carouselImages = [
  { src: 'https://i.postimg.cc/XJs7rMdt/Yi-Peng-Lantern-Festival-Thailand.webp', alt: 'Yi Peng Lantern Festival, Thailand', hint: 'sky lanterns' },
  { src: 'https://i.postimg.cc/QCVN56qC/Venice-Carnival-Italy.jpg', alt: 'Venice Carnival, Italy', hint: 'venetian masks' },
  { src: 'https://i.postimg.cc/RhHJcbgG/songkran.avif', alt: 'Songkran Water Festival, Thailand', hint: 'water festival' },
  { src: 'https://i.postimg.cc/GhwH7wCz/la-tomatina1.jpg', alt: 'La Tomatina, Spain', hint: 'tomato fight' },
  { src: 'https://i.postimg.cc/0r1MZd3v/Carnival.jpg', alt: 'Rio Carnival, Brazil', hint: 'brazil carnival' },
  { src: 'https://i.postimg.cc/g0q0PLJz/Oktoberfest-Munich.jpg', alt: 'Oktoberfest, Germany', hint: 'beer festival' },
  { src: 'https://i.postimg.cc/RCcT1Twd/kukur-tihar1.avif', alt: 'Kukur Tihar, Nepal', hint: 'dog worship' },
  { src: 'https://i.postimg.cc/fLzRWWtx/Hogmanay-Scotland.webp', alt: 'Hogmanay, Scotland', hint: 'torchlight procession' },
  { src: 'https://i.postimg.cc/cJbJfPhR/thaipusam.webp', alt: 'Thaipusam', hint: 'kavadi' },
];

export function InternationalHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full aspect-[4/3] md:aspect-[16/7] lg:aspect-[21/9] relative overflow-hidden rounded-xl shadow-2xl">
      {carouselImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          data-ai-hint={image.hint}
          priority={index === 0}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          )}
        />
      ))}
       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
       <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <h1 className="font-headline text-4xl md:text-6xl text-white font-bold drop-shadow-lg">International Festivals</h1>
            <p className="text-lg md:text-xl text-white/90 mt-2 drop-shadow-md">A Journey Through Global Celebrations</p>
       </div>
    </div>
  );
}
