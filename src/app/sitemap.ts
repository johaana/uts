
import { MetadataRoute } from 'next';
import { allFestivals } from '@/lib/festival-data';

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
    const festivalRoutes = allFestivals.map((festival) => ({
        url: festival.link,
        lastModified: new Date().toISOString(),
    }));

    const recipeRoutes = allRecipes.map((recipe) => ({
        url: recipe.link,
        lastModified: new Date().toISOString(),
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `/blog/${post.slug}`,
        lastModified: new Date().toISOString(),
    }));

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: '/', lastModified: new Date().toISOString() },
        { url: '/festivals', lastModified: new Date().toISOString() },
        { url: '/recipes', lastModified: new Date().toISOString() },
        { url: '/blog', lastModified: new Date().toISOString() },
        { url: '/api', lastModified: new Date().toISOString() },
        { url: '/planner', lastModified: new Date().toISOString() },
    ];

    return [...staticRoutes, ...festivalRoutes, ...recipeRoutes, ...blogRoutes];
}
