import { MetadataRoute } from 'next';
import { sportsData } from '@/data/sports';

const URL = 'https://theroyalsportsclub.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const sports = Object.keys(sportsData).map((slug) => ({
    url: `${URL}/sports/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const magazineArticles = [
    'evolution-of-lawn-tennis',
    'golf-sport-of-business',
    'exclusive-sporting-clubs',
    'polo-sport-of-kings'
  ].map((slug) => ({
    url: `${URL}/magazine/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const staticRoutes = ['', '/magazine', '/history', '/learn', '/about', '/contact'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  return [...staticRoutes, ...sports, ...magazineArticles];
}
