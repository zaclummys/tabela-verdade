import React from 'react';

import LinkText from './link-text';

export default function ExternalLink ({ url, children }) {
    return (
        <a target="_blank" href={url}>
            <LinkText>
                {children}
            </LinkText>
        </a>
    );
}