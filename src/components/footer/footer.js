import React from 'react';

import Link from '../link/link';

const links = {
    linkedIn: 'https://www.linkedin.com/in/isaac-luiz-vieira-ferreira/',
    repository: 'https://github.com/zaclummys/tabela-verdade',
    repositoryReportProblem: 'https://github.com/zaclummys/tabela-verdade/issues/new',
};

export default function Footer () {
    return (
        <footer className="my-8 text-center text-sm">
            <Link url={links.linkedIn}>Isaac Luiz Vieira Ferreira</Link>
            <span>|</span>
            <Link url={links.repository}>Repositório</Link>
            <span>|</span>
            <Link url={links.repositoryReportProblem}>Relatar um problema</Link>
        </footer>
    );
}