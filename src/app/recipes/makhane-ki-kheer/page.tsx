
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";

export default function MakhaneKiKheerPage() {
    return (
        <RecipeCardLayout recipeName="Makhane ki Kheer">
            <RecipeHeader>
                <h1 className="font-headline text-4xl mb-4">Makhane ki Kheer</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <p className="text-lg text-muted-foreground">A creamy and delicious pudding made with fox nuts (makhana), this kheer is a healthy and popular dessert for fasting days like Navratri and Maha Shivaratri.</p>
                    </div>
                    <div className="md:w-1/3">
                        <Image src="https://i.postimg.cc/bwLZb5xc/Makhane-ki-kheer.jpg" alt="Makhane ki Kheer" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="fox nut pudding" />
                    </div>
                </div>
            </RecipeHeader>
            <RecipeBody>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 cups Makhana (fox nuts)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 litre Full-fat milk</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 cup Sugar (or to taste)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tbsp Ghee</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />A few strands of Saffron</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 tsp Cardamom powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp chopped Nuts (almonds, pistachios) for garnish</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li>Heat ghee in a pan and roast the makhana on low heat until they are crisp. This takes about 8-10 minutes. Let them cool.</li>
                            <li>Coarsely grind about 3/4 of the roasted makhana, leaving the rest whole.</li>
                            <li>In a heavy-bottomed pot, bring the milk to a boil.</li>
                            <li>Add the ground and whole makhana to the milk. Cook on a medium-low flame, stirring frequently, until the milk thickens and the makhana softens.</li>
                            <li>Add sugar, saffron strands, and cardamom powder. Stir until the sugar dissolves completely.</li>
                            <li>Simmer for another 5-10 minutes until the kheer reaches your desired consistency.</li>
                            <li>Garnish with chopped nuts and serve warm or chilled.</li>
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}
