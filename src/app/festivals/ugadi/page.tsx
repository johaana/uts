
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

const recipes = [
    { name: "Ugadi Pachadi", link: "#" },
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
                <Card className="mb-12">
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
                                    <p>Ugadi, also known as Yugadi, is the New Year's Day for the people of Andhra Pradesh, Telangana, and Karnataka. The name is derived from the Sanskrit words 'yuga' (age) and 'adi' (beginning), signifying "the beginning of a new age." It falls on the first day of the Chaitra month and is celebrated with great joy and enthusiasm, marking the arrival of spring and new life.</p>
                                    <p>The festival is a time for fresh starts, with people cleaning their homes, wearing new clothes, and decorating their doorways with mango leaves. It's a day of feasting, family gatherings, and looking forward to a prosperous year ahead.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Rituals of the New Year</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Ugadi Pachadi</h4>
                                            <p className="text-foreground/80">The most important ritual is the preparation and consumption of 'Ugadi Pachadi', a special chutney that combines six different tastes - sweet, sour, salty, bitter, pungent, and spicy. This mixture symbolizes the different experiences of life that one should expect in the coming year.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Panchanga Sravanam</h4>
                                            <p className="text-foreground/80">Families gather to listen to the 'Panchanga Sravanam', the reading of the new year's astrological predictions and almanac by a priest.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Ugadi Feast</h2>
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
                                            <p className="text-foreground/80">The Ugadi Pachadi is a profound reminder that life is a mixture of different experiences - joy, sorrow, anger, fear, disgust, and surprise. The festival teaches one to accept all these experiences with equanimity and to make the most of the coming year.</p>
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
