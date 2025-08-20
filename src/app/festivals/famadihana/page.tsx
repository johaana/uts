
'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { FamadihanaPageContent } from "./FamadihanaPageContent";


export default function FamadihanaPage() {

    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-green-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/jq39drXs/Famadihana.jpg" alt="Famadihana Festival" layout="fill" objectFit="cover" data-ai-hint="turning of bones" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-green-900 drop-shadow-lg">Famadihana</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-green-800/90 drop-shadow-md">The Turning of the Bones</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                         <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3">
                                <div className="sticky top-24">
                                     <FamadihanaPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <ShareButtons title="Famadihana" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
