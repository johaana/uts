
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check, Clock, Users, Flame } from "lucide-react";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

const recipeDetails = {
    name: 'Puran Poli',
    description: "A quintessential Maharashtrian sweet flatbread, Puran Poli is specially made during festivals like Ganesh Chaturthi and Holi.",
    image: 'https://i.postimg.cc/jj8gBsCj/puranpoli.jpg',
    hint: 'sweet flatbread',
    prepTime: '30 mins',
    cookTime: '45 mins',
    servings: '10-12 Polis',
    difficulty: 'Medium',
};

const ingredientsPuran = [
    { item: "1 cup Chana dal (split Bengal gram)" },
    { item: "1 cup Jaggery, grated" },
    { item: "1 tsp Cardamom powder" },
    { item: "1/2 tsp Nutmeg powder" },
    { item: "1 tbsp Ghee" }
];

const ingredientsPoli = [
    { item: "2 cups Whole wheat flour" },
    { item: "1/4 tsp Turmeric powder" },
    { item: "2 tbsp Oil or Ghee" },
    { item: "Water, as needed" },
    { item: "Ghee for roasting" }
];

const instructions = [
    "Prepare the Puran: Wash and pressure cook the chana dal with 3 cups of water until soft. Drain any excess water.",
    "In a pan, cook the dal and jaggery together until the jaggery melts and the mixture thickens. Stir continuously.",
    "Once thick, add cardamom powder, nutmeg powder, and ghee. Mix well. Let it cool, then grind it to a smooth paste. Your Puran is ready.",
    "Prepare the Poli: In a bowl, mix whole wheat flour, turmeric, and a pinch of salt. Add oil/ghee and enough water to knead a soft, pliable dough. Let it rest for 30 minutes.",
    "Assemble and Cook: Take a small portion of dough, flatten it, and place a ball of the puran filling in the center. Seal the edges and roll it out gently into a thin flatbread (poli).",
    "Heat a tawa (griddle) and cook the poli on both sides with ghee until golden brown spots appear.",
    "Serve hot, generously smeared with more ghee."
];

export default function PuranPoliPage() {
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
                    <div className="prose max-w-none text-lg text-muted-foreground">
                        <p>Puran Poli is not just a dish; it's a taste of pure nostalgia, a golden, paper-thin parcel of festive joy. This classic Maharashtrian delicacy is a sweet flatbread that defines celebration, especially during festivals like Ganesh Chaturthi, Gudi Padwa, and Holi. The magic lies in its perfect contrast: a soft, delicate outer covering made from whole wheat flour, embracing a rich, aromatic filling of cooked chana dal and jaggery, spiced with the warm fragrance of cardamom and nutmeg.</p>
                        <p>The art of making the perfect Puran Poli is a treasured skill in Maharashtrian households. It requires a delicate hand to roll the stuffed dough so thinly that the filling is evenly distributed without tearing the outer layer. When cooked on a griddle with a generous dollop of ghee, the poli puffs up beautifully, turning a delightful golden-brown. Served hot, with even more ghee drizzled on top, it's a melt-in-your-mouth experience that is both comforting and royally indulgent. Each bite is a sweet symphony of flavors and textures, a culinary hug that encapsulates the very essence of home and festivity.</p>
                    </div>
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
                        <h4 className="font-bold mb-2">For the filling (Puran):</h4>
                        <ul className="space-y-2 mb-4">
                            {ingredientsPuran.map((ing, i) => (
                                <li key={i} className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>{ing.item}</li>
                            ))}
                        </ul>
                        <h4 className="font-bold mb-2">For the dough (Poli):</h4>
                        <ul className="space-y-2">
                             {ingredientsPoli.map((ing, i) => (
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
