
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Calendar, Utensils } from "lucide-react";
import Link from "next/link";
import { RegionShowcase } from "@/components/RegionShowcase";
import { FestivalCalendar } from "@/components/FestivalCalendar";

export default function Home() {
  
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">Your Guide to Indian Festivals</h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Explore the vibrant traditions, stories, and flavors of India's most celebrated festivals. From Diwali's lights to Holi's colors, start your cultural journey with us.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/festivals">
              <Button size="lg">
                Explore Festivals <ArrowRight className="ml-2" />
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
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Explore by Region</h2>
        <RegionShowcase />
      </section>

       <section className="container mx-auto px-4">
        <FestivalCalendar />
      </section>

      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Stay Connected</h2>
            <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto">Subscribe to our newsletter for the latest festival dates, new recipes, and cultural stories delivered straight to your inbox.</p>
             <div className="mt-8 flex justify-center">
                <form className="flex w-full max-w-md items-center space-x-2">
                    <input type="email" placeholder="Enter your email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1" />
                    <Button type="submit">
                        Subscribe
                    </Button>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
}
