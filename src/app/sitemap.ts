import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vntrs.ai';

  const routes = [
    // English routes
    { url: `${baseUrl}/en`, priority: 1.0 },
    { url: `${baseUrl}/en/services`, priority: 0.9 },
    { url: `${baseUrl}/en/services/ai-consulting`, priority: 0.8 },
    { url: `${baseUrl}/en/services/ai-workshops`, priority: 0.8 },
    { url: `${baseUrl}/en/services/ai-inspiration-talks`, priority: 0.8 },
    { url: `${baseUrl}/en/industries`, priority: 0.9 },
    { url: `${baseUrl}/en/industries/event-industry`, priority: 0.8 },
    { url: `${baseUrl}/en/industries/private-equity`, priority: 0.8 },
    { url: `${baseUrl}/en/industries/niche-saas`, priority: 0.8 },
    { url: `${baseUrl}/en/case-studies`, priority: 0.7 },
    { url: `${baseUrl}/en/resources`, priority: 0.7 },
    { url: `${baseUrl}/en/contact`, priority: 0.8 },

    // Swedish routes
    { url: `${baseUrl}/sv`, priority: 1.0 },
    { url: `${baseUrl}/sv/tjanster`, priority: 0.9 },
    { url: `${baseUrl}/sv/tjanster/ai-konsulting`, priority: 0.8 },
    { url: `${baseUrl}/sv/tjanster/ai-workshops`, priority: 0.8 },
    { url: `${baseUrl}/sv/tjanster/ai-inspirationsforelasning`, priority: 0.8 },
    { url: `${baseUrl}/sv/branscher`, priority: 0.9 },
    { url: `${baseUrl}/sv/branscher/eventbranschen`, priority: 0.8 },
    { url: `${baseUrl}/sv/branscher/private-equity`, priority: 0.8 },
    { url: `${baseUrl}/sv/branscher/nischad-saas`, priority: 0.8 },
    { url: `${baseUrl}/sv/case`, priority: 0.7 },
    { url: `${baseUrl}/sv/resurser`, priority: 0.7 },
    { url: `${baseUrl}/sv/kontakt`, priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }));
}
