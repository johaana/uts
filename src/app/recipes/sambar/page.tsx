
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function SambarPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Sambar</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A staple in South Indian cuisine, Sambar is a flavorful and tangy lentil-based vegetable stew, an essential component of the Onam Sadya.</p>
                        </div>
                        <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/Th86vnRv/Sambar-Recipe.jpg" alt="Sambar" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="lentil vegetable stew"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Toor dal (split pigeon peas)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Mixed vegetables, cubed (drumstick, pumpkin, carrots, brinjal)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 small Onion, quartered</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Tomato, chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Small lemon-sized Tamarind ball, soaked in water</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2-3 tbsp Sambar powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                <h4 className="font-bold pt-2">For Tempering:</h4>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Oil</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Mustard seeds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 Dry red chilies</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 sprig Curry leaves</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>A pinch of Asafoetida (hing)</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Pressure cook the toor dal with turmeric powder and a few drops of oil until mushy. Whisk it well and keep aside.</li>
                                <li>In a pot, cook the mixed vegetables and onion with some water and salt until they are tender.</li>
                                <li>Add the chopped tomato and cook for a few more minutes.</li>
                                <li>Extract the juice from the soaked tamarind and add it to the pot.</li>
                                <li>Add the sambar powder and let it boil for 5-7 minutes for the raw smell to go away.</li>
                                <li>Now add the cooked dal to the pot. Mix well and adjust the consistency by adding water if needed. Simmer for 10 minutes.</li>
                                <li>For the tempering, heat oil in a small pan. Add mustard seeds. When they splutter, add dry red chilies, curry leaves, and asafoetida.</li>
                                <li>Pour the tempering over the sambar and mix. Garnish with coriander leaves and serve hot.</li>
                            </ol>
                        </div>
                    </div>
                    <ShareButtons title="Sambar Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
