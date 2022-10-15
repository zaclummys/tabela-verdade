import Source from './source';
import Lexer from './lexer';
import PeekableLexer from './lexer/peekable';
import Parser from './parser';
import Generator from './generator';
import Cache from './cache';

const cache = new Cache();

export default function generateTruthTable (string) {
    return cache.getOrInsertWith(string, () => {
        const source = new Source(string);
        const lexer = new PeekableLexer(new Lexer(source));
        const parser = new Parser(lexer);
        const generator = new Generator(parser);

        return generator.generate();
    });
}
