import CustomLink from '~/components/custom-link';
import { getAvailableLanguages } from '~/languages';

export default function ToggleLanguageLink ({ languageCode }) {
    const alternateLanguages = getAvailableLanguages()
        .filter(availableLanguage => availableLanguage.code !== languageCode);

    return (
        <>
            {alternateLanguages.map(alternateLanguage => (
                <CustomLink
                    key={alternateLanguage.code}
                    href={alternateLanguage.absoluteUrl.toString()}
                >
                    {alternateLanguage.label}
                </CustomLink>
            ))}
        </>
    );
}
