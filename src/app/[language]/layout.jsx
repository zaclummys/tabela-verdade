import { Roboto } from 'next/font/google';

import '~/app/globals.css';

import getLocaleByLanguage from '~/locales';

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

export default function Layout ({ children }) {
    return (
        <html
            dir="ltr"
            lang="pt-BR">
            <body className={roboto.className}>
                {children}
            </body>
        </html>
    );
}
