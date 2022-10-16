function getEnvironmentVariables () {
    return {
        GATSBY_SENTRY_DSN_URL: process.env.GATSBY_SENTRY_DSN_URL,
        GATSBY_PAYPAL_DONATE_URL: process.env.GATSBY_PAYPAL_DONATE_URL,
        GATSBY_GOOGLE_ANALYTICS_TRACKING_ID: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        GATSBY_GOOGLE_SITE_VERIFICATION_KEY: process.env.GATSBY_GOOGLE_SITE_VERIFICATION_KEY,
        GATSBY_MICROSOFT_SITE_VERIFICATION_KEY: process.env.GATSBY_MICROSOFT_SITE_VERIFICATION_KEY,
    };
}

function checkEnvironmentVariables (variables) {
    for (const [variableKey, variableValue] of Object.entries(variables)) {
        if (variableValue == null) {
            console.warn(`Environment variable '${variableKey}' is null`);
        }
    }
}

const environmentVariables = getEnvironmentVariables();

checkEnvironmentVariables(environmentVariables);

module.exports = {
    linkedInUrl: 'https://www.linkedin.com/in/isaac-luiz-vieira-ferreira/',
    repositoryUrl: 'https://github.com/zaclummys/tabela-verdade',
    donateUrl: environmentVariables.GATSBY_PAYPAL_DONATE_URL,

    sentryDsnUrl: environmentVariables.GATSBY_SENTRY_DSN_URL,
    paypalDonateUrl: environmentVariables.GATSBY_PAYPAL_DONATE_URL,
    googleAnalyticsTrackingId: environmentVariables.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
    googleSiteVerificationKey: environmentVariables.GATSBY_GOOGLE_SITE_VERIFICATION_KEY,
    microsoftSiteVerificationKey: environmentVariables.GATSBY_MICROSOFT_SITE_VERIFICATION_KEY,
};