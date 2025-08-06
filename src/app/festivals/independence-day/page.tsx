
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Flag } from "lucide-react";
import Image from "next/image";

export default function IndependenceDayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-50/20">
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Independence Day</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Celebrating Freedom</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Flag className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Dawn of a New Era</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Independence Day, observed with great patriotic fervor on the 15th of August every year, commemorates the day India achieved freedom from British colonial rule in 1947. This historic day marked the end of nearly 200 years of struggle, sacrifice, and relentless protest. It was the dawn of a new era, the birth of the world's largest democracy, and a moment of immense triumph for a nation that had fought for its sovereignty with the powerful ideals of non-violence and civil disobedience. It is a day of immense national pride, a time to remember and pay heartfelt tribute to the sacrifices of the countless freedom fighters—men and women from all walks of life—who laid down their lives for the cherished dream of a free India.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Celebrations Across the Nation</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The main Independence Day event takes place at the historic Red Fort in Delhi, where the Prime Minister of India hoists the national flag and delivers an address to the nation, highlighting the country's achievements and future goals. Across the country, the day is marked by flag-hoisting ceremonies, parades, and cultural events in state capitals, district headquarters, schools, and colleges. A particularly beautiful and informal tradition that has emerged over the years is kite-flying. On this day, the skies across many Indian cities are filled with thousands of colorful kites of all shapes and sizes, a vibrant and joyous symbol of the free spirit of India soaring high.</p>
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
                                            <p className="text-foreground/80">Independence Day is not just a celebration but also a day of deep reflection. It is a day to pay homage to the heroes of the freedom struggle and to reflect on the incredible journey of the nation since 1947. It's a time to celebrate the country's achievements in science, technology, arts, and sports, and to renew the collective pledge to build a strong, prosperous, and inclusive India, fulfilling the dreams of the generations who fought for its freedom.</p>
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
