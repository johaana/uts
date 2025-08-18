
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function BhagoriaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-pink-500/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/t4gVwFkQ/bhagoria-festival.jpg" alt="Bhagoria Festival" layout="fill" objectFit="cover" data-ai-hint="tribal festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-pink-900 drop-shadow-lg">Love on the Run</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-pink-800/90 drop-shadow-md">The Story of India's Unique Matchmaking Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />The Story</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Heart className="w-4 h-4 mr-2" />The Ritual</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Festival of Courtship</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>In the heart of tribal India, in the districts of Madhya Pradesh, a unique and colorful festival unfolds that turns traditional courtship on its head. This is the Bhagoria festival, a vibrant week-long celebration that is, at its core, a grand matchmaking fair for the Bhil and Bhilala tribes. Held in the week leading up to Holi, Bhagoria is a time for young men and women to choose their life partners in a public, playful, and consensual manner. The word 'Bhagoria' comes from the Hindi word 'bhagna', which means 'to elope'. It is a festival where elopement is not a rebellion, but a celebrated and socially sanctioned tradition.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Red Powder of Consent</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>A Playful Proposal</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">During the festival, a special market, or 'haat', is set up. Young men and women, dressed in their finest traditional attire, roam the fair, eyeing potential partners. When a boy likes a girl, he approaches her and gently applies red 'gulal' (powder) on her face. If the girl feels the same way, she reciprocates by applying gulal on his face. This simple, colorful exchange is a public declaration of mutual consent. Following this, the couple traditionally 'elopes'—they run away together from the fair. This elopement is a formality, and they later return to seek the blessings and formal approval of their families, who then proceed with the wedding rituals. It's a beautiful, joyous, and empowering tradition that celebrates choice and romance in a way that is unique to the cultural fabric of tribal India.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Bhagoria: India's Unique Matchmaking Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
