
import { MetadataRoute } from 'next';
import { allFestivals } from '@/lib/festival-data';
import { metadata } from './layout';
import { blogPosts } from '@/lib/blog-data';

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
