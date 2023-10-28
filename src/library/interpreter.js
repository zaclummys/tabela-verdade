import {
    NameExpression,

    UnaryExpression,
    BinaryExpression,

    NotExpression,
    OrExpression,
    AndExpression,

    ConditionalExpression,
    BiconditionalExpression,
} from './expressions';

export default class Interpreter {
    constructor (variables) {
        this.variables = variables;
    }

    evaluate (expression) {
        if (expression instanceof NameExpression) {
            return this.variables[expression.name];
        }

        if (expression instanceof UnaryExpression) {
            const inner = this.evaluate(expression.getInner());

            if (expression instanceof NotExpression) {
                return !inner;
            }

            throw new Error('Unable to evaluate unary expression');
        }

        if (expression instanceof BinaryExpression) {
            const left = this.evaluate(expression.getLeft());
            const right = this.evaluate(expression.getRight());

            if (expression instanceof AndExpression) {
                return left && right;
            }

            if (expression instanceof OrExpression) {
                return left || right;
            }

            if (expression instanceof ConditionalExpression) {
                return !left || right;
            }

            if (expression instanceof BiconditionalExpression) {
                return (left && right) || (!left && !right);
            }

            throw new Error('Unable to evaluate binary expression');
        }

        throw new Error('Unable to evaluate expression');
    }
}