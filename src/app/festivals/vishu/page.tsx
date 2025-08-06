
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, CheckCircle, Utensils } from "lucide-react";
import Image from "next/image";

export default function VishuPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-500/10">
                 <Image src="https://i.postimg.cc/j5CbVzzR/south-indian-festivals.jpg" alt="Vishu Kani" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="kerala new year"/>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-yellow-900 drop-shadow-lg">Vishu</h1>
                    <p className="text-xl md:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">Kerala's Astronomical New Year</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Auspicious Sights</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Vishu is the traditional New Year festival celebrated in the South Indian state of Kerala. It falls on the first day of the month of Medam in the Malayalam calendar, which usually corresponds to mid-April. Vishu is not just a New Year celebration; it's a festival of hope, new beginnings, and auspiciousness, centered around the belief that the first thing one sees on Vishu day influences their fortune for the entire year.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Key Rituals</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Vishukkani</h4>
                                            <p className="text-foreground/80">The most important ritual is the 'Vishukkani', which means "the first thing seen on Vishu". It is a carefully arranged tray of auspicious items (rice, fruits, vegetables, flowers, gold, money) placed before an idol of Lord Krishna. Family members are blindfolded and led to see the Vishukkani first thing in the morning.</p>
                                        </div>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Vishu Kaineettam</h4>
                                            <p className="text-foreground/80">This is the tradition of elders giving money to the younger members of the family as a symbol of blessing and prosperity for the year ahead.</p>
                                        </div>
                                    </li>
                                     <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Vishu Sadya</h4>
                                            <p className="text-foreground/80">A grand vegetarian feast, similar to the Onam Sadya, is prepared, featuring a balance of all flavors.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Year of Prosperity</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Hope and Renewal</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Vishu is a festival that celebrates hope and the promise of a prosperous new year. The ritual of Vishukkani symbolizes the desire to see good and auspicious things throughout the coming year, setting a positive tone for new beginnings. The bursting of firecrackers ('Vishupadakkam') is also a major part of the celebration, symbolizing the dispelling of evil spirits.</p>
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
