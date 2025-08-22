
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check, Clock, Users, Soup, Flame } from "lucide-react";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const recipeDetails = {
    name: 'Gajar Ka Halwa',
    description: "A classic North Indian dessert, this rich and decadent carrot pudding is a staple during winter and festive occasions like Diwali.",
    image: 'https://i.postimg.cc/FHNTRfLR/gajar-halwa.jpg',
    hint: 'carrot pudding',
    prepTime: '20 mins',
    cookTime: '1 hr 15 mins',
    servings: '6',
    difficulty: 'Medium',
};

const ingredients = [
    { item: '1 kg Carrots, grated' },
    { item: '1 litre Full-fat milk' },
    { item: '200g Sugar (or to taste)' },
    { item: '4-5 Green cardamoms, powdered' },
    { item: '1/2 cup Ghee (clarified butter)' },
    { item: '1/2 cup Khoya (mawa), crumbled' },
    { item: 'Handful of mixed nuts (almonds, cashews, pistachios), chopped' },
    { item: '2 tbsp Raisins' },
];

const instructions = [
    "In a heavy-bottomed pan, combine the grated carrots and milk. Bring to a boil and then simmer on medium heat, stirring occasionally.",
    "Cook until all the milk has evaporated and the carrots are soft. This might take 45-60 minutes.",
    "Add the ghee to the pan and sauté the carrots for 10-15 minutes until they change color slightly and release a fragrant aroma.",
    "Add sugar and mix well. The sugar will melt and the mixture will become liquidy again. Continue to cook until the mixture thickens.",
    "Add the crumbled khoya, cardamom powder, and most of the chopped nuts and raisins. Mix well and cook for another 5-7 minutes until the halwa comes together.",
    "Garnish with the remaining nuts and serve hot."
];

export default function GajarKaHalwaPage() {
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
                        <ul className="space-y-2">
                            {ingredients.map((ing, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <Check className="text-primary w-5 h-5"/>{ing.item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                             {instructions.map((step, i) => (
                                <li key={i}>{step}</li>
                             ))}
                        </ol>
                        <div className="not-prose my-10">
                            <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Our Recommended Ghee</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                                <ProductCard product={products.vedicGhee} />
                                <ProductCard product={products.daburGhee} />
                            </div>
                        </div>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}
