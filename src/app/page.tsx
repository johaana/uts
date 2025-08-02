import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FestivalCalendar } from "@/components/FestivalCalendar";

export default function Home() {
  const upcomingFestivals = [
    { name: "Raksha Bandhan", date: "August 19, 2025", link: "/festivals/raksha-bandhan", image: "https://i.postimg.cc/q7qRrp7r/raksha-bandhan.jpg", hint: "rakhi thread", position: "center" },
    { name: "Ganesh Chaturthi", date: "August 27, 2025", link: "/festivals/ganesh-chaturthi", image: "https://i.postimg.cc/tTV41DPm/ganpati1.jpg", hint: "ganesha idol", position: "center" },
    { name: "Onam", date: "September 7, 2025", link: "/festivals/onam", image: "https://i.postimg.cc/tJ3RkTB3/Onam.png", hint: "onam sadhya", position: "center" },
    { name: "Navratri", date: "September 22, 2025", link: "/festivals/navratri", image: "https://i.postimg.cc/Cxm19RSJ/holi2.jpg", hint: "garba dance", position: "center" },
    { name: "Diwali", date: "October 21, 2025", link: "/festivals/diwali", image: "https://i.postimg.cc/d0V7084z/Diwali1.png", hint: "diwali lamps", position: "center" },
  ];

  const featuredRecipes = [
    { name: "Gajar Ka Halwa", festival: "Diwali", link: "/recipes/gajar-ka-halwa", image: "https://i.postimg.cc/4NpH24YF/Diwali-Sweets.jpg", hint: "indian sweets" },
    { name: "Puran Poli", festival: "Ganesh Chaturthi", link: "/recipes/puran-poli", image: "https://i.postimg.cc/fRZtG4XW/Sweets1.jpg", hint: "indian flatbread" },
    { name: "Ras Malai", festival: "Holi", link: "/recipes/ras-malai", image: "https://i.postimg.cc/kB1gSpfL/Sweets1.jpg", hint: "milk sweets" },
  ];

  const blogPosts = [
    { title: "The Significance of Diyas in Diwali", excerpt: "Discover the deep cultural and spiritual meaning behind lighting diyas...", image: "https://i.postimg.cc/kM0tyRgb/Diwali2.jpg", hint: "diwali light" },
    { title: "A Guide to Traditional Holi Colors", excerpt: "Learn about the natural ingredients used in traditional Holi colors and their significance.", image: "https://i.postimg.cc/rsXF5WNy/holi.jpg", hint: "holi colors" },
    { title: "Top 5 Rangoli Designs for Beginners", excerpt: "Get inspired with these easy-to-make yet beautiful rangoli patterns for any occasion.", image: "https://i.postimg.cc/d0V7084z/Diwali1.png", hint: "rangoli design" },
  ]

  return (
    <div className="space-y-12 md:space-y-20">
      <section className="relative bg-primary/10 py-16 md:py-24 flex items-center justify-center">
        <Image src="https://i.postimg.cc/rsXF5WNy/holi.jpg" alt="Holi festival" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="holi colors"/>
        <div className="container mx-auto px-4 text-center relative z-10">
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
                <div className="p-1 h-full">
                  <Card className="overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 w-full">
                       <Image src={festival.image} alt={festival.name} layout="fill" objectFit="cover" objectPosition={festival.position} data-ai-hint={festival.hint}/>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-grow">
                        <h3 className="font-headline text-2xl font-bold flex-grow">{festival.name}</h3>
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
               <div className="relative h-48 w-full">
                <Image src={recipe.image} alt={recipe.name} layout="fill" objectFit="cover" data-ai-hint={recipe.hint}/>
              </div>
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
              <div className="relative h-48 w-full">
                  <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint={post.hint}/>
              </div>
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
