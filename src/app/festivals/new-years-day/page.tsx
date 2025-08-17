
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function NewYearsDayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/nzHVdBx9/new-year-s-day.png" alt="New Year's Day" layout="fill" objectFit="cover" data-ai-hint="fireworks celebration" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">New Year's Day</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">A Fresh Start to a New Chapter</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The First Day of the Year</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>New Year's Day, celebrated on January 1st, is the first day of the year in the modern Gregorian calendar. It follows New Year's Eve and is a public holiday in most countries around the world. The day marks a symbolic fresh start, a time to leave the past behind and look forward with hope and optimism. While the evening before is for parties, New Year's Day is often a quieter time for family, rest, and setting intentions for the year ahead.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Family, Food, and Football</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Day of Rest and Renewal</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Traditions for New Year's Day vary globally. Many people spend the day with family, enjoying a special meal. Some cultures have "good luck" foods that are eaten on this day to bring prosperity for the year. In many places, it's a day for parades and sporting events, like college football games in the United States. For others, it's a day to relax and recover from the previous night's celebrations and to contemplate the New Year's resolutions made.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="New Year's Day" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
