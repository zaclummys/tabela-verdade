import React from 'react';
import FooterStyle from './footer.css';

function GithubLink () {
    return (
        <a className={FooterStyle.link} href="https://github.com/zaclummys" target="_blank" rel="noopener noreferrer">
            Isaac Luiz Vieira Ferreira
        </a>
    );
}

function RepositoryLink () {
    return (
        <a className={FooterStyle.link} href="https://github.com/zaclummys/tabela-verdade" target="_blank" rel="noopener noreferrer">
            Repositório
        </a>
    );
}

function ReportBugLink () {
    return (
        <a className={FooterStyle.link} href="https://github.com/zaclummys/tabela-verdade/issues/new" target="_blank" rel="noopener noreferrer">
            Relatar um problema
        </a>
    );
}

export default function Footer () {
    return (
        <footer className={FooterStyle.footer}>
            <p>
                Criado por <GithubLink /> | <RepositoryLink /> | <ReportBugLink />
            </p>
        </footer>
    );
}
