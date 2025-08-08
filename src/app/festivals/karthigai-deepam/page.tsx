
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

export default function KarthigaiDeepamPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-amber-500/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-amber-900 drop-shadow-lg">Karthigai Deepam</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-amber-800/90 drop-shadow-md">The Tamil Festival of Lights</p>
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
                                        <Image src="https://i.postimg.cc/Y26HGH30/karthigai-deepam.jpg" alt="Karthigai Deepam Lamps" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="diya lamps"/>
                                    </div>
                                    <div className="md:order-1 md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Luminous Tradition</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Karthigai Deepam is an ancient and significant festival of lights celebrated by Tamil Hindus. It falls in the Tamil month of Karthigai when the moon is in conjunction with the Karthigai star (Pleiades). The festival is a beautiful spectacle where millions of oil lamps (agal vilakkus) are lit in homes, on streets, and in temples, creating a divine and mesmerizing glow that dispels the darkness.</p>
                                            <p>The festival is particularly famous in Tiruvannamalai, where a massive fire lamp, known as the Mahadeepam, is lit atop the Annamalai hill, visible for miles around. It is a symbol of the cosmic light of Lord Shiva and is believed to bring immense blessings and prosperity.</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Lighting the Lamps</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The primary tradition of Karthigai Deepam is the lighting of earthen oil lamps. Homes are thoroughly cleaned, and beautiful Kolams (rangoli) are drawn at the entrance. In the evening, every house is adorned with rows of glowing lamps. Special delicacies like Pori Urundai (puffed rice balls) and Appam (sweet pancakes) are prepared and offered to the deities.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Triumph of Light</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Symbolism of the Lamp</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival celebrates the victory of light over darkness and good over evil. The lit lamp is a powerful symbol of knowledge, prosperity, and the divine light that dispels ignorance and negativity. It is a time for spiritual renewal and for inviting auspicious energies into the home.</p>
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
