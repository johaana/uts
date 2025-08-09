
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function MandoFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-700/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/mktjKkYm/Mando.jpg" alt="Mando Festival" layout="fill" objectFit="cover" data-ai-hint="goan folk dance" />
                </div>
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-green-900 drop-shadow-lg">Mando Festival</h1>
                    <p className="text-xl md:text-2xl mt-4 text-green-800/90 drop-shadow-md">Goa's Musical Heritage</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="music" className="py-2"><Music className="w-4 h-4 mr-2" />The Mando</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Celebration of Goan Song and Dance</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Mando Festival is a vibrant cultural event in Goa that celebrates a unique musical tradition known as the 'Mando'. This festival is a beautiful showcase of Goa's rich, syncretic culture, blending Indian and Western artistic traditions. It is typically held in December or January, bringing together the best Mando troupes from across the state to compete and perform.</p>
                                    <p>The festival aims to preserve and promote this unique Goan art form, which serves as a lyrical and musical narrative of Goan life, love, and history. It's an evening of soulful music, graceful dance, and colorful costumes, offering a nostalgic glimpse into the romantic and aristocratic past of Goa.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="music">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Soul of the Mando</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Lyrical Dance-Song</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The Mando is a unique musical form that originated in the 19th century among the Goan Catholic aristocracy. It is a slow, lyrical song set to a 6/8 time signature, often dealing with themes of love, romance, longing, and social commentary. The music beautifully combines the Indian 'ghumat' (a percussion instrument) and violin. The performance involves a graceful, gliding dance that complements the music's gentle rhythm. Women wear a traditional ceremonial costume called the 'Baju-Tollopp', while men wear formal coats, creating a visually elegant and captivating performance.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Mando Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
