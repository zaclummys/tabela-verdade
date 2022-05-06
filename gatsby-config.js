const {
    sentryDsnUrl,
    googleAnalyticsTrackingId,
} = require('./config');

const plugins = [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
];

if (googleAnalyticsTrackingId) {
    plugins.push({
        resolve: `gatsby-plugin-google-gtag`,
        options: {
            trackingIds: [
                googleAnalyticsTrackingId,
            ],
            pluginConfig: {
                head: false,
            },
        }
    });
}

if (sentryDsnUrl) {
    plugins.push({
        resolve: "@sentry/gatsby",
            options: {
                sampleRate: 1.0,
                dsn: sentryDsnUrl,
            },
        }
    );
}

module.exports = {
    plugins,
    trailingSlash: 'never',
};
