
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function HolaMohallaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-blue-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/XvpjNQWp/hola-mohalla3.jpg" alt="Hola Mohalla" layout="fill" objectFit="cover" data-ai-hint="sikh warriors" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 drop-shadow-lg">Hola Mohalla</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-blue-800/90 drop-shadow-md">A Festival of Martial Arts and Mock Battles</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Celebrations</TabsTrigger>
                                <TabsTrigger value="significance" className="py-2"><MessageSquareQuote className="w-4 h-4 mr-2" />Significance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Birth of Hola Mohalla</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>Hola Mohalla is a significant Sikh festival, celebrated with great enthusiasm, particularly in Anandpur Sahib, Punjab. Established in 1701 by the tenth Sikh Guru, Guru Gobind Singh, it was created as an occasion for Sikhs to showcase their martial skills and military preparedness. The name itself signifies this, with 'Hola' being a masculine form of Holi, and 'Mohalla' meaning a military parade.</p>
                                    <p>Unlike the playful color-throwing of Holi, Hola Mohalla is a day for demonstrating courage, strength, and discipline through mock battles, Gatka (Sikh martial arts), and horse-riding stunts. It was Guru Gobind Singh's way of instilling a warrior spirit and a sense of unity among the Khalsa (the collective body of initiated Sikhs) to defend their faith against persecution.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Spectacle of Sikh Valor</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The festival is a multi-day event, with the main attraction being the grand procession led by the Nihang Singhs, an ancient order of Sikh warriors known for their distinctive blue robes and large turbans. They perform thrilling displays of swordsmanship, archery, and tent-pegging. The air is filled with religious hymns, poetry recitals, and the spirit of 'seva' (selfless service), with massive 'langars' (community kitchens) serving free meals to thousands of visitors. It's a vibrant and powerful display of Sikh heritage and community spirit.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">Community and Faith</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Chardi Kala - Eternal Optimism</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Hola Mohalla is more than just a martial display; it is a deep spiritual experience. It reinforces the Sikh ideal of 'Chardi Kala', maintaining a state of eternal optimism and high spirits, even in the face of adversity. The festival is a powerful reminder of the Sikh community's history of courage, their commitment to protecting the innocent, and their unwavering faith.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Hola Mohalla" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    