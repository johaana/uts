
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function LaruPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Narikol Laru (Coconut Ladoo)</CardTitle>
                     <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                           <p className="text-lg text-muted-foreground">A traditional Assamese sweet, Narikol Laru are delicious coconut ladoos made during festivals like Bihu. They are simple, fragrant, and melt-in-the-mouth.</p>
                        </div>
                         <div className="md:w-1/3">
                           <Image src="https://i.postimg.cc/MpjzBzff/laru.jpg" alt="Narikol Laru" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="coconut ladoo"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 cups Freshly grated coconut</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Sugar or Jaggery</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Cardamom powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ghee (optional)</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>In a heavy-bottomed pan, combine the grated coconut and sugar (or jaggery).</li>
                                <li>Cook on a low to medium heat, stirring continuously.</li>
                                <li>The sugar will melt and the mixture will become moist. Continue to cook, stirring, until the mixture thickens and starts to come together. This may take about 15-20 minutes.</li>
                                <li>Be careful not to overcook, as the larus will become hard. The mixture should be sticky enough to bind.</li>
                                <li>Add the cardamom powder and ghee (if using). Mix well and turn off the heat.</li>
                                <li>Let the mixture cool down slightly until it is warm enough to handle.</li>
                                <li>Grease your palms with a little ghee. Take small portions of the mixture and roll them into tight, round balls (larus).</li>
                                <li>Let them cool completely to firm up. Store in an airtight container.</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
