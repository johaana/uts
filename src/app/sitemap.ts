
import { MetadataRoute } from 'next';
import { allFestivals } from '@/lib/festival-data';
import { metadata } from './layout';

const allRecipes = [
    { link: "/recipes/gajar-ka-halwa" },
    { link: "/recipes/puran-poli" },
    { link: "/recipes/ras-malai" },
    { link: "/recipes/modak" },
    { link: "/recipes/thekua" },
    { link: "/recipes/ladoo" },
    { link: "/recipes/gujiya" },
    { link: "/recipes/thandai" },
    { link: "/recipes/sheer-khurma" },
    { link: "/recipes/biryani" },
    { link: "/recipes/christmas-cake" },
    { link: "/recipes/rum-cake" },
    { link: "/recipes/kerala-roast-chicken" },
    { link: "/recipes/karah-prasad" },
    { link: "/recipes/kaju-katli" },
    { link: "/recipes/coconut-barfi" },
    { link: "/recipes/haleem" },
    { link: "/recipes/langar-dal" },
    { link: "/recipes/avial" },
    { link: "/recipes/payasam" },
    { link: "/recipes/shrikhand" },
    { link: "/recipes/kothimbir-vadi" },
    { link: "/recipes/pitha" },
    { link: "/recipes/laru" },
    { link: "/recipes/fish-curry" },
    { link: "/recipes/khechudi" },
    { link: "/recipes/dalma" },
    { link: "/recipes/poda-pitha" },
    { link: "/recipes/aloo-gobi" },
    { link: "/recipes/sakkarai-pongal" },
    { link: "/recipes/sambar" },
    { link: "/recipes/medu-vada" },
    { link: "/recipes/ven-pongal" },
    { link: "/recipes/tilgul" },
    { link: "/recipes/khichdi" },
    { link: "/recipes/sabudana-khichdi" },
    { link: "/recipes/kuttu-ki-puri" },
    { link: "/recipes/makhane-ki-kheer" },
    { link: "/recipes/sali-boti" },
];

const blogPosts = [
    { slug: "raksha-bandhan-the-true-spirit-of-siblinghood" },
    { slug: "celebrate-with-conscience-eco-friendly-festivals" },
    { slug: "significance-of-diyas-in-diwali" },
    { slug: "guide-to-natural-holi-colors" },
    { slug: "top-5-rangoli-designs-for-beginners" },
    { slug: "9-avatars-of-durga-a-navratri-special" },
    { slug: "onam-sadya-a-feast-for-the-senses" },
    { slug: "festive-fashion-a-guide-to-traditional-indian-attire" },
    { slug: "bikaner-camel-festival-a-royal-spectacle" },
    { slug: "kerala-village-fair-gramam" },
    { slug: "pushkar-camel-fair-an-unforgettable-experience" },
    { slug: "hampi-utsav-a-journey-back-in-time" },
    { slug: "kumbh-mela-a-dip-in-immortality" },
    { slug: "sula-fest-wine-music-and-more" },
    { slug: "tarnetar-mela-a-unique-gujarati-fair" },
    { slug: "losar-festival-the-tibetan-new-year" },
    { slug: "torgya-monastery-festival-a-splash-of-color" },
    { slug: "thrissur-pooram-keralas-grandest-festival" },
    { slug: "10-unknown-festivals-of-india" },
    { slug: "long-weekends-2025" },
];

export default function sitemap(): MetadataRoute.Sitemap {

    const siteUrl = metadata.metadataBase;

    if (!siteUrl) {
        console.error("metadataBase is not defined in src/app/layout.tsx. Sitemap generation might be incorrect.");
        return [];
    }

    const festivalRoutes = allFestivals.map((festival) => ({
        url: new URL(festival.link, siteUrl).toString(),
        lastModified: new Date().toISOString(),
    }));

    const recipeRoutes = allRecipes.map((recipe) => ({
        url: new URL(recipe.link, siteUrl).toString(),
        lastModified: new Date().toISOString(),
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
        lastModified: new Date().toISOString(),
    }));

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: siteUrl.toString(), lastModified: new Date().toISOString() },
        { url: new URL('/festivals', siteUrl).toString(), lastModified: new Date().toISOString() },
        { url: new URL('/recipes', siteUrl).toString(), lastModified: new Date().toISOString() },
        { url: new URL('/blog', siteUrl).toString(), lastModified: new Date().toISOString() },
        { url: new URL('/api', siteUrl).toString(), lastModified: new Date().toISOString() },
        { url: new URL('/planner', siteUrl).toString(), lastModified: new Date().toISOString() },
    ];

    return [...staticRoutes, ...festivalRoutes, ...recipeRoutes, ...blogRoutes];
}
