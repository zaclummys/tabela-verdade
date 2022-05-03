function checkEnvironmentVariables (variables) {
    for (const [variableKey, variableValue] of Object.entries(variables)) {
        if (variableValue == null) {
            console.warn(`Environment variable '${variableKey}' is null`);
        }
    }
}

const GATSBY_SENTRY_DSN_URL = process.env.GATSBY_SENTRY_DSN_URL;
const GATSBY_GOOGLE_SITE_VERIFICATION_KEY = process.env.GATSBY_GOOGLE_SITE_VERIFICATION_KEY;
const GATSBY_GOOGLE_ANALYTICS_TRACKING_ID = process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID;

checkEnvironmentVariables({
    GATSBY_SENTRY_DSN_URL,
    GATSBY_GOOGLE_SITE_VERIFICATION_KEY,
    GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
});

module.exports = {
    name: 'Tabela-verdade',
    metadata: {
        title: 'Tabela-verdade | Gerar tabelas-verdade automaticamente',
        description: 'Ferramenta para automatizar a criação da tabela-verdade de expressões lógicas on-line.',
        keywords: 'gerador, tabela, verdade, expressão, on-line',
        robots: 'index, follow',
    },
    sentryDsnUrl: GATSBY_SENTRY_DSN_URL,
    googleSiteVerificationKey: GATSBY_GOOGLE_SITE_VERIFICATION_KEY,
    googleAnalyticsTrackingId: GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
};