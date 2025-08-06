

'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarHeart } from "lucide-react";
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
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { UpcomingFestivalCardClient } from "@/components/UpcomingFestivalCardClient";
import { parse } from 'date-fns';

const upcomingFestivals = [
  { name: "Raksha Bandhan", date: "2024-08-19T00:00:00", link: "/festivals/raksha-bandhan", image: "https://i.postimg.cc/9MXxXQhY/Raksha-Bandhan.jpg", hint: "rakhi festival" },
  { name: "Ganesh Chaturthi", date: "2024-09-07T00:00:00", link: "/festivals/ganesh-chaturthi", image: "https://i.postimg.cc/VNWGcb3N/ganesh-chaturthi-festival.jpg", hint: "ganesha idol" },
  { name: "Onam", date: "2024-09-15T00:00:00", link: "/festivals/onam", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
  { name: "Navratri", date: "2024-10-03T00:00:00", link: "/festivals/navratri", image: "https://i.postimg.cc/GhWjwdnN/Navratri.jpg", hint: "garba dance" },
  { name: "Durga Puja", date: "2024-10-09T00:00:00", link: "/festivals/durga-puja", image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp", hint: "durga idol" },
  { name: "Diwali", date: "2024-10-31T00:00:00", link: "/festivals/diwali", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali celebration" },
  { name: "Lohri", date: "2025-01-13T00:00:00", link: "/festivals/lohri", image: "https://i.postimg.cc/kGQ9w7QS/north-india-festivals.webp", hint: "lohri bonfire" },
  { name: "Holi", date: "2025-03-14T00:00:00", link: "/festivals/holi", image: "https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg", hint: "holi celebration" }
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

function FestivalOfTheMonth() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Festival of the Month</h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                        A special highlight on a significant celebration happening now.
                    </p>
                </div>
                <Card className="overflow-hidden shadow-2xl rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                         <div className="p-8 md:p-12 order-2 md:order-1">
                            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">September Feature</p>
                            <h3 className="font-headline text-4xl font-bold mb-4">Ganesh Chaturthi</h3>
                            <p className="text-foreground/80 mb-6">Celebrate the birth of the beloved elephant-headed god, Lord Ganesha. This vibrant festival is marked by the installation of beautiful Ganesha idols, prayers, feasting on modaks, and grand processions for the idol immersion.</p>
                            <Link href="/festivals/ganesh-chaturthi">
                                <Button>
                                    Explore Ganesh Chaturthi <ArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative h-64 md:h-full order-1 md:order-2 min-h-[300px]">
                             <Image src="https://i.postimg.cc/VNWGcb3N/ganesh-chaturthi-festival.jpg" alt="Ganesh Chaturthi Festival" layout="fill" objectFit="cover" data-ai-hint="ganesha idol"/>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}

export default function Home() {
  return (
    <div className="flex flex-col">
       <section className="relative text-center py-20 md:py-32 bg-cover bg-center" style={{backgroundImage: "url('https://i.postimg.cc/rmVJnj2w/Pushkar-Camel-Fair.avif')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] max-w-4xl mx-auto">Your Definitive Guide to Indian Festivals</h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] max-w-3xl mx-auto">
            Explore the rich tapestry of India's vibrant celebrations. Discover dates, rituals, stories, and authentic recipes for every occasion.
          </p>
          <div className="mt-10">
            <Link href="/festivals">
              <Button variant="default" size="lg">
                Explore All Festivals <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FestivalOfTheMonth />
      
      <section className="py-16 md:py-24 bg-secondary/30">
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
              {upcomingFestivals.map((festival) => {
                return (
                    <CarouselItem key={festival.name} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                          <Card className="overflow-hidden h-full flex flex-col group shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="relative h-64 w-full overflow-hidden bg-secondary">
                               <Image src={festival.image} alt={festival.name} layout="fill" objectFit="cover" className="transition-transform duration-500 ease-in-out group-hover:scale-105" data-ai-hint={festival.hint}/>
                            </div>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <h3 className="font-headline text-2xl font-bold text-primary">{festival.name}</h3>
                                
                                <UpcomingFestivalCardClient festivalDateString={festival.date} festivalName={festival.name} />

                                <div className="mt-auto pt-4">
                                    <Link href={festival.link}>
                                      <Button variant="link" className="p-0 text-accent hover:text-accent/90 font-bold">
                                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                                      </Button>
                                    </Link>
                                </div>
                            </CardContent>
                          </Card>
                        </div>
                    </CarouselItem>
                )
            })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

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
