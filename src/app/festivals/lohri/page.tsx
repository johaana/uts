import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recipes = [
    { name: "Sarson ka Saag & Makki ki Roti", link: "#" },
    { name: "Til ki Chikki", link: "#" },
    { name: "Gajak", link: "#" },
]

export default function LohriPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-amber-900/10">
                 <Image src="https://i.postimg.cc/kgQyP7Ym/makar-sankranti1.webp" alt="Lohri bonfire" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="bonfire festival" />
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Lohri</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Bonfire Festival of Punjab</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="recipes" className="py-2"><Utensils className="w-4 h-4 mr-2" />Foods</TabsTrigger>
                                <TabsTrigger value="songs" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Songs</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Harvest Celebration</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Lohri is a joyous folk festival from the Punjab region, celebrating the passing of the winter solstice and marking the end of the peak winter season. It is a festival of warmth, gratitude, and community, primarily linked to the harvest of the rabi (winter) crops. Farmers celebrate the fruits of their labor and pray for a bountiful harvest in the coming year. The festival is a vibrant cultural event, filled with traditional music, dance, and a spirit of togetherness.</p>
                                    <p>The centerpiece of Lohri is the sacred bonfire. As the sun sets, people gather around the fire, tossing sesame seeds (til), jaggery (gur), and other offerings into the flames. This act is symbolic of offering gratitude to Agni, the fire god, and seeking his blessings for prosperity and fertility. The legend of Dulla Bhatti, a local hero who rescued Punjabi girls from being sold into slavery, is also central to the festival. Folk songs sung in his honor recount his bravery and generosity, adding a layer of historical reverence to the joyful celebrations.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">How to Celebrate Lohri</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Light a Bonfire</h4>
                                            <p className="text-foreground/80">The main ritual involves lighting a community bonfire in the evening. People gather around it, sing traditional songs, and perform folk dances like Bhangra and Gidda.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Make Offerings</h4>
                                            <p className="text-foreground/80">Offerings of til (sesame seeds), gur (jaggery), peanuts, and popcorn are thrown into the fire as a gesture of thanks to the fire god.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Community Feasting</h4>
                                            <p className="text-foreground/80">A grand feast is prepared, featuring traditional Punjabi winter delicacies like Sarson ka Saag and Makki ki Roti. The prasad from the fire (til, gur, etc.) is distributed among everyone.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                            <TabsContent value="recipes">
                                <h2 className="font-headline text-3xl font-bold mb-4">Lohri Feast</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {recipes.map(recipe => (
                                       <Link href={recipe.link} key={recipe.name}>
                                            <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                                                <CardContent className="p-4">
                                                    <h3 className="font-headline text-xl font-bold text-center text-primary h-14 flex items-center justify-center">{recipe.name}</h3>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </TabsContent>

                             <TabsContent value="songs">
                                <h2 className="font-headline text-3xl font-bold mb-4">Lohri Folk Songs</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Sundar Mundariye Ho!</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-lg font-serif italic">"Sunder mundariye ho! Tera kaun vichara ho! Dulla Bhatti walla ho!..."</p>
                                            <p className="mt-2 text-foreground/80">This is the most famous Lohri song, sung by children as they go from door to door asking for Lohri treats. It narrates the story of Dulla Bhatti and his heroic deeds, forming the cultural core of the celebration.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
