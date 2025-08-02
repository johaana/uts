import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function BiryaniPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Chicken Biryani</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A royal and aromatic one-pot dish, Biryani is a celebration in itself. Layers of fragrant basmati rice and succulent, spiced meat cooked to perfection.</p>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/nzsC4n82/Eid2.jpg" alt="Chicken Biryani" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="chicken biryani"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <h4 className="font-bold mb-2">For the Chicken Marinade:</h4>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>500g Chicken, bone-in</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Yogurt</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Ginger-garlic paste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tsp Red chili powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tsp Biryani masala powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                            </ul>
                            <h4 className="font-bold mb-2">For the Rice & Assembly:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Basmati rice, soaked</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4 tbsp Ghee or Oil</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 Onions, thinly sliced and fried</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup chopped Mint & Coriander leaves</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Pinch of Saffron soaked in milk</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Whole spices (bay leaf, cinnamon, cloves, cardamom)</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li><strong>Marinate the chicken:</strong> Combine all ingredients for the marinade with the chicken pieces. Let it marinate for at least 1 hour, or overnight in the refrigerator.</li>
                                <li><strong>Cook the rice:</strong> Par-cook the soaked basmati rice in boiling water with whole spices and salt until it is 70% cooked. Drain thoroughly.</li>
                                <li><strong>Cook the chicken:</strong> In a heavy-bottomed pot, heat ghee/oil and cook the marinated chicken until it is almost cooked through.</li>
                                <li><strong>Layer the Biryani:</strong> Top the cooked chicken with a layer of fried onions, mint, and coriander leaves. Spread the par-cooked rice over it evenly.</li>
                                <li>Drizzle the saffron-infused milk and some ghee on top of the rice.</li>
                                <li><strong>Dum Cooking:</strong> Cover the pot with a tight-fitting lid. You can seal the edges with dough to trap the steam. Cook on a very low flame (dum) for 20-25 minutes.</li>
                                <li>Let it rest for 10 minutes before opening. Gently fluff the rice and mix the layers before serving. Serve hot with raita.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
