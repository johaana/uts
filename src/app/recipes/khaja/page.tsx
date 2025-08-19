
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function KhajaPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Khaja</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A crispy, layered pastry from Odisha, famously offered as part of the 'Chappan Bhog' to Lord Jagannath during the Rath Yatra festival.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/nLw9k3pJ/khaja1.webp" alt="Khaja" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="layered pastry" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 cups All-purpose flour (maida)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/4 cup Ghee</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />A pinch of Salt</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Water, as needed</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Ghee for deep frying</li>
                                    <h4 className="font-bold pt-2">For Sugar Syrup:</h4>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 cups Sugar</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Water</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li><strong>Prepare the dough:</strong> In a bowl, mix flour, salt, and 1/4 cup of ghee. Rub until crumbly. Add water gradually to knead a semi-stiff dough. Cover and rest for 30 minutes.</li>
                                    <li><strong>Shape the Khaja:</strong> Divide the dough into equal portions. Roll each portion into a very thin chapati.</li>
                                    <li>Take one chapati, brush it with ghee, and sprinkle some flour. Place another chapati on top and repeat the process until you have a stack of 5-6 chapatis.</li>
                                    <li>Roll the stack tightly into a log. Cut the log into 1-inch thick slices.</li>
                                    <li>Take each slice and gently roll it out into a small oval or circle, keeping the layers visible.</li>
                                    <li><strong>Fry the Khaja:</strong> Heat ghee in a kadai on low heat. Deep fry the khajas on a very low flame until they are golden brown and crisp. This slow frying is key to making them crispy.</li>
                                    <li><strong>Prepare the syrup:</strong> Boil sugar and water until it reaches a one-string consistency.</li>
                                    <li>Dip the fried khajas into the warm sugar syrup for a minute, coating them well. Remove and let them cool on a wire rack.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <ShareButtons title="Khaja Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
