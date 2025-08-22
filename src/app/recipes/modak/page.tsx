
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check, Clock, Users, Flame } from "lucide-react";
import Image from "next/image";

const recipeDetails = {
    name: 'Ukadiche Modak (Steamed Modak)',
    description: "This is the traditional sweet offering to Lord Ganesha during Ganesh Chaturthi. These steamed rice flour dumplings are filled with a sweet mixture of coconut and jaggery.",
    image: 'https://i.postimg.cc/ZYv7DzmT/ukadiche-modak-recipe.jpg',
    hint: 'steamed dumplings',
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: '11 Modaks',
    difficulty: 'Medium',
};

const ingredientsFilling = [
    { item: "1.5 cups Freshly grated coconut" },
    { item: "1 cup Jaggery, powdered" },
    { item: "1/4 tsp Nutmeg powder" },
    { item: "1/2 tsp Cardamom powder" }
];

const ingredientsShell = [
    { item: "1 cup Rice flour" },
    { item: "1.5 cups Water" },
    { item: "1 tsp Ghee" }
];

const instructions = [
    "Prepare the filling: In a pan, mix coconut and jaggery. Cook on low heat until the jaggery melts and the mixture thickens. Add nutmeg and cardamom powder. Let it cool.",
    "Prepare the outer shell: In a pot, bring water and ghee to a boil. Add the rice flour and mix quickly to form a lump-free dough. Cover and let it cook in the steam for 2-3 minutes.",
    "Transfer the dough to a plate. While still hot, knead it into a soft, smooth dough. Use a little ghee on your palms to prevent sticking.",
    "Shape the modaks: Take a small portion of dough, flatten it into a small disc. Place the filling in the center.",
    "Pinch the edges to create pleats and bring them together at the top to form a pointed, conical shape. You can also use modak moulds.",
    "Steam the modaks: Place the modaks in a steamer (lined with a banana leaf or greased). Steam for 10-12 minutes.",
    "Serve hot with a dollop of ghee."
];

export default function ModakPage() {
    return (
        <RecipeCardLayout recipeName={recipeDetails.name}>
            <RecipeHeader>
                 <div className="relative h-64 md:h-96">
                    <Image src={recipeDetails.image} alt={recipeDetails.name} layout="fill" objectFit="cover" className="object-center" data-ai-hint={recipeDetails.hint}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 md:p-10">
                        <h1 className="font-headline text-4xl md:text-6xl text-white font-bold drop-shadow-lg">{recipeDetails.name}</h1>
                    </div>
                </div>
                <div className="p-6 md:p-10">
                    <p className="text-lg text-muted-foreground max-w-3xl">{recipeDetails.description}</p>
                     <div className="flex gap-4 md:gap-8 mt-6 border-t pt-6">
                        <div className="flex items-center gap-2">
                            <Clock className="w-6 h-6 text-accent"/>
                            <div>
                                <p className="text-xs text-muted-foreground">Prep Time</p>
                                <p className="font-bold">{recipeDetails.prepTime}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-6 h-6 text-accent"/>
                            <div>
                                <p className="text-xs text-muted-foreground">Cook Time</p>
                                <p className="font-bold">{recipeDetails.cookTime}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-6 h-6 text-accent"/>
                            <div>
                                <p className="text-xs text-muted-foreground">Servings</p>
                                <p className="font-bold">{recipeDetails.servings}</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-2">
                            <Flame className="w-6 h-6 text-accent"/>
                            <div>
                                <p className="text-xs text-muted-foreground">Difficulty</p>
                                <p className="font-bold">{recipeDetails.difficulty}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </RecipeHeader>
            <RecipeBody recipeName={recipeDetails.name}>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <h4 className="font-bold mb-2">For the filling:</h4>
                        <ul className="space-y-2 mb-4">
                             {ingredientsFilling.map((ing, i) => (
                                <li key={i} className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>{ing.item}</li>
                            ))}
                        </ul>
                        <h4 className="font-bold mb-2">For the outer shell:</h4>
                        <ul className="space-y-2">
                             {ingredientsShell.map((ing, i) => (
                                <li key={i} className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>{ing.item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                             {instructions.map((step, i) => (
                                <li key={i}><strong>{step.split(':')[0]}:</strong>{step.split(':')[1]}</li>
                             ))}
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}
