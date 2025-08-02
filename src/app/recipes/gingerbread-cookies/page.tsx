import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function GingerbreadCookiesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Gingerbread Cookies</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">The quintessential Christmas treat! These spiced cookies, often cut into festive shapes, are perfect for decorating and sharing.</p>
                        </div>
                        <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/ncKMYdWy/christmas-2.jpg" alt="Gingerbread Cookies" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="christmas cookies"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3 cups All-purpose flour</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1.5 tsp Ground ginger</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1.5 tsp Ground cinnamon</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 tsp Ground cloves</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/4 tsp Salt</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>3/4 cup Unsalted butter, softened</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Brown sugar, packed</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 cup Molasses</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 Large egg</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Royal icing for decorating (optional)</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>In a medium bowl, whisk together the flour, ginger, cinnamon, cloves, and salt.</li>
                                <li>In a large bowl, beat the butter and brown sugar with an electric mixer until light and fluffy.</li>
                                <li>Beat in the molasses and egg until well combined.</li>
                                <li>Gradually add the dry ingredients to the wet ingredients and mix on low speed until just combined.</li>
                                <li>Divide the dough in half, flatten into discs, wrap in plastic wrap, and refrigerate for at least 2 hours.</li>
                                <li>Preheat oven to 175°C (350°F). Line baking sheets with parchment paper.</li>
                                <li>On a lightly floured surface, roll out one disc of dough to about 1/4-inch thickness. Cut into desired shapes with cookie cutters.</li>
                                <li>Place cookies on the prepared baking sheets. Bake for 8-10 minutes, or until the edges are firm.</li>
                                <li>Let cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely. Decorate with royal icing once cooled.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
