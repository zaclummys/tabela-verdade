import React from 'react';

import Head from '../components/head/head';

import Footer from '../components/footer/footer';
import TruthTableContainer from '../components/truth-table-container/truth-table-container';

export default function Index () {
    return (
        <>
            <Head />

            <section className="container mx-auto mt-8 px-8">
                <h1 className="my-4 text-3xl font-bold text-primary">
                    Gerador de tabela-verdade
                </h1>

                <p className="my-6">
                    Esta é uma ferramenta que automatiza a criação da tabela-verdade de expressões lógicas.
                    Ao digitar, a tabela atualizará automaticamente e exibirá todas as combinações possíveis.
                    Além disso, você poderá acompanhar progressivamente o desenvolvimento da expressão lógica através das
                    sub-expressões.
                    Você poderá utilizar diversos caracteres para compor a expressão lógica.
                    A precedência dos operadores é a seguinte: Variável → Negação → Conjunção → Disjunção → Implicação e
                    Equivalência.
                </p>

                <TruthTableContainer />

                <Footer />
            </section>
        </>
    );
}