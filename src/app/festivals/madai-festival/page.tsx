

'use client';
import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { MadaiFestivalPageContent } from "./MadaiFestivalPageContent";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

export default function MadaiFestivalPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-600/10">
                 <Image src="https://i.postimg.cc/0jpmW9HR/madai.jpg" alt="Madai Festival" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-30" data-ai-hint="tribal fair" />
                <div className="relative text-center z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">Madai Festival</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">A Vibrant Tribal Fair of Chhattisgarh</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                         <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3">
                                <div className="sticky top-24">
                                     <MadaiFestivalPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <ShareButtons title="Madai Festival" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
