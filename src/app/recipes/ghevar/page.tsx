
'use client';
import { ShareButtons } from "@/components/ShareButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function GhevarPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Ghevar</CardTitle>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                            <p className="text-lg text-muted-foreground">A disc-shaped, porous sweet from Rajasthan, made from a flour batter and soaked in sugar syrup. It's a specialty of the Teej festival.</p>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/Zn69JZ3b/ghevar.jpg" alt="Ghevar" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="rajasthani sweet" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="border-b-2 border-dashed border-border pb-6 mb-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1">
                                <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup All-purpose flour (maida)</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1/4 cup Ghee, melted</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />3-4 Ice cubes</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />4 cups Chilled water</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />Ghee for deep frying</li>
                                    <h4 className="font-bold pt-2">For Sugar Syrup:</h4>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1.5 cups Sugar</li>
                                    <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5" />1 cup Water</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                                <ol className="space-y-4 list-decimal list-inside text-foreground/80 prose">
                                    <li><strong>Prepare the batter:</strong> In a large bowl, take the melted ghee and rub it with ice cubes until it becomes creamy and solid.</li>
                                    <li>Add the flour and crumble it into the ghee. Gradually add the chilled water and whisk to make a thin, smooth, lump-free batter.</li>
                                    <li><strong>Fry the Ghevar:</strong> Heat ghee for deep frying in a deep, cylindrical pan. The ghee should be very hot.</li>
                                    <li>Pour a ladleful of batter from a height in a thin stream into the center of the hot ghee. It will sizzle and create a lattice-like structure.</li>
                                    <li>Allow the froth to settle, then pour another ladleful in the center. Repeat 4-5 times to form a thick disc with a hole in the center.</li>
                                    <li>Fry until golden and crisp. Carefully lift the ghevar out and place it on a wire rack to drain excess ghee.</li>
                                    <li><strong>Prepare the syrup:</strong> Boil sugar and water until it reaches a one-string consistency.</li>
                                    <li><strong>Assemble:</strong> Place the fried ghevar on the wire rack and pour the warm sugar syrup over it. Garnish with rabri, nuts, or silver vark. Let it set before serving.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <ShareButtons title="Ghevar Recipe" />
                </CardContent>
            </Card>
        </div>
    );
}
