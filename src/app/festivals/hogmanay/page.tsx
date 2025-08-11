
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function HogmanayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-900/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/fLzRWWtx/Hogmanay-Scotland.webp" alt="Hogmanay Torchlight Procession" layout="fill" objectFit="cover" data-ai-hint="torchlight procession" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Hogmanay</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">Scotland's Legendary New Year's Celebration</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">More Than Just a New Year's Eve</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Hogmanay is the Scottish word for the last day of the old year and is synonymous with one of the world's most famous New Year celebrations. While many countries celebrate for a single night, Scotland's Hogmanay is a multi-day festival, often starting on December 30th and continuing into January 2nd. Its origins are believed to be a mix of Norse winter solstice rituals and Gaelic Samhain traditions.</p>
                                    <p>The celebrations in major cities like Edinburgh are legendary, featuring massive street parties, concerts, and spectacular fireworks displays. However, the festival is also rich in local customs and traditions that are observed in homes across the country, making it a deeply cultural experience.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">First-Footing and Fire Festivals</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>A key tradition is **'first-footing'**, which starts immediately after midnight. The 'first-footer' is the first person to cross the threshold of a home in the new year. A tall, dark-haired man is considered the most lucky, and they traditionally bring symbolic gifts like coal, shortbread, salt, and whisky to bring good fortune to the house for the coming year.</p>
                                   <p>Fire is also a central element, symbolizing the purification and burning away of old spirits. This is seen in the magnificent **Torchlight Procession** in Edinburgh and various local fire festivals, like the Stonehaven Fireballs ceremony, where participants swing giant fireballs on chains.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Community, Renewal, and "Auld Lang Syne"</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Auld Lang Syne</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">At the stroke of midnight, it's tradition for everyone to join hands and sing Robert Burns' "Auld Lang Syne." This poignant song about friendship and looking back on old times perfectly captures the spirit of Hogmanay. The festival is a powerful celebration of community, a time to bid farewell to the old year, and to welcome the new one with warmth, hope, and goodwill.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Hogmanay" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    