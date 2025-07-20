import type { MetadataRoute } from 'next'
import { getArticles } from './writing/article-utils'

export const baseUrl = 'https://jarrettcura.dev'

export default function sitemap(): MetadataRoute.Sitemap {
    let articles = getArticles().map((article) => ({
        url: `${baseUrl}/writing/${article.slug}`,
        lastModified: article.metadata.created,
    }))

    let routes = ['', '/writing'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...articles]
}