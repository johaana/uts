
import { MetadataRoute } from 'next';

const URL = 'https://utsavs.com';

const allFestivals = [
    { name: "Diwali", link: "/festivals/diwali" },
    { name: "Holi", link: "/festivals/holi" },
    { name: "Eid-al-Fitr", link: "/festivals/eid-al-fitr" },
    { name: "Navratri", link: "/festivals/navratri" },
    { name: "Durga Puja", link: "/festivals/durga-puja" },
    { name: "Ganesh Chaturthi", link: "/festivals/ganesh-chaturthi" },
    { name: "Christmas", link: "/festivals/christmas" },
    { name: "Pongal", link: "/festivals/pongal" },
    { name: "Onam", link: "/festivals/onam" },
    { name: "Bihu", link: "/festivals/bihu" },
    { name: "Makar Sankranti", link: "/festivals/makar-sankranti" },
    { name: "Guru Nanak Jayanti", link: "/festivals/guru-nanak-jayanti" },
    { name: "Raksha Bandhan", link: "/festivals/raksha-bandhan" },
    { name: "Chhath Puja", link: "/festivals/chhath-puja" },
    { name: "Rath Yatra", link: "/festivals/rath-yatra" },
    { name: "Gudi Padwa", link: "/festivals/gudi-padwa" },
    { name: "Lohri", link: "/festivals/lohri" },
    { name: "Vasant Panchami", link: "/festivals/vasant-panchami" },
    { name: "Muharram", link: "/festivals/muharram" },
    { name: "Akshaya Tritiya", link: "/festivals/akshaya-tritiya" },
    { name: "Nag Panchami", link: "/festivals/nag-panchami" },
    { name: "Hornbill Festival", link: "/festivals/hornbill-festival" },
    { name: "Thaipusam", link: "/festivals/thaipusam" },
    { name: "Hemis Tsechu", link: "/festivals/hemis-tsechu" },
    { name: "Goa Carnival", link: "/festivals/goa-carnival" },
    { name: "Republic Day", link: "/festivals/republic-day" },
    { name: "Independence Day", link: "/festivals/independence-day" },
    { name: "Gandhi Jayanti", link: "/festivals/gandhi-jayanti" },
    { name: "Good Friday", link: "/festivals/good-friday" },
    { name: "Bastar Dussehra", link: "/festivals/bastar-dussehra" },
    { name: "Hareli Festival", link: "/festivals/hareli-festival" },
    { name: "Madai Festival", link: "/festivals/madai-festival" },
    { name: "Teej", link: "/festivals/teej" },
    { name: "Karva Chauth", link: "/festivals/karva-chauth" },
    { name: "Ugadi", link: "/festivals/ugadi" },
    { name: "Vishu", link: "/festivals/vishu" },
    { name: "Karthigai Deepam", link: "/festivals/karthigai-deepam" },
    { name: "Yaoshang", link: "/festivals/yaoshang" },
    { name: "Chapchar Kut", link: "/festivals/chapchar-kut" },
    { name: "Mopin", link: "/festivals/mopin" },
    { name: "Wangala", link: "/festivals/wangala" },
    { name: "Nuakhai", link: "/festivals/nuakhai" },
];

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
    { link: "src/app/recipes/kothimbir-vadi" },
    { link: "/recipes/pitha" },
    { link: "/recipes/laru" },
    { link: "/recipes/fish-curry" },
    { link: "/recipes/khechudi" },
    { link: "/recipes/dalma" },
    { link: "/recipes/poda-pitha" },
    { link: "/recipes/aloo-gobi" },
    { link: "/recipes/kaddu-bhaat" },
    { link: "/recipes/rasia-kheer" },
    { link: "/recipes/sakkarai-pongal" },
    { link: "/recipes/sambar" },
    { link: "/recipes/medu-vada" },
    { link: "/recipes/ven-pongal" },
    { link: "/recipes/tilgul" },
];

const blogPosts = [
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
        url: `${URL}${festival.link}`,
        lastModified: new Date().toISOString(),
    }));

    const recipeRoutes = allRecipes.map((recipe) => ({
        url: `${URL}${recipe.link}`,
        lastModified: new Date().toISOString(),
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${URL}/blog/${post.slug}`,
        lastModified: new Date().toISOString(),
    }));

    const staticRoutes = [
        { url: URL, lastModified: new Date().toISOString() },
        { url: `${URL}/festivals`, lastModified: new Date().toISOString() },
        { url: `${URL}/recipes`, lastModified: new Date().toISOString() },
        { url: `${URL}/blog`, lastModified: new Date().toISOString() },
    ];

    return [...staticRoutes, ...festivalRoutes, ...recipeRoutes, ...blogRoutes];
}
