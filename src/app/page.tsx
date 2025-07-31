import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const upcomingFestivals = [
    { name: "Diwali", image: "https://images.unsplash.com/photo-1574322499484-85a8a7c08186?q=80&w=600&h=400&fit=crop", hint: "lights diyas" },
    { name: "Holi", image: "https://images.unsplash.com/photo-1519624090336-6b21b8575953?q=80&w=600&h=400&fit=crop", hint: "colors powder" },
    { name: "Navratri", image: "https://images.unsplash.com/photo-1589498202028-2a2b72183c58?q=80&w=600&h=400&fit=crop", hint: "garba dance" },
    { name: "Durga Puja", image: "https://images.unsplash.com/photo-1544275932-c64057a6e5b8?q=80&w=600&h=400&fit=crop", hint: "goddess durga" },
    { name: "Ganesh Chaturthi", image: "https://images.unsplash.com/photo-1596791834185-a7c3315a4523?q=80&w=600&h=400&fit=crop", hint: "ganesha idol" },
  ];

  const featuredRecipes = [
    { name: "Gajar Ka Halwa", image: "https://images.unsplash.com/photo-1613542911293-9a572a135316?q=80&w=400&h=300&fit=crop", hint: "carrot dessert", festival: "Diwali" },
    { name: "Puran Poli", image: "https://images.unsplash.com/photo-1625391029258-a53655383921?q=80&w=400&h=300&fit=crop", hint: "sweet flatbread", festival: "Ganesh Chaturthi" },
    { name: "Ras Malai", image: "https://images.unsplash.com/photo-1596561260279-7243b81e4c79?q=80&w=400&h=300&fit=crop", hint: "milk dessert", festival: "Holi" },
  ];

  const blogPosts = [
    { title: "The Significance of Diyas in Diwali", image: "https://images.unsplash.com/photo-1604514288399-55e62f45793b?q=80&w=400&h=300&fit=crop", hint: "diya lamp", excerpt: "Discover the deep cultural and spiritual meaning behind lighting diyas..." },
    { title: "A Guide to Traditional Holi Colors", image: "https://images.unsplash.com/photo-1580538257844-94aa7d781d3d?q=80&w=400&h=300&fit=crop", hint: "holi colors", excerpt: "Learn about the natural ingredients used in traditional Holi colors and their significance." },
    { title: "Top 5 Rangoli Designs for Beginners", image: "https://images.unsplash.com/photo-1604435924739-429948033575?q=80&w=400&h=300&fit=crop", hint: "rangoli floor", excerpt: "Get inspired with these easy-to-make yet beautiful rangoli patterns for any occasion." },
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
            <Link href="/calendar">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Explore Festival Calendar <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Upcoming Festivals</h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {upcomingFestivals.map((festival, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image src={festival.image} alt={festival.name} width={600} height={400} className="w-full h-auto object-cover aspect-[3/2]" data-ai-hint={festival.hint} />
                      <div className="p-6">
                        <h3 className="font-headline text-2xl font-bold">{festival.name}</h3>
                        <Link href={`/festivals/${festival.name.toLowerCase()}`}>
                          <Button variant="link" className="p-0 mt-2 text-accent hover:text-accent/90">
                            Learn More <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
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
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <Card key={recipe.name} className="overflow-hidden group">
              <div className="relative">
                <Image src={recipe.image} alt={recipe.name} width={400} height={300} className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105" data-ai-hint={recipe.hint} />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{recipe.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{recipe.festival}</p>
              </CardHeader>
              <CardContent>
                <Link href="/recipes">
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
              <Image src={post.image} alt={post.title} width={400} height={300} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={post.hint} />
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
              <Input type="email" placeholder="Enter your email" className="flex-grow bg-primary-foreground/10 border-primary-foreground/50 text-primary-foreground placeholder:text-primary-foreground/70" />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
