import Source from './source';
import Lexer from './lexer';
import Parser from './parser';
import Compiler from './compiler';
import Table from './table';

function normalize (rows, expressions) {
    const normalizedRows = [];

    for (const values of rows) {
        const normalizedValues = [];

        for (const value of values) {
            normalizedValues.push(value);
        }

        normalizedRows.push(normalizedValues);
    }

    const normalizedExpressions = [];

    for (const expression of expressions) {
        normalizedExpressions.push(expression.present());
    }

    return {
        rows: normalizedRows,
        expressions: normalizedExpressions,
    };
}

export default function generateTruthTable (input) {
    const source = new Source(input);
    const lexer = new Lexer(source);
    const parser = new Parser(lexer);

    const expression = parser.parse();

    const compiler = new Compiler();

    compiler.compile(expression);

    const variables = compiler.getVariables();
    const expressions = compiler.getExpressions();

    const table = new Table(variables, expressions);

    const rows = table.generate();

    return normalize(rows, expressions);
}
