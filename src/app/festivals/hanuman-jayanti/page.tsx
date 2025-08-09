
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function HanumanJayantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/9fCpCJPR/hanuman-jayanti3.jpg" alt="Lord Hanuman" layout="fill" objectFit="cover" data-ai-hint="hanuman idol" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-orange-900 drop-shadow-lg">Hanuman Jayanti</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-orange-800/90 drop-shadow-md">Celebrating the Birth of the Mighty Ape-God</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Observances</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Embodiment of Devotion</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Hanuman Jayanti is a significant Hindu festival that celebrates the birth of Lord Hanuman, the mighty and virtuous ape-god who is a central figure in the epic Ramayana. Observed on the full moon day (Purnima) of the Chaitra month, this day is dedicated to honoring the god who is the ultimate embodiment of 'Bhakti' (devotion), selfless service, strength, and humility. Hanuman is revered as the 'Param Bhakt' (foremost devotee) of Lord Rama, and his life was a testament to his unwavering loyalty and boundless love for his chosen deity.</p>
                                    <p>Born to the wind-god Vayu and Anjana, Hanuman was blessed with extraordinary powers, including the ability to change his form at will and fly. The tales of his heroic deeds in the Ramayana—from leaping across the ocean to Lanka to find Sita, to carrying an entire mountain to save Lakshmana's life—are a source of immense inspiration. Hanuman Jayanti is a day for devotees to reflect on these qualities and seek his blessings for courage to overcome obstacles and the strength to remain steadfast on their spiritual path.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Day of Prayer and Strength</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>On Hanuman Jayanti, devotees flock to temples dedicated to Lord Hanuman to offer special prayers and pujas. Many observe a fast and read the 'Hanuman Chalisa', a forty-verse prayer that praises his valor, strength, and devotion. The idols of Hanuman are anointed with vermilion ('sindoor') and oil, symbolizing his immense strength and energy. In some places, processions are organized where people dressed as Hanuman showcase feats of strength. The day is filled with the continuous chanting of the Ramayana and devotional hymns, creating a powerful spiritual atmosphere. Offering sweets, especially ladoos, is a common practice, as it is believed to be his favorite food.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Ideal Devotee</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Symbol of Selfless Service</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Hanuman represents the ideal devotee who surrenders his ego completely at the feet of the divine. His life teaches that true strength lies not in physical power alone, but in humility, unwavering faith, and selfless service. Worshipping him is believed to instill courage, remove fear, and protect against all evil forces. He is the 'Sankat Mochan'—the remover of all troubles—and his celebration is a reminder that with pure devotion, one can achieve anything.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Hanuman Jayanti" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
