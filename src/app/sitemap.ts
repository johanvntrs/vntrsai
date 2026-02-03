import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vntrs.ai';

  const routes = [
    // English routes
    { url: `${baseUrl}/en`, priority: 1.0 },
    { url: `${baseUrl}/en/services`, priority: 0.9 },
    { url: `${baseUrl}/en/services/ai-training`, priority: 0.8 },
    { url: `${baseUrl}/en/services/ai-workshops`, priority: 0.8 },
    { url: `${baseUrl}/en/services/ai-inspiration-talks`, priority: 0.8 },
    { url: `${baseUrl}/en/contact`, priority: 0.8 },

    // Swedish routes
    { url: `${baseUrl}/sv`, priority: 1.0 },
    { url: `${baseUrl}/sv/tjanster`, priority: 0.9 },
    { url: `${baseUrl}/sv/tjanster/ai-utbildning`, priority: 0.8 },
    { url: `${baseUrl}/sv/tjanster/ai-workshops`, priority: 0.8 },
    { url: `${baseUrl}/sv/tjanster/ai-inspirationsforelasning`, priority: 0.8 },
    { url: `${baseUrl}/sv/kontakt`, priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }));
}
