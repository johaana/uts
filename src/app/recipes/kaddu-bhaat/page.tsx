import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

export default function KadduBhaatPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Card>
                <CardHeader className="p-6 md:p-10">
                    <CardTitle className="font-headline text-4xl mb-4">Kaddu Bhaat</CardTitle>
                     <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                           <p className="text-lg text-muted-foreground">A simple yet significant dish for Chhath Puja, Kaddu Bhaat consists of a lightly spiced pumpkin curry served with rice. It is often eaten on the 'Nahay Khay' day.</p>
                        </div>
                         <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/d1N07T3K/thekua1.webp" alt="Kaddu Bhaat" width={400} height={250} className="rounded-lg shadow-lg" data-ai-hint="pumpkin curry rice"/>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 md:p-10 pt-0">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <h3 className="font-headline text-2xl font-bold mb-4">Ingredients</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>500g Pumpkin (Kaddu), peeled and cubed</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 cup Rice (Arwa Chawal)</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp Ghee</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tsp Cumin seeds</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>2 Dry red chilies</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1/2 tsp Turmeric powder</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>Rock salt (sendha namak) to taste</li>
                                <li className="flex items-center gap-2"><Check className="text-primary w-5 h-5"/>1 tbsp chopped Coriander leaves</li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-headline text-2xl font-bold mb-4">Instructions</h3>
                            <ol className="space-y-4 list-decimal list-inside text-foreground/80">
                                <li>First, cook the rice and keep it aside.</li>
                                <li>Heat ghee in a pan or pressure cooker. Add cumin seeds and dry red chilies.</li>
                                <li>When the seeds crackle, add the pumpkin cubes.</li>
                                <li>Add turmeric powder and rock salt. Mix well.</li>
                                <li>Add about 1/2 cup of water, cover, and cook until the pumpkin is soft and mushy. If using a pressure cooker, one whistle is usually enough.</li>
                                <li>Mash the pumpkin slightly with the back of a spoon.</li>
                                <li>Garnish with fresh coriander leaves.</li>
                                <li>Serve the hot pumpkin curry with steamed rice (bhaat).</li>
                            </ol>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
