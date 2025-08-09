
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote, CheckCircle } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function HolikaDahanPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-600/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/qBzWPvvf/holika-dahan.webp" alt="Holika Dahan" layout="fill" objectFit="cover" data-ai-hint="bonfire festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-red-900 drop-shadow-lg">Holika Dahan</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-red-800/90 drop-shadow-md">The Sacred Bonfire of Truth's Victory</p>
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
                                <h2 className="font-headline text-3xl font-bold mb-4">The Legend of Prahlada and Holika</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Holika Dahan, also known as 'Choti Holi', is a profoundly significant ritual observed on the eve of the vibrant festival of Holi. It is a celebration centered around a sacred bonfire, symbolizing the ultimate and inevitable triumph of good over evil, light over darkness, and truth over falsehood. The ritual is deeply rooted in the ancient legend of the demon king Hiranyakashipu, his devout son Prahlada, and his malevolent sister, Holika.</p>
                                    <p>Hiranyakashipu, through intense penance, had earned a boon that made him virtually indestructible. Blinded by this power, he grew arrogant and demanded that everyone in his kingdom worship him as a god. However, his own son, Prahlada, was an unwavering devotee of Lord Vishnu. Enraged by this defiance, Hiranyakashipu made several attempts to kill his son, all of which failed due to Vishnu's divine protection. As a final, sinister plot, he enlisted his sister Holika, who had a special boon that made her immune to fire. She was tasked with sitting on a blazing pyre with Prahlada in her lap. But as the fire roared, the boon failed to protect Holika due to her evil intentions, and she was consumed by the flames, while Prahlada, chanting Vishnu's name, emerged completely unharmed. The bonfire of Holika Dahan commemorates this very event.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Bonfire Ritual</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>Weeks before the festival, people start collecting wood and other combustible materials for the bonfire in community spaces, parks, or open grounds. On the eve of Holi, a pyre is meticulously constructed with an effigy of Holika placed on top.</p>
                                   <p>After sunset, a puja (worship) is performed, and then the pyre is lit. People gather around the fire, singing traditional folk songs and dancing. They perform 'parikrama' (circumambulation) of the burning pyre, offering prayers for the destruction of their inner evils and for the well-being of their families. Offerings of grains, coconut, and popcorn are made to Agni, the fire god. The heat from the bonfire is also believed to kill bacteria in the air, marking the end of winter and the beginning of the healthy spring season.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Purification and New Beginnings</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Burning Away the Impurities</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Holika Dahan is a powerful symbol of purification. The fire represents the cleansing of all past evils, negativity, and impurities. It signifies burning away resentments, hatred, and anxieties, allowing one to start afresh. It serves as a potent reminder that faith and devotion can overcome any form of tyranny and that truth and righteousness will always prevail in the end. The morning after the Dahan, people joyfully welcome the festival of colors, smearing the ashes on their foreheads as a mark of purification before immersing themselves in the vibrant celebration of Holi.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Holika Dahan" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
