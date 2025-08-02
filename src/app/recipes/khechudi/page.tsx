import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function KhechudiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Khechudi</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">An essential part of the 'Mahaprasad' at Puri's Jagannath Temple, Khechudi (or Khichdi) is a simple, one-pot dish made from rice and lentils, flavored with ghee and light spices.</p>
                        </div>
                        <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/YSpNpMyJ/sudarshan-poojary-FZw-Bem-Sc-Rc0-unsplash.jpg" alt="Khechudi" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="rice lentils"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Rice</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Moong dal (split yellow gram)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 inch Ginger, grated</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4 cups Water</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Ghee</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cumin seeds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Bay leaf</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 Dry red chilies</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Wash the rice and moong dal together until the water runs clear.</li>
                                <li>In a pressure cooker, heat the ghee. Add cumin seeds, bay leaf, and dry red chilies. Sauté for a few seconds.</li>
                                <li>Add the grated ginger and sauté for another minute.</li>
                                <li>Add the washed rice and dal mixture, turmeric powder, and salt. Sauté for 2-3 minutes.</li>
                                <li>Pour in 4 cups of water and mix well.</li>
                                <li>Close the pressure cooker and cook for 4-5 whistles on a medium flame.</li>
                                <li>Let the pressure release naturally. Open the cooker and give it a good mix.</li>
                                <li>The consistency should be soft and porridge-like. Add more hot water if needed to adjust. Serve hot with a dollop of ghee.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
