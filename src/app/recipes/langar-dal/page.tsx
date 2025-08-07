'use client';
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";

export default function LangarDalPage() {
    return (
        <RecipeCardLayout recipeName="Langarwali Dal">
            <RecipeHeader>
                <h1 className="font-headline text-4xl mb-4">Langarwali Dal</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <p className="text-lg text-muted-foreground">A simple, nutritious, and soul-satisfying dal served at Gurdwaras. It's made with a mix of lentils and is cooked without much fuss, yet tastes incredibly delicious.</p>
                    </div>
                        <div className="md:w-1/3">
                        <Image src="https://i.postimg.cc/d0qQ49TY/Langar-Wali-Dal.jpg" alt="Langarwali Dal" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="lentil curry"/>
                    </div>
                </div>
            </RecipeHeader>
            <RecipeBody>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Urad dal (split black gram)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Chana dal (split Bengal gram)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Onion, finely chopped</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 Tomatoes, chopped</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ginger-garlic paste</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Turmeric powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Red chili powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Garam masala</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp Ghee or oil</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Salt to taste</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Fresh coriander for garnish</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li>Wash and soak both dals for at least 30 minutes.</li>
                            <li>In a pressure cooker, add the soaked dals, 4 cups of water, turmeric, and salt. Cook for 4-5 whistles until the dals are soft and mushy.</li>
                            <li>In a separate pan, heat ghee or oil. Add the chopped onions and sauté until golden brown.</li>
                            <li>Add the ginger-garlic paste and cook for a minute.</li>
                            <li>Add the chopped tomatoes and cook until they turn soft and pulpy.</li>
                            <li>Add the red chili powder and garam masala. Cook the masala for 2-3 minutes until oil separates.</li>
                            <li>Pour this tempering over the cooked dal. Mix well.</li>
                            <li>Simmer the dal for 5-10 minutes on low heat to allow the flavors to blend.</li>
                            <li>Garnish with fresh coriander leaves and serve hot with roti or rice.</li>
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}
