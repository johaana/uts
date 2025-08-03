import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Utensils, Sparkles, Music } from "lucide-react";
import Image from "next/image";

export default function GoaCarnivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-purple-600/10">
                 <Image src="https://i.postimg.cc/k4WjTjj3/hemis-tsechu.jpg" alt="Goa Carnival" layout="fill" objectFit="cover" className="absolute opacity-20" data-ai-hint="goa carnival" />
                <div className="relative text-center text-primary-foreground z-10">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white shadow-lg">Goa Carnival</h1>
                    <p className="text-xl md:text-2xl mt-4 text-white/90 shadow-md">The Ultimate Street Party</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <Tabs defaultValue="overview">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-6 h-auto">
                                <TabsTrigger value="overview" className="py-2"><BookOpen className="w-4 h-4 mr-2" />Overview</TabsTrigger>
                                <TabsTrigger value="traditions" className="py-2"><Sparkles className="w-4 h-4 mr-2" />Highlights</TabsTrigger>
                                <TabsTrigger value="music" className="py-2"><Music className="w-4 h-4 mr-2" />Music & Dance</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview">
                                <h2 className="font-headline text-3xl font-bold mb-4">A Portuguese Legacy</h2>
                                <div className="space-y-4 text-foreground/80 prose max-w-none">
                                    <p>The Goa Carnival is a vibrant, four-day festival held in Goa just before the start of Lent, a period of fasting and penance in Christianity. The carnival is a legacy of the Portuguese colonial rule and is one of the few carnivals celebrated in Asia. It's a time of exuberant celebration, with colorful parades, floats, music, and dancing on the streets of major Goan cities like Panjim, Mapusa, and Margao.</p>
                                    <p>The festival is presided over by the mythical King Momo, who declares the decree of "Kha, Piye, Aani Majja Kar" (Eat, Drink, and Make Merry). The carnival is a true reflection of Goa's unique culture, a blend of Indian and Western traditions, and is a time for people of all faiths to come together and celebrate.</p>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="traditions">
                                <h2 className="font-headline text-3xl font-bold mb-4">What to Experience</h2>
                                <ul className="space-y-4 pl-4">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Colorful Parades</h4>
                                            <p className="text-foreground/80">The highlight of the carnival is the grand parade with elaborate floats, dancers in vibrant costumes, and live music bands.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Red and Black Dance</h4>
                                            <p className="text-foreground/80">The carnival traditionally concludes with the Red and Black dance, where participants dress in red and black attire and dance to the tunes of live bands.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-6 h-6 mr-3 mt-1 text-primary shrink-0"/>
                                        <div>
                                            <h4 className="font-bold">Goan Cuisine</h4>
                                            <p className="text-foreground/80">Food stalls line the streets, offering a chance to savor delicious Goan delicacies and the local spirit, Feni.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TabsContent>

                             <TabsContent value="music">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Sound of Celebration</h2>
                                <div className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Live Music and Dance</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-foreground/80">Music is the heartbeat of the Goa Carnival. From traditional Goan folk music to modern rock and pop, live bands perform throughout the festival, creating an electrifying atmosphere. People dance on the streets, letting go of their inhibitions in a celebration of life and joy.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
