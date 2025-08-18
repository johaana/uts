
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function NyepiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/tJnNfQZz/nyepi.jpg" alt="Nyepi Festival" layout="fill" objectFit="cover" data-ai-hint="ogoh-ogoh statue" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 drop-shadow-lg">The Day the World Stops</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-800/90 drop-shadow-md">Bali's Sacred Nyepi, The Festival of Silence</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />The Story</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />The Ritual</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />The Meaning</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Symphony of Silence</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Imagine a day when an entire island falls silent. The airport closes, the internet is shut off, traffic vanishes, and streets empty. This is not a scene from a post-apocalyptic film; it is Nyepi, the Balinese Hindu New Year, and one of the most unique and profound cultural observances in the world. Celebrated on the first day of the Balinese Saka calendar, Nyepi is a day of absolute silence, fasting, and meditation. It is a day for self-reflection, a time to cleanse the soul and the island itself of the past year's misdeeds and negativity, and to begin the new year with purity and peace.</p>
                                    <p>The philosophy behind this radical silence is beautiful and strategic. The day before Nyepi is a noisy, chaotic affair meant to lure out all the evil spirits and demons that plague the land. On Nyepi day itself, the island goes into hiding. By observing complete silence, the Balinese hope to trick these malevolent spirits into believing that the island is deserted, prompting them to leave and not return for another year. It's a spiritual reset button on a grand, island-wide scale.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Roar Before the Quiet</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The eve of Nyepi, known as 'Tawur Kesanga', is anything but silent. It is a day for the 'Ngrupuk' parade, where villages across Bali showcase their 'Ogoh-ogoh'—giant, monstrous effigies made from bamboo and paper-mâché. These grotesque figures, representing evil spirits and demons, are paraded through the streets with loud gamelan music and fire torches. The procession is a joyous, cathartic exorcism, culminating in the burning of the Ogoh-ogoh in a large bonfire, a symbolic act of purifying the environment of all spiritual pollutants.</p>
                                   <p>When the sun rises on Nyepi, the silence descends. For 24 hours, four key prohibitions are observed: no fire or light ('amati geni'), no working ('amati karya'), no travelling ('amati lelunganan'), and no revelry or entertainment ('amati lelanguan'). The only people seen outdoors are the 'Pecalang', traditional security men who patrol the streets to ensure the rules are respected. It is a day of profound peace, where the only sounds are those of nature, and the night sky, free from light pollution, reveals a breathtaking canopy of stars.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Necessary Pause</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Finding Balance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Nyepi is a beautiful expression of the Balinese Hindu philosophy of 'Tri Hita Karana'—the three causes of well-being, which are harmony with God, harmony among people, and harmony with nature. By observing silence and introspection, individuals strengthen their relationship with the divine. By staying home with family, community bonds are reinforced. And by giving the entire island a 24-hour break from human activity, nature is allowed to breathe and rejuvenate. In our modern, noisy world, Nyepi is a powerful reminder of the importance of silence, balance, and hitting the reset button.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="The Day the World Stops: Bali's Sacred Nyepi" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
