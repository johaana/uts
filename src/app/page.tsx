

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Utensils, BookOpen, Globe } from "lucide-react";
import Link from "next/link";
import { FestivalCalendar } from "@/components/FestivalCalendar";
import { RegionShowcase } from "@/components/RegionShowcase";
import React from "react";
import { UpcomingFestivalsCarousel } from "@/components/UpcomingFestivalsCarousel";
import { HeroCarousel } from "@/components/HeroCarousel";
import { InternationalFestivalsShowcase } from "@/components/InternationalFestivalsShowcase";
import { HolidayPlanner } from "@/components/HolidayPlanner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bot } from "lucide-react";
import Image from 'next/image';
import { allEvents } from "@/lib/festival-data";


function ResourceSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="bg-secondary/30 p-8 rounded-lg flex flex-col items-center">
        <Calendar className="w-12 h-12 text-accent mb-4"/>
        <h3 className="font-headline text-3xl font-bold text-primary mb-2">40+ Festivals</h3>
        <p className="text-foreground/80">Explore detailed guides on major and regional Indian festivals.</p>
      </div>
      <div className="bg-secondary/30 p-8 rounded-lg flex flex-col items-center">
        <Utensils className="w-12 h-12 text-accent mb-4"/>
        <h3 className="font-headline text-3xl font-bold text-primary mb-2">30+ Recipes</h3>
        <p className="text-foreground/80">Cook authentic festive food with our easy-to-follow recipes.</p>
      </div>
      <div className="bg-secondary/30 p-8 rounded-lg flex flex-col items-center">
        <BookOpen className="w-12 h-12 text-accent mb-4"/>
        <h3 className="font-headline text-3xl font-bold text-primary mb-2">15+ Stories</h3>
        <p className="text-foreground/80">Dive deep into the culture and stories behind the celebrations.</p>
      </div>
    </div>
  )
}

function FestivalOfTheMonth() {
    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary">Festivals and Holidays</h2>
                    <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                        A special highlight on the significant celebrations happening soon.
                    </p>
                </div>
                <UpcomingFestivalsCarousel />
            </div>
        </section>
    );
}

function AIPlannerShowcase() {
    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/80 border-2 border-blue-200/50 shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="p-8 md:p-12 order-2 md:order-1">
                            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-4">Let AI Be Your Guide</h2>
                            <p className="text-lg text-foreground/80 mb-6 max-w-lg">
                                Planning a trip around a festival? Curious about specific dates or customs? Our AI Holiday Planner can provide personalized suggestions and answer your questions in an instant.
                            </p>
                            <Link href="/planner">
                                <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all duration-300">
                                    Try the AI Planner <Bot className="w-5 h-5 ml-2 transition-transform group-hover:rotate-12" />
                                </Button>
                            </Link>
                        </div>
                        <div className="order-1 md:order-2 h-64 md:h-full">
                           <Image src="https://i.postimg.cc/VLQf0kKF/long-weekend-1.jpg" alt="AI Planner" width={600} height={400} className="w-full h-full object-cover" data-ai-hint="holiday planning calendar" />
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
       <section className="relative w-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
         <HeroCarousel />
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-end text-left p-6 md:p-8 lg:p-12">
          <h1 className="font-headline text-2xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] max-w-4xl">Every Festival Tells a Story</h1>
            <p className="hidden md:block mt-4 text-lg text-white/90 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] max-w-2xl">
                Journey through the rich tapestry of Indian culture. We uncover the legends, rituals, and traditions that bring each celebration to life. Discover the soul of every 'utsav'.
            </p>
            <div className="mt-6 md:mt-8">
                <Link href="/festivals">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="text-sm md:text-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl text-primary-foreground font-bold bg-gradient-to-r from-primary to-accent shadow-lg border-none"
                >
                    Explore All Festivals <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                </Link>
            </div>
        </div>
      </section>

      <section className="md:hidden bg-background">
        <div className="container mx-auto px-6 py-8 text-left">
             <p className="text-sm text-foreground/80">
                Journey through the rich tapestry of Indian culture. We uncover the legends, rituals, and traditions that bring each celebration to life. Discover the soul of every 'utsav'.
            </p>
        </div>
      </section>

      <FestivalOfTheMonth />
      
      <section className="py-12 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
           <FestivalCalendar
                events={allEvents}
                availableYears={['Upcoming', '2025', '2026']}
                title="Festival & Holiday Calendar"
                description="Plan your year around the vibrant celebrations of India. Never miss a festival, holiday, or long weekend."
                displayLimit={10}
            />
        </div>
      </section>
      
       <AIPlannerShowcase />

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary">Discover by Region</h2>
            <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                India's cultural landscape is incredibly diverse. Explore festivals unique to each part of the country.
            </p>
          </div>
          <RegionShowcase />
        </div>
      </section>

       <section className="py-12 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary">Discover International Festivals</h2>
            <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                Venture beyond borders and explore unique cultural celebrations from around the globe.
            </p>
          </div>
          <InternationalFestivalsShowcase />
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary">A World of Flavor & Tradition</h2>
                <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                    Utsavs is more than a calendar. It's a rich library of cultural knowledge, helping you connect with the heart of India.
                </p>
            </div>
            <ResourceSummary />
        </div>
      </section>
    </div>
  );
}
