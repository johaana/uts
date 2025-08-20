
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { AnantChaturdashiPageContent } from "./AnantChaturdashiPageContent";
import Image from "next/image";

export default function AnantChaturdashiPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] flex items-center justify-center bg-primary/10">
                 <Image src="https://i.postimg.cc/RVSjWnhp/anant-chaturdashi.jpg" alt="Anant Chaturdashi" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-20" data-ai-hint="ganesh visarjan"/>
                <div className="relative text-center text-primary-foreground z-10 p-4">
                    <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary shadow-lg">Anant Chaturdashi</h1>
                    <p className="text-lg md:text-xl mt-4 text-primary/90 shadow-md">The Grand Finale of Ganesh Chaturthi</p>
                </div>
            </section>
            
            <div className="container mx-auto px-4 py-12 md:-mt-24">
                <Card className="mb-12">
                    <CardContent className="p-6 md:p-10">
                        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3">
                                <div className="sticky top-24">
                                     <AnantChaturdashiPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <ShareButtons title="Anant Chaturdashi" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
