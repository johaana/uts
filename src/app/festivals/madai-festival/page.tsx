
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, Music } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function MadaiFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-600/10">
                 <Image src="https://i.postimg.cc/0jpmW9HR/madai.jpg" alt="Madai Festival" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-30" data-ai-hint="tribal fair" />
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">Madai Festival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">A Vibrant Tribal Fair of Chhattisgarh</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Music className="w-4 h-4 mr-2" />Music & Dance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Traveling Festival of the Gonds</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Madai Festival is one of the most prominent and vibrant festivals of the Gond tribe, celebrated with great fervor across the state of Chhattisgarh. What makes this festival particularly unique is its traveling nature. The celebrations begin in the Bastar region and move from village to village, creating a chain of festive fairs across different regions from December through March. The festival is a time of immense religious fervor, a grand cultural exchange, and a powerful reaffirmation of community bonds among the various tribal groups of the region.</p>
                                    <p>The festival is inaugurated with a procession of the local deity, carried in a palanquin. Devotees and tribal chiefs from neighboring villages congregate to offer prayers and seek blessings from the goddess for a prosperous year and a bountiful harvest. The event also serves as a massive fair, an important social and economic occasion where people trade local handicrafts, agricultural produce, and other essential goods, making it a bustling hub of activity.</p>
                                </div>
                            </TabsContent>
                            
                             <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Rituals and Offerings</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Saila, Karma, and Panthi</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">The festival serves as a dynamic platform for showcasing a rich variety of folk art forms. Troupes of dancers, adorned in traditional costumes, perform energetic folk dances like the Saila dance, Karma, and Panthi. These performances, accompanied by the rhythmic beats of traditional drums and instruments, narrate stories from mythology, depict scenes from daily life, and express the community's joys and sorrows. The music and dance are not just entertainment; they are a vital, living part of the cultural heritage of the Gond tribe.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Madai Festival" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
