import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Users, Target, Rss, Utensils, Calendar, Globe } from "lucide-react";
import placeholderImages from "@/app/lib/placeholder-images.json";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutUsPage() {
    return (
        <div className="bg-[#0F1428] text-[#F4F1E8] min-h-screen font-sans">
            <Header />
            <PageLayout>
                <div className="text-center mb-16 pt-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8A33D]/10 border border-[#E8A33D]/20 rounded-full mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8A33D]">Our Story</span>
                    </div>
                    <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter">About Utsavs</h1>
                    <p className="mt-6 text-xl text-[#9AA1C0] max-w-3xl mx-auto font-medium">
                        Rediscovering roots, one festival at a time. From occasion to impact.
                    </p>
                </div>

                <Card className="mb-12 bg-[#171D3A] border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
                    <CardContent className="p-0">
                        <div className="flex flex-col lg:flex-row items-stretch">
                            <div className="p-8 md:p-16 lg:w-3/5 text-left space-y-8">
                                <h2 className="font-headline text-3xl md:text-5xl font-bold text-white tracking-tight">The "Why" Behind the Celebration.</h2>
                                <div className="space-y-6 text-[#9AA1C0] text-lg leading-relaxed font-medium">
                                    <p>In today's fast-paced world, it's easy to lose touch with our cultural roots. For many, the rich stories, traditions, and intricate details behind the festivals we celebrate have become faded memories or scattered pieces of information.</p>
                                    <p>Utsavs was born from a simple idea: to create a vibrant, comprehensive, and engaging resource for anyone curious about the significance behind the celebration. We wanted to build a bridge to our past, making the wisdom of our traditions accessible and relevant for today's world.</p>
                                    <p>This platform is for the curious traveler planning their next journey around a local spectacle, for the student seeking connection abroad, and for anyone who believes that understanding our festivals is a powerful way to understand ourselves.</p>
                                </div>
                            </div>
                            <div className="lg:w-2/5 relative min-h-[400px]">
                                <Image 
                                    src={placeholderImages.worldToday.url} 
                                    alt="Global celebrations" 
                                    fill 
                                    className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
                                    data-ai-hint="cultural scene"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#171D3A] via-transparent to-transparent lg:hidden" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-8 my-24">
                    <Card className="bg-[#171D3A] border-white/10 p-10 rounded-[32px] shadow-xl text-left space-y-6 group hover:border-[#E8A33D] transition-colors">
                        <div className="w-12 h-12 bg-[#E8A33D]/10 rounded-2xl flex items-center justify-center text-[#E8A33D] group-hover:scale-110 transition-transform">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="font-headline text-3xl font-bold text-white">Our Mission</h3>
                        <p className="text-[#9AA1C0] text-lg leading-relaxed font-medium">
                            To be the most definitive and inspiring guide to global festivals. We aim to preserve and share the cultural richness of these events by providing detailed information on their history, rituals, and the stories that make them unique.
                        </p>
                    </Card>
                    <Card className="bg-[#171D3A] border-white/10 p-10 rounded-[32px] shadow-xl text-left space-y-6 group hover:border-[#4FD1C5] transition-colors">
                        <div className="w-12 h-12 bg-[#4FD1C5]/10 rounded-2xl flex items-center justify-center text-[#4FD1C5] group-hover:scale-110 transition-transform">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="font-headline text-3xl font-bold text-white">Who We Are</h3>
                        <p className="text-[#9AA1C0] text-lg leading-relaxed font-medium">
                            We are a small, passionate team of storytellers, developers, and cultural enthusiasts. This platform is a collaborative effort between human creativity and verified intelligence, dedicated to building a space that is both informative and beautiful.
                        </p>
                    </Card>
                </div>

                <div className="text-center my-24 space-y-6">
                    <div className="h-px w-24 bg-[#E8A33D] mx-auto" />
                    <h2 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight">Traceable Intelligence</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {[
                        { icon: Calendar, t: "Festival Guides", d: "In-depth information on dates, history, and rituals of numerous global festivals." },
                        { icon: Utensils, t: "Sacred Recipes", d: "A library of traditional recipes to help you cook the authentic taste of each festival." },
                        { icon: Globe, t: "Operational Data", d: "Deterministic holiday data for technical planning and operational assessment." }
                    ].map((item, idx) => (
                        <Card key={idx} className="p-8 bg-[#171D3A] border-white/10 rounded-2xl text-left space-y-4 hover:bg-white/5 transition-colors">
                            <item.icon className="w-8 h-8 text-[#E8A33D]" />
                            <h4 className="text-xl font-bold text-white">{item.t}</h4>
                            <p className="text-sm text-[#9AA1C0] font-medium leading-relaxed">{item.d}</p>
                        </Card>
                    ))}
                </div>
            </PageLayout>
            <Footer />
        </div>
    );
}
