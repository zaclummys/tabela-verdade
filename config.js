const GATSBY_GOOGLE_SITE_VERIFICATION_KEY = process.env.GATSBY_GOOGLE_SITE_VERIFICATION_KEY;
const GATSBY_GOOGLE_ANALYTICS_TRACKING_ID = process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID;

module.exports = {
    name: 'Tabela-verdade',
    metadata: {
        title: 'Tabela-verdade | Gerar tabelas-verdade automaticamente',
        description: 'Ferramenta para automatizar a criação da tabela-verdade de expressões lógicas',
        keywords: 'gerador, tabela, verdade, expressão',
        robots: 'index, follow',
    },
    googleSiteVerificationKey: GATSBY_GOOGLE_SITE_VERIFICATION_KEY,
    googleAnalyticsTrackingId: GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
};