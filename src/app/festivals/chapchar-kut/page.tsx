
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";

export default function ChapcharKutPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-700/10">
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-green-900 drop-shadow-lg">Chapchar Kut</h1>
                    <p className="text-xl md:text-2xl mt-4 text-green-800/90 drop-shadow-md">Mizoram's Biggest Spring Festival</p>
                </div>
                 <Image src="https://i.postimg.cc/G2NRzFY1/chapchar-kut1.jpg" alt="Chapchar Kut Festival" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-30" data-ai-hint="mizo dance" />
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Celebrations</TabsTrigger>
                                <TabsTrigger value="music" className="py-2"><Music className="w-4 h-4 mr-2" />Music & Dance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Festival of Joyful Harvest</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Chapchar Kut is the most important festival of the Mizo people in Mizoram. It's a vibrant and joyous spring festival celebrated in March after the completion of 'jhum' cultivation, the slash-and-burn agriculture practice. This is a period of rest for farmers before they begin sowing, and the festival is a time of thanksgiving and celebration for the hard work done.</p>
                                    <p>The festival is a wonderful showcase of Mizo culture, with people of all ages donning their traditional and colorful attire. It's a community event that brings everyone together, filled with music, dance, and feasting, promoting unity and cultural pride.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Feasting and Festivities</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Chapchar Kut is celebrated with great enthusiasm. The festivities include a grand community feast, exhibitions of traditional crafts, and various cultural performances. It is a time for reconciliation, for strengthening bonds, and for celebrating the vibrant spirit of the Mizo community.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="music">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Famous Cheraw (Bamboo Dance)</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Cheraw Dance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The highlight of Chapchar Kut is the 'Cheraw', or the bamboo dance. It's a beautiful and rhythmic dance where men tap long bamboo staves on the ground in a grid formation, while women gracefully step in and out of the moving bamboos. The dance requires great skill and timing and is a mesmerizing spectacle to behold.</p>
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
