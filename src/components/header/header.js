import React from 'react';

export default function Header () {
    return (
        <header className="my-8">
            <h1 className="text-3xl font-bold text-primary">
                Gerador de tabela-verdade
            </h1>

            <p className="my-6">
                Esta é uma ferramenta que facilita a geração da tabela-verdade de expressões lógicas.
                Ao digitar, a tabela atualizará automaticamente e exibirá todas as combinações possíveis.
                Além disso, você poderá acompanhar progressivamente o desenvolvimento da expressão lógica através das
                sub-expressões.
                Você poderá utilizar diversos caracteres para compor a expressão lógica.
                A precedência das expressões é a seguinte: Variável → Negação → Conjunção → Disjunção → Condicional →
                Bicondicional.
            </p>
        </header>
    );
}