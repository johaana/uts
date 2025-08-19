
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function GuruGobindSinghJayantiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-orange-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/3x9jQJr3/Guru-Gobind-Singh-jayanti.jpg" alt="Guru Gobind Singh" layout="fill" objectFit="cover" data-ai-hint="sikh guru" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-orange-900 drop-shadow-lg">Guru Gobind Singh Jayanti</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-orange-800/90 drop-shadow-md">Celebrating the Tenth Sikh Guru</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="legacy" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Legacy</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Warrior, Poet, and Philosopher</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Guru Gobind Singh Jayanti celebrates the birth of the tenth Sikh Guru, a revered spiritual master, warrior, poet, and philosopher. He was a pivotal figure in Sikh history, known for his immense courage and his contributions to the faith. He established the Khalsa, a warrior community, and introduced the Five Ks, the articles of faith that Sikhs wear. His life was dedicated to fighting against oppression and upholding justice and equality.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="legacy">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Eternal Guru</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>The Guru Granth Sahib</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">One of Guru Gobind Singh's most significant acts was declaring the Guru Granth Sahib, the holy scripture of Sikhism, as the eternal living Guru for the Sikhs. Celebrations on his Jayanti include prayer meetings, processions (Nagar Kirtan), and the singing of devotional hymns (kirtan) in Gurdwaras. His teachings on bravery, compassion, and devotion continue to inspire millions.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Guru Gobind Singh Jayanti" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
