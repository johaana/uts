
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";

export default function YaoshangPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-pink-500/10">
                 <Image src="https://i.postimg.cc/rsXF5WNy/holi.jpg" alt="Yaoshang Festival" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="manipur festival"/>
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-pink-900 drop-shadow-lg">Yaoshang</h1>
                    <p className="text-xl md:text-2xl mt-4 text-pink-800/90 drop-shadow-md">The Holi of Manipur</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Celebrations</TabsTrigger>
                                <TabsTrigger value="music" className="py-2"><Music className="w-4 h-4 mr-2" />Music & Dance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Five-Day Extravaganza</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Yaoshang is considered one of the most important festivals of Manipur. Often called the 'Holi of Manipur', it is celebrated for five days, commencing on the full moon day of the Phalguna month (February/March). While it shares the tradition of playing with colors like Holi, Yaoshang has its own unique customs and a deeper cultural significance for the Meitei people of Manipur.</p>
                                    <p>The festival is a vibrant blend of indigenous Meitei traditions and Vaishnavite Hindu beliefs. It is a time of great joy, community bonding, and cultural expression, with a special emphasis on sports and the performing arts.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Unique Customs</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The festival begins with the burning of a symbolic thatch hut, known as 'Yaoshang Meithaba', similar to Holika Dahan. A unique tradition is 'Nakatheng', where children go from house to house to collect monetary donations for their festive expenses. The festival is also a time for friendly sporting competitions, with many local clubs organizing events. And, of course, there is the joyous playing with 'abeer' (colored powder) and water.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="music">
                                <h2 className="font-headline text-3xl font-bold mb-4">Thabal Chongba</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Moonlight Dance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">'Thabal Chongba', which means 'dancing in the moonlight', is a traditional Manipuri folk dance that is a major highlight of the Yaoshang festival. Boys and girls from different localities gather in open grounds and dance together in a circle to the rhythm of folk music, creating a lively and inclusive atmosphere. It is a beautiful celebration of community and togetherness.</p>
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
