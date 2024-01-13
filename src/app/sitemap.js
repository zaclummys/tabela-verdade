import { getAvailableLanguages } from 'src/languages';

export default function sitemap () {
    return getAvailableLanguages()
        .map(availableLanguage => availableLanguage.absoluteUrl)
        .map(availableLanguageUrl => ({
            url: availableLanguageUrl,
        }));
}
