module.exports = {
    siteMetadata: {
        title: 'Tabela-verdade | Gerar tabelas-verdade automaticamente',
        description: 'Ferramenta para automatizar a criação da tabela-verdade de expressões lógicas',
        image: './static/favicon.png'
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Tabela-verdade | Gerar tabelas-verdade automaticamente',
                short_name: 'Tabela-verdade',
                description: 'Ferramenta para automatizar a criação da tabela-verdade de expressões lógicas',
                icon: 'src/images/favicon.png',
                display: 'standalone',
                lang: 'pt-BR',
                start_url: '/',
                theme_color: '#ffffff',
                background_color: '#52c41a',
            }
        },
        'gatsby-plugin-offline',
    ],
};
