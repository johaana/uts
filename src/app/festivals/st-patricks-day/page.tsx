
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function StPatricksDayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-700/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/1XTmKpWH/St-Patrick-s-Day-Ireland-Global.avif" alt="St. Patrick's Day Parade" layout="fill" objectFit="cover" data-ai-hint="irish parade" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-lg">St. Patrick's Day</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-green-800/90 drop-shadow-md">A Global Celebration of Irish Culture</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Parades and Shamrocks</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Celebrating the Patron Saint of Ireland</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Saint Patrick's Day, celebrated annually on March 17th, is a cultural and religious holiday that commemorates the death of Saint Patrick, the foremost patron saint of Ireland. What began as a solemn religious feast day in the 17th century has evolved into a global celebration of Irish culture, heritage, and identity. It is celebrated with immense enthusiasm in Ireland and by the vibrant Irish diaspora around the world, particularly in the United States, Canada, and Australia.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Going Green</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Sea of Green</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The most iconic tradition of St. Patrick's Day is "the wearing of the green." People dress in green attire and sport shamrocks, the national symbol of Ireland, which St. Patrick is said to have used to explain the concept of the Holy Trinity. The day is famous for its lively parades, with the largest ones held in Dublin, New York City, and Chicago, where the river is famously dyed green for the occasion. It's a day of feasting on traditional Irish food like corned beef and cabbage, enjoying Irish music and dance, and for many, partaking in a pint of Guinness.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="St. Patrick's Day" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
