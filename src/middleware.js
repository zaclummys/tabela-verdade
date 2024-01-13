import { Negotiator } from 'negotiator';
import { NextResponse } from 'next/server';

import { getAvailableLanguages } from 'src/languages';

function getCurrentLanguageFromRequest (request) {
    const availableLanguageCodes = getAvailableLanguages()
        .map(availableLanguage => availableLanguage.code);

    const negotiator = new Negotiator({
        headers: {
            'accept-language': request.headers.get('accept-language'),
        },
    });

    return negotiator.language(availableLanguageCodes);
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
        '/',
    ],
};
