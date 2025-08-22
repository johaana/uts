
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check, Clock, Users, Flame } from "lucide-react";
import Image from "next/image";

const recipeDetails = {
    name: 'Ras Malai',
    description: "A royal Bengali dessert, Ras Malai consists of soft, spongy cheese discs soaked in a fragrant, saffron-infused milk syrup. A true delicacy for festivals like Holi and Diwali.",
    image: 'https://i.postimg.cc/d1pWt42P/Rasmalai.webp',
    hint: 'milk sweet',
    prepTime: '30 mins',
    cookTime: '1 hr',
    servings: '8-10 pieces',
    difficulty: 'Advanced',
};

const ingredientsChenna = [
    { item: "1 litre Full-fat milk" },
    { item: "2-3 tbsp Lemon juice or vinegar" },
    { item: "1 cup Sugar" },
    { item: "4 cups Water" }
];

const ingredientsRabri = [
    { item: "1 litre Full-fat milk" },
    { item: "1/2 cup Sugar (or to taste)" },
    { item: "A pinch of Saffron strands" },
    { item: "1/2 tsp Cardamom powder" },
    { item: "2 tbsp Pistachios, slivered" }
];

const instructions = [
    "Prepare Chenna: Boil 1 litre of milk. Add lemon juice to curdle it. Strain the curdled milk through a muslin cloth. Squeeze out excess water.",
    "Knead the collected chenna for 8-10 minutes until smooth. Make small, flat discs.",
    "In a wide pan, boil sugar and water to make a thin syrup. Gently drop the chenna discs into the boiling syrup. Cover and cook for 15-20 minutes until they double in size.",
    "Prepare Rabri: While the discs cook, boil the other litre of milk in a heavy-bottomed pan. Simmer until it reduces to about half its quantity, stirring frequently.",
    "Add sugar, saffron, and cardamom powder to the reduced milk. Stir until sugar dissolves.",
    "Assemble Ras Malai: Gently squeeze the sugar syrup from the cooked chenna discs and transfer them to the warm rabri.",
    "Let them soak for at least 4-5 hours, or preferably overnight in the refrigerator. Garnish with slivered pistachios and serve chilled."
];

export default function RasMalaiPage() {
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
                        <h4 className="font-bold mb-2">For the Chenna (Cheese discs):</h4>
                        <ul className="space-y-2 mb-4">
                            {ingredientsChenna.map((ing, i) => (
                                <li key={i} className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>{ing.item}</li>
                            ))}
                        </ul>
                        <h4 className="font-bold mb-2">For the Rabri (Milk Syrup):</h4>
                        <ul className="space-y-2">
                             {ingredientsRabri.map((ing, i) => (
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
