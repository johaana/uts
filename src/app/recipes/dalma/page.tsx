import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function DalmaPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Dalma</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A traditional and nutritious dish from Odisha, Dalma is a lentil and vegetable stew that is a key part of the Mahaprasad at the Jagannath Temple.</p>
                        </div>
                        <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/CBghYTxn/Eid2.jpg" alt="Dalma" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="lentil stew"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Toor dal (split pigeon peas)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Mixed vegetables (pumpkin, raw banana, papaya, eggplant), cubed</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Tomato, chopped</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                                <h4 className="font-bold pt-2">For Tempering (Ghee Tadka):</h4>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Ghee</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cumin seeds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 Dry red chilies</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 inch Ginger, grated</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Grated coconut</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Wash the dal and vegetables.</li>
                                <li>In a pressure cooker, add the dal, mixed vegetables, tomato, turmeric powder, salt, and 4 cups of water.</li>
                                <li>Pressure cook for 3-4 whistles or until the dal and vegetables are cooked and soft.</li>
                                <li>Once the pressure releases, open the cooker and mash the contents slightly.</li>
                                <li>For the tempering, heat ghee in a small pan. Add cumin seeds and dry red chilies.</li>
                                <li>When the seeds splutter, add the grated ginger and sauté for a few seconds.</li>
                                <li>Pour this tempering over the cooked dalma.</li>
                                <li>Add the grated coconut and mix well. Simmer for 2-3 minutes.</li>
                                <li>Serve hot with rice.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
