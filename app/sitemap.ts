import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    // Jab domain kharid loge tab isse replace kar dena (e.g., https://wayfinder.co.in)
    const baseUrl = 'https://wayfinder.com'

    // 1. Static Pages List
    const staticPages = [
        '',             // Home
        '/product',
        '/features',
        '/technology',
        '/services',
        '/developers',
        '/pricing',
        '/about',
        '/contact',
        '/solutions',    // Hub page
    ]

    // 2. Dynamic Solution Pages (Jo humne banaye hain)
    const industries = [
        'malls',
        'hospitals',
        'offices',
        'airports',
        'universities',
    ]

    // 3. Generate Static URLs
    const staticUrls = staticPages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8, // Home page ki priority 1, baaki 0.8
    }))

    // 4. Generate Dynamic Industry URLs
    const industryUrls = industries.map((industry) => ({
        url: `${baseUrl}/solutions/${industry}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9, // Ye pages high value hain isliye high priority
    }))

    // 5. Combine and Return
    return [...staticUrls, ...industryUrls]
}