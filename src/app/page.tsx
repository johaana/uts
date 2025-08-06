
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Calendar, Utensils } from "lucide-react";
import Link from "next/link";
import { RegionShowcase } from "@/components/RegionShowcase";
import { FestivalCalendar } from "@/components/FestivalCalendar";
import { UpcomingFestivalCard } from "@/components/UpcomingFestivalCard";
import { useMemo } from "react";
import { parse } from "date-fns";

const allFestivals = [
    { name: "Raksha Bandhan", date: "August 19, 2024", link: "/festivals/raksha-bandhan", image: "https://i.postimg.cc/5Nn3fPPM/raksha-bandhan-2.jpg", hint: "rakhi thread" },
    { name: "Ganesh Chaturthi", date: "September 07, 2024", link: "/festivals/ganesh-chaturthi", image: "https://i.postimg.cc/P5g1B5g8/Ganesh-Chaturthi.webp", hint: "ganesh idol" },
    { name: "Onam", date: "September 15, 2024", link: "/festivals/onam", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam feast" },
    { name: "Durga Puja", date: "October 09, 2024", link: "/festivals/durga-puja", image: "https://i.postimg.cc/nL3Jwd9d/East-India-festivals.webp", hint: "durga idol" },
    { name: "Diwali", date: "November 01, 2024", link: "/festivals/diwali", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali celebration" },
    { name: "Christmas", date: "December 25, 2024", link: "/festivals/christmas", image: "https://i.postimg.cc/ncKMYdWy/christmas-2.jpg", hint: "nativity scene" },
    { name: "Holi", date: "March 14, 2025", link: "/festivals/holi", image: "https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg", hint: "holi celebration" },
];


export default function Home() {

  const upcomingFestivals = useMemo(() => {
    const now = new Date();
    return allFestivals
      .map(festival => ({
        ...festival,
        dateObj: parse(festival.date, 'MMMM d, yyyy', new Date()),
      }))
      .filter(festival => festival.dateObj >= now)
      .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())
      .slice(0, 3);
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Upcoming Festivals</h2>
            <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto">Plan your celebrations. Here are the next major festivals coming up.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFestivals.map(festival => (
                <UpcomingFestivalCard key={festival.name} festival={festival} />
            ))}
        </div>
      </section>

       <section className="container mx-auto px-4">
        <FestivalCalendar />
      </section>
      
       <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Explore by Region</h2>
          <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto">Discover the unique festivals that give each part of India its distinct cultural flavor.</p>
        </div>
        <RegionShowcase />
      </section>

      <section className="container mx-auto px-4 pb-16">
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

    </div>
  );
}
