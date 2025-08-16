
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kukur Tihar | Nepal's Day of the Dog Festival | Utsavs",
  description: "Explore Kukur Tihar, the beautiful Nepalese festival where dogs are worshipped and honored with garlands, tilaks, and delicious food for their loyalty and friendship.",
  openGraph: {
    title: "Kukur Tihar | Nepal's Day of the Dog Festival | Utsavs",
    description: "Explore Kukur Tihar, the beautiful Nepalese festival where dogs are worshipped and honored with garlands, tilaks, and delicious food for their loyalty and friendship.",
    images: [{ url: "https://i.postimg.cc/7Y8hn4Sm/kukurtihar.webp", width: 1200, height: 630, alt: "Dog being worshipped during Kukur Tihar" }],
  },
};

export default function KukurTiharPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-600/10">
                 <Image src="https://i.postimg.cc/L4ZhP5gJ/kukur-tihar1.avif" alt="Kukur Tihar" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-30" data-ai-hint="dog worship" />
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">Kukur Tihar</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">Nepal's Beautiful "Day of the Dogs"</p>
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
                                 <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="md:order-2 md:w-1/3">
                                        <Image src="https://i.postimg.cc/7Y8hn4Sm/kukurtihar.webp" alt="Dog with marigold garland" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="dog with garland"/>
                                    </div>
                                    <div className="md:order-1 md:w-2/3">
                                        <h2 className="font-headline text-3xl font-bold mb-4">A Heartwarming Celebration of Loyalty</h2>
                                        <div className="space-y-4 text-foreground/80 prose max-w-none">
                                            <p>Kukur Tihar is a uniquely heartwarming festival celebrated in Nepal on the second day of the five-day Tihar (or Diwali) festival. This special day is dedicated entirely to dogs, honoring them for their loyalty, friendship, and unwavering companionship. The festival is a beautiful expression of the deep bond between humans and canines, recognizing their important role as guardians, friends, and helpers. On this day, every dog, whether a cherished pet or a humble street dog, is treated with immense love and respect, reflecting a profound cultural belief in the sanctity of this relationship.</p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">Garlands, Tilaks, and Treats</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                   <p>The rituals of Kukur Tihar are simple yet deeply meaningful. In the morning, people place a 'tika' or 'tilak', a red powder mark, on the forehead of dogs. This tika is a symbol of sacredness and blessing. The dogs are then adorned with beautiful marigold garlands, known as 'malla', which signify respect and honor. Finally, they are offered delicious food, including meat, milk, eggs, and high-quality dog food. The offerings are a way of acknowledging their importance and showing gratitude. The sight of dogs, from pets to strays, proudly wearing their garlands is a key feature of the day's celebrations.</p>
                                </div>
                            </TabsContent>

                             <TabsContent value="significance">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Messengers of Yama</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Mythological Role</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">In Hindu mythology, dogs hold a sacred position. They are believed to be the messengers of Yama, the god of death, and also the guardians of the gates to the afterlife. It is believed that by pleasing the dogs, one can appease Yama and ensure a safe passage. The festival is a beautiful reminder to be kind to all creatures and to cherish the loyalty and unconditional love that dogs offer so freely.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <ShareButtons title="Kukur Tihar" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    