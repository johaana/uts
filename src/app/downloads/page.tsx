import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DownloadCloud, Sparkles, Sprout, Star } from "lucide-react";

const downloads = [
    { title: "Diwali Puja Checklist", category: "Festival Guides", file: "/downloads/diwali_checklist.pdf", icon: <Star/>, description: "A complete checklist for all the essentials you need for a traditional Diwali Lakshmi Puja, from samagri to preparations." },
    { title: "Guide to Natural Holi Colors", category: "Eco-Friendly Tips", file: "/downloads/natural_holi_colors.pdf", icon: <Sprout/>, description: "Learn how to make vibrant, skin-friendly Holi colors at home using flowers and kitchen ingredients." },
    { title: "Navratri Fasting (Vrat) Guide", category: "Health & Rituals", file: "/downloads/navratri_vrat_guide.pdf", icon: <Sparkles/>, description: "A helpful guide with a list of permitted foods and meal ideas for observing the nine-day Navratri fast." },
];

export default function DownloadsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <DownloadCloud className="mx-auto h-16 w-16 text-primary mb-4" />
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Downloads Hub</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
                    Enhance your festival preparations with our free resources. Download helpful checklists, eco-friendly guides, and more to make your celebrations seamless and meaningful.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {downloads.map((item) => (
                    <Card key={item.title} className="overflow-hidden group flex flex-col">
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-sm text-primary font-semibold">{item.category}</p>
                                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <p className="text-foreground/70">{item.description}</p>
                        </CardContent>
                        <CardContent>
                            <a href={item.file} download>
                                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                                    <DownloadCloud className="mr-2 h-4 w-4" />
                                    Download Now
                                </Button>
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
