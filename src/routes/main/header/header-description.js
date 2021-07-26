import React from 'react';

import HeaderStyle from './header.css';

export default function HeaderDescription () {
    return (
        <p className={HeaderStyle.description}>
            Esta é uma ferramenta que automatiza a criação da tabela-verdade de expressões lógicas.
            Ao digitar, a tabela atualizará automaticamente e exibirá todas as
            combinações possíveis. Além disso, você poderá acompanhar progressivamente o
            desenvolvimento da expressão lógica através das sub-expressões. Você poderá utilizar
            diversos caracteres para compor a expressão lógica.
            A precedência dos operadores é a seguinte: Variável → Negação → Conjunção →  Disjunção → Implicação e Equivalência.
        </p>
    );
}
