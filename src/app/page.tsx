
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Utensils, BookOpen, Globe } from "lucide-react";
import Link from "next/link";
import { RegionShowcase } from "@/components/RegionShowcase";
import React from "react";
import { UpcomingFestivalsCarousel } from "@/components/UpcomingFestivalsCarousel";
import { HeroCarousel } from "@/components/HeroCarousel";
import { InternationalFestivalsShowcase } from "@/components/InternationalFestivalsShowcase";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bot } from "lucide-react";
import Image from 'next/image';
import { allEvents } from "@/lib/festival-data";
import { FestivalCalendar } from "@/components/FestivalCalendar";


function ResourceSummary() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center">
      <Card className="p-4 md:p-8 flex flex-col items-center">
        <Calendar className="w-10 h-10 md:w-12 md:h-12 text-accent mb-3"/>
        <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-1">60+</h3>
        <p className="text-sm md:text-base text-foreground/80">Festivals</p>
      </Card>
      <Card className="p-4 md:p-8 flex flex-col items-center">
        <Utensils className="w-10 h-10 md:w-12 md:h-12 text-accent mb-3"/>
        <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-1">40+</h3>
        <p className="text-sm md:text-base text-foreground/80">Recipes</p>
      </Card>
      <Card className="p-4 md:p-8 flex flex-col items-center col-span-2 md:col-span-1">
        <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-accent mb-3"/>
        <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-1">25+</h3>
        <p className="text-sm md:text-base text-foreground/80">Stories</p>
      </Card>
    </div>
  )
}

function AIPlannerShowcase() {
    return (
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                <Card className="bg-gradient-to-br from-primary/10 to-secondary/30 border-2 border-primary/20 shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center">
                         <div className="md:w-1/2 h-64 md:h-96 w-full order-1 md:order-2">
                           <Image src="https://i.postimg.cc/VLQf0kKF/long-weekend-1.jpg" alt="AI Planner" width={600} height={400} className="w-full h-full object-cover" data-ai-hint="holiday planning calendar" />
                        </div>
                        <div className="p-6 md:p-12 md:w-1/2 order-2 md:order-1">
                            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-4">Let AI Be Your Guide</h2>
                            <p className="text-base md:text-lg text-foreground/80 mb-6 max-w-lg">
                                Not sure where to travel? Check out our month-wise planner and find out. Our AI Holiday Planner can provide personalized suggestions and answer your questions in an instant.
                            </p>
                            <Link href="/planner">
                                <Button variant="gradient" size="lg" className="group shadow-lg hover:shadow-xl transition-all duration-300">
                                    Try the AI Planner <Bot className="w-5 h-5 ml-2 transition-transform group-hover:rotate-12" />
                                </Button>
                            </Link>
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
                  variant="gradient"
                  size="sm" 
                  className="md:h-11 md:px-8 md:text-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl font-bold shadow-lg border-none"
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

      <section className="py-12 md:pt-24 md:pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary">Upcoming Festivals</h2>
            <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                Discover what's next on the festive calendar. Here are the next major celebrations to look forward to.
            </p>
          </div>
          <UpcomingFestivalsCarousel />
        </div>
      </section>

       <section className="py-12 md:pt-16 md:pb-24 bg-secondary/30">
            <div className="container mx-auto px-4">
              <FestivalCalendar 
                events={allEvents}
                title="Festivals & Holidays Calendar"
                description="Plan your year around the vibrant celebrations of India. Never miss a festival or holiday with our comprehensive calendar."
              />
            </div>
        </section>
      
       <AIPlannerShowcase />

      <section className="py-12 md:py-20 bg-background">
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

       <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary">Discover International Festivals</h2>
            <p className="mt-3 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                Venture beyond borders and explore unique cultural celebrations from around the globe.
            </p>
          </div>
          <InternationalFestivalsShowcase />
           <div className="text-center mt-12 flex flex-col items-center gap-4">
                <Link href="/international-festivals">
                    <Button variant="gradient">
                        <Globe className="mr-2 h-4 w-4" />
                        Explore All International Festivals
                    </Button>
                </Link>
                <Link href="/calendar">
                    <Button>
                        <Calendar className="mr-2 h-4 w-4" />
                        Plan by Month
                    </Button>
                </Link>
            </div>
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
