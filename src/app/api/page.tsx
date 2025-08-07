
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ApiPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Partnerships</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                    Leverage our comprehensive and structured data on Indian festivals to enrich your applications, platforms, and services.
                </p>
            </div>

            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Partner with Utsavs.com</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 text-foreground/80 prose max-w-none">
                        <p>Utsavs.com offers the most detailed and accurate dataset on Indian festivals, including dates, regional variations, traditions, stories, and authentic recipes. We are open to partnering with travel agencies, corporate entities, content creators, and developers who wish to integrate this rich cultural data into their own products.</p>
                        
                        <h3 className="font-headline text-2xl font-bold text-primary">Potential Use Cases:</h3>
                        <ul>
                            <li><strong>Travel Agencies:</strong> Create themed travel packages and cultural tours centered around specific festivals.</li>
                            <li><strong>Corporate Planners:</strong> Organize office celebrations and cultural events with authentic information and activities.</li>
                            <li><strong>Digital Calendars:</strong> Integrate accurate festival dates into your calendar applications.</li>
                            <li><strong>Content Platforms:</strong> Enrich your articles, videos, and social media with verified festival details.</li>
                        </ul>

                        <div className="text-center p-8 bg-primary/10 rounded-lg">
                            <h3 className="font-headline text-2xl font-bold text-primary">Let's Collaborate</h3>
                            <p className="mt-2">If you are interested in accessing our data or exploring a partnership, please get in touch with our team.</p>
                            <a href="mailto:partner@utsavs.com">
                                <Button className="mt-4">
                                    <Mail className="mr-2 h-4 w-4"/>
                                    Contact Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
