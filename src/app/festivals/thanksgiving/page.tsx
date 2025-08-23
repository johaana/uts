
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function ThanksgivingPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-700/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/Y0vY3MvN/thanksgiving1.webp" alt="Thanksgiving Dinner" layout="fill" objectFit="cover" data-ai-hint="thanksgiving dinner" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-orange-900 drop-shadow-lg">Thanksgiving</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-orange-800/90 drop-shadow-md">A Festival of Gratitude and Harvest</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Harvest Feast</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Thanksgiving is a national holiday celebrated primarily in the United States and Canada as a day of giving thanks for the blessing of the harvest and of the preceding year. The American tradition dates back to 1621, when the Pilgrims of Plymouth Colony shared an autumn harvest feast with the Wampanoag Native Americans. This "First Thanksgiving" is remembered as a moment of cooperation and gratitude.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Turkey, Parades, and Family</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Day of Gratitude</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Today, Thanksgiving is a time for families to gather for a large feast, the centerpiece of which is traditionally a roasted turkey. Other classic dishes include stuffing, mashed potatoes, cranberry sauce, and pumpkin pie. The day is also known for the Macy's Thanksgiving Day Parade in New York City and for being the unofficial start of the Christmas holiday season.</p>
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
