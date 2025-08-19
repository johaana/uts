
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function MalpuaPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Malpua</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">Soft, fluffy, and syrupy Indian pancakes, often enjoyed during festivals like Holi and Diwali. They are deep-fried and then soaked in sugar syrup for a rich, decadent treat.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/TwLLHn3W/malpua.jpg" alt="Malpua" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="sweet pancake" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup All-purpose flour (maida)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/4 cup Semolina (sooji)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Milk</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 cup Khoya (mawa), grated</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tsp Fennel seeds (saunf)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Ghee for deep frying</li>
                                    <h4 className="font-bold pt-2">For Sugar Syrup:</h4>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Sugar</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 cup Water</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />A few strands of Saffron</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li><strong>Prepare the batter:</strong> In a bowl, whisk together flour, semolina, khoya, and fennel seeds. Gradually add milk to make a smooth, thick, flowing batter without any lumps. Let it rest for 30 minutes.</li>
                                    <li><strong>Prepare the syrup:</strong> While the batter rests, combine sugar, water, and saffron in a saucepan. Bring to a boil and simmer until the syrup reaches a one-string consistency. Keep it warm.</li>
                                    <li><strong>Fry the Malpuas:</strong> Heat ghee in a wide, shallow pan on medium heat. Pour a small ladleful of the batter into the hot ghee to form a small pancake.</li>
                                    <li>Fry on low-medium heat until the edges are golden and crisp. Flip and fry the other side.</li>
                                    <li>Remove the fried malpua from the ghee, drain excess oil, and immediately immerse it in the warm sugar syrup for 1-2 minutes.</li>
                                    <li>Take it out of the syrup and place it on a plate. Garnish with chopped pistachios or rabri.</li>
                                    <li>Serve warm.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <ShareButtons title="Malpua Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
