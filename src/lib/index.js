import Source from './source';
import Lexer from './lexer';
import Parser from './parser';
import Compiler from './compiler';
import Interpreter from './interpreter';

export default async function create (input) {
    // Parser
    const source = new Source(input);
    const lexer = new Lexer(source);
    const parser = new Parser(lexer);

    const expression = parser.parse();

    // Compiler
    const compiler = new Compiler();

    compiler.compile(expression);

    // Interpreter
    const interpreter = new Interpreter(compiler.names, compiler.expressions);

    interpreter.interpret();

    return {
        matrix: interpreter.matrix,
        expressions: compiler.expressions,
    };
}
