
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function PinniPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Atta Pinni</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A nutrient-dense and delicious sweet from Punjab, Pinni is a traditional winter delight made with whole wheat flour, ghee, jaggery, and nuts. It's a perfect treat for Lohri.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/q77CyPfw/Pinni1.webp" alt="Pinni" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="wheat sweet" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 cups Whole wheat flour (atta)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Ghee</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1.5 cups Jaggery (gur), powdered</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 cup Mixed nuts (almonds, cashews, walnuts), chopped</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/4 cup Edible gum (gond), optional</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tsp Cardamom powder</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li>If using edible gum (gond), heat 2 tbsp of ghee and fry the gond crystals until they puff up. Crush them into a powder and set aside.</li>
                                    <li>In a heavy-bottomed pan, heat the remaining ghee. Add the whole wheat flour.</li>
                                    <li>Roast the flour on a low to medium flame, stirring continuously, until it turns golden brown and emits a rich, nutty aroma. This can take about 25-30 minutes.</li>
                                    <li>Turn off the heat. To the roasted flour, add the powdered jaggery, chopped nuts, cardamom powder, and crushed gond (if using).</li>
                                    <li>Mix everything very well while the flour is still hot. The jaggery will melt and combine with the mixture.</li>
                                    <li>Let the mixture cool down just enough so you can handle it.</li>
                                    <li>While it is still warm, take small portions and press them firmly into round balls (pinnis or ladoos).</li>
                                    <li>Let the pinnis cool completely. They can be stored in an airtight container for several weeks.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <ShareButtons title="Atta Pinni Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
