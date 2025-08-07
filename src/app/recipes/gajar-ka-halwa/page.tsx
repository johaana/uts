
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function GajarKaHalwaPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Gajar Ka Halwa</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A classic North Indian dessert, this rich and decadent carrot pudding is a staple during winter and festive occasions like Diwali.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/FHNTRfLR/gajar-halwa.jpg" alt="Gajar Ka Halwa" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="carrot pudding" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 kg Carrots, grated</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 litre Full-fat milk</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />200g Sugar (or to taste)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />4-5 Green cardamoms, powdered</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 cup Ghee (clarified butter)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 cup Khoya (mawa), crumbled</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Handful of mixed nuts (almonds, cashews, pistachios), chopped</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp Raisins</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li>In a heavy-bottomed pan, combine the grated carrots and milk. Bring to a boil and then simmer on medium heat, stirring occasionally.</li>
                                    <li>Cook until all the milk has evaporated and the carrots are soft. This might take 45-60 minutes.</li>
                                    <li>Add the ghee to the pan and sauté the carrots for 10-15 minutes until they change color slightly and release a fragrant aroma.</li>
                                    <li>Add sugar and mix well. The sugar will melt and the mixture will become liquidy again. Continue to cook until the mixture thickens.</li>
                                    <li>Add the crumbled khoya, cardamom powder, and most of the chopped nuts and raisins. Mix well and cook for another 5-7 minutes until the halwa comes together.</li>
                                    <li>Garnish with the remaining nuts and serve hot.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <ShareButtons title="Gajar Ka Halwa Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
