
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function JanmashtamiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary shadow-lg">Janmashtami</h1>
                    <p className="text-xl md:text-2xl mt-4 text-primary/90 shadow-md">Celebrating the Birth of Lord Krishna</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Traditions</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">The Divine Birth</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Janmashtami is a Hindu festival celebrating the birth of Lord Krishna, the eighth avatar of the god Vishnu. It is observed on the eighth day (Ashtami) of the Krishna Paksha (dark fortnight) in the month of Shraavana or Bhadrapad. The festival is celebrated with great devotion, with fasting, night vigils, and the singing of bhajans (devotional songs).</p>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3">
                                        <Image src="https://i.postimg.cc/02VhD2Jk/janmashtami.jpg" alt="Lord Krishna" width={400} height={400} className="rounded-lg shadow-lg" data-ai-hint="krishna idol"/>
                                    </div>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Dahi Handi and Ras Leela</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Celebrations</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">A major tradition in Maharashtra is 'Dahi Handi', where young men form human pyramids to break an earthen pot filled with curd, hung high in the air. This reenacts Krishna's playful and mischievous childhood. In other parts of India, dance-dramas called 'Ras Leela' are performed, depicting scenes from Krishna's life.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Janmashtami" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    