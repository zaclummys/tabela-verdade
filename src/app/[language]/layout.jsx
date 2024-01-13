import '~/app/globals.css';

import getLocaleByLanguage from '~/locales';

import Head from '~/app/[language]/head';
import Body from '~/app/[language]/body';

export const generateMetadata = ({ params: { language } }) => {
    const { title, description } = getLocaleByLanguage(language);

    return {
        title,
        description,
    };
};

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
            <Head locale={locale} />

            <Body>
                {children}
            </Body>
        </html>
    );
}
