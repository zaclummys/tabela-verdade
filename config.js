const {
    GATSBY_GOOGLE_SITE_VERIFICATION_KEY,
    GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
} = process.env;

module.exports = {
    name: 'Tabela-verdade',
    metadata: {
        title: 'Tabela-verdade | Gerar tabelas-verdade automaticamente',
        description: 'Ferramenta para automatizar a criação da tabela-verdade de expressões lógicas',
        keywords: 'gerador, tabela, verdade, expressão, lógica, matemática',
        robots: 'index, follow',
    },
    googleSiteVerificationKey: GATSBY_GOOGLE_SITE_VERIFICATION_KEY,
    googleAnalyticsTrackingId: GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
};