
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Info } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function LaTomatinaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-600/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/GhwH7wCz/la-tomatina1.jpg" alt="La Tomatina" layout="fill" objectFit="cover" data-ai-hint="tomato fight" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-red-900 drop-shadow-lg">World's Biggest Food Fight</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-red-800/90 drop-shadow-md">The Messy, Joyful Story of La Tomatina</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />The Story</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Info className="w-4 h-4 mr-2" />The Rules</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">An Accidental Tradition</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>On the last Wednesday of August every year, the quiet streets of Buñol, a small town near Valencia, Spain, run red with tomato pulp. This is La Tomatina, the world's most famous food fight, a festival with no religious or historical significance whatsoever. Its origins are as chaotic and messy as the event itself. The most popular story dates back to 1945, when a street brawl broke out during a parade of giants and big-heads. The young brawlers, in their fury, grabbed tomatoes from a nearby vegetable stall and began pelting each other.</p>
                                    <p>The following year, the same youths brought their own tomatoes, intentionally starting another fight. Despite being banned by the authorities for several years, the tradition persisted, fueled by a pure, anarchic desire for fun. The townspeople finally embraced it, and today, La Tomatina has grown into a massive, ticketed event that draws over 20,000 people from around the globe, all eager to participate in one hour of pure, unadulterated, tomato-flinging chaos.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Rules of the Game</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>One Hour of Mayhem</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival begins around 11 a.m. after the 'palo jabón' ritual, where participants try to climb a greasy pole to retrieve a ham. Once the ham is down, a loud signal marks the beginning of the fight. Huge trucks dump over 120 metric tons of over-ripe tomatoes into the central square. For the next hour, it's a free-for-all. A few simple rules exist to ensure safety: tomatoes must be squashed before being thrown, and no other objects are allowed. When the second signal sounds after an hour, the fight is over. Fire trucks then hose down the streets, washing away the sea of pulp, and the town returns to its sleepy state, leaving only the memories of a truly bizarre and joyous celebration.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="The World's Biggest Food Fight: La Tomatina" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
