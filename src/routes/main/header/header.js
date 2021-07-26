import React from 'react';
import HeaderStyle from './header.css';

function HeaderTitle () {
    return (
        <h1 className={HeaderStyle.title}>Gerador de tabela-verdade</h1>
    );
}

function HeaderDescription () {
    return (
        <p className={HeaderStyle.description}>
            Esta é uma ferramenta que automatiza a criação da tabela-verdade de expressões lógicas.
            Ao digitar, a tabela atualizará automaticamente e exibirá todas as
            combinações possíveis. Além disso, você poderá acompanhar progressivamente o
            desenvolvimento da expressão lógica através das sub-expressões. Você poderá utilizar
            diversos caracteres para compor a expressão lógica.
        </p>
    );
}

export default function Header () {
    return (
        <header className={HeaderStyle.header}>
            <HeaderTitle />
            <HeaderDescription />
        </header>
    );
}
