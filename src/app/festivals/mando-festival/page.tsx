
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
                    <Image src="https://i.postimg.cc/15XsrvgM/mando.jpg" alt="Mando Festival" layout="fill" objectFit="cover" data-ai-hint="goan folk dance" />
                </div>
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-green-900 drop-shadow-lg">Mando Festival</h1>
                    <p className="text-xl md:text-2xl mt-4 text-green-800/90 drop-shadow-md">Celebrating Goa's Soulful Musical Heritage</p>
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
                                    <p>The Mando Festival is a vibrant and elegant cultural event in Goa dedicated to celebrating a unique and soulful musical tradition known as the 'Mando'. This festival is a beautiful showcase of Goa's rich, syncretic history, masterfully blending Indian sensibilities with Western artistic traditions. It is typically held in December or January, bringing together the best Mando troupes from across the state and beyond to compete and perform, preserving this beautiful art form for future generations.</p>
                                    <p>The festival aims to promote and sustain this unique Goan heritage, which serves as a lyrical and musical narrative of Goan life, love, and history. It's an evening of soulful music, graceful dance, and colorful, traditional costumes, offering a nostalgic and romantic glimpse into the aristocratic past of Goa.</p>
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
                                            <p className="text-foreground/80">The Mando is a unique musical form that originated in the 19th century among the Goan Catholic aristocracy, particularly in the salcete region. It is a slow, melancholic, and lyrical song set to a 6/8 time signature, often dealing with themes of love ('mog'), romance, longing, betrayal, and social commentary. The music beautifully combines the Indian 'ghumat' (a traditional percussion instrument made from an earthen pot) with the violin and sometimes guitar, creating a sound that is uniquely Goan. The performance involves a graceful, gliding dance that complements the music's gentle, swaying rhythm. Women wear a traditional, elaborate ceremonial costume called the 'Baju-Tollopp' or 'pano baju', while men are dressed in formal coats, creating a visually elegant and captivating performance that transports the audience to a bygone era.</p>
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
