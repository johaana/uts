

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FestivalCalendar } from "@/components/FestivalCalendar";
import { RegionShowcase } from "@/components/RegionShowcase";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import { UpcomingFestivalsCarousel } from "@/components/UpcomingFestivalsCarousel";
import { HolidayPlanner } from "@/components/HolidayPlanner";


function ResourceSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="bg-secondary/30 p-8 rounded-lg">
        <h3 className="font-headline text-3xl font-bold text-primary mb-2">40+ Festivals</h3>
        <p className="text-foreground/80">Explore detailed guides on major and regional Indian festivals.</p>
      </div>
      <div className="bg-secondary/30 p-8 rounded-lg">
        <h3 className="font-headline text-3xl font-bold text-primary mb-2">30+ Recipes</h3>
        <p className="text-foreground/80">Cook authentic festive food with our easy-to-follow recipes.</p>
      </div>
      <div className="bg-secondary/30 p-8 rounded-lg">
        <h3 className="font-headline text-3xl font-bold text-primary mb-2">15+ Stories</h3>
        <p className="text-foreground/80">Dive deep into the culture and stories behind the celebrations.</p>
      </div>
    </div>
  )
}

function FestivalOfTheMonth() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Festivals and Holidays</h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                        A special highlight on the significant celebrations happening soon.
                    </p>
                </div>
                <UpcomingFestivalsCarousel />
            </div>
        </section>
    );
}

export default function Home() {
  return (
    <div className="flex flex-col">
       <section className="relative text-center bg-black min-h-[60vh]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
         <Image src="https://i.postimg.cc/rmVJnj2w/Pushkar-Camel-Fair.avif" layout="fill" objectFit="cover" alt="Pushkar Camel Fair" priority />
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center h-full min-h-[60vh]">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-4xl mx-auto">Your Definitive Guide to Indian Festivals</h1>
          <p className="mt-6 text-base md:text-lg text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] max-w-3xl mx-auto">
            Immerse yourself in the soul of India's vibrant celebrations. Discover authentic rituals, explore fascinating stories, and cook traditional recipes for every festival.
          </p>
          <div className="mt-8">
            <Link href="/festivals">
              <Button variant="default" size="lg" className="text-base md:text-lg">
                Explore All Festivals <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FestivalOfTheMonth />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <FestivalCalendar />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Discover by Region</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                India's cultural landscape is incredibly diverse. Explore festivals unique to each part of the country.
            </p>
          </div>
          <RegionShowcase />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">A World of Flavor & Tradition</h2>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Utsavs is more than a calendar. It's a rich library of cultural knowledge, helping you connect with the heart of India.
                </p>
            </div>
            <ResourceSummary />
        </div>
      </section>
    </div>
  );
}
