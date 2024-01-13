import { Analytics } from '@vercel/analytics/react';

import { Roboto } from 'next/font/google';

import '~/app/globals.css';

import getLocaleByLanguage from '~/locales';
import {
    googleSiteVerification,
    microsoftSiteVerification,
} from '~/config';

const roboto = Roboto({
    subsets: ['latin'],
    weight: [
        '400',
        '500',
        '700',
    ],
});

export const generateMetadata = ({ params: { language } }) => {
    const { title, description } = getLocaleByLanguage(language);

    return {
        title,
        description,
    };
};

function MetaGoogleVerificationSite () {
    if (!googleSiteVerification) {
        return null;
    }

    return (
        <meta
            name="google-site-verification"
            content={googleSiteVerification}
        />
    );
}

function MetaMicrosoftVerificationSite () {
    if (!microsoftSiteVerification) {
        return null;
    }

    return (
        <meta
            name="msvalidate.01"
            content={microsoftSiteVerification}
        />
    );
}

function Head ({ locale }) {
    return (
        <head>
            <meta charSet="utf-8" />

            <title>
                {locale.title}
            </title>

            <meta
                name="description"
                content={locale.description}
            />

            <meta
                name="og:title"
                content={locale.title}
            />

            <meta
                name="og:description"
                content={locale.description}
            />

            <meta
                name="robots"
                content="index, follow"
            />

            <MetaGoogleVerificationSite />

            <MetaMicrosoftVerificationSite />
        </head>
    );
}

function Body ({ children }) {
    return (
        <body className={roboto.className}>
            {children}

            <Analytics />
        </body>
    );
}

export default function Layout ({
    children,
    params: { language },
}) {
    const locale = getLocaleByLanguage(language);

    return (
        <html
            dir={locale.direction}
            lang={locale.language}
        >
            <Head
                locale={locale} />

            <Body>
                {children}
            </Body>
        </html>
    );
}
