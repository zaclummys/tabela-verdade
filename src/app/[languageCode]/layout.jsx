import '~/app/globals.css';

import { findLanguageByCode } from 'src/languages';

import Head from './head';
import Body from './body';

export const generateMetadata = ({ params: { languageCode } }) => {
    const { title, description } = findLanguageByCode(languageCode);

    return {
        title,
        description,
    };
};

export default function Layout ({
    children,
    params: { languageCode },
}) {
    const language = findLanguageByCode(languageCode);

    return (
        <html
            dir={language.direction}
            lang={language.code}
        >
            <Head
                language={language}
            />

            <Body>
                {children}
            </Body>
        </html>
    );
}
