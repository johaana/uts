
'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FestivalCalendar } from "@/components/FestivalCalendar";
import { RegionShowcase } from "@/components/RegionShowcase";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { UpcomingFestivalCard } from "@/components/UpcomingFestivalCard";

const upcomingFestivals = [
  { name: "Raksha Bandhan", date: "August 19, 2024", link: "/festivals/raksha-bandhan", image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg", hint: "rakhi festival" },
  { name: "Ganesh Chaturthi", date: "September 7, 2024", link: "/festivals/ganesh-chaturthi", image: "https://i.postimg.cc/VNWGcb3N/ganesh-chaturthi-festival.jpg", hint: "ganesha idol" },
  { name: "Onam", date: "September 15, 2024", link: "/festivals/onam", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
  { name: "Navratri", date: "October 3, 2024", link: "/festivals/navratri", image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg", hint: "garba dance" },
  { name: "Durga Puja", date: "October 9, 2024", link: "/festivals/durga-puja", image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp", hint: "durga idol" },
  { name: "Diwali", date: "November 1, 2024", link: "/festivals/diwali", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali celebration" },
];

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

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative text-center py-20 md:py-32 bg-cover bg-center" style={{backgroundImage: "url('https://i.postimg.cc/rmVJnj2w/Pushkar-Camel-Fair.avif')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white drop-shadow-lg max-w-4xl mx-auto">Your Definitive Guide to Indian Festivals</h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 drop-shadow-md max-w-3xl mx-auto">
            Explore the rich tapestry of India's vibrant celebrations. Discover dates, rituals, stories, and authentic recipes for every occasion.
          </p>
          <div className="mt-10">
            <Link href="/festivals">
              <Button size="lg">
                Explore All Festivals <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Upcoming Festivals</h2>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Plan your celebrations. Here's a look at what's coming up next on the festive calendar.
                </p>
            </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {upcomingFestivals.map((festival) => (
                <CarouselItem key={festival.name} className="md:basis-1/2 lg:basis-1/3">
                  <UpcomingFestivalCard festival={festival} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
           <FestivalCalendar />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
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

      <section className="py-16 md:py-24 bg-secondary/30">
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
