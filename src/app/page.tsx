
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FestivalCalendar } from "@/components/FestivalCalendar";
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { subscribeToNewsletter } from "@/ai/flows/subscribe-flow";


export default function Home() {
  const { toast } = useToast();
  
  const upcomingFestivals = [
    { name: "Raksha Bandhan", date: "August 9, 2025", link: "/festivals/raksha-bandhan", image: "https://i.postimg.cc/q7qRrp7r/raksha-bandhan.jpg", hint: "rakhi thread" },
    { name: "Ganesh Chaturthi", date: "August 26, 2025", link: "/festivals/ganesh-chaturthi", image: "https://i.postimg.cc/tTV41DPm/ganpati1.jpg", hint: "ganesha idol" },
    { name: "Onam", date: "September 7, 2025", link: "/festivals/onam", image: "https://i.postimg.cc/0564g0S7/nandu-menon-h-GHldb-Cg-YDA-unsplash.jpg", hint: "onam sadhya" },
    { name: "Navratri", date: "September 22, 2025", link: "/festivals/navratri", image: "https://i.postimg.cc/0Nffmbwk/sanin-sn-B4-ZQ2m-KEiq-Y-unsplash.jpg", hint: "garba dance" },
    { name: "Diwali", date: "October 21, 2025", link: "/festivals/diwali", image: "https://i.postimg.cc/1XNwWtfN/Diwali1.png", hint: "diwali lamps" },
  ];

  const featuredRecipes = [
    { name: "Gajar Ka Halwa", festival: "Diwali", link: "/recipes/gajar-ka-halwa", image: "https://i.postimg.cc/FHNTRfLR/gajar-halwa.jpg", hint: "carrot pudding" },
    { name: "Puran Poli", festival: "Ganesh Chaturthi", link: "/recipes/puran-poli", image: "https://i.postimg.cc/jj8gBsCj/puranpoli.jpg", hint: "sweet flatbread" },
    { name: "Ras Malai", festival: "Holi", link: "/recipes/ras-malai", image: "https://i.postimg.cc/d1pWt42P/Rasmalai.webp", hint: "milk sweet" },
  ];

  const blogPosts = [
    { title: "The Significance of Diyas in Diwali", excerpt: "Discover the deep cultural and spiritual meaning behind lighting diyas...", link: "/blog/significance-of-diyas-in-diwali", image: "https://i.postimg.cc/SjF8HhM1/Diwali2.jpg", hint: "diwali light" },
    { title: "A Guide to Natural Holi Colors", excerpt: "Learn about the natural ingredients used in traditional Holi colors and their significance.", link: "/blog/guide-to-natural-holi-colors", image: "https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg", hint: "holi colors" },
    { title: "Top 5 Rangoli Designs for Beginners", excerpt: "Get inspired with these easy-to-make yet beautiful rangoli patterns for any occasion.", link: "/blog/top-5-rangoli-designs-for-beginners", image: "https://i.postimg.cc/VN1gdj5Z/prchi-palwe-NLq-NQ10ppe0-unsplash.jpg", hint: "rangoli design" },
  ]
  
  const handleSubscription = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address.",
      });
      return;
    }

    try {
      const response = await subscribeToNewsletter(email);
      toast({
        title: "Subscribed!",
        description: response,
      });
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Subscription failed:", error);
      toast({
        variant: "destructive",
        title: "Subscription Failed",
        description: "Could not subscribe. Please try again later.",
      });
    }
  };

  return (
    <div className="space-y-16 md:space-y-24">
      <section className="relative bg-secondary/50 py-16 md:py-24 flex items-center justify-center">
        <Image src="https://i.postimg.cc/fWFvx4J9/aceofnet-PNd98-z-An-U0-unsplash.jpg" alt="Holi festival" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="holi colors"/>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">A Vibrant Celebration of India</h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Your ultimate guide to the rich tapestry of Indian festivals. Explore traditions, 2025-2026 dates, recipes, and stories that make each celebration unique.
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
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Festivals 2025</h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {upcomingFestivals.map((festival, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden h-full flex flex-col group">
                    <div className="relative h-64 w-full overflow-hidden bg-black/5">
                       <Image src={festival.image} alt={festival.name} layout="fill" objectFit="contain" className="transition-transform duration-500 ease-in-out group-hover:scale-105" data-ai-hint={festival.hint}/>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="font-headline text-2xl font-bold flex-grow h-14">{festival.name}</h3>
                        <p className="text-sm text-muted-foreground">{festival.date}</p>
                        <Link href={festival.link}>
                          <Button variant="link" className="p-0 mt-4 text-primary hover:text-primary/90">
                            Learn More <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      <section className="container mx-auto px-4">
        <FestivalCalendar />
      </section>


      <section className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Featured Festive Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <Card key={recipe.name} className="overflow-hidden group">
               <div className="relative h-64 w-full overflow-hidden bg-black/5">
                <Image src={recipe.image} alt={recipe.name} layout="fill" objectFit="cover" className="transition-transform duration-500 ease-in-out group-hover:scale-105" data-ai-hint={recipe.hint}/>
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl h-16">{recipe.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{recipe.festival}</p>
              </CardHeader>
              <CardContent>
                <Link href={recipe.link}>
                  <Button variant="outline">View Recipe</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Link href="/recipes">
                <Button size="lg">Explore All Recipes</Button>
            </Link>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Discover Festivals by Region</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["North", "South", "East", "West", "Central", "Northeast"].map((region) => (
                <Link key={region} href={`/festivals?region=${region}`} passHref>
                    <Button variant="outline" size="lg" className="bg-card hover:bg-card/80">
                      {region} India
                    </Button>
                </Link>
              ))}
            </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="overflow-hidden group flex flex-col">
              <div className="relative h-64 w-full overflow-hidden bg-black/5">
                  <Image src={post.image} alt={post.title} layout="fill" objectFit="contain" className="transition-transform duration-500 ease-in-out group-hover:scale-105" data-ai-hint={post.hint}/>
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl h-16">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{post.excerpt}</p>
              </CardContent>
              <CardContent>
                <Link href={post.link}>
                  <Button variant="link" className="p-0 text-primary hover:text-primary/90">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-secondary p-8 md:p-12 text-center">
            <Mail className="mx-auto h-12 w-12 text-primary" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-foreground/80 max-w-xl mx-auto mb-6">
              Subscribe to our newsletter for the latest festival updates, recipes, and cultural stories delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubscription}>
              <Input name="email" type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
