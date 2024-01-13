const enUS = {
    code: 'en-US',
    label: 'English (en-US)',

    direction: 'ltr',

    title: 'Truth table | Generate truth tables online',
    description: 'Tool to automate the creation of truth table using logical expressions online.',

    headerTitle: 'Truth table generator',
    headerDescription: `
        Welcome to the truth table generator, where logic meets simplicity!
        Whether you're a student studying logic, a computer scientist designing algorithms, or just someone curious about the inner workings of logical expressions, our tool is here to ease your journey.
        With our Truth Table Generator, you can effortlessly analyze and visualize the validity of logical expressions.
        Just input your expression, and we take care of the rest. Our tool considers the precedence of expressions, following the order: Variable → Negation → Conjunction → Disjunction → Conditional → Biconditional.
        It breaks down your expression step by step, starting with individual variables and systematically evaluating subexpressions until the complete expression is resolved.
        This interactive tool is perfect for understanding the complexities of logic, making complex logical problems more accessible.
        Try it now and gain a deeper understanding of the world of logical reasoning!
    `,


    truthTableTrueCellLabel: 'T',
    truthTableFalseCellLabel: 'F',

    expressionInputHint: 'Write a logical expression. For example, (A ∧ B) → (C ∨ D).',
    truthTableHint: 'Write a logical expression in the field above to generate the truth table.',

    parenthesesOperatorButtonBlockLabel: 'Parentheses',
    negationOperatorButtonBlockLabel: 'Negation',
    conjunctionOperatorButtonBlockLabel: 'Conjunction',
    disjunctionOperatorButtonBlockLabel: 'Disjunction',
    conditionalOperatorButtonBlockLabel: 'Conditional',
    biconditionalOperatorButtonBlockLabel: 'Biconditional',

    footerRepositoryLinkLabel: 'Repository',
};

export default enUS;
