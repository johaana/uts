
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";

export default function ApiPage() {
    return (
        <PageLayout>
            <div className="text-center mb-12 px-4">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Unlock Cultural Travel</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                   Partner with Utsavs.com to integrate the world's richest festival data into your travel platform and inspire your customers.
                </p>
            </div>

            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Why Partner with Utsavs.com?</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 text-foreground/80 prose max-w-none">
                        <p>Modern travelers crave authentic cultural experiences. They don't just want to see a place; they want to experience its soul. Indian festivals offer this opportunity, but planning travel around them is often complex due to varying dates and regional nuances. This is where Utsavs.com comes in.</p>
                        
                        <p>We offer the most detailed and accurate dataset on Indian festivals, including precise dates, regional variations, traditions, and cultural context. By integrating our data, you can empower your customers to build unforgettable journeys.</p>

                        <h3 className="font-headline text-2xl font-bold text-primary">How Our Data Can Help Your Business:</h3>
                        <ul>
                            <li><strong>Inspire New Journeys:</strong> Showcase vibrant festivals to your customers, encouraging them to plan trips they never knew were possible.</li>
                            <li><strong>Create Themed Itineraries:</strong> Develop unique, high-value travel packages centered around specific cultural events like the Pushkar Camel Fair, Durga Puja in Kolkata, or the Hornbill Festival.</li>
                            <li><strong>Increase Bookings:</strong> Help travelers plan their trips with confidence. By providing accurate festival dates, you enable them to book flights and accommodations further in advance, leading to higher conversion rates.</li>
                            <li><strong>Enhance Customer Experience:</strong> Enrich your platform with cultural content that adds immense value to your users' travel planning process.</li>
                        </ul>

                        <div className="text-center p-8 bg-primary/10 rounded-lg">
                            <h3 className="font-headline text-2xl font-bold text-primary">Let's Collaborate</h3>
                            <p className="mt-2">If you are a travel agency, OTA, or content creator interested in accessing our data or exploring a partnership, please get in touch with our team.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                                <Link href="mailto:joy@utsavs.com" target="_blank" rel="noopener noreferrer">
                                    <Button>
                                        <Mail className="mr-2 h-4 w-4"/>
                                        Email Us
                                    </Button>
                                </Link>
                                <Link href="https://wa.me/919545997111" target="_blank" rel="noopener noreferrer">
                                     <Button variant="secondary">
                                        <MessageSquareText className="mr-2 h-4 w-4"/>
                                        WhatsApp
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </PageLayout>
    );
}
