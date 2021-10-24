import Source from './source';
import Lexer from './lexer';
import Parser from './parser';
import Compiler from './compiler';
import Table from './table';

export default function generate (input) {
    const source = new Source(input);
    const lexer = new Lexer(source);
    const parser = new Parser(lexer);

    const expression = parser.parse();

    const compiler = new Compiler();

    compiler.compile(expression);

    const variables = compiler.getVariables();
    const expressions = compiler.getExpressions();

    const table = new Table(variables, expressions);

    return table.generate();
}
