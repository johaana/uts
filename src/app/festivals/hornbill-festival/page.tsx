import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HornbillFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                 <Image src="https://i.postimg.cc/tJnB8vjD/Hornbill-Festival.jpg" alt="Hornbill Festival" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="naga festival" />
                <div className="relative text-center text-primary-foreground">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Hornbill Festival</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Festival of Festivals</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Highlights</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Carnival of Naga Culture</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Hornbill Festival, named after the state bird of Nagaland, is one of the most celebrated cultural events in Northeast India. Held every year from December 1st to 10th at the Naga Heritage Village of Kisama, near the capital Kohima, this "Festival of Festivals" is a grand showcase of the rich and diverse traditions of the 16 major tribes of Nagaland. Organized by the state government, the festival aims to revive, protect, and promote the unique cultural heritage of the Naga people.</p>
                                    <p>It's a week-long extravaganza of culture, color, and celebration. Visitors are treated to a spectacular display of traditional arts, crafts, music, dance, and food. Each tribe has its own dedicated 'Morung' (a traditional Naga hut), where they showcase their unique costumes, weaponry, and cultural practices. The festival provides a rare opportunity to experience the collective spirit of the Naga people and their deep connection to their ancestral traditions, all in one place.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">What to Experience</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Traditional Dances & Music</h4>
                                            <p className="text-foreground/80">The main arena hosts daily performances of energetic war dances, folk songs, and indigenous music by different Naga tribes in their full traditional attire.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Naga Cuisine</h4>
                                            <p className="text-foreground/80">Each Morung offers a chance to sample authentic Naga cuisine, which is known for its unique flavors, often featuring smoked meats, bamboo shoots, and the fiery Naga King Chili.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Rock Concert & Night Carnival</h4>
                                            <p className="text-foreground/80">The evenings come alive with the Hornbill National Rock Contest, drawing bands from all over India, and a bustling night market in Kohima.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Cultural Unity</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Inter-Tribal Interaction</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The Hornbill Festival serves as a crucial platform for the different Naga tribes to come together, interact, and share their cultural practices. It fosters a sense of unity and strengthens the bonds between the various communities, promoting peace and cultural understanding in a region with a complex history.</p>
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