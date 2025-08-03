
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

export default function GoodFridayPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-700/10">
                 <Image src="https://i.postimg.cc/ncKMYdWy/christmas-2.jpg" alt="Cross silhouette" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="crucifixion cross"/>
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Good Friday</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">A Day of Solemn Remembrance</p>
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
                                    <p>Good Friday is a Christian holiday commemorating the crucifixion of Jesus Christ and his death at Calvary. It is observed during Holy Week as part of the Paschal Triduum. It is a day of deep sorrow, penance, and fasting for Christians worldwide. The day is called "Good" because it is believed that through his death, Jesus took away the sins of the world, leading to the resurrection on Easter Sunday, which represents the ultimate victory of good over evil.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Mourning and Prayer</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>On Good Friday, many churches hold special services that recount the story of Jesus's passion and crucifixion. The church bells are often kept silent. Many Christians observe a fast, abstaining from food or eating simple meals. Processions recreating the Stations of the Cross, which depict the final hours of Jesus's life, are also common in many communities. It is a day for quiet reflection and prayer.</p>
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
                                            <p className="text-foreground/80">While Good Friday is a day of mourning, it is also a day of hope. For Christians, Jesus's sacrifice is the ultimate proof of God's love for humanity. It is a reminder that suffering and death are not the end, and that they are followed by the promise of resurrection and eternal life. The somber atmosphere of Good Friday gives way to the joyous celebration of Easter, which marks the resurrection of Jesus Christ.</p>
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
