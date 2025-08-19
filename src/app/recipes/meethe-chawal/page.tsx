
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function MeetheChawalPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Meethe Chawal (Zarda Pulao)</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A fragrant and sweet rice dish, often yellow in color from saffron or turmeric, made during Vasant Panchami and other auspicious occasions in North India.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/fWdSc7PG/Zarda-pulao.jpg" alt="Meethe Chawal" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="sweet rice" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Basmati rice, soaked for 30 minutes</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />3/4 cup Sugar</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />4 tbsp Ghee</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />A generous pinch of Saffron, soaked in warm milk</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/4 cup mixed Nuts (almonds, cashews)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp Raisins</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Whole spices: 2 green cardamoms, 2 cloves, 1-inch cinnamon stick</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 cups Water</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li>In a pot, bring the 2 cups of water to a boil. Add the soaked and drained rice. Cook until the rice is 80% done. Drain and set aside.</li>
                                    <li>In a heavy-bottomed pan, heat the ghee. Fry the nuts until golden, then add raisins and fry until they plump up. Remove from pan and set aside.</li>
                                    <li>In the same ghee, add the whole spices (cardamom, cloves, cinnamon). Sauté for a few seconds until fragrant.</li>
                                    <li>Add the sugar and 1/4 cup of water. Cook until the sugar dissolves to form a syrup.</li>
                                    <li>Add the saffron-infused milk to the syrup.</li>
                                    <li>Gently add the par-cooked rice to the pan. Mix very gently so as not to break the grains.</li>
                                    <li>Cover the pan and cook on a very low flame ('dum') for 10-15 minutes, until the rice has absorbed all the syrup and is fully cooked.</li>
                                    <li>Garnish with the fried nuts and raisins before serving.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <ShareButtons title="Meethe Chawal Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
