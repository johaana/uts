import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";

export default function PayasamPage() {
    return (
        <RecipeCardLayout>
            <RecipeHeader>
                <h1 className="font-headline text-4xl mb-4">Semiya Payasam (Vermicelli Kheer)</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <p className="text-lg text-muted-foreground">A classic South Indian dessert, Semiya Payasam is a creamy and aromatic pudding made with roasted vermicelli, milk, and sugar, typically served during Onam and other celebrations.</p>
                    </div>
                    <div className="md:w-1/3">
                        <Image src="https://i.postimg.cc/59n9d7My/payasam.jpg" alt="Semiya Payasam" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="vermicelli pudding" />
                    </div>
                </div>
            </RecipeHeader>
            <RecipeBody>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Vermicelli (semiya)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 litre Full-fat milk</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />3/4 cup Sugar (or to taste)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp Ghee</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />10-12 Cashews</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tbsp Raisins</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 tsp Cardamom powder</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li>Heat 1 tbsp of ghee in a pan. Fry the cashews until golden, then add raisins and fry until they plump up. Remove and set aside.</li>
                            <li>In the same pan, add the remaining ghee and roast the vermicelli on low heat until it turns a nice golden brown. Set aside.</li>
                            <li>In a heavy-bottomed pot, bring the milk to a boil.</li>
                            <li>Add the roasted vermicelli to the boiling milk. Cook on a medium-low flame, stirring occasionally, until the vermicelli is soft and cooked through.</li>
                            <li>Add the sugar and stir until it dissolves completely.</li>
                            <li>Simmer for another 5-7 minutes until the payasam thickens to your desired consistency.</li>
                            <li>Stir in the cardamom powder and the fried cashews and raisins.</li>
                            <li>Serve the payasam warm or chilled.</li>
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}
