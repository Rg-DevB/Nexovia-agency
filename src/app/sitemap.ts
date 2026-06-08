import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexovia.io';
  
  // Routes statiques principales
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/process', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'yearly' as const },
    { path: '/events', priority: 0.7, changeFrequency: 'daily' as const },
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
