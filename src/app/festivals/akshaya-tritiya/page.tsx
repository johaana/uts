
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { AkshayaTritiyaPageContent } from "./AkshayaTritiyaPageContent";
import Image from "next/image";

export default function AkshayaTritiyaPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-500/10">
                 <Image src="https://i.postimg.cc/Rh92QWRF/dhanteras1.webp" alt="Akshaya Tritiya" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-20" data-ai-hint="gold coins"/>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-7xl font-bold text-amber-900 drop-shadow-lg">Akshaya Tritiya</h1>
                    <p className="text-xl md:text-2xl mt-4 text-amber-800/90 drop-shadow-md">The Day of Eternal Fortune</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12 overflow-hidden">
                    <CardContent className="p-6 md:p-10">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3">
                                <div className="sticky top-24">
                                   <AkshayaTritiyaPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <article>
                                    <AkshayaTritiyaPageContent />
                               </article>
                               <ShareButtons title="Akshaya Tritiya" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
