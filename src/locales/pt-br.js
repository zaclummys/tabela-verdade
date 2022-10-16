const ptBR = {
    language: 'pt-BR',

    title: 'Tabela-verdade | Gerar tabelas-verdade on-line',
    description: 'Ferramenta para automatizar a criação de tabela-verdade usando expressões lógicas on-line.',

    headerTitle: 'Gerador de tabela-verdade',
    headerDescription: `
        Esta é uma ferramenta que facilita a geração de tabela-verdade usando expressões lógicas on-line.
        Ao digitar, a tabela atualizará automaticamente com todo o passo-a-passo da geração.
        Dessa forma, você poderá acompanhar progressivamente o desenvolvimento da expressão lógica através das
        sub-expressões.
        Você poderá utilizar diversos caracteres para compor as expressões lógicas.
        A precedência das expressões é a seguinte: Variável → Negação → Conjunção → Disjunção → Condicional →
        Bicondicional.
    `,

    truthTableHint: 'Digite uma expressão lógica no campo acima para gerar a tabela-verdade.',

    truthTableTrueCell: 'V',
    truthTableFalseCell: 'F',

    truthTableInputHint: 'Digite a expressão lógica. Por exemplo (A ∧ B) → (C ∨ D).',
    truthTableOperatorParentheses: 'Parênteses',
    truthTableOperatorNegation: 'Negação',
    truthTableOperatorConjunction: 'Conjunção',
    truthTableOperatorDisjunction: 'Disjunção',
    truthTableOperatorConditional: 'Condicional',
    truthTableOperatorBiconditional: 'Bicondicional',

    footerRepositoryLink: 'Repositório',
    footerDonateLink: 'Doar',
};

export default ptBR;