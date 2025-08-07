
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function HareliFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-700/10">
                 <Image src="https://i.postimg.cc/MZCMpRL4/hareli.png" alt="Hareli Festival" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-30" data-ai-hint="tribal festival" />
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
                                    <p>Hareli, which literally translates to 'greenery' in the local Chhattisgarhi dialect, is a significant and ancient harvest festival celebrated by the farming communities of Chhattisgarh. It is observed on the new moon day (Amavasya) of the Hindu month of Shravan, which typically falls in July or August. The festival marks the beginning of the vibrant monsoon season when the fields are lush and green, and nature is at its most bountiful. It is a day of immense gratitude to the earth and a collective prayer for a bountiful harvest, representing a brief, joyous respite for farmers before the hard work of paddy transplantation begins.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Worship of Farm Tools</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>A unique and central aspect of the Hareli festival is the worship of agricultural implements and cattle. On this day, farmers clean their ploughs, sickles, axes, and other farm tools, and offer prayers to them in a special puja. This ritual symbolizes a deep respect for the instruments that are vital to their livelihood and partnership with the land. Cattle, being an integral part of the agricultural economy, are also bathed, decorated, and worshipped. Another fun and iconic tradition associated with Hareli is the 'Gedi', where children and adults alike enjoy walking on long bamboo stilts. This is not just a playful game but also traditionally served a practical purpose, helping people navigate the muddy village paths during the monsoon season.</p>
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
                                            <p className="text-foreground/80">Hareli is a beautiful and poignant reflection of the deep-rooted, symbiotic connection between the tribal and farming communities of Chhattisgarh and the natural world. It underscores the importance of sustainable agriculture and the philosophy of living in harmony with the environment. The festival is not just a cultural event; it is a powerful annual reminder of the reverence that should be held for the tools, animals, and natural elements that support and sustain human life.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Hareli Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
