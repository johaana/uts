
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { internationalEvents } from '@/lib/festival-data';

// A curated list of visually appealing and diverse festivals for the carousel
const carouselImages = [
  { src: 'https://i.postimg.cc/GhwH7wCz/la-tomatina1.jpg', alt: 'La Tomatina, Spain', hint: 'tomato fight' },
  { src: 'https://i.postimg.cc/0r1MZd3v/Carnival.jpg', alt: 'Rio Carnival, Brazil', hint: 'brazil carnival' },
  { src: 'https://i.postimg.cc/fLzRWWtx/Hogmanay-Scotland.webp', alt: 'Hogmanay, Scotland', hint: 'torchlight procession' },
  { src: 'https://i.postimg.cc/1XTmKpWH/St-Patrick-s-Day-Ireland-Global.avif', alt: 'St. Patrick\'s Day', hint: 'irish parade' },
  { src: 'https://i.postimg.cc/QCVN56qC/Venice-Carnival-Italy.jpg', alt: 'Venice Carnival, Italy', hint: 'venetian masks' },
  { src: 'https://i.postimg.cc/Xvs535ZK/Harbin-Ice-and-Snow-Festival.webp', alt: 'Harbin Ice and Snow Festival, China', hint: 'ice sculptures' },
  { src: 'https://i.postimg.cc/g0q0PLJz/Oktoberfest-Munich.jpg', alt: 'Oktoberfest, Germany', hint: 'beer festival' },
  { src: 'https://i.postimg.cc/htb3BK98/cherry-blossom-festival.jpg', alt: 'Cherry Blossom Festival (Hanami), Japan', hint: 'cherry blossoms' },
  { src: 'https://i.postimg.cc/05F4GWkS/Dia-de-los-Muertos-Day-of-the-Dead-3.avif', alt: 'Día de los Muertos, Mexico', hint: 'day of the dead' },
  { src: 'https://i.postimg.cc/Y2yDxX37/Inti-Raymi-Festival-of-the-Sun.jpg', alt: 'Inti Raymi, Peru', hint: 'inca festival' },
  { src: 'https://i.postimg.cc/TYb4tV14/chinese-new-year.webp', alt: 'Chinese New Year', hint: 'dragon dance' },
  { src: 'https://i.postimg.cc/5yrkPw0H/Krampusnacht.avif', alt: 'Krampusnacht, Austria', hint: 'krampus' },
  { src: 'https://i.postimg.cc/RCcT1Twd/kukur-tihar1.avif', alt: 'Kukur Tihar, Nepal', hint: 'dog worship' },
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
