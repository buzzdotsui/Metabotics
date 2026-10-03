import { MetadataRoute } from 'next';
import { applications } from '@/data/applications';
import { researchItems } from '@/data/research';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://metabotics.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/technology',
    '/applications',
    '/research',
    '/about',
    '/contact',
  ].map(route => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const applicationRoutes = applications.map(app => ({
    url: `${siteUrl}${app.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const researchRoutes = researchItems.map(item => ({
    url: `${siteUrl}${item.href}`,
    lastModified: new Date(item.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...applicationRoutes, ...researchRoutes];
}