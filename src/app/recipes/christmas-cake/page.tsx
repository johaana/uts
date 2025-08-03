
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ChristmasCakePage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Traditional Christmas Cake</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A classic, non-alcoholic fruit cake that's perfect for Christmas celebrations. This recipe is packed with dried fruits, nuts, and warm spices, and is a joy to make and share.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/kDmD9PDV/christmas-cake.jpg" alt="Christmas Cake" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="fruit cake"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Mixed dried fruits</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Orange juice (for soaking)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1.5 cups All-purpose flour</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Baking powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Salt</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 tsp Mixed spice powder (cinnamon, nutmeg, cloves)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Unsalted butter, softened</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Brown sugar</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3 Large eggs</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup chopped Walnuts or pecans</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li><strong>Soak the fruits:</strong> A day before, soak the mixed dried fruits in orange juice.</li>
                                <li><strong>Prepare the oven:</strong> Preheat your oven to 160°C (320°F). Grease and line an 8-inch round cake pan.</li>
                                <li><strong>Mix dry ingredients:</strong> In a bowl, whisk together the flour, baking powder, salt, and mixed spice powder.</li>
                                <li><strong>Cream butter and sugar:</strong> In a large bowl, beat the softened butter and brown sugar until light and fluffy.</li>
                                <li><strong>Add eggs:</strong> Beat in the eggs one at a time, mixing well after each addition.</li>
                                <li><strong>Combine mixtures:</strong> Gently fold the flour mixture into the butter mixture. Do not overmix.</li>
                                <li><strong>Add fruits and nuts:</strong> Fold in the juice-soaked fruits and the chopped nuts.</li>
                                <li><strong>Bake:</strong> Pour the batter into the prepared cake pan and level the top. Bake for about 1.5 to 2 hours, or until a skewer inserted into the center comes out clean.</li>
                                <li><strong>Cool:</strong> Let the cake cool in the pan for 30 minutes before transferring it to a wire rack to cool completely.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
