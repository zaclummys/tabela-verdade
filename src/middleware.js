import { NextResponse } from 'next/server';
import { Negotiator } from 'negotiator';

const availableLanguages = ['en-US', 'pt-BR'];

function getCurrentLanguageFromRequest (request) {
    const negotiator = new Negotiator({
        headers: {
            'accept-language': request.headers.get('accept-language'),
        },
    });

    return negotiator.language(availableLanguages);
}

function createRedirectUrlFromLanguage (request, language) {
    return new URL(language, request.url);
}

export function middleware (request) {
    const currentLanguage = getCurrentLanguageFromRequest(request);
    const redirectUrl = createRedirectUrlFromLanguage(request, currentLanguage);

    return NextResponse.redirect(redirectUrl);
}

export const config = {
    matcher: [
        '/'
    ],
};
