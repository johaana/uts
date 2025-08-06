
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";

export default function MadaiFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-600/10">
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-yellow-900 drop-shadow-lg">Madai Festival</h1>
                    <p className="text-xl md:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">A Vibrant Tribal Fair of Chhattisgarh</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Traveling Festival of the Gonds</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Madai Festival is one of the most prominent and vibrant festivals of the Gond tribe in the central Indian state of Chhattisgarh. What makes it unique is its traveling nature; the festival moves from one village to another, creating a chain of celebrations across the region from December to March. It is a time of great religious fervor, community bonding, and cultural exchange among various tribal groups.</p>
                                    <p>The festival begins with a procession of the local deity. Devotees and tribal chiefs from surrounding villages gather, offering prayers and seeking blessings for their prosperity and well-being. It's a grand fair where people trade handicrafts, agricultural produce, and other goods, making it an important social and economic event for the community.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Rituals and Offerings</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The main ritual involves the worship of the presiding deity. A goat is often sacrificed to the goddess, and the celebrations begin. The atmosphere is filled with the sounds of folk music, the sight of colorful traditional attire, and the energy of folk dances. The fair that accompanies the festival is a major attraction, bustling with activity and showcasing the rich craft traditions of the region.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="music">
                                <h2 className="font-headline text-3xl font-bold mb-4">Folk Performances</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Saila, Karma, and Panthi</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival is a platform for showcasing vibrant folk dances and music. Groups of dancers perform traditional forms like the Saila dance, Karma, and Panthi, narrating stories from mythology and daily life. The rhythmic beats and energetic movements are a feast for the senses.</p>
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
