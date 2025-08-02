import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function AlooGobiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Aloo Gobi</CardTitle>
                     <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                           <p className="text-lg text-muted-foreground">A classic and comforting North Indian dish made with potatoes (aloo) and cauliflower (gobi). It's a simple, staple dish often served in Langars.</p>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/mDn7NM2s/Sweets1.jpg" alt="Aloo Gobi" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="potato cauliflower"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 medium Cauliflower, cut into florets</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 large Potatoes, peeled and cubed</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Onion, finely chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Tomato, chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ginger-garlic paste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cumin seeds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Coriander powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Garam masala</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Oil</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Fresh coriander for garnish</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Heat oil in a pan. Add cumin seeds and let them splutter.</li>
                                <li>Add the chopped onions and sauté until golden brown.</li>
                                <li>Add ginger-garlic paste and cook for another minute until the raw smell disappears.</li>
                                <li>Add the chopped tomatoes and cook until they become soft.</li>
                                <li>Add all the spice powders: turmeric, coriander powder, and salt. Mix well.</li>
                                <li>Add the potato cubes and cauliflower florets. Stir well to coat them with the spices.</li>
                                <li>Cover the pan and cook on a low to medium flame for 15-20 minutes, or until the vegetables are tender. Stir occasionally to prevent sticking.</li>
                                <li>Once cooked, sprinkle garam masala on top and mix gently.</li>
                                <li>Garnish with fresh coriander leaves and serve hot with rotis or rice.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
