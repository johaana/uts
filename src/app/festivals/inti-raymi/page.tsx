
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function IntiRaymiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/Y2yDxX37/Inti-Raymi-Festival-of-the-Sun.jpg" alt="Inti Raymi Festival" layout="fill" objectFit="cover" data-ai-hint="inca festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">Inti Raymi</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">The Incan Festival of the Sun</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Ceremony</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Journey Back to the Incan Empire</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Inti Raymi, which means "Festival of the Sun" in the Quechua language, is a spectacular traditional festival of the ancient Inca Empire, celebrated in honor of the sun god, Inti. It was the most important of the four great festivals celebrated in Cusco, the historic capital of the Incas. The festival takes place on June 24th, coinciding with the winter solstice in the Southern Hemisphere. This was a crucial time for the agrarian Incan society, as they prayed to the sun god to return and ensure a good harvest for the coming year.</p>
                                    <p>After being banned by the Spanish conquistadors, the festival was revived in the 20th century as a grand theatrical reenactment. Today, it is the second-largest festival in South America, drawing thousands of visitors to Cusco, Peru, to witness this vibrant and powerful connection to a rich, ancient past.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Grand Reenactment</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Processions, Music, and Rituals</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The modern Inti Raymi is a magnificent all-day event. It begins at the Qorikancha (the ancient Temple of the Sun) in Cusco, where the Sapa Inca (the Incan emperor) gives a traditional invocation. From there, a grand procession of hundreds of actors in vibrant, colorful period costumes moves through the city streets to the ancient fortress of Sacsayhuamán. Here, on a massive stage, the main ceremony unfolds with traditional music, dances, and speeches in Quechua. The climax of the ceremony is the symbolic sacrifice of a llama (now entirely simulated) to appease the sun god and predict the future of the empire. It's a breathtaking and immersive experience that brings the glory of the Incan civilization to life.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Inti Raymi" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
