import Source from '../../../src/library/source';
import Lexer from '../../../src/library/lexer';
import PeekableLexer from '../../../src/library/lexer/peekable';
import Parser from '../../../src/library/parser';

import {
    BiconditionalExpression,
    ConditionalExpression,
    OrExpression,
    NotExpression,
    AndExpression,
    NameExpression,
} from '../../../src/library/expressions';

function createParserFromString (string) {
    return new Parser(new PeekableLexer(new Lexer(new Source(string))));
}

describe('Parser', () => {
    it('Should throw error if end token is not found', () => {
        const parser = createParserFromString('x | y z');

        expect(() => parser.parse()).toThrow('Expected end');
    });

    it('Should throw error if no token is found', () => {
        const parser = createParserFromString('');

        expect(() => parser.parse()).toThrow('Unexpected end');
    });

    it('Should throw error if token was not expected', () => {
        const parser = createParserFromString('a & | c');

        expect(() => parser.parse()).toThrow('Unexpected token');
    });

    describe('Expression', () => {
        it('Should parse biconditional expression', () => {
           const parser = createParserFromString('a <-> b');

           expect(parser.parse()).toEqual(new ConditionalExpression(
               new NameExpression('a'),
               new NameExpression('b'),
           ));
        });

        it('Should parse conditional expression', () => {
            const parser = createParserFromString('x -> y');

            expect(parser.parse()).toEqual(new ConditionalExpression(
                new NameExpression('x'),
                new NameExpression('y'),
            ));
        });

        it('Should parse or expression', () => {
            const parser = createParserFromString('c | d');

            expect(parser.parse()).toEqual(new OrExpression(
                new NameExpression('c'),
                new NameExpression('d'),
            ));
        });

        it('Should parse and expression', () => {
            const parser = createParserFromString('c & d');

            expect(parser.parse()).toEqual(new AndExpression(
                new NameExpression('c'),
                new NameExpression('d'),
            ));
        });

        it('Should parse not expression', () => {
            const parser = createParserFromString('¬ f');

            expect(parser.parse()).toEqual(new NotExpression(
                new NameExpression('f'),
            ));
        });

        it('Should parse parenthesized expression', () => {
            const parser = createParserFromString('(g <-> h)');

            expect(parser.parse()).toEqual(new BiconditionalExpression(
                new NameExpression('g'),
                new NameExpression('h'),
            ));
        });

        it('Should throw error if parenthesized expression was not opened', () => {
            const parser = createParserFromString('a -> b)');

            expect(() => parser.parseParenthesisExpression()).toThrow('Expected opening parenthesis');
        });

        it('Should throw error if parenthesized expression was not closed', () => {
            const parser = createParserFromString('(a -> b');

            expect(() => parser.parseParenthesisExpression()).toThrow('Expected closing parenthesis');
        });

        it('Should parse name expression', () => {
            const parser = createParserFromString('abc');

            expect(parser.parse()).toEqual(new NameExpression('abc'));
        });

        it('Should throw error if name token is not found', () => {
            const parser = createParserFromString('&');

            expect(() => parser.parseNameExpression()).toThrow('Expected name');
        });
    });

    describe('Precedence', () => {
        it('Conditional expression should have precedence over biconditional expression in left side', () => {
            const parser = createParserFromString('a -> b <-> c');

            expect(parser.parse()).toEqual(new BiconditionalExpression(
                new ConditionalExpression(
                    new NameExpression('a'),
                    new NameExpression('b'),
                ),
                new NameExpression('c'),
            ));
        });

        it('Conditional expression should have precedence over biconditional expression in right side', () => {
            const parser = createParserFromString('c <-> a -> b');

            expect(parser.parse()).toEqual(new BiconditionalExpression(
                new NameExpression('c'),
                new ConditionalExpression(
                    new NameExpression('a'),
                    new NameExpression('b'),
                ),
            ));
        });

        it('Or expression should have precedence over conditional expression in left side', () => {
            const parser = createParserFromString('a | b -> c');

            expect(parser.parse()).toEqual(new ConditionalExpression(
                new OrExpression(
                    new NameExpression('a'),
                    new NameExpression('b'),
                ),
                new NameExpression('c'),
            ));
        });

        it('Or expression should have precedence over conditional expression in right side', () => {
            const parser = createParserFromString('c -> a | b');

            expect(parser.parse()).toEqual(new ConditionalExpression(
                new NameExpression('c'),
                new OrExpression(
                    new NameExpression('a'),
                    new NameExpression('b'),
                ),
            ));
        });

        it('And expression should have precedence over or expression in left side', () => {
            const parser = createParserFromString('a & b | c');

            expect(parser.parse()).toEqual(new OrExpression(
                new AndExpression(
                    new NameExpression('a'),
                    new NameExpression('b'),
                ),
                new NameExpression('c'),
            ));
        });

        it('And expression should have precedence over or expression in right side', () => {
            const parser = createParserFromString('c | a & b');

            expect(parser.parse()).toEqual(new OrExpression(
                new NameExpression('c'),
                new AndExpression(
                    new NameExpression('a'),
                    new NameExpression('b'),
                ),
            ));
        });

        it('Not expression should have precedence over and expression', () => {
            const parser = createParserFromString('¬ a & b');

            expect(parser.parse()).toEqual(new AndExpression(
                new NotExpression(
                    new NameExpression('a'),
                ),
                new NameExpression('b'),
            ));
        });

        it('Parenthesized exression should have precedence over any expression', () => {
            const parser = createParserFromString('a & (b | c)');

            expect(parser.parse()).toEqual(new AndExpression(
                new NameExpression('a'),
                new OrExpression(
                    new NameExpression('b'),
                    new NameExpression('c'),
                ),
            ));
        });
    });
});