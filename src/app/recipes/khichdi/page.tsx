
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";

export default function KhichdiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Masala Khichdi</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">The ultimate Indian comfort food, Khichdi is a simple, wholesome, and nutritious one-pot meal made with rice and lentils. This version adds a few spices for extra flavor, perfect for Makar Sankranti.</p>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/HkgrQybN/khichadi.webp" alt="Khichdi" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="rice and lentils"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Rice</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Moong dal (or a mix of moong and toor dal)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Onion, chopped (optional)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Tomato, chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Ginger-garlic paste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cumin seeds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>A pinch of Asafoetida (hing)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Ghee</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4-5 cups Water</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Wash the rice and dal together thoroughly. Soak for 30 minutes.</li>
                                <li>Heat ghee in a pressure cooker. Add cumin seeds and asafoetida.</li>
                                <li>When the seeds splutter, add the chopped onion and sauté until translucent.</li>
                                <li>Add ginger-garlic paste and cook for a minute until fragrant.</li>
                                <li>Add the chopped tomatoes and cook until soft.</li>
                                <li>Add the turmeric powder and salt. Mix well.</li>
                                <li>Drain the soaked rice and dal and add it to the cooker. Sauté for 2 minutes.</li>
                                <li>Add 4-5 cups of water and stir well.</li>
                                <li>Close the pressure cooker and cook for 4-5 whistles on a medium flame.</li>
                                <li>Let the pressure release naturally. Open the cooker and mix the khichdi well. It should have a soft, porridge-like consistency.</li>
                                <li>Serve hot with a dollop of ghee, yogurt, and papad.</li>
                            </ol>
                        </div>
                    </div>
                     <ShareButtons title="Khichdi Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
