
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function ShigmoFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/T24CgjxF/Shigmo2.png" alt="Shigmo Festival" layout="fill" objectFit="cover" data-ai-hint="goa parade" />
                </div>
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-yellow-900 drop-shadow-lg">Shigmo</h1>
                    <p className="text-xl md:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">Goa's Vibrant Spring Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Music className="w-4 h-4 mr-2" />Parades and Dances</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">Goa's Version of Holi</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Shigmo, also known as Shigmotsav, is the vibrant and energetic spring festival of Goa, celebrated with immense fervor by the Hindu community. It's Goa's spectacular version of Holi, a grand celebration that marks the arrival of spring and the farewell to winter. The festival is a colorful and musical extravaganza that spans over two weeks, culminating in grand parades in major cities. It's a time for Goans to honor the local deities, celebrate the harvest, and welcome the season of new life.</p>
                                    <p>Shigmo is a festival of the masses, deeply rooted in the rural and folk traditions of Goa. It's a time when the entire community comes together, setting aside their daily chores to immerse themselves in dance, music, and joyous celebration, turning the streets into a canvas of color and sound.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Spectacle of Floats and Folk Art</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Grand Parades and Folk Dances</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The highlight of Shigmo is the grand float parade. These parades feature large, elaborate floats depicting scenes from Hindu mythology, especially from the Ramayana and Mahabharata. They are accompanied by troupes of performers in vibrant costumes, showcasing traditional Goan folk dances like the Ghode Modni (a warrior dance with horse puppets), Fugdi, and Rommatamel. The air is filled with the energetic beats of traditional instruments like the dhol, tasha, and cymbals. Dressed in colorful attire, people also play with 'gulal' (colored powder), adding to the festive and joyous atmosphere of this unique Goan celebration.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Shigmo Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
