
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

const recipes = [
    { name: "Puran Poli", link: "/recipes/puran-poli" },
    { name: "Payasam", link: "/recipes/payasam" },
]

export default function UgadiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://i.postimg.cc/ZnGTY8KL/ugadi.jpg" alt="Ugadi" layout="fill" objectFit="cover" data-ai-hint="ugadi pachadi" />
                </div>
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Ugadi</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">The New Year of the Deccan</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12 overflow-hidden">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Recipes</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Auspicious Beginnings</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Ugadi, also known as Yugadi, is the traditional New Year's Day celebrated with immense joy and fervor by the people of the Deccan region, particularly in the states of Andhra Pradesh, Telangana, and Karnataka. The name itself is derived from the Sanskrit words 'yuga' (age) and 'adi' (beginning), signifying "the beginning of a new age." It falls on the first day of the Hindu lunisolar calendar month of Chaitra. This day is considered highly auspicious, as it is believed to be the day on which Lord Brahma, the Creator of the Universe, began his creation. Ugadi marks the arrival of spring, a time of new life, fresh starts, and renewed hope for a prosperous year ahead.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Rituals of the New Year</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Ugadi Pachadi</h4>
                                            <p className="text-foreground/80">The most important and symbolic ritual of Ugadi is the preparation and consumption of 'Ugadi Pachadi'. This special chutney is a unique concoction that combines six different tastes - sweet (jaggery), sour (tamarind), salty (salt), bitter (neem flowers), pungent (raw mango), and spicy (chili powder). This mixture symbolizes the different experiences one can expect in the coming year, teaching that life is a blend of joy, sorrow, anger, fear, surprise, and sadness, and one should learn to accept them all with equanimity.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Panchanga Sravanam</h4>
                                            <p className="text-foreground/80">Families and communities gather to listen to the 'Panchanga Sravanam', which is the ceremonial reading of the new year's astrological predictions and almanac by a priest or an elder. This gives a general forecast for the year ahead.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Decorations and Feasting</h4>
                                            <p className="text-foreground/80">Homes are cleaned and decorated with intricate 'rangoli' designs and strings of fresh mango leaves ('torana'), which are considered auspicious. People wear new clothes and prepare a grand festive feast to share with family and friends.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Ugadi Feast</h2>
                                 <p className="mb-6 text-foreground/80 prose max-w-none">The centerpiece of the Ugadi feast is the symbolic Ugadi Pachadi. Other sweets are also prepared.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                        <Link href={recipe.link || "#"} key={recipe.name}>
                                            <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-xl font-bold text-center text-primary h-14 flex items-center justify-center">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Embracing Life's Flavors</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Philosophy of Pachadi</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The Ugadi Pachadi is a profound philosophical reminder that life is not monolithic; it's a complex mixture of different experiences. The festival teaches one to embrace all facets of life with grace and to make the most of the opportunities that the new year brings. It encourages a balanced and realistic approach to life, accepting both the good and the bad with a sense of equanimity and resilience.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                         <ShareButtons title="Ugadi" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
