import { MetadataRoute } from 'next';
import { inventoryData } from '@/data/inventory';

export const dynamic = 'force-static';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://harrishkumar-hub.github.io/TST'
  : 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/inventory', '/inspection', '/contact', '/testimonials'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })
  );

  const inventoryRoutes = inventoryData.map((item) => ({
    url: `${baseUrl}/inventory/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [...routes, ...inventoryRoutes];
}
