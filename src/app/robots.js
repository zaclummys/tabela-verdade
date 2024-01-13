import { mergeUrl } from '~/config';

export default function robots () {
    const sitemapUrl =  mergeUrl('sitemap.xml');

    return {
        sitemap: sitemapUrl,
        rules: {
            userAgent: '*',
            allow: '/',
        },
    }
}
