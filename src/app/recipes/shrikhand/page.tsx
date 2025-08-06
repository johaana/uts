import { RecipeBody, RecipeCardLayout, RecipeHeader } from "@/components/RecipeCardLayout";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ShrikhandPage() {
    return (
        <RecipeCardLayout>
            <RecipeHeader>
                <h1 className="font-headline text-4xl mb-4">Shrikhand</h1>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                        <p className="text-lg text-muted-foreground">A creamy and delicious dessert from Western India, Shrikhand is made from strained yogurt (hung curd) and flavored with saffron, cardamom, and nuts. It's a Gudi Padwa favorite.</p>
                    </div>
                    <div className="md:w-1/3">
                        <Image src="https://i.postimg.cc/BbQqPD2J/shrikhand.webp" alt="Shrikhand" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="yogurt dessert" />
                    </div>
                </div>
            </RecipeHeader>
            <RecipeBody>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />4 cups Plain full-fat yogurt</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />3/4 cup Powdered sugar (or to taste)</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />A generous pinch of Saffron strands, soaked in 2 tbsp warm milk</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/2 tsp Cardamom powder</li>
                            <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />2 tbsp chopped Pistachios and Almonds for garnish</li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                        <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                            <li><strong>Make Hung Curd:</strong> Place the yogurt in a muslin or cheesecloth. Tie it up and hang it over a bowl for at least 4-5 hours (or overnight in the refrigerator) to drain all the whey. You will be left with thick, creamy hung curd.</li>
                            <li>Transfer the hung curd to a bowl.</li>
                            <li>Add the powdered sugar, saffron-infused milk, and cardamom powder.</li>
                            <li>Whisk everything together until the mixture is smooth, creamy, and free of lumps. You can use a wire whisk or an electric beater on low speed.</li>
                            <li>Chill the Shrikhand for at least an hour before serving.</li>
                            <li>Garnish with chopped pistachios and almonds.</li>
                        </ol>
                    </div>
                </div>
            </RecipeBody>
        </RecipeCardLayout>
    );
}
