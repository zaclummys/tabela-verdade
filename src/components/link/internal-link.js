import React from 'react';
import { Link } from 'gatsby';

import LinkText from './link-text';

export default function InternalLink ({ url, children }) {
    return (
        <Link to={url}>
            <LinkText>
                {children}
            </LinkText>
        </Link>
    );
}