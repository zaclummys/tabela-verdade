import Interpreter from '../../../src/library/interpreter';
import {
    AndExpression,
    BiconditionalExpression,
    ConditionalExpression,
    NameExpression,
    NotExpression,
    OrExpression
} from '../../../src/library/expressions';
import {BadBinaryExpression, BadExpression, BadUnaryExpression} from '../../stubs/expressions';

describe('Interpreter', () => {
    const interpreter = new Interpreter({
        t: true,
        f: false,
    });

    it('Should evaluate name to true', () => {
        expect(interpreter.evaluate(new NameExpression('t'))).toBeTruthy();
    });

    it('Should evaluate name to false', () => {
        expect(interpreter.evaluate(new NameExpression('f'))).toBeFalsy();
    });

    it('Should throw error if expression is not expected', () => {
        expect(() => interpreter.evaluate(new BadExpression()))
            .toThrowError('Unable to evaluate expression');
    });

    it('Should throw error if unary expression is not expected', () => {
        expect(() => interpreter.evaluate(new BadUnaryExpression(
            new NameExpression('abc')
        )))
            .toThrowError('Unable to evaluate unary expression');
    });

    it('Should throw error if binary expression is not expected', () => {
        expect(() => interpreter.evaluate(new BadBinaryExpression(
            new NameExpression('abc'),
            new NameExpression('xyz'),
        )))
            .toThrowError('Unable to evaluate binary expression');
    });

    describe('Not expression', () => {
        it('Should evaluate not expression to true if inner is false', () => {
            expect(interpreter.evaluate(new NotExpression(
                new NameExpression('f')
            ))).toBeTruthy();
        });

        it('Should evaluate not expression to false if inner is true', () => {
            expect(interpreter.evaluate(new NotExpression(
                new NameExpression('t')
            ))).toBeFalsy();
        });
    });

    describe('And expression', () => {
        it('Should evaluate and expression to true if both sides are true', () => {
            expect(interpreter.evaluate(new AndExpression(
                new NameExpression('t'),
                new NameExpression('t'),
            ))).toBeTruthy();
        });

        it('Should evaluate and expression to false if left is true and right side is false', () => {
            expect(interpreter.evaluate(new AndExpression(
                new NameExpression('t'),
                new NameExpression('f'),
            ))).toBeFalsy();
        });

        it('Should evaluate and expression to false if left is false and right is true', () => {
            expect(interpreter.evaluate(new AndExpression(
                new NameExpression('f'),
                new NameExpression('t'),
            ))).toBeFalsy();
        });

        it('Should evaluate and expression to false if both sides are false', () => {
            expect(interpreter.evaluate(new AndExpression(
                new NameExpression('f'),
                new NameExpression('f'),
            ))).toBeFalsy();
        });
    });

    describe('Or expression', () => {
        it('Should evaluate or expression to true if both sides are true', () => {
            expect(interpreter.evaluate(new OrExpression(
                new NameExpression('t'),
                new NameExpression('t'),
            ))).toBeTruthy();
        });

        it('Should evaluate or expression to true if left is true and right is false', () => {
            expect(interpreter.evaluate(new OrExpression(
                new NameExpression('t'),
                new NameExpression('f'),
            ))).toBeTruthy();
        });

        it('Should evaluate or expression to true if left is false and right is true', () => {
            expect(interpreter.evaluate(new OrExpression(
                new NameExpression('f'),
                new NameExpression('t'),
            ))).toBeTruthy();
        });

        it('Should evaluate or expression to false if both sides are are false', () => {
            expect(interpreter.evaluate(new OrExpression(
                new NameExpression('f'),
                new NameExpression('f'),
            ))).toBeFalsy();
        });
    });

    describe('Conditional expression', () => {
        it('Should evaluate conditional expression to true if both sides are true', () => {
            expect(interpreter.evaluate(new ConditionalExpression(
                new NameExpression('t'),
                new NameExpression('t'),
            ))).toBeTruthy();
        });

        it('Should evaluate conditional expression to false if left side is true and right side is false', () => {
            expect(interpreter.evaluate(new ConditionalExpression(
                new NameExpression('t'),
                new NameExpression('f'),
            ))).toBeFalsy();
        });

        it('Should evaluate conditional expression to true if left is false and right is true', () => {
            expect(interpreter.evaluate(new ConditionalExpression(
                new NameExpression('f'),
                new NameExpression('t'),
            ))).toBeTruthy();
        });

        it('Should evaluate conditional expression to true if both sides are false', () => {
            expect(interpreter.evaluate(new ConditionalExpression(
                new NameExpression('f'),
                new NameExpression('f'),
            ))).toBeTruthy();
        });
    });

    describe('Biconditional expression', () => {
        it('Should evaluate biconditional expression to true if both sides are true', () => {
            expect(interpreter.evaluate(new BiconditionalExpression(
                new NameExpression('t'),
                new NameExpression('t'),
            ))).toBeTruthy();
        });

        it('Should evaluate biconditional expression to false if left side is true and right side is false', () => {
            expect(interpreter.evaluate(new BiconditionalExpression(
                new NameExpression('t'),
                new NameExpression('f'),
            ))).toBeFalsy();
        });

        it('Should evaluate biconditional expression to false if left side is false and right side is true', () => {
            expect(interpreter.evaluate(new BiconditionalExpression(
                new NameExpression('f'),
                new NameExpression('t'),
            ))).toBeFalsy();
        });

        it('Should evaluate biconditional expression to true if both sides are false', () => {
            expect(interpreter.evaluate(new BiconditionalExpression(
                new NameExpression('f'),
                new NameExpression('f'),
            ))).toBeTruthy();
        });
    });
});