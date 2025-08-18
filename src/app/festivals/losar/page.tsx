
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function LosarPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-600/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/9QtNjywP/losar.jpg" alt="Losar Festival" layout="fill" objectFit="cover" data-ai-hint="ladakh festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">Losar Festival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">The Tibetan New Year</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Celebrations</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Welcoming the New Year</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Losar, meaning "New Year" in Tibetan ('Lo' for year, 'sar' for new), is the most important festival for Tibetan Buddhists. Celebrated with immense joy in Tibet and the Himalayan regions of India like Ladakh, Sikkim, and Arunachal Pradesh, it marks the beginning of the Tibetan lunar calendar. The festival typically lasts for 15 days, with the first three days being the most significant. It is a time for families to reunite, cleanse their homes and spirits of the old year's negativities, and welcome the new year with hope and festivity.</p>
                                    <p>The festival's roots pre-date Buddhism, originating from an ancient Bon practice of burning incense to appease local spirits. With the advent of Buddhism, this tradition was integrated into a larger celebration that also honors the harvest and prays for prosperity in the coming year.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Sacred Dances and Family Feasts</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Preparations for Losar begin well in advance. Homes are meticulously cleaned and decorated with auspicious symbols. A special noodle soup called 'guthuk' is eaten on New Year's Eve, which contains dough balls with hidden items predicting the fortune of the person who finds them.</p>
                                   <p>The main celebrations feature vibrant and sacred 'Cham' dances performed by monks in monasteries. These masked dances narrate stories of the triumph of good over evil. Families visit each other, exchange greetings of "Tashi Delek!", and share festive foods like 'kapse' (fried pastries). The atmosphere is filled with joy, music, and prayer, making it a rich cultural experience.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Renewal and Merit</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Spiritual Cleansing</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Losar is a festival of spiritual and physical renewal. The cleaning of homes and the rituals to drive away evil spirits symbolize a fresh start. It is a time for making offerings at monasteries, praying for a good harvest, and accumulating merit for the year ahead. The festival beautifully blends ancient folk traditions with deep Buddhist philosophy, emphasizing peace, community, and the cyclical nature of life.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Losar Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
