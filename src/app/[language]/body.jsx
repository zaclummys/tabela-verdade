import { Roboto } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto({
    subsets: ['latin'],
    weight: [
        '400',
        '500',
        '700',
    ],
});

export default function Body ({ children }) {
    return (
        <body className={roboto.className}>
            {children}

            <Analytics />
        </body>
    );
}
