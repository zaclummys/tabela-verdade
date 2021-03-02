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
            interpretações possíveis. Além disso, você poderia acompanhar passo a passo o
            desenvolvimento da expressão lógica através das sub-expressões. Você poderá utilizar
            diversos caracteres para compor a expressão lógica.
            Negação: <b>&#xAC;</b>, <b>&#x7E;</b>, <b>&#x21;</b>.
            Conjunção: <b>&#x2227;</b>, <b>&#x26;</b>, <b>&#x2A;</b>.
            Disjunção: <b>&#x2228;</b>, <b>&#x7C;</b>, <b>&#x2B;</b>.
            Implicação: <b>&#x2192;</b>, <b>&#x21D2;</b>, <b>-&#x3E;</b>.
            Equivalência: <b>&#x2192;</b>, <b>&#x21D2;</b>, <b>&#x3C;-&#x3E;</b>.
        </p>
    );
}

export default function Header () {
    return (
        <header>
            <HeaderTitle />
            <HeaderDescription />
        </header>
    );
}
