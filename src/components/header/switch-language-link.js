import React from 'react';

import InternalLink from '../link/internal-link';

export default function SwitchLanguageLink ({ language }) {
    if (language === 'en-US') {
        return (
            <InternalLink url="/">
                Português (pt-BR)
            </InternalLink>
        );
    }

    if (language === 'pt-BR') {
        return (
            <InternalLink url="/en-US">
                English (en-US)
            </InternalLink>
        );
    }

    return null;
}