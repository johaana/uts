
'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { HadakaMatsuriPageContent } from "./HadakaMatsuriPageContent";

export default function HadakaMatsuriPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-yellow-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/j5Z1fVY4/Hadaka-Matsuri.jpg" alt="Hadaka Matsuri" layout="fill" objectFit="cover" data-ai-hint="naked festival" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-900 drop-shadow-lg">Hadaka Matsuri</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-yellow-800/90 drop-shadow-md">The Naked Festival</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <HadakaMatsuriPageContent />
                        <ShareButtons title="Hadaka Matsuri" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
