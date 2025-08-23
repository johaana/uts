
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function YiPengPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-300/20">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image src="https://i.postimg.cc/XJs7rMdt/Yi-Peng-Lantern-Festival-Thailand.webp" alt="Yi Peng Lantern Festival" layout="fill" objectFit="cover" data-ai-hint="sky lanterns" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Yi Peng Lantern Festival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">Thailand's Festival of Lights</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Ritual</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Sky Full of Stars</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Yi Peng Lantern Festival is a breathtakingly beautiful festival of lights celebrated in Northern Thailand, with the most famous celebrations taking place in Chiang Mai. It is a Lanna (northern Thai) festival that coincides with Loi Krathong, which is celebrated nationwide. The festival falls on the full moon of the twelfth month of the Thai lunar calendar (usually in November).</p>
                                    <p>The most iconic image of Yi Peng is the sight of thousands of illuminated paper lanterns, known as 'khom loi', being released into the night sky. This creates a magical, almost surreal spectacle that looks like a river of stars flowing towards the heavens. The festival is a time of joy, beauty, and spiritual reflection.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Making Merit</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Beyond the lantern release, Yi Peng is a time for making merit in the Buddhist tradition. People decorate their homes, temples, and streets with colorful lanterns. There are also parades, traditional music and dance performances, and, of course, the Loi Krathong ritual of floating decorated baskets ('krathongs') on rivers and canals.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Letting Go of Misfortune</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Symbolic Release</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Releasing the sky lantern is a deeply symbolic act. It represents letting go of all the misfortunes, worries, and negativity from the past year. As the lantern floats away, it is believed to carry these troubles with it, allowing for a fresh, new beginning. It is also a way to pay respect to the Buddha and to make a wish for good fortune in the coming year. The festival is a beautiful expression of Thai culture's gentle spirituality and its reverence for light and beauty.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Yi Peng Lantern Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
