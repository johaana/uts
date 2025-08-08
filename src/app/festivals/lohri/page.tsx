
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function LohriPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-amber-900/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-amber-900 shadow-lg">Lohri</h1>
                    <p className="text-xl md:text-2xl mt-4 text-amber-800/90 shadow-md">The Bonfire Festival of Punjab</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12 overflow-hidden">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="songs" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Songs</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                 <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Harvest Celebration</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Lohri is a joyous and spirited folk festival celebrated with great enthusiasm in the Punjab region. It marks the passing of the winter solstice and the end of the peak winter season, welcoming the longer, sunnier days ahead. At its heart, Lohri is a harvest festival, deeply connected to the agricultural cycle. It's a time for farmers to celebrate the ripening of the rabi (winter) crops, especially sugarcane, and to offer gratitude for the earth's bounty. The festival is a vibrant cultural event, filled with the infectious beats of the dhol, traditional music, energetic folk dances, and a profound sense of community warmth that combats the winter chill.</p>
                                            <p>The centerpiece of every Lohri celebration is the sacred bonfire. As the sun sets, families and communities gather around a crackling fire. In a beautiful ritual, they toss offerings of sesame seeds (til), jaggery (gur), peanuts, and popcorn into the flames. This act is a symbolic gesture of thanks to Agni, the fire god, seeking blessings for prosperity, fertility, and a bountiful year ahead. The festival also pays homage to a local hero, Dulla Bhatti, a legendary figure from Punjab who lived during the Mughal era. Celebrated as the 'Robin Hood of Punjab', he was known for rescuing Punjabi girls from being forcibly taken and sold into slavery, and arranging their marriages with dignity. Folk songs sung in his honor recount his bravery and generosity, adding a layer of historical reverence and social consciousness to the joyful celebrations.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/MGgSRZNM/lohri-1.webp" alt="Lohri bonfire" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="lohri bonfire"/>
                                    </div>
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
                        <ShareButtons title="Lohri" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
