
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function RamNavamiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Ram Navami</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Celebrating the Birth of Lord Rama</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Prince of Ayodhya</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Ram Navami is a Hindu festival that celebrates the birthday of Lord Rama, the seventh avatar of the god Vishnu. He is the central figure of the Hindu epic Ramayana and is revered as the epitome of righteousness, morality, and dharma. The festival is celebrated on the ninth day of the bright half of the Chaitra month.</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/Vvqmzy7S/ram-navami.webp" alt="Lord Rama" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="lord rama"/>
                                    </div>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Victory of Good over Evil</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Story of Dharma</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival celebrates the victory of good over evil and the establishment of dharma. Devotees observe fasts, visit temples dedicated to Lord Rama, and listen to recitations of the Ramayana. The celebrations in Ayodhya, the birthplace of Rama, are particularly grand.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Ram Navami" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    