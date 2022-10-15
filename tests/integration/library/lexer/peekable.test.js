import Source from '../../../../src/library/source';
import Lexer from '../../../../src/library/lexer';
import PeekableLexer from '../../../../src/library/lexer/peekable';

import {
    Or,
    Not,
    Name,
    Conditional,
} from '../../../../src/library/tokens';

function createPeekableLexerFromString (string) {
    return new PeekableLexer(new Lexer(new Source(string)));
}

describe('Peekable Lexer', () => {
    it('Should peek token twice without consume it', () => {
        const lexer = createPeekableLexerFromString('a & b');

        expect(lexer.peek()).toEqual(new Name('a'));
        expect(lexer.peek()).toEqual(new Name('a'));
    });

    it('Should consume token after being peeked', () => {
        const lexer = createPeekableLexerFromString('x | y');

        expect(lexer.peek()).toEqual(new Name('x'));
        expect(lexer.next()).toEqual(new Name('x'));
    });

    it('Should peek another token after being consumed', () => {
        const lexer = createPeekableLexerFromString('abc -> xyz');

        expect(lexer.next()).toEqual(new Name('abc'));
        expect(lexer.peek()).toEqual(new Conditional());
    });

    it('Should check if peeked token is of specified type', () => {
        const lexer = createPeekableLexerFromString('¬');

        expect(lexer.isPeekTypeOf(Not)).toBeTruthy();
    });

    it('Should check if peeked token is not of specified type', () => {
        const lexer = createPeekableLexerFromString('&');

        expect(lexer.isPeekTypeOf(Or)).toBeFalsy();
    });
});