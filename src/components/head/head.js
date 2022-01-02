import React from 'react';
import { Helmet } from 'react-helmet';

import config from '../../../config';

export default function Head () {
    const {
        title,
        robots,
        keywords,
        description,
    } = config.metadata;

    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={robots} />

            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
        </Helmet>
    );
}