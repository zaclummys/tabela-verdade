import React from 'react';
import FooterStyle from './footer.css';

function GithubLink () {
    return (
        <a className={FooterStyle.link} href="https://github.com/zaclummys" target="_blank" rel="noreferrer">
            Isaac Luiz Vieira Ferreira
        </a>
    );
}

function EmailLink () {
    return (
        <a className={FooterStyle.link} href="mailto:isaacluizvieiraferreira@id.uff.br">
            isaacluizvieiraferreira@id.uff.br
        </a>
    );
}

export default function Footer () {
    return (
        <footer className={FooterStyle.footer}>
            <p>
                Criado por <GithubLink /> | <EmailLink />
            </p>
        </footer>
    );
}
