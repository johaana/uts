import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function VenPongalPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Ven Pongal</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A savory and comforting South Indian dish made from rice and moong dal, tempered with ghee, cumin, peppercorns, and cashews. It's a popular breakfast and a key dish for Pongal festival.</p>
                        </div>
                        <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/tJ3RkTB3/Onam.png" alt="Ven Pongal" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="savory rice pudding"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Raw rice</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Moong dal (split yellow gram)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4 cups Water</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                <h4 className="font-bold pt-2">For Tempering:</h4>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3-4 tbsp Ghee</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cumin seeds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Black peppercorns, whole or crushed</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 inch Ginger, finely chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 sprig Curry leaves</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>10-12 Cashews</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>A pinch of Asafoetida (hing)</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Dry roast the moong dal until aromatic.</li>
                                <li>In a pressure cooker, combine the roasted moong dal, rice, water, and salt. Cook for 4-5 whistles until everything is soft and mushy.</li>
                                <li>Once the pressure releases, open the cooker and mash the mixture well with a ladle.</li>
                                <li>For the tempering, heat ghee in a small pan. Add cumin seeds and peppercorns.</li>
                                <li>Once the cumin sizzles, add the cashews and fry until golden.</li>
                                <li>Add the chopped ginger and curry leaves. Sauté for a few seconds. Finally, add the asafoetida.</li>
                                <li>Pour this entire tempering over the cooked pongal. Mix everything very well.</li>
                                <li>Serve hot with coconut chutney and sambar.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
