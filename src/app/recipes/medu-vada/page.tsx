
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function MeduVadaPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Medu Vada</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A popular South Indian fritter, Medu Vada is a crispy, fluffy, and savory donut-shaped snack, often served as part of the Pongal feast with sambar and chutney.</p>
                        </div>
                        <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/tJ3RkTB3/Onam.png" alt="Medu Vada" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="savory fritter"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Urad dal (split black gram)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Onion, finely chopped (optional)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2-3 Green chilies, finely chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 inch Ginger, finely chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 sprig Curry leaves, chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 tsp Black peppercorns, crushed</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Oil for deep frying</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Wash and soak the urad dal for at least 3-4 hours.</li>
                                <li>Drain the water completely. Grind the dal to a smooth, fluffy batter in a grinder, adding very little water (1-2 tablespoons at a time) as needed. The batter should be thick.</li>
                                <li>Transfer the batter to a bowl. Beat it for a few minutes with your hand or a whisk to make it lighter and airy.</li>
                                <li>Add the chopped onion, green chilies, ginger, curry leaves, crushed peppercorns, and salt. Mix well.</li>
                                <li>Heat oil in a kadai for deep frying. Wet your palms with water. Take a small portion of the batter, place it on your palm, and flatten it slightly. Make a hole in the center with your thumb.</li>
                                <li>Gently slide the vada into the hot oil. Fry on medium heat until golden brown and crisp on both sides.</li>
                                <li>Drain on paper towels and serve hot with sambar and coconut chutney.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
