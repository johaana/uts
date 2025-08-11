
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Utensils } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function OktoberfestPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/wMPyvM8p/oktoberfest.jpg" alt="Oktoberfest" layout="fill" objectFit="cover" data-ai-hint="beer festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Oktoberfest</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">The World's Largest Beer Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="food" className="py-2"><Utensils className="w-4 h-4 mr-2" />Food & Drink</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Bavarian Celebration</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Oktoberfest is the world's largest Volksfest (beer festival and travelling funfair) held annually in Munich, Bavaria, Germany. It is a 16- to 18-day folk festival running from mid- or late-September to the first Sunday in October, with more than six million people from around the world attending every year. The event originated in 1810, as a celebration of the marriage of Crown Prince Ludwig I to Princess Therese of Saxe-Hildburghausen.</p>
                                    <p>While it is globally famous as a beer festival, Oktoberfest is a comprehensive celebration of Bavarian culture, traditions, and cuisine. It's a time of great merriment, with amusement rides, games, and traditional music.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Parades and Costumes</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The festival officially begins with a colorful parade of the brewery wagons and landlords, followed by the tapping of the first keg by the Mayor of Munich, who exclaims "O'zapft is!" ("It's tapped!"). Many attendees wear traditional Bavarian attire: men in 'Lederhosen' (leather breeches) and women in 'Dirndl' (a traditional dress with a bodice, blouse, and apron). The festival grounds are filled with massive beer tents, each run by a different Munich brewery, and filled with the sounds of live oompah bands playing traditional Bavarian music.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="food">
                                <h2 className="font-headline text-3xl font-bold mb-4">More Than Just Beer</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Bavarian Delicacies</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">While special Oktoberfest beer is the star, the food is equally important. Visitors feast on a variety of traditional dishes such as 'Hendl' (roast chicken), 'Schweinshaxe' (roasted ham hock), 'Würstl' (sausages), and giant soft pretzels ('Brezn'). These hearty meals are a perfect accompaniment to the litre-sized beer mugs ('Maß').</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Oktoberfest" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
