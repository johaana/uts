

'use client';
import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { MandoFestivalPageContent } from "./MandoFestivalPageContent";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

export default function MandoFestivalPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                    <Image src="https://i.postimg.cc/15XsrvgM/mando.jpg" alt="Mando Festival" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="goan folk dance" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Mando Festival</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">Celebrating Goa's Soulful Musical Heritage</p>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                       <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3 -ml-2 hidden md:block">
                                <div className="sticky top-24">
                                     <MandoFestivalPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                                <article>
                                    <MandoFestivalPageContent isContent={true} />
                                </article>
                                 <div className="not-prose my-10 bg-secondary/30 p-6 rounded-lg">
                                    <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Get the Festive Look (Shop on Amazon)</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                                        <ProductCard product={products.anumalaJuteBag} />
                                        <ProductCard product={products.doubleRCanvasBag} />
                                    </div>
                                </div>
                               <ShareButtons title="Mando Festival" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
