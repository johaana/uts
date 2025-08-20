
'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { ArattupuzhaPooramPageContent } from "./ArattupuzhaPooramPageContent";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/product-data";

export default function ArattupuzhaPooramPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-red-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/sx9mBPzh/arattupuzha-pooram.webp" alt="Arattupuzha Pooram" layout="fill" objectFit="cover" data-ai-hint="kerala temple festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-7xl font-bold text-red-900 drop-shadow-lg">Arattupuzha Pooram</h1>
                    <p className="text-lg md:text-xl mt-4 text-red-800/90 drop-shadow-md">The Mother of all Pooram Festivals</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <ArattupuzhaPooramPageContent />
                        <div className="not-prose my-10">
                            <h3 className="font-headline text-2xl font-bold mb-4 text-center text-primary">Get Ready for the Festivities</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <ProductCard product={products.rajasthanKraftToran} />
                                <ProductCard product={products.handicraftsParadiseChowki} />
                                <ProductCard product={products.indianArtVillaThali} />
                            </div>
                        </div>
                        <ShareButtons title="Arattupuzha Pooram" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
