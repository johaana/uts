import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ThekuaPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-0">
                     <Image src="https://placehold.co/1200x600.png" alt="Thekua" width={1200} height={600} className="w-full h-auto object-cover rounded-t-lg" data-ai-hint="wheat cookie" />
                </CardHeader>
                <CardContent className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Thekua</CardTitle>
                    <p className="text-lg text-muted-foreground mb-6">A revered prasad (offering) from Bihar, Thekua is a crispy, cookie-like sweet made especially for the Chhath Puja festival.</p>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Whole wheat flour</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3/4 cup Jaggery, grated or powdered</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Water</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Grated dry coconut (optional)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Fennel seeds (saunf)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>4 tbsp Ghee, melted</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Ghee or oil for deep frying</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>Dissolve the jaggery in 1/2 cup of warm water to make a syrup. Strain it to remove impurities.</li>
                                <li>In a large bowl, mix the whole wheat flour, grated coconut, fennel seeds, and 4 tbsp of melted ghee.</li>
                                <li>Crumble the mixture with your fingertips. It should resemble coarse breadcrumbs.</li>
                                <li>Gradually add the jaggery syrup to the flour mixture and knead into a stiff dough. Do not over-knead.</li>
                                <li>Take small portions of the dough and shape them into small, flat discs. You can press them onto a special wooden mould ('saancha') for a traditional design or use a fork to create patterns.</li>
                                <li>Heat ghee or oil in a kadai (wok) on low to medium heat.</li>
                                <li>Gently slide the thekuas into the hot ghee and fry on a low flame until they are golden brown and crisp on both sides. This needs to be done slowly to ensure they cook through.</li>
                                <li>Drain on paper towels and let them cool completely before storing in an airtight container.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
