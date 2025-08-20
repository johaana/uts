
'use client';
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";

export default function GujiyaPage() {
    return (
        <RecipeCardLayout recipeName="Gujiya">
            <RecipeHeader>
                 <div className="relative h-64 md:h-96">
                    <Image src="https://i.postimg.cc/zv9X7ZTt/Gujiya.jpg" alt="Gujiya" layout="fill" objectFit="cover" className="object-center" data-ai-hint="fried dumplings"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-10">
                        <h1 className="font-headline text-4xl md:text-6xl text-white font-bold drop-shadow-lg">Gujiya</h1>
                    </div>
                </div>
                <div className="p-6 md:p-10">
                    <p className="text-lg text-muted-foreground max-w-3xl">A classic sweet for the festival of Holi, Gujiya are crescent-shaped fried pastries filled with a sweet mixture of khoya (milk solids), nuts, and coconut.</p>
                </div>
            </RecipeHeader>
            <RecipeBody recipeName="Gujiya">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <h4 className="font-bold mb-2">For the dough:</h4>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups All-purpose flour (Maida)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Ghee, melted</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Water, as needed</li>
                        </ul>
                        <h4 className="font-bold mb-2">For the filling:</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>200g Khoya (Mawa), crumbled</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Powdered sugar</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup Semolina (Sooji), roasted</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 cup chopped Almonds & Cashews</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tbsp desiccated Coconut</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Cardamom powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Ghee or oil for frying</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li><strong>Prepare the dough:</strong> In a bowl, mix flour and melted ghee. Rub with fingertips until it resembles breadcrumbs. Gradually add water and knead a firm dough. Cover and rest for 30 minutes.</li>
                            <li><strong>Prepare the filling:</strong> Roast the khoya in a pan on low heat until it turns light pink. Let it cool. Mix in sugar, roasted semolina, nuts, coconut, and cardamom powder.</li>
                            <li><strong>Assemble the Gujiya:</strong> Knead the dough again. Roll out small, thin discs. Place a spoonful of filling on one half of the disc.</li>
                            <li>Apply a little water on the edges, fold the other half over and press the edges to seal. You can use a fork to press the edges or pleat them with your fingers. Gujiya moulds can also be used.</li>
                            <li><strong>Fry the Gujiya:</strong> Heat ghee or oil in a kadai on low-medium heat. Slide in a few gujiyas at a time and fry on a low flame until they are golden and crisp on both sides.</li>
                            <li>Drain on an absorbent paper. Let them cool completely before storing. They can also be dipped in sugar syrup if desired.</li>
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}

    