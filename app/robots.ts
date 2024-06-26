import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://your-site.com'

  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
