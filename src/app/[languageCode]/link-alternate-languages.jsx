import { getAvailableLanguages } from 'src/languages';

export default function LinkAlternateLanguages () {
    const availableLanguages = getAvailableLanguages();

    return (
        <>
            {availableLanguages.map(availableLanguage => (
                <link
                    rel="alternate"
                    key={availableLanguage.code}
                    hrefLang={availableLanguage.code}
                    href={availableLanguage.absoluteUrl.toString()}
                />
            ))}
        </>
    );
}
