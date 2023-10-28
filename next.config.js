/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: () => [
        {
            source: '/',
            destination: '/pt-BR',
            permanent: true,
        },
    ],
};

module.exports = nextConfig;
