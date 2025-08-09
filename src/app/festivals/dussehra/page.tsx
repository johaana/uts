
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function DussehraPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-primary shadow-lg">Dussehra</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-primary/90 shadow-md">The Victory of Good Over Evil</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Celebrations</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                 <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:order-2 md:w-1/3">
                                        <Image src="https://i.postimg.cc/wMVZW9fk/dussehra.jpg" alt="Ramlila performance" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="dussehra celebration"/>
                                    </div>
                                    <div className="md:order-1 md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">Celebrating Rama's Victory</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Dussehra, also known as Vijayadashami, is a major Hindu festival celebrated at the end of Navratri every year. It marks the victory of Lord Rama over the ten-headed demon king Ravana, who had abducted Rama's wife, Sita. The festival is a celebration of the triumph of good over evil, light over darkness, and dharma over adharma.</p>
                                            <p>The name Dussehra is derived from the Sanskrit words 'Dasha' (ten) and 'Hara' (defeat), symbolizing the defeat of the ten-headed Ravana. The festival is celebrated with great fervor across India, with different regions having their own unique customs and traditions.</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Ramlila and Ravan Dahan</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The most famous tradition of Dussehra is the 'Ramlila', a dramatic folk reenactment of the life of Rama, which is staged for several nights leading up to Dussehra. On the day of the festival, giant effigies of Ravana, his brother Kumbhakarna, and his son Meghanada are burnt in large open grounds. This act, known as 'Ravan Dahan', symbolizes the destruction of evil and is accompanied by spectacular fireworks.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day for New Beginnings</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Auspiciousness of Vijayadashami</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Vijayadashami is considered a very auspicious day to start new ventures, such as businesses, education, or any new project. It is believed that any undertaking started on this day will be met with success. The festival reinforces the message that no matter how powerful evil may seem, it will ultimately be defeated by the forces of good and righteousness.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Dussehra" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
