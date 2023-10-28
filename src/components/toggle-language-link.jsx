import CustomLink from '~/components/custom-link';
export default function ToggleLanguageLink ({ language }) {
    switch (language) {
        case 'en-US':
            return (
                <CustomLink href="/pt-BR">
                    Português (pt-BR)
                </CustomLink>
            );

        case 'pt-BR':
            return (
                <CustomLink href="/en-US">
                    English (en-US)
                </CustomLink>
            );

        default:
            throw new Error(`Unexpected language: ${language}`);
    }
}
