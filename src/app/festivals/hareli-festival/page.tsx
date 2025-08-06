
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

export default function HareliFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-700/10">
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-green-900 drop-shadow-lg">Hareli Festival</h1>
                    <p className="text-xl md:text-2xl mt-4 text-green-800/90 drop-shadow-md">Chhattisgarh's Green Harvest Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Rituals</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Celebrating the Monsoon Greenery</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Hareli, which means 'greenery' in the local dialect, is a significant harvest festival celebrated by the farming communities of Chhattisgarh. It falls on the new moon day (Amavasya) of the Shravan month, marking the onset of the monsoon season. The festival is a vibrant expression of gratitude to the earth and a prayer for a good harvest. It's a day when the fields are lush green, and farmers celebrate a brief respite before the hard work of transplantation begins.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Worship of Farm Tools</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>A unique aspect of Hareli is the worship of farm equipment. On this day, farmers clean their ploughs, sickles, and other agricultural tools, and offer prayers to them. This ritual symbolizes respect for the instruments that are vital to their livelihood. Cattle are also bathed and worshipped. Another fun tradition is 'Gedi', where children and adults walk on long bamboo stilts, a practice that is both a game and a way to navigate muddy village paths during the monsoon.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Harmony with Nature</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Ecological Importance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Hareli is a beautiful reflection of the deep-rooted connection between the tribal communities and the natural world. It underscores the importance of sustainable agriculture and living in harmony with the environment. The festival is not just a cultural event but also a reminder of the reverence for the tools and animals that support human life.</p>
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
