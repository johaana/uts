
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function SabudanaKhichdiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Sabudana Khichdi</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A popular Indian dish made with soaked tapioca pearls (sabudana), it's a favorite choice for fasting days (vrat) during festivals like Navratri and Maha Shivaratri.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/3wRdZZ1y/sabudana-khichdi.jpg" alt="Sabudana Khichdi" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="tapioca pearl dish" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Sabudana (tapioca pearls)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 cup Peanuts, roasted and coarsely crushed</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 medium Potatoes, boiled and cubed</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2-3 Green chilies, chopped</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tsp Cumin seeds</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp Ghee or oil</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tbsp Lemon juice</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Sendha namak (rock salt) to taste</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Fresh coriander for garnish</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li>Wash the sabudana and soak it in just enough water to cover it for 4-5 hours or overnight. After soaking, each pearl should be soft and separate.</li>
                                    <li>Drain any excess water from the sabudana. Add the crushed peanuts and salt, and mix gently.</li>
                                    <li>Heat ghee or oil in a pan. Add cumin seeds. When they splutter, add the chopped green chilies.</li>
                                    <li>Add the boiled potato cubes and sauté for 2-3 minutes.</li>
                                    <li>Add the sabudana mixture to the pan. Mix well and cook on medium-low heat for 5-7 minutes, stirring gently, until the sabudana pearls turn translucent.</li>
                                    <li>Turn off the heat. Add lemon juice and fresh coriander. Mix well.</li>
                                    <li>Serve hot.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                     <ShareButtons title="Sabudana Khichdi Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
