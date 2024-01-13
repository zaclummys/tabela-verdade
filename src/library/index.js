import Source from './source';
import Lexer from './lexer';
import PeekableLexer from './lexer/peekable';
import Parser from './parser';
import Generator from './generator';

export default function generateTruthTable (string) {
    const source = new Source(string);
    const lexer = new PeekableLexer(new Lexer(source));
    const parser = new Parser(lexer);

    const expression = parser.parse();

    const generator = new Generator(expression);

    return generator.generate();
}
