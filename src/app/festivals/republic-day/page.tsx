
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Flag } from "lucide-react";
import Image from "next/image";

export default function RepublicDayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-50/20">
                 <Image src="https://i.postimg.cc/kG6pM4vB/Camel-Festival-Bikaner-Rajasthan.jpg" alt="Republic Day Parade" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="indian parade"/>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Republic Day</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Celebrating the Constitution of India</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="parade" className="py-2"><Flag className="w-4 h-4 mr-2" />The Parade</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Nation's Foundation</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Republic Day, celebrated annually on January 26th, marks the date on which the Constitution of India came into effect in 1950. While India gained independence from British rule on August 15, 1947, it was on this day that the country truly became a sovereign, socialist, secular, and democratic republic. The day honors the culmination of a long struggle by countless freedom fighters and the adoption of a constitution that lays down the framework for the nation's governance, ensuring justice, liberty, equality, and fraternity for all its citizens.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="parade">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Spectacle of Unity and Strength</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The main celebration takes place in the national capital, New Delhi, at the Kartavya Path (formerly Rajpath). The day begins with the President of India hoisting the national flag, followed by a grand parade. This is the centerpiece of the celebration, showcasing India's military might, cultural diversity, and technological progress.</p>
                                    <p>Regiments of the Indian Army, Navy, and Air Force march in perfect synchronization, along with their bands. The parade also features vibrant tableaus (floats) from various states and union territories, each depicting a unique aspect of its culture, history, or development. The event culminates with a spectacular airshow by the Indian Air Force. It's a powerful display of national pride and unity.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Pride</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Patriotic Fervor</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Across the country, Republic Day is celebrated with patriotic fervor. Flag-hoisting ceremonies are held in schools, colleges, and government offices. Cultural programs, patriotic songs, and speeches mark the day, reminding citizens of their duties and the values enshrined in the Constitution.</p>
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
