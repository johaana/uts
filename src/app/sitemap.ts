import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = "https://utsavs.com";

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: siteUrl, lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 1.0 },
        { url: `${siteUrl}/built-for`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${siteUrl}/api`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${siteUrl}/date-intelligence`, lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 0.9 },
        { url: `${siteUrl}/travel-insurance`, lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${siteUrl}/festivals`, lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 0.7 },
    ];

    return [...staticRoutes];
}
