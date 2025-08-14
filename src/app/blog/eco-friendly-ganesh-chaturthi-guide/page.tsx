
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import type { Metadata } from 'next';
import { RelatedContent, RelatedItem } from "@/components/RelatedContent";
import { ProductCard } from "@/components/ProductCard";

const post = { 
    title: "Your Ultimate Guide to an Eco-Friendly Ganesh Chaturthi", 
    image: "https://i.postimg.cc/PqjW2Gmm/eco-friendly-ganesha.jpg",
    excerpt: "Celebrate the birth of Lord Ganesha with reverence for both tradition and nature. Discover beautiful, water-soluble idols, DIY clay kits, and sustainable decoration ideas for a joyous and conscious festival."
};

export const metadata: Metadata = {
  title: `${post.title} | Utsavs`,
  description: post.excerpt,
  openGraph: {
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    type: 'article',
    publishedTime: new Date('2025-08-11').toISOString(),
    authors: ['Utsavs'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${post.title} | Utsavs`,
    description: post.excerpt,
    images: [post.image],
  },
};

const relatedContent: RelatedItem[] = [
    {
        slug: "ganesh-chaturthi",
        title: "Ganesh Chaturthi Festival Guide",
        image: "https://i.postimg.cc/SNGxJ8VJ/ganesh-chaturthi-festival.jpg",
        type: "Festival",
        link: "/festivals/ganesh-chaturthi",
        hint: "ganesha idol"
    },
    {
        slug: "celebrate-with-conscience-eco-friendly-festivals",
        title: "Guide to Eco-Friendly Festivals",
        image: "https://i.postimg.cc/XNyGGLXt/eco-friendly.jpg",
        type: "Blog",
        link: "/blog/celebrate-with-conscience-eco-friendly-festivals",
        hint: "eco-friendly decor"
    },
    {
        slug: "modak",
        title: "Modak Recipe",
        image: "https://i.postimg.cc/ZYv7DzmT/ukadiche-modak-recipe.jpg",
        type: "Recipe",
        link: "/recipes/modak",
        hint: "steamed dumplings"
    }
];

export default function SingleBlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative h-64 md:h-96 w-full mb-8">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" data-ai-hint="eco-friendly ganesha" className="rounded-lg"/>
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
                            <p className="text-sm text-muted-foreground">By Team Utsavs on August 11, 2025</p>
                            <h1 className="font-headline text-4xl font-bold text-primary mt-2">{post.title}</h1>
                        </div>

                        <p>Ganesh Chaturthi is a festival of immense joy and devotion. As we welcome the beloved Lord Ganesha into our homes, it's also a perfect opportunity to honor Mother Nature, who he represents. Traditionally, idols were made from river clay and returned to the earth, a beautiful symbol of life's cycle. Today, with the rise of Plaster of Paris (PoP) idols, our water bodies face pollution. But a wonderful movement is bringing us back to our roots. Let's explore how to celebrate a vibrant, joyous, and eco-friendly Ganesh Chaturthi.</p>
                        
                        <h3 id="idols">Choosing the Heart of the Festival: The Eco-Friendly Murti</h3>
                        <p>The single most impactful choice you can make is selecting a water-soluble idol. These idols are designed to dissolve gracefully, returning to the elements without harming aquatic life. Here are some wonderful options:</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                            <ProductCard
                                name="Puja N pujari Eco-Friendly Plantable Seed Ganesha"
                                price="299"
                                link="https://www.amazon.in/Eco-friendly-Plantable-Ganesha-Chaturthi-Clay-6inch/dp/B0B9X1T25C?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.-Y7PbNd7D37SbSHOjaXt_-XgHMvdiksuaFM-GWehn8yLKnWSFdVH4Y9_RWJ5Z333gxDrzQKgTfZsBnesJovNIuPWUSFXOBPeFIBRy_nVSuAPLslUQByya9VqGsB3TCHkKVvJ9dH0rXHwzKsmXpU_XuHscu9J0lidpOFyPEJT4EmhucVFirF1ig9c9kZ5NDexugHMhZYxyXoxmMueUURqoR3hJRrjgLKo0kfXNDAKu0MJpWzvpNlnzieXVTQ4gc2dfjtPZ5JDaA1ZkOpBAsfrx3a46_vNfgJdMH-kTnNunr8.C4sViRNYGZdDdQWR9QAMrv3ACcssTxQioEALDxFNOqQ&dib_tag=se&keywords=ganesh+chaturthi&qid=1755159913&sprefix=ganesh+chaturthi%2Caps%2C419&sr=8-59-spons&xpid=d_iSDzNdnJcOI&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll1&tag=utsavs-21&linkId=8e38d3b938409800aacbe3624c923f4c&language=en_IN&ref_=as_li_ss_tl"
                                image="https://i.postimg.cc/8PtnC1Y2/plantable-ganesha.jpg"
                                description="A beautiful 6-inch clay idol that contains plantable seeds. After immersion in a pot at home, the clay dissolves and gives birth to a new plant—a beautiful symbol of rebirth."
                            />
                            <ProductCard
                                name="TIED RIBBONS Eco Friendly Ganesha Idol"
                                price="299"
                                link="https://www.amazon.in/TIED-RIBBONS-Friendly-Ganesha-17-7cm/dp/B0FHQJ37HC?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh+chaturthi&qid=1755159752&sprefix=ganesh+chaturthi%2Caps%2C419&sr=8-50&linkCode=ll1&tag=utsavs-21&linkId=59c47a6a2d958cef6740bcb101cf12&language=en_IN&ref_=as_li_ss_tl"
                                image="https://i.postimg.cc/0j0K3Bv2/tied-ribbons-ganesha.jpg"
                                description="A handcrafted, water-soluble mitti (clay) statue perfect for home visarjan. A simple, elegant, and traditional choice."
                            />
                        </div>

                        <h4>DIY Ganesha: The Ultimate Personal Touch</h4>
                        <p>For a truly personal and family-bonding experience, consider making your own Ganesha idol. It's a wonderful activity to do with children, teaching them the importance of the festival and sustainability from a young age.</p>
                        
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                             <ProductCard
                                name="Eco-Friendly Terracotta Clay for Idol Making (1kg)"
                                price="199"
                                link="https://www.amazon.in/Eco-Friendly-Terracotta-Water-Soluble-Plantable-Sculpting/dp/B0FK5PTBMF?crid=36O1VJPGIG1Q7&dib=eyJ2IjoiMSJ9.GUgUuICeFlJwMBAFlJlgM9uS6-YpHzERDYsXL0wLnrS6bQwpe1Gl2QPCBUU9dWv-0Z9Su7smg7xGIY1_TJ71OaMktjlRnKIUSiRzVB6jpZaz9JvavDCU9ue7s2K3hvgbZ8QBNvtBseDChL2DepQNj2tXeHDp1zqkfD1Q0UoNDgOMxsT_iAHIIiBYawVLqTgVt92gfs2sCcsvQV2ok9yhhIUd3Ivzs51IWaWa8188Ytvj1WQTNkghm_WCuvmQc0GSJ1CPJEfcHXtPPGMWfTZqF3sTxod6TRnx4SabHyCxrXg.yX2hUtrRkw7or5xopJ5IV6G3zeLCs6AjJzq0oazeCIY&dib_tag=se&keywords=ganesh%2Bchaturthi&qid=1755159752&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=8-40&th=1&linkCode=ll1&tag=utsavs-21&linkId=9c098a9ba7418acc6766a1e1a436da24&language=en_IN&ref_=as_li_ss_tl"
                                image="https://i.postimg.cc/8zQhdwfB/clay-kit.jpg"
                                description="This natural, water-soluble clay is perfect for sculpting your own Ganpati murti at home. It's safe for kids and the environment."
                            />
                             <ProductCard
                                name="SAUDEEP INDIA 6 Inch Mitti Ganesh Idol"
                                price="399"
                                link="https://www.amazon.in/Eco-Friendly-Handcrafted-Figurine-Biodegradable-Chaturthi/dp/B0BB6TCG1R?content-id=amzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%3Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07&crid=36O1VJPGIG1Q7&cv_ct_cx=ganesh%2Bchaturthi&keywords=ganesh%2Bchaturthi&pd_rd_i=B0BB6TCG1R&pd_rd_r=b5f4fb8b-989f-42a4-80b5-111f0ebe5d1c&pd_rd_w=OEtXm&pd_rd_wg=LVhRA&pf_rd_p=739e670d-dfb3-4be0-9815-d8c5c0372e07&pf_rd_r=278JN3W8BEHQN19E62FY&qid=1755159752&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=ganesh%2Bchaturthi%2Caps%2C419&sr=1-1-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll1&tag=utsavs-21&linkId=1a62d41527a3c3104118149d576b664d&language=en_IN&ref_=as_li_ss_tl"
                                image="https://i.postimg.cc/Kz4Y6Q1S/lotus-ganesha.jpg"
                                description="A beautiful, handcrafted Lotus Ganesha statue made from biodegradable clay, combining artistry with eco-consciousness."
                            />
                        </div>

                        <p>Don't forget Ganesha's mother! Many families also worship Goddess Gauri during the festival. This eco-friendly clay Gauri idol is a perfect companion for your Ganpati.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                             <ProductCard
                                name="Puja N Pujari Eco Friendly Clay Gowri Idol"
                                price="399"
                                link="https://www.amazon.in/Puja-Pujari-Friendly-Ganesh-Chaturthi/dp/B07W5MTQSN?content-id=amzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%3Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07&crid=36O1VJPGIG1Q7&cv_ct_cx=ganesh+chaturthi&keywords=ganesh+chaturthi&pd_rd_i=B07W5MTQSN&pd_rd_r=b5f4fb8b-989f-42a4-80b5-111f0ebe5d1c&pd_rd_w=OEtXm&pd_rd_wg=LVhRA&pf_rd_p=739e670d-dfb3-4be0-9815-d8c5c0372e07&pf_rd_r=278JN3W8BEHQN19E62FY&qid=1755159752&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=ganesh+chaturthi%2Caps%2C419&sr=1-5-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll1&tag=utsavs-21&linkId=b7311d628ba71c04ff08008e9763a70c&language=en_IN&ref_=as_li_ss_tl"
                                image="https://i.postimg.cc/tJnB8vjB/gowri-idol.jpg"
                                description="Welcome Ganesha's mother, Gauri, with this simple and traditional clay idol. Perfect for celebrating the mother-son bond during the festival."
                            />
                        </div>


                        <h3>Sustainable Decorations and Practices</h3>
                        <ul>
                            <li><strong>Use Natural Flowers & Leaves:</strong> Decorate your mandap with fresh flowers, mango leaves, and banana leaves instead of plastic and thermocol.</li>
                            <li><strong>Symbolic Immersion:</strong> Immerse your clay idol at home in a bucket or drum. You can then pour the water into your garden, a beautiful way to complete the cycle of life.</li>
                            <li><strong>Serve Prasad on Leaf Plates:</strong> Reduce waste by using traditional 'pattals' (leaf plates) or reusable steel utensils for serving prasad.</li>
                        </ul>
                        
                        <blockquote>
                            <p>An eco-friendly celebration is the greatest offering we can make—one that honors both our beloved deity and the planet he represents.</p>
                        </blockquote>

                    </article>
                    <ShareButtons title={post.title} />
                    <RelatedContent items={relatedContent} />
                </CardContent>
            </Card>
        </div>
    );
}
