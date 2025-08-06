
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

export default function BastarDussehraPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Bastar Dussehra</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The World's Longest Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Unique Rituals</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A 75-Day Celebration</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Unlike Dussehra celebrations elsewhere in India, which are centered around the legend of Ramayana, Bastar Dussehra is a unique and spectacular event dedicated to Goddess Danteshwari, the presiding deity of the Bastar region in Chhattisgarh. Famously known as the world's longest festival, its celebrations span over an incredible 75 days, culminating on the 13th day of the bright moon in the month of Ashwin.</p>
                                    <p>The festival dates back to the 15th century and was started by the Kakatiya ruler, King Purushottam Deo. It is a vibrant amalgamation of tribal and Hindu traditions, showcasing the rich cultural heritage of the region's diverse indigenous communities. The festival is not about burning effigies but about celebrating nature, spirituality, and the power of the goddess.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Rituals and Chariots</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The festival involves a series of elaborate and fascinating rituals. One of the main attractions is the construction of a massive double-decked chariot (rath), which is pulled by the local people. Another unique ritual is the 'Jogi Bithai', where a youth sits in a pit for nine days, fasting and meditating for the prosperity of the region. The festival is a grand spectacle, attracting devotees and tourists from all over, offering a deep insight into the ancient traditions of the Bastar tribes.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Symbol of Unity</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Devotion and Community</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Bastar Dussehra is a powerful symbol of unity, bringing together various tribal communities of the region. The collective participation in the construction of the chariot and the performance of rituals strengthens social bonds and reinforces a shared cultural identity, centered around the devotion to Goddess Danteshwari.</p>
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
