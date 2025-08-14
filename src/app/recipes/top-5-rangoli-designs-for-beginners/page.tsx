
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { ProductCard } from "@/components/ProductCard";

const post = {
    title: "Top 5 Rangoli Designs for Beginners",
    image: "https://i.postimg.cc/fRYfMpwb/Rangoli.jpg",
    excerpt: "Get inspired with these easy-to-make yet beautiful rangoli patterns. From simple floral designs to geometric wonders, we provide step-by-step guides to adorn your home for any festive occasion."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-06-18').toISOString(),
    authors: ['Utsavs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [post.image],
  },
};

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="rangoli design" className="rounded-lg"/>
            </div>
            <Card className="overflow-hidden md:-mt-16 relative z-10 md:rounded-t-2xl">
                <CardContent className="p-6 md:p-10">
                    <div className="mb-8">
                        <Link href="/blog">
                            <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Button>
                        </Link>
                    </div>

                    <article className="prose max-w-none text-foreground/80">
                         <div className="text-center mb-8">
                            <p className="text-sm text-muted-foreground">By Team Utsavs on June 18, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>
                        
                        <p>Get inspired with these easy-to-make yet beautiful rangoli patterns. From simple floral designs to geometric wonders, we provide step-by-step guides to adorn your home for any festive occasion.</p>
                        
                        <h3>1. Simple Flower Rangoli</h3>
                        <p>This is the easiest design for beginners. Start with a central circle and draw petals around it to form a flower. You can use different colored powders for each petal. Add details like leaves and stems to make it more elaborate.</p>

                        <h3>2. Geometric Pattern Rangoli</h3>
                        <p>Geometric rangolis look complex but are easy to create with a grid of dots. Connect the dots to form squares, triangles, and other shapes. Fill in the shapes with different colors to create a stunning pattern.</p>

                        <h3>3. Peacock Rangoli</h3>
                        <p>The peacock is a symbol of beauty and grace in Indian culture. Draw the outline of a peacock and fill it with vibrant blues, greens, and gold. Use a darker color for the outline to make the design pop.</p>

                        <h3>4. Diya Rangoli</h3>
                        <p>A diya rangoli is perfect for Diwali. Draw a large diya in the center and decorate it with smaller diyas and floral patterns around it. Use bright colors to represent light and celebration.</p>

                        <h3>5. Swastika Rangoli</h3>
                        <p>The swastika is an ancient symbol of good fortune. Create a swastika in the center and surround it with a circular border of intricate patterns. This design is both auspicious and beautiful.</p>
                        
                        <div className="not-prose my-8 p-6 bg-primary/10 rounded-lg">
                           <h4 className="font-headline text-2xl font-bold text-primary mb-4 text-center">Get Your Rangoli Supplies</h4>
                           <p className="text-center mb-6">Ready to create your masterpiece? Get started with vibrant rangoli powders or beautiful, reusable rangoli mats.</p>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ProductCard 
                                    name="CraftVatika Multicolor Rangoli Powder" 
                                    price="130" 
                                    link="https://www.amazon.in/CraftVatika-Multicolor-Decoration-Chaturthi-Festival/dp/B0CHPC1SFT?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh+chaturthi&qid=1755159752&sprefix=ganesh+chaturthi%2Caps%2C419&sr=8-38&linkCode=ll1&tag=utsavs-21&linkId=354bf0e68ac549fee3629550e16fa4e1&language=en_IN&ref_=as_li_ss_tl" 
                                    image="https://i.postimg.cc/k47tXy23/rangoli-powder.jpg" 
                                    description="A box of 5 assorted vibrant color pouches, perfect for all your festive floor decorations." 
                                />
                                <ProductCard 
                                    name="Decorative Floral Rangoli Mat Set" 
                                    price="449" 
                                    link="https://www.amazon.in/Decorative-Floral-Rangoli-Mat-Traditional/dp/B0FHJVW6LG?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-53&th=1&linkCode=ll1&tag=utsavs-21&linkId=7b912e9a3475c70741feb19c6a08cc6f&language=en_IN&ref_=as_li_ss_tl" 
                                    image="https://i.postimg.cc/Zq7qQ6g0/rangoli-mat.jpg"
                                    description="For a quick and beautiful decoration, this set of 2 reusable 12-inch floral mats is an excellent choice." 
                                />
                           </div>
                        </div>

                    </article>
                    <ShareButtons title={post.title} />
                </CardContent>
            </Card>
        </div>
    );
}
