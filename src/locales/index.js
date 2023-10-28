import enUS from './en-us';
import ptBR from './pt-br';

export default function getLocaleByLanguage (language) {
    switch (language) {
        case 'en-US':
            return enUS;

        case 'pt-BR':
            return ptBR;

        default:
            throw new Error(`Unexpected language: ${language}`);
    }
}
