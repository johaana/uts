import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function LabraPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Labra (Bengali Mixed Veg)</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A quintessential part of Durga Puja 'bhog', Labra is a medley of various vegetables cooked together with Bengali five-spice (panch phoron). It's a delightful semi-dry curry.</p>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/GmnJ5kP3/nilendrajyoti-halder-v32-Ac-NJ4-Q-Q-unsplash.jpg" alt="Labra" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="mixed vegetable curry"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3 cups Mixed vegetables, cubed (pumpkin, potato, eggplant, radish, raw banana)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Mustard oil</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Panch phoron</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 Dry red chilies</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Bay leaf</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ginger paste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cumin powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Sugar</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ghee</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Heat mustard oil in a kadai or pan. Add panch phoron, dry red chilies, and bay leaf. Let them crackle.</li>
                                <li>Add the cubed vegetables and sauté for 5-7 minutes.</li>
                                <li>Add the ginger paste, turmeric powder, cumin powder, salt, and sugar. Mix everything well.</li>
                                <li>Cover the pan and cook on a low flame until the vegetables are tender. Stir occasionally. Sprinkle a little water if needed to prevent sticking.</li>
                                <li>The vegetables should be soft but hold their shape. The curry should be semi-dry.</li>
                                <li>Turn off the heat and drizzle ghee on top.</li>
                                <li>Mix gently and let it stand for a few minutes before serving. Labra is traditionally served with Khichuri.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
