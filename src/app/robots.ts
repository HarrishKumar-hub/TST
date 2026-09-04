import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://harrishkumar-hub.github.io/TST'
  : 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
