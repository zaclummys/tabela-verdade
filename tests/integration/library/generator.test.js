import Source from '../../../src/library/source';
import Lexer from '../../../src/library/lexer';
import PeekableLexer from '../../../src/library/lexer/peekable';
import Parser from '../../../src/library/parser';

import Generator from '../../../src/library/generator';

function createGeneratorFromString (string) {
    return new Generator(new Parser(new PeekableLexer(new Lexer(new Source(string)))));
}

describe('Generator', () => {
    it('Should generate table', () => {
        const generator = createGeneratorFromString('a & b -> c');

        expect(generator.generate()).toEqual([
            ['a', 'b', 'c', 'a ∧ b', '(a ∧ b) → c'],
            [
                [true, true, true, true, true],
                [true, true, false, true, false],
                [true, false, true, false, true],
                [true, false, false, false, true],
                [false, true, true, false, true],
                [false, true, false, false, true],
                [false, false, true, false, true],
                [false, false, false, false, true]]
        ]);
    });
})