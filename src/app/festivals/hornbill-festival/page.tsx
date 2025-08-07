
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function HornbillFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary/90 drop-shadow-lg">Hornbill Festival</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 drop-shadow-md">The Festival of Festivals</p>
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
                                    <p>The Hornbill Festival, affectionately known as the "Festival of Festivals," is one of the most celebrated and spectacular cultural events in Northeast India. Held every year from December 1st to 10th at the Naga Heritage Village of Kisama, nestled in the hills near the state capital of Kohima, this grand carnival is a vibrant showcase of the rich and diverse heritage of the 16 major tribes of Nagaland. Organized by the State Tourism and Art & Culture Departments of the Government of Nagaland, the festival aims to revive, protect, and promote the unique cultural identity of the Naga people while fostering inter-tribal interaction.</p>
                                    <p>The festival is named after the Indian Hornbill, a large and colorful forest bird that is revered by the Nagas and prominently featured in their folklore and traditions. For ten days, the Heritage Village comes alive with a riot of color, music, and celebration. Visitors are treated to a dazzling display of traditional arts, intricate crafts, folk songs, energetic dances, and indigenous games. Each of the Naga tribes has its own dedicated 'Morung' (a traditional Naga communal hut), where they showcase their unique costumes, elaborate headgear, ancient weaponry, and distinct cultural practices. The festival provides a rare and immersive opportunity to experience the collective spirit of the Naga people and their deep, living connection to their ancestral traditions, all in one vibrant location.</p>
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
                        <ShareButtons title="Hornbill Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
