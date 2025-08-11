
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Utensils, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function ThanksgivingPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-amber-700/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/t4yW8v8k/thanksgiving.jpg" alt="Thanksgiving Dinner" layout="fill" objectFit="cover" data-ai-hint="thanksgiving dinner" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-amber-900 drop-shadow-lg">Thanksgiving</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-amber-800/90 drop-shadow-md">A Celebration of Gratitude and Harvest</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">A Harvest Feast of Gratitude</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Thanksgiving is a national holiday in the United States, celebrated on the fourth Thursday of November. It originated as a harvest festival, and its history is deeply rooted in the story of the Pilgrims who settled in Plymouth, Massachusetts. The traditional "First Thanksgiving" is believed to have occurred in 1621, when the Pilgrims, after a successful first harvest in the New World, shared a feast with the Wampanoag Native Americans who had helped them survive the brutal winter.</p>
                                    <p>Today, Thanksgiving is a time for family and friends to gather for a large feast, to share what they are thankful for, and to kick off the holiday season. It is a day of gratitude, reflection, and community.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Turkey, Parades, and Football</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The centerpiece of most Thanksgiving celebrations is the **Thanksgiving dinner**, a large meal that traditionally features a roasted turkey. Other classic dishes include stuffing, mashed potatoes, cranberry sauce, and pumpkin pie. The day is also marked by large **parades**, most famously the Macy's Thanksgiving Day Parade in New York City, featuring giant balloons, floats, and marching bands. Watching **American football** is another beloved tradition, with professional games played throughout the day. Many families also take the time to volunteer or donate to charities, sharing their blessings with those less fortunate.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Time for Family and Gratitude</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Giving Thanks</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">At its core, Thanksgiving is about gratitude. It is a day for people to pause and reflect on their blessings from the past year. It is one of the biggest travel days of the year in the US, as family members travel across the country to be together. While its historical origins are complex, the modern celebration emphasizes the universal values of family, community, and giving thanks, making it one of America's most cherished holidays.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Thanksgiving" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
