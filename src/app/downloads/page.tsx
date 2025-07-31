import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DownloadCloud, Brush, CheckSquare, Gift } from "lucide-react";
import Image from "next/image";

const downloads = [
    { title: "Peacock Rangoli Stencil", category: "Rangoli Designs", image: "https://placehold.co/400x300.png", hint: "peacock rangoli", file: "#" },
    { title: "Diwali Greeting Card", category: "Greeting Cards", image: "https://placehold.co/400x300.png", hint: "diwali card", file: "#" },
    { title: "Puja Preparation Checklist", category: "Checklists", image: "https://placehold.co/400x300.png", hint: "checklist paper", file: "#" },
    { title: "Floral Rangoli Pattern", category: "Rangoli Designs", image: "https://placehold.co/400x300.png", hint: "flower rangoli", file: "#" },
    { title: "Holi Party Invitation", category: "Greeting Cards", image: "https://placehold.co/400x300.png", hint: "holi invitation", file: "#" },
    { title: "Navratri Fasting Guide", category: "Checklists", image: "https://placehold.co/400x300.png", hint: "guide book", file: "#" },
];

export default function DownloadsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <DownloadCloud className="mx-auto h-16 w-16 text-primary mb-4" />
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Downloads Hub</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Enhance your festival preparations with our free resources. Download rangoli designs, checklists, greeting cards, and more.
                </p>
            </div>

            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                <Button variant="outline" size="lg"><Brush className="mr-2 h-4 w-4"/>Rangoli Designs</Button>
                <Button variant="outline" size="lg"><Gift className="mr-2 h-4 w-4"/>Greeting Cards</Button>
                <Button variant="outline" size="lg"><CheckSquare className="mr-2 h-4 w-4"/>Checklists</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {downloads.map((item) => (
                    <Card key={item.title} className="overflow-hidden group">
                        <Image src={item.image} alt={item.title} width={400} height={300} className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={item.hint} />
                        <CardHeader>
                            <p className="text-sm text-primary font-semibold">{item.category}</p>
                            <CardTitle className="font-headline text-xl h-14">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <a href={item.file} download>
                                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                                    <DownloadCloud className="mr-2 h-4 w-4" />
                                    Download
                                </Button>
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
