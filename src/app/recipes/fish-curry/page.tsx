
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function FishCurryPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Assamese Fish Curry (Masor Tenga)</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A signature dish from Assam, Masor Tenga is a light and tangy fish curry, perfect for a comforting meal, especially during Bihu.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/6QJtLFCj/masor-tenga.webp" alt="Assamese Fish Curry" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="fish curry" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />500g Rohu fish, cut into pieces</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 large Tomatoes, pureed</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 medium Potato, cubed (optional)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tbsp Mustard oil</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tsp Panch phoron (five-spice blend)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2-3 Green chilies, slit</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 tsp Turmeric powder</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Salt to taste</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp chopped Coriander leaves</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li>Marinate the fish pieces with a little salt and turmeric powder. Lightly fry them in mustard oil until golden brown. Set aside.</li>
                                    <li>In the same oil, add the panch phoron. Once it crackles, add the green chilies.</li>
                                    <li>If using potatoes, add them now and fry for a few minutes.</li>
                                    <li>Add the tomato puree, turmeric powder, and salt. Cook until the oil starts to separate from the masala.</li>
                                    <li>Add 2 cups of warm water and bring the gravy to a boil.</li>
                                    <li>Gently slide the fried fish pieces into the gravy.</li>
                                    <li>Simmer for 7-10 minutes, or until the fish is cooked through and the gravy has thickened slightly.</li>
                                    <li>Garnish with fresh coriander leaves and serve hot with steamed Joha rice.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <ShareButtons title="Assamese Fish Curry Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
