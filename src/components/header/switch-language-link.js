import React from 'react';

import InternalLink from '../link/internal-link';

export default function SwitchLanguageLink ({ language }) {
    switch (language) {
        case 'en-US':
            return (
                <InternalLink url="/">
                    Português (pt-BR)
                </InternalLink>
            );

        case 'pt-BR':
            return (
                <InternalLink url="/en-US">
                    English (en-US)
                </InternalLink>
            );

        default:
            return null;
    }
}