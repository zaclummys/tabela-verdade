import React from 'react';
import { Helmet } from 'react-helmet';

import {
    googleSiteVerificationKey,
    microsoftSiteVerificationKey,
} from '../../../config';

import LocaleContext from '../../contexts/locale';

export default function SEO () {
    return (
        <LocaleContext.Consumer>
            {locale => (
                <Helmet
                    htmlAttributes={{
                        lang: locale.language
                    }}>
                    <title>{locale.title}</title>

                    <meta name="description" content={locale.description} />

                    <meta name="og:title" content={locale.title} />
                    <meta name="og:description" content={locale.description} />

                    {googleSiteVerificationKey && (
                        <meta name="google-site-verification" content={googleSiteVerificationKey} />
                    )}

                    {microsoftSiteVerificationKey && (
                        <meta name="msvalidate.01" content={microsoftSiteVerificationKey} />
                    )}

                    <meta name="robots" content="index, follow" />
                </Helmet>
            )}
        </LocaleContext.Consumer>
    );
}