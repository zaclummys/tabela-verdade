import Source from '../../../src/library/source';
import Lexer from '../../../src/library/lexer';
import {
    And,
    Biconditional,
    ClosingParenthesis,
    Conditional,
    End,
    Name,
    Not,
    OpeningParenthesis,
    Or,
} from '../../../src/library/tokens';

function createLexerFromString (string) {
    return new Lexer(new Source(string));
}

describe('Lexer', () => {
    describe('Whitespace', () => {
        it.each([
            '\n',
            '\r',
            '\t',
            '\v',
            '\b',
            '\f',
            '\x20',
            '\xA0',
        ])('Should skip whitespace', (whitespace) => {
            const whitespaces = whitespace.repeat(10);

            const lexer = createLexerFromString( whitespaces + 'abc');

            expect(lexer.next()).toEqual(new Name('abc'));
        });
    });

    describe('Not', () => {
        it('Should consume ~ as not token', () => {
            const lexer = createLexerFromString('~');

            expect(lexer.next()).toBeInstanceOf(Not);
        });

        it('Should consume ! as not token', () => {
            const lexer = createLexerFromString('!');

            expect(lexer.next()).toBeInstanceOf(Not);
        });

        it('Should consume ¬ as not token', () => {
            const lexer = createLexerFromString('¬');

            expect(lexer.next()).toBeInstanceOf(Not);
        });
    });

    describe('And', () => {
        it('Should consume ^ as and token', () => {
            const lexer = createLexerFromString('^');

            expect(lexer.next()).toBeInstanceOf(And);
        });

        it('Should consume * as and token', () => {
            const lexer = createLexerFromString('*');

            expect(lexer.next()).toBeInstanceOf(And);
        });

        it('Should consume & as and token', () => {
            const lexer = createLexerFromString('&');

            expect(lexer.next()).toBeInstanceOf(And);
        });

        it('Should consume ∧ as and token', () => {
            const lexer = createLexerFromString('∧');

            expect(lexer.next()).toBeInstanceOf(And);
        });
    });

    describe('Or', () => {
        it('Should consume + as or token', () => {
            const lexer = createLexerFromString('+');

            expect(lexer.next()).toBeInstanceOf(Or);
        });

        it('Should consume | as or token', () => {
            const lexer = createLexerFromString('|');

            expect(lexer.next()).toBeInstanceOf(Or);
        });

        it('Should consume ∨ as or token', () => {
            const lexer = createLexerFromString('∨');

            expect(lexer.next()).toBeInstanceOf(Or);
        });
    });

    describe('Conditional', () => {
        it('Should consume → as conditional token', () => {
            const lexer = createLexerFromString('→');

            expect(lexer.next()).toBeInstanceOf(Conditional);
        });

        it('Should consume ⇒ as conditional token', () => {
            const lexer = createLexerFromString('⇒');

            expect(lexer.next()).toBeInstanceOf(Conditional);
        });

        it('Should consume -> as conditional token', () => {
            const lexer = createLexerFromString('->');

            expect(lexer.next()).toBeInstanceOf(Conditional);
        });

        it('Should throw error if only - was found', () => {
            const lexer = createLexerFromString('-');

            expect(() => lexer.next())
                .toThrowError('Expected character: >');
        });
    });

    describe('Biconditional', () => {
        it('Should consume ↔ as biconditional token', () => {
            const lexer = createLexerFromString('↔');

            expect(lexer.next()).toBeInstanceOf(Biconditional);
        });

        it('Should consume ⇔ as biconditional token', () => {
            const lexer = createLexerFromString('⇔');

            expect(lexer.next()).toBeInstanceOf(Biconditional);
        });

        it('Should consume <-> as biconditional token', () => {
            const lexer = createLexerFromString('<->');

            expect(lexer.next()).toBeInstanceOf(Biconditional);
        });

        it('Should throw error if only < was found', () => {
            const lexer = createLexerFromString('<');

            expect(() => lexer.next())
                .toThrowError('Expected character: -');
        });

        it('Should throw error if only <- was found', () => {
            const lexer = createLexerFromString('<-');

            expect(() => lexer.next())
                .toThrowError('Expected character: >');
        });
    });

    describe('Parenthesis', () => {
        it('Should consume ( as opening parenthesis token', () => {
            const lexer = createLexerFromString('(');

            expect(lexer.next()).toBeInstanceOf(OpeningParenthesis);
        });

        it('Should consume ) as closing parenthesis token', () => {
            const lexer = createLexerFromString(')');

            expect(lexer.next()).toBeInstanceOf(ClosingParenthesis);
        });
    });

    describe('Name', () => {
        it('Should consume alphanumeric characters as name token', () => {
            const lexer = createLexerFromString('abcXYZ123');

            expect(lexer.next()).toBeInstanceOf(Name);
        });

        it('Should throw error if name token starts with numeric characters', () => {
            const lexer = createLexerFromString('123abc');

            expect(() => lexer.next()).toThrowError('Unexpected character');
        });
    });

    describe('End', () => {
        it('Should consume empty string as end token', () => {
            const lexer = createLexerFromString('');

            expect(lexer.next()).toBeInstanceOf(End);
        });
    });
});
