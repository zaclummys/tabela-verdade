import React from 'react';

import LocaleContext from '../../contexts/locale';

import ExternalLink from '../link/external-link';

import {
    linkedInUrl,
    repositoryUrl,
    reportProblemUrl,
} from '../../../config';

export default function Footer () {
    return (
        <LocaleContext.Consumer>
            {locale => (
                <footer className="my-8 text-center flex justify-center flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-3">
                    <ExternalLink url={linkedInUrl}>Isaac Luiz Vieira Ferreira</ExternalLink>
                    <ExternalLink url={repositoryUrl}>{locale.footerRepositoryLink}</ExternalLink>
                    <ExternalLink url={reportProblemUrl}>{locale.footerReportProblemLink}</ExternalLink>
                </footer>
            )}
        </LocaleContext.Consumer>
    );
}