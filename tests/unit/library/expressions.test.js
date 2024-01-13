import {
    AndExpression, BiconditionalExpression, ConditionalExpression, Expression,
    NameExpression, NotExpression, OrExpression,
} from '../../../src/library/expressions';

describe('Expressions', () => {
    it('Cannot call isEqual without override it', () => {
        const expression = new Expression();

        expect(() => expression.isEqual(expression))
            .toThrowError();
    });

    describe('Name expression', () => {
        it('Should be equal if other expression is a name expression and name is equal', () => {
            const name1 = new NameExpression('abc');
            const name2 = new NameExpression('abc');

            expect(name1.isEqual(name2)).toBeTruthy();
        });

        it('Should not be equal if other expression is a name expression but other name is not equal', () => {
            const name1 = new NameExpression('x');
            const name2 = new NameExpression('y');

            expect(name1.isEqual(name2)).toBeFalsy();
        });

        it('Should not be equal if other expression is not a name expression', () => {
            const expression1 = new NameExpression('x');
            const expression2 = new NotExpression(
                new NameExpression('x')
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });
    });

    describe('Not expression', () => {
        it('Should be equal if other expression is a not expression and its inner expression is equal', () => {
            const not1 = new NotExpression(
                new NameExpression('x')
            );

            const not2 = new NotExpression(
                new NameExpression('x')
            );

            expect(not1.isEqual(not2)).toBeTruthy();
        });

        it('Should not be equal if other expression is a not expression but its inner expression is not equal', () => {
            const not1 = new NotExpression(
                new NameExpression('x')
            );

            const not2 = new NotExpression(
                new NameExpression('y')
            );

            expect(not1.isEqual(not2)).toBeFalsy();
        });

        it('Should not be equal if other expression is not a not expression', () => {
            const expression1 = new NotExpression(
                new NameExpression('x')
            );

            const expression2 = new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });
    });

    describe('And expression', () => {
        it('Should be equal if other expression is a and expression and both sides are equal', () => {
            const expression1 = new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeTruthy();
        });

        it('Should not be equal if other expression is a and expression but left side is not equal', () => {
            const expression1 = new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new AndExpression(
                new NameExpression('x'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is a and expression but right side is not equal', () => {
            const expression1 = new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new AndExpression(
                new NameExpression('a'),
                new NameExpression('x'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is a and expression but both sides are not equal', () => {
            const expression1 = new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new AndExpression(
                new NameExpression('x'),
                new NameExpression('y'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is not a and expression', () => {
            const expression1 = new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new OrExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });
    });

    describe('Or expression', () => {
        it('Should be equal if other expression is a or expression and both sides are equal', () => {
            const expression1 = new OrExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new OrExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeTruthy();
        });

        it('Should not be equal if other expression is a or expression but left side is not equal', () => {
            const expression1 = new OrExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new OrExpression(
                new NameExpression('x'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is a or expression but right side is not equal', () => {
            const expression1 = new OrExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new OrExpression(
                new NameExpression('a'),
                new NameExpression('x'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is a or expression but both sides are not equal', () => {
            const expression1 = new OrExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new OrExpression(
                new NameExpression('x'),
                new NameExpression('y'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is not a or expression', () => {
            const expression1 = new OrExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });
    });

    describe('Conditional expression', () => {
        it('Should be equal if other expression is a conditional expression and both sides are equal', () => {
            const expression1 = new ConditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new ConditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeTruthy();
        });

        it('Should not be equal if other expression is a conditional expression but left side is not equal', () => {
            const expression1 = new ConditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new ConditionalExpression(
                new NameExpression('x'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is a conditional expression but right side is not equal', () => {
            const expression1 = new ConditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new ConditionalExpression(
                new NameExpression('a'),
                new NameExpression('x'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is a conditional expression but both sides are not equal', () => {
            const expression1 = new ConditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new ConditionalExpression(
                new NameExpression('x'),
                new NameExpression('y'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is not a conditional expression', () => {
            const expression1 = new ConditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new BiconditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });
    });

    describe('Biconditional expression', () => {
        it('Should be equal if other expression is a biconditional expression and both sides are equal', () => {
            const expression1 = new BiconditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new BiconditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeTruthy();
        });

        it('Should not be equal if other expression is a biconditional expression but left side is not equal', () => {
            const expression1 = new BiconditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new BiconditionalExpression(
                new NameExpression('x'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is a biconditional expression but right side is not equal', () => {
            const expression1 = new BiconditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new BiconditionalExpression(
                new NameExpression('a'),
                new NameExpression('x'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is a biconditional expression but both sides are not equal', () => {
            const expression1 = new BiconditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new BiconditionalExpression(
                new NameExpression('x'),
                new NameExpression('y'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });

        it('Should not be equal if other expression is not a biconditional expression', () => {
            const expression1 = new BiconditionalExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            const expression2 = new AndExpression(
                new NameExpression('a'),
                new NameExpression('b'),
            );

            expect(expression1.isEqual(expression2)).toBeFalsy();
        });
    });
});
