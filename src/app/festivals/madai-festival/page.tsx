
'use client';
import { Card, CardContent } from "@/components/ui/card";
import { ShareButtons } from "@/components/ShareButtons";
import { MadaiFestivalPageContent } from "./MadaiFestivalPageContent";
import Image from "next/image";

export default function MadaiFestivalPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-12">
                <Card className="mb-12 overflow-hidden">
                    <Image src="https://i.postimg.cc/0jpmW9HR/madai.jpg" alt="Madai Festival" width={1200} height={400} className="w-full h-48 md:h-64 object-cover" data-ai-hint="tribal fair" />
                    <div className="p-6 md:p-10 text-center">
                        <h1 className="font-headline text-4xl md:text-7xl font-bold text-primary">Madai Festival</h1>
                        <p className="text-xl md:text-2xl mt-2 text-muted-foreground">A Vibrant Tribal Fair of Chhattisgarh</p>
                    </div>
                    <CardContent className="p-6 md:p-10 pt-0">
                         <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
                             <aside className="md:col-span-4 lg:col-span-3 -ml-2 hidden md:block">
                                <div className="sticky top-24">
                                     <MadaiFestivalPageContent />
                                </div>
                            </aside>
                            <main className="md:col-span-8 lg:col-span-9">
                               <article>
                                    <MadaiFestivalPageContent isContent={true} />
                               </article>
                               <ShareButtons title="Madai Festival" />
                            </main>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
