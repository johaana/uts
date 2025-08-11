
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function BounOkPhansaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-800/10">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image src="https://i.postimg.cc/RF8nJzLN/Boun-Ok-Phansa-Festival-of-Lights.jpg" alt="Boun Ok Phansa" layout="fill" objectFit="cover" data-ai-hint="laos light festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Boun Ok Phansa</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">Laos' Festival of Lights</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The End of Buddhist Lent</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Boun Ok Phansa is a beautiful and serene festival in Laos that marks the end of the three-month Buddhist Lent, which coincides with the rainy season. Held on the full moon day of the eleventh lunar month (usually in October), this festival is a time of great joy and spiritual significance. During Lent, Buddhist monks remain in their monasteries for study and meditation, and laypeople observe more devout practices. Boun Ok Phansa, which means "Leaving the Rains-retreat," celebrates the monks' return to their normal community duties.</p>
                                    <p>The festival is a day of offerings and celebration, but it is the evening that holds the most magical spectacle. As darkness falls, the festival transforms into a breathtaking 'festival of lights', illuminating the rivers and towns of Laos with a gentle, spiritual glow.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Boats of Light and Fire</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>In the morning, devotees visit temples to make offerings of food, flowers, and donations to the monks. The most captivating ritual, however, is 'Lai Heua Fai', which means 'to float the fire boats'. In the evening, people gather on the banks of rivers, especially the Mekong, and release small, beautifully crafted boats made from banana leaves or trunks. These boats are decorated with flowers, incense, and candles. This stunning procession of light is a symbolic gesture to pay respect to the river spirits and to send away all negativity, illness, and bad luck with the current.</p>
                                   <p>In larger towns like Luang Prabang, the festival is even more spectacular, featuring a grand procession of large, intricately designed, and illuminated boats that are paraded through the town before being set afloat on the river.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Letting Go of Negativity</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Symbolic Cleansing</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Boun Ok Phansa is a deeply symbolic festival. The act of releasing the illuminated boats on the water represents a spiritual cleansing. It is a way of letting go of past grievances, anger, and all negative emotions, allowing them to float away. It is also an act of gratitude to the Naga (mythical serpent) believed to reside in the rivers, and a prayer for good fortune and a prosperous life. The festival beautifully combines spiritual devotion with a stunning visual display, reflecting the gentle and reverent culture of Laos.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Boun Ok Phansa (Festival of Lights)" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
