
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function KhichuriPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Bhoger Khichuri</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">The heart of any Durga Puja celebration, this Bengali-style khichdi is a no-onion, no-garlic recipe made with roasted moong dal and gobindobhog rice, offered as 'bhog' to the Goddess.</p>
                        </div>
                        <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/GmnJ5kP3/nilendrajyoti-halder-v32-Ac-NJ4-Q-Q-unsplash.jpg" alt="Bhoger Khichuri" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="bengali khichdi"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Gobindobhog rice (or any short-grain rice)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Moong dal (split yellow gram)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 Potatoes, cubed</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Cauliflower florets</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Green peas</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Ghee</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ginger paste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Whole spices: bay leaf, cinnamon, cardamom, cloves</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cumin seeds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 Dry red chilies</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt and Sugar to taste</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Dry roast the moong dal until it turns aromatic and slightly golden. Keep aside. Wash rice and roasted dal together.</li>
                                <li>Heat ghee in a heavy-bottomed pan. Fry the potato cubes and cauliflower florets until golden brown. Set aside.</li>
                                <li>In the same ghee, add cumin seeds, dry red chilies, and whole spices. Let them splutter.</li>
                                <li>Add the ginger paste and sauté for a minute.</li>
                                <li>Add the washed rice and dal mixture. Sauté for 2-3 minutes.</li>
                                <li>Add turmeric powder, salt, and sugar. Pour in about 5-6 cups of hot water.</li>
                                <li>Bring to a boil, then add the fried vegetables and green peas.</li>
                                <li>Cover and cook on low heat until the rice, dal, and vegetables are cooked completely. The consistency should be mushy and porridge-like.</li>
                                <li>Finish with a spoonful of ghee on top before serving.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
