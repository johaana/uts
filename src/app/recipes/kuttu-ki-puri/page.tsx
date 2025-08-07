
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";

export default function KuttuKiPuriPage() {
    return (
        <RecipeCardLayout recipeName="Kuttu ki Puri">
            <RecipeHeader>
                <h1 className="font-headline text-4xl mb-4">Kuttu ki Puri</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <p className="text-lg text-muted-foreground">A popular fasting (vrat) food, these puris are made from buckwheat flour and are perfect for festivals like Navratri and Maha Shivaratri.</p>
                    </div>
                    <div className="md:w-1/3">
                        <Image src="https://i.postimg.cc/RV76Chq0/kuttu-ki-puri.jpg" alt="Kuttu ki Puri" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="buckwheat bread" />
                    </div>
                </div>
            </RecipeHeader>
            <RecipeBody>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Kuttu ka atta (buckwheat flour)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 medium Potatoes, boiled and mashed</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 tsp Sendha namak (rock salt)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 tsp Black pepper powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Warm water, if needed</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Ghee or oil for deep frying</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li>In a bowl, combine the buckwheat flour, mashed potatoes, rock salt, and pepper powder.</li>
                            <li>Mix and knead into a smooth dough. The moisture from the potatoes should be enough, but add a little warm water if the dough is too dry.</li>
                            <li>Divide the dough into small, equal-sized balls.</li>
                            <li>Grease your palms and a rolling surface with a little ghee. Roll out each ball into a small puri (disc).</li>
                            <li>Heat ghee or oil in a kadai for deep frying.</li>
                            <li>Gently slide a puri into the hot oil. Press it down gently with a slotted spoon, and it will puff up.</li>
                            <li>Fry until golden brown on both sides.</li>
                            <li>Drain on paper towels and serve hot with aloo ki sabzi or yogurt.</li>
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}
