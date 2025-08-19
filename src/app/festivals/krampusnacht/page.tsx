
'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ShareButtons } from "@/components/ShareButtons";
import { KrampusnachtPageContent } from "./KrampusnachtPageContent";

export default function KrampusnachtPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-gray-800/10">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="https://i.postimg.cc/5yrkPw0H/Krampusnacht.avif" alt="Krampusnacht" layout="fill" objectFit="cover" data-ai-hint="krampus" />
                </div>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 drop-shadow-lg">Krampusnacht</h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4 text-gray-800/90 drop-shadow-md">The Night of the Christmas Demon</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 -mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <KrampusnachtPageContent />
                        <ShareButtons title="Krampusnacht" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
