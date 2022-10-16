import React from 'react';

import {
    linkedInUrl,
    repositoryUrl,
    donateUrl,
} from '../../../config';

import LocaleContext from '../../contexts/locale';
import ExternalLink from '../link/external-link';

export default function Footer () {
    return (
        <LocaleContext.Consumer>
            {locale => (
                <footer className="my-8 text-center flex justify-center flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-3 print:hidden">
                    <ExternalLink url={linkedInUrl}>Isaac Luiz Vieira Ferreira</ExternalLink>
                    <ExternalLink url={donateUrl}>{locale.footerDonateLink}</ExternalLink>
                    <ExternalLink url={repositoryUrl}>{locale.footerRepositoryLink}</ExternalLink>
                </footer>
            )}
        </LocaleContext.Consumer>
    );
}