import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FestivalCalendar } from "@/components/FestivalCalendar";

export default function Home() {
  const upcomingFestivals = [
    { name: "Raksha Bandhan", date: "August 19, 2025", link: "/festivals/raksha-bandhan" },
    { name: "Ganesh Chaturthi", date: "August 27, 2025", link: "/festivals/ganesh-chaturthi" },
    { name: "Onam", date: "September 7, 2025", link: "/festivals/onam" },
    { name: "Navratri", date: "September 22, 2025", link: "/festivals/navratri" },
    { name: "Diwali", date: "October 21, 2025", link: "/festivals/diwali" },
  ];

  const featuredRecipes = [
    { name: "Gajar Ka Halwa", festival: "Diwali", link: "/recipes/gajar-ka-halwa" },
    { name: "Puran Poli", festival: "Ganesh Chaturthi", link: "/recipes/puran-poli" },
    { name: "Ras Malai", festival: "Holi", link: "/recipes/ras-malai" },
  ];

  const blogPosts = [
    { title: "The Significance of Diyas in Diwali", excerpt: "Discover the deep cultural and spiritual meaning behind lighting diyas..." },
    { title: "A Guide to Traditional Holi Colors", excerpt: "Learn about the natural ingredients used in traditional Holi colors and their significance." },
    { title: "Top 5 Rangoli Designs for Beginners", excerpt: "Get inspired with these easy-to-make yet beautiful rangoli patterns for any occasion." },
  ]

  return (
    <div className="space-y-12 md:space-y-20">
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">A Vibrant Celebration of India</h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Discover the rich tapestry of Indian festivals. Explore traditions, recipes, and stories that make each celebration unique.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/festivals">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Explore All Festivals <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Upcoming Festivals 2025</h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {upcomingFestivals.map((festival, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                        <h3 className="font-headline text-2xl font-bold">{festival.name}</h3>
                        <p className="text-sm text-muted-foreground">{festival.date}</p>
                        <Link href={festival.link}>
                          <Button variant="link" className="p-0 mt-2 text-accent hover:text-accent/90">
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
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <Card key={recipe.name} className="overflow-hidden group">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{recipe.name}</CardTitle>
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
        <div className="text-center mt-8">
            <Link href="/recipes">
                <Button variant="secondary">Explore All Recipes</Button>
            </Link>
        </div>
      </section>

      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Festivals by Region</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["North", "South", "East", "West", "Central", "Northeast"].map((region) => (
                <Button key={region} variant="outline" size="lg" className="bg-white hover:bg-white/80">
                  {region} India
                </Button>
              ))}
            </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="overflow-hidden group flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl h-16">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{post.excerpt}</p>
              </CardContent>
              <CardContent>
                <Link href="/blog">
                  <Button variant="link" className="p-0 text-accent hover:text-accent/90">
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
          <Card className="bg-primary text-primary-foreground p-8 md:p-12 text-center">
            <Mail className="mx-auto h-12 w-12 mb-4 text-accent" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
              Subscribe to our newsletter for the latest festival updates, recipes, and cultural stories delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-primary-foreground/10 border-primary-foreground/50 text-primary-foreground placeholder:text-primary-foreground/70" />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
