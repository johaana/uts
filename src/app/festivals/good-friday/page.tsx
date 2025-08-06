
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

export default function GoodFridayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-700/10">
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-gray-800 shadow-lg">Good Friday</h1>
                    <p className="text-xl md:text-2xl mt-4 text-gray-700/90 shadow-md">A Day of Solemn Remembrance</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Observances</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Crucifixion of Jesus</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Good Friday is a Christian holiday of profound significance, commemorating the crucifixion of Jesus Christ and his subsequent death at Calvary. Observed during Holy Week as a part of the Paschal Triduum, it is a day marked by deep sorrow, penance, and fasting for Christians worldwide. The day is called "Good" not because of the tragic events it remembers, but because Christians believe that through his ultimate sacrifice, Jesus took upon himself the sins of the world. His death is seen as the culmination of God's plan to offer salvation to humanity, which leads to his resurrection on Easter Sunday—the ultimate victory of life over death and good over evil.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Mourning and Prayer</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>On Good Friday, many churches hold special, solemn services that recount the story of Jesus's passion—his suffering and crucifixion. The church bells, which normally ring out joyfully, are often kept silent as a sign of mourning. Altars are left bare, and services are conducted in a subdued atmosphere. Many Christians observe a strict fast on this day, abstaining from food or eating very simple meals as an act of penance. In many communities, processions recreating the Stations of the Cross, which depict the final hours of Jesus's life, are also held. It is a day for quiet reflection, prayer, and contemplation of the sacrifice at the heart of the Christian faith.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Ultimate Sacrifice</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Symbol of Hope</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">While Good Friday is a day of deep mourning, it is paradoxically also a day of great hope. For Christians, Jesus's sacrifice on the cross is the ultimate demonstration of God's boundless love for humanity. It is a powerful reminder that suffering and death are not the end, but are followed by the glorious promise of resurrection and eternal life. The somber and reflective atmosphere of Good Friday gives way to the joyous celebration of Easter, which marks the triumphant resurrection of Jesus Christ from the dead, the cornerstone of Christian faith.</p>
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
