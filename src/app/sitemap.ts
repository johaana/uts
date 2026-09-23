import { MetadataRoute } from 'next';
import { metadata } from './layout';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = metadata.metadataBase;

    if (!siteUrl) {
        return [];
    }

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: siteUrl.toString(), lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 1.0 },
        { url: new URL('/date-intelligence', siteUrl).toString(), lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 0.9 },
        { url: new URL('/built-for', siteUrl).toString(), lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
        { url: new URL('/api', siteUrl).toString(), lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.8 },
        { url: new URL('/travel-insurance', siteUrl).toString(), lastModified: new Date().toISOString(), changeFrequency: 'weekly', priority: 0.6 },
        { url: new URL('/temp-tracker-lab', siteUrl).toString(), lastModified: new Date().toISOString(), changeFrequency: 'daily', priority: 0.1 },
    ];

    return [...staticRoutes];
}
