
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Users, Target, Rss, Utensils, Calendar, Globe } from "lucide-react";

export default function AboutUsPage() {
    return (
        <PageLayout>
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">About Utsavs</h1>
                <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                    Rediscovering roots, one festival at a time.
                </p>
            </div>

            <Card className="mb-12">
                <CardContent className="p-6 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-2/3">
                            <h2 className="font-headline text-3xl font-bold mb-4 text-primary">Our Story</h2>
                            <div className="space-y-4 text-foreground/80 prose max-w-none">
                                <p>In today's fast-paced world, it's easy to lose touch with our cultural roots. For many, especially younger generations, the rich stories, traditions, and intricate details behind the festivals we celebrate have become faded memories or scattered pieces of information across the internet. The deep significance of the rituals, the taste of ancestral recipes, and the powerful myths that have shaped our heritage are often overlooked.</p>
                                <p>We saw a gap—a need for a single, beautifully crafted place where this knowledge wasn't just stored, but brought to life. Utsavs.com was born from a simple idea: to create a vibrant, comprehensive, and engaging resource for anyone curious about the "why" behind the celebration. We wanted to build a bridge to our past, making the wisdom of our traditions accessible and relevant for today's world.</p>
                                <p>This platform is for the curious traveler planning their next journey around a local spectacle, for the parent wanting to share the story of Diwali with their children, for the foodie eager to cook an authentic festive meal, and for anyone who believes that understanding our festivals is a powerful way to understand ourselves.</p>
                            </div>
                        </div>
                        <div className="md:w-1/3">
                            <Image src="https://i.postimg.cc/mg1bYqXc/Diwali-blog-same-fest.jpg" alt="A collage of festival celebrations" width={400} height={400} className="rounded-lg shadow-lg w-full" data-ai-hint="diwali collage"/>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardContent className="p-8">
                        <Target className="w-12 h-12 text-accent mb-4"/>
                        <h3 className="font-headline text-2xl font-bold mb-2">Our Mission</h3>
                        <p className="text-foreground/80">Our mission is to be the most definitive and inspiring guide to Indian and international festivals. We aim to preserve and share the cultural richness of these events by providing detailed information on their history, rituals, and the stories that make them unique. We want to empower you to not just observe, but to truly experience and understand the heart of each 'utsav'.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="p-8">
                        <Users className="w-12 h-12 text-accent mb-4"/>
                        <h3 className="font-headline text-2xl font-bold mb-2">Who We Are</h3>
                        <p className="text-foreground/80">We are a small, passionate team of storytellers, developers, and cultural enthusiasts. This platform is a labor of love, a collaborative effort between human creativity and artificial intelligence, dedicated to building a space that is both informative and beautiful. We believe in the power of stories to connect us and the power of technology to share them with the world.</p>
                    </CardContent>
                </Card>
            </div>

            <div className="text-center my-16">
                 <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">What We Offer</h2>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-secondary/30 p-6 rounded-lg flex items-start gap-4">
                    <Calendar className="w-8 h-8 text-accent shrink-0 mt-1"/>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Festival Guides</h4>
                        <p className="text-sm text-foreground/80">In-depth information on dates, history, and rituals of numerous festivals.</p>
                    </div>
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg flex items-start gap-4">
                    <Utensils className="w-8 h-8 text-accent shrink-0 mt-1"/>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Authentic Recipes</h4>
                        <p className="text-sm text-foreground/80">A library of traditional recipes to help you cook the authentic taste of each festival.</p>
                    </div>
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg flex items-start gap-4">
                    <Rss className="w-8 h-8 text-accent shrink-0 mt-1"/>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Cultural Stories</h4>
                        <p className="text-sm text-foreground/80">A blog that dives deeper into the culture, traditions, and fascinating stories behind the celebrations.</p>
                    </div>
                </div>
            </div>

        </PageLayout>
    );
}
