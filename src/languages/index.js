import enUS from './en-us';
import ptBR from './pt-br';

import { mergeUrl, url } from '~/config';

const languages = [
    enUS,
    ptBR,
];

export function getAvailableLanguages () {
    return languages.map(({ code, label }) => {
        const absoluteUrl = mergeUrl(code);

        return {
            code,
            label,
            absoluteUrl,
        };
    });
}

export function findLanguageByCode (languageCode) {
    const foundLanguage = languages.find(language => language.code === languageCode);

    if (!foundLanguage) {
        throw new Error(`Unexpected language code: ${languageCode}`);
    }

    return foundLanguage;
}
