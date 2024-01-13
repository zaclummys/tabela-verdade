import LinkAlternateLanguages from './link-alternate-languages';
import MetaGoogleVerificationSite from './meta-google-site-verification';
import MetaMicrosoftVerificationSite from './meta-microsoft-site-verification';

export default function Head ({ language }) {
    return (
        <head>
            <meta
                name="description"
                content={language.description}
            />

            <meta
                name="og:title"
                content={language.title}
            />

            <meta
                name="og:description"
                content={language.description}
            />

            <meta
                name="robots"
                content="index, follow"
            />

            <LinkAlternateLanguages />

            <MetaGoogleVerificationSite />

            <MetaMicrosoftVerificationSite />
        </head>
    );
}
