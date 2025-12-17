import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    // Apna actual domain yahan daalna jab live ho jaye
    const baseUrl = 'https://wayfinder.com'

    return {
        rules: {
            userAgent: '*', // Sabhi bots ke liye (Google, Bing, etc.)
            allow: '/',     // Puri site allowed hai
            disallow: [
                '/api/',      // API routes mat scan karo
                '/admin/',    // Admin panel mat scan karo
                '/private/',  // Private folder mat scan karo
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`, // Sitemap ka link taaki Google rasta dhund sake 
    }
}