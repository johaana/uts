
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Flag } from "lucide-react";
import Image from "next/image";

export default function IndependenceDayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-600/10">
                 <Image src="https://i.postimg.cc/kG6pM4vB/Camel-Festival-Bikaner-Rajasthan.jpg" alt="Indian Flag" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="indian flag"/>
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Independence Day</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">Celebrating Freedom</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Flag className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Dawn of a New Era</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Independence Day, observed annually on August 15th, commemorates the day India achieved freedom from British colonial rule in 1947, after nearly 200 years of struggle. This historic day marked the end of an era of oppression and the birth of the world's largest democracy. It is a day of immense national pride, a time to remember the sacrifices of the countless freedom fighters who laid down their lives for the nation's independence.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Celebrations Across the Nation</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The main event takes place at the Red Fort in Delhi, where the Prime Minister of India hoists the national flag and addresses the nation. Across the country, the day is marked by flag-hoisting ceremonies, parades, and cultural events in state capitals, district headquarters, schools, and colleges. Kite-flying has also become a popular tradition on this day, with skies across many cities filled with colorful kites, symbolizing the free spirit of India.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Remembrance and Resolve</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Remembering the Past, Building the Future</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Independence Day is not just a celebration but also a day of reflection. It is a day to pay homage to the heroes of the freedom struggle and to reflect on the journey of the nation since independence. It's a time to celebrate the country's achievements in various fields and to renew the pledge to build a strong, prosperous, and inclusive India.</p>
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
