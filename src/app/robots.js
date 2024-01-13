import { url } from '~/config';

export default function robots (x) {
    const sitemapUrl =  new URL('/sitemap.xml', url);

    return {
        sitemap: sitemapUrl,
        rules: {
            userAgent: '*',
            allow: '/',
        },
    }
}
