const {
    name,
    metadata,
    googleAnalyticsTrackingId,
} = require('./config');

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                short_name: name,
                name: metadata.title,
                description: metadata.description,
                icon: 'src/images/favicon.png',
                display: 'standalone',
                lang: 'pt-BR',
                start_url: '/',
                theme_color: '#ffffff',
                background_color: '#52c41a',
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    googleAnalyticsTrackingId,
                ],
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
};
