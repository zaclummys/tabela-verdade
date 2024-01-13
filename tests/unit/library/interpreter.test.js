import Interpreter from '~/library/interpreter';

import {
    Expression,
    NameExpression,
    UnaryExpression,
    BinaryExpression, NotExpression, AndExpression, OrExpression, ConditionalExpression, BiconditionalExpression,
} from '~/library/expressions';

export class BadExpression extends Expression {}
export class BadUnaryExpression extends UnaryExpression {}
export class BadBinaryExpression extends BinaryExpression {}

describe('Interpreter', () => {
    const interpreter = new Interpreter(new Map([
        ['truthy', true],
        ['falsy', false],
    ]));

    describe('Name expression', () => {
        it('Should evaluate name to true', () => {
            const value = interpreter.evaluate(new NameExpression('truthy'));

            expect(value).
                toBeTruthy();
        });

        it('Should evaluate name to false', () => {
            const value = interpreter.evaluate(new NameExpression('falsy'));

            expect(value).
                toBeFalsy();
        });

    });

    describe('Not expression', () => {
        it('Should evaluate not expression to true if inner is false', () => {
            expect(interpreter.evaluate(new NotExpression(
                new NameExpression('falsy')
            ))).toBeTruthy();
        });

        it('Should evaluate not expression to false if inner is true', () => {
            expect(interpreter.evaluate(new NotExpression(
                new NameExpression('truthy')
            ))).toBeFalsy();
        });
    });

    describe('And expression', () => {
        it('Should evaluate and expression to true if both sides are true', () => {
            expect(interpreter.evaluate(new AndExpression(
                new NameExpression('truthy'),
                new NameExpression('truthy'),
            ))).toBeTruthy();
        });

        it('Should evaluate and expression to false if left is true and right side is false', () => {
            expect(interpreter.evaluate(new AndExpression(
                new NameExpression('truthy'),
                new NameExpression('falsy'),
            ))).toBeFalsy();
        });

        it('Should evaluate and expression to false if left is false and right is true', () => {
            expect(interpreter.evaluate(new AndExpression(
                new NameExpression('falsy'),
                new NameExpression('truthy'),
            ))).toBeFalsy();
        });

        it('Should evaluate and expression to false if both sides are false', () => {
            expect(interpreter.evaluate(new AndExpression(
                new NameExpression('falsy'),
                new NameExpression('falsy'),
            ))).toBeFalsy();
        });
    });

    describe('Or expression', () => {
        it('Should evaluate or expression to true if both sides are true', () => {
            expect(interpreter.evaluate(new OrExpression(
                new NameExpression('truthy'),
                new NameExpression('truthy'),
            ))).toBeTruthy();
        });

        it('Should evaluate or expression to true if left is true and right is false', () => {
            expect(interpreter.evaluate(new OrExpression(
                new NameExpression('truthy'),
                new NameExpression('falsy'),
            ))).toBeTruthy();
        });

        it('Should evaluate or expression to true if left is false and right is true', () => {
            expect(interpreter.evaluate(new OrExpression(
                new NameExpression('falsy'),
                new NameExpression('truthy'),
            ))).toBeTruthy();
        });

        it('Should evaluate or expression to false if both sides are are false', () => {
            expect(interpreter.evaluate(new OrExpression(
                new NameExpression('falsy'),
                new NameExpression('falsy'),
            ))).toBeFalsy();
        });
    });

    describe('Conditional expression', () => {
        it('Should evaluate conditional expression to true if both sides are true', () => {
            expect(interpreter.evaluate(new ConditionalExpression(
                new NameExpression('truthy'),
                new NameExpression('truthy'),
            ))).toBeTruthy();
        });

        it('Should evaluate conditional expression to false if left side is true and right side is false', () => {
            expect(interpreter.evaluate(new ConditionalExpression(
                new NameExpression('truthy'),
                new NameExpression('falsy'),
            ))).toBeFalsy();
        });

        it('Should evaluate conditional expression to true if left is false and right is true', () => {
            expect(interpreter.evaluate(new ConditionalExpression(
                new NameExpression('falsy'),
                new NameExpression('truthy'),
            ))).toBeTruthy();
        });

        it('Should evaluate conditional expression to true if both sides are false', () => {
            expect(interpreter.evaluate(new ConditionalExpression(
                new NameExpression('falsy'),
                new NameExpression('falsy'),
            ))).toBeTruthy();
        });
    });

    describe('Biconditional expression', () => {
        it('Should evaluate biconditional expression to true if both sides are true', () => {
            expect(interpreter.evaluate(new BiconditionalExpression(
                new NameExpression('truthy'),
                new NameExpression('truthy'),
            ))).toBeTruthy();
        });

        it('Should evaluate biconditional expression to false if left side is true and right side is false', () => {
            expect(interpreter.evaluate(new BiconditionalExpression(
                new NameExpression('truthy'),
                new NameExpression('falsy'),
            ))).toBeFalsy();
        });

        it('Should evaluate biconditional expression to false if left side is false and right side is true', () => {
            expect(interpreter.evaluate(new BiconditionalExpression(
                new NameExpression('falsy'),
                new NameExpression('truthy'),
            ))).toBeFalsy();
        });

        it('Should evaluate biconditional expression to true if both sides are false', () => {
            expect(interpreter.evaluate(new BiconditionalExpression(
                new NameExpression('falsy'),
                new NameExpression('falsy'),
            ))).toBeTruthy();
        });
    });

    describe('Bad expressions', () => {
        it('Should throw error if expression is not expected', () => {
            expect(() => interpreter.evaluate(new BadExpression()))
            .toThrowError('Unable to evaluate expression');
        });

        it('Should throw error if unary expression is not expected', () => {
            expect(() => interpreter.evaluate(new BadUnaryExpression(new NameExpression('abc'))))
            .toThrowError('Unable to evaluate unary expression');
        });

        it('Should throw error if binary expression is not expected', () => {
            expect(() => interpreter.evaluate(new BadBinaryExpression(
                new NameExpression('abc'),
                new NameExpression('xyz'),
            )))
            .toThrowError('Unable to evaluate binary expression');
        });
    });
});
