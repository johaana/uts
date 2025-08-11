
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Utensils, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function HalloweenPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/T2pSDM6G/halloween.jpg" alt="Halloween Jack-o'-lanterns" layout="fill" objectFit="cover" data-ai-hint="jack-o-lantern" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-orange-900 drop-shadow-lg">Halloween</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-orange-800/90 drop-shadow-md">A Night of Spooks and Sweets</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">From Ancient Celts to Modern Scares</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Halloween, celebrated annually on October 31st, is a holiday steeped in ancient traditions and modern fun. Its origins trace back to the ancient Celtic festival of Samhain, when people would light bonfires and wear costumes to ward off ghosts. The Celts believed that on the night before the new year, the boundary between the worlds of the living and the dead became blurred.</p>
                                    <p>Over time, as Christianity spread, Pope Gregory III designated November 1st as All Saints' Day, and the evening before became known as All Hallows' Eve, and later, Halloween. Today, it has evolved into a secular, community-based event characterized by costumes, trick-or-treating, and festive gatherings.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Costumes, Candy, and Carved Pumpkins</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Key Halloween traditions include **trick-or-treating**, where children in costumes go from house to house asking for candy. **Carving pumpkins** into jack-o'-lanterns is another iconic activity, with their spooky faces lit from within to scare away evil spirits. **Costume parties** are popular among adults and children alike, with themes ranging from spooky to funny. Haunted houses, scary movie marathons, and telling ghost stories are also common ways to celebrate this fun-filled, spooky night.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of Community and Imagination</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Facing the Unknown with Fun</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">While its ancient roots are tied to spirits and the afterlife, modern Halloween is primarily about community and creativity. It's a day that allows people to step out of their everyday identities and embrace their imagination. The act of trick-or-treating strengthens neighborhood bonds, and the playful engagement with spooky themes provides a safe way to confront and have fun with our fears. It's a unique holiday that blends history, folklore, and modern fun into a single night of delightful frights.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Halloween" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
