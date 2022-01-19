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
                    head: false,
                },
            },
        },
        {
            resolve: "@sentry/gatsby",
            options: {
                sampleRate: 1.0,
                dsn: "https://8d76fd9ab6a14de9b080ae487d55cb9d@o1121364.ingest.sentry.io/6157817",
            },
        },
    ],
};
