import React from 'react';
import { Helmet } from 'react-helmet';

import { metadata } from '../../../config';

export default function Metadata () {
    const {
        title,
        robots,
        keywords,
        description,
        googleSiteVerificationKey,
    } = metadata;

    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={robots} />

            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />

            <meta name="google-site-verification" content={googleSiteVerificationKey} />
        </Helmet>
    );
}