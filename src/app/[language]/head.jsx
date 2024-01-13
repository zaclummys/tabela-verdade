import MetaGoogleVerificationSite from '~/app/[language]/meta-google-site-verification';
import MetaMicrosoftVerificationSite from '~/app/[language]/meta-microsoft-site-verification';

export default function Head ({ locale }) {
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
