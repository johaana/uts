
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Calendar, Utensils } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FestivalCalendar } from "@/components/FestivalCalendar";

export default function Home() {
  const featuredFestivals = [
    { name: "Diwali", date: "October 21, 2025", link: "/festivals/diwali", image: "https://i.postimg.cc/1XNwWtfN/Diwali1.png", hint: "diwali lamps" },
    { name: "Holi", date: "March 14, 2025", link: "/festivals/holi", image: "https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg", hint: "holi celebration" },
    { name: "Navratri", date: "September 22, 2025", link: "/festivals/navratri", image: "https://i.postimg.cc/0Nffmbwk/sanin-sn-B4-ZQ2m-KEiq-Y-unsplash.jpg", hint: "garba dance" },
    { name: "Durga Puja", date: "September 27, 2025", link: "/festivals/durga-puja", image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp", hint: "durga idol" },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      <section className="relative bg-secondary/50 py-16 md:py-24 flex items-center justify-center">
        <Image src="https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp" alt="Durga Puja" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="durga idol"/>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">Utsavs: Your Definitive Guide to Indian Festivals</h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
             Your essential guide to the dates, rituals, and stories behind India's vibrant celebrations. Discover authentic recipes, explore cultural traditions, and plan your year with our comprehensive festival calendar.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/festivals">
              <Button size="lg">
                Explore All Festivals <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
         <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">The Complete Festival Resource</h2>
            <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto">From grand national holidays to unique regional celebrations, Utsavs is your trusted source for everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
                <Calendar className="mx-auto h-10 w-10 text-primary mb-4"/>
                <h3 className="font-headline text-xl font-bold">Festival Calendar</h3>
                <p className="text-muted-foreground mt-2">Accurate dates for all major festivals, including long weekends to help you plan.</p>
            </Card>
            <Card className="text-center p-6">
                <BookOpen className="mx-auto h-10 w-10 text-primary mb-4"/>
                <h3 className="font-headline text-xl font-bold">Cultural Guides</h3>
                <p className="text-muted-foreground mt-2">Deep dive into the stories, rituals, and significance behind every celebration.</p>
            </Card>
            <Card className="text-center p-6">
                <Utensils className="mx-auto h-10 w-10 text-primary mb-4"/>
                <h3 className="font-headline text-xl font-bold">Authentic Recipes</h3>
                <p className="text-muted-foreground mt-2">Cook traditional festive foods with our easy-to-follow, authentic recipes.</p>
            </Card>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <FestivalCalendar />
      </section>

       <section className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Featured Festivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredFestivals.map((festival) => (
            <Link href={festival.link} key={festival.name}>
              <Card className="overflow-hidden group h-full">
                <div className="relative h-64 w-full bg-black/5">
                  <Image src={festival.image} alt={festival.name} layout="fill" objectFit="cover" data-ai-hint={festival.hint} className="transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-headline text-xl font-bold">{festival.name}</h3>
                  <p className="text-sm text-muted-foreground">{festival.date}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/festivals">
            <Button size="lg" variant="outline">
              Explore All Guides
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
